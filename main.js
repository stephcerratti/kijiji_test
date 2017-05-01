$(document).ready(function(){

     
var listings = []
    for (var l = 0; l < 12; l++) { 
        var height = Math.floor(Math.random() * ((300-40)+1) + 40);
        var width = Math.floor(Math.random() * ((300-40)+1) + 40);
        var area = height * width;
        listings[l] = {
            "title": "Listing",
            "image": "http://lorempixel.com/200/200",
            "height": height,
            "width": width, 
            "area": area,
            "id": "listing" + l, 
        };
    }; 



// function arrangeListings () {
//     let listing = listings[l];

//     var listingDivs,
//     sortedDivs = document.getElementsByClassName("grid-item");

//     sortedDivs = [].slice.call(sortedDivs);

//     listingDivs = sortedDivs.sort(function (a, b) {
//         var aArea = a.width * a.height,
//             bArea = b.width * b.height;
//         return aArea - bArea;
//     });

    // listings.sort(function(a,b){
    //     var a = a.split("x");
    //     var b = b.split("x");
    //     if (a[0] !== b[0]) {
    //         return b[0] - a[0]; // by width
    //     } else {
    //         return b[1] - a[1]; // by height
    //     }
    // });

    // $("#listing0").css({"top": "0px", "left": "0px"});

    //$("#listing1").css()
   


    // for (let l=0; l<listings.length; l++) {
    // }


// }


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

// arrangeListings();

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


