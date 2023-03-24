document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // createTaskForm.onsubmit = ( ) => addNewTask
  const createTaskForm = document.getElementById( 
  'create-task-form' )
  createTaskForm.addEventListener( 'submit', addNewTask )
  
});

function addNewTask ( event ) {
  event.preventDefault()
  let taskForm = event.target
  let priority = document.getElementById( 'task-priority' ).value
  
  let inputValue = taskForm['new-task-description'].value
  const ulTasks = document.getElementById( 'tasks' )

  if ( inputValue.length > 3 ) {
  
    
    const liTask = document.createElement( 'li' )
    ulTasks.appendChild( liTask )
    
    liTask.textContent = inputValue
    liTask.style.color = priority
    if ( priority === 'red' )
      liTask.dataset.priority = 3
    else if ( priority === 'yellow' )
      liTask.dataset.priority = 2
    else if ( priority === 'green' )
      liTask.dataset.priority = 1
    else liTask.dataset.priority = 0

    
    taskForm.reset()

    let deleteBtn = document.createElement( 'button' )
    liTask.appendChild( deleteBtn )
    deleteBtn.textContent = ' ❌ '

    deleteBtn.onclick = ( ) => liTask.remove()
    
  } else {
    alert('Task needs more characters to be saved.')
  }
    sortTasksByPriority( ulTasks )
}


const sortTasksByPriority = ( ulTasks ) => {
  let liTags = [...ulTasks.querySelectorAll( 'li' )]
  liTags.sort( ( tag1, tag2 ) => tag2.dataset.priority - tag1.dataset.priority )
  
  ulTasks.innerHTML = ''

  liTags.forEach( li => ulTasks.appendChild( li ) )
}

// function deleteTask ( li ) {
//   // event.target.parentElement.remove()
//   li.remove()

// }

