"use strict";

var total_personas;
var total_adultos;
var total_ninos;

/*-----------------------------------------------
|   User Scripts                                |
-----------------------------------------------*/
var popoverViajes = new bootstrap.Popover(document.querySelector('#popover-travels'), {
    trigger: 'click',
    title: 'Personas',
    content: '' +
        '<div class="row">' +
        ' <div class="col-6">' +
        '   <h2>Adultos</h2>Mayores de 18 años' +
        ' </div>' +
        ' <div class="col-6 justificar">' +
        '   <div class="number-picker centrar">' +
        '     <button id="minus-travels" class="btn-minus">' +
        '       <i class="fas fa-minus"></i>' +
        '     </button>' +
        '     <input id="input-travels" type="text" class="input-number delimiter" value="2" readonly="readonly">' +
        '     <button id="plus-travels" class="btn-plus">' +
        '       <i class="fas fa-plus"></i>' +
        '     </button>' +
        '   </div>' +
        ' </div>' +
        '</div>' +
        '<br/>' +
        '<div class="row">' +
        ' <div class="col-6">' +
        '   <h2>Menores</h2>Menores de 18 años' +
        ' </div>' +
        ' <div class="col-6 justificar">' +
        '   <div class="number-picker centrar">' +
        '     <button id="minus-travels-kids" class="btn-minus btn-disabled" disabled>' +
        '       <i class="fas fa-minus"></i>' +
        '     </button>' +
        '     <input id="input-travels-kids" type="text" class="input-number delimiter" value="0" readonly="readonly">' +
        '     <button id="plus-travels-kids" class="btn-plus">' +
        '       <i class="fas fa-plus"></i>' +
        '     </button>' +
        '   </div>' +
        ' </div>' +
        '</div>' +
        '<br/>' +
        '<div class="row">' +
        ' <hr class="divisor">' +
        ' <br/>' +
        ' <div class="col-6">' +
        '   <a class="add-room" href="#">Añadir habitación</a>' +
        ' </div>' +
        ' <div class="col-6 justificar">' +
        '   <button id="btn-apply" class="apply">Aplicar</button>' +
        ' </div>' +
        '</div>',
    animation: true,
    container: 'body',
    placement: 'bottom',
    html: true,
    sanitize: false
});

var popoverPlaces = new bootstrap.Popover(document.querySelector('#popover-places'), {
    trigger: 'click',
    title: 'Personas',
    content: '' +
        '<div class="row">' +
        ' <div class="col-6">' +
        '   <h2>Adultos</h2>Mayores de 18 años' +
        ' </div>' +
        ' <div class="col-6 justificar">' +
        '   <div class="number-picker centrar">' +
        '     <button id="minus-places-adults" class="btn-minus">' +
        '       <i class="fas fa-minus"></i>' +
        '     </button>' +
        '     <input id="input-places-adults" type="text" class="input-number delimiter" value="2" readonly="readonly">' +
        '     <button id="plus-places-adults" class="btn-plus">' +
        '       <i class="fas fa-plus"></i>' +
        '     </button>' +
        '   </div>' +
        ' </div>' +
        '</div>' +
        '<br/>' +
        '<div class="row">' +
        ' <div class="col-6">' +
        '   <h2>Menores</h2>Menores de 18 años' +
        ' </div>' +
        ' <div class="col-6 justificar">' +
        '   <div class="number-picker centrar">' +
        '     <button id="minus-places-kids" class="btn-minus btn-disabled" disabled>' +
        '       <i class="fas fa-minus"></i>' +
        '     </button>' +
        '     <input id="input-places-kids" type="text" class="input-number delimiter" value="0" readonly="readonly">' +
        '     <button id="plus-places-kids" class="btn-plus">' +
        '       <i class="fas fa-plus"></i>' +
        '     </button>' +
        '   </div>' +
        ' </div>' +
        '</div>' +
        '<br/>' +
        '<div class="row">' +
        ' <hr class="divisor">' +
        ' <br/>' +
        ' <div class="col-6">' +
        '   <a class="add-room" href="#">Añadir habitación</a>' +
        ' </div>' +
        ' <div class="col-6 justificar">' +
        '   <button id="btn-apply-places" class="apply">Aplicar</button>' +
        ' </div>' +
        '</div>',
    animation: true,
    container: 'body',
    placement: 'bottom',
    html: true,
    sanitize: false
});

