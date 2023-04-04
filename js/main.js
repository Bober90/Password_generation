const passwordField=document.querySelector('.js-password-field');
const lengthItem=document.querySelector('.js-length-item');
const lengthRange=document.querySelector('.js-length-range');
const number=document.querySelector('.js-number');
const symbols=document.querySelector('.js-symbols');
const btnGenerate=document.querySelector('.js-btn-generate');

charsNumbers='0123456789';
charsSymbol='@#$%^&*([]';

lengthRange.addEventListener('input',function(){
    lengthItem.value=lengthRange.value;
});

lengthItem.addEventListener('input',function(){
    lengthRange.value=lengthItem.value;
    });

    btnGenerate.addEventListener('click', ()=>{
        let password=' ';

        let charsLetters=
        'ABCDEFGIJKLMNOPQRSTUVWXYZabcdefgijklmnopqrstuvwxyz';

        if (number.checked){
            charsLetters+=charsNumbers;
            console.log(charsLetters);
        }

        if (symbols.checked){
            charsLetters+=charsSymbol;
            console.log(charsLetters);
        }

        for(let i=0; i<lengthItem.value; i++){
            password+=charsLetters[Math.floor(Math.random()*charsLetters.length)];
            console.log (Math.floor(Math.random()*charsLetters.length));

            passwordField.innerHTML=password;
        }

    });