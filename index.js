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
// var searchParams = new URLSearchParams(paramsString);

btn.addEventListener('click', function (e) {
  e.preventDefault();
  let path = "https://still-spire-37210.herokuapp.com/positions.json?" + `description=${des[0].value}` + `&location=${loc[0].value}` + `&full_time=on`

  console.log(path);

  fetch(path)
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      console.log(data);
    })
})

// fetch(url)
// .then(function (resp) {
//   return resp.json();
// }).then(function (data) {
//   console.log(data);
// })

/* Task_2 */
// fetch(url).then(function(response) {
//   return response.json();
// }).then(function (value) { JOBS.push(value)})
// console.log(JOBS);





// function toHtml(data) {
//   return `
//   <tbody id="job-pannel">
//     <tr>
//       <td>
//         <h4><a href="${data.url}">
//         ${data.title}</a></h4>
//         <p class="source">
//         <a class="company" href="${data.company_url}">${data.company}</a>
//         –
//         <strong class="fulltime">${data.type}</strong>
//         </p>
//       </td>
//       <td class="meta">
//         <span class="location">${data.location}</span>
//       </td>
//     </tr>
//   </tbody>
//   `
// }


/* feature/task_1 */
ham.addEventListener('click', function () {
  menu.classList.toggle('is-active');
})

