import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import ReservationFormFields from './ReservationFormFields';
import CustomAlertModal from '../CustomAlertModal'; // Import your customized alert component
import '../../styles/reservations.css'
const ReservationsForm = ({theme}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    numberOfPeople: ''
  });

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(formData);

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

      // Access Firestore collection for reservations
      const reservationsCollection = db.collection('reservations');

      // Check if the total number of people with reservations within the time window exceeds the restaurant's capacity
      const currentTime = new Date();
      const twoHoursAgo = new Date(currentTime.getTime() - 2 * 60 * 60 * 1000); // 2 hours ago
      const checkSnapshot = await reservationsCollection.where('timestamp', '>=', twoHoursAgo).get();
      let totalPeople = 0;
      checkSnapshot.forEach(doc => {
        totalPeople += parseInt(doc.data().numberOfPeople);
      });

      if (totalPeople + formData.numberOfPeople > 300) {
        setAlertMessage('Sorry! The restaurant capacity is full for the next 2 hours. Please choose a different time.');
        setShowAlert(true);
        // Reset the form after successful submission
        setFormData({
          name: '',
          email: '',
          phoneNumber: '',
          numberOfPeople: ''
        });
        return;
      }

      // Add the form data to the Firestore collection
      await reservationsCollection.add({
        ...formData,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });

      setAlertMessage('Your reservation has been confirmed!');
      setShowAlert(true);
      // Reset the form after successful submission
      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        numberOfPeople: ''
      });
    } catch (error) {
      console.error('Error handling Firestore:', error);
      setAlertMessage('An error occurred while processing your reservation. Please try again later.');
      setShowAlert(true);
    }
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  return (
    <div className={`${theme === 'light' ? 'light-reservations' : 'dark-reservations'}  container min-w-full  h-screen  flex flex-col justify-center items-center`}>
      <h2 className="mb-4 text-2xl font-bold ">Reservations</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <ReservationFormFields formData={formData} handleInputChange={handleInputChange} />
        <div className="flex flex-col">
          <label htmlFor="numberOfPeople" className="text-sm font-semibold ">Number of People:</label>
          <input type="number" min="0" id="numberOfPeople" name="numberOfPeople" value={formData.numberOfPeople} onChange={handleInputChange} className="px-3 py-2 border rounded-md focus:outline-none " required />
        </div>
        <button type="submit" className="px-4 py-2  rounded-md  focus:outline-none ">Submit</button>
      </form>
      {showAlert && (
        <CustomAlertModal message={alertMessage} onClose={handleAlertClose} theme={theme}/>
      )}
    </div>
  );
};

export default ReservationsForm;