var popoverHotels = new bootstrap.Popover(document.querySelector('#popover-hotels'), {
    trigger: 'click',
    title: 'Personas',
    content: '' +
        '<div class="row">' +
        ' <div class="col-6">' +
        '   <h2>Adultos</h2>Mayores de 18 años' +
        ' </div>' +
        ' <div class="col-6 justificar">' +
        '   <div class="number-picker centrar">' +
        '     <button id="minus-hotels-adults" class="btn-minus">' +
        '       <i class="fas fa-minus"></i>' +
        '     </button>' +
        '     <input id="input-hotels-adults" type="text" class="input-number delimiter" value="2" readonly="readonly">' +
        '     <button id="plus-hotels-adults" class="btn-plus">' +
        '       <i class="fas fa-plus"></i>' +
        '     </button>' +
        '   </div>' +
        ' </div>' +
        '</div>' +
        '<br/>' +
        '<div class="row">' +
        ' <div class="col-6">' +
        '   <h2>Menores</h2>Menores de 18 años' +
        ' </div>' +
        ' <div class="col-6 justificar">' +
        '   <div class="number-picker centrar">' +
        '     <button id="minus-hotels-kids" class="btn-minus btn-disabled" disabled>' +
        '       <i class="fas fa-minus"></i>' +
        '     </button>' +
        '     <input id="input-hotels-kids" type="text" class="input-number delimiter" value="0" readonly="readonly">' +
        '     <button id="plus-hotels-kids" class="btn-plus">' +
        '       <i class="fas fa-plus"></i>' +
        '     </button>' +
        '   </div>' +
        ' </div>' +
        '</div>' +
        '<br/>' +
        '<div class="row">' +
        ' <hr class="divisor">' +
        ' <br/>' +
        ' <div class="col-6">' +
        '   <a class="add-room" href="#">Añadir habitación</a>' +
        ' </div>' +
        ' <div id="btn-apply-hotels" class="col-6 justificar">' +
        '   <button class="apply">Aplicar</button>' +
        ' </div>' +
        '</div>',
    animation: true,
    container: 'body',
    placement: 'bottom',
    html: true,
    sanitize: false
});

/*-----------------------------------------------
|   Aux Functions                               |
-----------------------------------------------*/

function reducirValor(element) {
    var value = Number(element.getAttribute("value"));
    element.setAttribute("value", value - 1);
}

function aumentarValor(element) {
    var value = Number(element.getAttribute("value"));
    element.setAttribute("value", value + 1);
}

/*-----------------------------------------------
|   Event Listeners                             |
-----------------------------------------------*/

//Referencía al botón de "avión" en la sección de tours.
//Oculta los popovers que esten abiertos, al momento de presionar el botón.
document.getElementById("nav-home-tab").addEventListener("click", function () {
    popoverHotels.hide();
    popoverPlaces.hide();
});

//Referencía al botón de "Lugares" en la sección de tours.
//Oculta los popovers que esten abiertos, al momento de presionar el botón.
document.getElementById("nav-profile-tab").addEventListener("click", function () {
    popoverViajes.hide();
    popoverHotels.hide();
});

//Referencía al botón de "Lugares" en la sección de tours.
//Oculta los popovers que esten abiertos, al momento de presionar el botón.
document.getElementById("nav-contact-tab").addEventListener("click", function () {
    popoverViajes.hide();
    popoverPlaces.hide();
});

document.getElementById("popover-travels").addEventListener("shown.bs.popover", function () {
    total_adultos = 2;
    total_ninos = 0;
});

document.getElementById("popover-places").addEventListener("shown.bs.popover", function () {
    total_adultos = 2;
    total_ninos = 0;
});

document.getElementById("popover-hotels").addEventListener("shown.bs.popover", function () {
    total_adultos = 2;
    total_ninos = 0;
});



