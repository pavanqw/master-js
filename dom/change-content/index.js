<<<<<<< HEAD

let dv = document.getElementById('container')
let ul = document.createElement('ul')
['AppLe','orange','potato'].forEach(fruit => {
    let li = document.createElement('li');
    li.textContent=fruit; 
    ul.appendChild(li)
})
dv.appendChild(ul);
=======
const acsel =  document.getElementById('fck')
ascel.textContent ="chanage content"

const ascsel1  =  document.getElementById('.fck1')
ascsel1.innerHtml('<p>New Content</p>')

const ascel2  = document.getElementById('.fck2')
ascel2.innerText ="change content"
const imgL =document.getElementById('.img1')
imgL.setAttribute('src','newImage.png')
//styling
ascel1.style.color='red'
ascel1.addClassList('.hightlight')

//add or remove element

const nwEl =document.createElement('div')

acsel=document.appendChild(nwEl)

ascel.removeChild(nwEl)

const ascont =document.getElementById('container')
const btnEl = document.createElement('button')
btnEl.textContent="click me"
document.body.appendChild(btnEl)
let btnEl = document.createElement('button')
btnEl.textContent="click me"
document.body.appendChild(btnEl)
btnEl.addEventListener('click',function(){
    document.body.removeChild(btnEl)
})
let ftdv = document.getElementById('container');
let ul= document.createElement('ul');
['Apple','orange','potato'].forEach(fruit => {
    let li = document.createElement('li')
    li.textContent=fruit
    ul.appendChild(li);
})
ftdv.appendChild(ul)
>>>>>>> 5d0168be56cbdcb7fc26cd429dcc91e87379125f
