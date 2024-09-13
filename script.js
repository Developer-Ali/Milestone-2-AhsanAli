var submitBtn = document.getElementById("submitBtn");
var form = document.getElementById("resume-form");
submitBtn.addEventListener("click", function () {
    // Get all the input fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var skills = document.getElementById("skills").value;
    var experience = document.getElementById("experience").value;
    var address = document.getElementById("address").value;
    // Check if all fields are filled
    if (name && email && phone && skills && experience && address) {
        alert("Submitted!");
    }
    else {
        alert("Please fill all the fields before submitting.");
    }
});
