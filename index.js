// console.log('lalalalala');

let ham = document.querySelector('#navbar-burger')
var menu = document.querySelector('#navbar-menu')
let url = 'https://still-spire-37210.herokuapp.com/positions.json'
const JOBS = []

/* feature/tack_2 */
let des = document.getElementsByName('description')
let loc = document.getElementsByName('location')
let fullTime = document.getElementsByName('full_time')
let btn = document.querySelector('.button')

var paramsString = "https://still-spire-37210.herokuapp.com/positions.json?";
var searchParams = new URLSearchParams(paramsString);
// searchParams.append("topic", "webdev");




btn.addEventListener('click', function (e) {
  e.preventDefault();

  searchParams.append("description", des[0].value);
  searchParams.append("location", loc[0].value);
  searchParams.append("full_time", fullTime[0].checked);
  let path = searchParams.toString();
  console.log(path);

  fetch(path).then(function(response) {
    return response.json();
  }).then(function (value) {
    JOBS.push(value)
  })
  console.log(JOBS);
  // console.log(fullTime);
  // console.log(des[0].value);
})

//?description=ruby&location=new york&full_time=true





fetch(url).then(function(response) {
  return response.json();
}).then(function (value) { JOBS.push(value)})
// console.log(JOBS);

/* feature/task_1 */
ham.addEventListener('click', function () {
  menu.classList.toggle('is-active');
})

