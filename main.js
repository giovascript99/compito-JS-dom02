let titolo = document.querySelector('#titolo').value;
let paragrafo = document.querySelector('#paragrafo').value;
let creaArticolo = document.querySelector('#creaArticolo');
let date = new Date();
let formatDate = date.toLocaleDateString();
let articolo = document.createElement('article');
console.log(articolo);




creaArticolo.addEventListener('click' , ()=>{
    articolo.innerHTML = 
    `
        <h2>${titolo}</h2>
        <p>${paragrafo}</p>
        <p>Pubblicato il: ${formatDate}</p>
    `;
    
    document.querySelector('#articoli').appendChild(articolo);
    document.querySelector('#titolo').value = '';
    document.querySelector('#paragrafo').value = '';
    
    if (titolo == '' || paragrafo == '') {
        alert('Devi inserire sia il titolo che il paragrafo.');
    
    }
})