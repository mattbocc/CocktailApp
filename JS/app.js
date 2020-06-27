const drank = document.querySelector('.random-drink');
const searchDrink = document.querySelector('.search-drink');
const searchIngredient = document.querySelector('.search-ingredient');


const ingredientList = document.getElementsByClassName('ingredients');
const in1 = document.querySelector('.ingredient-1');
const in2 = document.querySelector('.ingredient-2');
const in3 = document.querySelector('.ingredient-3');
const in4 = document.querySelector('.ingredient-4');
const in5 = document.querySelector('.ingredient-5');
const in6 = document.querySelector('.ingredient-6');
const in7 = document.querySelector('.ingredient-7');
const in8 = document.querySelector('.ingredient-8');

const am1 = document.querySelector('.amount-1');
const am2 = document.querySelector('.amount-2');
const am3 = document.querySelector('.amount-3');
const am4 = document.querySelector('.amount-4');
const am5 = document.querySelector('.amount-5');
const am6 = document.querySelector('.amount-6');
const am7 = document.querySelector('.amount-7');
const am8 = document.querySelector('.amount-8');

const name = document.querySelector('.drink-name h1');

const desc = document.querySelector('.description p');

const image = document.querySelector('.im');
const imageBox = document.querySelector('.picture');

const search = document.querySelector('#search-bar');

const button = document.querySelector('.search-button');





let api = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';


let drink = ""; //for the search bar value to add to the API

drank.addEventListener('click', () => {

    searchIngredient.classList.remove("current-click");
    searchDrink.classList.remove("current-click");

    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);

            name.textContent = data.drinks[0].strDrink;

            desc.textContent = data.drinks[0].strInstructions;


            image.src = data.drinks[0].strDrinkThumb;

            if (data.drinks[0].strIngredient1 != null) {
                in1.textContent = "Ingredient 1: " + data.drinks[0].strIngredient1;
                if (data.drinks[0].strMeasure1 != null) {
                    console.log(data.drinks[0].strMeasure1);
                    am1.textContent = data.drinks[0].strMeasure1;
                }
                else {
                    am1.textContent = "";
                }
            }
            else {
                in1.textContent = "";
                am1.textContent = "";
            }
            if (data.drinks[0].strIngredient2 != null) {
                in2.textContent = "Ingredient 2: " + data.drinks[0].strIngredient2;
                if (data.drinks[0].strMeasure2 != null) {
                    am2.textContent = data.drinks[0].strMeasure2;
                }
                else {
                    am2.textContent = "";
                }
            }
            else {
                in2.textContent = "";
                am2.textContent = "";
            }
            if (data.drinks[0].strIngredient3 != null) {
                in3.textContent = "Ingredient 3: " + data.drinks[0].strIngredient3;
                if (data.drinks[0].strMeasure3 != null) {
                    am3.textContent = data.drinks[0].strMeasure3;
                }
                else {
                    am3.textContent = "";
                }
            }
            else {
                in3.textContent = "";
                am3.textContent = "";
            }
            if (data.drinks[0].strIngredient4 != null) {

                in4.textContent = "Ingredient 4: " + data.drinks[0].strIngredient4;
                if (data.drinks[0].strMeasure4 != null) {
                    am4.textContent = data.drinks[0].strMeasure4;
                }
                else {
                    am4.textContent = "";
                }
            }
            else {
                in4.textContent = "";
                am4.textContent = "";
            }

            if (data.drinks[0].strIngredient5 != null) {
                in5.textContent = "Ingredient 5: " + data.drinks[0].strIngredient5;
                if (data.drinks[0].strMeasure5 != null) {
                    am5.textContent = data.drinks[0].strMeasure5;
                }
                else {
                    am5.textContent = "";
                }
            }
            else {
                in5.textContent = "";
                am5.textContent = "";
            }

            if (data.drinks[0].strIngredient6 != null) {
                in6.textContent = "Ingredient 6: " + data.drinks[0].strIngredient6;
                if (data.drinks[0].strMeasure6 != null) {
                    am6.textContent = data.drinks[0].strMeasure6;
                }
                else {
                    am6.textContent = "";
                }
            }
            else {
                in6.textContent = "";
                am6.textContent = "";
            }
            if (data.drinks[0].strIngredient7 != null) {
                in7.textContent = "Ingredient 7: " + data.drinks[0].strIngredient7;
                if (data.drinks[0].strMeasure7 != null) {
                    am7.textContent = data.drinks[0].strMeasure7;
                }
                else {
                    am7.textContent = "";
                }
            }
            else {
                in7.textContent = "";
                am7.textContent = "";
            }
            if (data.drinks[0].strIngredient8 != null) {
                in8.textContent = "Ingredient 8: " + data.drinks[0].strIngredient8;
                if (data.drinks[0].strMeasure8 != null) {
                    am8.textContent = data.drinks[0].strMeasure8;
                }
                else {
                    am8.textContent = "";
                }
            }
            else {
                in8.textContent = "";
                am8.textContent = "";
            }
        });

    if (ingredientList[0].style.display == "none") {//determining if the ingredients are being shown, if not, start showing
        for (let i = 0; i < ingredientList.length; i++) {//loops throw all divs with the class name ingredients
            ingredientList[i].style.display = "inline-flex";
        }
    }
    if (imageBox.style.display == "none") {
        imageBox.style.display = "block";
    }

    api = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

});

