$(document).ready(function($){
// console.log("jyg");
//         $.ajax({
//             //'async': false,
//             //'global': false,
//             'url': "listings.json",
//             //'dataType': "json",
//             'success': function (data) {
//                 json = data;
//                 console.log("hjf")
//             }
//         });
// var output = "";

// this.parent = document.getElementsByClassName("parent-container");


var listings = [
    {
        "title": "Listing 1", 
        "width": 200, 
        "height": 200, 
        "image": "http://lorempixel.com/200/200"
    },

    {
        "title": "Listing 2", 
        "width": 200, 
        "height": 200, 
        "image": "http://lorempixel.com/200/200"
    },

    {
        "title": "Listing 3", 
        "width": 200, 
        "height": 200, 
        "image": "http://lorempixel.com/200/200"
    },

    {
        "title": "Listing 4", 
        "width": 200, 
        "height": 200, 
        "image": "http://lorempixel.com/200/200"
    },

    {
        "title": "Listing 5", 
        "width": 200, 
        "height": 200, 
        "image": "http://lorempixel.com/200/200"
    },

    {
        "title": "Listing 6", 
        "width": 200, 
        "height": 200, 
        "image": "http://lorempixel.com/200/200"
    },

    {
        "title": "Listing 7", 
        "width": 200, 
        "height": 200, 
        "image": "http://lorempixel.com/200/200"
    },

    {
        "title": "Listing 8", 
        "width": 200, 
        "height": 200, 
        "image": "http://lorempixel.com/200/200"
    },

    {
        "title": "Listing 9", 
        "width": 200, 
        "height": 200, 
        "image": "http://lorempixel.com/200/200"
    },

    {
        "title": "Listing 10", 
        "width": 200, 
        "height": 200, 
        "image": "http://lorempixel.com/200/200"
    },

    {
        "title": "Listing 11", 
        "width": 200, 
        "height": 200, 
        "image": "http://lorempixel.com/200/200"
    }
];
        


function renderListings() {
    console.log(listings)
    if (listings === undefined || listings == null){
            return;
        }
    for (let l=0; l<listings.length; l++) {

       let listing = listings[l];
       console.log(listing);

        let listingDiv = document.createElement("div");
        listingDiv.setAttribute("class", "listing");

        let newImg = document.createElement("div");
        newImg.setAttribute("style",`background-image: url('${listing.image}'); 
        background-size:contain;background-repeat:no-repeat;background-position:center; 
        height: ${listing.height}px; width: ${listing.width}px;`);

        let newH3Tag = document.createElement("h3");
        newH3Tag.setAttribute("class", "listing-title");
        let newH3TagTextNode = document.createTextNode(listing.title);
        newH3Tag.appendChild(newH3TagTextNode);

        listingDiv.appendChild(newImg);
        listingDiv.appendChild(newH3Tag);
        // this.parent.appendChild(listingDiv);
        document.getElementById('grid').appendChild(listingDiv);
    };
    // output += `

    //             `

};

renderListings(listings);


});


//for (var obj in json) {
//    calcWidth = math.random(50,300);
//    JSON[obj].width= 
//}

