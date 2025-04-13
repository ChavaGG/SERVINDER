// Sample data of service providers
const providers = [
    { name: "Juan el Jardinero", service: "Jardinería", location: "Ciudad de México", price: "$200" },
    { name: "Luis Fontanero", service: "Fontanería", location: "Guadalajara", price: "$300" },
    { name: "Ana Electricista", service: "Electricidad", location: "Monterrey", price: "$250" },
    { name: "Carlos el Jardinero", service: "Jardinería", location: "Puebla", price: "$220" }
];

// Function to search services
function searchService() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const filteredProviders = providers.filter(provider => provider.service.toLowerCase().includes(query));

    displayResults(filteredProviders);
}

// Function to display the results
function displayResults(filteredProviders) {
    const resultContainer = document.getElementById('service-list');
    resultContainer.innerHTML = ""; // Clear previous results

    if (filteredProviders.length === 0) {
        resultContainer.innerHTML = "<p>No se encontraron resultados.</p>";
    } else {
        filteredProviders.forEach(provider => {
            const serviceCard = document.createElement('div');
            serviceCard.classList.add('service-card');
            serviceCard.innerHTML = `
                <h3>${provider.name}</h3>
                <p>Servicio: ${provider.service}</p>
                <p>Ubicación: ${provider.location}</p>
                <p>Precio: ${provider.price}</p>
            `;
            resultContainer.appendChild(serviceCard);
        });
    }
}
