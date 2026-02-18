import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');

let currentQuery = '';
let currentPage = 1;
let totalHits = 0;

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const query = event.currentTarget.elements['search-text'].value.trim();

  if (!query) {
    iziToast.warning({
      message: 'Please enter a search query!',
      position: 'bottomCenter',
    });
    return;
  }

  currentQuery = query;
  currentPage = 1;

  clearGallery();
  loadMoreBtn.classList.add('hidden');
  showLoader();

  getImagesByQuery(currentQuery, currentPage)
    .then(function (data) {
      totalHits = data.totalHits;

      if (data.hits.length === 0) {
        iziToast.info({
          message: "Sorry, I couldn't find this images.",
          position: 'bottomCenter',
        });
        return;
      }

      createGallery(data.hits);

      if (totalHits > 15) {
        loadMoreBtn.classList.remove('hidden');
      }
    })
    .catch(function () {
      iziToast.error({
        message: 'Error fetching images.',
        position: 'bottomCenter',
      });
    })
    .finally(function () {
      hideLoader();
    });
});

loadMoreBtn.addEventListener('click', function () {
  currentPage += 1;

  showLoader();
  loadMoreBtn.classList.add('hidden');

  getImagesByQuery(currentQuery, currentPage)
    .then(function (data) {
      createGallery(data.hits);

      const totalLoaded = currentPage * 15;

      if (totalLoaded >= totalHits) {
        iziToast.info({
          message: "We're sorry, but you've reached the end of search results.",
          position: 'bottomCenter',
        });
      } else {
        loadMoreBtn.classList.remove('hidden');
      }
    })
    .catch(function () {
      iziToast.error({
        message: "I can't load more images.",
        position: 'bottomCenter',
      });
    })
    .finally(function () {
      hideLoader();
    });
});
