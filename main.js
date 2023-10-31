

const accordions = document.querySelectorAll('.accordian');

accordions.forEach(accordion => {
    const icon = accordion.querySelector('.arrowdown');
    const answers = accordion.querySelector('.answers');
    const questions = accordion.querySelector('.questions')

    accordion.addEventListener('click', () => {
        accordions.forEach(acc => {
            const otherIcon = acc.querySelector('.arrowdown');
            const otherAnswers = acc.querySelector('.answers');
            const otherquestions = acc.querySelector('.questions')
            if (acc !== accordion) {
                otherIcon.classList.remove('active');
                otherAnswers.classList.remove('active');
                otherquestions.classList.remove('active')

            }
        });

        icon.classList.toggle('active');
        answers.classList.toggle('active');
        questions.classList.toggle('active')

    });
});