//Referencía al botón de "menos" en el popover de travels.
//Reduce el valor del input en 1.
$(document.body).on('click', "#minus-travels", function () {
    var elem_adults = document.getElementById("input-travels");
    var elem_kids = document.getElementById("input-travels-kids");
    var minus_adults = document.getElementById("minus-travels");
    var minus_kids = document.getElementById("minus-travels-kids");
    var plus_adults = document.getElementById("plus-travels");
    var plus_kids = document.getElementById("plus-travels-kids");

    reducirValor(elem_adults);
    total_adultos -= 1;
    total_personas = total_adultos + total_ninos;
    console.log("Personas: " + total_personas);

    if (total_personas == 1) {
        minus_adults.setAttribute("disabled", true);
        minus_adults.classList.add("btn-disabled");
        minus_kids.setAttribute("disabled", true);
        minus_kids.classList.add("btn-disabled");
    } else {
        if (elem_adults.getAttribute("value") == 1) {
            minus_adults.setAttribute("disabled", true);
            minus_adults.classList.add("btn-disabled");
            plus_kids.removeAttribute("disabled");
            plus_kids.classList.remove("btn-disabled");
            plus_adults.removeAttribute("disabled");
            plus_adults.classList.remove("btn-disabled");
            console.log("Desactivando menos adultos");
        } else {
            if (elem_kids.getAttribute("value") == 0) {
                minus_kids.setAttribute("disabled", true);
                minus_kids.classList.add("btn-disabled");
                console.log("Desactivando menos niños");
            } else {
                minus_kids.removeAttribute("disabled");
                minus_kids.classList.remove("btn-disabled");
            }
            plus_adults.removeAttribute("disabled");
            plus_adults.classList.remove("btn-disabled");
            plus_kids.removeAttribute("disabled");
            plus_kids.classList.remove("btn-disabled");
            minus_adults.removeAttribute("disabled");
            minus_adults.classList.remove("btn-disabled");
        }
    }
});

//Referencía al botón de "más" en el popover de travels.
//Aumenta el valor del input en 1.
$(document.body).on('click', "#plus-travels", function () {
    var elem_adults = document.getElementById("input-travels");
    var elem_kids = document.getElementById("input-travels-kids");
    var plus_adults = document.getElementById("plus-travels");
    var plus_kids = document.getElementById("plus-travels-kids");
    var minus_adults = document.getElementById("minus-travels");
    var minus_kids = document.getElementById("minus-travels-kids");

    aumentarValor(elem_adults);
    total_adultos += 1
    total_personas = total_adultos + total_ninos;
    console.log("Personas: " + total_personas);

    if (total_personas == 8) {
        plus_adults.setAttribute("disabled", true);
        plus_adults.classList.add("btn-disabled");
        plus_kids.setAttribute("disabled", true);
        plus_kids.classList.add("btn-disabled");
        minus_adults.removeAttribute("disabled");
        minus_adults.classList.remove("btn-disabled");
    } else {
        if (elem_adults.getAttribute("value") == 1) {
            minus_adults.setAttribute("disabled", true);
            minus_adults.classList.add("btn-disabled");
            console.log("Desactivando menos adultos");
        } else {
            if (elem_kids.getAttribute("value") == 0) {
                minus_kids.setAttribute("disabled", true);
                minus_kids.classList.add("btn-disabled");
                console.log("Desactivando menos niños");
            } else {
                minus_kids.removeAttribute("disabled");
                minus_kids.classList.remove("btn-disabled");
            }
            plus_adults.removeAttribute("disabled");
            plus_adults.classList.remove("btn-disabled");
            plus_kids.removeAttribute("disabled");
            plus_kids.classList.remove("btn-disabled");
            minus_adults.removeAttribute("disabled");
            minus_adults.classList.remove("btn-disabled");
        }
    }
});

