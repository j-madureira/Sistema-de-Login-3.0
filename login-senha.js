//Cadastro do cliente
alert(`Olá seja bem vindo ao Delivery Bacana!`)
var nomeUsuario = prompt(`Digite seu nome de usuário para cadastro:`);
var senhaUsuario = prompt(`Digite sua senha para cadastro:`);
var nomeCliente = prompt(`Digite seu nome:`);
var estadoCliente = prompt(`Informe seu estado:`);
var CidadeCliente = prompt(`Informe sua cidade:`);
var bairroCliente =prompt(`Informe seu bairro:`);
var ruaNumeroCliente = prompt(`Informe seu endereço:`);

//Login nome de usuário e senha

var loginNome = prompt(`Digite seu nome de usuário para fazer o login:`);
var loginSenha = prompt(`Digite sua senha para fazer o login:`);

//Lógica para login

if(loginSenha == senhaUsuario){
    console.log(`O cliente ${nomeCliente} está ativo para fazer um pedido!`);
    alert(`Seja bem vindo ${nomeCliente}, faça um pedido!`);
    var pedidoLanche = prompt(`Peça um lanche:`);
    var pedidoBebida = prompt(`Peça um refrigerante:`);
    var pedidoSobremesa = prompt(`Peça uma sobremesa para finalizar seu pedido:`);
    alert(`Tudo certo ${nomeCliente} seu pedido está a caminho em seu endereço`)
    console.log(`O cliente ${nomeCliente} fez um pedido : um ${pedidoLanche}, uma:
    ${pedidoBebida} e uma sobremesa: ${pedidoSobremesa}`);
    console.log(`Entregar no endereço:  Estado: ${estadoCliente}, Cidade: ${CidadeCliente}, Bairro: ${bairroCliente}, Rua e Número: ${ruaNumeroCliente}`);
}
else{
    alert(`Senha inválida recarregue a página e tente novamente!`)
}