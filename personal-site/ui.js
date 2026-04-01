const modal = document.getElementById("modal")
const modalContent = document.getElementById("modal-content")

function openModal(content){
modalContent.innerHTML = content
modal.classList.remove("hidden")
}

function closeModal(){
modal.classList.add("hidden")
}

function showProjects(){
let html = "<h2>Projects</h2>"

projects.forEach(p => {
html += `<p><b>${p.title}</b><br>${p.description}</p>`
})

openModal(html)
}

function showRecipes(){
let html = "<h2>Recipes</h2>"

recipes.forEach(r => {
html += `<p>${r.name} - ${r.difficulty}</p>`
})

openModal(html)
}

function showBugs(){
let html = "<h2>Bug Tracker</h2>"

bugs.forEach(b => {
html += `<p>${b.title} - ${b.status}</p>`
})

openModal(html)
}

function showResume(){
openModal("<h2>Resume</h2><p>Your skills and resume here</p>")
}
