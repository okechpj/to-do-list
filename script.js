// Function to add a new task to the to-do list
function addTask() {
    // Get the input elements containing the new task, date, and time
    const newTaskInput = document.getElementById('newTask');
    const taskDateInput = document.getElementById('taskDate');
    const taskTimeInput = document.getElementById('taskTime');
    
    // Get the values of the input fields
    const taskName = newTaskInput.value.trim();
    const taskDate = taskDateInput.value;
    const taskTime = taskTimeInput.value;
    
    // Check if the input is not empty
    if (taskName !== '') {
      // Create a new list item
      const listItem = document.createElement('li');
      
      // Create a checkbox for the task
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'task-checkbox';
      
      // Create a label for the task
      const label = document.createElement('label');
      label.className = 'task-label';
      label.textContent = taskName + ' - ' + taskDate + ' ' + taskTime;
      
      // Add click event listener to the label for editing
      label.addEventListener('click', function() {
        const newText = prompt('Edit task:', label.textContent);
        if (newText !== null) {
          label.textContent = newText;
        }
      });
      
      // Create a delete button for the task
      const deleteButton = document.createElement('button');
      deleteButton.className = 'delete-button';
      deleteButton.textContent = 'Delete';
      
      // Add click event listener to the delete button
      deleteButton.addEventListener('click', function() {
        listItem.remove(); // Remove the task list item when the delete button is clicked
      });
      
      // Append checkbox, label, and delete button to the list item
      listItem.appendChild(checkbox);
      listItem.appendChild(label);
      listItem.appendChild(deleteButton);
      
      // Get the task list ul element
      const taskList = document.getElementById('taskList');
      
      // Append the new list item to the task list
      taskList.appendChild(listItem);
      
      // Clear the input fields after adding the task
      newTaskInput.value = '';
      taskDateInput.value = '';
      taskTimeInput.value = '';
    } else {
      // Display an alert if the input is empty
      alert('Please enter a task name.');
    }
  }
  
  // Function to move completed task to the completed task list
  function moveCompletedTask() {
    // Get all task checkboxes
    const checkboxes = document.querySelectorAll('.task-checkbox');
    
    // Loop through each checkbox
    checkboxes.forEach(function(checkbox) {
      // Add change event listener to each checkbox
      checkbox.addEventListener('change', function() {
        // Get the parent task item
        const taskItem = this.parentElement;
        
        // Get the completed task list ul element
        const completedTaskList = document.getElementById('completedTaskList');
        
        if (this.checked) {
          // Move the task item to the completed task list
          completedTaskList.appendChild(taskItem);
          
          // Add a class to style completed task differently, if needed
          taskItem.classList.add('completed-task');
        } else {
          // Move the task item back to the main task list
          const taskList = document.getElementById('taskList');
          taskList.appendChild(taskItem);
          
          // Remove the completed task styling class
          taskItem.classList.remove('completed-task');
        }
      });
    });
  }
  
  // Get the button element for adding a task
  const addButton = document.getElementById('addButton');
  
  // Get the button element for moving completed tasks
  const completeButton = document.getElementById('completeButton');
  
  // Add click event listener to the buttons
  addButton.addEventListener('click', addTask);
  completeButton.addEventListener('click', moveCompletedTask);
