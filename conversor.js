let botaoCodificar = document.querySelector('#botao-codificar');
let botaoDecodificar = document.querySelector('#botao-decodificar');
let mensagem = document.getElementById('mensagem-string');
let numero = document.getElementById('incremento-num');

// codificar
var resultado = document.getElementById('resultado');
botaoCodificar.addEventListener('click', function() {
var select = document.getElementById('selectbasic');
if (select.value === 'Cesar') {
  resultado.innerHTML = caesarCipher(mensagem.value, Number(numero.value));
}
else {
  resultado.innerHTML = codificaBase64(mensagem.value);
}
});

// decodificar
botaoDecodificar.addEventListener('click', function() {
var select = document.getElementById('selectbasic');
if (select.value === 'Cesar') {
  resultado.innerHTML = caesarCipherDecode(mensagem.value, Number(numero.value));
}

else {
  resultado.innerHTML = decodificaBase64(mensagem.value);
}
});



// funcao que permite ver o elemento oculto ao ser selecionada a opçao cesar
function mostraCampo( el )
{
  
  let inputEntrada = document.getElementById('entrada');
  if (el.value === 'Cesar'){ 
   	  inputEntrada.style.display = "block";
  }
  else {
      inputEntrada.style.display = "none";
  }
}


// BOTOES
// funcao que permite ver o elemento oculto ao ser selecionada a opçao "codificar"
function mostraBotaoCodificar( el )
{

  if (el.value === 'Codificar'){ 
   	  botaoCodificar.style.display = "block";
      botaoDecodificar.style.display = "none";
  }
  else {
      botaoCodificar.style.display = "none";
      botaoDecodificar.style.display = "block";
  }
}

// funcao que permite ver o elemento oculto ao ser selecionada a opçao "decodificar"
function mostraBotaoDecodificar( el )
{

  if (el.value === 'Decodificar'){ 
   	  botaoDecodificar.style.display = "block";
       botaoCodificar.style.display = "none";
  }
  else {
      botaoDecodificar.style.display = "none";
      botaoCodificar.style.display = "block";
  }
}

    // conversor código de cesar (função anonima)
    const caesarCipher = (texto, incremento)=>{

        let codificado = "", code;
        for (let i=0; i<texto.length;i++){
          if (texto.charCodeAt(i)>=65 && texto.charCodeAt(i)<=90){
            code = (((texto.charCodeAt(i)-65) + incremento) % 26)+ 65;
          }
          else if (texto.charCodeAt(i)>=97 && texto.charCodeAt(i)<=122){
            code = (((texto.charCodeAt(i)-97) + incremento) % 26)+ 97;
          }
          else if (texto.charCodeAt(i)===32){
            code = 32;
          }
          codificado+=String.fromCharCode(code);
        }
        return codificado.toLowerCase();
      }

    // conversor código de cesar (função anonima)
    const caesarCipherDecode = (texto, incremento)=>{
      
        let decodificado = "", decode;
        for (let i=0; i<texto.length;i++){
          if (texto.charCodeAt(i) >=65 && texto.charCodeAt(i)<=90){
            decode = (((texto.charCodeAt(i)-90) - incremento) % 26)+ 90;
          }
          else if (texto.charCodeAt(i)>=97 && texto.charCodeAt(i) <= 122){
            decode = (((texto.charCodeAt(i)-122) - incremento) % 26)+ 122;
          }
          else if (texto.charCodeAt(i)===32){
            decode = 32;
          }

          decodificado+=String.fromCharCode(decode);
        }
        return decodificado.toLowerCase();
      }
      
    function codificaBase64(texto) {
        return btoa(texto);
    }

    function decodificaBase64(texto) {
        return atob(texto);
    }



