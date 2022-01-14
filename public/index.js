const express = require('express')
const app = express()
const path = require('path')
const PORT = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/index.html'))
);

app.get('/style.css', (req, res) =>
  res.sendFile(path.join(__dirname, '/style.css'))
);

// init();

// async function init() {
//   if (location.search.split("=")[1] === undefined) {
//     const workout = await API.getLastWorkout();
//     if (workout) {
//       location.search = "?id=" + workout._id;
//     } else {
//       document.querySelector("#continue-btn").classList.add("d-none")
//     }
//   }
// }

app.listen(PORT, () => {
  console.log('server running...')
})