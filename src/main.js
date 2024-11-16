// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

import dataRequest from './js/pixabay-api';
import makeMarkup from './js/render-functions';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', onBtnSubmit);

let onPictureClick = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

onPictureClick.on('show.simplelightbox', function () {
  onPictureClick.refresh();
});


function onBtnSubmit(event) {
  event.preventDefault();

  const userRequest = event.currentTarget.elements.search.value.trim();

  if (userRequest === '') {
    return alert('Please fill out the search form!');
  }

  dataRequest(userRequest)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please, try again!',
          messageColor: '#FAFAFB',
          backgroundColor: '#EF4040',
          position: 'topRight',
          color: '#FAFAFB',
          iconUrl: '../img/svg/x-icon.svg',
          iconColor: '#FAFAFB',
        });
      }
      // console.log('then', makeMarkup(data.hits));
      gallery.innerHTML = makeMarkup(data.hits);
    })
    .catch(error => console.log(error));

  form.reset();
}
