
let addTaskButtons = [...document.getElementsByClassName('add-task')]

let todaySection = document.getElementById('TodaySection')


addTaskButtons.forEach(button => {
    button.addEventListener('click', function(){
        let textInput = document.createElement('input')
        textInput.setAttribute('type', 'text')
        let confirmButton = document.createElement('button')
        confirmButton.innerHTML = 'Create Task'
        button.insertAdjacentElement('afterend', textInput)
        textInput.insertAdjacentElement('afterend', confirmButton)
        
        confirmButton.onclick = function(){
            createTask(textInput.value)
            textInput.parentElement.removeChild(textInput)
            confirmButton.parentElement.removeChild(confirmButton)

        }
    })
})


function createTask(taskName){
    let task = document.createElement('p')
    task.innerHTML = taskName
    todaySection.appendChild(task)
}
alert("Listo rey")