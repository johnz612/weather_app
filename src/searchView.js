const form = document.querySelector("form");
const search = document.querySelector(".search");
const dropDown = document.querySelector(".drop-down");
const loader = document.querySelector(".loader");
const container = document.querySelector(".results-container");

class SearchView {
  addHandlerFormSubmit(handler) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      dropDown.classList.add("inactive");
      handler(search.value);
      // console.log(search.value);
      console.log("hey");
    });
  }

  addHandlerSearchInput(handler) {
    search.addEventListener("input", function (e) {
      if (!search.value) return;
      handler(search.value);
    });
  }

  addHandlerDropDownClick(handler) {
    dropDown.addEventListener("click", function (e) {
      console.log("event");
      handler(e.target.dataset.id);
      search.value = e.target.dataset.name;
      dropDown.classList.add("inactive");
    });
  }

  removeDropDown() {
    dropDown.classList.add("inactive");
  }

  showDropDown() {
    dropDown.classList.remove("inactive");
    dropDown.innerHTML = "";
  }

  showLoader() {
    loader.classList.remove("inactive");
    container.classList.add("inactive");
  }

  removeLoader() {
    loader.classList.add("inactive");
  }

  dropDownTemplate(data) {
    const listItem = document.createElement("li");
    listItem.textContent = `${data.name}, ${data.country}`;
    listItem.classList.add("search-list");
    listItem.dataset.country = dropDown.appendChild(listItem);
    listItem.setAttribute("data-id", `${data.id}`);
    listItem.setAttribute("data-name", `${data.name}`);
  }
}

export default new SearchView();
