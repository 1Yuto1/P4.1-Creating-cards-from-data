/**
 * This code reads the heroes.json file and renders Bootstrap cards for each character.
 */

fetch("./heroes.json")
  .then((response) => {
    return response.json();
  })
  .then((jsondata) => {
    console.log(jsondata);
    renderCards(jsondata);
  })
  .catch((e) => {
    console.log(e);
  });

function renderCards(jsondata) {
  const container = document.getElementById("cards-container");

  for (let char of jsondata.data.results) {
    // Build the thumbnail URL (path + extension)
    const imgUrl = char.thumbnail
      ? `${char.thumbnail.path}/portrait_incredible.${char.thumbnail.extension}`
      : "";

    // Use a fallback if the description is empty
    const description =
      char.description && char.description.trim() !== ""
        ? char.description
        : "No description available.";

    // Get counts for comics, series and events
    const comicsCount = char.comics ? char.comics.available : 0;
    const seriesCount = char.series ? char.series.available : 0;
    const eventsCount = char.events ? char.events.available : 0;

    // Create the card HTML
    const cardHtml = `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="hero-card">
          <img src="${imgUrl}" alt="${char.name}" />
          <div class="card-body">
            <h5 class="card-title">${char.name}</h5>
            <p class="card-text">${description}</p>
            <div>
              <span class="badge badge-count">Comics: ${comicsCount}</span>
              <span class="badge badge-count">Series: ${seriesCount}</span>
              <span class="badge badge-count">Events: ${eventsCount}</span>
            </div>
          </div>
        </div>
      </div>
    `;

    // Append the card to the container
    container.innerHTML += cardHtml;
  }
}