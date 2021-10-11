/**
 *Clientes
 */
function consultarCliente() {
    $("#resultadoCliente").empty();
    $("#idCliente").val("");
    $("#name").val("");
    $("#email").val("");
    $("#age").val("");
    $.ajax({
        url: 'https://ga5c6f52648fb10-violetau.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'GET',
        datatype: 'JSON',
        success: function(respuesta) {
            console.log(respuesta);
            let tablaCliente = "<table border='1'>";
            tablaCliente += "<tr>";
            tablaCliente += "<th> Código </th>";
            tablaCliente += "<th> Nombre </th>";
            tablaCliente += "<th> Correo Electrónico </th>";
            tablaCliente += "<th> Edad </th>";
            tablaCliente += "<th colspan='2'> Acciones </th> </tr>";

            for (i = 0; i < respuesta.items.length; i++) {
                tablaCliente += "<tr>";
                tablaCliente += "<td align='center' style='width: 45px'>" + respuesta.items[i].id + "</td>";
                tablaCliente += "<td style='width: 210px'>" + respuesta.items[i].name + "</td>";
                tablaCliente += "<td style='width: 210px'>" + respuesta.items[i].email + "</td>";
                tablaCliente += "<td align='center' style='width: 40px'>" + respuesta.items[i].age + "</td>";
                tablaCliente += "<td> <button onclick='borrarCliente(" + respuesta.items[i].id + ")'>Borrar</button>";
                tablaCliente += "<td> <button onclick='cargarCliente(" + respuesta.items[i].id + ")'>Seleccionar</button>";
                tablaCliente += "</tr>";
            }
            tablaCliente += "</table>";
            $("#resultadoCliente").append(tablaCliente);
        }
    });
}

function cargarCliente(idCliente) {
    idCliente = idCliente || $("#idCliente").val();
    console.log(idCliente)
    $.ajax({
        url: 'https://ga5c6f52648fb10-violetau.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client/' + idCliente,
        type: 'GET',
        datatype: 'JSON',
        success: function(respuesta) {
            $("#idCliente").val(respuesta.items[0].id);
            $("#name").val(respuesta.items[0].name);
            $("#email").val(respuesta.items[0].email);
            $("#age").val(respuesta.items[0].age);
        }
    });
}

function borrarCliente(idCliente) {

    let dataJSON = {
        id: idCliente
    };

    let dataToSend = JSON.stringify(dataJSON);

    $.ajax({
        url: "https://ga5c6f52648fb10-violetau.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function(respuesta) {
            consultarCliente();
            alert("Eliminación Satisfactoria")
        }
    });
}

function agregarCliente() {
    if ($("#name").val() != "" && $("#email").val() != "" && $("#age").val() != "") {
        let dataJSON = {
            id: $("#idCliente").val(),
            name: $("#name").val(),
            email: $("#email").val(),
            age: $("#age").val()
        };

        let dataToSend = JSON.stringify(dataJSON);
        console.log(dataToSend)
        $.ajax({
            url: "https://ga5c6f52648fb10-violetau.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
            type: "POST",
            data: dataJSON,
            datatype: "JSON",
            success: function(respuesta) {
                consultarCliente();
                alert("Agregado Satisfactoriamente");
            }
        });
    } else alert("Digite información válida para agregar");

}

function actualizarCliente() {
    if ($("#name").val() != "" && $("#email").val() != "" && $("#age").val() != "") {

        let dataJSON = {
            id: $("#idCliente").val(),
            name: $("#name").val(),
            email: $("#email").val(),
            age: $("#age").val(),
        }
        console.log(dataJSON);
        let dataToSend = JSON.stringify(dataJSON);

        $.ajax({
            url: "https://ga5c6f52648fb10-violetau.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
            type: "PUT",
            data: dataToSend,
            contentType: "application/JSON",
            datatype: "JSON",
            success: function(respuesta) {
                consultarCliente();
                window.alert("Modificación Satisfactoria");
            }
        });
    } else alert("Primero seleccione un Cliente\ncon el botón SELECCIONAR");
}

