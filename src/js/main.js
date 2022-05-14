const alertButton = document.querySelector('#alertButton');
const alertPopup = document.querySelector('#alertPopup');
const alertText = document.querySelector('#alertText');

// function to open popup and count clicks
alertButton.addEventListener('click', () => {
  if (typeof alertPopup.showModal === 'function') {
    alertPopup.showModal();
  }
  const currentCount = localStorage.getItem('myClicks') ? parseInt(localStorage.getItem('myClicks')) : 0;
  const newValue = currentCount + 1;
  localStorage.setItem('myClicks', newValue);
  alertText.innerHTML = 'You have clicked <b>' + newValue + ' times</b> to related button.';
});

// function to close popup
alertPopup.addEventListener('click', (event) => {
  const rect = alertPopup.getBoundingClientRect();
  const isInPopup =
    rect.top <= event.clientY && event.clientY <= rect.top + rect.height && rect.left <= event.clientX && event.clientX <= rect.left + rect.width;
  if (!isInPopup) {
    alertPopup.close();
  }
});

const checkNumber = localStorage.getItem('myClicks');
if (checkNumber >= 5) {
  const resetButton = document.createElement('button');
  resetButton.innerText = 'Reset';
  resetButton.classList.add('resetButton');
  resetButton.onclick = () => {
    localStorage.clear();
  };
  alertPopup.appendChild(resetButton);
}
