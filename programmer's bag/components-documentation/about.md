# AboutUsSection Component Documentation

## Overview

The `AboutUsSection` component is responsible for rendering the About Us section of the website. It displays information about the restaurant's story, mission, and invitation to join the culinary adventure.

## Functional Component Definition

The `AboutUsSection` component is defined as a functional component in React using the arrow function syntax.

## Content Definition

The `content` variable holds an array of objects, with each object representing a section of the About Us content. Each object contains a `title` and a `description`.

## JSX Structure

The JSX structure returned by the component consists of a `<section>` element with specific classes for styling purposes. Within this section, a container `<div>` is used to center the content horizontally.

## Mapping Content

The `content` array is mapped over to dynamically render each section. For each item in the content array, a `<div>` element is created containing the title and description.

## Title Animation

The title of each section is animated using CSS classes to achieve a text reveal effect. Each character of the title is wrapped in a `<span>` element, and CSS animations are applied to animate each character sequentially. This animation technique is adapted from [Builder.io's stagger text animation](https://www.builder.io/blog/stagger-text-animation-tailwind).

## Non-Breaking Space

Spaces within the title are replaced with non-breaking space characters (`\u00A0`) to ensure proper spacing and alignment of text.

## Export

Finally, the `AboutUsSection` component is exported as default, allowing it to be imported and used in other parts of the application.
