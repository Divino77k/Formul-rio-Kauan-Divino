$(document).ready(function(){
    $('#cep').mask('00000-000');
    $('#cpf').mask('000.000.000-00', {reverse: true});
    $('#rg').mask('00.000.000-0');
    $('#telefone').mask('(00) 00000-0000');
  
    $('#cadastroForm').submit(function(event){
      event.preventDefault();
      // Aqui você pode adicionar o código para enviar o formulário para o servidor
      // Por exemplo:
      // $.post('cadastrar.php', $(this).serialize(), function(response){
      //   console.log(response);
      // });
    });
  });