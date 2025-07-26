function attachButtonDEvent() {
    var buttons = document.querySelectorAll(".button-d");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            var selectedHospital = this.previousElementSibling.previousElementSibling.textContent;

            document.querySelector(".hh12").textContent = selectedHospital;

            var appointmentsDiv = document.getElementById("appointments11");
            appointmentsDiv.innerHTML = "";

            var inputBoxHtml = `
                <div class="feeling-input">
                    <label for="feelingInput">How are you feeling today?</label>
                    <input type="text" id="feelingInput" placeholder="Enter your feeling here...">
                     <div id="suggestions" class="suggestions-container"></div>
                    <button class="button-c" id="submitFeeling">Submit</button>
                </div>
                <a href="#" class="back-button" id="back-to-hospitals">Back</a>
            `;
            appointmentsDiv.innerHTML = inputBoxHtml;

            document.getElementById("submitFeeling").addEventListener("click", function() {
                var feeling = document.getElementById("feelingInput").value;
                alert("You entered: " + feeling);
            });

            document.getElementById("back-to-hospitals").addEventListener("click", function(e) {
                e.preventDefault();
                restoreHospitalSelection();
            });
        });
    });
}

function restoreHospitalSelection() {
    var appointmentsDiv = document.getElementById("appointments11");
    appointmentsDiv.innerHTML = "";

    var hospitals = ["Doon Hospital", "Coronation Hospital", "Synergy Hospital", "Fortis Escorts Hospital"];
    hospitals.forEach(function(hospital,index) {
        var cardHtml = `
            <div class="hospital-card">
                <p class="hospital-name">${hospital}</p>
                <p>Details about ${hospital}</p>
               <button class="button-c button-d" id="button-d-${index}">Book Now</button>
            </div>
        `;
        appointmentsDiv.innerHTML += cardHtml;
    });

    document.querySelector(".hh12").textContent = "Choose Hospital";

    attachButtonDEvent();

    // Ensure the back button is visible
    var backButton2 = document.getElementById("appointments-back-button2");
    if (backButton2) {
        backButton2.style.display = "block"; // Explicitly set display to block
    } else {
        // If the back button doesn't exist in the DOM, create it
        var backButtonHtml = `<a href="#" class="back-button" id="appointments-back-button2">Back</a>`;
        appointmentsDiv.innerHTML += backButtonHtml;

        // Attach event listener to the back button
        document.getElementById("appointments-back-button2").addEventListener("click", function(e) {
            e.preventDefault();
            restoreOriginalContent();
        });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    attachButtonDEvent();
});
