$(document).ready(function(){

     
var listings = []
    for (var l = 0; l < 12; l++) { 
        listings[l] = {
            "title": "Listing",
            "image": "http://lorempixel.com/200/200",
            "height": Math.floor(Math.random() * ((300-40)+1) + 40),
            "width": Math.floor(Math.random() * ((300-40)+1) + 40), 
            "id": "listing" + l, 
        };
    }; 



function arrangeListings () {
    let listing = listings[l];

    // $("#listing0").css({"top": "0px", "left": "0px"});

    $("#listing1").css()
   


    // for (let l=0; l<listings.length; l++) {
    // }


}


function renderListings() {
    console.log(listings)
    if (listings === undefined || listings == null){
            return;
        }
    for (let l=0; l<listings.length; l++) {

       let listing = listings[l];
       console.log(listing);

        let listingDiv = document.createElement("div");
        listingDiv.setAttribute("class", "listing grid-item");
        listingDiv.setAttribute("id", `${listing.id}`)

        // let newImg = document.createElement("div");
        // newImg.setAttribute("style",`background-image: url('${listing.image}'); 
        // background-size:cover;background-repeat:no-repeat;background-position:center; 
        // height: ${listing.height}px; width: ${listing.width}px;`);

        let newImg = document.createElement("img");
        newImg.setAttribute("src", "http://lorempixel.com/200/200");
        newImg.setAttribute("style", `height: ${listing.height}px; width: ${listing.width}px;`);  
        // newImg.appendChild()

        let newH3Tag = document.createElement("h3");
        newH3Tag.setAttribute("class", "listing-title");
        let newH3TagTextNode = document.createTextNode(listing.title);
        newH3Tag.appendChild(newH3TagTextNode);

        listingDiv.appendChild(newImg);
        listingDiv.appendChild(newH3Tag);
        document.getElementById('grid').appendChild(listingDiv);
    };

};

arrangeListings();

renderListings(listings);


});

// var grid = document.querySelector('.grid');
// var $grid = $('.grid').masonry();
// var msnry = new Masonry( grid, {
//   itemSelector: '.grid-item',
//   columnWidth: 160
// });

// $grid.imagesLoaded().progress( function() {
//   $grid.masonry('layout');
// });
  
    // $('.grid').masonry({
    //     columnWidth: 320,
    //     itemSelector: '.grid-item',
    //     isFitWidth: true,
    // }).imagesLoaded(function() {
    //     $(this).masonry('reload');
    // });


