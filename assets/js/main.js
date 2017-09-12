function showMenu() {
  let menu = document.querySelector('.menu');
  let button = document.querySelector('.fa');
  button.addEventListener('click', function(){
    console.log(button.classList);
    button.classList.toggle('fa-bars');
    button.classList.toggle('fa-times');
    menu.classList.toggle('active');
  });

};
showMenu();
