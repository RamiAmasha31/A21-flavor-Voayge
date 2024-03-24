# Database Structure and Usage

## Introduction
This document outlines the database structure for the restaurant project built with React. It describes the collections, documents, and fields used in the Firestore database, as well as how these data are utilized in the project.

## Firestore Database Structure

### Collections

1. **menu_dishes**

   - **Description**: Collection to store menu items categorized as dishes.
   - **Fields**:
     - `title`: Title of the dish.
     - `description`: Description of the dish.
     - `price`: Price of the dish.
     - `imgSrc`: URL of the image representing the dish.

2. **menu_drinks**

   - **Description**: Collection to store menu items categorized as drinks.
   - **Fields**:
     - `title`: Title of the drink.
     - `description`: Description of the drink.
     - `price`: Price of the drink.
     - `imgSrc`: URL of the image representing the drink.

3. **menu_alcohol**

   - **Description**: Collection to store menu items categorized as alcoholic beverages.
   - **Fields**:
     - `title`: Title of the alcoholic beverage.
     - `description`: Description of the alcoholic beverage.
     - `price`: Price of the alcoholic beverage.
     - `imgSrc`: URL of the image representing the alcoholic beverage.

4. **reservations**

   - **Description**: Collection to store reservations made by customers.
   - **Fields**:
     - `name`: Name of the customer.
     - `email`: Email of the customer.
     - `phoneNumber`: Phone number of the customer.
     - `numberOfPeople`: Number of people in the reservation.
     - `timestamp`: Timestamp indicating the date and time of the reservation.

5. **privateEventsReservations**

   - **Description**: Collection to store reservations made for private events.
   - **Fields**:
     - `name`: Name of the person organizing the event.
     - `email`: Email of the person organizing the event.
     - `phoneNumber`: Phone number of the person organizing the event.
     - `date`: Date of the event.
     - `timestamp`: Timestamp indicating the date and time of the reservation.
6. **users**
   - **Description**: Collection to store the users usernames and passwords for the resturant admins.
   - **Fields**:
     - `username`: username of the user.
     - `password`: password of the user.

## Usage in Project

- **Menu Items**: The menu items are fetched from the respective collections (`menu_dishes`, `menu_drinks`, `menu_alcohol`) and displayed on the website's menu page.
- **Reservations**: Reservation data from the `reservations` collection are fetched and displayed in the admin dashboard, also the informations about the user reservations saved in this table.
- **Private Event Reservations**: Data from the `privateEventsReservations` collection are fetched and displayed in the admin dashboard, also the informations about the user reservations saved in this table.
- **Admin Login**: The admin username and passwords are saved in `users` collection, and if they are exist then the admin has the possibility to add menu items and to show the existing reservations.

[Database Link](need to add teh link here )
