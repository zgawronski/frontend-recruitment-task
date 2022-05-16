const alertButton = document.querySelector('#alertButton');
const alertPopup = document.querySelector('.alertPopup');
const alertText = document.querySelector('#alertText');
const closeButton = document.querySelector('.closeButton');
const resetButton = document.querySelector('.resetButton');

// function to open popup and count clicks
alertButton.addEventListener('click', () => {
  if (typeof alertPopup.showModal === 'function') {
    alertPopup.showModal();
  }
  const currentCount = localStorage.getItem('myClicks') ? parseInt(localStorage.getItem('myClicks')) : 0;
  const newValue = currentCount + 1;
  localStorage.setItem('myClicks', newValue);
  alertText.innerHTML = 'You have clicked <b>' + newValue + ' times</b> to related button.';
  newValue >= 5 ? countReset(newValue) : null;
});

// reset button
const countReset = () => {
  resetButton.style.display = 'block';
  resetButton.onclick = () => {
    localStorage.setItem('myClicks', 0);
    alertText.innerHTML = 'You have clicked <b>' + 0 + ' times</b> to related button.';
    resetButton.style.display = 'none';
  };
};

// function to close popup
alertPopup.addEventListener('click', (event) => {
  const rect = alertPopup.getBoundingClientRect();
  const isInPopup =
    rect.top <= event.clientY && event.clientY <= rect.top + rect.height && rect.left <= event.clientX && event.clientX <= rect.left + rect.width;
  if (!isInPopup) {
    alertPopup.close();
  }
});

// window.onclick = (ev) => {
//   if (ev.target == alertPopup) {
//     alertPopup.close();
//   }
// };

closeButton.onclick = () => {
  alertPopup.close();
};

const tableApi = fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((data) => JSON.stringify(data))
  .catch((error) => {
    console.error('Error:', error);
  });

console.log(tableApi);
