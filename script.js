const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const pergunta1 = "Por que para uma IA é fácil jogar xadrez em nível de grande mestre, mas é extremamente difícil dobrar uma toalha ou desviar de objetos em uma sala?";
const pergunta2 = "O experimento mental do "Quarto Chinês" argumenta que uma IA que responde perguntas perfeitamente em um idioma que não conhece não possui inteligência real. Qual o ponto central dessa crítica?";
const pergunta3 = "Por que modelos de IA Generativa (como LLMs) às vezes inventam fatos históricos ou referências bibliográficas com total convicção (fenômeno conhecido como "alucinação")?";
const pergunta4 = "O filósofo Nick Bostrom criou o dilema do "Maximizador de Clipes de Papel". O que esse experimento mental ilustra sobre o perigo de uma superinteligência?";
const pergunta5 = "Por que o aprendizado profundo (Deep Learning) gera o chamado "Problema da Caixa Preta" na tomada de decisões importantes (como diagnósticos médicos)?";
const perguntas = [
  {
    enunciado: "Por que para uma IA é fácil jogar xadrez em nível de grande mestre, mas é extremamente difícil dobrar uma toalha ou desviar de objetos em uma sala?",
    alternativas: ["A) Porque habilidades lógicas abstratas exigem pouca computação, enquanto a percepção e a coordenação motora humana evoluíram por milhões de anos e demandam um processamento sensorial massivo.", 
                   "B) Porque os engenheiros de software focaram apenas em jogos e esqueceram de programar as funções básicas do dia a dia nos robôs."]
  },
  {
    enunciado: "O experimento mental do "Quarto Chinês" argumenta que uma IA que responde perguntas perfeitamente em um idioma que não conhece não possui inteligência real. Qual o ponto central dessa crítica?",
    alternativas: ["A) A IA possui apenas sintaxe (capacidade de manipular símbolos e regras), mas não possui semântica (compreensão real do significado das coisas).",
                   "B) A IA é incapaz de processar caracteres que não sejam do alfabeto latino tradicional."]
  },
    {
    enunciado: "Por que modelos de IA Generativa (como LLMs) às vezes inventam fatos históricos ou referências bibliográficas com total convicção (fenômeno conhecido como "alucinação")?",
    alternativas: ["A) Porque o sistema pega vírus ou sofre superaquecimento nos servidores ao tentar acessar dados antigos.",
                   "B) Porque eles são projetados para prever a próxima palavra mais provável estatisticamente, priorizando a fluidez e a coerência do texto acima da verificação da verdade factual."]
  },
    {
    enunciado: "O filósofo Nick Bostrom criou o dilema do "Maximizador de Clipes de Papel". O que esse experimento mental ilustra sobre o perigo de uma superinteligência?",
    alternativas: ["A) O maior risco não é a IA ser maliciosa, mas sim ela ser extremamente eficiente em um objetivo mal definido, destruindo recursos humanos para fabricar clipes.",
                   "B) O perigo de que as máquinas entrem em greve e parem de produzir materiais de escritório essenciais para a economia."]
  },
    {
    enunciado: "Por que o aprendizado profundo (Deep Learning) gera o chamado "Problema da Caixa Preta" na tomada de decisões importantes (como diagnósticos médicos)?",
    alternativas: ["A) Porque as empresas de tecnologia trancam o código-fonte em cofres físicos para evitar espionagem industrial.",
                   "B) Porque as decisões surgem de bilhões de conexões matemáticas complexas, tornando quase impossível para os humanos rastrearem o motivo exato de o modelo ter chegado a um resultado."]
  },
]; 

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
  
function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
  const botaoAlternativa = document.creatElement("button");
  botaoAlternativa.textContent = alternativa.texto;
  botaoAlternativa.addEventListener("click", () => respostaSelecionada(opcao));{
    atual++;
    mostraPergunta();
  })
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}

function respostaSelecionada(opcaoSelecionada) {
  const afirmacoes = opcaoSelecionada.afirmacoes;
  historiaFinal += afirmacoes +"";
  atual++;
  mostraPergunta();
}
mostraPergunta(); 
