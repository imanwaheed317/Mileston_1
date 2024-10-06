document.addEventListener("DOMContentLoaded", function () {
    var togglebutton = document.getElementById('toggle-skills');
    var skills = document.getElementById('skills');
    togglebutton.addEventListener('click', function () {
        if (skills.style.display === 'none') {
            skills.style.display = 'block';
            togglebutton.innerText = "hide-skills";
        }
        else {
            skills.style.display = 'none';
            togglebutton.innerText = "shows-skills";
        }
    });
});
