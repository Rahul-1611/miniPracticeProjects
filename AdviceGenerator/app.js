let quote = document.querySelector('.quote');
let id = document.querySelector('span');
const button = document.querySelector('button');
const svgDiv = document.querySelector('#svg');

let getAdvice = async () => {
    try {
        let advice = await axios.get('https://api.adviceslip.com/advice');
        return advice.data.slip;
    } catch (e) {
        console.log(e);
    }
}

let printAdvice = () => {
    getAdvice()
        .then(data => {
            quote.innerText = `"${data.advice}"`;
            id.innerText = data.id;
        })
        .catch(e => {
            console.log(e);
        })
}

button.addEventListener('click', printAdvice);
printAdvice();

function myFunction(x) {
    if (x.matches) { // If media query matches
        svgDiv.innerHTML = '<svg width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>';
    } else {
        svgDiv.innerHTML = '<svg width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>';
    }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addEventListener('change', myFunction) // Attach listener function on state changes