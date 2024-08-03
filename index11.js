let input = document.querySelector('input');
let p = document.querySelector('p');
let btn = document.querySelector('#btn');



btn.addEventListener('click',()=> {
    let inp = input.value;
    let str1 = p.innerText;
    p.innerHTML = str1.replace(inp,'<span>$&</span>');

    let span = document.querySelectorAll('span');
    span.forEach(e=> e.style.color = '#483D8B');
    
});








