import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import firebase from 'firebase/compat/app'; // Import firebase core
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCCi75-RJeDgMS17C1qE1StBPyUL85QztA",
  authDomain: "resturant-94f15.firebaseapp.com",
  projectId: "resturant-94f15",
  storageBucket: "resturant-94f15.appspot.com",
  messagingSenderId: "59447957183",
  appId: "1:59447957183:web:a14ae5107e9ec34479980a",
  measurementId: "G-KC29EGQM0Q"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = getFirestore(); // Get Firestore instance

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchImageUrls = async () => {
      try {
        const imagesCollection = collection(firestore, 'images');
        const snapshot = await getDocs(imagesCollection);
        const urls = snapshot.docs.map(doc => doc.data().url);
        setImageUrls(urls);
      } catch (error) {
        console.error('Error fetching image URLs:', error);
      }
    };

    fetchImageUrls();
  }, [firestore]); // Include firestore in the dependency array

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevImage => (prevImage + 1) % imageUrls.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [imageUrls]);

  const content = [
    {
      title: "Welcome to Flavor Voyage",
      description: "Experience a culinary journey like no other."
    }
  ];

  return (
    <div className='bg-black flex flex-col md:flex-row md:py-10 justify-center items-center h-screen w-full'>
      {/* Text content */}
      <div className='text-center text-white md:w-1/2 p-8'>
        {content.map((item, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-4xl font-bold mb-4 overflow-hidden text-[#eba000] ">
              {item.title.split('').map((char, index) => (
                <span
                  key={`${char}-${index}`}
                  className="animate-text-reveal inline-block"
                  style={{ animationDelay: `${0.01 * index}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h2>
            <p className="text-lg leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
      {/* Gallery */}
      <div className="flex justify-center items-center w-screen h-screen md:w-1/2">
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Image ${index + 1}`}
            className={`w-full h-full rounded-2xl object-cover transition-opacity pr-2 pl-2 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
            style={{ display: index === currentImage ? 'block' : 'none' }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
