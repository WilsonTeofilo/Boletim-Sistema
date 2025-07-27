const notas = []
let nomeAluno = window.document.getElementById("nome");
let aprovado = ""


function média() {
  let materia = window.document.getElementById("cursos").value
  if (
    window.document.getElementById("nota1").value === "" ||
    window.document.getElementById("nota2").value === "" ||
    window.document.getElementById("nota3").value === "" ||
    window.document.getElementById("nota4").value === "" ||
    window.document.getElementById("nome").value === "" ) {
    window.alert("Campo vazio, complete para prosseguir");
  } else {
    let N1 = Number(window.document.getElementById("nota1").value);
    let N2 = Number(window.document.getElementById("nota2").value);
    let N3 = Number(window.document.getElementById("nota3").value);
    let N4 = Number(window.document.getElementById("nota4").value);

 if  (N1 > 10 || N2 > 10 || N3 > 10 || N4 > 10 ||
   N1 < 0  || N2 < 0  || N3 < 0  || N4 < 0){
  window.alert("Nota deve ser entre 0 - 10")
 }else{
  notas.push(N1,N2,N3,N4)
  let soma = N1+N2+N3+N4
  let notamedia = soma/4

    if(notamedia>6 ){
      aprovado = "Aprovado" 
    }else{
      aprovado ="Reprovado"
    }


    if (materia ==="Ds"){

  

    let resultado = window.document.getElementById("ADS")
    let bári = window.document.createElement("tbody")
    let linhas = window.document.createElement("tr")
    
    linhas.innerHTML= `
     <td>${nomeAluno.value}</td>
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

      têérri.innerHTML=
      `
     <td>${nomeAluno.value}</td>
      <td> ${N1}</td>
        <td> ${N2}</td>
          <td> ${N3}</td>
            <td> ${N4}</td>
              <td> ${notamedia}</td>
                <td> ${aprovado}</td>
     
     `
     tbare.appendChild(têérri)
     resultado2.appendChild(tbare)


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