//Referencía al botón de "menos" en el popover de travels.
//Reduce el valor del input en 1.
$(document.body).on('click', "#minus-travels-kids", function () {
    var elem_adults = document.getElementById("input-travels");
    var elem_kids = document.getElementById("input-travels-kids");
    var minus_adults = document.getElementById("minus-travels");
    var minus_kids = document.getElementById("minus-travels-kids");
    var plus_adults = document.getElementById("plus-travels");
    var plus_kids = document.getElementById("plus-travels-kids");

    reducirValor(elem_kids);
    total_ninos -= 1;
    total_personas = total_adultos + total_ninos;
    console.log("Personas: " + total_personas);

    if (total_personas == 1) {
        minus_adults.setAttribute("disabled", true);
        minus_adults.classList.add("btn-disabled");
        minus_kids.setAttribute("disabled", true);
        minus_kids.classList.add("btn-disabled");
    } else {
        if (elem_kids.getAttribute("value") == 0) {
            minus_kids.setAttribute("disabled", true);
            minus_kids.classList.add("btn-disabled");
            console.log("Desactivando menos adultos");
        } else {
            if (elem_adults.getAttribute("value") == 1) {
                minus_adults.setAttribute("disabled", true);
                minus_adults.classList.add("btn-disabled");
                console.log("Desactivando menos adultos");
            } else {
                minus_adults.removeAttribute("disabled");
                minus_adults.classList.remove("btn-disabled");
            }
            plus_adults.removeAttribute("disabled");
            plus_adults.classList.remove("btn-disabled");
            plus_kids.removeAttribute("disabled");
            plus_kids.classList.remove("btn-disabled");
            minus_kids.removeAttribute("disabled");
            minus_kids.classList.remove("btn-disabled");
        }
    }
});

//Referencía al botón de "más" en el popover de travels.
//Aumenta el valor del input en 1.
$(document.body).on('click', "#plus-travels-kids", function () {
    var elem_adults = document.getElementById("input-travels");
    var elem_kids = document.getElementById("input-travels-kids");
    var plus_adults = document.getElementById("plus-travels");
    var plus_kids = document.getElementById("plus-travels-kids");
    var minus_adults = document.getElementById("minus-travels");
    var minus_kids = document.getElementById("minus-travels-kids");

    aumentarValor(elem_kids);
    total_ninos += 1;
    total_personas = total_adultos + total_ninos;
    console.log("Personas: " + total_personas);

    if (total_personas == 8) {
        plus_adults.setAttribute("disabled", true);
        plus_adults.classList.add("btn-disabled");
        plus_kids.setAttribute("disabled", true);
        plus_kids.classList.add("btn-disabled");
    } else {
        if (elem_kids.getAttribute("value") == 0) {
            minus_adults.setAttribute("disabled", true);
            minus_adults.classList.add("btn-disabled");
            console.log("Desactivando menos adultos");
        } else {
            if (elem_adults.getAttribute("value") == 1) {
                minus_kids.setAttribute("disabled", true);
                minus_kids.classList.add("btn-disabled");
                console.log("Desactivando menos niños");
            } else {
                minus_kids.removeAttribute("disabled");
                minus_kids.classList.remove("btn-disabled");
            }
            plus_adults.removeAttribute("disabled");
            plus_adults.classList.remove("btn-disabled");
            plus_kids.removeAttribute("disabled");
            plus_kids.classList.remove("btn-disabled");
            minus_kids.removeAttribute("disabled");
            minus_kids.classList.remove("btn-disabled");
        }
    }
});

//Referencía al boton "aplicar" 
//Cuando se hace click se guardan los valores en el ancla "personas"

$(document.body).on("click", "#btn-apply", function () {
    var adultos = document.getElementById("input-travels").getAttribute("value");
    var ninos = document.getElementById("input-travels-kids").getAttribute("value");

    if (ninos == 0 && adultos != 1) {
        var total = adultos + " adultos";
    }

    if (ninos == 0 && adultos == 1) {
        var total = adultos + " adulto";
    }

    if (ninos == 1 && adultos != 1) {
        var total = adultos + " adultos, " + ninos + " menor";
    }

    if (ninos == 1 && adultos == 1) {
        var total = adultos + " adulto, " + ninos + " menor";
    }

    if (ninos >= 2 && adultos == 1) {
        var total = adultos + " adulto, " + ninos + " menores";
    }

    if (ninos >= 2 && adultos != 1) {
        var total = adultos + " adultos, " + ninos + " menores";
    }

    document.getElementById("popover-travels").innerHTML = total;

    popoverViajes.hide();
});

