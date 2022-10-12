const submitBtn = document.querySelector('.submit-btn');

const userName = document.querySelector('#name');
const userFeedbackDate = document.querySelector('#date');
const userFeedbackTitle = document.querySelector('#feedback');
const userFeedbackMsg = document.querySelector('#msg');
const userFeedbackCategory = document.querySelector('#category-checkbox');


submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (userName.value && userFeedbackDate.value && userFeedbackTitle.value && userFeedbackMsg.value) {
        const output = `
            user name is ${userName.value}.
            user feedback date is ${userFeedbackDate.value}.
            user feedback title is ${userFeedbackTitle.value}.
            user feedback massege is ${userFeedbackMsg.value}.
            user feedback category is ${userFeedbackCategory.checked}.
        `;
        console.log(output);
    } else {
        console.log('please fill all the fields.')
    }
})