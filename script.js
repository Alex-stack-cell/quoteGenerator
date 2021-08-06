let quotes=
[
'The secret to life is to love who you are.',
'Look for opportunities in every change in your life.',
'Persist while others are quitting.',
'Success is not final; failure is not fatal: It is the courage to continue that counts.',
'It is better to fail in originality than to succeed in imitation'
];

function displayQuote() {
    let randomIndex = Math.floor(Math.random()*quotes.length);
    let quote = `<div class="card">
    <i class="fas fa-quote-right"></i>
    <p>${quotes[randomIndex]}</p> <!--random quote string-->
    <i class="fas fa-quote-left"></i>
    </div>`;
    let div = document.querySelector('#quote');
    div.innerHTML = quote;
}

// Event handling : on-mouse click
let btn = document.querySelector('#btQuotes');
btn.addEventListener('click',displayQuote);