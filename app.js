const numbers = document.querySelectorAll('.num');
//mouser click
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', () => numbers[i].classList.toggle('num_click'));
}
//mouse over
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('mouseenter', () => numbers[i].classList.add('num_hover'));
}
//mouser leave
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('mouseleave', () => numbers[i].classList.remove('num_hover'));
}

//submit click
let submitClecked