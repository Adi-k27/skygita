/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function slideMenu() {
    var slideMenuStatus = document.getElementById('slide-main-navigation').style.display;
    if (slideMenuStatus === 'none' || slideMenuStatus === '') {
        document.getElementById('slide-main-navigation').style.display = 'block';
        document.getElementById('mainHeader').style.margin = '0';
    } else {
        document.getElementById('slide-main-navigation').style.display = 'none';
        document.getElementById('mainHeader').style.margin = '80px 0 0 0';
    }
    window.scrollTo(0, 0);
}

function navigateTabs(tab) {
    resetNavTabValues();
    var temp = '';
    document.getElementById(tab.id).style.display = 'block';
    if (tab.id !== 'newsroom') {
        temp = tab.id + 'Menu';
        document.getElementById(temp).style.color = 'red';
    }
    window.scrollTo(0, 0);
}

function resetNavTabValues() {
    document.getElementById('homeMenu').style.color = 'white';
    document.getElementById('home').style.display = 'none';
    document.getElementById('aboutMenu').style.color = 'white';
    document.getElementById('about').style.display = 'none';
    document.getElementById('servicesMenu').style.color = 'white';
    document.getElementById('services').style.display = 'none';
    document.getElementById('clientsMenu').style.color = 'white';
    document.getElementById('clients').style.display = 'none';
    document.getElementById('careersMenu').style.color = 'white';
    document.getElementById('careers').style.display = 'none';
    document.getElementById('contactMenu').style.color = 'white';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('newsroom').style.display = 'none';
}
function servicesNav(id) {
    navigateTabs(services);
    var elmnt = document.getElementById(id);
    var yourHeight = 90;
    elmnt.scrollIntoView(true);
    var scrolledY = window.scrollY;
    if (scrolledY) {
        window.scroll(0, scrolledY - yourHeight);
    }
}
function display(tab) {
    var details = document.getElementById(tab.id);
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }

}

function contactSubmit() {

    const xhr = new XMLHttpRequest();
    var request = "Name=" + document.getElementsByName("Name")[0].value + "&Email=" + document.getElementsByName("Email")[0].value
            + "&Phone=" + document.getElementsByName("Phone")[0].value + "&Message=" + document.getElementsByName("Message")[0].value;

    xhr.onload = function () {
        const success = document.getElementById('failure');
        const failure = document.getElementById('success');
        document.getElementById('success').style.display = 'block';
        document.getElementById('failure').style.display = 'block';
    };

    xhr.open("POST", "scripts/contact.php");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(request);
}

function reset() {
    document.getElementsByName("Name")[0].value = '';
    document.getElementsByName("Email")[0].value = '';
    document.getElementsByName("Phone")[0].value = '';
    document.getElementsByName("Message")[0].value = '';
    resetError();
}

function resetError() {
    document.getElementById('name').style.display = 'none';
    document.getElementById('email').style.display = 'none';
    document.getElementById('phone').style.display = 'none';
    document.getElementById('message').style.display = 'none';
    document.getElementById('failure').style.display = 'none';
    document.getElementById('success').style.display = 'none';
}


function validateForm() {
    var name = document.getElementsByName("Name")[0].value;
    var email = document.getElementsByName("Email")[0].value;
    var phone = document.getElementsByName("Phone")[0].value;
    var message = document.getElementsByName("Message")[0].value;
    var error = false;
    resetError();
    if (name === undefined || name === '') {
        document.getElementById('name').style.display = 'block';
        error = true;
    }
    if (email !== undefined && email !== '') {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            document.getElementById('email').style.display = 'block';
            document.getElementById('validEmail').innerHTML = 'Invalid e-mail';
            error = true;
        }
    } else {
        document.getElementById('email').style.display = 'block';
        error = true;
    }
    if (phone === undefined || phone === '') {
        document.getElementById('phone').style.display = 'block';
        error = true;
    }
    if (message === undefined || message === '') {
        document.getElementById('message').style.display = 'block';
        error = true;
    }
    if (!error) {
        contactSubmit();
    }
}
