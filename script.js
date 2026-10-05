document.getElementById('inquiryForm')?.addEventListener('submit', function (event) {
  event.preventDefault();

  const form = event.currentTarget;
  const button = form.querySelector('button[type="submit"]');
  const formData = new FormData(form);

  button.disabled = true;
  button.textContent = 'Sent';

  const values = Object.fromEntries(formData.entries());
  console.log('New inquiry:', values);

  alert('Thank you. Your inquiry has been received and we will respond within 24–48 hours.');

  form.reset();
  button.disabled = false;
  button.textContent = 'Send inquiry';
});

const contractForm = document.getElementById('contractForm');
if (contractForm) {
  contractForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const button = contractForm.querySelector('button[type="submit"]');
    button.disabled = true;
    button.textContent = 'Request sent';

    alert('Thank you. We will contact you to discuss the right contract structure for your opportunity.');
    contractForm.reset();
    button.disabled = false;
    button.textContent = 'Request contract discussion';
  });
}
