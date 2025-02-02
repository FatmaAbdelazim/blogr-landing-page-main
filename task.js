var elementProduct = document.getElementById('product');
var elementCompany = document.getElementById('company');
var elementConnect = document.getElementById('connect');
var elementProductLink = document.getElementById('aProduct');
var elementCompanyLink = document.getElementById('aCompany');
var elementConnectLink = document.getElementById('aConnect');
var elementProductH = document.getElementById('hproduct');
var elementCompanyH = document.getElementById('hcompany');
var elementConnectH = document.getElementById('hconnect');
var elementProductLinkH = document.getElementById('haProduct');
var elementCompanyLinkH = document.getElementById('haCompany');
var elementConnectLinkH = document.getElementById('haConnect');
function toggleIcon(linkElement) {
    if (linkElement.classList.contains('fa-chevron-down')) {
        linkElement.classList.remove('fa-chevron-down');
        linkElement.classList.add('fa-angle-up');
    } else {
        linkElement.classList.remove('fa-angle-up');
        linkElement.classList.add('fa-chevron-down');
    }
}

function onclickHProduct() {
    elementProductH.classList.toggle('none');
    toggleIcon(elementProductLinkH); 
}

function onclickHCompany() {
    elementCompanyH.classList.toggle('none');
    toggleIcon(elementCompanyLinkH); 
}

function onclickHConnect() {
    elementConnectH.classList.toggle('none');
    toggleIcon(elementConnectLinkH); 
}

function onclickProduct() {
    elementProduct.classList.toggle('none');
    toggleIcon(elementProductLink); 
}

function onclickCompany() {
    elementCompany.classList.toggle('none');
    toggleIcon(elementCompanyLink); 
}

function onclickConnect() {
    elementConnect.classList.toggle('none');
    toggleIcon(elementConnectLink); 
}

var imgRow2 = document.querySelector('.row2 .right img');
var imgRow3 = document.querySelector('.row4Down .right4 img');
var width = screen.width;

var elementMenuImage = document.getElementsByClassName('menuImage');
var elementNavHidden = document.getElementsByClassName('navHidden');
var index = 0;

if(width <= 800)
{
    imgRow2.setAttribute('src','images/illustration-editor-mobile.svg');
    imgRow3.setAttribute('src','images/illustration-laptop-mobile.svg');
}

function onClickMenu(){
     if(index == 0)
     {
         elementMenuImage[0].setAttribute("src","images/icon-close.svg");
         elementNavHidden[0].classList.add('display');
         elementNavHidden[0].classList.add('flex');
         index = 1;
     }
     else
     {
        elementMenuImage[0].setAttribute('src','images/icon-hamburger.svg');
        elementNavHidden[0].classList.remove('display');
        elementNavHidden[0].classList.remove('flex');
         index = 0;
     } 
}