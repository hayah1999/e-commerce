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
                <a href="index.html" class='a-res'>Home</a>
            </li>
            <li class='li-res'>
                <a class='a-res' href="contactUs.html">Contact Us</a>
            </li>
            <li class='li-res'>
                <a class='a-res' href="usersTable.html">Users</a>
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

    }else{
        
        clicked = 0;
        menu.style.display = "none";
    }
});
