particlesJS({
    "particles": {
        "number": {
            "value": 20,
            "density": {
                "enable": false,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "image",
            "stroke": {
                "width": 0,
                "color": "#ffffff"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "/static/img/gallery/aeroplano.png",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 1,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 20,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 5,
            "direction": "top-right",
            "random": false,
            "straight": true,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 200,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

window.addEventListener("load", function () {
    var add_phone = document.getElementById("add-phone");
    var div_phone = document.getElementById("add-phone-div");
    var edit_phone = document.getElementById("edit-phone");
    var edit_pass = document.getElementById("edit-pass");

    edit_pass.onclick = editPassword;

    if (add_phone) {
        add_phone.onclick = addSpace;
    } else {
        edit_phone.onclick = addEdit;
    }

    function addSpace() {
        var cancelar = document.createElement("button");
        var input = document.createElement("input");
        var form = document.createElement("form");

        input.id = "phoneID";
        input.type = "text";
        input.name = "input_phone";
        input.placeholder = "Teléfono";
        input.ariaRoleDescription = "phoneHelp";
        input.classList.add("form-control");
        input.maxLength = 15;
        input.setCustomValidity("Invalid");
        input.onkeyup = verifyPhone;
        form.id = "formPhone";
        form.classList.add("was-validated");
        form.method = "GET";
        form.noValidate = true;
        cancelar.type = "button";
        cancelar.id = "btn-cancel";
        cancelar.innerHTML = "Cancelar";
        cancelar.classList.add("btn", "btn-danger");
        cancelar.onclick = cancel;
        form.insertAdjacentElement("beforeend", input);
        form.insertAdjacentHTML("beforeend", "<div id='phoneHelp' class='form-text'>Recuerda que debes de ingresar tu código de país, seguido del código de area y tu número teléfonico</div>");
        div_phone.insertAdjacentElement("beforeend", form);
        div_phone.insertAdjacentHTML("beforeend", "<br>");
        div_phone.insertAdjacentElement("afterend", cancelar);
        add_phone.setAttribute("disabled", "true");
    }

    function addEdit() {
        var div = document.createElement("div");
        var cancelar = document.createElement("button");
        var input = document.createElement("input");
        var form = document.createElement("form");
        var tel = document.getElementById("userPhone");
        var icon = document.getElementById("icon-phone");
        var edit_phone = document.getElementById("edit-phone");

        div.id = "div-edit";

        edit_phone.onclick = addPhone;

        input.id = "phoneID";
        input.type = "text";
        input.name = "input_phone";
        input.placeholder = "Teléfono";
        input.ariaRoleDescription = "phoneHelp";
        input.classList.add("form-control");
        input.maxLength = 15;
        input.setCustomValidity("");
        input.onkeyup = verifyPhone;
        input.value = tel.innerHTML;

        form.id = "formPhone";
        form.classList.add("was-validated");
        form.method = "GET";
        form.noValidate = true;

        cancelar.type = "button";
        cancelar.id = "btn-cancel";
        cancelar.innerHTML = "Cancelar";
        cancelar.classList.add("btn", "btn-danger");
        cancelar.onclick = cancelEdit;

        form.insertAdjacentElement("beforeend", input);
        form.insertAdjacentHTML("beforeend", "<div id='phoneHelp' class='form-text'>Recuerda que debes de ingresar tu código de país, seguido del código de area y tu número teléfonico</div>");
        div.insertAdjacentElement("beforeend", form);
        div.insertAdjacentHTML("beforeend", "<br>");
        edit_phone.insertAdjacentElement("afterend", cancelar);
        edit_phone.insertAdjacentElement("beforebegin", div);

        tel.innerHTML = "";
        icon.remove();
    }

    function cancel() {
        var cancelar = document.getElementById("btn-cancel");
        cancelar.remove();
        edit_phone.removeAttribute("disabled");
        div_phone.innerHTML = "";
        edit_phone.onclick = addSpace;
    }

    function cancelEdit() {
        var tel = document.getElementById("userPhone");
        var form = document.getElementById("formPhone");
        var input = document.getElementById("phoneID");
        var icon = document.createElement("i");
        var edit_phone_new = document.createElement("button");
        var aria = document.getElementById("phoneHelp");
        var edit_phone = document.getElementById("edit-phone");
        var cancel = document.getElementById("btn-cancel");
        var div = document.getElementById("div-edit");

        icon.id = "icon-phone";
        icon.classList.add("fas", "fa-phone");

        tel.innerHTML = input.value;

        edit_phone_new.id = "edit-phone";
        edit_phone_new.type = "button";
        edit_phone_new.classList.add("btn", "btn-info");
        edit_phone_new.innerHTML = "Editar";
        edit_phone_new.onclick = addEdit;

        tel.insertAdjacentElement("beforebegin", icon);
        tel.insertAdjacentElement("afterend", edit_phone_new);
        tel.insertAdjacentHTML("afterend", "&nbsp;&nbsp;&nbsp;&nbsp;")

        form.remove();
        aria.remove();
        edit_phone.remove();
        cancel.remove();
        div.remove();
    }

    function verifyPhone() {
        if (this.value.length > 5) {
            console.log("Holi");
            this.setCustomValidity("");
            add_phone.removeAttribute("disabled");
            add_phone.onclick = addPhone;
        } else {
            console.log("Bebe");
            this.setCustomValidity("Invalido");
            add_phone.setAttribute("disabled", "true");
        }
    }

    function addPhone() {
        var input = document.getElementById("phoneID");
        var csrftoken = getCookie("csrftoken");
        var correo = document.getElementById("emailUser");

        $.ajax({
            url: "/ajax/guardar_telefono",
            method: "POST",
            data: { email: correo.innerHTML, phone: input.value },
            dataType: "json",
            headers: { 'X-CSRFToken': csrftoken },
            success: function (response) {
                console.log(response);
                window.location.replace("/profile/personal-info");
            },
            error: function () {
                console.log("error");
            }
        });
    }

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

    function editPassword(){
        var icon = document.getElementById("pass-icon");
        var span = document.getElementById("userPass");
        var button = document.getElementById("edit-pass");
        var cancelar = document.createElement("button");
        var div = document.createElement("div");
        var form = document.createElement("form");
        var actual_pass = document.createElement("input");
        var new_pass = document.createElement("input");
        var new_confirm = document.createElement("input");

        icon.remove();
        span.remove();

        var parentHTML = button.parentNode.innerHTML;
        var newHTML = parentHTML.replace(/\&nbsp;/g, '');
        button.parentNode.innerHTML = newHTML;

        cancelar.type = "button";
        cancelar.id = "btn-cancel-pass";
        cancelar.innerHTML = "Cancelar";
        cancelar.classList.add("btn", "btn-danger");
        
        div.id = "div-";
    }
});