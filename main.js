const input = document.querySelector('.input-text');
const buttonOne = document.querySelector('.button-one');
const buttonOneLast = document.querySelector('.button-one-last');
const buttonTwo = document.querySelector('.button-two');
const buttonTwoLast = document.querySelector('.button-two-last');
const buttonThree = document.querySelector('.button-three');
const buttonThreeLast = document.querySelector('.button-three-last');
const pattern = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz()' + '!@#$%^&*_-?/><|';
const patternTwo = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

buttonOne.addEventListener('click', () =>{
    let res = '';
    for (i=0; i<=4; i++){
        const genPassword = Math.floor(Math.random()*pattern.length); //getting random number
        res += pattern.charAt(genPassword);    //get a character at position GENPASSWORD
    }
    input.value = res;
})

buttonOneLast.addEventListener('click', () =>{
    let res = '';
    for (i=0; i<=4; i++){
        const genPassword = Math.floor(Math.random()*patternTwo.length); //getting random number
        res += patternTwo.charAt(genPassword);    //get a character at position GENPASSWORD
    }
    input.value = res;
})


buttonTwo.addEventListener('click', () =>{
    let res = '';
    for (i=0; i<=9; i++){
        const genPassword = Math.floor(Math.random()*pattern.length); //getting random number
        res += pattern.charAt(genPassword);   //get a character at position GENPASSWORD
    }
    input.value = res;
})

buttonTwoLast.addEventListener('click', () =>{
    let res = '';
    for (i=0; i<=9; i++){
        const genPassword = Math.floor(Math.random()*patternTwo.length); //getting random number
        res += patternTwo.charAt(genPassword);    //get a character at position GENPASSWORD
    }
    input.value = res;
})

buttonThree.addEventListener('click', () =>{
    let res = '';
    for (i=0; i<=19; i++){
        const genPassword = Math.floor(Math.random()*pattern.length); //getting random number
        res += pattern.charAt(genPassword);     //get a character at position GENPASSWORD
    }
    input.value = res;
})

buttonThreeLast.addEventListener('click', () =>{
    let res = '';
    for (i=0; i<=19; i++){
        const genPassword = Math.floor(Math.random()*patternTwo.length); //getting random number
        res += patternTwo.charAt(genPassword);     //get a character at position GENPASSWORD
    }
    input.value = res;
})


const white = document.querySelector('.white');
const pink = document.querySelector('.pink');
const blue = document.querySelector('.blue');
const black = document.querySelector('.black');
const green = document.querySelector('.green');
const body = document.querySelector('.body');
const button = document.querySelectorAll('.btn');
const h1 = document.querySelector('.first-heading');





white.addEventListener('click', () => {
    body.style.backgroundColor = 'white';
    input.style.color = 'burlywood';
    input.style.border = '2px solid burlywood';
    //loop through all buttons and apply the necessary changes
    for (let i = 0; i < button.length; i++){
        button[i].style.backgroundColor = 'bisque';
        button[i].style.color = 'white';
        button[i].style.border = '3px solid white';
        // button[i].classList.add('button::hover');
    }

    

    h1.style.color = 'burlywood';
})



pink.addEventListener('click', () =>{
    body.style.backgroundColor = 'pink';
    input.style.color = 'pink'
    input.style.border = '2px solid white';
    //loop through all buttons and apply the necessary changes
    for (let i = 0; i < button.length; i++){
        button[i].style.backgroundColor = 'pink';
        button[i].style.color = 'white';
        button[i].style.border = '1px solid black';
    }

    h1.style.color = 'white';
})

blue.addEventListener('click', () =>{
    body.style.backgroundColor = 'rgb(136, 195, 246)';
    input.style.color = 'rgb(136, 195, 246)';
    input.style.border = '2px solid white';
    //loop through all buttons and apply the necessary changes
    for (let i = 0; i < button.length; i++){
        button[i].style.backgroundColor = 'rgb(136, 195, 246)';
        button[i].style.color = 'white';
        button[i].style.border = '1px solid black';
    }

    h1.style.color = 'white';
})

black.addEventListener('click', () =>{
    body.style.backgroundColor = 'black';
    input.style.color = 'black'
    input.style.border = '2px solid black';
    //loop through all buttons and apply the necessary changes
    for (let i = 0; i < button.length; i++){
        button[i].style.backgroundColor = 'black';
        button[i].style.color = 'white';
        button[i].style.border = '1px solid white';
    }

    h1.style.color = 'white';
})


    //refresh when the greeen color is clicked
    green.addEventListener('click', () =>{
        window.location.reload();
    });

//     green.addEventListener('click', () =>{
//         body.style.backgroundColor = 'aqua';
//         input.style.color = 'aqua'
//         input.style.border = '';
//         for (let i = 0; i < button.length; i++){
//             button[i].style.backgroundColor = 'aqua';
//             button[i].style.color = 'black';
//             button[i].style.border = '1px solid transparent';
//         }
    
//         h1.style.color = 'white';
// })



//setting the copy function
const copy = document.querySelector('.copy').src;


function copyAndPaste(){
    if (copy.includes('copy')){
        input.select();
        document.execCommand('copy');
    }
}