$(document.body).on('click', "#minus-places-adults", function () {
    var elem_adults = document.getElementById("input-places-adults");
    var elem_kids = document.getElementById("input-places-kids");
    var minus_adults = document.getElementById("minus-places-adults");
    var minus_kids = document.getElementById("minus-places-kids");
    var plus_adults = document.getElementById("plus-places-adults");
    var plus_kids = document.getElementById("plus-places-kids");

    reducirValor(elem_adults);
    total_adultos -= 1;
    total_personas = total_adultos + total_ninos;
    console.log("Personas: " + total_personas);

    if (total_personas == 1) {
        minus_adults.setAttribute("disabled", true);
        minus_adults.classList.add("btn-disabled");
        minus_kids.setAttribute("disabled", true);
        minus_kids.classList.add("btn-disabled");
    } else {
        if (elem_adults.getAttribute("value") == 1) {
            minus_adults.setAttribute("disabled", true);
            minus_adults.classList.add("btn-disabled");
            plus_kids.removeAttribute("disabled");
            plus_kids.classList.remove("btn-disabled");
            plus_adults.removeAttribute("disabled");
            plus_adults.classList.remove("btn-disabled");
            console.log("Desactivando menos adultos");
        } else {
            if (elem_kids.getAttribute("value") == 0) {
                minus_kids.setAttribute("disabled", true);
                minus_kids.classList.add("btn-disabled");
                console.log("Desactivando menos niños");
            } else {
                minus_kids.removeAttribute("disabled");
                minus_kids.classList.remove("btn-disabled");
            }
            plus_adults.removeAttribute("disabled");
            plus_adults.classList.remove("btn-disabled");
            plus_kids.removeAttribute("disabled");
            plus_kids.classList.remove("btn-disabled");
            minus_adults.removeAttribute("disabled");
            minus_adults.classList.remove("btn-disabled");
        }
    }
});

//Referencía al botón de "más" en el popover de travels.
//Aumenta el valor del input en 1.
$(document.body).on('click', "#plus-places-adults", function () {
    var elem_adults = document.getElementById("input-places-adults");
    var elem_kids = document.getElementById("input-places-kids");
    var plus_adults = document.getElementById("plus-places-adults");
    var plus_kids = document.getElementById("plus-places-kids");
    var minus_adults = document.getElementById("minus-places-adults");
    var minus_kids = document.getElementById("minus-places-kids");

    aumentarValor(elem_adults);
    total_adultos += 1
    total_personas = total_adultos + total_ninos;
    console.log("Personas: " + total_personas);

    if (total_personas == 8) {
        plus_adults.setAttribute("disabled", true);
        plus_adults.classList.add("btn-disabled");
        plus_kids.setAttribute("disabled", true);
        plus_kids.classList.add("btn-disabled");
        minus_adults.removeAttribute("disabled");
        minus_adults.classList.remove("btn-disabled");
    } else {
        if (elem_adults.getAttribute("value") == 1) {
            minus_adults.setAttribute("disabled", true);
            minus_adults.classList.add("btn-disabled");
            console.log("Desactivando menos adultos");
        } else {
            if (elem_kids.getAttribute("value") == 0) {
                minus_kids.setAttribute("disabled", true);
                minus_kids.classList.add("btn-disabled");
                console.log("Desactivando menos niños");
            } else {
                minus_kids.removeAttribute("disabled");
                minus_kids.classList.remove("btn-disabled");
            }
            plus_adults.removeAttribute("disabled");
            plus_adults.classList.remove("btn-disabled");
            plus_kids.removeAttribute("disabled");
            plus_kids.classList.remove("btn-disabled");
            minus_adults.removeAttribute("disabled");
            minus_adults.classList.remove("btn-disabled");
        }
    }
});

