// ===================================
// BOLETIM ESCOLAR — scripiti.js
// ===================================

// Estado da aplicação
let contadorDS = 0;
let contadorJogos = 0;

/**
 * Exibe uma notificação toast na tela.
 * @param {string} message - Texto da notificação
 * @param {"success"|"error"|"warning"} type - Tipo do toast
 */
function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  const icon = document.getElementById("toast-icon");
  const msg = document.getElementById("toast-msg");

  const icons = {
    success: "✅",
    error: "❌",
    warning: "⚠️",
  };

  icon.textContent = icons[type] || "ℹ️";
  msg.textContent = message;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

/**
 * Atualiza os badges de contagem e a visibilidade das tabelas.
 */
function atualizarUI() {
  // Badge de contagem
  const badgeDS = document.getElementById("badge-ds");
  const badgeJogos = document.getElementById("badge-jogos");
  badgeDS.textContent = `${contadorDS} aluno${contadorDS !== 1 ? "s" : ""}`;
  badgeJogos.textContent = `${contadorJogos} aluno${contadorJogos !== 1 ? "s" : ""}`;

  // Mostrar/esconder tabelas e empty states
  const tabelaDS = document.getElementById("ADS");
  const tabelaJogos = document.getElementById("DSJogos");
  const emptyDS = document.getElementById("empty-ds");
  const emptyJogos = document.getElementById("empty-jogos");

  if (contadorDS > 0) {
    tabelaDS.classList.add("has-rows");
    emptyDS.classList.add("hidden");
  } else {
    tabelaDS.classList.remove("has-rows");
    emptyDS.classList.remove("hidden");
  }

  if (contadorJogos > 0) {
    tabelaJogos.classList.add("has-rows");
    emptyJogos.classList.add("hidden");
  } else {
    tabelaJogos.classList.remove("has-rows");
    emptyJogos.classList.remove("hidden");
  }
}

/**
 * Calcula a média do aluno e insere na tabela correta.
 */
function calcularMedia() {
  const nomeInput = document.getElementById("nome");
  const cursoInput = document.getElementById("cursos");
  const n1Input = document.getElementById("nota1");
  const n2Input = document.getElementById("nota2");
  const n3Input = document.getElementById("nota3");
  const n4Input = document.getElementById("nota4");

  const nome = nomeInput.value.trim();
  const curso = cursoInput.value;
  const N1 = n1Input.value;
  const N2 = n2Input.value;
  const N3 = n3Input.value;
  const N4 = n4Input.value;

  // Validação: campos vazios
  if (!nome) {
    showToast("Preencha o nome do aluno.", "warning");
    nomeInput.focus();
    return;
  }

  if (!curso) {
    showToast("Selecione o curso.", "warning");
    cursoInput.focus();
    return;
  }

  if (N1 === "" || N2 === "" || N3 === "" || N4 === "") {
    showToast("Preencha todas as 4 notas.", "warning");
    return;
  }

  const nota1 = Number(N1);
  const nota2 = Number(N2);
  const nota3 = Number(N3);
  const nota4 = Number(N4);

  // Validação: notas entre 0 e 10
  if (
    nota1 < 0 || nota1 > 10 ||
    nota2 < 0 || nota2 > 10 ||
    nota3 < 0 || nota3 > 10 ||
    nota4 < 0 || nota4 > 10
  ) {
    showToast("As notas devem estar entre 0 e 10.", "error");
    return;
  }

  // Cálculo da média
  const media = (nota1 + nota2 + nota3 + nota4) / 4;
  const mediaFormatada = media.toFixed(1);
  const aprovado = media >= 6;
  const situacao = aprovado ? "Aprovado" : "Reprovado";
  const statusClass = aprovado ? "status-aprovado" : "status-reprovado";

  // Escolher tabela correta
  let tbodyId, targetSectionId;
  if (curso === "Ds") {
    contadorDS++;
    tbodyId = "tbody-ds";
    targetSectionId = "section-ds";
  } else if (curso === "JG") {
    contadorJogos++;
    tbodyId = "tbody-jogos";
    targetSectionId = "section-jogos";
  }

  const idAluno = curso === "Ds" ? contadorDS : contadorJogos;

  // Criar a linha
  const tbody = document.getElementById(tbodyId);
  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${nome}</td>
    <td>${idAluno}</td>
    <td>${nota1}</td>
    <td>${nota2}</td>
    <td>${nota3}</td>
    <td>${nota4}</td>
    <td>${mediaFormatada}</td>
    <td><span class="status ${statusClass}">${situacao}</span></td>
  `;

  tbody.appendChild(tr);

  // Atualizar interface
  atualizarUI();

  // Toast de sucesso
  const emoji = aprovado ? "🎉" : "📉";
  showToast(
    `${nome} — Média: ${mediaFormatada} (${situacao}) ${emoji}`,
    aprovado ? "success" : "error"
  );

  // Scroll suave até a seção da tabela
  const targetSection = document.getElementById(targetSectionId);
  targetSection.scrollIntoView({ behavior: "smooth", block: "center" });

  // Limpar apenas os campos de nota e nome para facilitar novo cadastro
  nomeInput.value = "";
  n1Input.value = "";
  n2Input.value = "";
  n3Input.value = "";
  n4Input.value = "";
  nomeInput.focus();
}

/**
 * Limpa todos os campos do formulário.
 */
function limpar() {
  document.getElementById("nome").value = "";
  document.getElementById("cursos").selectedIndex = 0;
  document.getElementById("nota1").value = "";
  document.getElementById("nota2").value = "";
  document.getElementById("nota3").value = "";
  document.getElementById("nota4").value = "";

  document.getElementById("nome").focus();
  showToast("Formulário limpo.", "success");
}

// Inicializar UI ao carregar
document.addEventListener("DOMContentLoaded", () => {
  atualizarUI();
});
