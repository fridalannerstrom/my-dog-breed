// set all dog breeds

let dogBreeds = [{
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
        activity: 4,
        trainability: 4,
        friendliness: 5,
        grooming: 3,
        shedding: 4,
        barking: 3,
        protective: 3,
        independence: 2
    },
    {
        name: "Golden Retriever",
        size: "Medium–Large",
        weight: "25–34 kg",
        height: "55–61 cm",
        coat: "Dense, water-repellent double coat",
        lifespan: "10–12 years",
        temperament: "Friendly, loyal, patient",
        score: 0,
        description: "Golden Retrievers are friendly, loyal, and intelligent dogs that make excellent family pets and working dogs, often excelling as service or therapy dogs. Known for their golden coat and gentle nature, they are patient and great with children. Energetic and playful, they enjoy outdoor activities, especially swimming, and thrive in environments where they receive plenty of attention and exercise.",
        img: "assets/images/golden-retriever.webp",
        activity: 4,
        trainability: 4,
        friendliness: 5,
        grooming: 3,
        shedding: 4,
        barking: 2,
        protective: 2,
        independence: 2
    },
    {
        name: "German Shepherd",
        size: "Large",
        weight: "22–40 kg",
        height: "56–66 cm",
        coat: "Dense, medium-length double coat",
        lifespan: "9–13 years",
        temperament: "Intelligent, loyal, protective",
        score: 0,
        description: "German Shepherds are one of the world’s most versatile breeds, known for their intelligence, courage, and loyalty. Often used in police and military work, they are highly trainable and excel in roles that require focus and determination. Despite their working capabilities, they are also devoted family pets, protective of their loved ones and great with children when properly socialized.",
        img: "assets/images/german-shepherd.webp",
        activity: 5,
        trainability: 5,
        friendliness: 4,
        grooming: 2,
        shedding: 4,
        barking: 3,
        protective: 5,
        independence: 2
    },
    {
        name: "Poodle",
        size: "Small–Large",
        weight: "2.7–32 kg",
        height: "25–56 cm",
        coat: "Dense, curly, hypoallergenic",
        lifespan: "10–18 years",
        temperament: "Intelligent, alert, playful",
        score: 0,
        description: "Poodles are highly intelligent and elegant dogs, prized for their hypoallergenic coats and versatility. Available in three sizes—Standard, Miniature, and Toy—they are active, playful, and excel in obedience training. Poodles are affectionate with their families and adapt well to various lifestyles, making them excellent companions for both active and quieter households.",
        img: "assets/images/poodle.webp",
        activity: 3,
        trainability: 5,
        friendliness: 4,
        grooming: 4,
        shedding: 2,
        barking: 2,
        protective: 2,
        independence: 3
    },
    {
        name: "Bulldog (English or French)",
        size: "Small–Medium",
        weight: "7–23 kg",
        height: "25–38 cm",
        coat: "Short, smooth, easy to maintain",
        lifespan: "8–12 years",
        temperament: "Affectionate, calm, friendly",
        score: 0,
        description: "Bulldogs are charming and affectionate companions, known for their stocky build and unique wrinkled face. The English Bulldog has a calm and dignified personality, while the French Bulldog is more playful and mischievous. Both breeds are excellent with families and adapt well to apartment living, although they require regular care to stay healthy.",
        img: "assets/images/bulldog.webp",
        activity: 1,
        trainability: 2,
        friendliness: 4,
        grooming: 2,
        shedding: 3,
        barking: 2,
        protective: 2,
        independence: 2
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
        description: "",
        img: "assets/images/dog-beagle.webp",
        activity: 3,
        trainability: 3,
        friendliness: 4,
        grooming: 2,
        shedding: 3,
        barking: 4,
        protective: 2,
        independence: 3
    },
    {
        name: "Boxer",
        size: "Medium–Large",
        weight: "25–32 kg",
        height: "53–64 cm",
        coat: "Short, smooth, easy to maintain",
        lifespan: "10–12 years",
        temperament: "Playful, loyal, protective",
        score: 0,
        description: "Boxers are energetic, playful, and loyal dogs that make excellent family companions. Known for their muscular build and expressive face, they are full of enthusiasm and love to interact with their humans. Boxers require regular exercise and mental stimulation to thrive and are particularly gentle and protective around children.",
        img: "assets/images/boxer.webp",
        activity: 4,
        trainability: 3,
        friendliness: 4,
        grooming: 2,
        shedding: 3,
        barking: 3,
        protective: 3,
        independence: 2
    },
    {
        name: "Chihuahua",
        size: "Small",
        weight: "1.5–3 kg",
        height: "15–23 cm",
        coat: "Smooth or long, easy to groom",
        lifespan: "12–20 years",
        temperament: "Confident, alert, loyal",
        score: 0,
        description: "Chihuahuas are tiny dogs with a big personality, known for their loyalty and alert nature. Despite their small size, they are confident and often protective of their owners. They adapt well to apartment living and enjoy being close to their humans, making them ideal lap dogs.",
        img: "assets/images/chihuahua.webp",
        activity: 1,
        trainability: 3,
        friendliness: 4,
        grooming: 2,
        shedding: 1,
        barking: 4,
        protective: 2,
        independence: 3
    },
    {
        name: "Jack Russell Terrier",
        size: "Small",
        weight: "6–8 kg",
        height: "25–30 cm",
        coat: "Short and smooth",
        lifespan: "13–16 years",
        temperament: "Energetic, curious, bold",
        score: 0,
        description: "Jack Russell Terriers are small, lively dogs known for their energy and intelligence. They are playful and curious, making them great companions for active families. Despite their small size, they are fearless and independent.",
        img: "assets/images/jack_russell_terrier.webp",
        activity: 4,
        trainability: 3,
        friendliness: 4,
        grooming: 2,
        shedding: 3,
        barking: 4,
        protective: 3,
        independence: 3
    },
    {
        name: "Cavalier King Charles Spaniel",
        size: "Small",
        weight: "5–8 kg",
        height: "30–33 cm",
        coat: "Silky, medium-length",
        lifespan: "12–15 years",
        temperament: "Affectionate, gentle, playful",
        score: 0,
        description: "Cavalier King Charles Spaniels are small, elegant dogs with a loving and friendly nature. They are great companions for families and individuals alike, known for their affectionate and sociable temperament. These dogs thrive on human interaction and adapt well to various living situations.",
        img: "assets/images/cavalier-king-charles-spaniel.webp",
        activity: 3,
        trainability: 4,
        friendliness: 5,
        grooming: 4,
        shedding: 3,
        barking: 2,
        protective: 2,
        independence: 2
    },
    {
        name: "Border Collie",
        size: "Medium",
        weight: "14–20 kg",
        height: "48–56 cm",
        coat: "Medium-length, weather-resistant",
        lifespan: "12–15 years",
        temperament: "Intelligent, energetic, hardworking",
        score: 0,
        description: "Border Collies are highly intelligent and energetic dogs, widely regarded as one of the most trainable breeds. They are natural herders and excel in agility and obedience sports. These dogs require an active lifestyle and thrive in environments where they can use their problem-solving skills.",
        img: "assets/images/border-collie.webp",
        activity: 5,
        trainability: 5,
        friendliness: 4,
        grooming: 2,
        shedding: 3,
        barking: 2,
        protective: 3,
        independence: 2
    },
    {
        name: "Shih Tzu",
        size: "Small",
        weight: "4–7 kg",
        height: "20–28 cm",
        coat: "Long, silky",
        lifespan: "10–16 years",
        temperament: "Friendly, affectionate, lively",
        score: 0,
        description: "Shih Tzus are small, cheerful dogs known for their luxurious coat and outgoing personality. They are great companions, enjoying the company of their humans and adapting well to apartment living. Despite their royal heritage, they are affectionate and playful pets.",
        img: "assets/images/shih-tzu.webp",
        activity: 1,
        trainability: 2,
        friendliness: 4,
        grooming: 4,
        shedding: 2,
        barking: 2,
        protective: 2,
        independence: 4
    },
    {
        name: "Siberian Husky",
        size: "Medium–Large",
        weight: "16–27 kg",
        height: "51–60 cm",
        coat: "Thick, double coat",
        lifespan: "12–14 years",
        temperament: "Friendly, energetic, outgoing",
        score: 0,
        description: "Siberian Huskies are athletic and social dogs, originally bred for sledding in cold climates. Known for their striking appearance and friendly disposition, they thrive in active households. These dogs are independent and require consistent training and exercise to keep them engaged.",
        img: "assets/images/siberian-husky.webp",
        activity: 5,
        trainability: 3,
        friendliness: 4,
        grooming: 2,
        shedding: 4,
        barking: 4,
        protective: 3,
        independence: 4
    },
    {
        name: "Yorkshire Terrier",
        size: "Small",
        weight: "2–3 kg",
        height: "18–23 cm",
        coat: "Long, silky",
        lifespan: "12–16 years",
        temperament: "Affectionate, bold, intelligent",
        score: 0,
        description: "Yorkshire Terriers are small but confident dogs, known for their luxurious, silky coat and lively personality. They make excellent companions for individuals and families, adapting well to apartment living. Despite their small size, they are brave and alert, often acting as little watchdogs.",
        img: "assets/images/yorkshire-terrier.webp",
        activity: 2,
        trainability: 3,
        friendliness: 4,
        grooming: 4,
        shedding: 2,
        barking: 3,
        protective: 2,
        independence: 4
    },
    {
        name: "Rottweiler",
        size: "Large",
        weight: "35–60 kg",
        height: "56–69 cm",
        coat: "Short, dense",
        lifespan: "9–10 years",
        temperament: "Confident, loyal, protective",
        score: 0,
        description: "Rottweilers are powerful and confident dogs, known for their loyalty and protective nature. They are excellent working dogs, often used in police and guard roles, but also make loving family pets with proper training and socialization. They thrive in environments where they can bond closely with their families.",
        img: "assets/images/rottweiler.webp",
        activity: 4,
        trainability: 4,
        friendliness: 3,
        grooming: 2,
        shedding: 3,
        barking: 2,
        protective: 5,
        independence: 3
    },
    {
        name: "Corgi (Pembroke or Cardigan)",
        size: "Small–Medium",
        weight: "10–14 kg",
        height: "25–30 cm",
        coat: "Short, weather-resistant",
        lifespan: "12–15 years",
        temperament: "Playful, friendly, alert",
        score: 0,
        description: "Corgis, whether Pembroke or Cardigan, are small but sturdy herding dogs known for their short legs and lively personality. They are highly trainable and enjoy being active, making them great companions for families and individuals. These dogs are also known for their affectionate and playful nature.",
        img: "assets/images/corgi.webp",
        activity: 3,
        trainability: 4,
        friendliness: 5,
        grooming: 3,
        shedding: 3,
        barking: 3,
        protective: 4,
        independence: 3
    },
    {
        name: "Australian Shepherd",
        size: "Medium",
        weight: "18–30 kg",
        height: "46–58 cm",
        coat: "Medium-length, water-resistant",
        lifespan: "12–15 years",
        temperament: "Intelligent, energetic, loyal",
        score: 0,
        description: "Australian Shepherds are highly intelligent and energetic dogs, bred to herd livestock. They are known for their striking coat patterns and loyal nature. These dogs thrive in active households and require plenty of exercise and mental stimulation to stay happy and healthy.",
        img: "assets/images/australian-shepherd.webp",
        activity: 5,
        trainability: 5,
        friendliness: 4,
        grooming: 3,
        shedding: 3,
        barking: 3,
        protective: 4,
        independence: 3
    },
    {
        name: "Maltese",
        size: "Small",
        weight: "2–4 kg",
        height: "20–25 cm",
        coat: "Long, silky",
        lifespan: "12–15 years",
        temperament: "Gentle, playful, affectionate",
        score: 0,
        description: "Maltese dogs are small and elegant, known for their luxurious white coats and gentle temperament. They are affectionate companions, thriving in close contact with their owners. Despite their small size, they are lively and enjoy playtime and short walks.",
        img: "assets/images/maltese.webp",
        activity: 1,
        trainability: 3,
        friendliness: 4,
        grooming: 4,
        shedding: 1,
        barking: 2,
        protective: 2,
        independence: 3
    },
    {
        name: "Great Dane",
        size: "Extra Large",
        weight: "45–90 kg",
        height: "71–86 cm",
        coat: "Short, smooth",
        lifespan: "7–10 years",
        temperament: "Gentle, loyal, friendly",
        score: 0,
        description: "Great Danes are known as 'gentle giants,' combining their massive size with a calm and friendly temperament. Despite their imposing stature, they are affectionate and love to be close to their families. These dogs require space and moderate exercise to stay healthy and happy.",
        img: "assets/images/great-dane.webp",
        activity: 2,
        trainability: 2,
        friendliness: 4,
        grooming: 2,
        shedding: 3,
        barking: 1,
        protective: 2,
        independence: 2
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
        activity: 2,
        trainability: 3,
        friendliness: 4,
        grooming: 3,
        shedding: 2,
        barking: 3,
        protective: 2,
        independence: 3
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