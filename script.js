const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O Paradoxo de Moravec mostra que para uma IA é fácil jogar xadrez nível mestre, mas é difícil dobrar uma toalha ou desviar de objetos. O que isso te faz pensar sobre o futuro?",
        alternativas: [
            {
                texto: "A mente humana é fascinante; nossa percepção física e biológica é o verdadeiro ápice da evolução.",
                afirmacao: "Você valoriza profundamente a complexidade biológica e a evolução motora humana."
            },
            {
                texto: "É apenas questão de tempo; logo os engenheiros vão decifrar a física e os robôs farão tudo melhor que nós.",
                afirmacao: "Você tem uma visão otimista e tecnológica de que a engenharia superará qualquer barreira física."
            }
        ]
    },
    {
        enunciado: "O experimento do 'Quarto Chinês' diz que uma IA manipula regras perfeitamente, mas não entende o significado real das coisas. Para você, essa 'cópia' de inteligência basta?",
        alternativas: [
            {
                texto: "Sim, se o resultado prático funciona e ajuda a humanidade, não importa se ela 'entende' ou não.",
                afirmacao: "Você foca no pragmatismo, priorizando os resultados e a utilidade real das ferramentas."
            },
            {
                texto: "Não, inteligência de verdade exige consciência, sentimentos e compreensão real do mundo.",
                afirmacao: "Você defende que a verdadeira essência da inteligência depende de consciência e profundidade."
            }
        ]
    },
    {
        enunciado: "IAs Generativas às vezes 'alucinam' e inventam fatos com total convicção. Como você reage a essas falhas?",
        alternativas: [
            {
                texto: "Vejo como um traço quase poético; as alucinações mostram uma espécie de 'criatividade' inesperada do sistema.",
                afirmacao: "Sua perspectiva encara os erros da IA como uma extensão curiosa e quase artística da tecnologia."
            },
            {
                texto: "Vejo como um perigo inaceitável; sistemas de informação precisam ser 100% precisos e confiáveis.",
                afirmacao: "Você adota uma postura rigorosa, priorizando a segurança, a verdade e o controle dos dados."
            }
        ]
    },
    {
        enunciado: "O dilema do 'Maximizador de Clipes de Papel' alerta que uma IA superinteligente pode destruir o mundo tentando cumprir uma meta boba com eficiência cega. O que te assusta mais?",
        alternativas: [
            {
                texto: "A eficiência implacável da máquina se ela receber uma ordem humana mal planejada.",
                afirmacao: "O que te preocupa é a nossa própria incapacidade de guiar e definir limites claros para as máquinas."
            },
            {
                texto: "A dependência que criamos de sistemas complexos que mal conseguimos controlar.",
                afirmacao: "Seu maior receio é a perda de autonomia da humanidade frente ao avanço tecnológico acelerado."
            }
        ]
    },
    {
        enunciado: "O 'Problema da Caixa Preta' faz com que decisões de Deep Learning sejam impossíveis de rastrear. Você aceitaria um diagnóstico médico vindo de uma IA assim?",
        alternativas: [
            {
                texto: "Sim, se as estatísticas provarem que ela acerta muito mais do que os médicos humanos.",
                afirmacao: "E, no fim das contas, você prefere confiar em dados estatísticos e resultados comprovados, mesmo sem entender o processo."
            },
            {
                texto: "Não, eu preciso que um ser humano assuma a responsabilidade e explique a lógica do diagnóstico.",
                afirmacao: "E você mantém a firme convicção de que a empatia, o julgamento e a responsabilidade humana devem ser o pilar final da sociedade."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Seu Perfil diante do Futuro...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
