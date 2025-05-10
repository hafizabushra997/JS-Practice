let todoList=[]

// Add task in todo list
function addTask(task) {
    
    if (todoList.includes(task)) {
                console.log('Already defined');
                
            }
            else{
        
                todoList.push(task)
            }    
}


// List Tasks from Todo List
function listTasks(){
    console.log('TODO LIST');
    
    todoList.forEach((task,index)=>{
        console.log(`${index+1}. ${task}`);
        
    })
}
// Add tasks (outside the listTasks function)
addTask('Practice JS');
addTask('Drink Water');
addTask('Drink Water'); // Duplicate - won't be added
addTask('Washing');

// Now list them
listTasks();

function deleteTask(index) {
    let actualIndex=index-1
    if (actualIndex >= 0 && actualIndex < todoList.length){
        console.log(`Deleted Task:- ${index}. ${todoList[actualIndex]}`);
        todoList.splice(actualIndex,1)
        listTasks();

        
    }
    else{
        console.log(`${index} Task not exist`);

    }   
}
deleteTask(2)