search.addEventListener('keyup', (event) => {

    drink = search.value;

    if (event.key == "Enter" && searchIngredient.classList[1] != "current-click") {

        let searchApi = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`;

        fetch(searchApi)
            .then(response => {
                return response.json();
            })
            .then(data => {

                if (data.drinks == null) {
                    alert('This is not a drink in our database');
                }

                name.textContent = data.drinks[0].strDrink;

                desc.textContent = data.drinks[0].strInstructions;

                image.src = data.drinks[0].strDrinkThumb;

                if (data.drinks[0].strIngredient1 != null) {
                    in1.textContent = "Ingredient 1: " + data.drinks[0].strIngredient1;
                    if (data.drinks[0].strMeasure1 != null) {
                        console.log(data.drinks[0].strMeasure1);
                        am1.textContent = data.drinks[0].strMeasure1;
                    }
                    else {
                        am1.textContent = "";
                    }
                }
                else {
                    in1.textContent = "";
                    am1.textContent = "";
                }
                if (data.drinks[0].strIngredient2 != null) {
                    in2.textContent = "Ingredient 2: " + data.drinks[0].strIngredient2;
                    if (data.drinks[0].strMeasure2 != null) {
                        am2.textContent = data.drinks[0].strMeasure2;
                    }
                    else {
                        am2.textContent = "";
                    }
                }
                else {
                    in2.textContent = "";
                    am2.textContent = "";
                }
                if (data.drinks[0].strIngredient3 != null) {
                    in3.textContent = "Ingredient 3: " + data.drinks[0].strIngredient3;
                    if (data.drinks[0].strMeasure3 != null) {
                        am3.textContent = data.drinks[0].strMeasure3;
                    }
                    else {
                        am3.textContent = "";
                    }
                }
                else {
                    in3.textContent = "";
                    am3.textContent = "";
                }
                if (data.drinks[0].strIngredient4 != null) {

                    in4.textContent = "Ingredient 4: " + data.drinks[0].strIngredient4;
                    if (data.drinks[0].strMeasure4 != null) {
                        am4.textContent = data.drinks[0].strMeasure4;
                    }
                    else {
                        am4.textContent = "";
                    }
                }
                else {
                    in4.textContent = "";
                    am4.textContent = "";
                }

                if (data.drinks[0].strIngredient5 != null) {
                    in5.textContent = "Ingredient 5: " + data.drinks[0].strIngredient5;
                    if (data.drinks[0].strMeasure5 != null) {
                        am5.textContent = data.drinks[0].strMeasure5;
                    }
                    else {
                        am5.textContent = "";
                    }
                }
                else {
                    in5.textContent = "";
                    am5.textContent = "";
                }

                if (data.drinks[0].strIngredient6 != null) {
                    in6.textContent = "Ingredient 6: " + data.drinks[0].strIngredient6;
                    if (data.drinks[0].strMeasure6 != null) {
                        am6.textContent = data.drinks[0].strMeasure6;
                    }
                    else {
                        am6.textContent = "";
                    }
                }
                else {
                    in6.textContent = "";
                    am6.textContent = "";
                }
                if (data.drinks[0].strIngredient7 != null) {
                    in7.textContent = "Ingredient 7: " + data.drinks[0].strIngredient7;
                    if (data.drinks[0].strMeasure7 != null) {
                        am7.textContent = data.drinks[0].strMeasure7;
                    }
                    else {
                        am7.textContent = "";
                    }
                }
                else {
                    in7.textContent = "";
                    am7.textContent = "";
                }
                if (data.drinks[0].strIngredient8 != null) {
                    in8.textContent = "Ingredient 8: " + data.drinks[0].strIngredient8;
                    if (data.drinks[0].strMeasure8 != null) {
                        am8.textContent = data.drinks[0].strMeasure8;
                    }
                    else {
                        am8.textContent = "";
                    }
                }
                else {
                    in8.textContent = "";
                    am8.textContent = "";
                }
            })

        if (ingredientList[0].style.display == "none") {//determining if the ingredients are being shown, if not, start showing
            for (let i = 0; i < ingredientList.length; i++) {//loops throw all divs with the class name ingredients
                ingredientList[i].style.display = "inline-flex";
            }
        }
        if (imageBox.style.display == "none") {
            imageBox.style.display = "block";
        }

        search.value = "";
    }
    else if (event.key == "Enter" && searchIngredient.classList[1] == "current-click") {

        let searchIngredientApi = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drink}`;

        fetch(searchIngredientApi)
            .then(response => {
                return response.json();
            })
            .then(data => {

                desc.textContent = ""; //first get rid of the content in the description box

                let counter = 1

                temp = search.value.charAt(0).toUpperCase();

                name.textContent = temp + search.value.slice(1).toLowerCase(); //capitalize the user's input

                console.log(ingredientList[0].style.display);

                if (ingredientList[0].style.display != "none") {//determining if the ingredients are being shown, if so, stop showing
                    for (let i = 0; i < ingredientList.length; i++) {//loops throw all divs with the class name ingredients
                        ingredientList[i].style.display = "none";
                    }
                }



                data.drinks.forEach(element => {//iterates all the names of drinks in the array drinks
                    desc.innerHTML += `${counter} .` + element.strDrink + "<br/>";
                    counter++;
                });

                if (imageBox.style.display != "none") {
                    imageBox.style.display = "none";
                }

            })


        search.value = "";

    }

});

