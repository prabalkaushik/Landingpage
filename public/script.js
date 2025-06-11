const form = document.getElementById('contact-form');
const responseDiv = document.getElementById('form-response');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        message: form.message.value,
    };

    try {
        const res = await fetch('/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (res.ok) {
            const result = await res.json();
            responseDiv.textContent = result.message;
            responseDiv.classList.remove('hidden');
            form.reset();
        } else {
            responseDiv.textContent = 'Failed to submit form.';
            responseDiv.classList.remove('hidden');
        }
    } catch (err) {
        responseDiv.textContent = 'Error submitting form.';
        responseDiv.classList.remove('hidden');
    }
});