/**
 *Cabins
 */
function consultarCabin() {
    $("#resultadoCabin").empty();
    $("#idCabin").val("");
    $("#brand").val("");
    $("#rooms").val("");
    $("#category_id").val("");
    $("#name1").val("");
    $.ajax({
        url: 'https://ga5c6f52648fb10-violetau.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cabin/cabin',
        type: 'GET',
        datatype: 'JSON',
        success: function(respuesta) {
            console.log(respuesta);
            let tablaCabin = "<table border='1'>";
            tablaCabin += "<tr>";
            tablaCabin += "<th> Código </th>";
            tablaCabin += "<th> Tipo </th>";
            tablaCabin += "<th> Habitaciones </th>";
            tablaCabin += "<th> Categoría   </th>";
            tablaCabin += "<th> Nombre </th>";
            tablaCabin += "<th colspan='2'> Acciones </th> </tr>";

            for (i = 0; i < respuesta.items.length; i++) {
                tablaCabin += "<tr>";
                tablaCabin += "<td align='center' style='width: 45px'>" + respuesta.items[i].id + "</td>";
                tablaCabin += "<td style='width: 210px'>" + respuesta.items[i].brand + "</td>";
                tablaCabin += "<td align='center' style='width: 80px'>" + respuesta.items[i].rooms + "</td>";
                tablaCabin += "<td align='center' style='width: 80px'>" + respuesta.items[i].category_id + "</td>";
                tablaCabin += "<td style='width: 200px'>" + respuesta.items[i].name + "</td>";
                tablaCabin += "<td> <button onclick='borrarCabin(" + respuesta.items[i].id + ")'>Borrar</button>";
                tablaCabin += "<td> <button onclick='cargarCabin(" + respuesta.items[i].id + ")'>Seleccionar</button>";
                tablaCabin += "</tr>";
            }
            tablaCabin += "</table>";
            $("#resultadoCabin").append(tablaCabin);
        }
    });
}

function cargarCabin(idCabin) {

    idCabin = idCabin || $("#idCabin").val();
    $.ajax({
        url: 'https://ga5c6f52648fb10-violetau.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cabin/cabin/' + idCabin,
        type: 'GET',
        datatype: 'JSON',
        success: function(respuesta) {
            $("#idCabin").val(respuesta.items[0].id);
            $("#brand").val(respuesta.items[0].brand);
            $("#rooms").val(respuesta.items[0].rooms);
            $("#category_id").val(respuesta.items[0].category_id);
            $("#name1").val(respuesta.items[0].name);
        }
    });
}

function borrarCabin(idCabin) {

    let dataJSON = {
        id: idCabin
    };

    let dataToSend = JSON.stringify(dataJSON);

    $.ajax({
        url: 'https://ga5c6f52648fb10-violetau.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cabin/cabin',
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function(respuesta) {
            consultarCabin();
            alert("Eliminación Satisfactoria")
        }
    });
}

function agregarCabin() {
    if ($("#brand").val() != "" && $("#rooms").val() != "" && $("#category_id").val() != "" && $("#name1").val() != "") {
        let dataJSON = {
            id: $("#idCabin").val(),
            brand: $("#brand").val(),
            rooms: $("#rooms").val(),
            category_id: $("#category_id").val(),
            name: $("#name1").val()
        };

        let dataToSend = JSON.stringify(dataJSON);

        $.ajax({
            url: "https://ga5c6f52648fb10-violetau.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cabin/cabin",
            type: "POST",
            data: dataJSON,
            datatype: "JSON",
            success: function(respuesta) {
                consultarCabin();
                alert("Agregado Satisfactoriamente");
            }
        });
    } else alert("Digite información válida para agregar");

}

