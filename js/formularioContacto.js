
  
  $("#btn_enviar").click(function(){
    nombre =$("#txt_nombre").val();
    email =$("#txt_email").val();
    identifica =$("#txt_identifica").val();
    numero =$("#txt_numero").val();
    ciudad =$("#txt_ciudad").val();
    comentario =$("#txtaComentario").val();
    validadorTodo = true;

    if(nombre == "")
    {$('#lbl_nombre').css("visibility", "visible");
    validadorTodo = false;
  }
      else{ $('#lbl_nombre').css("visibility", "hidden");
    }
    if(email == "" ){$('#lbl_email').css("visibility", "visible");
    validadorTodo = false;
  }
      else{$('#lbl_email').css("visibility", "hidden");
      }
    if(identifica == "" || identifica.length >= 10){   
         $('#lbl_identifica').css("visibility", "visible");
         validadorTodo = false;
        }
    else{$('#lbl_identifica').css("visibility", "hidden");
    }
    if(ciudad == ""){
      $('#lbl_ciudad').css("visibility", "visible");
      validadorTodo = false;
      }
      else{
        $('#lbl_ciudad').css("visibility", "hidden");
       }
    if(comentario.length < 50 ){
      $('#lbl_comentario').css("visibility", "visible");
      validadorTodo = false;}
      else{
        $('#lbl_comentario').css("visibility", "hidden");
       }
     
    if(validadorTodo){
      alert("Enviado Correctamente");
    }
  });

  $("#btn_reset").click(function(){
   
    $('input[type="text"]').val('');
    $('input[type="email"]').val('');
    $('textarea').val('');
  });


  
