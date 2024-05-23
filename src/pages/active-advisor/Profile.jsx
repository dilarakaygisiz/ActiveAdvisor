import React from 'react'
import NavbarSec from '../../components/active-advisor/NavbarSec'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import { useState } from 'react';
import { auth } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { storage } from '../../config/firebase.js';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import EditNoteIcon from '@mui/icons-material/EditNote'
import { signOut } from 'firebase/auth';

function Profile() {
  const [editMode, setEditMode] = useState(false);
  const [about, setAbout] = useState({
    occupation: "Web Developer",
    location: "Lives in Antalya",
    hobby: "Amateur Volleyball Player",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAbout((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const toggleEdit = () => {
    setEditMode(!editMode);
  };

  const saveChanges = () => {
    setEditMode(false);
    console.log("Updated About:", about);
  };

  const [image, setImage] = useState("https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
      uploadImage(file);
    }
  };

  const uploadImage = (file) => {
    const storageRef = ref(storage, `profileImages/${file.name}`);
    uploadBytes(storageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((downloadURL) => {
        setImage(downloadURL);
      });
    }).catch((error) => {
      console.error("Error uploading file:", error);
    });
  };

  const [user, isLoading] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate("/LogIn");
    }).catch((error) => {
      console.error("Error during sign out:", error);
    });
  };

  const navigateToCreateCommPage = () => {
    navigate('/CreateCommPage');
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <NavbarSec />
      <div className="gradient-custom-2" style={{ backgroundColor: "#fff" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="9" xl="7">
              <MDBCard>
                <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: "#56858b", height: "270px" }}>
                  <div className="ms-4 mt-5 d-flex flex-column" style={{ width: "150px" }}>
                    <MDBCardImage src={image} alt="Profile Image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: "150px", zIndex: "1" }}/>
                    <input type="file" id="profile-photo-upload" style={{ display: "none" }} onChange={handleImageChange}/>
                    <MDBBtn outline color="dark" style={{ height: "36px", overflow: "visible" }} onClick={() => document.getElementById("profile-photo-upload").click()}>
                      Edit Profile
                    </MDBBtn>
                  </div>
                  <div className="ms-3" style={{ marginTop: "130px" }}>
                    <MDBTypography tag="h5"><div>{user.displayName}</div></MDBTypography>
                    <MDBCardText>Antalya</MDBCardText>
                  </div>
                </div>
                <div className="p-4 text-black" style={{ backgroundColor: "#f8f9fa" }}>
                  <div className="d-flex justify-content-end text-center py-1">
                    <div><MDBCardText className="mb-1 h5">15</MDBCardText><MDBCardText className="small text-muted mb-0">Connections</MDBCardText></div>
                    <div><MDBCardText className="mb-1 h5">4</MDBCardText><MDBCardText className="small text-muted mb-0">Communities</MDBCardText></div>
                  </div>
                </div>
                <MDBCardBody className="text-black p-4">
                  <div className="mb-5">
                    <p className="lead fw-normal mb-1">About</p>
                    <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                      {editMode ? (
                        <>
                          <input type="text" name="occupation" value={about.occupation} onChange={handleInputChange} className="form-control mb-2" />
                          <input type="text" name="location" value={about.location} onChange={handleInputChange} className="form-control mb-2" />
                          <input type="text" name="hobby" value={about.hobby} onChange={handleInputChange} className="form-control mb-2" />
                        </>
                      ) : (
                        <>
                          <MDBCardText className="font-italic mb-1">{about.occupation}</MDBCardText>
                          <MDBCardText className="font-italic mb-1">{about.location}</MDBCardText>
                          <MDBCardText className="font-italic mb-0">{about.hobby}</MDBCardText>
                        </>
                      )}
                    </div>
                    {editMode ? (
                      <>
                        <button onClick={saveChanges} className="btn btn-secondary">Save</button>
                        <button onClick={toggleEdit} className="btn btn-secondary">Cancel</button>
                      </>
                    ) : (
                      <button onClick={toggleEdit} className="btn btn-secondary"><EditNoteIcon/></button>
                    )}
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <MDBCardText className="lead fw-normal mb-0">Joined Events</MDBCardText>
                    <MDBCardText className="mb-0"><a href="#!" className="text-muted">Show all</a></MDBCardText>
                  </div>
                  <button className="btn btn-primary mt-2" onClick={navigateToCreateCommPage}>Create Community</button>
                </MDBCardBody>
              </MDBCard>
              <div>
                <button onClick={handleLogout}>Log Out</button>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  );
}

export default Profile;
