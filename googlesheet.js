const scriptURL = 'https://script.google.com/macros/s/AKfycbxEMQ8Nu1flqaI5GDIx3Lil8ElESBf2n9BUKmuMIMKuIGFVbLpXTjJqk91O8T0-SeAsjw/exec'; // paste the Web App URL you got earlier
const form = document.querySelector("form");
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const data = {
        name: document.querySelector('input[name="your-name"]').value,
        name: document.querySelector('input[name="your-surname"]').value,
        email: document.querySelector('input[name="your-email"]').value,
        budget: document.querySelector('input[name="your-budget"]').value,
        description: document.querySelector('textarea[name="your-description"]').value,
    };

    fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((res) => res.json())
        .then((response) => {
            alert("Form submitted successfully!");
            console.log(response);
        })
        .catch((error) => {
            alert("Form submission failed!");
            console.error(error);
        });
});

