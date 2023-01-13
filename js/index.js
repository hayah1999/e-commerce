const bar = document.getElementById("bars");
const navRes = document.getElementById("navbar-res");
const menu = document.getElementById("menu-res");

let clicked = 0;

bar.addEventListener('click', () => {
    if (clicked == 0) {
        menu.style.display = 'block'
        menu.innerHTML = `<nav  id="nav-res">
        <ul class='ul-res'>
            <li class='li-res'>
                <a id="active" href="index.html" class='a-res'>Home</a>
            </li>
            <li class='li-res'>
                <a class='a-res' href="">Contact Us</a>
            </li>
            <li class='li-res'>
                <a class='a-res' href="">Users</a>
            </li>
            <li class='li-res'>
                <a class='a-res' href="login.html">Login</a>
            </li>
            <li class='li-res'>
                <a class='a-res' href="register.html">Register</a>
            </li>
        </ul>
    </nav>`;

        clicked = 1;
        console.log(clicked)

    }else{
        
        clicked = 0;
        console.log(clicked)
        menu.style.display = "none";
    }
});



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

