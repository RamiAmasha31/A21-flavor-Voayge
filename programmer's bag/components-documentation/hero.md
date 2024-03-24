# HeroSection Component Documentation

## Overview

The `HeroSection` component is responsible for rendering the hero section of the website, showcasing a welcome message and rotating images from a collection stored in Firebase Firestore.

## State Variables

- `currentImage`: Stores the index of the currently displayed image.
- `imageUrls`: Stores an array of URLs for the images fetched from the Firestore database.

## Firebase Configuration

The Firebase configuration object `firebaseConfig` is used to initialize Firebase with the appropriate credentials and settings.

## Fetching Image URLs

The `useEffect` hook is utilized to fetch image URLs from the Firestore collection named 'images'. Upon fetching, the URLs are stored in the `imageUrls` state variable.

## Image Rotation

Another `useEffect` hook is employed to rotate the images displayed in the hero section. The `currentImage` state variable is updated at regular intervals to cycle through the available images.

## Text Content

The hero section also contains text content welcoming users to the website and inviting them to experience a culinary journey like no other.

## JSX Structure

The JSX structure consists of two main sections:
1. Text Content: Displays the welcome message and description.
2. Gallery: Renders the images fetched from Firestore, with a transition effect to switch between images.

