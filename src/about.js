import chefImg from "./images/chef.jpg"

export function about(){
    const contentContainer = document.querySelector('#content')


    const aboutContainer = document.createElement('div')
    aboutContainer.classList.add('about-container')

    const aboutWelcome = document.createElement('div')
    aboutWelcome.classList.add('about-welcome')

    const aboutWelcomeHeading = document.createElement('h1')
    aboutWelcomeHeading.textContent = `About`

    const aboutWelcomePara = document.createElement('p')
    aboutWelcomePara.textContent = `Welcome to The Golden Fork, a place where comfort meets modern flavour.
                We founded our restaurant in 2019 out of a deep love for real food and to bring
                people together using great meals.From family dinners to quick lunches
                with friends, we wanted to create a warm and welcoming space where everyone
                feels at home.`

    aboutWelcome.append(aboutWelcomeHeading, aboutWelcomePara)

    const aboutText = document.createElement('div')
    aboutText.classList.add('about-text')

    const aboutDescription = document.createElement('div')
    aboutDescription.classList.add('about-description')

    const aboutDescriptionHeading = document.createElement('h2')
    aboutDescriptionHeading.textContent = `The Golden Fork`

    const aboutDescriptionPara1 = document.createElement('p')
    aboutDescriptionPara1.textContent = `We stock our shelves with fresh market ingredients each day, so that the food we serve
                    you is as fresh and flavorful as can be. Every item on our menu is made to deliver both
                    quality and flavor.`

    const aboutDescriptionPara2 = document.createElement('p')
    aboutDescriptionPara2.textContent = `At The Golden Fork, we believe dining is more than just eating. We believe it's about
                    creating memories, which is why we focus on friendly service, a cozy atmosphere, and
                    meals worth sharing. Whether you're stopping by for your morning coffee or celebrating 
                    a special occassion, we're happy to have you at our table.
                `
    const aboutDescriptionPara3 = document.createElement('p')
    aboutDescriptionPara3.textContent = `Thank you for being part of our story. We look forward to serving you soon!`

    aboutDescription.append(aboutDescriptionHeading, aboutDescriptionPara1, aboutDescriptionPara2, aboutDescriptionPara3)

    const aboutImageContainer = document.createElement('div')
    aboutImageContainer.classList.add('about-image-container')

    const chefImage = document.createElement('img')
    chefImage.src = chefImg
    chefImage.classList.add('chef-image')
    chefImage.alt = `Chef Cooking A Meal`

    aboutImageContainer.append(chefImage)
    aboutText.append(aboutDescription, aboutImageContainer)


    aboutContainer.append(aboutWelcome, aboutText)
    contentContainer.append(aboutContainer)
}