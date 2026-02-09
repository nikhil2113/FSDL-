function validateForm() {

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    let result = document.getElementById("result");

    if (username === "" || email === "" || phone === "" || password === "" || confirmPassword === "") {
        result.style.color = "red";
        result.innerHTML = "⚠️ All fields are required!";
        return;
    }

    let phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        result.style.color = "red";
        result.innerHTML = "❌ Phone must be 10 digits only!";
        return;
    }

    let passRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[&$#@]).{7,}$/;
    if (!passRegex.test(password)) {
        result.style.color = "red";
        result.innerHTML = "❌ Password must include Capital, Digit & Special!";
        return;
    }

    if (password !== confirmPassword) {
        result.style.color = "red";
        result.innerHTML = "❌ Passwords do not match!";
        return;
    }

    let emailRegex = /^[a-zA-Z]+@[a-zA-Z]{3}\.[a-zA-Z]{2,3}$/;
    if (!emailRegex.test(email)) {
        result.style.color = "red";
        result.innerHTML = "❌ Invalid Email Format!";
        return;
    }

    result.style.color = "green";
    result.innerHTML = "✅ Registration Successful!";
}

/* DOM FUNCTIONS */

function changeText() {
    document.getElementById("mainHeading").innerHTML =
        "🎉 Registration Portal Updated!";
}

function changeImage() {
    document.getElementById("myImage").src =
        "https://cdn-icons-png.flaticon.com/512/201/201818.png";
}

function addNode() {
    let parent = document.getElementById("nodeArea");
    let p = document.createElement("p");
    p.innerHTML = "✨ New Node Added Successfully!";
    parent.appendChild(p);
}

function deleteNode() {
    let parent = document.getElementById("nodeArea");
    if (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
}

/* jQuery */

$(document).ready(function () {

    $("#jqBtn").click(function () {
        $(this).text("✅ Button Changed with jQuery!");
    });

    $("#getDataBtn").click(function () {
        alert("Username: " + $("#username").val());
    });

    $("#username").attr("placeholder", "Enter Full Name");
});