function actualizarCabin() {
    if ($("#brand").val() != "" && $("#rooms").val() != "" && $("#category_id").val() != "" && $("#name1").val() != "") {

        let dataJSON = {
            id: $("#idCabin").val(),
            brand: $("#brand").val(),
            rooms: $("#rooms").val(),
            category_id: $("#category_id").val(),
            name: $("#name1").val()
        }
        console.log(dataJSON);
        let dataToSend = JSON.stringify(dataJSON);

        $.ajax({
            url: "https://ga5c6f52648fb10-violetau.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cabin/cabin",
            type: "PUT",
            data: dataToSend,
            contentType: "application/JSON",
            datatype: "JSON",
            success: function(respuesta) {
                consultarCabin();
                window.alert("Modificación Satisfactoria");
            }
        });
    } else alert("Primero seleccione una Cabin\ncon el botón SELECCIONAR");
}

/**
 * Mensajes
 */

function consultarMensaje() {
    $("#resultadoMensaje").empty();
    $("#idMensaje").val("");
    $("#messagetext").val("");
    $.ajax({
        url: 'https://ga5c6f52648fb10-violetau.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
        type: 'GET',
        datatype: 'JSON',
        success: function(respuesta) {
            console.log(respuesta);
            let tablaMensaje = "<table border='1'>";
            tablaMensaje += "<tr>";
            tablaMensaje += "<th> Código </th>";
            tablaMensaje += "<th> Mensaje </th>";

            for (i = 0; i < respuesta.items.length; i++) {
                tablaMensaje += "<tr>";
                tablaMensaje += "<td align='center' style='width: 45px'>" + respuesta.items[i].id + "</td>";
                tablaMensaje += "<td style='width: 600px;'>" + respuesta.items[i].messagetext + "</td>";
                tablaMensaje += "<td> <button onclick='borrarMensaje(" + respuesta.items[i].id + ")'>Borrar</button>";
                tablaMensaje += "<td> <button onclick='cargarMensaje(" + respuesta.items[i].id + ")'>Seleccionar</button>";
                tablaMensaje += "</tr>";
            }
            tablaMensaje += "</table>";
            $("#resultadoMensaje").append(tablaMensaje);
        }
    });
}

function cargarMensaje(idMensaje) {

    idMensaje = idMensaje || $("#idMensaje").val(),
        $.ajax({
            url: 'https://ga5c6f52648fb10-violetau.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message/' + idMensaje,
            type: 'GET',
            datatype: 'JSON',
            success: function(respuesta) {
                $("#idMensaje").val(respuesta.items[0].id);
                $("#messagetext").val(respuesta.items[0].messagetext);
            }
        });
}

function borrarMensaje(idMensaje) {

    let dataJSON = {
        id: idMensaje
    };

    let dataToSend = JSON.stringify(dataJSON);

    $.ajax({
        url: "https://ga5c6f52648fb10-violetau.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function(respuesta) {
            consultarMensaje();
            alert("Eliminación Satisfactoria")
        }
    });
}

function agregarMensaje() {
    if ($("#messagetext").val() != "") {
        let dataJSON = {
            id: $("#idMensaje").val(),
            messagetext: $("#messagetext").val(),
        };

        let dataToSend = JSON.stringify(dataJSON);

        $.ajax({
            url: "https://ga5c6f52648fb10-violetau.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
            type: "POST",
            data: dataJSON,
            datatype: "JSON",
            success: function(respuesta) {
                consultarMensaje();
                alert("Agregado Satisfactoriamente");
            }
        });
    } else alert("Digite información válida para agregar");

}

function actualizarMensaje() {
    if ($("#messagetext").val() != "") {

        let dataJSON = {
            id: $("#idMensaje").val(),
            messagetext: $("#messagetext").val(),
        }
        console.log(dataJSON);
        let dataToSend = JSON.stringify(dataJSON);

        $.ajax({
            url: "https://ga5c6f52648fb10-violetau.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
            type: "PUT",
            data: dataToSend,
            contentType: "application/JSON",
            datatype: "JSON",
            success: function(respuesta) {
                consultarMensaje();
                window.alert("Modificación Satisfactoria");
            }
        });
    } else alert("Seleccione un Mensaje\ncon el botón SELECCIONAR");
}