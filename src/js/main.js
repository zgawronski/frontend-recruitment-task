const alertButton = document.querySelector('#alertButton');
const alertPopup = document.querySelector('#alertPopup');

alertButton.addEventListener('click', function onOpen() {
  if (typeof alertPopup.showModal === 'function') {
    alertPopup.showModal();
  }
});
