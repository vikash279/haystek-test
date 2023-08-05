    let jsonData;
    let currentIndex = 0;
    const nextButton = document.getElementById("nextButton");
    const personNumberElement = document.getElementById("personNumber");
    const personNameElement = document.getElementById("personName");
    const personLocationElement = document.getElementById("personLocation");

    nextButton.addEventListener("click", function () {
      currentIndex++;
      updateDisplay(currentIndex);
    });

    fetch("./json/data.json")
      .then((response) => response.json())
      .then((data) => {
        jsonData = data;
        updateDisplay(currentIndex);
      })
    .catch((error) => console.error(error));

    function updateDisplay(index) {
      const person = jsonData[index];
      if (person) {
        personNumberElement.textContent = index + 1;
        personNameElement.textContent = `Name: ${person.name}`;
        personLocationElement.textContent = `Location: ${person.location}`;
      } else {
        personNumberElement.textContent = "";
        personNameElement.textContent = "No more people. Reload the page...";
        personLocationElement.textContent = "";
        nextButton.disabled = true;
        alert("No more people. Reload the page...");
        // location.reload();
      }
    }