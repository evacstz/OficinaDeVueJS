const {createApp} = Vue;

createApp({
    data() {
        return {
            mensagem: 'Oficina de Vuejs',
            nome: 'Eva',
            jogo: 'Digite uma palavra',
            palavra: '',
            palavraCorreta: 'Lohane'
        }
    }
}).mount('#app');