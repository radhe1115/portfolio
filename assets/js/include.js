// Function to load an external HTML file into a container
function includeHTML(containerId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
        })
        .catch(err => console.error("Error loading file:", filePath, err));
}

// Load header & footer when page is ready
document.addEventListener("DOMContentLoaded", () => {
    includeHTML("header", "header.html");
    includeHTML("footer", "footer.html");
});
