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

// Remove intro when start quiz is clicked

let startButton = document.getElementById("start-button");
let introContent = document.getElementById("intro");
let quizContent = document.getElementById("quiz");
let result = document.getElementById("result");

startButton.addEventListener("click", function () {

    intro.classList.add("display-none"); // adds display none to intro
    quiz.classList.remove("display-none"); // removes display none from quiz

});


// Multi step form

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

    // function for adding steps
    nextButton.addEventListener("click", function () {

        if (currentStep < steps.length - 1) { // checks if its not the last step
            currentStep++; // Add 1 to currentStep
            showStep(currentStep); // Show next step
            
        } else {
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


// Count score in quiz

function updateScores(stepElement) {
    // Find all inputs in the current step
    let inputs = stepElement.querySelectorAll("input[type='radio'], input[type='checkbox']");
    let selectedValue = null;

    // Check the input value
    inputs.forEach(input => {
        if (input.checked) {
            selectedValue = input;
        }
    });
    
    // Get breeds from data-breeds 
    let breedsToUpdate = selectedValue.dataset.breeds.split(",");

    // Update each breed selected by 1 
    breedsToUpdate.forEach(breedName => {
        let breed = dogBreeds.find(b => b.name === breedName.trim());
        if (breed) {
            breed.score += 1; // Add 1 
        }
    });

    return true; 
}




// Function for showing the results
function displayResults() {
    // Sortera hundraserna baserat på poäng i fallande ordning
    let sortedBreeds = dogBreeds.sort((a, b) => b.score - a.score);

    // Hitta resultatområdet
    let resultContainer = document.getElementById("best-match-content");

    // Generera resultat-HTML
    resultContainer.innerHTML = `<h2>Your Best Match:</h2>
    <ul>
    ${scores.slice(1).map(breed => `<li>${breed.name} (Score: ${breed.score})</li>`).join("")}
    </ul> ` ;

}  