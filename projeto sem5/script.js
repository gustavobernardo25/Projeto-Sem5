
const cor1 = document.getElementById('cor1')
const cor2 = document.getElementById('cor2')
const graus = document.getElementById('graus')
const corfonte = document.getElementById('cor-fonte')
const textarea = document.getElementById('textarea')
const tamanhofonte = document.getElementById('tamanho-fonte')


function salvar(){
    
    var itens = {
        cor1 : cor1.value,
        cor2 : cor2.value,
        graus : graus.value,
        corfonte : corfonte.value,
        textarea : textarea.value,
        tamanhofonte : tamanhofonte.value
    }
    
    
    /*transformar o objeto itens em JSON e salvar no local Storage*/
    var itensjson = JSON.stringify(itens);
    localStorage.setItem('estilos', itensjson);
    
    
    
    mudaStyle()
}


const texto = document.getElementById('texto')

function mudaStyle(){
    const parsedLocalStorageObject = JSON.parse(localStorage.getItem('estilos'));
    
    texto.innerHTML = `${parsedLocalStorageObject.textarea}`;
    texto.style.color = parsedLocalStorageObject.corfonte;
    texto.style.fontSize = `${parsedLocalStorageObject.tamanhofonte}px`;
    
    
    document.body.style.backgroundImage = `linear-gradient(${parsedLocalStorageObject.graus}deg, 
        ${parsedLocalStorageObject.cor1}, ${parsedLocalStorageObject.cor2})`;
    }
    
    function zeraDados(){
    localStorage.removeItem('estilos')
    location.reload();
    return false;
    }


    