button.addEventListener('click', () => {

    drink = search.value;

    if (searchIngredient.classList[1] != "current-click") {

        let searchApi = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`;

        fetch(searchApi)
            .then(response => {
                return response.json();
            })
            .then(data => {

                if (data.drinks == null) {
                    alert('This is not a drink in our database');
                }

                name.textContent = data.drinks[0].strDrink;

                desc.textContent = data.drinks[0].strInstructions;

                image.src = data.drinks[0].strDrinkThumb;

                if (data.drinks[0].strIngredient1 != null) {
                    in1.textContent = "Ingredient 1: " + data.drinks[0].strIngredient1;
                    if (data.drinks[0].strMeasure1 != null) {
                        console.log(data.drinks[0].strMeasure1);
                        am1.textContent = data.drinks[0].strMeasure1;
                    }
                    else {
                        am1.textContent = "";
                    }
                }
                else {
                    in1.textContent = "";
                    am1.textContent = "";
                }
                if (data.drinks[0].strIngredient2 != null) {
                    in2.textContent = "Ingredient 2: " + data.drinks[0].strIngredient2;
                    if (data.drinks[0].strMeasure2 != null) {
                        am2.textContent = data.drinks[0].strMeasure2;
                    }
                    else {
                        am2.textContent = "";
                    }
                }
                else {
                    in2.textContent = "";
                    am2.textContent = "";
                }
                if (data.drinks[0].strIngredient3 != null) {
                    in3.textContent = "Ingredient 3: " + data.drinks[0].strIngredient3;
                    if (data.drinks[0].strMeasure3 != null) {
                        am3.textContent = data.drinks[0].strMeasure3;
                    }
                    else {
                        am3.textContent = "";
                    }
                }
                else {
                    in3.textContent = "";
                    am3.textContent = "";
                }
                if (data.drinks[0].strIngredient4 != null) {

                    in4.textContent = "Ingredient 4: " + data.drinks[0].strIngredient4;
                    if (data.drinks[0].strMeasure4 != null) {
                        am4.textContent = data.drinks[0].strMeasure4;
                    }
                    else {
                        am4.textContent = "";
                    }
                }
                else {
                    in4.textContent = "";
                    am4.textContent = "";
                }

                if (data.drinks[0].strIngredient5 != null) {
                    in5.textContent = "Ingredient 5: " + data.drinks[0].strIngredient5;
                    if (data.drinks[0].strMeasure5 != null) {
                        am5.textContent = data.drinks[0].strMeasure5;
                    }
                    else {
                        am5.textContent = "";
                    }
                }
                else {
                    in5.textContent = "";
                    am5.textContent = "";
                }

                if (data.drinks[0].strIngredient6 != null) {
                    in6.textContent = "Ingredient 6: " + data.drinks[0].strIngredient6;
                    if (data.drinks[0].strMeasure6 != null) {
                        am6.textContent = data.drinks[0].strMeasure6;
                    }
                    else {
                        am6.textContent = "";
                    }
                }
                else {
                    in6.textContent = "";
                    am6.textContent = "";
                }
                if (data.drinks[0].strIngredient7 != null) {
                    in7.textContent = "Ingredient 7: " + data.drinks[0].strIngredient7;
                    if (data.drinks[0].strMeasure7 != null) {
                        am7.textContent = data.drinks[0].strMeasure7;
                    }
                    else {
                        am7.textContent = "";
                    }
                }
                else {
                    in7.textContent = "";
                    am7.textContent = "";
                }
                if (data.drinks[0].strIngredient8 != null) {
                    in8.textContent = "Ingredient 8: " + data.drinks[0].strIngredient8;
                    if (data.drinks[0].strMeasure8 != null) {
                        am8.textContent = data.drinks[0].strMeasure8;
                    }
                    else {
                        am8.textContent = "";
                    }
                }
                else {
                    in8.textContent = "";
                    am8.textContent = "";
                }
            })

        if (ingredientList[0].style.display == "none") {//determining if the ingredients are being shown, if not, start showing
            for (let i = 0; i < ingredientList.length; i++) {//loops throw all divs with the class name ingredients
                ingredientList[i].style.display = "inline-flex";
            }
        }
        if (imageBox.style.display == "none") {
            imageBox.style.display = "block";
        }

        search.value = "";
    }
    else if (searchIngredient.classList[1] == "current-click") {

        let searchIngredientApi = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drink}`;

        fetch(searchIngredientApi)
            .then(response => {
                return response.json();
            })
            .then(data => {

                desc.textContent = ""; //first get rid of the content in the description box

                let counter = 1

                temp = search.value.charAt(0).toUpperCase();

                name.textContent = temp + search.value.slice(1).toLowerCase(); //capitalize the user's input

                console.log(ingredientList[0].style.display);

                if (ingredientList[0].style.display != "none") {//determining if the ingredients are being shown, if so, stop showing
                    for (let i = 0; i < ingredientList.length; i++) {//loops throw all divs with the class name ingredients
                        ingredientList[i].style.display = "none";
                    }
                }



                data.drinks.forEach(element => {//iterates all the names of drinks in the array drinks
                    desc.innerHTML += `${counter} .` + element.strDrink + "<br/>";
                    counter++;
                });

                if (imageBox.style.display != "none") {
                    imageBox.style.display = "none";
                }

            })

        search.value = "";

    }

})

searchDrink.addEventListener('click', () => {
    searchDrink.classList.add("current-click");
    searchIngredient.classList.remove("current-click");
})
searchIngredient.addEventListener('click', () => {
    searchIngredient.classList.add("current-click");
    searchDrink.classList.remove("current-click");
})

