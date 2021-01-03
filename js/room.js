
let habitacion = [
    {
        id: 1,
        categoria : "standar",
        base : "",
        banio : "ducha",
        vista : "interna",
        precio : 1000
    },
    {
        id: 2,
        categoria : "superior",
        base : "",
        banio : "bañera",
        vista : "calle",
        precio : 1500
    },
    {
        id: 3,
        categoria : "especial",
        base : "",
        banio : "jacuzzi",
        vista : "al mar",
        precio : 2000
    },
    {
        id: 4,
        categoria : "suit",
        base : "",
        banio : "jacuzzi",
        vista : "al mar",
        precio : 2500
    }

]


//Dom
let checkInP = document.getElementById("check-in-p")    
let selectCheckIn = document.createElement("p")
    selectCheckIn.innerText = localStorage.getItem("check-in")
    checkInP.appendChild(selectCheckIn)

let checkOutP = document.getElementById("check-out-p")
let selectCheckOut = document.createElement("p")
    selectCheckOut.innerText = localStorage.getItem("check-out")
    checkOutP.appendChild(selectCheckOut)

let guestSelect = document.getElementById("pasajero-select")
let guestSelectOut = document.createElement("p")
    guestSelectOut.innerText = localStorage.getItem("pasajeros")
    guestSelect.appendChild(guestSelectOut)


let continueToBook = document.getElementById("booking")
//Precio Hab
function book(id){
    let i = 0
    while(habitacion[i].id !== id){
        i++
    }
    continueToBook.classList.remove('invisible')
    let precio = ""
        document.getElementById("valor-total").innerText = "Total: $" + habitacion[i].precio * localStorage.getItem("pasajeros") * localStorage.getItem("dateTotal") 
}

