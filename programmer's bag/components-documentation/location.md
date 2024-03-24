# Location Component Documentation

## Overview

The `LocationSection` component displays the location information of the restaurant, including a map with the restaurant's location marker, operating hours, parking information, and address.

## LocationMap Component

### Overview

The `LocationMap` component is responsible for rendering the Google Map with the restaurant's location marker.

### Props

- `location`: Object containing the latitude and longitude coordinates of the restaurant.
- `className`: Additional CSS class names to apply to the map container.

### Google Maps Integration

The GoogleMapReact library is used to integrate Google Maps into the component. The component sets the default center and zoom level of the map, as well as disables map dragging, zoom control, and scrollwheel zoom.

### Marker Component

A custom `Marker` component is defined to represent the restaurant's location on the map.

## LocationSection Component

### Overview

The `LocationSection` component is the parent component that encapsulates the location information display.

### Content

- **Map Display**: The component includes the `LocationMap` component to render the map with the restaurant's location marker.
- **Operating Hours**: Displays the operating hours of the restaurant.
- **Parking Information**: Provides information about parking availability.
- **Address**: Shows the address of the restaurant.

### Location Data

The `LocationSection` component defines an example location object with latitude and longitude coordinates.

