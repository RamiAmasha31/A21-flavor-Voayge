import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import '../../styles/card.css'
const Alcohol = ({theme}) => {
  const [alcohols, setAlcohols] = useState([]);
  const [newAlcohol, setNewAlcohol] = useState({
    title: '',
    description: '',
    price: '',
    imgSrc: ''
  });

  useEffect(() => {
    const fetchAlcohols = async () => {
      try {
        const firebaseConfig = {
          apiKey: "AIzaSyCCi75-RJeDgMS17C1qE1StBPyUL85QztA",
          authDomain: "resturant-94f15.firebaseapp.com",
          projectId: "resturant-94f15",
          storageBucket: "resturant-94f15.appspot.com",
          messagingSenderId: "59447957183",
          appId: "1:59447957183:web:a14ae5107e9ec34479980a",
          measurementId: "G-KC29EGQM0Q"
        };

        firebase.initializeApp(firebaseConfig);
        const db = firebase.firestore();
        const alcoholCollection = db.collection('menu_alcohol');
        const snapshot = await alcoholCollection.get();
        const alcoholData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setAlcohols(alcoholData);
      } catch (error) {
        console.error('Error fetching alcohol:', error);
      }
    };

    fetchAlcohols();
  }, []);

  const handleInputChange = (e) => {
    setNewAlcohol({
      ...newAlcohol,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddAlcohol = async (e) => {
    e.preventDefault();
    try {
      const firebaseConfig = {
        apiKey: "AIzaSyCCi75-RJeDgMS17C1qE1StBPyUL85QztA",
        authDomain: "resturant-94f15.firebaseapp.com",
        projectId: "resturant-94f15",
        storageBucket: "resturant-94f15.appspot.com",
        messagingSenderId: "59447957183",
        appId: "1:59447957183:web:a14ae5107e9ec34479980a",
        measurementId: "G-KC29EGQM0Q"
      };

      firebase.initializeApp(firebaseConfig);
      const db = firebase.firestore();
      const alcoholCollection = db.collection('menu_alcohol');
      await alcoholCollection.add(newAlcohol);
      // Update local state to include the new alcohol item
      setAlcohols([...alcohols, newAlcohol]);
      // Clear the form fields
      setNewAlcohol({
        title: '',
        description: '',
        price: '',
        imgSrc: ''
      });
    } catch (error) {
      console.error('Error adding alcohol:', error);
    }
  };

  return (
    <div className={` ${theme === 'light' ? 'light-card' : 'dark-card'}  min-h-screen flex flex-col justify-center items-center py-32 px-4 md:py-16 md:px-8 sm:py-40`}>
      <h2 className="text-center text-2xl font-semibold mb-4 ">Alcohol</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {alcohols.map(dish => (
          <div key={dish.id} className="  rounded-md shadow-md p-4 transition duration-300 ease-in-out transform hover:scale-105 ">
            <img src={dish.imgSrc} alt={dish.title} className="w-full h-96 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-center">{dish.title}</h3>
            <p className="-300 mb-2">{dish.description}</p>
            <p className=" font-bold text-center">${dish.price}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Alcohol;
