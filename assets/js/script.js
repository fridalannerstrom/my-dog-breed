// set all dog breeds

let dogBreeds = [
    { 
        name: "Labrador", 
        size: "large", 
        score: 0, 
        description: "The Labrador Retriever is a friendly, outgoing, and highly adaptable breed, known for its intelligence, loyalty, and suitability as a family pet or working dog.", 
        img: "assets/images/dog-cocker.webp" 
    },
    { 
        name: "Beagle", 
        size: "medium", 
        score: 0, 
        description: "The Beagle is a small to medium-sized breed known for its friendly personality, strong sense of smell, and playful energy.", 
        img: "assets/images/dog-doodle.webp" 
    },
    { 
        name: "Pug", 
        size: "small", 
        score: 0, 
        description: "The Pug is a small, affectionate breed known for its charming personality, wrinkled face, and adaptability to both small and large households.", 
        img: "assets/images/dog-grand.webp" 
    }
];

// Remove intro when start quiz is clicked

let startButton = document.getElementById("start-button");
let introContent = document.getElementById("intro");
let quizContent = document.getElementById("quiz");
let result = document.getElementById("result");

startButton.addEventListener("click", function () {

    intro.classList.add("display-none"); // adds display none to intro
    quiz.classList.remove("display-none"); // removes display none from quiz

});


// function for multi step form

document.addEventListener("DOMContentLoaded", function () { // Wait for HTML document to load so all classes are available

    // Get relevant HTML elements
    let steps = document.querySelectorAll(".step"); // Gives a list over all steps
    let nextButton = document.getElementById("next-button");
    let prevButton = document.getElementById("prev-button");

    // Get the first step (index 0)
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

    //function for counting points

    function calculatePoints() {
        let currentStepElement = steps[currentStep]; // Get the current step information
        let selectedOption = currentStepElement.querySelector("input[type='radio']:checked", "input[type='checklist']:checked"); // Get the selected value 

        console.log(selectedOption);
    
        if (selectedOption) { // Check if somethings been selected
            let points = selectedOption.dataset.points; // Get the list of points to add to each breed
            let pointsArray = points.split(",").map(Number); // Makes an array of the poinst selected
    
            // Add point to the correct dog breed
            pointsArray.forEach((points, index) => {
                dogBreeds[index].score += points;
            });
    
            console.log(dogBreeds);

        } else {
            alert("Please select an option before proceeding."); // Warning if nothings been selected
        }
    }

    // function for next button
    nextButton.addEventListener("click", function () {

        if (currentStep < steps.length - 1) { // checks if its not the last step
            calculatePoints(); // count points for dog breeds
            currentStep++; // Add 1 to currentStep
            showStep(currentStep); // Show next step
            
        } else {
            calculatePoints(); // count points for dog breeds
            quiz.classList.add("display-none"); // adds display none from quiz
            result.classList.remove("display-none"); // removes display none from result
            displayResults()
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


// function for showing the results

function displayResults() {

    let resultContainer = document.getElementById("best-match-content"); // Get the result container
    let imageContainer = document.getElementById("best-match-image"); // Get the image container

    let maxScore = Math.max(...dogBreeds.map(breed => breed.score)); // Finding the max score
    let bestMatch = dogBreeds.find(breed => breed.score === maxScore); // Finding the breed with max score

    // Create result content
    resultContainer.innerHTML = `<h2>${bestMatch.name}</h2> ` ;
    imageContainer.innerHTML = `<img src="${bestMatch.img}"> ` ;

}  