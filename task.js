var elementProduct = document.getElementById('product');
var elementCompany = document.getElementById('company');
var elementConnect = document.getElementById('connect');
var elementProductLink = document.getElementById('aProduct');
var elementCompanyLink = document.getElementById('aCompany');
var elementConnectLink = document.getElementById('aConnect');
function toggleIcon(linkElement) {
    if (linkElement.classList.contains('fa-chevron-down')) {
        linkElement.classList.remove('fa-chevron-down');
        linkElement.classList.add('fa-angle-up');
    } else {
        linkElement.classList.remove('fa-angle-up');
        linkElement.classList.add('fa-chevron-down');
    }
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