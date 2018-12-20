const ul = document.getElementById("fighters");

const proxyUrl = "https://cors-anywhere.herokuapp.com/",
  targetUrl = "http://ufc-data-api.ufc.com/api/v3/us/fighters";

const url = proxyUrl + targetUrl;

//  Helper Functions
function createNode(element) {
  return document.createElement(element); // Create the type of element you pass in the parameters
}

function append(parent, el) {
  return parent.appendChild(el); // Append the second parameter(element) to the first one
}

fetch(url)
  .then(blob => blob.json()) // Transform the data into json
  .then(function(data) {
    // Create and append the li's to the ul
    let fighters = data; // Get the results
    console.log(fighters)
    return fighters
      .map(function(fighter) {
        // Map through the results and for each run the code below
        let li = createNode("li"), // Create the elements we need
          img = createNode("img"),
          span = createNode("span");
        img.src = fighter.profile_image; // Add the source of the image to be the src of the img element
        span.innerHTML = `${fighter.first_name} ${fighter.last_name}`; // Make the HTML of our span to be the first and last name of our fighter
        append(li, img); // Append all our elements
        append(li, span);
        append(ul, li);
      })
      .catch(function(error) {
        console.log(error);
      });
  });