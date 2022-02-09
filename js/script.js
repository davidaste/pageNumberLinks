//jshint esversion:6

const contactList = document.querySelector('.contact-list');

const contactItem = contactList.children;
const contactsInPage=10; //number of contacts on page

var page = 1;

function homePage(list, page){
    for (let i=0 ; i<list.length; i++){
    
        if (i<(page)*10 || i>(page)*10+9) {
            list[i].style.display = "none"
        }
        else{
            list[i].style.display = "block"
        }   
    }
}

homePage(contactItem,0);

//end of limiting contacts on page

function appendPageLinks(list){
    const totalPages = Math.ceil(list.length/contactsInPage);//round the number up to the next number
    console.log(totalPages);
    const ItemList = document.querySelector('div.pagination');//pagination link access

    for (let i=1 ; i<=totalPages; i++){
        var addbutton = document.createElement('li');
        addbutton.innerHTML='<a class="active" >' + i + '</a>';
        ItemList.appendChild(addbutton)
}

var numberButtons = document.querySelectorAll('.active');

for (let i=0 ; i<numberButtons.length; i++){
    numberButtons[i].classList.remove('active')
}

for (let i=0 ; i<numberButtons.length; i++){
    for (let a=0; a<numberButtons.length; a++){
        numberButtons[a].classList.remove('active')}
        numberButtons[i].addEventListener('click', function(){
            homePage(contactItem, i);
            numberButtons[i].classList.add('active');
            numberButtons[i].classList.remove('active');
        })
    }
}

appendPageLinks(contactItem);