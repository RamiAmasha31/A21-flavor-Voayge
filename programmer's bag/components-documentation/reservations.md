## PrivateEventsForm Component

### Description:
The `PrivateEventsForm` component is responsible for handling reservations for private events. It includes a form where users can input their name, email, phone number, event type, and the number of people attending. Upon submission, the form data is sent to a Firestore database for storage. If the restaurant's capacity is full for the specified time, an alert is displayed to the user.

### Props:
None

### State:
- **formData**: An object containing the form field values.
- **showAlert**: A boolean value indicating whether to show the alert modal.
- **alertMessage**: A string containing the message to be displayed in the alert modal.

### Methods:
- `handleInputChange`: Handles changes in form input fields and updates the formData state accordingly.
- `handleSubmit`: Handles form submission. It validates the form data, checks the restaurant's capacity, and submits the data to Firestore.
- `handleAlertClose`: Closes the alert modal.

---

## ReservationFormFields Component

### Description:
The `ReservationFormFields` component renders input fields for the reservation form, including name, email, and phone number.

### Props:
- **formData**: An object containing the form field values.
- **handleInputChange**: A function to handle changes in form input fields.

### State:
None

### Methods:
None

---

## ReservationsForm Component

### Description:
The `ReservationsForm` component is similar to the `PrivateEventsForm` but is specifically designed for general reservations. It includes a form where users can input their name, email, phone number, and the number of people attending. Upon submission, the form data is sent to a Firestore database for storage. If the restaurant's capacity is full for the specified time, an alert is displayed to the user.

### Props:
None

### State:
- **formData**: An object containing the form field values.
- **showAlert**: A boolean value indicating whether to show the alert modal.
- **alertMessage**: A string containing the message to be displayed in the alert modal.

### Methods:
- `handleInputChange`: Handles changes in form input fields and updates the formData state accordingly.
- `handleSubmit`: Handles form submission. It validates the form data, checks the restaurant's capacity, and submits the data to Firestore.
- `handleAlertClose`: Closes the alert modal.

---

### Additional Notes:
- These components require Firebase configuration to connect to Firestore for data storage.
- They utilize CustomAlertModal component for displaying alerts to the user.
- Form input validation can be added for better user experience and data integrity.
- Styling classes are used for layout and design. Adjustments can be made according to the project's styling requirements.
