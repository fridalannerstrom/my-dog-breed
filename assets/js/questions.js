export const questions = [
    {
        question: "What's your name?",
        type: "text",
        placeholder: "Enter your name"
    },
    {
        question: "How big is your living space?",
        type: "radio",
        answers: {
            option1: {
                text: "A large house with a garden",
                values: {
                    labrador: 5, 
                    goldenRetriever: 5,
                    germanShepherd: 5,
                    poodle: 5,
                    bulldog: 5,
                    beagle: 5,
                    boxer: 5,
                    chihuahua: 5,
                    dachshund: 5,
                    cavalierKingCharlesSpaniel: 5,
                    borderCollie: 5,
                    shihTzu: 5,
                    siberianHusky: 5,
                    yorkshireTerrier: 5,
                    rottweiler: 5,
                    corgi: 5,
                    australianShepherd: 5,
                    maltese: 5,
                    greatDane: 5,
                    pug: 5
                }
            }, 
            option2: {
                text: "A medium-sized home, maybe with a yard",
                values: {
                    labrador: 2, 
                    goldenRetriever: 2,
                    germanShepherd: 2,
                    poodle: 5,
                    bulldog: 5,
                    beagle: 5,
                    boxer: 2,
                    chihuahua: 5,
                    dachshund: 5,
                    cavalierKingCharlesSpaniel: 5,
                    borderCollie: 2,
                    shihTzu: 5,
                    siberianHusky: 2,
                    yorkshireTerrier: 5,
                    rottweiler: 2,
                    corgi: 5,
                    australianShepherd: 2,
                    maltese: 5,
                    greatDane: 2,
                    pug: 5
                }
            },
            option3: {
                text: "An apartment",
                values: {
                    poodle: 2,
                    bulldog: 2,
                    beagle: 2,
                    chihuahua: 5,
                    dachshund: 5,
                    cavalierKingCharlesSpaniel: 5,
                    shihTzu: 5,
                    yorkshireTerrier: 5,
                    corgi: 2,
                    maltese: 5,
                    greatDane: -100,
                    pug: 5
                }
            }
        }
    },

    {
        question: "How much time can you spend exercising your dog daily?",
        type: "radio",
        answers: {
            option1: {
                text: "1–2 hours or more (I love being active outdoors!)",
                values: {
                    labrador: 5, 
                    goldenRetriever: 5,
                    germanShepherd: 5,
                    poodle: 5,
                    beagle: 5,
                    boxer: 5,
                    dachshund: 5,
                    cavalierKingCharlesSpaniel: 2,
                    borderCollie: 5,
                    siberianHusky: 5,
                    rottweiler: 5,
                    corgi: 2,
                    australianShepherd: 5,
                    maltese: 2,
                    greatDane: 2,
                }
            }, 
            option2: {
                text: "30 minutes–1 hour (I enjoy a daily walk.)",
                values: {
                    labrador: 2, 
                    goldenRetriever: 3,
                    germanShepherd: 2,
                    poodle: 5,
                    bulldog: 2,
                    beagle: 3,
                    boxer: 3,
                    chihuahua: 2,
                    dachshund: 3,
                    cavalierKingCharlesSpaniel: 5,
                    shihTzu: 5,
                    yorkshireTerrier: 5,
                    corgi: 5,
                    maltese: 5,
                    greatDane: 5,
                    pug: 3
                }
            },
            option3: {
                text: "Less than 30 minutes (I prefer a more relaxed lifestyle.)",
                values: {
                    poodle: 2,
                    bulldog: 5,
                    chihuahua: 5,
                    dachshund: 2,
                    cavalierKingCharlesSpaniel: 5,
                    shihTzu: 5,
                    yorkshireTerrier: 5,
                    corgi: 2,
                    maltese: 5,
                    greatDane: 3,
                    pug: 5
                }
            }
        }
    },
    {
        question: "How much experience do you have with dogs?",
        type: "radio",
        answers: {
            option1: {
                text: "I’m completely new to dogs. I’ve never owned or interacted much with dogs before.",
                values: {
                    poodle: 2,
                    bulldog: 3,
                    chihuahua: 4,
                    dachshund: 2,
                    cavalierKingCharlesSpaniel: 5,
                    shihTzu: 4,
                    yorkshireTerrier: 5,
                    maltese: 5,
                    pug: 5
                }
            }, 
            option2: {
                text: "I’ve been around dogs casually. I’ve interacted with dogs but never had one of my own.",
                values: {
                    labrador: 1, 
                    goldenRetriever: 2,
                    poodle: 2,
                    bulldog: 5,
                    beagle: 2,
                    boxer: 2,
                    chihuahua: 5,
                    dachshund: 3,
                    cavalierKingCharlesSpaniel: 5,
                    borderCollie: 1,
                    shihTzu: 5,
                    yorkshireTerrier: 5,
                    corgi: 3,
                    australianShepherd: 2,
                    maltese: 5,
                    greatDane: 2,
                    pug: 5
                }
            },
            option3: {
                text: "I’ve owned a dog before. I’ve had a dog and know the basics of dog care and training.",
                values: {
                    labrador: 3, 
                    goldenRetriever: 4,
                    germanShepherd: 3,
                    poodle: 3,
                    bulldog: 5,
                    beagle: 4,
                    boxer: 4,
                    chihuahua: 5,
                    dachshund: 4,
                    cavalierKingCharlesSpaniel: 5,
                    borderCollie: 3,
                    shihTzu: 5,
                    siberianHusky: 2,
                    yorkshireTerrier: 3,
                    rottweiler: 2,
                    corgi: 4,
                    australianShepherd: 3,
                    maltese: 5,
                    greatDane: 3,
                    pug: 5
                }
            },
            option4: {
                text: "I’m experienced with dogs. I’ve owned and trained multiple dogs and feel confident in my skills.",
                values: {
                    labrador: 5, 
                    goldenRetriever: 5,
                    germanShepherd: 5,
                    poodle: 5,
                    bulldog: 5,
                    beagle: 5,
                    boxer: 5,
                    chihuahua: 5,
                    dachshund: 5,
                    cavalierKingCharlesSpaniel: 5,
                    borderCollie: 5,
                    shihTzu: 5,
                    siberianHusky: 5,
                    yorkshireTerrier: 5,
                    rottweiler: 5,
                    corgi: 5,
                    australianShepherd: 5,
                    maltese: 5,
                    greatDane: 5,
                    pug: 5
                }
            }
        }
    },
    {
        question: "Do you have any experience training dogs?",
        type: "radio",
        answers: {
            option1: {
                text: "Extensive training I have trained dogs extensively, including advanced techniques and commands.",
                values: {
                    poodle: 2,
                    bulldog: 3,
                    chihuahua: 4,
                    dachshund: 2,
                    cavalierKingCharlesSpaniel: 5,
                    shihTzu: 4,
                    yorkshireTerrier: 5,
                    maltese: 5,
                    pug: 5
                }
            }, 
            option2: {
                text: "Moderate training I have some experience training dogs and enjoy working on new skills.",
                values: {
                    labrador: 1, 
                    goldenRetriever: 2,
                    poodle: 2,
                    bulldog: 5,
                    beagle: 2,
                    boxer: 2,
                    chihuahua: 5,
                    dachshund: 3,
                    cavalierKingCharlesSpaniel: 5,
                    borderCollie: 1,
                    shihTzu: 5,
                    yorkshireTerrier: 5,
                    corgi: 3,
                    australianShepherd: 2,
                    maltese: 5,
                    greatDane: 2,
                    pug: 5
                }
            },
            option3: {
                text: "Basic training I have basic experience, such as teaching commands like 'sit' or 'stay.'",
                values: {
                    labrador: 3, 
                    goldenRetriever: 4,
                    germanShepherd: 3,
                    poodle: 3,
                    bulldog: 5,
                    beagle: 4,
                    boxer: 4,
                    chihuahua: 5,
                    dachshund: 4,
                    cavalierKingCharlesSpaniel: 5,
                    borderCollie: 3,
                    shihTzu: 5,
                    siberianHusky: 2,
                    yorkshireTerrier: 3,
                    rottweiler: 2,
                    corgi: 4,
                    australianShepherd: 3,
                    maltese: 5,
                    greatDane: 3,
                    pug: 5
                }
            },
            option4: {
                text: "No training I have no experience with dog training.",
                values: {
                    labrador: 5, 
                    goldenRetriever: 5,
                    germanShepherd: 5,
                    poodle: 5,
                    bulldog: 5,
                    beagle: 5,
                    boxer: 5,
                    chihuahua: 5,
                    dachshund: 5,
                    cavalierKingCharlesSpaniel: 5,
                    borderCollie: 5,
                    shihTzu: 5,
                    siberianHusky: 5,
                    yorkshireTerrier: 5,
                    rottweiler: 5,
                    corgi: 5,
                    australianShepherd: 5,
                    maltese: 5,
                    greatDane: 5,
                    pug: 5
                }
            }
        }
    },
    {
        question: "How much time can you dedicate to grooming?",
        type: "radio",
        answers: {
            option1: {
                text: "I don’t mind regular brushing and care.",
                values: {
                    poodle: 2,
                    bulldog: 3,
                    chihuahua: 4,
                    dachshund: 2,
                    cavalierKingCharlesSpaniel: 5,
                    shihTzu: 4,
                    yorkshireTerrier: 5,
                    maltese: 5,
                    pug: 5
                }
            }, 
            option2: {
                text: "A few times a month is fine.",
                values: {
                    labrador: 1, 
                    goldenRetriever: 2,
                    poodle: 2,
                    bulldog: 5,
                    beagle: 2,
                    boxer: 2,
                    chihuahua: 5,
                    dachshund: 3,
                    cavalierKingCharlesSpaniel: 5,
                    borderCollie: 1,
                    shihTzu: 5,
                    yorkshireTerrier: 5,
                    corgi: 3,
                    australianShepherd: 2,
                    maltese: 5,
                    greatDane: 2,
                    pug: 5
                }
            },
            option3: {
                text: "I prefer a dog with low-maintenance grooming.",
                values: {
                    labrador: 3, 
                    goldenRetriever: 4,
                    germanShepherd: 3,
                    poodle: 3,
                    bulldog: 5,
                    beagle: 4,
                    boxer: 4,
                    chihuahua: 5,
                    dachshund: 4,
                    cavalierKingCharlesSpaniel: 5,
                    borderCollie: 3,
                    shihTzu: 5,
                    siberianHusky: 2,
                    yorkshireTerrier: 3,
                    rottweiler: 2,
                    corgi: 4,
                    australianShepherd: 3,
                    maltese: 5,
                    greatDane: 3,
                    pug: 5
                }
            }
        }
    },
    {
        question: "How often are you at home during the day?",
        type: "radio",
        answers: {
            option1: {
                text: "I’m home most of the day.",
                values: {
                    poodle: 2,
                    bulldog: 3,
                    chihuahua: 4,
                    dachshund: 2,
                    cavalierKingCharlesSpaniel: 5,
                    shihTzu: 4,
                    yorkshireTerrier: 5,
                    maltese: 5,
                    pug: 5
                }
            }, 
            option2: {
                text: "I work from home or have a flexible schedule.",
                values: {
                    labrador: 1, 
                    goldenRetriever: 2,
                    poodle: 2,
                    bulldog: 5,
                    beagle: 2,
                    boxer: 2,
                    chihuahua: 5,
                    dachshund: 3,
                    cavalierKingCharlesSpaniel: 5,
                    borderCollie: 1,
                    shihTzu: 5,
                    yorkshireTerrier: 5,
                    corgi: 3,
                    australianShepherd: 2,
                    maltese: 5,
                    greatDane: 2,
                    pug: 5
                }
            },
            option3: {
                text: "I’m away at work for most of the day.",
                values: {
                    labrador: 3, 
                    goldenRetriever: 4,
                    germanShepherd: 3,
                    poodle: 3,
                    bulldog: 5,
                    beagle: 4,
                    boxer: 4,
                    chihuahua: 5,
                    dachshund: 4,
                    cavalierKingCharlesSpaniel: 5,
                    borderCollie: 3,
                    shihTzu: 5,
                    siberianHusky: 2,
                    yorkshireTerrier: 3,
                    rottweiler: 2,
                    corgi: 4,
                    australianShepherd: 3,
                    maltese: 5,
                    greatDane: 3,
                    pug: 5
                }
            }
        }
    },
    {
        question: "Do you have children or other pets at home?",
        type: "checkbox",
        answers: {
            option1: {
                text: "Young children Up to 10 years old",
                values: {
                    poodle: 2,
                    bulldog: 3,
                    chihuahua: 4,
                    dachshund: 2,
                    cavalierKingCharlesSpaniel: 5,
                    shihTzu: 4,
                    yorkshireTerrier: 5,
                    maltese: 5,
                    pug: 5
                }
            }, 
            option2: {
                text: "Teenagers 11-18 years old",
                values: {
                    labrador: 1, 
                    goldenRetriever: 2,
                    poodle: 2,
                    bulldog: 5,
                    beagle: 2,
                    boxer: 2,
                    chihuahua: 5,
                    dachshund: 3,
                    cavalierKingCharlesSpaniel: 5,
                    borderCollie: 1,
                    shihTzu: 5,
                    yorkshireTerrier: 5,
                    corgi: 3,
                    australianShepherd: 2,
                    maltese: 5,
                    greatDane: 2,
                    pug: 5
                }
            },
            option3: {
                text: "Other dogs Other dogs at home",
                values: {
                    labrador: 3, 
                    goldenRetriever: 4,
                    germanShepherd: 3,
                    poodle: 3,
                    bulldog: 5,
                    beagle: 4,
                    boxer: 4,
                    chihuahua: 5,
                    dachshund: 4,
                    cavalierKingCharlesSpaniel: 5,
                    borderCollie: 3,
                    shihTzu: 5,
                    siberianHusky: 2,
                    yorkshireTerrier: 3,
                    rottweiler: 2,
                    corgi: 4,
                    australianShepherd: 3,
                    maltese: 5,
                    greatDane: 3,
                    pug: 5
                }
            },
            option4: {
                text: "Other pets Cats and/or other",
                values: {
                    labrador: 5, 
                    goldenRetriever: 5,
                    germanShepherd: 5,
                    poodle: 5,
                    bulldog: 5,
                    beagle: 5,
                    boxer: 5,
                    chihuahua: 5,
                    dachshund: 5,
                    cavalierKingCharlesSpaniel: 5,
                    borderCollie: 5,
                    shihTzu: 5,
                    siberianHusky: 5,
                    yorkshireTerrier: 5,
                    rottweiler: 5,
                    corgi: 5,
                    australianShepherd: 5,
                    maltese: 5,
                    greatDane: 5,
                    pug: 5
                }
            }
        }
    },
    {
        question: "What is important to you in a dog?",
        type: "checkbox",
        answers: {
            option1: {
                text: "Being loyal and protective",
                values: {
                    poodle: 2,
                    bulldog: 3,
                    chihuahua: 4,
                    dachshund: 2,
                    cavalierKingCharlesSpaniel: 5,
                    shihTzu: 4,
                    yorkshireTerrier: 5,
                    maltese: 5,
                    pug: 5
                }
            }, 
            option2: {
                text: "Being social and friendly with everyone",
                values: {
                    labrador: 1, 
                    goldenRetriever: 2,
                    poodle: 2,
                    bulldog: 5,
                    beagle: 2,
                    boxer: 2,
                    chihuahua: 5,
                    dachshund: 3,
                    cavalierKingCharlesSpaniel: 5,
                    borderCollie: 1,
                    shihTzu: 5,
                    yorkshireTerrier: 5,
                    corgi: 3,
                    australianShepherd: 2,
                    maltese: 5,
                    greatDane: 2,
                    pug: 5
                }
            },
            option3: {
                text: "Being independent and easygoing",
                values: {
                    labrador: 3, 
                    goldenRetriever: 4,
                    germanShepherd: 3,
                    poodle: 3,
                    bulldog: 5,
                    beagle: 4,
                    boxer: 4,
                    chihuahua: 5,
                    dachshund: 4,
                    cavalierKingCharlesSpaniel: 5,
                    borderCollie: 3,
                    shihTzu: 5,
                    siberianHusky: 2,
                    yorkshireTerrier: 3,
                    rottweiler: 2,
                    corgi: 4,
                    australianShepherd: 3,
                    maltese: 5,
                    greatDane: 3,
                    pug: 5
                }
            },
            option4: {
                text: "Being energetic and full of life",
                values: {
                    labrador: 5, 
                    goldenRetriever: 5,
                    germanShepherd: 5,
                    poodle: 5,
                    bulldog: 5,
                    beagle: 5,
                    boxer: 5,
                    chihuahua: 5,
                    dachshund: 5,
                    cavalierKingCharlesSpaniel: 5,
                    borderCollie: 5,
                    shihTzu: 5,
                    siberianHusky: 5,
                    yorkshireTerrier: 5,
                    rottweiler: 5,
                    corgi: 5,
                    australianShepherd: 5,
                    maltese: 5,
                    greatDane: 5,
                    pug: 5
                }
            }
        }
    },
    {
        question: "How do you feel about barking and whining?",
        type: "radio",
        answers: {
            option1: {
                text: "I’m fine with a dog that 'talks' a lot. Barking and whining don’t bother me",
                values: {
                    poodle: 2,
                    bulldog: 3,
                    chihuahua: 4,
                    dachshund: 2,
                    cavalierKingCharlesSpaniel: 5,
                    shihTzu: 4,
                    yorkshireTerrier: 5,
                    maltese: 5,
                    pug: 5
                }
            }, 
            option2: {
                text: "Occasional barking is okay. A dog that barks now and then is fine",
                values: {
                    labrador: 1, 
                    goldenRetriever: 2,
                    poodle: 2,
                    bulldog: 5,
                    beagle: 2,
                    boxer: 2,
                    chihuahua: 5,
                    dachshund: 3,
                    cavalierKingCharlesSpaniel: 5,
                    borderCollie: 1,
                    shihTzu: 5,
                    yorkshireTerrier: 5,
                    corgi: 3,
                    australianShepherd: 2,
                    maltese: 5,
                    greatDane: 2,
                    pug: 5
                }
            },
            option3: {
                text: "I prefer a quiet dog I’d rather have a calm and silent companion.",
                values: {
                    labrador: 3, 
                    goldenRetriever: 4,
                    germanShepherd: 3,
                    poodle: 3,
                    bulldog: 5,
                    beagle: 4,
                    boxer: 4,
                    chihuahua: 5,
                    dachshund: 4,
                    cavalierKingCharlesSpaniel: 5,
                    borderCollie: 3,
                    shihTzu: 5,
                    siberianHusky: 2,
                    yorkshireTerrier: 3,
                    rottweiler: 2,
                    corgi: 4,
                    australianShepherd: 3,
                    maltese: 5,
                    greatDane: 3,
                    pug: 5
                }
            }
        }
    },
    {
        question: "What sizes of dog are you comfortable with?",
        type: "checkbox",
        answers: {
            option1: {
                text: "Small Up to 10 kg",
                values: {
                    poodle: 2,
                    bulldog: 3,
                    chihuahua: 4,
                    dachshund: 2,
                    cavalierKingCharlesSpaniel: 5,
                    shihTzu: 4,
                    yorkshireTerrier: 5,
                    maltese: 5,
                    pug: 5
                }
            }, 
            option2: {
                text: "Medium 10–25 kg",
                values: {
                    labrador: 1, 
                    goldenRetriever: 2,
                    poodle: 2,
                    bulldog: 5,
                    beagle: 2,
                    boxer: 2,
                    chihuahua: 5,
                    dachshund: 3,
                    cavalierKingCharlesSpaniel: 5,
                    borderCollie: 1,
                    shihTzu: 5,
                    yorkshireTerrier: 5,
                    corgi: 3,
                    australianShepherd: 2,
                    maltese: 5,
                    greatDane: 2,
                    pug: 5
                }
            },
            option3: {
                text: "Large 25–45 kg",
                values: {
                    labrador: 3, 
                    goldenRetriever: 4,
                    germanShepherd: 3,
                    poodle: 3,
                    bulldog: 5,
                    beagle: 4,
                    boxer: 4,
                    chihuahua: 5,
                    dachshund: 4,
                    cavalierKingCharlesSpaniel: 5,
                    borderCollie: 3,
                    shihTzu: 5,
                    siberianHusky: 2,
                    yorkshireTerrier: 3,
                    rottweiler: 2,
                    corgi: 4,
                    australianShepherd: 3,
                    maltese: 5,
                    greatDane: 3,
                    pug: 5
                }
            },
            option4: {
                text: "Extra Large over 45 kg",
                values: {
                    labrador: 5, 
                    goldenRetriever: 5,
                    germanShepherd: 5,
                    poodle: 5,
                    bulldog: 5,
                    beagle: 5,
                    boxer: 5,
                    chihuahua: 5,
                    dachshund: 5,
                    cavalierKingCharlesSpaniel: 5,
                    borderCollie: 5,
                    shihTzu: 5,
                    siberianHusky: 5,
                    yorkshireTerrier: 5,
                    rottweiler: 5,
                    corgi: 5,
                    australianShepherd: 5,
                    maltese: 5,
                    greatDane: 5,
                    pug: 5
                }
            }
        }
    },
    {
        question: "What’s your ideal activity level on weekends?",
        type: "radio",
        answers: {
            option1: {
                text: "Hiking or other physical activities I enjoy spending my weekends being active outdoors.",
                values: {
                    poodle: 2,
                    bulldog: 3,
                    chihuahua: 4,
                    dachshund: 2,
                    cavalierKingCharlesSpaniel: 5,
                    shihTzu: 4,
                    yorkshireTerrier: 5,
                    maltese: 5,
                    pug: 5
                }
            }, 
            option2: {
                text: "Gardening or a long walk I like moderate activities that allow me to unwind while staying active.",
                values: {
                    labrador: 1, 
                    goldenRetriever: 2,
                    poodle: 2,
                    bulldog: 5,
                    beagle: 2,
                    boxer: 2,
                    chihuahua: 5,
                    dachshund: 3,
                    cavalierKingCharlesSpaniel: 5,
                    borderCollie: 1,
                    shihTzu: 5,
                    yorkshireTerrier: 5,
                    corgi: 3,
                    australianShepherd: 2,
                    maltese: 5,
                    greatDane: 2,
                    pug: 5
                }
            },
            option3: {
                text: "Family activities and errands My weekends are busy with family commitments and household errands.",
                values: {
                    labrador: 3, 
                    goldenRetriever: 4,
                    germanShepherd: 3,
                    poodle: 3,
                    bulldog: 5,
                    beagle: 4,
                    boxer: 4,
                    chihuahua: 5,
                    dachshund: 4,
                    cavalierKingCharlesSpaniel: 5,
                    borderCollie: 3,
                    shihTzu: 5,
                    siberianHusky: 2,
                    yorkshireTerrier: 3,
                    rottweiler: 2,
                    corgi: 4,
                    australianShepherd: 3,
                    maltese: 5,
                    greatDane: 3,
                    pug: 5
                }
            },
            option4: {
                text: "Relaxing at home and reading a book I prefer a quiet and calm weekend to recharge.",
                values: {
                    labrador: 5, 
                    goldenRetriever: 5,
                    germanShepherd: 5,
                    poodle: 5,
                    bulldog: 5,
                    beagle: 5,
                    boxer: 5,
                    chihuahua: 5,
                    dachshund: 5,
                    cavalierKingCharlesSpaniel: 5,
                    borderCollie: 5,
                    shihTzu: 5,
                    siberianHusky: 5,
                    yorkshireTerrier: 5,
                    rottweiler: 5,
                    corgi: 5,
                    australianShepherd: 5,
                    maltese: 5,
                    greatDane: 5,
                    pug: 5
                }
            }
        }
    },
    {
        question: "How important is your dog’s independence?",
        type: "radio",
        answers: {
            option1: {
                text: "I want a dog that is very attached to me and loves being close.",
                values: {
                    poodle: 2,
                    bulldog: 3,
                    chihuahua: 4,
                    dachshund: 2,
                    cavalierKingCharlesSpaniel: 5,
                    shihTzu: 4,
                    yorkshireTerrier: 5,
                    maltese: 5,
                    pug: 5
                }
            }, 
            option2: {
                text: "I want a balanced dog – not too dependent, not too independent.",
                values: {
                    labrador: 1, 
                    goldenRetriever: 2,
                    poodle: 2,
                    bulldog: 5,
                    beagle: 2,
                    boxer: 2,
                    chihuahua: 5,
                    dachshund: 3,
                    cavalierKingCharlesSpaniel: 5,
                    borderCollie: 1,
                    shihTzu: 5,
                    yorkshireTerrier: 5,
                    corgi: 3,
                    australianShepherd: 2,
                    maltese: 5,
                    greatDane: 2,
                    pug: 5
                }
            },
            option3: {
                text: "I prefer a dog that is independent and can handle being alone well.",
                values: {
                    labrador: 3, 
                    goldenRetriever: 4,
                    germanShepherd: 3,
                    poodle: 3,
                    bulldog: 5,
                    beagle: 4,
                    boxer: 4,
                    chihuahua: 5,
                    dachshund: 4,
                    cavalierKingCharlesSpaniel: 5,
                    borderCollie: 3,
                    shihTzu: 5,
                    siberianHusky: 2,
                    yorkshireTerrier: 3,
                    rottweiler: 2,
                    corgi: 4,
                    australianShepherd: 3,
                    maltese: 5,
                    greatDane: 3,
                    pug: 5
                }
            }
        }
    },
    {
        question: "How important is obedience and trainability to you?",
        type: "checkbox",
        answers: {
            option1: {
                text: "Very important – I want to train my dog to be highly obedient.",
                values: {
                    poodle: 2,
                    bulldog: 3,
                    chihuahua: 4,
                    dachshund: 2,
                    cavalierKingCharlesSpaniel: 5,
                    shihTzu: 4,
                    yorkshireTerrier: 5,
                    maltese: 5,
                    pug: 5
                }
            }, 
            option2: {
                text: "Somewhat important – I want it to follow basic commands.",
                values: {
                    labrador: 1, 
                    goldenRetriever: 2,
                    poodle: 2,
                    bulldog: 5,
                    beagle: 2,
                    boxer: 2,
                    chihuahua: 5,
                    dachshund: 3,
                    cavalierKingCharlesSpaniel: 5,
                    borderCollie: 1,
                    shihTzu: 5,
                    yorkshireTerrier: 5,
                    corgi: 3,
                    australianShepherd: 2,
                    maltese: 5,
                    greatDane: 2,
                    pug: 5
                }
            },
            option3: {
                text: "Not very important – I can handle a more stubborn dog.",
                values: {
                    labrador: 3, 
                    goldenRetriever: 4,
                    germanShepherd: 3,
                    poodle: 3,
                    bulldog: 5,
                    beagle: 4,
                    boxer: 4,
                    chihuahua: 5,
                    dachshund: 4,
                    cavalierKingCharlesSpaniel: 5,
                    borderCollie: 3,
                    shihTzu: 5,
                    siberianHusky: 2,
                    yorkshireTerrier: 3,
                    rottweiler: 2,
                    corgi: 4,
                    australianShepherd: 3,
                    maltese: 5,
                    greatDane: 3,
                    pug: 5
                }
            }
        }
    },
    {
        question: "How would you describe your personality?",
        type: "checkbox",
        answers: {
            option1: {
                text: "Active and outgoing",
                values: {
                    poodle: 2,
                    bulldog: 3,
                    chihuahua: 4,
                    dachshund: 2,
                    cavalierKingCharlesSpaniel: 5,
                    shihTzu: 4,
                    yorkshireTerrier: 5,
                    maltese: 5,
                    pug: 5
                }
            }, 
            option2: {
                text: "Calm and harmonious",
                values: {
                    labrador: 1, 
                    goldenRetriever: 2,
                    poodle: 2,
                    bulldog: 5,
                    beagle: 2,
                    boxer: 2,
                    chihuahua: 5,
                    dachshund: 3,
                    cavalierKingCharlesSpaniel: 5,
                    borderCollie: 1,
                    shihTzu: 5,
                    yorkshireTerrier: 5,
                    corgi: 3,
                    australianShepherd: 2,
                    maltese: 5,
                    greatDane: 2,
                    pug: 5
                }
            },
            option3: {
                text: "Structured and goal-oriented",
                values: {
                    labrador: 3, 
                    goldenRetriever: 4,
                    germanShepherd: 3,
                    poodle: 3,
                    bulldog: 5,
                    beagle: 4,
                    boxer: 4,
                    chihuahua: 5,
                    dachshund: 4,
                    cavalierKingCharlesSpaniel: 5,
                    borderCollie: 3,
                    shihTzu: 5,
                    siberianHusky: 2,
                    yorkshireTerrier: 3,
                    rottweiler: 2,
                    corgi: 4,
                    australianShepherd: 3,
                    maltese: 5,
                    greatDane: 3,
                    pug: 5
                }
            },
            option4: {
                text: "Flexible and laid-back",
                values: {
                    labrador: 5, 
                    goldenRetriever: 5,
                    germanShepherd: 5,
                    poodle: 5,
                    bulldog: 5,
                    beagle: 5,
                    boxer: 5,
                    chihuahua: 5,
                    dachshund: 5,
                    cavalierKingCharlesSpaniel: 5,
                    borderCollie: 5,
                    shihTzu: 5,
                    siberianHusky: 5,
                    yorkshireTerrier: 5,
                    rottweiler: 5,
                    corgi: 5,
                    australianShepherd: 5,
                    maltese: 5,
                    greatDane: 5,
                    pug: 5
                }
            }
        }
    }
]