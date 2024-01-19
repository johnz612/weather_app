import "./style.css";

import * as model from "./model.js";
import search from "./searchView.js";
import results from "./resultView.js";

const submitControl = async function (input) {
  search.showLoader();
  await model.getData(input);
  search.removeLoader();
  const responseData = model.state.response.currentResponse;
  results.renderResults(responseData);
};

const searchControl = function (data) {
  // 1. Get Search response
  model.getSearchData(data);

  // 2. return the function if input is invalid
  if (!model.state.response.searchResponse) {
    search.removeDropDown();
    return;
  }

  // 3. Show the responses in a list if input is valid
  search.showDropDown();
  let uniqueresponseData = [...new Set(model.state.response.searchResponse)];
  uniqueresponseData.forEach((data) => {
    search.dropDownTemplate(data);
  });
};

const dropControl = async function (data) {
  search.showLoader();
  // 1 Get data based on what user clicked on the search dropdown
  console.log("hey");
  await model.getData(data);
  search.removeLoader();
  const responseData = model.state.response.currentResponse;
  results.renderResults(responseData);
};

const init = function () {
  search.addHandlerFormSubmit(submitControl);
  search.addHandlerSearchInput(searchControl);
  search.addHandlerDropDownClick(dropControl);
};

init();
