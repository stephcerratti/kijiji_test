$(document).ready(function(){
      
var listings = []

    for (var l = 0; l < 20; l++) { 
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


function arrangeListings(listings) {

    listings.sort(function(a, b) {
    return b.height - a.height;
    });

    // positionDivs(listings)
};

// function positionDivs(listings) {
//     var listing1 = listings[0];
//     listing1.style.position = "absolute";
//     listing1.style.left = 0+"px";
//     listing.style.top = 0+"px";
//     };

    // for (let l=0; l<listings.length; l++) {
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

arrangeListings(listings);

renderListings(listings);

});