//Referencía al botón de "menos" en el popover de travels.
//Reduce el valor del input en 1.
$(document.body).on('click', "#minus-places-kids", function () {
    var elem_adults = document.getElementById("input-places-adults");
    var elem_kids = document.getElementById("input-places-kids");
    var minus_adults = document.getElementById("minus-places-adults");
    var minus_kids = document.getElementById("minus-places-kids");
    var plus_adults = document.getElementById("plus-places-adults");
    var plus_kids = document.getElementById("plus-places-kids");

    reducirValor(elem_kids);
    total_ninos -= 1;
    total_personas = total_adultos + total_ninos;
    console.log("Personas: " + total_personas);

    if (total_personas == 1) {
        minus_adults.setAttribute("disabled", true);
        minus_adults.classList.add("btn-disabled");
        minus_kids.setAttribute("disabled", true);
        minus_kids.classList.add("btn-disabled");
    } else {
        if (elem_kids.getAttribute("value") == 0) {
            minus_kids.setAttribute("disabled", true);
            minus_kids.classList.add("btn-disabled");
            console.log("Desactivando menos adultos");
        } else {
            if (elem_adults.getAttribute("value") == 1) {
                minus_adults.setAttribute("disabled", true);
                minus_adults.classList.add("btn-disabled");
                console.log("Desactivando menos adultos");
            } else {
                minus_adults.removeAttribute("disabled");
                minus_adults.classList.remove("btn-disabled");
            }
            plus_adults.removeAttribute("disabled");
            plus_adults.classList.remove("btn-disabled");
            plus_kids.removeAttribute("disabled");
            plus_kids.classList.remove("btn-disabled");
            minus_kids.removeAttribute("disabled");
            minus_kids.classList.remove("btn-disabled");
        }
    }
});

//Referencía al botón de "más" en el popover de travels.
//Aumenta el valor del input en 1.
$(document.body).on('click', "#plus-places-kids", function () {
    var elem_adults = document.getElementById("input-places-adults");
    var elem_kids = document.getElementById("input-places-kids");
    var plus_adults = document.getElementById("plus-places-adults");
    var plus_kids = document.getElementById("plus-places-kids");
    var minus_adults = document.getElementById("minus-places-adults");
    var minus_kids = document.getElementById("minus-places-kids");

    aumentarValor(elem_kids);
    total_ninos += 1;
    total_personas = total_adultos + total_ninos;
    console.log("Personas: " + total_personas);

    if (total_personas == 8) {
        plus_adults.setAttribute("disabled", true);
        plus_adults.classList.add("btn-disabled");
        plus_kids.setAttribute("disabled", true);
        plus_kids.classList.add("btn-disabled");
    } else {
        if (elem_kids.getAttribute("value") == 0) {
            minus_adults.setAttribute("disabled", true);
            minus_adults.classList.add("btn-disabled");
            console.log("Desactivando menos adultos");
        } else {
            if (elem_adults.getAttribute("value") == 1) {
                minus_kids.setAttribute("disabled", true);
                minus_kids.classList.add("btn-disabled");
                console.log("Desactivando menos niños");
            } else {
                minus_kids.removeAttribute("disabled");
                minus_kids.classList.remove("btn-disabled");
            }
            plus_adults.removeAttribute("disabled");
            plus_adults.classList.remove("btn-disabled");
            plus_kids.removeAttribute("disabled");
            plus_kids.classList.remove("btn-disabled");
            minus_kids.removeAttribute("disabled");
            minus_kids.classList.remove("btn-disabled");
        }
    }
});

//Referencía al boton "aplicar" 
//Cuando se hace click se guardan los valores en el ancla "personas"

$(document.body).on("click", "#btn-apply-places", function () {
    var adultos = document.getElementById("input-places-adults").getAttribute("value");
    var ninos = document.getElementById("input-places-kids").getAttribute("value");

    if (ninos == 0 && adultos != 1) {
        var total = adultos + " adultos";
    }

    if (ninos == 0 && adultos == 1) {
        var total = adultos + " adulto";
    }

    if (ninos == 1 && adultos != 1) {
        var total = adultos + " adultos, " + ninos + " menor";
    }

    if (ninos == 1 && adultos == 1) {
        var total = adultos + " adulto, " + ninos + " menor";
    }

    if (ninos >= 2 && adultos == 1) {
        var total = adultos + " adulto, " + ninos + " menores";
    }

    if (ninos >= 2 && adultos != 1) {
        var total = adultos + " adultos, " + ninos + " menores";
    }

    document.getElementById("popover-places").innerHTML = total;

    popoverPlaces.hide();
});

