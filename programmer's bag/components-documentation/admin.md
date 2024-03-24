# Admin Components Documentation

## AdminLogin Component

### Overview

The `AdminLogin` component serves as the login page for accessing the admin dashboard. Users can enter their username and password to authenticate and gain access to administrative functionalities.

### State Variables

- `username`: Stores the username entered by the user.
- `password`: Stores the password entered by the user.
- `errorMessage`: Stores error messages to display to the user.
- `loggedIn`: Indicates whether the user is logged in or not.

### Login Functionality

The `handleLogin` function handles the login process. It queries the Firestore database for the provided username, verifies the password, and sets the `loggedIn` state to true if the credentials are correct.

### Rendering Admin Dashboard

If the user is logged in (`loggedIn` is true), the `AdminDashboard` component is rendered, passing the `username` as a prop.

### JSX Structure

The JSX structure consists of elements for displaying a welcome message, a form for entering username and password, and a button for logging in. Error messages are displayed if authentication fails.

## AdminDashboard Component

### Overview

The `AdminDashboard` component is responsible for managing administrative tasks related to menu items and reservations. It provides functionality to add new menu items, view reservations, and view reservations for private events.

### State Variables

- `menuItem`: Stores the title of the menu item being added.
- `itemDescription`: Stores the description of the menu item being added.
- `itemPrice`: Stores the price of the menu item being added.
- `itemType`: Stores the type of the menu item (e.g., dishes, drinks, alcohol).
- `imgSrc`: Stores the URL of the image representing the menu item.
- `reservations`: Stores the reservations made by customers.
- `privateEventReservations`: Stores the reservations made for private events.
- `alertMessage`: Stores success or error messages to display to the user.
- `showAddMenuItem`, `showReservations`, `showPrivateEventReservations`: Boolean variables to control the visibility of different sections in the dashboard.

### Functionality

- Adding Menu Items: Users can add new menu items by filling out a form with the title, description, price, and image URL.
- Viewing Reservations: Users can view reservations made by customers.
- Viewing Private Event Reservations: Users can view reservations made for private events.

### JSX Structure

The JSX structure consists of elements for displaying various sections of the admin dashboard based on user actions.

