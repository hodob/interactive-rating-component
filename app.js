const numbers = document.querySelectorAll('.num');
const submit = document.querySelector('.submit');
const page = document.getElementById('page');
let numSelected = 0;
for (let i = 0; i < numbers.length; i++) {

  ////numbers////
  //mouser click
  numbers[i].addEventListener('click', () => numberSelected(i));
  //mouse over
  numbers[i].addEventListener('mouseenter', () => numbers[i].classList.add('num_hover'));
  //mouser leave
  numbers[i].addEventListener('mouseleave', () => numbers[i].classList.remove('num_hover'));
}

////sumbit////
//submit over
submit.addEventListener('mouseenter', () => submit.classList.add('submit_hover'));

//submit leave
submit.addEventListener('mouseleave', () => submit.classList.remove('submit_hover'));

//submit clicked
submit.addEventListener('click', () => page.innerHTML = `
<div class="container_2">
<div class="finalImage"></div>
<div class="selectNumResult">You selected  ${numSelected} out of 5</div>
<div class="titleText">
    Thank You!
</div>
<div class="bodyText">
  <div>We appreciate you taking the time to give a rating.</div>
  <div>if you ever need mor support, don't hesitate to get in touch!</div>
  </div>
</div>
`);

////function////
function numberSelected(i) {
  for (let j = 0; j < numbers.length; j++) {
    if (i == j) {
      numbers[i].classList.add('num_click');
      numSelected = i + 1;
    } else { numbers[j].classList.remove('num_click'); }
  }
}