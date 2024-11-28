import { dogBreeds } from './dogData.js'; // Import list of dog breed objects with metadata
import { questions } from './questions.js'; // Import list of questions objects with answer options and metadata

const startButton = document.getElementById("start-button");
const introContent = document.getElementById("intro");
const quizContent = document.getElementById("quiz");
const result = document.getElementById("result");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");
const recentResults = []; // Save the username and best match result
const quizContainer = document.getElementById('questions-container');
const alertMessage = document.getElementById("alert-container"); 

let currentStep = 0;

// Handle the transition from intro to quiz
startButton.addEventListener("click", function () {

    intro.classList.add("display-none"); 
    quizContent.classList.remove("display-none"); 

});

// Update the active step and handle navigation button visibility
function showStep(stepIndex) { 
    steps.forEach((step, index) => { 
        if (index === stepIndex) {
            step.classList.add("active"); 
        } else {
            step.classList.remove("active"); 
        }
    });

    prevButton.style.display = stepIndex === 0 ? "none" : "inline-block"; 
    nextButton.textContent = stepIndex === steps.length - 1 ? "Submit" : "Next"; 
}

// Generate HTML for quiz questions dynamically based on the `questions` array

questions.forEach((questionObj, questionIndex) => { // Looping through all the questions and giving it an index
    const questionDiv = document.createElement('div'); 
    questionDiv.classList.add('step'); 
    if (questionIndex === 0) questionDiv.classList.add('active'); 

    const questionHeading = document.createElement('h2'); 
    questionHeading.textContent = questionObj.question; 
    questionDiv.appendChild(questionHeading); 

    // Add sub heading if needed
    if (questionObj.subHeading) {
        const subHeading = document.createElement('h3');
        subHeading.classList.add('subheading', 'quiz-subheading');
        subHeading.textContent = questionObj.subHeading; 
        questionDiv.appendChild(subHeading); 
    }

    // Create a div for answers
    const answersDiv = document.createElement('div');

    if (questionObj.type === "text") {

        // Create text input
        const input = document.createElement('input');
        input.type = 'text';
        input.id = `text-${questionIndex}`;
        input.placeholder = questionObj.placeholder;

        const label = document.createElement('label');
        label.classList.add(`display-none`); // Add a class to hide label
        label.setAttribute('for', `text-${questionIndex}`);
        label.innerHTML = `Username`;

        questionDiv.appendChild(input);
        questionDiv.appendChild(label);

    } else if (questionObj.type === "radio" || questionObj.type === "checkbox") {

        // Create radio and checkboxes
        const answers = questionObj.answers;
        Object.keys(answers).forEach((key, index) => {
            const answer = answers[key];
            const display = questionObj.display;

            // Create the input element
            const input = document.createElement('input');
            input.type = questionObj.type; // Check if radio or checkbox
            input.id = `${key}-${questionIndex}`;
            input.name = `question-${questionIndex}`; 
            input.dataset.points = JSON.stringify(answer.values);

            // Create the label element
            const label = document.createElement('label');
            label.setAttribute('for', `${key}-${questionIndex}`);
            label.classList.add(`${display}`); // 
            label.innerHTML = `
                ${answer.image ? `<img src="${answer.image}" alt="" class="answer-image"><br>` : ''}
                ${answer.text}
                ${answer.subtext ? `<br><p class="subtext">${answer.subtext}</p>` : ''}`; // Add image and subtext if needed

            questionDiv.appendChild(input);
            questionDiv.appendChild(label);
        });
    }

    quizContainer.appendChild(questionDiv);

});

const steps = document.querySelectorAll(".step"); // Gives a list over all steps after they have been generated

//function for counting points
function calculatePoints() {

    try { // Give error if function does not work
        const currentStepElement = steps[currentStep]; 
        const selectedOptions = currentStepElement.querySelectorAll("input:checked");
        const textInputs = currentStepElement.querySelectorAll("input[type='text']"); 

        // Check it it's a text input
        if (textInputs.length > 0) {
            const nameInput = textInputs[0]; // We only need 1 text input
            
            // Prevent progression if the username field is empty
            if (!nameInput.value.trim()) {
                alertMessage.classList.remove("display-none");
                return false;
            }

        return true;

    }

        if (selectedOptions.length === 0) {
            alertMessage.classList.remove("display-none"); 
            return false; 
        }
    
        // Go through all options
        selectedOptions.forEach(option => {
            const points = JSON.parse(option.dataset.points); // Get score from data point in object
    
            // Add the score in dog breeds
            dogBreeds.forEach(breed => {
                if (points[breed.name.toLowerCase()]) { // Check if dog breed is in option
                    breed.score += points[breed.name.toLowerCase()]; // Add point to dog breed
                }
            });
        });
    
        return true; // Return true to show that function worked and progress can go on

    } catch(err) {
        console.log("Something went wrong")
        return false; // Prevent progress if an error occurred
    }
}

