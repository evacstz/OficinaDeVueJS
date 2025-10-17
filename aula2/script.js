const { createApp } = Vue;

const componentBotao = {
    template: '<button @click="alerta()">{{ mensagem }}</button>',
    methods: {
        alerta () {
            alert(this.mensagem);
        }
    },
    props: {
        mensagem: {
            type: String,
            default: 'Este é um botão'
        }
    }
}

const app = createApp ({
    components: {
       'botao-clique': componentBotao,
    },
    data() {
        return {
            numero: 0,
            resultadoSoma: 0,
            valorNumero: 0,
            itens: [
                { nome: 'Item 1', preco: 100000},
                { nome: 'Item 2', preco: 15},
                { nome: 'Item 3', preco: 55},
            ]
        }
    },
    methods: {
        somar() {
            this.resultadoSoma += this.numero;
            this.numero = 0;
        },
        alertaMensagem() {
            alert('Botão do componente foi clicado');
        }
    },
    watch: {
        valorNumero(novoValor, ValorAntigo) {
            if(novoValor >= 10) {
                alert('Valor máximo atingido');
                this.valorNumero = 0;
            } else {
                alert(`O valor mudou de ${ValorAntigo} para ${novoValor}`);
            }
        }
    }
});

app.mount('#app')

// props: pai -> filho
// emits: filho -> pai