var pestaña = "";
var span1 = "";
var span2 = "";
var span3 = "";
var span4 = "";
var span5 = "";
$(document).ready(function () {



    $(".mi-contenedor").hide();

    $(".dropdown-menu").on('click', 'a', function () {
        pestaña = $(this).attr('id');

        $('.input-group-prepend').children("#icono1").removeClass(span1);
        $('.input-group-prepend').children("#icono1").removeClass(span2);
        $('.input-group-prepend').children("#icono1").removeClass(span3);
        $('.input-group-prepend').children("#icono1").removeClass(span4);
        $('.input-group-prepend').children("#icono1").removeClass(span5);

        document.getElementById("titulo").innerHTML = "Formulario Registro " + pestaña;
        $(".mi-contenedor").show();
        switch (pestaña) {
            case "cliente":
                $("#nuevo").hide();
                $("#hojaVida").hide();
                document.getElementById("atributo1").placeholder = "Nombre Cliente";
                span1 = "ion-person";
                document.getElementById("atributo2").placeholder = "Documento Cliente";
                span2 = "ion-card";
                document.getElementById("atributo3").placeholder = "Correo Cliente";
                span3 = "ion-social-google";
                document.getElementById("atributo4").placeholder = "Telefono Cliente";
                span4 = "ion-android-call";
                document.getElementById("atributo5").placeholder = "Contraseña Cliente";
                span5 = "ion-android-lock";
                $("#a4").show();
                $("#a5").show();
                $("#a2").show();
                $("#a3").show();
                break;
            case "mensajero":
                $("#nuevo").hide();
                $("#hojaVida").show();
                document.getElementById("atributo1").placeholder = "Nombre Mensajero";
                span1 = "ion-android-bicycle";
                document.getElementById("atributo2").placeholder = "Documento Mensajero";
                span2 = "ion-card";
                document.getElementById("atributo3").placeholder = "Correo Mensajero";
                span3 = "ion-social-google";
                document.getElementById("atributo4").placeholder = "Telefono Mensajero";
                span4 = "ion-android-call";
                document.getElementById("atributo5").placeholder = "Contraseña Mensajero";
                span5 = "ion-android-lock";
                
                document.getElementById("hojaVida").innerHTML =" <h3> Información Adicional </h3>  <div class='form-group input-group'>" +
                    " <div class='input-group-prepend'>" + "<span class='input-group-text ion-heart'></span></div>" +
                    "<input type='text' name='formulario-atributo1' class='form-control'  placeholder='Estado Civil'  required></div>" + "<div class='form-group input-group'>" +
                    " <div class='input-group-prepend'>" + "<span class='input-group-text ion-information-circled'></span></div>" +
                    "<input type='number' name='formulario-atributo1' class='form-control'  placeholder='Estrato'  required></div>" + "<div class='form-group input-group'>" +
                    " <div class='input-group-prepend'>" + "<span class='input-group-text ion-help-circled'></span></div>" +
                    "<input type='number' name='formulario-atributo1' class='form-control'  placeholder='Edad'  required></div>";
                
                $("#a4").show();
                $("#a5").show();
                $("#a2").show();
                $("#a3").show();
                break;
            case "envio":
                $("#nuevo").show();
                $("#hojaVida").hide();
                $("#a4").hide();
                $("#a5").hide();
                $("#a2").hide();
                $("#a3").hide();

                document.getElementById("atributo1").placeholder = "Nombre Cliente";
                span1 = "ion-person";
                document.getElementById("nuevo").innerHTML = "<div class='form-group input-group'>" +
                    " <div class='input-group-prepend'>" + "<span class='input-group-text ion-android-locate'></span></div>" +
                    "<input type='text' name='formulario-atributo1' class='form-control'  placeholder='Origen'  required></div>" + "<div class='form-group input-group'>" +
                    " <div class='input-group-prepend'>" + "<span class='input-group-text ion-android-pin'></span></div>" +
                    "<input type='text' name='formulario-atributo1' class='form-control'  placeholder='Destino'  required></div>" + "<div class='form-group input-group'>" +
                    " <div class='input-group-prepend'>" + "<span class='input-group-text ion-android-bicycle'></span></div>" +
                    "<input type='text' name='formulario-atributo1' class='form-control'  placeholder='Nombre Mensajero'  required></div>" + "<div class='form-group input-group'>" +
                    " <div class='input-group-prepend'>" + "<span class='input-group-text ion-cube'></span></div>" +
                    "<input type='text' name='formulario-atributo1' class='form-control'  placeholder='Producto' required></div>";
                break;
        }

        $('.input-group-prepend').children("#icono1").addClass(span1);
        $('.input-group-prepend').children("#icono2").addClass(span2);
        $('.input-group-prepend').children("#icono3").addClass(span3);
        $('.input-group-prepend').children("#icono4").addClass(span4);
        $('.input-group-prepend').children("#icono5").addClass(span5);

    });

});