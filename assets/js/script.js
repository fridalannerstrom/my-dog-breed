// set all dog breeds

let dogBreeds = [
    { 
        name: "Labrador", 
        size: "large", 
        score: 0, 
        description: "The Labrador Retriever is a friendly, outgoing, and highly adaptable breed, known for its intelligence, loyalty, and suitability as a family pet or working dog.", 
        img: "https://example.com/labrador.jpg" 
    },
    { 
        name: "Beagle", 
        size: "medium", 
        score: 0, 
        description: "The Beagle is a small to medium-sized breed known for its friendly personality, strong sense of smell, and playful energy.", 
        img: "https://example.com/beagle.jpg" 
    },
    { 
        name: "Pug", 
        size: "small", 
        score: 0, 
        description: "The Pug is a small, affectionate breed known for its charming personality, wrinkled face, and adaptability to both small and large households.", 
        img: "https://example.com/pug.jpg" 
    }
];

// Multi step form

document.addEventListener("DOMContentLoaded", function () { // Wait for HTML document to load so all classes are available

    // Get relevant HTML elements
    let steps = document.querySelectorAll(".step"); // Gives a list over all steps
    let nextButton = document.getElementById("next-button");
    let prevButton = document.getElementById("prev-button");

    // Get the first step
    let currentStep = 0; 

    // Show/hide step based on "currentStep", adding active class to current step
    function showStep(stepIndex) { // parameter stepIndex gives the number of the current step
        steps.forEach((step, index) => { // forEach goes through each step, index shows number for relevant step
            if (index === stepIndex) { 
                step.classList.add("active"); // adds active class to current step
            } else {
                step.classList.remove("active"); // removes active class from non current step
            }
        });

    prevButton.style.display = stepIndex === 0 ? "none" : "inline-block"; // Hide prev button from first question
    nextButton.textContent = stepIndex === steps.length - 1 ? "Submit" : "Next"; // Changes from "next" to "submit" on last step
    }

    // function for adding steps
    nextButton.addEventListener("click", function () {
        if (currentStep < steps.length - 1) { // checks if its not the last step
            currentStep++; // Add 1 to currentStep
            showStep(currentStep); // Show next step
        } else {
            alert("Form submitted!"); // CHANGE THIS TO A REDIRECT LATER
        }
    });

    // function for going back steps
    prevButton.addEventListener("click", function () {
        if (currentStep > 0) { // checks if its not the first step
            currentStep--; // removes 1 from currentStep
            showStep(currentStep); // Show prev step
        }
    });

    // Show first step
    showStep(currentStep);
});

// Count score with quiz

    //Get the value

    let experience = document.querySelector('input[name="experience"]:checked').value;

    console.log(experience);