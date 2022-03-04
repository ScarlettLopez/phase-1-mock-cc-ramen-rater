const ramenAPI = 'http://localhost:3000/ramens'
const ramenMenu = document.getElementById('ramen-menu') //<--containerDiv
const ramenDetail = document.getElementById('ramen-detail')
const ratingDisplay = document.getElementById('rating-display')
const commentDisplay = document.getElementById('comment-display')



//See all ramen images in the div with the id of ramen-menu. When the page loads, request the data from the server to get all the ramen objects. Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.

//NOTE anytime you refactor (change code around) make sure everything is still working properly!!

//#1
//See all ramen images in the div with the id of ramen-menu. (this is in the index.htm file)
// <!-- Ramen Menu -->
//   <div id="ramen-menu"> 
// <!-- Ramen Images Here -->
// </div>

//When the page loads, request the data from the server to get all the ramen objects.
fetch(ramenAPI)
    .then(res => res.json())
    //.then(json => console.log(json));
    .then(displayRamenImages); // you can also put a .catch(console.err);
//            ^^ this is being passed to the .then as a callback

document.getElementById('new-ramen').addEventListener('submit', addNewRamen);

    function displayRamenImages(ramenArray) {
        //console.log(ramenArray) //^^ that is an array [] of ramen objects {} the json goes in there
        ramenArray.forEach(addRamenToPage) //<-- iterating (loop through that is what the forEach is doing) forEach thing in the ramenArray we are going to run addRamenImage function 
        //iterate: to access each element of the array one by one
    }


    //#2
    //Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.
    //What does our data look like (HINT check the url http:..localhost:300/ramens) --> It is an [] <-- that is an array!
    function addRamenToPage(ramen) {
        const ramenImage = document.createElement('img');
        ramenImage.src = ramen.image; //<--where the image comes from this is why it's .image -->"image": "./assets/ramen/shoyu.jpg" that's where it is coming from.

        ramenImage.addEventListener('click', () => {
            //console.log(ramen)
            displayRamenDetails(ramen)
        })



        ramenMenu.append(ramenImage); //<-- .append (method) means to stick/place on the page for organization do this after adding eventListener

        //console.log(ramen.image) //<-- property on each object 
            //                        ex  "image": "./assets/ramen/shoyu.jpg",
    }

    function displayRamenDetails(ramen) {
        //console.log(ramen)
        const detailImage = document.querySelector('.detail-image')
        detailImage.src = ramen.image;
        detailImage.alt = ramen.name;

        document.querySelector('.name').textContent = ramen.name;
        document.querySelector('.restaurant').textContent = ramen.restaurant;

        ratingDisplay.textContent = ramen.rating; //<--const is at the top in order to grab this item
        commentDisplay.textContent = ramen.comment; //<--const is up top in order to grab this item
        
    }


    //#3 ^^^^
    //Click on an image from the #ramen-menu div and see all the info about that ramen displayed inside the #ramen-detail div and where it says insert comment here and insert rating here. --->
//     <!-- Ramen Details -->
//   <div id="ramen-detail">
//     <img class="detail-image" src="./assets/image-placeholder.jpg"      alt="Insert Name Here" />
//     <h2 class="name">Insert Name Here</h2>
//     <h3 class="restaurant">Insert Restaurant Here</h3>
//   </div>
// {/* <h3>Rating:</h3>
// <p>
//   <span id='rating-display'>Insert rating here</span> / 10
// </p>
// <h3>Comment:</h3>
// <p id='comment-display'>
//   Insert comment here
// </p> */}


//NOTE classes are for display they are for formatting .class

//#4
// Create a new ramen after submitting the new-ramen form. The new ramen should be added to the#ramen-menu div. The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.

//forms ='submit' NOT bttn >_<

function addNewRamen(event) {
    event.preventDefault();
    //console.log(event.target.name.value); //<-- don't forget the .value!
    //console.log addNewRamen("ffjfjsnfkskfbsb") <--just so you know where the problem is)
    //console.log(event.target.image.value) ^^
    const newRamen = {
        name: event.target.name.value,
        rating: event.target.rating.value,
        image: event.target.image.value,
        restaurant: event.target.restaurant.value,
        comment: event.target['new-comment'].value,
    };

    addRamenToPage(newRamen);
}

//since they have names we can use . notation to grab them (dot notation)
