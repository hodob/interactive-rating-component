const numbers = document.querySelectorAll('.num');
const submit = document.querySelector('.submit');
let numSelected = 0;
let actived = false;
console.log(numbers[1].textContent)

for (let i = 0; i < numbers.length; i++) {
  // numbers[i].addEventListener('click', () => numSelected = i + 1);
  if (i + 1 !== numbers[i].textContent) {
    console.log("sfafd")

  }
}




//mouser click

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', () => numbers[i].classList.toggle('num_click'));

  //numbers

  //mouse over
  numbers[i].addEventListener('mouseenter', () => numbers[i].classList.add('num_hover'));

  //mouser leave
  numbers[i].addEventListener('mouseleave', () => numbers[i].classList.remove('num_hover'));
}








//sumbit
//submit over
submit.addEventListener('mouseenter', () => submit.classList.add('submit_hover'));

//submit leave
submit.addEventListener('mouseleave', () => submit.classList.remove('submit_hover'));

//submit clicked
submit.addEventListener('clicked', () => document.querySelector('page').innerHTML = `
<div class="container_2">
      <div class="finalImage"></div>
      <div class="selectNumResult">You selected numSelected out of 5</div>
      <div class="titleText_2">
        Thank You!
      </div>
      <div class="bodyText_2">
      <div>We appreciate you taking the time to give a rating.</div>
      <div>if you ever need mor support, don't hesitate to get in touch!</div>
      </div>
`);

