import jollofImg from "./images/jollof.jpg"
import spagImg from "./images/spagbol.jpg"
import pizzaImg from "./images/chickenpizza.jpg"
import steakImg from "./images/steak.jpg"
import keleweleImg from "./images/kelewele.jpg"
import saladImg from "./images/salad.jpg"
import friesImg from "./images/fries.jpg"
import burgerImg from "./images/burger.jpg"
import coffeeImg from "./images/coffee.jpg"
import chocolateImg from "./images/hotchocolate.jpg"
import orangeImg from "./images/orange.jpg"
import coconutImg from "./images/coconut.jpg"


export function menu(){
    const contentContainer = document.querySelector('#content')

    const menuContainer = document.createElement('div')
    menuContainer.classList.add('menu-container')

    const menuHeading = document.createElement('h1')
    menuHeading.textContent = `Menu`

    const mainDishes = document.createElement('div')
    mainDishes.classList.add('main-dishes')

    const sides = document.createElement('div')
    sides.classList.add('sides')

    const beverages = document.createElement('div')
    beverages.classList.add('beverages')

    const mainDishesHeading = document.createElement('h2')
    mainDishesHeading.textContent = `Main Dishes`

    const sidesHeading = document.createElement('h2')
    sidesHeading.textContent = `Sides`

    const beveragesHeading = document.createElement('h2')
    beveragesHeading.textContent = `Beverages`

    mainDishes.append(
        mainDishesHeading,
        createDishCard(jollofImg, `Jollof Rice`, `Jollof Rice`,
            `A plate of jollof rice, served with fresh salad and
            grilled chicken.`, `$29.99`),
        createDishCard(spagImg, `Spaghetti`, `Spaghetti Bolognese`,
            `Spaghetti in a rich tomato and beef mince sauce,
            topped with parmesan.`, `$34.99`),
        createDishCard(pizzaImg, `Pizza`, `Chicken Pizza`,
            `Barbecue sauce, diced chicken, peppers and onion,
            all covered with cheese and baked to goodness.`, `$20.99`),
        createDishCard(steakImg, `Steak`, `Sirloin Steak`,
            `Served with steamed rice and stir-fried vegetables with rich
            tomato stew.`, `$45.00`),
    )
    
    sides.append(
        sidesHeading,
        createDishCard(keleweleImg, `Kelewele`, `Kelewele`,
            `Diced fried plantain, seasoned with ginger and 
            pepper.`, `$15.00`),
        createDishCard(saladImg, `Salad`, `Fresh Chicken Salad`,
            `Grilled chicken with fresh garden vegetables and dressing.`
            , `$20.00`),
        createDishCard(friesImg, `Fries`, `Fries`,
            `Crispy fries, served with ketchup and mayo.`
            , `$10.00`),
        createDishCard(burgerImg, `Burger`, `Mini Burger`, `Tender beef patty
            on a toasted bun, with lettuce and our house sauce.`, `$5.00`)

    )

    beverages.append(
        beveragesHeading,
        createDishCard(coffeeImg, `Coffee`, `Freshly Brewed Coffee`,
            `Freshly brewed coffee, served hot.`, `$3.00`),
        createDishCard(chocolateImg, `Chocolate`, `Hot Chocolate`,
            `Smooth hot chocolate served warm.`,`$3.00`),
        createDishCard(orangeImg, `Orange Juice`, `Fresh Orange Juice`,
            `Freshly squeezed orange juice, served chilled.`, `$5.00`),
        createDishCard(coconutImg, `Coconut Water`, `Fresh Coconut Water`,
            `Fresh and naturally sweet coconut water, served chilled.`, `$5.00`),
        

    )
    
    menuContainer.append(menuHeading, mainDishes, sides, beverages)
    contentContainer.append(menuContainer)

}

function createDishCard(imageSrc, imageAlt, heading, paragraph, price){
        const dishCard = document.createElement('div')
        dishCard.classList.add('dish-card')

        const imageContainer = document.createElement('div')
    
        const img = document.createElement('img')
        img.src = imageSrc
        img.alt = imageAlt
        img.classList.add('menu-item-image')

        imageContainer.append(img)

        const description = document.createElement('div')
        description.classList.add('description')

        const foodName = document.createElement('h3')
        foodName.textContent = heading

        const foodDes = document.createElement('p')
        foodDes.textContent = paragraph

        const foodPrice = document.createElement('p')
        foodPrice.textContent = price

        description.append(foodName, foodDes, foodPrice)
        dishCard.append(imageContainer,description)

        return dishCard
    }