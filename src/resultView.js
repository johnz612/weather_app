const container = document.querySelector(".results-container");
const location = document.querySelector(".location");
const temp = document.querySelector(".temp");
const condition = document.querySelector(".condition");
const uv = document.querySelector(".uv");
const humidity = document.querySelector(".humidity");
const dropDown = document.querySelector(".drop-down");

class ResultsView {
  renderResults(data) {
    container.classList.remove("inactive");
    location.textContent = `${data.location.name}, ${data.location.country}`;
    temp.textContent = `${data.current.temp_c}°C`;
    condition.textContent = ` ${data.current.condition.text}`;
    uv.textContent = ` ${data.current.uv}`;
    humidity.textContent = ` ${data.current.humidity}`;
  }
}

export default new ResultsView();
