var pestañas = "";
var codigo = "";
var clientesJSON = [
    {
        nombre: 'Alexander',
        cedula: "94"
    },
    {
        nombre: 'Cristiano',
        cedula: "7"
    },
    {
        nombre: 'Kroos',
        cedula: "8"
    },
    {
        nombre: 'Modric',
        cedula: "10"
    },
    {
        nombre: 'Sergio',
        cedula: "4"
    }
];



var mensajerosJSON = [
    {
        nombre: 'Falcao',
        cedula: "9"
    },
    {
        nombre: 'James',
        cedula: "11"
    },
    {
        nombre: 'Ospina',
        cedula: "1"
    },
    {
        nombre: 'Carlos',
        cedula: "6"
    },
    {
        nombre: 'Davinson',
        cedula: "23"
    }
];

var enviosJSON = [
    {
        nombreCliente: 'Alexander',
        nombreMensajero: "Falcao"
    },
    {
        nombreCliente: 'Cristiano',
        nombreMensajero: "James"
    },
    {
        nombreCliente: 'Kroos',
        nombreMensajero: "Ospina"
    },
    {
        nombreCliente: 'Modric',
        nombreMensajero: "Carlos"
    },
    {
        nombreCliente: 'Sergio',
        nombreMensajero: "Davinson"
    }
];


$(document).ready(function () {
    $("#tabla").hide();


    $(".dropdown-menu").on('click', 'a', function () {
        pestañas = $(this).attr('id');
        $("#tabla").show();
        switch (pestañas) {
               case "clientes":
                document.getElementById("col1").innerHTML = "Nombre Cliente";
                document.getElementById("col2").innerHTML = "Cedula Cliente";
                codigo="";
                for (var i = 0; i < clientesJSON.length; i++) {
                    codigo +=
                        "<tr><th scope='row'>" + (i + 1) + "</th> <td>" + clientesJSON[i].nombre + "</td> <td>" + clientesJSON[i].cedula + "</td> <td><a class='btn btn-primary' href='#' title='EDITAR'><i class='fas fa-edit'></i></a>     <a class='btn btn-danger' href='#' title='ELIMINAR'><i class='fas fa-times-circle'></i></a></td></tr>";
                }

                document.getElementById("filas").innerHTML = codigo;
                break;
            case "mensajeros":
           
                document.getElementById("col1").innerHTML = "Nombre Mensajero";
                document.getElementById("col2").innerHTML = "Cedula Mensajero";
                codigo="";
                for (var i = 0; i < mensajerosJSON.length; i++) {
                    codigo +=
                        "<tr><th scope='row'>" + (i + 1) + "</th> <td>" + mensajerosJSON[i].nombre + "</td> <td>" + mensajerosJSON[i].cedula + "</td> <td><a class='btn btn-primary' href='#' title='EDITAR'><i class='fas fa-edit'></i></a>     <a class='btn btn-danger' href='#' title='ELIMINAR'><i class='fas fa-times-circle'></i></a></td></tr>";
                }
                document.getElementById("filas").innerHTML = codigo;
               
                break;
            case "envios":
                
                document.getElementById("col1").innerHTML = "Nombre Cliente";
                document.getElementById("col2").innerHTML = "Nombre Mensajero";
                codigo="";
                for (var i = 0; i < enviosJSON.length; i++) {
                    codigo +=
                        "<tr><th scope='row'>" + (i + 1) + "</th> <td>" + enviosJSON[i].nombreCliente + "</td> <td>" + enviosJSON[i].nombreMensajero + "</td> <td><a class='btn btn-primary' href='#' title='EDITAR'><i class='fas fa-edit'></i></a>     <a class='btn btn-danger' href='#' title='ELIMINAR'><i class='fas fa-times-circle'></i></a></td></tr>";
                }
                document.getElementById("filas").innerHTML = codigo;
                
                break;
        }
    });


});