// Function for next button
nextButton.addEventListener("click", function () {

    if (currentStep < steps.length - 1) { // Checks if its not the last step
        if (calculatePoints()) { // Check that score has been calculated
            alertMessage.classList.add("display-none");
            currentStep++; 
            showStep(currentStep); // Show next step
            }
        } else {
            quiz.classList.add("display-none"); // Quiz is done, hide quiz
            result.classList.remove("display-none"); // Remove class to show how result
            displayResults()
        }
});


// Function for prev button
prevButton.addEventListener("click", function () {
    if (currentStep > 0) { // Checks if its not the first step
        currentStep--; 
        showStep(currentStep); // Show prev step
    }
});

// Show first step
showStep(currentStep); 


// Function for showing the results
function displayResults() {
    // Load recent results from localStorage if available
    let recentResults = JSON.parse(localStorage.getItem("recentResults")) || []; 

    // Get username from input
    const nameInput = document.querySelector("input[type='text']"); 
    const userName = nameInput ? nameInput.value.trim() : "Anonymous"; 

    // Find the best match
    const maxScore = Math.max(...dogBreeds.map(breed => breed.score)); 
    const bestMatch = dogBreeds.find(breed => breed.score === maxScore); 

    // Add the user name and result to recentResults       
    recentResults.unshift({ 
        user: userName, 
        breed: bestMatch.name, 
        breedImage: bestMatch.img, 
        breedDescription: 
        bestMatch.shortDescription }); 

    // We only want the 3 latest results
    if (recentResults.length > 3) {
        recentResults.pop();
    }

    // Get the result HTML elements
    const resultBreed = document.querySelector("#best-match-content h2"); // Get the breed H2 tag
    const resultBreedDescription = document.querySelector("#best-match-content p"); // Get the breed p tag
    const resultBreedSize = document.getElementById("size");
    const resultBreedWeight = document.getElementById("weight");
    const resultBreedHeight = document.getElementById("height");
    const resultBreedCoat = document.getElementById("coat");
    const resultBreedLifespan = document.getElementById("lifespan");
    const resultBreedTemperament = document.getElementById("temperament");
    const imageContainer = document.getElementById("best-match-image"); // Get the image container

    // Generate result content
    resultBreed.textContent = `${bestMatch.name}`;
    resultBreedDescription.textContent = `${bestMatch.description}`;
    imageContainer.innerHTML = `<img src="${bestMatch.img}"> `;
    resultBreedSize.innerHTML = `<b>Size:</b> ${bestMatch.size}`;
    resultBreedWeight.innerHTML = `<b>Weight:</b> ${bestMatch.weight}`;
    resultBreedHeight.innerHTML = `<b>Height:</b> ${bestMatch.height}`;
    resultBreedCoat.innerHTML = `<b>Coat:</b> ${bestMatch.coat}`;
    resultBreedLifespan.innerHTML = `<b>Lifespan:</b> ${bestMatch.lifespan}`;
    resultBreedTemperament.innerHTML = `<b>Temperament:</b> ${bestMatch.temperament}`;

    // All items for paw icon list
    setRating("activity", bestMatch.activity);
    setRating("trainability", bestMatch.trainability);
    setRating("friendliness", bestMatch.friendliness);
    setRating("grooming", bestMatch.grooming);
    setRating("shedding", bestMatch.shedding);
    setRating("barking", bestMatch.barking);
    setRating("protective", bestMatch.protective);
    setRating("independence", bestMatch.independence);

    // Top 3 other matches
    let top3Container = document.getElementById("top-3-container"); // Get container in HTML for top 3 matches
    const sortedBreeds = dogBreeds
        .filter(breed => breed !== bestMatch) // Exclude the best match
        .sort((a, b) => b.score - a.score) // Sort by score descending
        .slice(0, 3); // Get the top 3

    // Create cards for each top 3 breed
    sortedBreeds.forEach(breed => {
        const card = document.createElement("div");
        card.classList.add("top-breed-card");
        card.innerHTML = ` 
            <div class="top-3-image"><img src="${breed.img}" alt="${breed.name}"></div>
            <div class="top-3-description"><h3>${breed.name}</h3>
            <p>${breed.shortDescription}</p></div>
            `;  // Content in the top 3 breed card
        top3Container.appendChild(card); // Show the card
    });

    // Save recent results to localStorage
    localStorage.setItem("recentResults", JSON.stringify(recentResults));  // Make the saved results into a string

    // Show result for other users
    let recentResultsContainer = document.getElementById("recent-results-container"); 

    // Clear previous results to avoid duplication
    recentResultsContainer.innerHTML = "";

    // Loop through på 3 breeds and add each result 
    recentResults.forEach(result => {
        const resultItem = document.createElement("div");
        resultItem.classList.add("top-breed-card");
        resultItem.innerHTML = ` 
        <div class="top-3-image"><img src="${result.breedImage}" alt="${result.breed}"></div>
            <div class="top-3-description"><h3>${result.user} got a ${result.breed}</h3>
            <p>${result.breedDescription}</p></div>
            `;
        recentResultsContainer.appendChild(resultItem);
    });

    // Function for paw in icon list
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