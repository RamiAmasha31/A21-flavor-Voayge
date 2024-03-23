import React, { useState } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { uploadBytesResumable } from 'firebase/storage';
// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCCi75-RJeDgMS17C1qE1StBPyUL85QztA",
    authDomain: "resturant-94f15.firebaseapp.com",
    projectId: "resturant-94f15",
    storageBucket: "resturant-94f15.appspot.com",
    messagingSenderId: "59447957183",
    appId: "1:59447957183:web:a14ae5107e9ec34479980a",
    measurementId: "G-KC29EGQM0Q"
  };

// Check if Firebase app is already initialized to prevent re-initialization
  initializeApp(firebaseConfig);


// Firebase services
const storage = getStorage();
const firestore = getFirestore();

const UploadImages = () => {
  const [images, setImages] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (e) => {
    const files = e.target.files;
    setImages(files);
  };

  
  
  const handleUpload = async () => {
    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      const imageName = `image${i + 1}.jpg`;
      const imageRef = ref(storage, imageName);
  
      // Upload image to Firebase Storage
      const uploadTask = uploadBytesResumable(imageRef, image);
  
      // Listen for state changes
      uploadTask.on('state_changed', 
        (snapshot) => {
          // Progress
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setUploadProgress(progress);
        }, 
        (error) => {
          // Error
          console.error('Error uploading image:', error);
        }, 
        async () => {
          // Upload completed successfully
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          // Save the download URL to Firestore
          try {
            const docRef = await addDoc(collection(firestore, 'images'), {
              name: imageName,
              url: downloadURL
            });
            console.log(`Image ${imageName} uploaded and URL saved to Firestore with ID: ${docRef.id}`);
          } catch (error) {
            console.error('Error saving URL to Firestore:', error);
          }
        }
      );
    }
  };
  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Images</button>
      {uploadProgress > 0 && <p>Upload Progress: {uploadProgress}%</p>}
    </div>
  );
};

export default UploadImages;
