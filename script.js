const perguntas = [

{
pergunta:"Quantos jogadores ficam em quadra por equipe?",
alternativas:["5","6","7"],
correta:1
},

{
pergunta:"Qual fundamento inicia uma jogada?",
alternativas:["Bloqueio","Saque","Manchete"],
correta:1
},

{
pergunta:"Quantos toques a equipe pode dar na bola?",
alternativas:["2","3","4"],
correta:1
},

{
pergunta:"Qual jogador usa uniforme diferente?",
alternativas:["Líbero","Central","Oposto"],
correta:0
},

{
pergunta:"Quantos sets são necessários para vencer uma partida?",
alternativas:["2","4","3"],
correta:2
},

{
pergunta:"Qual a altura da rede masculina?",
alternativas:["2,43m","2,30m","2,50m"],
correta:0
},

{
pergunta:"O líbero pode bloquear?",
alternativas:["Sim","Às vezes","Não"],
correta:2
},

{
pergunta:"Para que serve o desafio por vídeo?",
alternativas:["Contar pontos","Revisar lances","Cronometrar"],
correta:1
},

{
pergunta:"O saque pode tocar na rede e passar?",
alternativas:["Sim","Não","Somente no tie-break"],
correta:0
},

{
pergunta:"Até quantos pontos vai o tie-break?",
alternativas:["21","25","15"],
correta:2
}

];

let atual = 0;
let acertos = 0;

const perguntaEl =
document.getElementById("pergunta");

const alternativasEl =
document.getElementById("alternativas");

const progressoEl =
document.getElementById("progressoTexto");

const barraEl =
document.getElementById("barraProgresso");

const resultadoEl =
document.getElementById("resultado");

function carregarPergunta(){

const p = perguntas[atual];

perguntaEl.innerText =
`${atual+1}. ${p.pergunta}`;

alternativasEl.innerHTML = "";

p.alternativas.forEach((alt,index)=>{

alternativasEl.innerHTML += `<label class="alternativa"> <input type="radio"
name="resposta"
value="${index}">
${alt} </label>`;

});

progressoEl.innerText =
`Pergunta ${atual+1} de ${perguntas.length}`;

barraEl.style.width =
`${((atual+1)/perguntas.length)*100}%`;

}

document
.getElementById("proximaBtn")
.addEventListener("click",()=>{

const marcada =
document.querySelector(
'input[name="resposta"]:checked'
);

if(!marcada){
alert("Selecione uma resposta.");
return;
}

if(
parseInt(marcada.value) ===
perguntas[atual].correta
){
acertos++;
}

atual++;

if(atual < perguntas.length){

carregarPergunta();

}else{

document
.getElementById("quizCard")
.style.display = "none";

resultadoEl.classList.remove("hidden");

resultadoEl.innerHTML = `

<h2>🏆 Resultado Final</h2>

<p>
Você acertou
<strong>${acertos}</strong>
de
<strong>${perguntas.length}</strong>
questões.
</p>

<h3>
${Math.round((acertos/perguntas.length)*100)}%
de aproveitamento
</h3>
`;

}

});

document
.getElementById("iniciarBtn")
.addEventListener("click",()=>{

document
.querySelector(".quiz-container")
.scrollIntoView({
behavior:"smooth"
});

});

carregarPergunta();
