// Import dog breeds and questions from seperate js file
import { dogBreeds } from './dogData.js'; 
import { questions } from './questions.js'; 

// Remove intro when start quiz is clicked

let startButton = document.getElementById("start-button");
let introContent = document.getElementById("intro");
let quizContent = document.getElementById("quiz");
let result = document.getElementById("result");

startButton.addEventListener("click", function () {

    intro.classList.add("display-none"); // adds display none to intro
    quizContent.classList.remove("display-none"); // removes display none from quiz

});

// Generate questions in HTML 

const quizContainer = document.getElementById('questions-container');

questions.forEach((questionObj, questionIndex) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('step');
    if (questionIndex === 0) questionDiv.classList.add('active'); // Endast första frågan aktiv från början

    const questionHeading = document.createElement('h2');
    questionHeading.textContent = questionObj.question;
    questionDiv.appendChild(questionHeading);

    const answers = questionObj.answers;
    Object.keys(answers).forEach((key, index) => {
        const answer = answers[key];

        // Skapa radio-knappen
        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.id = `${key}-${questionIndex}`;
        radioInput.name = `question-${questionIndex}`;
        radioInput.dataset.points = JSON.stringify(answer.values);
        questionDiv.appendChild(radioInput);

        // Skapa etiketten
        const label = document.createElement('label');
        label.setAttribute('for', `${key}-${questionIndex}`);
        label.textContent = answer.text;
        questionDiv.appendChild(label);

        // Lägg till en radbrytning
        questionDiv.appendChild(document.createElement('br'));
    });

    quizContainer.appendChild(questionDiv);
});

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
        let selectedOptions = currentStepElement.querySelectorAll("input[type='radio']:checked, input[type='checkbox']:checked");  // Get the selected value 

        const breeds = [
            "labrador", "goldenRetriever", "germanShepherd", "poodle", "bulldog", 
            "beagle", "boxer", "chihuahua", "dachshund", "cavalierKingCharlesSpaniel", 
            "borderCollie", "shihTzu", "siberianHusky", "yorkshireTerrier", 
            "rottweiler", "corgi", "australianShepherd", "maltese", 
            "greatDane", "pug"
        ];

        const totalScores = {};

        if (selectedOptions.length > 0) { // Check if somethings been selected
            inputs.forEach(input => {
                // Dela poängen till en array
                const points = input.dataset.points.split(',').map(Number);
        
                // Lägg till poängen till rätt hundras
                points.forEach((score, index) => {
                    const breed = breeds[index];
                    totalScores[breed] = (totalScores[breed] || 0) + score;
                });
            });

        return true; //return true if somethings been selected

        } else {
            alert("Please select an option before proceeding."); // Warning if nothings been selected
            return false; // return false if no option selected
        }
    }

    // function for next button
    nextButton.addEventListener("click", function () {

        if (calculatePoints()) { // checks if somethings been selected
            if (currentStep < steps.length - 1) { // checks if its not the last step
                calculatePoints(); // count points for dog breeds
                currentStep++; // Add 1 to currentStep
                showStep(currentStep); // Show next step

            } else {
                quiz.classList.add("display-none"); // adds display none from quiz
                result.classList.remove("display-none"); // removes display none from result
                displayResults()
            }
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