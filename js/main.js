//Cargo guests
let guests = [ '', 1, 2, 3, 4, 5, 6, 7, 8];
let pasajeros = document.getElementById('pasajeros'); 

function opciones(lista, opcion){
    let elemento = "";
    for (let i = 0; i < lista.length; i++){
        elemento += "<option>" + lista[i] + "</option>";
    }
    opcion.innerHTML = elemento
} 
opciones(guests, pasajeros)

//Guests select
function obtenerPasajero(){
    let pasajeroSelect = document.getElementById("pasajeros");
    localStorage.setItem(pasajeroSelect.id, pasajeroSelect.value)
}

//Date
let checkIn = document.getElementById("check-in");
let checkOut = document.getElementById("check-out");

function obtenerFecha(){   
    localStorage.setItem(checkIn.id,checkIn.value);
    localStorage.setItem(checkOut.id, checkOut.value);
   
    let checkInDate = new Date(checkIn.value);
    let checkOutDate = new Date(checkOut.value);
    let dateTotal = checkOutDate - checkInDate;
    localStorage.setItem("dateTotal", Math.floor(dateTotal / (1000 * 60 * 60 * 24)));

}

function pasajeroDatos(){
    obtenerPasajero()
    obtenerFecha()
    
    if(checkIn.value,checkOut.value,pasajeros.value === null || checkIn.value,checkOut.value,pasajeros.value === ''){
        alert("Select a date and guests to continue")
    } else{
        window.location.href = "room.html";
    }
}

//Scroll
function desplazarMe(section) {
    $('html, body').animate({
       scrollTop: $('#' + section).offset().top
    }, 2000)
}
 
$('#l1').click(function() {
desplazarMe("room")
})

$('#l2').click(function() {
desplazarMe("about")
})

$('#l3').click(function() {
desplazarMe("contact")
})

//Ajax

let HTMLCard = ""
let HTMLError = ""
let contenidoJSON = ""

function cargoCardsTestimonial() {
   $.ajax({
      url: 'https://randomuser.me/api/?results=4&nat=us,fr,br',
      dataType: 'json',
      success: function(data) {
         contenidoJSON = data.results
         for (let i in contenidoJSON) {
            HTMLCard += `  <div class="card mr-2">
                                <img class="card-img-top img-testimonial" src="${contenidoJSON[i].picture.large}">
                                <div class="card-body text-center">
                                    <p class="card-text-testimonial">"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim a doloremque quidem nemo fugiat nulla deserunt ducimus porro, pariatur vel voluptates illo, modi debitis aperiam sit beatae dolor! Earum, in."</p>
                                    <span class="card-i-testimonial"><span><i class="fa fa-star" aria-hidden="true"></i></span><span><i class="fa fa-star" aria-hidden="true"></i></span><span><i class="fa fa-star" aria-hidden="true"></i></span><span><i class="fa fa-star" aria-hidden="true"></i></span><span><i class="fa fa-star" aria-hidden="true"></i></span></span>
                                    <h5 class="card-title-testimonial">${contenidoJSON[i].name.first} ${contenidoJSON[i].name.last}</h5>
                                    <h6 class="card-city-testimonial">${contenidoJSON[i].location.city}, ${contenidoJSON[i].location.country}</h6>
                                </div>
                            </div>`
            $("#testimonial-guests").html(HTMLCard)            
         };
      },
      error: function() {
         HTMLError = "<div class='center-text'>" +
                     "<h4>El contenido parece no estar disponible. Intente nuevamente en unos minutos.</h4>" +
                     "</div>"
         $("#testimonial-item").html(HTMLError)
      }
   })
}
cargoCardsTestimonial()