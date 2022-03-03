//write your code here 
//const URL = 'http://localhost:3000/ramens'
//const ramenMenu = document.querySelector('div#ramen-Menu')
//div id="ramen-menu"
// See all ramen images in the div with the id of ramen-menu. When the page loads, request the data from the server to get all the ramen objects. Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.
// Click on an image from the #ramen-menu div and see all the info about that ramen displayed inside the #ramen-detail div and where it says insert comment here and insert rating here.
// Create a new ramen after submitting the new-ramen form. The new ramen should be added to the#ramen-menu div. The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.

const ramenMenu = document.querySelector('div#ramen-menu')
const newRamenForm = document.querySelector('#new-ramen')

fetch('http://localhost:3000/ramens')
    .then(response => response.json())
    .then(ramenArr => {
        
        ramenArr.forEach(ramenObject => {
            renderRamenImg(ramenObject)
        })
    })

    newRamenForm.addEventListener('submit', event => {
        event.preventDefault()
    })

    function renderRamenImg(ramenObject) {
        const imgTag = document.createElement('img')
        imgTag.src = ramenObject.image
        ramenMenu.append(imgTag)
    }

    //Thats all I have the thing that stumps me is how to translate what is being asked into an actuel properly working function and probably a deeper insight on how everything works in the actual solution to this coding challenge 
    