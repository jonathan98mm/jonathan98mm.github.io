
/*-----------------------------------------------
|   Forms Validations                           |
-----------------------------------------------*/

// Fetch all the forms we want to apply custom Bootstrap validation styles to
var forms = document.querySelectorAll('.needs-validation')
// Loop over them and prevent submission
Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }

        form.classList.add('was-validated')
    }, false)
});

$(document.body).on("keyup", "#userID", function () {
    document.getElementById("userID").setCustomValidity("");
    document.getElementById("invalid-email").innerHTML = "Ingresa un correo valido";
});

$(document.body).on('keyup', "#passID", function () {
    if ($('#passID').val() == $('#pass-check').val()) {
        document.getElementById("pass-check").setCustomValidity("");
    }else
        document.getElementById("pass-check").setCustomValidity("No");
});

$(document.body).on('keyup', "#pass-check", function () {
    if ($('#passID').val() == $('#pass-check').val()) {
        document.getElementById("pass-check").setCustomValidity("");
    }else
        document.getElementById("pass-check").setCustomValidity("No");
});

$(document.body).on("click", "#btn-register", function (event) {
    var correo = document.getElementById("userID");
    var contra = document.getElementById("passID");
    var contra_check = document.getElementById("pass-check");
    const csrftoken = getCookie('csrftoken');

    if (correo.validity.valid && contra.validity.valid && contra_check.validity.valid) {
        $.ajax({
            url: "ajax/verificar_correo",
            method: "POST",
            data: { correo: correo.value },
            dataType: "json",
            headers: { 'X-CSRFToken': csrftoken },
            success: function (response) {
                console.log(response.exists);

                if (response.exists) {
                    event.preventDefault();
                    correo.setCustomValidity("Invalid field.");
                    correo.focus();
                    document.getElementById("invalid-email").innerHTML = "El correo ya se encuentra registrado";
                } else {
                    var card = document.getElementById("card-login");
                    card.innerHTML = "" +
                        "<h4>¡Genial! Ya solo falta una cosa...</h4>" +
                        "<center><img src='static/img/gallery/email.png' alt='Imagen' width='100px' height='100px'></center>" +
                        "<p align='justify'>Te hemos enviado un correo electrónico a <strong>" + correo.value + "</strong> para que puedas validar tu cuenta.</p>" +
                        "<p align='justify'>En caso de que no aparezca, revisa la carpeta de \"Correo no deseado\".</p>" +
                        "<center><a href='/' class='btn btn-primary'>Inicio</a></center>";

                    $.ajax({
                        url: "ajax/mandar_verificacion",
                        method: "POST",
                        data: { correo: correo.value, contra: contra.value },
                        dataType: "json",
                        headers: { 'X-CSRFToken': csrftoken },
                        success: function (response) {
                            console.log(response);
                        },
                        error: function () {
                            console.log("error");
                        }
                    });
                }
            },
            error: function () {
                console.log("error");
            }
        });
    } else {
        event.preventDefault();
        if (!correo.validity.valid) {
            correo.focus();
            document.getElementById("invalid-email").innerHTML = "Ingresa un correo valido"
        } else {
            if(!contra.validity.valid){
                contra.focus();
            }else{
                contra_check.focus();
            }
        }
    }
});

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function register() {
    var card = document.getElementById("card-login");

    const csrftoken = getCookie('csrftoken');

    card.innerHTML = "" +
        "<a href='login'>Iniciar sesión</a> <strong>></strong> Registro" +
        "<h3>Crea tu cuenta</h3>" +
        "<form class='was-validated' method='POST' novalidate>" +
        "   <div class='mb-3'>" +
        "       <label for='userID'>Correo</label>" +
        "       <input type='email' class='form-control' placeholder='correo@ejemplo.com' id='userID' name='usuario' pattern='^[a-z0-9!#$%&*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$' required>" +
        "       <div class='valid-feedback'>" +
        "           ¡Se ve bien!" +
        "       </div>" +
        "       <div id='invalid-email' class='invalid-feedback'>" +
        "           Ingresa un correo valido" +
        "       </div>" +
        "   </div>" +
        "   <div class='mb-3'>" +
        "       <label for='passID' class='form-label'>Contraseña</label>" +
        "       <input type='password' class='form-control' placeholder='Contraseña' id='passID' name='contra' pattern='^(?=\\w*\\d)(?=\\w*[A-Z])(?=\\w*[a-z])\\S{4,16}$' required>" +
        "       <div class='valid-feedback'>" +
        "           ¡Se ve bien!" +
        "       </div>" +
        "       <div class='invalid-feedback'>" +
        "           La contraseña debe de tener mínimo 4 caracteres, una mayuscula y un número" +
        "       </div>" +
        "   </div>" +
        "   <div class='mb-3'>" +
        "       <label for='pass-check' class='form-label'>Confirmar contraseña</label>" +
        "       <input type='password' class='form-control' placeholder='Confirmar contraseña' id='pass-check' name='contra-check' required>" +
        "       <div class='valid-feedback'>" +
        "           ¡Las contraseñas coinciden!" +
        "       </div>" +
        "       <div class='invalid-feedback'>" +
        "           Las contraseñas tienen que coincidir" +
        "       </div>" +
        "   </div>" +
        "   <button id='btn-register' type='button' class='btn btn-primary'>Registrate</button>" +
        "   <input type='hidden' name='csrfmiddlewaretoken' value='" + csrftoken + "'>"
    "</form>";
}
function login(event) {
    var correo = document.getElementById("usuarioID");
    var password = document.getElementById("contraID");

    if(correo.validity.valid && password.validity.valid){
        console.log("Pase por la validacion")
    }else{
        event.preventDefault();
        if (!correo.validity.valid) {
            correo.focus();
        } else {
            password.focus();
        }
    }
};