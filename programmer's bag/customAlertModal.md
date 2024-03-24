## CustomAlertModal Component

### Description:
The `CustomAlertModal` component is a reusable modal component for displaying alert messages to the user. It appears as a dialog box with a message and an "OK" button. When the button is clicked, the modal closes.

### Props:
- **message**: A string containing the message to be displayed in the alert modal.
- **onClose**: A function to handle the closing of the modal when the "OK" button is clicked.

### Example Usage:
```jsx
import React, { useState } from 'react';
import CustomAlertModal from './CustomAlertModal';

const ExampleComponent = () => {
  const [showAlert, setShowAlert] = useState(true);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div>
      <h1>Example Component</h1>
      {showAlert && (
        <CustomAlertModal 
          message="This is an example alert message." 
          onClose={handleCloseAlert} 
        />
      )}
    </div>
  );
};

export default ExampleComponent;
