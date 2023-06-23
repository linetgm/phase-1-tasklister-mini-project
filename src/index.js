document.addEventListener("DOMContentLoaded", () => {
  
  let form = document.getElementById('createTaskForm')
  let list = document.getElementById('list')

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    let task = document.getElementById('newTaskDescription').value
    let li = document.createElement('li')
    li.innerText = task
    let editButton = document.createElement('button')
    editButton.innerText = 'Edit'
editButton.addEventListener('click', (e) => {
      let editTask = prompt('Edit Task')
      li.innerText = editTask
    })
    li.appendChild(editButton)
    let deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'x'
    deleteBtn.addEventListener('click', (e) => {
      e.target.parentElement.remove()
    })
li.appendChild(deleteBtn)


    list.appendChild(li)
    form.reset()
  })
});