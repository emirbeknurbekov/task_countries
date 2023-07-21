let container = document.querySelector(".container");
function render() {
  container.innerHTML = "";
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) =>
      data.forEach((item) => {
        container.innerHTML += `
        <div class="card">
                <div class="card-header">
                    <b>Country:${item.name.common}</b></br>
                    <b>Capital city:${item.capital}</b>
                </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                    <img class='img' src="${item.flags.png}" alt="">
                        <p>
                        ${item.name.official}</p>
                    </blockquote>
                </div>
            </div>`;
      })
    )
    .catch((err) => console.log(err));
}
render();
