import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import AdminDashboard from './AdminDashboard'; // Import the AdminDashboard component

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async (e) => {
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
  
      // Query the 'users' collection for the provided username
      const usersRef = db.collection('users');
      const querySnapshot = await usersRef.where('username', '==', username).get();
  
      if (!querySnapshot.empty) {
        // User with the provided username exists
        const userDoc = querySnapshot.docs[0];
        const userData = userDoc.data();
        
        if (userData.password === password) {
          // If the passwords match, set loggedIn to true
          setLoggedIn(true);
        } else {
          // Password doesn't match
          setErrorMessage("Incorrect password");
        }
      } else {
        // User not found
        setErrorMessage("User not found");
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  if (loggedIn) {
    // If user is logged in, render AdminDashboard and pass the username as a prop
    return <AdminDashboard username={username} />;
  }
  const content = [
    {
      title: "Admin Login Page",
      description: "For editing the menu and display the current reservations, please enter you username and password."
    }
  ];

  return (
    <div className="flex flex-col justify-center items-center h-screen">
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
            <p className="text-xl leading-relaxed ">{item.description}</p>
          </div>
        ))}
      </div>



      
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="px-3 py-2 border rounded-md focus:outline-none" required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="px-3 py-2 border rounded-md focus:outline-none" required />
        <button type="submit" className="px-4 py-2 bg-[#eba000] text-white rounded-md hover:bg-[#eba100a5] focus:outline-none focus:bg-blue-600">Login</button>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default AdminLogin;
