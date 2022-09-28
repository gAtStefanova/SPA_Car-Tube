import { searchCar } from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const searchTemplate = (cars, onSearch, params = "") => html`<section id="search-cars">
<h1>Filter by year</h1>

<div class="container">
    <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
    <button class="button-list" @click=${onSearch}>Search</button>
</div>

<h2>Results:</h2>
<div class="listings">

    <!-- Display all records -->
    ${cars.length==0  ? html`<p class="no-cars"> No results.</p>`:
cars.map(carCard)}

    <!-- Display if there are no matches -->
</div>
</section>`;

let carCard = (car) => html`<div class="listing">
<div class="preview">
    <img src=${car.imageUrl}>
</div>
<h2>${car.brand} ${car.model}</h2>
<div class="info">
    <div class="data-info">
        <h3>Year: ${car.year}</h3>
        <h3>Price: ${car.price} $</h3>
    </div>
    <div class="data-buttons">
        <a href="/details/${car._id}" class="button-carDetails">Details</a>
    </div>
</div>
</div>`;


export async function searchView(ctx) {
    const userData= await getUserData()
  const params = ctx.querystring.split("=")[1];
  let cars = [];
  if (params) {
    cars = await searchCar(params);
  }
  ctx.render(searchTemplate(cars, onSearch, params));

  function onSearch(event) {
    event.preventDefault();
    const search=document.getElementById("search-input").value;
    //const search = formData.get("search");

    if (search) {
      ctx.page.redirect("/search?query=" + search);
    }
  }
}
