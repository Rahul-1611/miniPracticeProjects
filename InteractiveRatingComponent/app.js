const buttons = document.querySelectorAll('span');
for (let button of buttons) {
    button.addEventListener('click', function () {
        let se = document.querySelector('.select');
        if (se !== null) {
            se.classList.toggle('select');
            se.classList.toggle('num');
        }
        button.classList.toggle('num');
        button.classList.toggle('select');
    })
}
const thank = document.querySelector('.thanks');
const f = document.querySelector('.f');
const submit = document.querySelector('button');

const ans = document.getElementById('ans');
submit.onclick = function () {
    let s = document.querySelector('.select');
    f.style.display = 'none';
    thank.style.display = 'block';
    ans.innerText = s.innerText;
}

