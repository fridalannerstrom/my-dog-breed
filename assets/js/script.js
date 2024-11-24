// set all dog breeds

let dogBreeds = [
    { 
        name: "Labrador", 
        size: "Large", 
        weight: "25–36 kg",
        height: "55–62 cm",
        coat: "Short, dense, water-resistant",
        lifespan: "10–12 years",
        temperament: "Friendly, outgoing, intelligent",
        score: 0, 
        description: "The Labrador Retriever is a friendly, outgoing, and intelligent breed, known for its versatility and loyalty. Originally bred as a working dog, Labradors excel in various roles, from family pets to guide dogs. With their gentle nature and eagerness to please, they are great with children and other pets. Labradors are highly energetic, making them perfect companions for active families who enjoy outdoor adventures, yet they also thrive in a loving home environment.", 
        img: "assets/images/dog-labrador.webp",
        activity: 5,
        trainability: 5
    },
    { 
        name: "Beagle", 
        size: "Medium", 
        weight: "9–14 kg",
        height: "33–38 cm",
        coat: "Short, dense, water-resistant",
        lifespan: "12–15 years",
        temperament: "Curious, friendly, playful",
        score: 0, 
        description: "The Beagle is a friendly, energetic breed known for its playful nature and keen sense of smell. With its expressive eyes and gentle temperament, it’s a perfect companion for active families, thriving on walks, playtime, and affection. Loyal and good with kids, the Beagle is a lovable addition to any home.", 
        img: "assets/images/dog-beagle.webp",
        activity: 3,
        trainability: 3
    },
    { 
        name: "Pug", 
        size: "Small", 
        weight: "6–8 kg",
        height: "25–33 cm",
        coat: "Short, smooth",
        lifespan: "12–15 years",
        temperament: "Charming, affectionate, mischievous",
        score: 0, 
        description: "The Pug is a small, affectionate breed known for its charming personality and distinctive wrinkled face. Bred as a companion dog, Pugs adore being around people and are incredibly loyal. They are playful yet adaptable, thriving in both small apartments and larger homes. With their cheerful nature and amusing antics, Pugs bring joy and warmth to any family.", 
        img: "assets/images/dog-pug.webp",
        activity: 1,
        trainability: 1
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
    imageContainer.innerHTML = `<img src="${bestMatch.img}"> ` ;
    resultBreedSize.innerHTML = `<b>Size:</b> ${bestMatch.size}` ;
    resultBreedWeight.innerHTML = `<b>Weight:</b> ${bestMatch.weight}` ;
    resultBreedHeight.innerHTML = `<b>Height:</b> ${bestMatch.height}` ;
    resultBreedCoat.innerHTML = `<b>Coat:</b> ${bestMatch.coat}` ;
    resultBreedLifespan.innerHTML = `<b>Lifespan:</b> ${bestMatch.lifespan}` ;
    resultBreedTemperament.innerHTML = `<b>Temperament:</b> ${bestMatch.temperament}` ;

    setRatingActivity()
    setRatingTrainability()

    // function for paw in icon list
    function setRatingActivity() {

        // Get the category
        let categoryActivity = document.getElementById("activity"); 

        // Hämta alla "paws" för den specifika kategorin
        let pawIcons = document.querySelectorAll(`#activity .fa-paw`);

        console.log(pawIcons);
    
        // Loopar igenom varje ikon och sätter klass baserat på poängen
        pawIcons.forEach((paw, index) => {
            if (index < bestMatch.activity) {
              paw.classList.add("full"); // Aktiverade poäng
            } else {
                paw.classList.remove("full"); // Inaktiverade poäng
            }

        
        });
    }

    // function for paw in icon list
        function setRatingTrainability() {

            // Get the category
            let categoryTrainability = document.getElementById("trainability"); 
    
            // Hämta alla "paws" för den specifika kategorin
            let pawIcons = document.querySelectorAll(`#trainability .fa-paw`);
    
            console.log(pawIcons);
        
            // Loopar igenom varje ikon och sätter klass baserat på poängen
            pawIcons.forEach((paw, index) => {
                if (index < bestMatch.trainability) {
                  paw.classList.add("full"); // Aktiverade poäng
                } else {
                    paw.classList.remove("full"); // Inaktiverade poäng
                }
    
            
            });
        }

}  

