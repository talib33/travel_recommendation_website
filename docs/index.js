// Hardcoded travel data
const travelData = {
  beach: [
    { name: "Maldives", description: "A tropical paradise with white sandy beaches and turquoise waters.", image: "assets/images/beach.png" },
    { name: "Bali, Indonesia", description: "A stunning island known for coral reefs and volcanic mountains.", image: "assets/images/bali_indo.png" }
  ],
  temple: [
    { name: "Wat Arun, Thailand", description: "A beautiful temple known as the Temple of Dawn in Bangkok.", image: "assets/images/Wat_Arun.png" },
    { name: "Angkor Wat, Cambodia", description: "An ancient temple complex and UNESCO World Heritage site.", image: "assets/images/Angor_Wat.png" }
  ],
  country: [
    { name: "Japan", description: "Land of the rising sun with rich culture and technology.", image: "assets/images/japan.png" },
    { name: "Switzerland", description: "Famous for mountains, chocolates, and scenic beauty.", image: "assets/images/switzerland.png" }
  ]
};

// Search functionality
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const searchValue = document.querySelector("input").value.trim().toLowerCase();
  const resultsDiv = document.getElementById("results");

  resultsDiv.innerHTML = "";

  if (!searchValue) {
    resultsDiv.innerHTML = "<p>Please enter a keyword like beach, temple, or country.</p>";
    return;
  }

  const results = travelData[searchValue];

  if (!results) {
    resultsDiv.innerHTML = `<p>No recommendations found for "${searchValue}". Try: beach, temple, or country.</p>`;
    return;
  }

  results.forEach(place => {
    const card = `
      <div class="card m-3 d-inline-block text-start" style="width: 20rem;">
        <img src="${place.image}" class="card-img-top" alt="${place.name}">
        <div class="card-body bg-dark text-white">
          <h5 class="card-title">${place.name}</h5>
          <p class="card-text">${place.description}</p>
        </div>
      </div>`;
    resultsDiv.innerHTML += card;
  });
});

// Reset function
function clearResults() {
  document.getElementById("results").innerHTML = "";
  document.querySelector("input").value = "";
}
