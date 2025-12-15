const scannedData = [];

function addData() {
    const input = document.getElementById("scannerInput");
    const message = document.getElementById("message");
    const list = document.getElementById("dataList");

    const value = input.value.trim();

    if (value === "") {
        message.textContent = "Input cannot be empty.";
        message.style.color = "red";
        return;
    }

    if (scannedData.includes(value)) {
        message.textContent = "Duplicate data detected!";
        message.style.color = "red";
    } else {
        scannedData.push(value);

        const li = document.createElement("li");
        li.textContent = value;
        list.appendChild(li);

        message.textContent = "Data added successfully.";
        message.style.color = "green";
    }

    input.value = "";

    document.getElementById("scannerInput").focus();

document.getElementById("scannerInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addData();
    }
});

}
