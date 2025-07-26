document.addEventListener("DOMContentLoaded", function () {
    const cardsContainer = document.getElementById("cards-container");
    const editableContainer = document.getElementById("editable-container");
    const bedsContainer = document.getElementById("beds-container");
    const patientsContainer = document.getElementById("patients-container");
    const card4Container = document.getElementById("card4-container");
    const inventoryContainer = document.getElementById("inventory-container");
    const medicinesContainer = document.getElementById("medicines-container");
    const customContainer = document.getElementById("custom-container");
    const box = document.querySelector(".box"); 

    function showDoctorsContainer() {
        
        box.style.display = "block"; 
        bedsContainer.style.display = "none";
        cardsContainer.style.display = "none";
        patientsContainer.style.display = "none"; 
        card4Container.style.display = "none";
        inventoryContainer.style.display = "none";
        medicinesContainer.style.display = "none";
        customContainer.style.display = "none";
        editableContainer.style.display = "block";
    }

    function showBedsContainer() {
        
        box.style.display = "none"; 
        editableContainer.style.display = "none";
        patientsContainer.style.display = "none";
        card4Container.style.display = "none";
        inventoryContainer.style.display = "none";
        medicinesContainer.style.display = "none";
        customContainer.style.display = "none"; 
        bedsContainer.style.display = "block";
    }

    function showPatientsContainer() {
        
        box.style.display = "none"; 
        editableContainer.style.display = "none";
        bedsContainer.style.display = "none";
        card4Container.style.display = "none";
        inventoryContainer.style.display = "none";
        medicinesContainer.style.display = "none";
        customContainer.style.display = "none";
        patientsContainer.style.display = "block";
    }

    function showCard4Container() {
        box.style.display = "none";
        editableContainer.style.display = "none";
        bedsContainer.style.display = "none";
        patientsContainer.style.display = "none";
        inventoryContainer.style.display = "none";
        medicinesContainer.style.display = "none";
        customContainer.style.display = "none";
        card4Container.style.display = "block"; 
    }

    function showInventoryContainer() {
        
        box.style.display = "none";
        editableContainer.style.display = "none";
        bedsContainer.style.display = "none";
        patientsContainer.style.display = "none";
        card4Container.style.display = "none";
        customContainer.style.display = "none";
        medicinesContainer.style.display = "none";
        inventoryContainer.style.display = "block"; 
    }
    function showMedicinesContainer() {     
        
        box.style.display = "none";
        editableContainer.style.display = "none";
        bedsContainer.style.display = "none";
        patientsContainer.style.display = "none";
        card4Container.style.display = "none";
        customContainer.style.display = "none";
        inventoryContainer.style.display = "none";
        medicinesContainer.style.display = "block"; 
    }
    function resetToInitialState() {
        
        editableContainer.style.display = "none";
        bedsContainer.style.display = "none";
        patientsContainer.style.display = "none";
        card4Container.style.display = "none";
        customContainer.style.display = "none";
        inventoryContainer.style.display = "none";
        medicinesContainer.style.display = "none";
        box.style.display = "flex"; 
        cardsContainer.style.display = "flex"; 
    }
        
    function showCustomContainer() {
        
        box.style.display = "flex";  
        editableContainer.style.display = "none";
        cardsContainer.style.display = "none";
        bedsContainer.style.display = "none";
        patientsContainer.style.display = "none";
        card4Container.style.display = "none";
        inventoryContainer.style.display = "none";
        medicinesContainer.style.display = "none";
        customContainer.style.display = "block"; 
    }

   
    document.querySelector(".b6").addEventListener("click", function (event) {
        event.preventDefault();
        showCustomContainer(); 
    });
        
        document.getElementById("toggle-icon").addEventListener("click", function () {
            const tableView = document.getElementById("doctors-table");
            const boxView = document.getElementById("box-view");
            const toggleIcon = document.getElementById("toggle-icon");
    
            if (tableView.style.display === "none") {
                tableView.style.display = "table";
                boxView.style.display = "none";
                toggleIcon.classList.replace("fa-th-large", "fa-th-list");
            } else {
                tableView.style.display = "none";
                boxView.style.display = "block";
                toggleIcon.classList.replace("fa-th-list", "fa-th-large");
            }
        });

    
    function populateDoctorsTable() {
        const doctors = [
            { id: 1, name: "Dr. Ayaan", specialization: "Cardiologist" },
            { id: 2, name: "Dr. Kritika", specialization: "Neurologist" },
            { id: 3, name: "Dr. Harsh", specialization: "Oncologist" },
            { id: 4, name: "Dr. Pari", specialization: "Psychiatrist" },
            { id: 5, name: "Dr. Nikhil", specialization: "Dermatologist" },
            { id: 6, name: "Dr. Mukul", specialization: "Orthopedics"}
        ];

        const tableBody = document.querySelector("#doctors-table tbody");
        tableBody.innerHTML = ""; 
        doctors.forEach(doctor => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${doctor.id}</td>
                <td>${doctor.name}</td>
                <td>${doctor.specialization}</td>       
            `;
            tableBody.appendChild(row);
        });
        
          const tableView = document.getElementById("doctors-table");
          const boxView = document.getElementById("box-view");
          tableView.style.display = "none";
          boxView.style.display = "block";
    }
    
    document.querySelector("#card1").addEventListener("click", populateDoctorsTable);

   
    document.querySelector("#card1").addEventListener("click", function () {
        showDoctorsContainer();
    });
    document.querySelector(".card2").addEventListener("click", function () {
        showBedsContainer();
    });
    document.querySelector(".card3").addEventListener("click", function () {
        showPatientsContainer();
    });
    document.querySelector(".card4").addEventListener("click", showCard4Container);
    document.querySelector(".card5").addEventListener("click", showInventoryContainer);
    document.querySelector(".card6").addEventListener("click", showMedicinesContainer);

    
    document.querySelector(".b2").addEventListener("click", function (event) {
        event.preventDefault();
        showDoctorsContainer();
        
    });
    document.querySelector(".b3").addEventListener("click", function (event) {
        event.preventDefault();
        showBedsContainer();        
    });
    document.querySelector(".b4").addEventListener("click", function (event) {
        event.preventDefault();
        showCard4Container();        
    });
    document.querySelector(".b5").addEventListener("click", function (event) {
        event.preventDefault();
        showPatientsContainer();        
    });
    const backButtons = document.querySelectorAll(".back-button");
    backButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            resetToInitialState();
        });
    });
    document.querySelectorAll(".homeToggle, .b1").forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            resetToInitialState();
        });
    });
});
