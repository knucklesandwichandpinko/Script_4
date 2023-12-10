document.addEventListener("DOMContentLoaded", async function () {
    // Dynamically add student ID and name to the page
    const studentInfoContainer = document.getElementById("studentInfo");
    studentInfoContainer.innerText = "Student ID: 200383347, Name: Eldhose Ben";

    // Fetch data from the API
    const url = 'https://thought-of-the-day.p.rapidapi.com/thought';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f00f50cd1fmsh3faff63fd500f07p15384fjsnc92235939b85',
            'X-RapidAPI-Host': 'thought-of-the-day.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        displayThought(data);
    } catch (error) {
        console.error(error);
        document.getElementById("apiDataContainer").innerText = "Error fetching thought";
    }

    // Display the retrieved thought on the page
    function displayThought(data) {
        const apiDataContainer = document.getElementById("apiDataContainer");

        // Clear the initial "Fetching thought..." message
        apiDataContainer.innerHTML = "";

        // Customize this part based on the structure of the API response
        const thought = data.data;

        const displayText = `
            <p>${thought}</p>
        `;

        apiDataContainer.innerHTML = displayText;
    }
});
