import foodImg from "./images/food.jpg"

export function homePage(){
    const contentContainer = document.querySelector('#content')

    const homeContainer = document.createElement('div')
    homeContainer.classList.add('homeContainer')

    const welcome = document.createElement('div')
    welcome.classList.add('welcome')

    const welcomeHeading = document.createElement('h3')
    welcomeHeading.textContent = `WELCOME TO THE GOLDEN FORK RESTAURANT`

    const lineDivision = document.createElement('hr')

    const welcomePara = document.createElement('p')
    welcomePara.textContent = `Serving delicious and high-quality food`

    const mealBtn = document.createElement('button')
    mealBtn.textContent = `Find a Meal`

    welcome.append(welcomeHeading,lineDivision,welcomePara,mealBtn)


    const story = document.createElement('div')
    story.classList.add('story')

    const storyText = document.createElement('div')
    storyText.classList.add('text')

    const storyHeading = document.createElement('h3')
    storyHeading.textContent = `Our Story`

    const storyPara = document.createElement('p')
    storyPara.textContent = `Here at The Golden Fork, our daily goal is to create, serve and enjoy fine food.
                We love fresh food, flavorful food, food that's in season and food that's distinct.
                We stock our shelves with market fresh ingredients, so that the food we serve you 
                is as fresh and flavorful as can be. We welcome you to our restaurant, and wish you
                a hearty appetite.`

    const storyButton = document.createElement('button')
    storyButton.textContent = `Read More`

    storyText.append(storyHeading,storyPara,storyButton)

    const foodImageContainer = document.createElement('div')
    foodImageContainer.classList.add('food-image-container')

    const foodImage = document.createElement('img')
    foodImage.classList.add('food-image')
    foodImage.alt = `Food`
    foodImage.src = foodImg

    foodImageContainer.append(foodImage)


    story.append(storyText,foodImageContainer)

    homeContainer.append(welcome, story)

    contentContainer.append(homeContainer)

}

