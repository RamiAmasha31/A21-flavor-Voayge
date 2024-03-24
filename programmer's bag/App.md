## App Component

### Description:
The `App` component is the root component of the application. It renders the main navigation bar (`NavbarWithMegaMenu`) and the active section based on user interaction.

### Component Structure:
- `NavbarWithMegaMenu`: Renders the main navigation bar with a mega menu for navigating different sections of the application.
- Active Section: Renders the currently active section of the application based on user interaction. Initially set to the `HeroSection`.

### State:
- **activeSection**: A state variable used to manage the currently active section of the application. It is initialized with the `HeroSection` component.

### Handlers:
- **handleNavItemClick**: A function passed to the `NavbarWithMegaMenu` component as a prop. It updates the `activeSection` state with the selected section when a navigation item is clicked.

### Example Usage:
```jsx
import React, { useState } from 'react';
import NavbarWithMegaMenu from "./components/navbar/Navbar";
import HeroSection from './components/hero/HeroSection';

export default function App() {
  const [activeSection, setActiveSection] = useState(<HeroSection/>);

  const handleNavItemClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div>
      <NavbarWithMegaMenu onNavItemClick={handleNavItemClick} />
      {activeSection}
    </div>
  );
}
