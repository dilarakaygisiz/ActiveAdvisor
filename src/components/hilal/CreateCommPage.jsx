import React, { useState, useEffect } from 'react';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage, 
  // db, 
  uploadData, uploadCommunityData } from '../../config/firebase';  // Update this line
import { MDBBtn, MDBCardImage, MDBInput } from 'mdb-react-ui-kit';
import { doc,setDoc,collection, serverTimestamp,getFirestore } from "firebase/firestore";  // Import Firestore functions
import './CreateCommPage.css';  // Importing new CSS file
import { v4 as uuidv4 } from 'uuid';

function ImageUploader() {
  let db = getFirestore()
  const colletionRef = collection(db, 'communities');
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [name, setName] = useState('');
  const [sportsType, setSportsType] = useState('');
  const [city, setCity] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [progress, setProgress] = useState(0);


  console.log('colletionRef',colletionRef)

  useEffect(() => {
    let completedSteps = 0;
    if (name) completedSteps++;
    if (sportsType) completedSteps++;
    if (city) completedSteps++;
    if (description) completedSteps++;
    if (address) completedSteps++;
    if (imageURL) completedSteps++;
    setProgress(completedSteps);
  }, [name, sportsType, city, description, address, imageURL]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        uploadImageToStorage(file, name, sportsType, city, description, address);  // Send additional data to upload function
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadImageToStorage = (file, name, sportsType, city, description, address) => {
    const storageRef = ref(storage, `images/${file.name}`);
    setUploading(true);
    uploadBytes(storageRef, file)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          console.log("Image URL:", downloadURL);  // Process the URL and additional data here
          console.log("Name:", name, "Sports Type:", sportsType, "City:", city, "Description:", description, "Address:", address);
          setImageURL(downloadURL);
          setUploading(false);
        });
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
        setUploading(false);
      });
  };

  const saveCommunityData = async () => {
    let data = {
      id:uuidv4(),
        name,
        sportsType,
        city,
        description,
        address,
        imageURL,
        createdAt: serverTimestamp(),
        lastUpdate: serverTimestamp(),
      }
    

    try {
      const communityRef = doc(colletionRef, data.id);
      console.log('hit',data,communityRef)
      await setDoc(communityRef, data)
          // .then((res)=> console.log('res',res))
          // .catch((err)=>console.log('err',err));
      alert("Community data saved successfully!")
    } catch (error) {
      console.error('communityRefErr',error);
    }
    
  };

  const removeImage = () => {
    setImage(null);
    setImageURL('');
  };

  return (
    <div className="image-uploader">
      <h2>Create Community</h2>
      <div className="form-group">
        <label htmlFor="name">Community Name</label>
        <MDBInput id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label htmlFor="sportsType">Sports Type</label>
        <MDBInput id="sportsType" type="text" value={sportsType} onChange={(e) => setSportsType(e.target.value)} />
        <label htmlFor="city">City</label>
        <MDBInput id="city" type="text" value={city} onChange={(e) => setCity(e.target.value)} />
        <label htmlFor="description">Description</label>
        <MDBInput id="description" textarea rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
        <label htmlFor="address">Address</label>
        <MDBInput id="address" type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      {image && (
        <div className="image-preview">
          <MDBCardImage src={image} alt="Uploaded Image" className="img-fluid uploaded-image" />
          <MDBBtn color="danger" onClick={removeImage}>Remove Image</MDBBtn>
        </div>
      )}
      <input
        type="file"
        id="file-upload"
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />
      <MDBBtn
        color="info"
        onClick={() => document.getElementById('file-upload').click()}
      >
        Upload Image
      </MDBBtn>
      {uploading && <div className="uploading">Uploading...</div>}
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${(progress / 6) * 100}%` }}>
          <div className="progress-steps">
            <span className={progress > 0 ? "completed" : ""}></span>
            <span className={progress > 1 ? "completed" : ""}></span>
            <span className={progress > 2 ? "completed" : ""}></span>
            <span className={progress > 3 ? "completed" : ""}></span>
            <span className={progress > 4 ? "completed" : ""}></span>
            <span className={progress > 5 ? "completed" : ""}></span>
          </div>
        </div>
      </div>
      <div className={`all-done ${progress === 6 ? 'visible' : ''}`}>All done!</div>
      <button
        className="save-report-btn"
        onClick={saveCommunityData}
      >
        Save Report
      </button>
    </div>
  );
}

export default ImageUploader;
