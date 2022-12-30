//select items//
const alert = document.querySelector('.alert')
const form = document.querySelector('.grocery-form')
const grocery = document.getElementById('grocery')
const submitBtn = document.querySelector('.submit-btn')
const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')


// edit option
let editElement;
let editFlag = false;
let editID = "";

//Event Listener
//submit form
form.addEventListener('submit',addItrm)

function addItem(e){
    e.preventDefault();
}