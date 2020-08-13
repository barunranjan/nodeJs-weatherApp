const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const msg1 = document.getElementById('res-1');
const msg2 = document.getElementById('res-2');

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const location = search.value;
  msg1.textContent = 'Loading...';
  msg2.textContent = '';
  axios(`http://localhost:5000/weather?address=${location}`).then((res) => {
    if (res.data.error) {
      msg1.textContent = res.data.error;
    } else {
      msg1.textContent = res.data.locations;
      msg2.textContent = res.data.forecast;
    }
  });
});
