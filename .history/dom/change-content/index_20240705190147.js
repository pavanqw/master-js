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
ascont.appendChild(btnEl)