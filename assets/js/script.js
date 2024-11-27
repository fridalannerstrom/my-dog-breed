// Import dog breeds and questions from seperate js file
import { dogBreeds } from './dogData.js'; 
import { questions } from './questions.js'; 

let startButton = document.getElementById("start-button");
let introContent = document.getElementById("intro");
let quizContent = document.getElementById("quiz");
let result = document.getElementById("result");
let nextButton = document.getElementById("next-button");
let prevButton = document.getElementById("prev-button");
let currentStep = 0;

// Remove intro when start quiz is clicked

startButton.addEventListener("click", function () {

    intro.classList.add("display-none"); // adds display none to intro
    quizContent.classList.remove("display-none"); // removes display none from quiz

});


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


// Generate questions in HTML 

const quizContainer = document.getElementById('questions-container');

questions.forEach((questionObj, questionIndex) => { // Looping through all the questions and giving it an index
    const questionDiv = document.createElement('div'); // Creating a new div
    questionDiv.classList.add('step'); // Giving the div the class step
    if (questionIndex === 0) questionDiv.classList.add('active'); // giving the first div the class active

    const questionHeading = document.createElement('h2'); // Create a heading for the question
    questionHeading.textContent = questionObj.question; // Getting the question from the question object
    questionDiv.appendChild(questionHeading); // Set the text in the h2 heading

    const answers = questionObj.answers; // Get the answer object
    Object.keys(answers).forEach((key, index) => { // Loop through all answer options
        const answer = answers[key]; // Get the answer option

        // Creating the radio button
        const radioInput = document.createElement('input');  // Create input element
        radioInput.type = 'radio'; // Setting the input type
        radioInput.id = `${key}-${questionIndex}`;  // Giving it an id
        radioInput.name = `question-${questionIndex}`; // Giving it a name
        radioInput.dataset.points = JSON.stringify(answer.values); // Get the points for each dog breed to count result
        questionDiv.appendChild(radioInput); // Put this radio button in the question div

        // Creating the label
        const label = document.createElement('label'); // Create the label element
        label.setAttribute('for', `${key}-${questionIndex}`); // Connecting the label with the input id
        label.textContent = answer.text; // Giving the label the answer text
        questionDiv.appendChild(label); // Put the label in the question div

    });

    quizContainer.appendChild(questionDiv); // Put the complete div in the quiz container

});

let steps = document.querySelectorAll(".step"); // Gives a list over all steps after they have been created

    //function for counting points

    function calculatePoints() {
        let currentStepElement = steps[currentStep]; // Get the current step
        let selectedOptions = currentStepElement.querySelectorAll("input[type='radio']:checked"); // Get the selected option
    
        // Check if option has been selected
        if (selectedOptions.length === 0) {
            alert("Please select an option before proceeding."); // Warning if nothing has been selected
            return false; // Stop function
        }
    
        // Go through all options
        selectedOptions.forEach(option => {
            // Get score from data point in object
            const points = JSON.parse(option.dataset.points);
    
            // Add the score in dog breeds
            dogBreeds.forEach(breed => {
                if (points[breed.name.toLowerCase()]) { // Check if dog breed is in option
                    breed.score += points[breed.name.toLowerCase()]; // Add point to dog breed
                }
            });
        });
    
        return true; // Return true to show that function worked and progress can go on
    }



    // function for next button
    nextButton.addEventListener("click", function () {

            if (currentStep < steps.length - 1) { // checks if its not the last step
                if (calculatePoints()) { // Controll that score has been calculated
                    currentStep++; // Go to next step
                    showStep(currentStep); // Show next step
                }
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


// function for showing the results

function displayResults() {

    let resultBreed = document.querySelector("#best-match-content h2"); // Get the breed H2 tag
    let resultBreedDescription = document.querySelector("#best-match-content p"); // Get the breed p tag
    let resultBreedSize = document.getElementById("size");
    let resultBreedWeight = document.getElementById("weight");
    let resultBreedHeight = document.getElementById("height");
    let resultBreedCoat = document.getElementById("coat");
    let resultBreedLifespan = document.getElementById("lifespan");
    let resultBreedTemperament = document.getElementById("temperament");
    let imageContainer = document.getElementById("best-match-image"); // Get the image container

    let maxScore = Math.max(...dogBreeds.map(breed => breed.score)); // Finding the max score
    let bestMatch = dogBreeds.find(breed => breed.score === maxScore); // Finding the breed with max score

    // Create result content
    resultBreed.textContent = `${bestMatch.name}`;
    resultBreedDescription.textContent = `${bestMatch.description}`;
    imageContainer.innerHTML = `<img src="${bestMatch.img}"> `;
    resultBreedSize.innerHTML = `<b>Size:</b> ${bestMatch.size}`;
    resultBreedWeight.innerHTML = `<b>Weight:</b> ${bestMatch.weight}`;
    resultBreedHeight.innerHTML = `<b>Height:</b> ${bestMatch.height}`;
    resultBreedCoat.innerHTML = `<b>Coat:</b> ${bestMatch.coat}`;
    resultBreedLifespan.innerHTML = `<b>Lifespan:</b> ${bestMatch.lifespan}`;
    resultBreedTemperament.innerHTML = `<b>Temperament:</b> ${bestMatch.temperament}`;

    // All functions for paw icon list
    setRating("activity", bestMatch.activity);
    setRating("trainability", bestMatch.trainability);
    setRating("friendliness", bestMatch.friendliness);
    setRating("grooming", bestMatch.grooming);
    setRating("shedding", bestMatch.shedding);
    setRating("barking", bestMatch.barking);
    setRating("protective", bestMatch.protective);
    setRating("independence", bestMatch.independence);

    // function for paw in icon list
    function setRating(category, score) {

        // Get all paws in the list
        let pawIcons = document.querySelectorAll(`#${category} .fa-paw`);

        // Loop through each paw while less than score
        pawIcons.forEach((paw, index) => {
            if (index < score) {
                paw.classList.add("full"); // set full class
            }
        });
    }

}