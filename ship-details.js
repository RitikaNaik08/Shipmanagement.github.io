document.addEventListener("DOMContentLoaded", function () {
    const shipDetailsForm = document.getElementById("ship-details-form");

    shipDetailsForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const shipName = document.getElementById("shipName").value;
        const product = document.getElementById("product").value;
        const arrivalTime = document.getElementById("arrivalTime").value;
        const departureTime = document.getElementById("departureTime").value;
        const sourceLocation = document.getElementById("sourceLocation").value;
        const destinationLocation = document.getElementById("destinationLocation").value;
        const agent = document.getElementById("agent").value;

        // You can handle the submission of ship details here.
        // For now, let's just display the entered details in an alert.
        const details = `Ship Name: ${shipName}\nProduct: ${product}\nArrival Time: ${arrivalTime}\nDeparture Time: ${departureTime}\nSource Location: ${sourceLocation}\nDestination Location: ${destinationLocation}\nAgent: ${agent}`;

        alert("Ship details submitted:\n\n" + details);
    });
});
