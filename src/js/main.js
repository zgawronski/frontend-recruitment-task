const alertButton = document.querySelector('#alertButton');
const alertPopup = document.querySelector('.alertPopup');
const alertText = document.querySelector('#alertText');
const closeButton = document.querySelector('.closeButton');
const resetButton = document.querySelector('.resetButton');

const table = document.querySelector('#textTable');
const headders = document.querySelectorAll('#tableHeader');
const cell = document.querySelectorAll('#tableCell');
const progressBar = document.querySelector('progress');

// function to open popup and count clicks
alertButton.addEventListener('click', () => {
  if (typeof alertPopup.showModal === 'function') {
    alertPopup.showModal();
  }
  const currentCount = localStorage.getItem('myClicks') ? parseInt(localStorage.getItem('myClicks')) : 0;
  const newValue = currentCount + 1;
  localStorage.setItem('myClicks', newValue);
  alertText.innerHTML = 'You have clicked <strong>' + newValue + ' times</strong> to related button.';
  newValue >= 5 ? countReset(newValue) : null;
});

// reset button
const countReset = () => {
  resetButton.style.display = 'block';
  resetButton.onclick = () => {
    localStorage.setItem('myClicks', 0);
    alertText.innerHTML = 'You have clicked <strong>' + 0 + ' times</strong> to related button.';
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

// close Button
closeButton.onclick = () => {
  alertPopup.close();
};

// getting data from API
const tableApi = async () => {
  const tableGetData = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!tableGetData.ok) {
    throw new Error(`HTTP error! status: ${tableGetData.status}`);
  }
  const data = await tableGetData.json();
  return data;
};

// creating table with data from API
const getData = async () => {
  try {
    progressBar.style.display = 'block';
    let dataTable = await tableApi();
    let bodyTable = document.querySelector('#tBody');
    dataTable.forEach((obj, index) => {
      let row = document.createElement('tr');
      let cellLP = document.createElement('td');
      let cell = document.createElement('td');
      let cell1 = document.createElement('td');
      let cell2 = document.createElement('td');
      let cell3 = document.createElement('td');
      let cell4 = document.createElement('td');
      cellLP.appendChild(document.createTextNode(index + 1));
      cell.appendChild(document.createTextNode(obj.name));
      cell1.appendChild(document.createTextNode(obj.email));
      cell2.appendChild(document.createTextNode(obj.address.city + ', ' + obj.address.street + ', ' + obj.address.suite));
      cell3.appendChild(document.createTextNode(obj.phone));
      cell4.appendChild(document.createTextNode(obj.company.name));
      bodyTable.appendChild(row);
      row.appendChild(cellLP);
      row.appendChild(cell);
      row.appendChild(cell1);
      row.appendChild(cell2);
      row.appendChild(cell3);
      row.appendChild(cell4);
    });
  } finally {
    progressBar.style.display = 'none';
  }
};

getData();
