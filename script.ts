document.addEventListener("DOMContentLoaded", ()=> {
const togglebutton = document.getElementById('toggle skills') as HTMLButtonElement
const skills = document.getElementById ('skills') as HTMLElement

togglebutton.addEventListener ('click',() =>{
    if(skills.style.display ==='none'){
        skills.style.display = 'block'
        togglebutton.innerText = "HIDE-SKILLS"
} else  { 
     skills.style.display = 'none' 
     togglebutton.innerText = "SHOW-SKILLS"
}
})
});