$(document.body).on('click', "#minus-hotels-adults", function () {
    var elem_adults = document.getElementById("input-hotels-adults");
    var elem_kids = document.getElementById("input-hotels-kids");
    var minus_adults = document.getElementById("minus-hotels-adults");
    var minus_kids = document.getElementById("minus-hotels-kids");
    var plus_adults = document.getElementById("plus-hotels-adults");
    var plus_kids = document.getElementById("plus-hotels-kids");

    reducirValor(elem_adults);
    total_adultos -= 1;
    total_personas = total_adultos + total_ninos;
    console.log("Personas: " + total_personas);

    if (total_personas == 1) {
        minus_adults.setAttribute("disabled", true);
        minus_adults.classList.add("btn-disabled");
        minus_kids.setAttribute("disabled", true);
        minus_kids.classList.add("btn-disabled");
    } else {
        if (elem_adults.getAttribute("value") == 1) {
            minus_adults.setAttribute("disabled", true);
            minus_adults.classList.add("btn-disabled");
            plus_kids.removeAttribute("disabled");
            plus_kids.classList.remove("btn-disabled");
            plus_adults.removeAttribute("disabled");
            plus_adults.classList.remove("btn-disabled");
            console.log("Desactivando menos adultos");
        } else {
            if (elem_kids.getAttribute("value") == 0) {
                minus_kids.setAttribute("disabled", true);
                minus_kids.classList.add("btn-disabled");
                console.log("Desactivando menos niños");
            } else {
                minus_kids.removeAttribute("disabled");
                minus_kids.classList.remove("btn-disabled");
            }
            plus_adults.removeAttribute("disabled");
            plus_adults.classList.remove("btn-disabled");
            plus_kids.removeAttribute("disabled");
            plus_kids.classList.remove("btn-disabled");
            minus_adults.removeAttribute("disabled");
            minus_adults.classList.remove("btn-disabled");
        }
    }
});

//Referencía al botón de "más" en el popover de travels.
//Aumenta el valor del input en 1.
$(document.body).on('click', "#plus-hotels-adults", function () {
    var elem_adults = document.getElementById("input-hotels-adults");
    var elem_kids = document.getElementById("input-hotels-kids");
    var plus_adults = document.getElementById("plus-hotels-adults");
    var plus_kids = document.getElementById("plus-hotels-kids");
    var minus_adults = document.getElementById("minus-hotels-adults");
    var minus_kids = document.getElementById("minus-hotels-kids");

    aumentarValor(elem_adults);
    total_adultos += 1
    total_personas = total_adultos + total_ninos;
    console.log("Personas: " + total_personas);

    if (total_personas == 8) {
        plus_adults.setAttribute("disabled", true);
        plus_adults.classList.add("btn-disabled");
        plus_kids.setAttribute("disabled", true);
        plus_kids.classList.add("btn-disabled");
        minus_adults.removeAttribute("disabled");
        minus_adults.classList.remove("btn-disabled");
    } else {
        if (elem_adults.getAttribute("value") == 1) {
            minus_adults.setAttribute("disabled", true);
            minus_adults.classList.add("btn-disabled");
            console.log("Desactivando menos adultos");
        } else {
            if (elem_kids.getAttribute("value") == 0) {
                minus_kids.setAttribute("disabled", true);
                minus_kids.classList.add("btn-disabled");
                console.log("Desactivando menos niños");
            } else {
                minus_kids.removeAttribute("disabled");
                minus_kids.classList.remove("btn-disabled");
            }
            plus_adults.removeAttribute("disabled");
            plus_adults.classList.remove("btn-disabled");
            plus_kids.removeAttribute("disabled");
            plus_kids.classList.remove("btn-disabled");
            minus_adults.removeAttribute("disabled");
            minus_adults.classList.remove("btn-disabled");
        }
    }
});

