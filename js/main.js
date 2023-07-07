let set_theme = document.getElementById('body');
let checkbox = document.getElementById('toggle-checkbox');
let header = document.getElementById('header');
let logo = document.querySelector('.logo-nav');

checkbox.addEventListener("change", validarCheckbox, false);

function validarCheckbox()
{
    let checked = checkbox.checked;

    if (checked)
    {
        set_theme.classList.add('night');
        header.classList.add('header-dark');
        logo.src = "img/Logo-Dev-light.svg";
    }
    else
    {
        set_theme.classList.remove('night');
        header.classList.remove('header-dark');
        logo.src = "img/Logo-Dev.svg";
    }
};

date = new Date();
year = date.getFullYear();

document.getElementById("current_date").innerHTML = year;