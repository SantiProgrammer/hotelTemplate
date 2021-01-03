
let campoInput = $(":text")   
let buttonBooking = $("#booking")
let contactForm =  $("#contact-form")
let sectionServices = $("#services")
let servicesItems = $("#services-items")
let sectionAbout = $("#about")
let imag = $("#imag")
let sectionRoom = $("#room")
let roomItems = $("#room-items")
let rosemaryWelcome =$("#rosemary")
let testimonialSection = $("#testimonial")
let testimonialItem = $("#testimonial-item")

let tituloReserva = $("#titulo-reserva")
    tituloReserva.append("<span>Your reservation</span>")
    tituloReserva.css("margin-top", "25px")

campoInput.hover(function() {
    $(this).css("background-color", "#77bdd948")
}, function() { 
    $(this).css("background-color", "white")
})

rosemaryWelcome.hover(function(){
    $(this).css({
        "color": "#6aaac3",
        "text-shadow": "2px 2px 3px #3e5905"
    })
})

$(document).ready(function(){
    contactForm.hide();
    servicesItems.hide();
    roomItems.hide();
    testimonialItem.hide();
})

buttonBooking.click(function(){
    contactForm.fadeIn(4000);
    $('html, body').animate({
        scrollTop: contactForm.offset().top
    }, 2000);
})

sectionServices.mouseover(function(){
    servicesItems.fadeIn(3000);
})
sectionRoom.mouseover(function(){
    roomItems.fadeIn(3000);
})
testimonialSection.mouseover(function(){
    testimonialItem.fadeIn(3000);
})