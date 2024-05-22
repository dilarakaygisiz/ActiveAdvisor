import React from 'react'
import NavbarSec from '../../components/active-advisor/NavbarSec'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon,  MDBCardHeader, MDBCardTitle } from 'mdb-react-ui-kit';
import { useState } from 'react';
import { auth } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth';
import {storage} from '../../config/firebase.js';
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
    // Here you might send the updated about info to a backend server
  };

  const [image, setImage] = useState(
    "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg"
  );

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
      uploadImage(file); // Call upload function when file is selected
    }
  };

  const uploadImage = (file) => {
    const storageRef = ref(storage, `profileImages/${file.name}`);
    uploadBytes(storageRef, file)
      .then((snapshot) => {
        console.log("Uploaded a blob or file!");
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setImage(downloadURL); // Update image URL with the link from Firebase
        });
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
  };

  const [user, isLoading] = useAuthState(auth);

  // ---- Fotograf ekleme ----------
  // const [image, setImage] = useState(null);
  // const [url, setUrl] = useState(null);

  // const handleImageChange = (e) => {
  //   if (e.target.files[0]) {
  //     setImage(e.target.files[0]);
  //   }
  // };

  // const handleSubmit = () => {
  //   const imageRef = ref(storage, "image");
  //   uploadBytes(imageRef, image)
  //     .then(() => {
  //       getDownloadURL(imageRef)
  //         .then((url) => {
  //           setUrl(url);
  //         })
  //         .catch((error) => {
  //           console.log(error.message, "error getting the image url");
  //         });
  //       setImage(null);
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // };

  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/LogIn");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  // const handleSignOut = useCallback(() => {
  //   signOut(auth).then(()=>{
  //     console.log("Signed Out Successfully!");
  //   }).catch((error)=>{
  //     console.log(error);
  //   })
  // }, []);

  return (
    <div>
      <NavbarSec />

      <div className="gradient-custom-2" style={{ backgroundColor: "#fff" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="9" xl="7">
              <MDBCard>
                <div
                  className="rounded-top text-white d-flex flex-row"
                  style={{ backgroundColor: "#56858b", height: "270px" }}
                >
                  <div
                    className="ms-4 mt-5 d-flex flex-column"
                    style={{ width: "150px" }}
                  >
                    <MDBCardImage
                      src={image}
                      alt="Profile Image"
                      className="mt-4 mb-2 img-thumbnail"
                      fluid
                      style={{ width: "150px", zIndex: "1" }}
                    />
                    <input
                      type="file"
                      id="profile-photo-upload"
                      style={{ display: "none" }}
                      onChange={handleImageChange}
                    />
                    <MDBBtn
                      outline
                      color="dark"
                      style={{ height: "36px", overflow: "visible" }}
                      onClick={() =>
                        document.getElementById("profile-photo-upload").click()
                      }
                    >
                      Edit Profile
                    </MDBBtn>
                  </div>
                  <div className="ms-3" style={{ marginTop: "130px" }}>
                    <MDBTypography tag="h5">
                      <div>{user.displayName}</div>
                    </MDBTypography>
                    <MDBCardText>Antalya</MDBCardText>
                  </div>
                </div>
                <div
                  className="p-4 text-black"
                  style={{ backgroundColor: "#f8f9fa" }}
                >
                  <div className="d-flex justify-content-end text-center py-1">
                    <div>
                      <MDBCardText className="mb-1 h5">15</MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        Connections
                      </MDBCardText>
                    </div>
                    <div className="px-3">
                      <MDBCardText className="mb-1 h5">4</MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        Communities
                      </MDBCardText>
                    </div>
                  </div>
                </div>
                <MDBCardBody className="text-black p-4">
                  <div className="mb-5">
                    <p className="lead fw-normal mb-1">About</p>
                    <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                      {editMode ? (
                        <>
                          <input
                            type="text"
                            name="occupation"
                            value={about.occupation}
                            onChange={handleInputChange}
                            className="form-control mb-2"
                          />
                          <input
                            type="text"
                            name="location"
                            value={about.location}
                            onChange={handleInputChange}
                            className="form-control mb-2"
                          />
                          <input
                            type="text"
                            name="hobby"
                            value={about.hobby}
                            onChange={handleInputChange}
                            className="form-control mb-2"
                          />
                        </>
                      ) : (
                        <>
                          <MDBCardText className="font-italic mb-1">
                            {about.occupation}
                          </MDBCardText>
                          <MDBCardText className="font-italic mb-1">
                            {about.location}
                          </MDBCardText>
                          <MDBCardText className="font-italic mb-0">
                            {about.hobby}
                          </MDBCardText>
                        </>
                      )}
                    </div>
                    {editMode ? (
                      <>
                        <button
                          onClick={saveChanges}
                          className="btn btn-secondary"
                        >
                          Save
                        </button>
                        <button
                          onClick={toggleEdit}
                          className="btn btn-secondary"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <button onClick={toggleEdit} className="btn btn-secondary">
                        <EditNoteIcon/>
                      </button>
                    )}
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <MDBCardText className="lead fw-normal mb-0">
                      Joined Events
                    </MDBCardText>
                    <MDBCardText className="mb-0">
                      <a href="#!" className="text-muted">
                        Show all
                      </a>
                    </MDBCardText>
                  </div>
                  <MDBCard className="mb-5" style={{ borderRadius: "15px" }}>
                    <MDBCardBody className="p-4">
                      <MDBTypography tag="h3">Acro Yoga Class</MDBTypography>
                      <MDBCardText className="small">
                        <MDBIcon fas icon="star text-warning" size="lg" />
                        <span className="mx-2">|</span> Public{" "}
                        <span className="mx-2">|</span> Updated by{" "}
                        <strong>YogaKio</strong> on 11 April , 2021
                      </MDBCardText>
                      <hr className="my-4" />
                      <div className="d-flex justify-content-start align-items-center">
                        <MDBCardText className="text-uppercase mb-0">
                          <MDBIcon fas icon="cog me-2" />{" "}
                          <span className="text-muted small">settings</span>
                        </MDBCardText>
                        <MDBCardText className="text-uppercase mb-0">
                          <MDBIcon fas icon="link ms-4 me-2" />{" "}
                          <span className="text-muted small">program link</span>
                        </MDBCardText>
                        <MDBCardText className="text-uppercase mb-0">
                          <MDBIcon fas icon="ellipsis-h ms-4 me-2" />{" "}
                          <span className="text-muted small">program link</span>{" "}
                          <span className="ms-3 me-4">|</span>
                        </MDBCardText>
                        <a href="#!">
                          <MDBCardImage
                            width="35"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp"
                            alt="avatar"
                            className="rounded-circle me-1"
                            fluid
                          />
                          <MDBCardImage
                            width="35"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp"
                            alt="avatar"
                            className="rounded-circle me-1"
                            fluid
                          />
                          <MDBCardImage
                            width="35"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp"
                            alt="avatar"
                            className="rounded-circle me-1"
                            fluid
                          />
                          <MDBCardImage
                            width="35"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                            alt="avatar"
                            className="rounded-circle me-3"
                            fluid
                          />
                        </a>
                        <MDBBtn outline color="dark" floating size="sm">
                          <MDBIcon fas icon="plus" />
                        </MDBBtn>
                      </div>
                    </MDBCardBody>
                  </MDBCard>

                  <MDBCard className="mb-5" style={{ borderRadius: "15px" }}>
                    <MDBCardBody className="p-4">
                      <MDBTypography tag="h3">
                        Volleyball Tournament
                      </MDBTypography>
                      <MDBCardText className="small">
                        <MDBIcon fas icon="star text-warning" size="lg" />
                        <span className="mx-2">|</span> Public{" "}
                        <span className="mx-2">|</span> Updated by{" "}
                        <strong>VolleyClub</strong> on 11 April , 2021
                      </MDBCardText>
                      <hr className="my-4" />
                      <div className="d-flex justify-content-start align-items-center">
                        <MDBCardText className="text-uppercase mb-0">
                          <MDBIcon fas icon="cog me-2" />{" "}
                          <span className="text-muted small">settings</span>
                        </MDBCardText>
                        <MDBCardText className="text-uppercase mb-0">
                          <MDBIcon fas icon="link ms-4 me-2" />{" "}
                          <span className="text-muted small">program link</span>
                        </MDBCardText>
                        <MDBCardText className="text-uppercase mb-0">
                          <MDBIcon fas icon="ellipsis-h ms-4 me-2" />{" "}
                          <span className="text-muted small">program link</span>{" "}
                          <span className="ms-3 me-4">|</span>
                        </MDBCardText>
                        <a href="#!">
                          <MDBCardImage
                            width="35"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp"
                            alt="avatar"
                            className="rounded-circle me-1"
                            fluid
                          />
                          <MDBCardImage
                            width="35"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp"
                            alt="avatar"
                            className="rounded-circle me-1"
                            fluid
                          />
                          <MDBCardImage
                            width="35"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp"
                            alt="avatar"
                            className="rounded-circle me-1"
                            fluid
                          />
                          <MDBCardImage
                            width="35"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                            alt="avatar"
                            className="rounded-circle me-3"
                            fluid
                          />
                        </a>
                        <MDBBtn outline color="dark" floating size="sm">
                          <MDBIcon fas icon="plus" />
                        </MDBBtn>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
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