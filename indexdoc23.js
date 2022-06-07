const btn1 = document.querySelector("#button")
const btn2 = document.querySelector("#button2")
const tasks = document.querySelector("#myFirstInput")

btn1.addEventListener("click", addTask);

function addTask(){
    let newTask = document.querySelector("#List1")
    tasks.innerHTML += `<li>${newTask.value}</li>`

}

function validate(input){
    if(input){
        return true
    }
    return false
}