//Referencía al botón de "menos" en el popover de travels.
//Reduce el valor del input en 1.
$(document.body).on('click', "#minus-hotels-kids", function () {
    var elem_adults = document.getElementById("input-hotels-adults");
    var elem_kids = document.getElementById("input-hotels-kids");
    var minus_adults = document.getElementById("minus-hotels-adults");
    var minus_kids = document.getElementById("minus-hotels-kids");
    var plus_adults = document.getElementById("plus-hotels-adults");
    var plus_kids = document.getElementById("plus-hotels-kids");

    reducirValor(elem_kids);
    total_ninos -= 1;
    total_personas = total_adultos + total_ninos;
    console.log("Personas: " + total_personas);

    if (total_personas == 1) {
        minus_adults.setAttribute("disabled", true);
        minus_adults.classList.add("btn-disabled");
        minus_kids.setAttribute("disabled", true);
        minus_kids.classList.add("btn-disabled");
    } else {
        if (elem_kids.getAttribute("value") == 0) {
            minus_kids.setAttribute("disabled", true);
            minus_kids.classList.add("btn-disabled");
            console.log("Desactivando menos adultos");
        } else {
            if (elem_adults.getAttribute("value") == 1) {
                minus_adults.setAttribute("disabled", true);
                minus_adults.classList.add("btn-disabled");
                console.log("Desactivando menos adultos");
            } else {
                minus_adults.removeAttribute("disabled");
                minus_adults.classList.remove("btn-disabled");
            }
            plus_adults.removeAttribute("disabled");
            plus_adults.classList.remove("btn-disabled");
            plus_kids.removeAttribute("disabled");
            plus_kids.classList.remove("btn-disabled");
            minus_kids.removeAttribute("disabled");
            minus_kids.classList.remove("btn-disabled");
        }
    }
});

//Referencía al botón de "más" en el popover de travels.
//Aumenta el valor del input en 1.
$(document.body).on('click', "#plus-hotels-kids", function () {
    var elem_adults = document.getElementById("input-hotels-adults");
    var elem_kids = document.getElementById("input-hotels-kids");
    var plus_adults = document.getElementById("plus-hotels-adults");
    var plus_kids = document.getElementById("plus-hotels-kids");
    var minus_adults = document.getElementById("minus-hotels-adults");
    var minus_kids = document.getElementById("minus-hotels-kids");

    aumentarValor(elem_kids);
    total_ninos += 1;
    total_personas = total_adultos + total_ninos;
    console.log("Personas: " + total_personas);

    if (total_personas == 8) {
        plus_adults.setAttribute("disabled", true);
        plus_adults.classList.add("btn-disabled");
        plus_kids.setAttribute("disabled", true);
        plus_kids.classList.add("btn-disabled");
    } else {
        if (elem_kids.getAttribute("value") == 0) {
            minus_adults.setAttribute("disabled", true);
            minus_adults.classList.add("btn-disabled");
            console.log("Desactivando menos adultos");
        } else {
            if (elem_adults.getAttribute("value") == 1) {
                minus_kids.setAttribute("disabled", true);
                minus_kids.classList.add("btn-disabled");
                console.log("Desactivando menos niños");
            } else {
                minus_kids.removeAttribute("disabled");
                minus_kids.classList.remove("btn-disabled");
            }
            plus_adults.removeAttribute("disabled");
            plus_adults.classList.remove("btn-disabled");
            plus_kids.removeAttribute("disabled");
            plus_kids.classList.remove("btn-disabled");
            minus_kids.removeAttribute("disabled");
            minus_kids.classList.remove("btn-disabled");
        }
    }
});

//Referencía al boton "aplicar" 
//Cuando se hace click se guardan los valores en el ancla "personas"

$(document.body).on("click", "#btn-apply-hotels", function () {
    var adultos = document.getElementById("input-hotels-adults").getAttribute("value");
    var ninos = document.getElementById("input-hotels-kids").getAttribute("value");

    if (ninos == 0 && adultos != 1) {
        var total = adultos + " adultos";
    }

    if (ninos == 0 && adultos == 1) {
        var total = adultos + " adulto";
    }

    if (ninos == 1 && adultos != 1) {
        var total = adultos + " adultos, " + ninos + " menor";
    }

    if (ninos == 1 && adultos == 1) {
        var total = adultos + " adulto, " + ninos + " menor";
    }

    if (ninos >= 2 && adultos == 1) {
        var total = adultos + " adulto, " + ninos + " menores";
    }

    if (ninos >= 2 && adultos != 1) {
        var total = adultos + " adultos, " + ninos + " menores";
    }

    document.getElementById("popover-hotels").innerHTML = total;

    popoverHotels.hide();
});
