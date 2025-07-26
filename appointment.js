function attachBookNowEvent() {
    var originalHeadingText = document.querySelector(".hh12").textContent;
    document.getElementById("bookApp").addEventListener("click", function() {
        document.querySelector(".hh12").textContent = "Choose Hospital";
        var appointmentsDiv = document.getElementById("appointments11");
        appointmentsDiv.innerHTML = "";
        var hospitals = ["Doon Hospital", "Coronation Hospital", "Synergy Hospital", "Fortis Escorts Hospital"];
        hospitals.forEach(function(hospital, index) {
            var cardHtml = `
                <div class="hospital-card">
                    <p class="hospital-name">${hospital}</p>
                    <p>Details about ${hospital}</p>
                    <button class="button-c button-d" id="button-d-${index}">Book Now</button>
                </div>
            `;
            appointmentsDiv.innerHTML += cardHtml;
        });
        var backButtonHtml = `
            <a href="#" class="back-button" id="appointments-back-button2">Back</a>
        `;
        appointmentsDiv.innerHTML += backButtonHtml;
        document.getElementById("appointments-back-button2").addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(".hh12").textContent = originalHeadingText;
            restoreOriginalContent();
        });
        attachButtonDEvent();
    });
}

function attachBookNowEvent2() {
    var originalHeadingText2 = document.querySelector(".hh12").textContent;
    
    document.getElementById("checkApp").addEventListener("click", function() {
        document.querySelector(".hh12").textContent = "Recent Appointments";
        var appointmentsDiv2 = document.getElementById("appointments11");
        appointmentsDiv2.innerHTML = "";

      
        var appointments = [
            { date: "01-March-25", time: "10:00 AM", doctor: "Dr. A.K. Singh ", hospital: "Doon Hospital" }
        ];

    
        var appointmentsHtml = `
            <table ID="doctors-table" border = "1">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Doctor</th>
                        <th>Hospital</th>
                    </tr>
                </thead>
                <tbody>
        `;

        
        appointments.forEach(function(appointment, index) {
            appointmentsHtml += `
                <tr>
                    <td>${index + 1}</td> <!-- S.No column -->
                    <td>${appointment.date}</td>
                    <td>${appointment.time}</td>
                    <td>${appointment.doctor}</td>
                    <td>${appointment.hospital}</td>
                </tr>
            `;
        });

       
        appointmentsHtml += `
                </tbody>
            </table>
        `;

 
        appointmentsDiv2.innerHTML += appointmentsHtml;

     
        var backButtonHtml = `
            <a href="#" class="back-button" id="appointments-back-button2">Back</a>
        `;
        appointmentsDiv2.innerHTML += backButtonHtml;

        
        document.getElementById("appointments-back-button2").addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(".hh12").textContent = originalHeadingText2;
            restoreOriginalContent();
        });
    });
}


function restoreOriginalContent() {
    var appointmentsDiv = document.getElementById("appointments11");
    appointmentsDiv.innerHTML = `
        <div class="bookappointment">
            <span class="title3">Book an Appointment</span> 
            <img src="images/book.png" alt="" class="logo22"> 
            <button id="bookApp" class="button-c">Book Now</button>   
        </div>
        <div class="checkappointment">
            <span class="title3">Check Appointments</span> 
            <img src="images/calendar.png" alt="" class="logo22 logo23"> 
            <button id="checkApp" class="button-c">Check Now</button>
        </div>
    `;

   
    attachBookNowEvent();  
    attachBookNowEvent2(); 
}


attachBookNowEvent();
attachBookNowEvent2();
