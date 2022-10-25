let textTag = document.querySelector('.section1 h1');
let text = textTag.textContent;

let letters = text.split('');

text = ''

letters.forEach((letter) =>{
    if(letter ==' '){
        letter = '&nbsp;'
    }
    text += '<span>'+letter+'</span>';
})

textTag.innerHTML = text;

letters = textTag.querySelectorAll('span')
let index = 0;

let interval = setInterval(() =>{
    
    letters[index].classList.add('fadeMove')
    index++;
    if(index=== (letters.length)){
        clearInterval(interval)
    }
},'200')


let line = document.querySelector('.border-line')
let border = document.querySelector('.border-line')

window.onscroll = () => {
    targetWidth = this.scrollY/window.innerHeight*100
    if(!(targetWidth>100))
    line.style.width  = targetWidth + '%';
}