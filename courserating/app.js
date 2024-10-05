const courseNameInput = document.querySelector('#input-course-name');
const courseRatingInput = document.querySelector('#input-course-rating');
const addBtn = document.querySelector('#btn-add');
const courseList = document.querySelector('#course-list');

addBtn.addEventListener('click', () => {
    const enteredCourseName = courseNameInput.value;
    const enteredCourseRating = courseRatingInput.value;

    if (enteredCourseName.trim().length <= 0 ||
        enteredCourseRating.trim().length <= 0 ||
        enteredCourseRating < 1 ||
        enteredCourseRating > 5
    ) {
        return;

    }
    const newItem = document.createElement('ion-item');
    newItem.innerHTML = `<strong>${enteredCourseName}:&nbsp </strong> ${enteredCourseRating}/5`;

    courseList.appendChild(newItem)
});