$(document).ready(function () {

    $("#ingresar").click(function () {
        $("#contenedor").show();
        $("#contenedor").load('pestañas/login.html');
        $("#carouselExampleIndicators").hide();
    });

    $("#registrarse").click(function () {
        $("#contenedor").show();
        $("#contenedor").load('pestañas/registro.html');
        $("#carouselExampleIndicators").hide();
    });

    $("#registrarse2").click(function () {
        $("#contenedor").show();
        $("#contenedor").load('pestañas/registro.html');
        $("#carouselExampleIndicators").hide();
    });

    $("#listados").click(function () {
        $("#contenedor").show();
        $("#contenedor").load('pestañas/listado.html');
        $("#carouselExampleIndicators").hide();
    });
    $("#inicio").click(function () {
        $("#carouselExampleIndicators").show();
        $("#contenedor").hide();
    });

});