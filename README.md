
![Dog breed quiz Mockup](assets/images/documentation/responsive.png)

# Welcome to "Find your ideal dog breed" Quiz!
This quiz is designed to help you discover the perfect dog breed for your lifestyle and personality. Developed by [Sunne Dogcare](https://fridalannerstrom.github.io/dogsitter/), it reflects our belief that choosing a dog is one of the most important decisions a future dog owner can make. By understanding your needs, habits, and preferences, we hope to guide you toward a breed that will thrive in your care.

As a dog sitter, I see firsthand the consequences of impulsive dog purchases. Too often, people choose a breed based on looks, trends, or recommendations from friends without considering the breed’s unique characteristics and compatibility with their lifestyle. While I love caring for these dogs, I can’t help but wish that more owners had made informed decisions from the start.

This quiz is our way of promoting thoughtful dog ownership. By answering a series of fun and insightful questions, you’ll gain a better understanding of which breed aligns with your daily life, ensuring a harmonious and happy relationship between you and your future furry friend.

[Find your paw-fect match with this quiz! 🐾](https://fridalannerstrom.github.io/my-dog-breed/) 

# Table of content

1. [User Experience (UX)](#user-experience-ux)
   - [Goals](#Goals) 
   - [Graphic Design & Color Scheme](#graphic-design--color-scheme) 
   - [UI/UX Design](#uiux-design) 

2. [Features](#features)
   - [Page Elements](#page-elements)
   - [Key Features](#key-features)
   - [Feature Changes](#feature-changes)
   - [Future Features](#future-features)
   
3. [Tools and Technologies](#tools-and-technologies)
   - [Languages](#languages)
   - [Libraries](#libraries)
   - [Development Tools](#development-tools) 
   - [Other Tools](#other-tools)
   
4. [Testing](#testing)
   - [Code validation](#code-validation) 
   - [Browser Compatibility](#browser-compatibility) 
   - [Responsiveness](#responsiveness) 
   - [Pagespeed Insights](#pagespeed-insights) 
   - [User Story Testing](#user-story-testing) 
   - [Bugs](#bugs) 
   - [Goal Testing](#goal-testing) 
   - [Other Testing](#other-testing) 
   - [Unfixed Bugs](#unfixed-bugs) 
   
5. [Deployment](#deployment)
   - [Local Deployment](#local-deployment) 
   - [GitHub Deployment](#github-deployment)
   
6. [Credits](#credits)
   - [Content & Media](#content-media)
   - [Other](#other)
   - [Acknowledgements](#acknowledgements)


---

# User Experience (UX)

## Purpose of the Quiz

This quiz has one simple goal: to help you discover which dog breed is the best match for your lifestyle and personality. There are no distractions, no unnecessary elements, and no clutter — just a clean and straightforward experience. A single clear button invites users to start the quiz, with concise, engaging text to guide them.

While we provide a link back to Sunne Dogcare for those interested, this is not intended to act as an advertisement for the service. The focus remains solely on helping potential dog owners make thoughtful decisions about their future furry companions.

### Target Group:

- **Potential dog owners** - Individuals considering getting a dog but are unsure which breed suits their lifestyle and personality best.
- **First-Time dog owners** - People who have never owned a dog before and need guidance to make an informed decision.
- **Curious dog enthusiasts** - Dog lovers who may already have a dog but are curious about which other breeds might be a good match for them.

### How the quiz achieves its goal
We’ve designed the quiz with simplicity and accessibility in mind, ensuring users can focus entirely on the task at hand. Here’s how:

| Feature | Description | 
| ------- | ----------- | 
| **Bright, Inviting Colors** | We use soft, natural tones to create a welcoming environment. | 
| **Illustrations of beautiful dogs** | Eye-catching visuals enhance the user experience and make the quiz enjoyable. |
| **Bold and clear text** | Short, simple instructions ensure users can easily follow along without confusion. | 
| **Straightforward Call-to-Action** | A single, prominent button directs users to start the quiz. |
| **Clear and Simple Questions** | Designed to be easy to understand, ensuring a smooth flow from start to finish. | 
| **Overview of Top Dog Breed** | After completing the quiz, users are presented with their best match and receive clear, concise information about the breed. | 
| **Discover Additional Matches** | Users can also see their other top three potential breeds for broader insights and more options. | 


## Graphic Design & Color Scheme

The design of this quiz is intentionally simple, with a strong focus on text and illustrations. By avoiding distractions, the user can focus entirely on the content. The overall feel is warm, light, fresh, and trustworthy, brought to life through charming illustrations of various dog breeds.

### Color Scheme

- **Primary Colors:** Warm shades of brown set the tone for the quiz. Brown was chosen for its natural, earthy feel, evoking the outdoors, animals, and a connection to dogs. Many dogs are brown themselves, making this color both symbolic and relatable.
- **Neutral Accents:** Supporting neutral tones provide balance and ensure the content remains the primary focus without overwhelming the user.

Together, these colors create a natural and inviting atmosphere that aligns perfectly with the theme of dog ownership.

 ![Colors](assets/images/documentation/colors.png)

### Fonts

- **Headline Font (Caprasimo):** Large, bold, and eye-catching, this font is used for titles, questions, and results to immediately grab attention. Its slightly playful curves soften the boldness, adding a friendly yet professional tone.
- **Body Text Font (Poppins):** A clean and widely used sans-serif font, chosen for its excellent readability on all devices. It complements the boldness of Caprasimo, ensuring paragraphs and subheadings remain easy to read and visually appealing.

This pairing strikes the perfect balance, guiding the user’s eye naturally from headlines to supporting information.

 ![Fonts](assets/images/documentation/fonts.png)

### Headings, Buttons and Links

- **Caprasimo** for headings (H1, H2)
- **Poppins** for paragraphs and H3 (Poppins used instead of Caprasimo for H3 due to better readability).
- **Links** are styled in brown with an underline, maintaining a cohesive design that aligns with the overall aesthetic.
- **Buttons** Large and brown buttons are used consistently throughout the quiz. Their prominent size and simplicity make them stand out, ensuring users can easily interact with the quiz.

 ![Headings, text and buttons](assets/images/documentation/heading-text-buttons.png)

 ### Icons

A single type of icon, a paw print from [Font Awesome](https://fontawesome.com/) is used to provide visual cues. For example, a breed’s energy level might be represented by five paw prints, with the number of filled paw prints indicating the level of activity. This simple visual system makes it quick and easy for users to interpret important information about each breed.

 ![Icons](assets/images/documentation/icons.png)

### Illustrations

Instead of photographs, the quiz features illustrations of various dog breeds. These illustrations, sourced from [Flaticon.com](https://www.flaticon.com/) and created by [Maxim Kulikov](https://www.flaticon.com/authors/maxim-kulikov), bring a cohesive and playful touch to the design. The illustrations represent each breed accurately while maintaining a unified artistic style, enhancing the overall user experience.

 ![Illustrations](assets/images/documentation/illustrations.png)

## UI/UX Design

The focus of the UI/UX design process for this quiz was to create a versatile and intuitive interface that accommodates different types of questions and results. Since the exact wording of the quiz questions is still being refined, the primary goal was to establish a design framework that supports various question formats. This includes:

| Purpose | Description | 🖥️ Desktop | 💻 Tablet | 📱 Mobile |
| ------- | ----------- | ------- | ------ | ------ |
| **Checkbox questions** | For questions where users can select multiple answers. | ![Index Layout](assets/images/documentation/homepage.png) | ![Index Layout](assets/images/documentation/homepage.png) | ![Index Layout](assets/images/documentation/homepage.png) | 
| **Radio Button question** | Information about services  | ![Index Layout](assets/images/documentation/homepage.png) | ![Index Layout](assets/images/documentation/homepage.png) | ![Index Layout](assets/images/documentation/homepage.png) | 
| **Image-Based answers** | Display of dog-related images | ![Index Layout](assets/images/documentation/homepage.png) | ![Index Layout](assets/images/documentation/homepage.png) | ![Index Layout](assets/images/documentation/homepage.png) | 
| **Text-Based answers with descriptions** | Information about the business | ![Index Layout](assets/images/documentation/homepage.png) | ![Index Layout](assets/images/documentation/homepage.png) | ![Index Layout](assets/images/documentation/homepage.png) | 
| **Text-Based answers without descriptions** | Contact form for inquiries | ![Index Layout](assets/images/documentation/homepage.png) | ![Index Layout](assets/images/documentation/homepage.png) | ![Index Layout](assets/images/documentation/homepage.png) | 

In addition to the question layouts, the quiz consists of three main page elements. Each page is designed for clarity and usability, ensuring a seamless experience. Below is an overview of their purpose:

| Purpose | Description | 🖥️ Desktop | 💻 Tablet | 📱 Mobile |
| ------- | ----------- | ------- | ------ | ------ |
| **Intro page** | Landing page with a clear CTA to start the quiz. | ![Index Layout](assets/images/documentation/homepage.png) | ![Index Layout](assets/images/documentation/homepage.png) | ![Index Layout](assets/images/documentation/homepage.png) | 
| **Result page** | Displays the best match, additional breeds, and key details. | ![Index Layout](assets/images/documentation/homepage.png) | ![Index Layout](assets/images/documentation/homepage.png) | ![Index Layout](assets/images/documentation/homepage.png) | 
| **404** | Error page with a message and navigation back to the main page. | ![Index Layout](assets/images/documentation/homepage.png) | ![Index Layout](assets/images/documentation/homepage.png) | ![Index Layout](assets/images/documentation/homepage.png) | 

The final design for the UI were created using [Adobe XD](https://adobexdplatform.com/). The overall goal was to create a clean, engaging, and accessible design that guides users seamlessly through the quiz while keeping the experience visually appealing and user-friendly. This structure ensures flexibility for adjustments as the content evolves, without compromising the design's functionality or aesthetics.

---


# Features

The website consists of a total of <strong>3 page sections</strong> and <strong>2 pages</strong>.

## Pages

| Page | Purpose | 🖥️ Screenshot |
| ---- | ------- | ----------- |
| **Index** | Serves as the main landing page for the quiz. | ![Index Layout](assets/images/documentation/homepage.png) | 
| **404** | Redirects users from broken links back to index page. | ![Services Layout](assets/images/documentation/services.png) | 

### Sections on index page

| Page section | Purpose | 🖥️ Screenshot |
| ------------ | ------- | ---------- | 
| **Intro** | Welcomes users and introduces the quiz with a clear CTA. | ![Index Layout](assets/images/documentation/homepage.png) | 
| **Quiz** | Displays interactive questions for users to determine their best dog match. | ![Services Layout](assets/images/documentation/services.png) | 
| **Result** | Presents the user's top dog breed match, other breeds and friends breed match | ![Gallery Layout](assets/images/documentation/gallery.png) | 

## Key Elements

### Intro

The Intro section is designed to immediately capture the user's attention and set the tone for the quiz. Here's a breakdown of its key elements:

| Section | Description | 📱 Mobile | 💻 Tablet | 🖥️ Desktop |
| ------- | ----------- | ------ | ------ | ------- |
| **Intro** | The Intro immediately engages users with charming illustrations of various dog breeds, creating a welcoming and relevant atmosphere. A bold title, "Find your ideal dog breed," clearly communicates the purpose of the quiz, while a brief supporting text explains its goal: helping users discover the best dog breed for their lifestyle and personality. The design is centered around a clear call-to-action button, "Start Quiz," which stands out prominently, guiding users to begin their journey effortlessly. | ![Hero mobile](assets/images/documentation/hero-section-mobile.png) | ![Hero Desktop](assets/images/documentation/hero-image.png) | ![CTA Desktop Subpage](assets/images/documentation/cta-section.png) | 

### Quiz

The quiz is designed with a consistent layout to ensure an intuitive and seamless user experience. Each question type is presented in a clear and engaging format, with concise content and a logical flow. To maintain user focus, the design uses minimal distractions while providing visually distinct formats for different question types. Below is a breakdown of the quiz sections:

| Section | Description | 📱 Mobile | 💻 Tablet | 🖥️ Desktop |
| ------- | ----------- | --------- | ------ | ---------- |
| **Text input** | Questions where users provide free-text answers, featuring a clean and simple layout. | ![Hero Mobile Subpage](assets/images/documentation/subpage-hero-mobile.png) | ![Hero Desktop Subpage](assets/images/documentation/subpage-hero-desktop.png) | ![CTA Desktop Subpage](assets/images/documentation/cta-section.png) | 
| **Answers without description** | Questions with clear answer options but no additional descriptions. | ![Intro Mobile Subpage](assets/images/documentation/subpage-intro-mobile.png) | ![Intro Desktop Subpage](assets/images/documentation/subpage-intro-desktop.png) | ![CTA Desktop Subpage](assets/images/documentation/cta-section.png) | 
| **Answers with description** | Questions offering answers with accompanying short descriptions for clarity. | ![CTA Mobile Subpage](assets/images/documentation/cta-section-mobile.png) | ![CTA Desktop Subpage](assets/images/documentation/cta-section.png) | ![CTA Desktop Subpage](assets/images/documentation/cta-section.png) | 
| **Answers with images** | Visual questions where users select from image-based answer options. | ![CTA Mobile Subpage](assets/images/documentation/cta-section-mobile.png) | ![CTA Desktop Subpage](assets/images/documentation/cta-section.png) | ![CTA Desktop Subpage](assets/images/documentation/cta-section.png) | 

### Result

The notification page does not include a hero section; instead, you are presented with the relevant information immediately. This page is designed to deliver messages without the need for persuasive content or elaborate design elements. The text is written in a playful, dog-themed tone to stay true to the brand and maintain a fun, engaging connection to the dog care business.

| Section | Description | 📱 Mobile | 💻 Tablet | 🖥️ Desktop |
| ------- | ----------- | --------- | ------ | ---------- |
| **Text input** | Questions where users provide free-text answers, featuring a clean and simple layout. | ![Hero Mobile Subpage](assets/images/documentation/subpage-hero-mobile.png) | ![Hero Desktop Subpage](assets/images/documentation/subpage-hero-desktop.png) | ![CTA Desktop Subpage](assets/images/documentation/cta-section.png) | 
| **Answers without description** | Questions with clear answer options but no additional descriptions. | ![Intro Mobile Subpage](assets/images/documentation/subpage-intro-mobile.png) | ![Intro Desktop Subpage](assets/images/documentation/subpage-intro-desktop.png) | ![CTA Desktop Subpage](assets/images/documentation/cta-section.png) | 
| **Answers with description** | Questions offering answers with accompanying short descriptions for clarity. | ![CTA Mobile Subpage](assets/images/documentation/cta-section-mobile.png) | ![CTA Desktop Subpage](assets/images/documentation/cta-section.png) | ![CTA Desktop Subpage](assets/images/documentation/cta-section.png) | 
| **Answers with images** | Visual questions where users select from image-based answer options. | ![CTA Mobile Subpage](assets/images/documentation/cta-section-mobile.png) | ![CTA Desktop Subpage](assets/images/documentation/cta-section.png) | ![CTA Desktop Subpage](assets/images/documentation/cta-section.png) | 


## Key Features

### Services 

| Section | Description | Mobile | Desktop |
| ------- | ----------- | ------ | ------- |
| **Services** | Section describing our 3 services, including a title, descriptive subtitle, description, price, and a list of key details such as drop-off/pick-up, activities, meals, and location. | ![Services Mobile](assets/images/documentation/services-page-mobile.png) | ![Services Desktop](assets/images/documentation/services-page-desktop.png) | 
| **CTA** | The Services page includes a dedicated CTA box that directs users straight to the booking page. | ![CTA Servoce Mobile](assets/images/documentation/cta-section-service-mobile.png) | ![CTA Service Desktop](assets/images/documentation/cta-section-service.png) | 
| **FAQ** | Frequently asked questions and answers, especially relevant for those booking for the first time. | ![FAQ Mobile](assets/images/documentation/faq-mobile.png) | ![FAQ Desktop](assets/images/documentation/faq-desktop.png) | 

### Gallery 

| Section | Description | Mobile | Tablet | Desktop |
| ------- | ----------- | ------ | ------ | ------- |
| **Gallery** | Gallery section featuring images of happy dogs being cared for, designed to build trust and add a personal touch. | ![Gallery mobile](assets/images/documentation/gallery-section-mobile.png) | ![Gallery Tablet](assets/images/documentation/gallery-section-tablet.png) | ![Gallery Desktop](assets/images/documentation/gallery-section.png) | 

### About

| Section | Description | Mobile | Desktop |
| ------- | ----------- | ------ | ------- | 
| **About Dogsitter** | Section introducing the dog sitter to create a personal and trustworthy connection, including a list of experience details to build trust and confidence. | ![Dogsitter Mobile](assets/images/documentation/about-dogsitter.png) | ![Dogsitter Desktop](assets/images/documentation/about-dogsitter-desktop.png) | 
| **About Dogs/Farm** | Section describing the property and the resident dogs, giving owners a glimpse of who their dog will interact with and the environment where their dog will stay. | ![Dogs/Farm Mobile](assets/images/documentation/about-dog-farm-mobile.png) | ![Dogs/Farm Desktop](assets/images/documentation/about-dog-farm-desktop.png) | 

### Contact/Bookings

| Section | Description | Mobile | Desktop |
| ------- | ----------- | ------ | ------- | 
| **Booking form** | Booking form for easily scheduling dog care, with required fields for name, email, service, drop-off, and pick-up. The message field is optional. Upon submission, users are redirected to a thank you page confirming their booking. | ![Booking Mobile](assets/images/documentation/booking-mobile.png) | ![Hero Desktop](assets/images/documentation/booking-desktop.png) | 

## Feature Changes

Throughout the development process, changes were made to the design, content, sections, and features to enhance usability and clarity. These adjustments were necessary to ensure a better user experience. The changes are listed below.

⚠️ Some images on the live site differ from those in the mockup. These changes were made based on personal preference during the development process, as I felt the new images were a better fit. The specific image changes are not listed below.

| Action | Section | Reason | Before | After |
| ------ | ------- | ------ | ------ | ----- |
| **🗑️Removal** | Contact form | Having two contact forms was unnecessary and caused confusion. The contact form was removed and replaced with a CTA box. Now, only one form remains: the booking form. | ![Old Contact Form](assets/images/documentation/contact-form.png) | ![CTA-box](assets/images/documentation/cta-section.png) | 
| **‍🎨Design Change** | Service Page | The service section felt cluttered with too many boxes. The large yellow box was removed, and instead, individual boxes were used for the list, resulting in a cleaner and lighter design. On desktop, a thin grey border was added to better separate the different sections. | ![Old Services](assets/images/documentation/services-old.png) | ![New Services](assets/images/documentation/services-page-desktop.png) | 
| **🗑️Removal** | Service Button | Having a separate CTA button for booking each service was unnecessary, as the same booking form applies to all services. | ![Old Services Button](assets/images/documentation/services-old.png) | ![New Services Button](assets/images/documentation/services-page-desktop.png) | 
| **✅Addition** | List | The section about the dog sitter felt dull with only paragraph text. A list was added to clearly highlight the sitter's experience, making the information more engaging and easier to absorb. | ![Old About](assets/images/documentation/old-about-dogsitter.png) | ![New About](assets/images/documentation/about-dogsitter-desktop.png) | 
| **‍🎨Design Change** | Gallery | The original plan was to display two columns for gallery on the homepage for mobile devices. However, the images appeared too small, so I adjusted the layout to a single-column. | ![Old Gallery](assets/images/documentation/gallery-mockup.png) | ![New Gallery](assets/images/documentation/gallery-live.png) | 
| **✅Addition** | Contact | Realized that adding contact information to the contact page was essential, of course. | ![Old Booking](assets/images/documentation/booking-without-contact.png) | ![New Booking](assets/images/documentation/booking-with-contact.png) | 
| **‍🎨Design Change** | Navigation | Navigation dropdown changed fron left aligned text to right aligned text for easier thumb use on mobile | ![Old Navigation](assets/images/documentation/navigation-mockup.png) | ![New Navigation](assets/images/documentation/navigation-dropdown.png) | 
| **✅Addition** | Gallery | Added a link to see more images below the gallery on homepage | ![Old Gallery](assets/images/documentation/gallery-mockup.png) | ![New Gallery](assets/images/documentation/gallery-live.png) | 

## Future Features
Here are some ideas for expanding the website in future development phases. 

1. **Booking calendar:** Implement a calendar system to allow users to select dates and times more intuitively, while also viewing availability. For example, fully booked days could be marked in red and nearly full days in orange. Additionally, a feature to search for availability on specific dates would enhance the booking process.

2. **Review system:** Introduce a review system where dog owners can leave feedback after using the service. This could include star ratings and written reviews displayed on the website. An automated email could be sent to clients after they pick up their dog, encouraging them to submit a review.

3. **Live chat/Customer support:** Add a chat feature or support system, allowing users to ask quick questions or get in touch directly from the website, ensuring faster communication and customer service.

4. **Owner updates and reports:** Develop a system for sending updates, pictures, and reports directly to dog owners. This would allow tracking of activities like walks and feeding, keeping owners informed about their dog’s care in real-time.

5. **Online payment integration:** Enable users to complete payments directly through the website during the booking process, offering a seamless and convenient checkout experience.

6. **Booking calendar for new clients:** Allowing new clients to schedule an initial one-hour meeting. This meeting gives new dog owners the chance to meet me, interact with my dogs, and get a sense of how the service operates.

---

# Tools and Technologies

## Languages
This project is built using [HTML](https://en.wikipedia.org/wiki/HTML) and [CSS](https://en.wikipedia.org/wiki/CSS).

## Libraries
- **[Google Fonts](https://fonts.google.com/)**  
  Used for the fonts *Work Sans* and *Lora*.

- **[Font Awesome](https://fontawesome.com/)**  
  Used for icons.

## Development Tools
- **[GitHub](https://github.com/)**  
  Used for online code storing and deployment.

- **[Gitpod](https://fontawesome.com/)**  
  IDE used for development.

## Other Tools
- **[Favicon Generator](https://www.favicon-generator.org/)**  
  Used for generating favicon versions.

- **[Google Developer Tools](https://developer.chrome.com/docs/devtools)**  
  Used for testing and identifying my code

- **[Browserling](https://www.browserling.com/)**  
  Used for testing the website in different browsers

- **[WAVE](https://wave.webaim.org/)**  
  Used to test accessibility in design and website.

---

## Testing

### Code validation

I have validated my HTML code using **[HTML W3C Validator](https://validator.w3.org/)** and CSS code using **[CSS Jigsaw Validator](https://validator.w3.org/)**

#### HTML

| Page      | Status   | Screenshot | 
| --------- | -------- | ---------- | 
| Homepage  | ✅ Pass | ![Home-w3](assets/images/documentation/index-w3.png) | 
| Services  | ✅ Pass | ![Services-w3](assets/images/documentation/services-w3.png) | 
| Gallery   | ✅ Pass | ![Gallery-w3](assets/images/documentation/gallery-w3.png) | 
| About     | ✅ Pass | ![About-w3](assets/images/documentation/about-w3.png) | 
| Contact   | ✅ Pass | ![Contact-w3](assets/images/documentation/contact-w3.png) | 
| Thank you | ✅ Pass | ![Thankyou-w3](assets/images/documentation/thankyou-w3.png) | 
| 404       | ✅ Pass | ![404-w3](assets/images/documentation/404-w3.png) | 

#### CSS

| File      | Status   | Screenshot | 
| --------- | -------- | ---------- | 
| style.css  | ✅ Pass | ![CSS Validation](assets/images/documentation/css-sunne-dogcare.png) | 

### Browser Compatibility

The website has been tested using **[Browserling](https://www.browserling.com/)** to ensure functionality across a variety of web browsers. It has been confirmed to work on the following browsers:

- ✅ Chrome
- ✅ Safari
- ✅ Opera
- ✅ Firefox
- ✅ Brave
- ✅ Edge

### Responsiveness

Throughout the project, I prioritized responsive design by continuously testing with Google Developer Tools. Each new feature was tested on both small and large screen sizes to ensure optimal performance. I followed a mobile-first approach, carefully considering both extra-large and extra-small screens. I tested all available screen sizes in Google Developer Tools, and the website displays correctly across all devices.

### Pagespeed Insights

There are some performance issues across all pages, some of them are due to the large size of images. Future development of the site should focus on optimizing images for the web.

| Page      | Mobile   | Desktop | 
| --------- | -------- | ---------- | 
| Homepage  | ![Page Insights Mobile Homepage](assets/images/documentation/pi-home-mobile.png) | ![Page Insights Desktop Homepage](assets/images/documentation/pi-home-desktop.png) | 
| Services  | ![Page Insights Mobile Services](assets/images/documentation/pi-services-mobile.png) | ![Page Insights Desktop Services](assets/images/documentation/pi-services-desktop.png) | 
| Gallery   | ![Page Insights Mobile Gallery](assets/images/documentation/pi-gallery-mobile.png) | ![Page Insights Desktop Gallery](assets/images/documentation/pi-gallery-desktop.png) | 
| About     | ![Page Insights Mobile About](assets/images/documentation/pi-about-mobile.png) | ![Page Insights Desktop About](assets/images/documentation/pi-about-desktop.png) | 
| Contact   | ![Page Insights Mobile Contact](assets/images/documentation/pi-contact-mobile.png) | ![Page Insights Desktop Contact](assets/images/documentation/pi-contact-desktop.png) | 
| Thank you | ![Page Insights Mobile Thank You](assets/images/documentation/pi-thankyou-mobile.png) | ![Page Insights Desktop Thank You](assets/images/documentation/pi-thankyou-desktop.png) | 
| 404       | ![Page Insights Mobile 404](assets/images/documentation/pi-404-mobile.png) | ![Page Insights Desktop 404](assets/images/documentation/pi-404-desktop.png) | 

### User Story Testing

| User Story      | User path   | Screenshot | 
| --------- | -------- | ---------- | 
| **As a dog owner,** I want to easily find information about the different dog-sitting services available, so I can choose the best option for my dog. | *Homepage > Services* | ![Service Page](assets/images/documentation/us-service.png) | 
| **As a potential dog owner,** I want to learn about the dog-sitter and see photos of the farm, so I can feel confident that I have a reliable dog-sitting solution in place before deciding to get a dog. | *Homepage > About* | ![About Page](assets/images/documentation/us-about.png) | 
| **As a busy dog owner,** I want a simple and clear booking process, so I can quickly schedule dog-sitting without filling out unnecessary forms. | *Homepage > Contact & Booking* | ![Booking Page](assets/images/documentation/us-contact.png) | 
| **As a first-time visitor to the site,** I want to see the happy and welcoming environment through photos and descriptions, so I feel reassured about leaving my dog in good hands. | *Homepage > Gallery* | ![Gallery Page](assets/images/documentation/us-gallery.png) | 
| **As a returning customer,** I want easy access to the booking page, so I can quickly schedule a service I already know and trust. | *Homepage > Contact & Booking* | ![Booking Page](assets/images/documentation/us-contact.png) | 
| **As a dog owner,** I want to clearly see the prices for each service, so I can plan my budget without surprises. | *Homepage > Services* | ![Services Page](assets/images/documentation/us-service.png) | 
| **As a dog owner,** I want to follow the dog-sitter’s social media to stay updated on the services and see more of the dogs being cared for, so I can feel connected to the service. | *Homepage (footer)* | ![Homepage (footer)](assets/images/documentation/us-footer.png) | 
| **As a dog owner,** I want to feel confident that my dog is in safe hands, so I can relax knowing they are well cared for while I'm away. | *Homepage > About* | ![About Page](assets/images/documentation/us-about.png) | 

### Bugs

| Bug       | Screenshot | Description | Solution  |
| --------- | --------- | ---------- | ---------- | 
| Contrast Issue | ![Contrast in navigation](assets/images/documentation/low-contrast.png) | Low contrast on the active navigation link in the header resulted in poor accessibility. Found by testing site in [WAVE](https://wave.webaim.org/). | Improved accessibility by changing the active link color to a darker green and adding an underline. | 
| Contrast Issue | ![Contrast in topic tag](assets/images/documentation/contrast-issue-2.png) | Low contrast on the topic tag caused poor accessibility, making the text hard to read, especially for users with visual impairments. Found by testing site in [WAVE](https://wave.webaim.org/). | Changed the tag’s background color to a darker green. | 
| Contrast Issue | ![Contrast in CTA box](assets/images/documentation/background-issue.png) | Low contrast between white text and image background when testing site in [WAVE](https://wave.webaim.org/). | Applied a dark overlay with CSS instead of manually darkening the background in Photoshop, improving text visibility and accessibility. | 
| Responsive Issue | ![Form bugg on small screens](assets/images/documentation/booking-form-small-screen.png) | The booking form displayed incorrectly on smaller screens, losing padding and causing a horizontal scroll due to oversized input fields. | Added responsive CSS for smaller screens, reducing padding and font size for form inputs. Also adjusted padding on the form container for better layout on mobile devices. | 
| Responsive Issue | ![CTA bugg on small screens](assets/images/documentation/button-bugg.png) | The CTA button was getting cut off on smaller screens, resulting in awkward line breaks and poor user experience. | Reduced the button size and adjusted padding within the CTA box for smaller screens to prevent the cutoff and ensure proper alignment. | 
| Responsive Issue | ![Overflow issue on small screens](assets/images/documentation/footer-bugg.png) | On screens smaller than 350px, the body content shrank, but an overflow issue caused the content to not align properly on the right side. | Identified the footer logo as the cause. Applied a max-width and width:100% to correct this. | 

### Goal testing
Let’s test if the website meets the goals we set at the beginning, both the user’s goals and the business objectives.

| Goal      | Result | Notes |
| --------- | ------ |------ |
| **User Goals:** Read about services | ✅ Pass | Clear information about services, process and cost |
| **User Goals:** Book a service | ✅ Pass | Simple booking form thats easy to find due to CTAs on almost all pages |
| **User Goals:** Read about Sunne Dogcare | ✅ Pass | Clear navigation to about page with information about dogsitter etc. |
| **Business Goals:** Provide clear information about services | ✅ Pass | Narrowed down to three clear and easy-to-understad services |
| **Business Goals:** Enable easy booking | ✅ Pass | Booking form with easy navigation and easy to fill out form |
| **Attract new customers** Attract new customers | ⚠️ Almost Pass | The website does attract new customers, but the content could be more directly aimed at new customers than it currently is, with special offer or something like that |
| **Business Goals:** Build trust | ✅ Pass | Lots of happy photos and personal information that builds trust |

### Other testing

| Test       | Notes  | Screenshot | 
| ---------- | ------ | ---------- | 
| **Form submission testing**       | Tested the booking form with method="POST" and sent correct data. Changed it to a thank you page later on.  | ![Form Submission](assets/images/documentation/form-submission.png) | 

### Unfixed Bugs

None that I know of - feel free to tell me if you find any!

---

## Deployment

### Local Deployment
To run this project locally, follow these basic steps:

Requirements:
- An IDE of your choice 
- Git
- A web browser

**Local Instructions:**

1. Clone the repository by running the following command in your terminal

```bash
git clone https://github.com/YOUR-USERNAME/your-repository.git
```

2. Navigate to the folder where the repository was cloned.

```bash
cd your-repository
```

3. Open the folder in your IDE.

4. Launch the project by opening the index.html file in your preferred web browser.

### GitHub Deployment

The project is deployed on GitHub Pages. To deploy your own version, follow these steps:

1. Log in to your GitHub account. navigate to https://github.com/fridalannerstrom/dogsitter
2. You can set up your own repository and copy or clone it, or you fork the repository.
3. GitHub pages will update from the master branch by default.
4. Go to the Settings page of the repository.
5. Scroll down to the Github Pages section.
6. Select the Master Branch as the source and Confirm the selection.
7. Wait a minute or two and it should be live for viewing. 

---

## Credits

### Content & Media

| Source      | Notes   | 
| ----------- | ---------- | 
| [Unsplash](https://unsplash.com/)  | Photos used throughout the website (except for my own) | 
| [ChatGPT](https://chatgpt.com/)  | Assisted with content creation and providing English wording for the README documentation | 
| [Hot Mess by Sam Parrett](https://www.behance.net/gallery/79231099/Hot-Mess-SVG-Font)  | A fantastic font used for branding my Dog Care business | 
| [Mockup Generator](https://techsini.com/multi-mockup/index.php)  | Used for generating mockup image in this README | 

### Other

| Source      | Notes   | 
| ----------- | ---------- | 
| [CloudConvert](https://cloudconvert.com/) | Converted PNG images to WebP format | 
| [Convertio](https://convertio.co/)  | Converted PNG images to WebP format | 
| [Xconvert](https://www.xconvert.com/ )  | Resize and optimize webp images | 
| [W3Schools ](https://www.w3schools.com/) | Helped refresh my memory on CSS attributes and syntax when needed | 
| [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)  | Introduced me to a structured and meaningful way of writing commit messages, which I adopted halfway through the project | 

### Acknowledgements

- A huge thank you to my mentor, [Rory Patrick](https://github.com/Ri-Dearg), for providing invaluable guidance throughout this project.
- Special thanks to [Code Institute](https://codeinstitute.net/), particularly the "Love Runners" project, for helping me get started with GitHub and guiding me through the project process. 