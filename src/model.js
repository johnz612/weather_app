export const state = {
  response: {},
};

export const getData = async function (input) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=81a2accedddf473e93270229241501&q=id:${input}`
    );
    const forecastResponse = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=81a2accedddf473e93270229241501&q=id:${input}&days=3`
    );

    state.response.currentResponse = await response.json();
    state.response.forecastedResponse = await forecastResponse.json();
    console.log(state.response.currentResponse);
    console.log(state.response.forecastedResponse);
  } catch (error) {
    console.log(error);
  }
};

export const getSearchData = async function (input) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/search.json?key=81a2accedddf473e93270229241501&q=${input}`
    );
    state.response.searchResponse = await response.json();
  } catch (error) {
    console.log(error);
  }
};
