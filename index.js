// console.log('lalalalala');

let ham = document.querySelector('#navbar-burger')
var menu = document.querySelector('#navbar-menu')
let url = 'https://still-spire-37210.herokuapp.com/positions.json'
const JOBS = []

/* feature/tack_2 */
fetch(url).then(function(response) {
  return response.json();
  // console.log(response.json());
}).then(function (value) { JOBS.push(value)})
console.log(JOBS);

/* feature/task_1 */
ham.addEventListener('click', function () {
  menu.classList.toggle('is-active');
})

