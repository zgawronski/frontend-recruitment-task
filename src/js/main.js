const alertButton = document.querySelector('#alertButton');
const alertPopup = document.querySelector('#alertPopup');

alertButton.addEventListener('click', function onOpen() {
  if (typeof alertPopup.showModal === 'function') {
    alertPopup.showModal();
  }
});

alertPopup.addEventListener('click', function (event) {
  const rect = alertPopup.getBoundingClientRect();
  const isInPopup =
    rect.top <= event.clientY && event.clientY <= rect.top + rect.height && rect.left <= event.clientX && event.clientX <= rect.left + rect.width;
  if (!isInPopup) {
    alertPopup.close();
  }
});
