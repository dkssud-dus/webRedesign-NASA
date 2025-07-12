-----

[README](https://github.com/dkssud-dus/webRedesign-NASA/blob/main/README.md) | [README_en](https://github.com/dkssud-dus/webRedesign-NASA/blob/main/README_en.md)

<br/>

`#RedesignProject` `#GovernmentWebsite` `#Solo` `#DesktopOnly`

# **Website Redesign Project Details:**

### NASA

<br/>
<br/>
<br/>

## Table of Contents

1. [Project Overview](#1-Project-Overview)
1. [Core Features](#2-Core-Features)
1. [Page-wise Features](#3-Page-wise-Features)

</br>
</br>
</br>

-----

## 1. Project Overview

### 1.1. Background

NASA (National Aeronautics and Space Administration) is a globally renowned government agency that has led space exploration and aeronautical technology research. However, the official website does not adequately convey the brand value and symbolism that befits such an organization.

</br>

The current website has the following issues:

</br>

<details>
<summary>View Current Website</summary>

![Current Website](https://github.com/user-attachments/assets/a32a7351-ef3f-4619-ad4e-827daf142238)

</br>
</br>
</br>

</details>

</br>

1. NASA’s mission, vision, and symbolism are not prominently displayed
2. Excessive placement of newsletters, podcasts, and external content (Netflix, etc.)
3. Poor user experience due to disorganized information structure and ordering of main content
4. Static and non-immersive web composition that fails to visually represent the core keyword ‘space’

</br>
</br>
</br>

This project aims to visually emphasize NASA’s **cosmic symbolism and values**, </br>
and improve the information structure so users can more clearly recognize and engage with the brand.

</br>
</br>
</br>

### 1.2. Keywords

1. **Information Structure / Layout Simplification**  
   1.1. Restructure the current complex information layout so users can quickly grasp key information.  
   1.2. Adjust content priorities and boldly remove sections with low necessity.

</br>

2. **Brand Image and Value Enhancement**  
   2.1. Intuitively convey NASA’s influence, symbolism, and vision on the main screen.  
   2.2. Use three.js to express NASA’s space imagery and philosophy in an immersive way.

</br>

3. **Astronaut Leaving Earth**  
   3.1. As a concept for user website immersion, provide visual enjoyment.  
   3.2. Remind users of NASA’s space exploration projects.

</br>
</br>
</br>

-----

## 2. Core Features

### Rotating Earth

1. Insert a rotating Earth model in the main visual, values, and news sections.
2. The Earth’s day/night textures blend harmoniously according to lighting.
3. Clouds and atmosphere rotate together with Earth at different speeds.

</br>
</br>
</br>

### Earth Scale/Position Response to Scrolling

1. The Earth model responds to scrolling by scaling down or changing position values.
2. This feature aligns with the keyword ‘astronaut leaving Earth’.

</br>
</br>
</br>

Core features were implemented using Three.js and JS, with study records (in Korean) as follows:

</br>

1. [Understanding Three.js Basic Concepts - Creating a Rotating Cube](https://buttoned-gibbon-63a.notion.site/Three-js-225f5057cabe80f6afffd428c29402b1?source=copy_link)
2. [Creating a Rotating Earth with Three.js](https://buttoned-gibbon-63a.notion.site/Three-js-225f5057cabe801a8be6f7b72dbbee36?source=copy_link)
3. [Creating a Rotating Earth Using Three.js Shaders](https://buttoned-gibbon-63a.notion.site/Three-js-225f5057cabe80508daceeac924d89a4?source=copy_link)
4. [Implementing Three.js Scroll ↔ Model Events](https://buttoned-gibbon-63a.notion.site/Three-js-22af5057cabe80c4b400ef9ab6159545?source=copy_link)

</br>
</br>
</br>

-----

## 3. Page-wise Features

### 3.1. [Main Page](https://dkssud-dus.github.io/webRedesign-NASA)

-----

### 3.1.1. Header + Main Visual

![1](https://github.com/user-attachments/assets/40fa48b3-73f0-49b1-ba25-9f9b40a922d4)

<br/>

#### Purpose

1. Emphasize NASA’s brand image and main visual.

<br/>

#### Implementation Summary

1. Used Three.js to load Earth model and set camera position close.
2. To emphasize the Earth model, catchphrase/navigation/search box were kept in grayscale colors with minimal visual weight.

<br/>
<br/>
<br/>

### 3.1.2. About - What Does NASA Do?

![2](https://github.com/user-attachments/assets/a143b5b0-26b0-44ab-a246-dc240b5f6c2a)

<br/>

#### Purpose

1. Present NASA’s values and influence in an easily understandable way for users.

<br/>

#### Implementation Summary

1. On scroll, the Earth model from the main visual shrinks and a gradient overlay appears to make text more readable.

<br/>
<br/>
<br/>

### 3.1.3. About Details & Modal

![3-1](https://github.com/user-attachments/assets/1c0460c9-023d-4056-a2d2-910e30dd7678)
<br/>
![3-2](https://github.com/user-attachments/assets/ba022c64-e3ab-461c-99ae-74e1a71a4d39)

#### Purpose

1. A section for detailed examination of NASA’s values and influence, opening as modals to minimize page navigation.

<br/>

#### Implementation Summary

1. On scroll, the Earth model shrinks to show entirely on screen with value and influence keywords arranged in a circle.
2. Clicking each keyword opens a full-screen modal, with return via “Return to NASA Do” at bottom center.  
   2.1. Each keyword has different layouts and overlay configurations.  
   2.2. Modal popups include effects like number count-up and auto-playing videos for visual enhancement.

<br/>
<br/>
<br/>

### 3.1.4. Our Mission

![4](https://github.com/user-attachments/assets/a6ddf179-f1fe-469b-b3c3-62c97e53853a)

<br/>

#### Purpose

1. Section about NASA’s current and future missions, implemented with brief descriptions and full-page images for better understanding.

<br/>

#### Implementation Summary

1. On scroll, the Our Mission section appears from `↑` direction with a full-screen swiper.
2. At this point, section content is implemented to cover the Earth.

<br/>
<br/>
<br/>

### 3.1.5. Notice - Signals From Space

![5](https://github.com/user-attachments/assets/96f28620-dd4b-429d-a736-6bcf8ab3420f)

<br/>

#### Purpose

1. Allow users to view Earth model and NASA news together, with news designed to require user interaction rather than simple bulletin board or album format.

<br/>

#### Implementation Summary

1. On scroll, the progressively shrinking Earth is positioned on the right side for a two-column view of news and Earth.
1. On hovering each news card, the area expands to show full paragraphs with images appearing.

<br/>
<br/>
<br/>

### 3.1.6. Promotion - Join us on our journey

![6](https://github.com/user-attachments/assets/ea73e5dd-24cd-4064-8901-d7c4721e921e)

<br/>

#### Purpose

1. Move the content promotion section from relatively high placement to the bottom while maintaining flow consistency.

<br/>

#### Implementation Summary

1. On scroll, the progressively shrinking Earth is fixed at the top right in a very small size.  
   1.1. This design is inspired by Voyager 1’s “Pale Blue Dot”.  
   1.2. It aims to convey that NASA’s journey will continue and invites users to join that journey.
2. Podcast/Newsletter/NASA + Live are all designed as card formats.

<br/>
<br/>
<br/>

### 3.1.7. Footer + Top Button

![7](https://github.com/user-attachments/assets/2d083111-43a2-4015-91ed-65223148341a)

<br/>

#### Purpose

1. Imprint NASA’s image on users through catchphrase and symbol.

<br/>

#### Implementation Summary

1. Footer is implemented with a three-tier structure of SNS, catchphrase, and symbol.
2. The top button returns to the main visual’s large Earth image at the very top, so it uses a rocket icon meaning “return to Earth”.

<br/>
<br/>
<br/>

-----
