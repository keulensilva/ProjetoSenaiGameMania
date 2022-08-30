// inicializa o jQuery
$(document).ready(function(){ 




    $(".confirmar").click(function(){
        
        // //pegar os dados dos campos
        
        let nome = $("#nome").val();
        let usuario = $("#usuario").val();
        let senha = $("#senha").val();
        let confirmarSenha = $("#confirmarSenha").val();

        if(nome.trim() == "" || usuario.trim() == "" || senha == "" || confirmarSenha == ""){
            alert("Favor preencher todos os campos");
        } else {
            $(".mensagem").text("Logado com sucesso!");
        }
    });

    $(".cadastrar").click(function(){
        
      
      
      let nome = $("#nome").val();
      let usuario = $("#usuario").val();
      let senha = $("#senha").val();
      let confirmarSenha = $("#confirmarSenha").val();

      if(nome.trim() == "" || usuario.trim() == "" || senha == "" || confirmarSenha == ""){
          alert("Favor preencher todos os campos");
      } else {
          $(".mensagem").text("Cadastrado com sucesso!");
      }
  });
});