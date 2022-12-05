let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');
};




//pop up form


function openForm() {
   document.getElementById("myForm").style.display = "block";
 }
 
 function closeForm() {
   document.getElementById("myForm").style.display = "none";
 }


// function formsubmission(e){
//    // e.preventDefault();
//    const typedplace = document.getElementById('fname').value ;
//    console.log("form just got submitted");
//    console.log(typedplace);
// }