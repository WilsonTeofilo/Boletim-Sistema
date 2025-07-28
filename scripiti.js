const notas = []
const nomeAluno = []
let aprovado = ""


function média() {
  let materia = window.document.getElementById("cursos").value
  if (
    window.document.getElementById("nota1").value === "" ||
    window.document.getElementById("nota2").value === "" ||
    window.document.getElementById("nota3").value === "" ||  // comparação pra ver se tem algum valor vazio, caso tiver brecar
    window.document.getElementById("nota4").value === "" ||
    window.document.getElementById("nome").value === "" ) {
    window.alert("Campo vazio, complete para prosseguir");
  } else {
    let N1 = Number(window.document.getElementById("nota1").value);
    let N2 = Number(window.document.getElementById("nota2").value);   //se nenhum valor tiver vazio segue criando as conversões de todos os inputs de notas para number, e crio name.
    let N3 = Number(window.document.getElementById("nota3").value);
    let N4 = Number(window.document.getElementById("nota4").value);
   let nomeReal= (window.document.getElementById("nome").value)


 if  (N1 > 10 || N2 > 10 || N3 > 10 || N4 > 10 ||     //aqui em base dos numeros que foram criados vai ter uma validação dentro do else, ver se os 4 numeros são validos.
   N1 < 0  || N2 < 0  || N3 < 0  || N4 < 0){
  window.alert("Nota deve ser entre 0 - 10")
 }else{
  notas.push(N1,N2,N3,N4)         // não deu errado, então segue o fluxo!; empurra as notas pra posição dos vetores e também empurra o nome pra dentro do vetor, cria a a nota média.
  nomeAluno.push(nomeReal)
  let soma = N1+N2+N3+N4
  let notamedia = soma/4
  let ultimoNome = nomeAluno[nomeAluno.length -1]

    if(notamedia>6 ){
      aprovado = "Aprovado" 
    }else{                              //compara se a nota média é >6, se for passou se não, reprovou.
      aprovado ="Reprovado"
    }


    if (materia ==="Ds"){  //seleciona a variavel materia que pegou o VALUE DE SELECT, PORÉM, o value de select maioria das vezes é o propio option. se o select === value option ds
                          // tudo que foi digitado até então vai ser empurrado pra tabela do curso DE DESENVOLVIMENTO DE SISTEMAS. e dps no else if o vice e versa (programação jogo)
  

    let resultado = window.document.getElementById("ADS")
    let bári = window.document.createElement("tbody")
    let linhas = window.document.createElement("tr")
    
    linhas.innerHTML= `
     <td>${ultimoNome}</td>
     <td> ${nomeAluno.indexOf(ultimoNome)}
      <td> ${N1}</td>
        <td> ${N2}</td>
          <td> ${N3}</td>
            <td> ${N4}</td>
              <td> ${notamedia}</td>
                <td> ${aprovado}</td>    
     
     `


     bári.append(linhas)
     resultado.appendChild(bári)
 
    } else if (materia === "JG"){
      let resultado2 = window.document.getElementById("DSJogos")
      let tbare = window.document.createElement("tbody")
      let têérri = window.document.createElement("tr")

      têérri.innerHTML= `
   
     <td>${ultimoNome}</td>
     <td> ${nomeAluno.indexOf(ultimoNome)}
      <td> ${N1}</td>
        <td> ${N2}</td>
          <td> ${N3}</td>
            <td> ${N4}</td>
              <td> ${notamedia}</td>
                <td> ${aprovado}</td>
                  `
                 
                
     
     
     
     
     tbare.appendChild(têérri)
     resultado2.appendChild(tbare)


    }else if (materia ===""){
      window.alert("SELECIONE O CURSO")
    }


  }
    }
  }








  function limpar() {            
    notas.length = 0;
    nomeAluno.value = "";
    
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";
    document.getElementById("nota4").value = "";
  }

