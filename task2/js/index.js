$( function() {
    $( ".container" ).sortable();
    $( ".container" ).disableSelection();
});

let list = document.getElementsByTagName('input'),
submit  = document.querySelector('button[type="submit"]'),
b = document.getElementById('add-fild');
const container = document.querySelector('.container');

function addFild(name) {
    let input = document.createElement("input");
    input.type = name;
    b.before(input);
}

b.addEventListener('click',(e)=>{
    e.preventDefault();
    addFild('input')
});


let nameDiv = document.createElement('div');
let fragment = document.createDocumentFragment();
const userName = [];
submit.addEventListener("click",(e)=>{
    container.innerHTML = "";
    e.preventDefault();
    userName.length = 0;
    list.forEach = [].forEach;
    list.forEach((item)=>{
        if(!item.value.length){
            item.style.borderColor = "red";
            return;
        }else{
            item.style.borderColor = ''
        }
        userName.push(item.value);
    });

    for(let i=0;i<userName.length;i++){
        if(userName.length  < 7) break;
       let div =  document.createElement('div');
        div.classList = 'vertical-fild ui-state-default';
        div.innerText = userName[i];
        fragment.append(div);
    }
   container.append(fragment);
});


