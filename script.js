const input = document.getElementById("searchInput");
const resultsContainer = document.getElementById("results");
const message = document.getElementById("message");

input.addEventListener("input", () => {
  const query = input.value.trim().toLowerCase();
  resultsContainer.innerHTML = "";

  if (!query) {
    message.textContent = "Please enter the medicine name";
    return;
  }

  message.textContent = "";

  const filtered = medicines.filter((med) =>
    med.name.toLowerCase().startsWith(query)
  );

  if (filtered.length === 0) {
    message.textContent = "No medicines found.";
    return;
  }

  filtered.forEach((med) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.onclick = () => window.open(med.link, "_blank");

    card.innerHTML = `
      <strong>Name:</strong> ${med.name}<br>
      <strong>Price:</strong> ${med.price}<br>
      <strong>Manufacturer:</strong> ${med.manufacturer}<br>
      <img src="${med.image}" alt="${med.name}" />
    `;
    resultsContainer.appendChild(card);
  });
});

function findMedicine() {
  if (!input.value.trim()) {
    message.textContent = "Please enter the medicine name";
  }
}
