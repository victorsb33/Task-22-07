// Fazer uma função para manipular informações de uma barberia.

/*if, else if, else
/*variávis
/*console.log
/*lista
/*for
*/

var agendamentos = []; // Lista para armazenar informações do cliente
function cadastrar() {
    console.log("Função cadastrar chamada");
    
    event.preventDefault(); // Previne o envio do formulário


    const form = document.getElementById("CadastroAgendamento");


    // Obter os valores dos campos do formulário
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var servico = document.getElementById("servico").value;
    var horario = document.getElementById("horario").value;

    // Criar um objeto para o agendamento
    let agendamento = {
        nome: nome,
        telefone: telefone,
        servico: servico,
        horario: horario
    };

    horario = horario.split(":")[0]; // Extrai apenas a hora do horário selecionado
    console.log(horario);
    if (horario < 8 || horario > 20) {
        alert("horário inválido! Funcionamos das 08h às 20h.");
        return;
    }
    
agendamentos.push(agendamento); // Adiciona o agendamento à lista
    console.log(agendamentos); // Exibe a lista de agendamentos no console

    for (let i = 0; i < agendamentos.length; i++) {
        console.log("Agendamento " + (i + 1) + ":");
        console.log("Nome: " + agendamentos[i].nome);
        console.log("Telefone: " + agendamentos[i].telefone);
        console.log("Serviço: " + agendamentos[i].servico);
        console.log("Horário: " + agendamentos[i].horario);
        console.log("-------------------------");
    }

}











