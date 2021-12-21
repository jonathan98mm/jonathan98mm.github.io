// Fetch all the forms we want to apply custom Bootstrap validation styles to
var forms = document.querySelectorAll('.needs-validation')

// Loop over them and prevent submission
Array.prototype.slice.call(forms)
    .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            //form.classList.add('was-validated')
        }, false)
    });

$("#btn-submit").click(function (e) {

    var nombre = document.getElementById("Nombre");
    var correo = document.getElementById("Email");
    var asunto = document.getElementById("Asunto");
    var mensaje = document.getElementById("Mensaje");
    var form = $("#contactForm");

    console.log("Nombre: " + nombre.validity.valid);
    console.log("Correo: " + correo.validity.valid);
    console.log("Asunto: " + asunto.validity.valid);
    console.log("Mensaje: " + mensaje.validity.valid);

    if (nombre.validity.valid && correo.validity.valid && asunto.validity.valid && mensaje.validity.valid) {
        console.log("Pase por la validacion")

        $.ajax({
            url: "mails.php",
            method: 'POST',
            data: form.serialize(),
            success: function (data) {
                console.log(data);
            },
            error: function (error) {
                console.log(error);
            }
        });

        $('#contactForm').trigger("reset");

        $.confirm({
            theme: "material",
            title: '¡Gracias por contactarnos!',
            type: "green",
            content: "Nos pondremos en contacto contigo a la brevedad.",
            draggable: false,
            buttons: {
                ok: {
                    text: "OK"
                }
            }
        });

        $("#Nombre").removeClass("is-invalid");
        $("#Nombre").removeClass("is-valid");
        $("#Email").removeClass("is-invalid");
        $("#Email").removeClass("is-valid");
        $("#Asunto").removeClass("is-invalid");
        $("#Asunto").removeClass("is-valid");
        $("#Mensaje").removeClass("is-invalid");
        $("#Mensaje").removeClass("is-valid");
    } else {
        e.preventDefault();

        if (!nombre.validity.valid) {
            nombre.classList.add("is-invalid");
            nombre.classList.remove("is-valid");
        } else {
            nombre.classList.add("is-valid");
            nombre.classList.remove("is-invalid");
        }

        if (!correo.validity.valid) {
            correo.classList.add("is-invalid");
            correo.classList.remove("is-valid");
        } else {
            correo.classList.add("is-valid");
            correo.classList.remove("is-invalid");
        }

        if (!asunto.validity.valid) {
            asunto.classList.add("is-invalid");
            asunto.classList.remove("is-valid");
        } else {
            asunto.classList.add("is-valid");
            asunto.classList.remove("is-invalid");
        }
        if (!mensaje.validity.valid) {
            mensaje.classList.add("is-invalid");
            mensaje.classList.remove("is-valid");
        } else {
            mensaje.classList.add("is-valid");
            mensaje.classList.remove("is-invalid");
        }
    }
});

$("#Nombre").on("focusout", function () {
    $("#Nombre").removeClass("is-invalid");
    $("#Nombre").removeClass("is-valid");
});

$("#Email").on("focusout", function () {
    $("#Email").removeClass("is-invalid");
    $("#Email").removeClass("is-valid");
});

$("#Asunto").on("focusout", function () {
    $("#Asunto").removeClass("is-invalid");
    $("#Asunto").removeClass("is-valid");
});

$("#Mensaje").on("focusout", function () {
    $("#Mensaje").removeClass("is-invalid");
    $("#Mensaje").removeClass("is-valid");
});
