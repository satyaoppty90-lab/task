function checkTicket() {
    let age = parseInt(document.getElementById("age").value);
    let showtime = document.getElementById("showtime").value;
    let result = document.getElementById("result");
    let show = document.getElementById("show");



    if (document.getElementById("age").value === "") {
        result.style.color = "blue";
        result.style.fontWeight = "bold";
        result.textContent = "Please Enter Your Age.";
    }
    else if (isNaN(age) || age < 0) {
        result.textContent = "Invalid age.";
    }
    else if (age < 12) {
        result.style.color = "red";
        result.style.fontWeight = "bold";
        result.textContent = "Child discount pricing:- ₹5";
    }
    else if (age >= 65) {
        result.style.color = "green";
        result.style.fontWeight = "bold";
        result.textContent = "Senior discount pricing:- ₹7";
    }
    else {
        result.style.color = "navy";
        result.style.fontWeight = "bold";
        result.textContent = "Standard adult evening premium ticket:- ₹15";
    }

    if (showtime === "matinee") {
        show.style.color = "black";
        show.style.fontWeight = "bold";
        show.textContent = "Stundard adult ticket during daytime show hours:- ₹10";
    }
    else {
        show.textContent = "";
    }
}

