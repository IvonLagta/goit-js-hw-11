import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./pixabay-api.js";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from "./render-functions.js";

const form = document.querySelector(".form");

let currentQuery = "";
let currentPage = 1;

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const query = event.currentTarget.elements["search-text"].value.trim();

  if (!query) {
    iziToast.warning({
      message: "Please enter a search query!",
      position: "bottomCenter",
    });
    return;
  }

  currentQuery = query;
  currentPage = 1;

  clearGallery();
  showLoader();

  getImagesByQuery(currentQuery, currentPage)
    .then(function (data) {
      if (data.hits.length === 0) {
        iziToast.info({
          message: "We're sorry, we couldn't find any images.",
          position: "bottomCenter",
        });
        return;
      }

      createGallery(data.hits);
    })
    .catch(function () {
      iziToast.error({
        message: "Error fetching images.",
        position: "bottomCenter",
      });
    })
    .finally(function () {
      hideLoader();
    });
});
