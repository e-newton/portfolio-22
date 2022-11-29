const radioButtons = document.querySelectorAll('#jobs input[type="radio"]');
let currentlySelectedJob;
radioButtons.forEach(radio => {
    const value = radio.value;
    const jobDesc = document.querySelector(`#${value}-desc`);
    if (radio.checked) {
        jobDesc.classList.add('visible');
    }
    radio.addEventListener('change', () => {
        if (radio.checked) {
            if (currentlySelectedJob) {
                currentlySelectedJob.classList.remove('visible');
            }
            currentlySelectedJob = jobDesc;
            jobDesc.classList.add('visible');
        } else {
            jobDesc.classList.remove('visible');
        }
    })
})