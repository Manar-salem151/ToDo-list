button=document.querySelector("#push")
input=document.querySelector("[type='text']")
tasks=document.querySelector("#tasks")
console.log(button,input,tasks)
button.onclick=function(){
    if(input.value ==""){
        alert("Please Enter a Task")
    }
    else{
        tasks.innerHTML += `
        <div class="task">
        <span id="taskname">
        ${input.value}
        </span>
        <button class="delete"> <i class="fa-solid fa-trash"></i> </button>
        </div>
        `;

        var current_task=document.querySelectorAll(".delete");
        for(i=0;i<current_task.length;i++){
            current_task[i].onclick=function(){
                this.parentNode.remove();
            }
        }

        var task=document.querySelectorAll(".task")
        for(i=0;i<task.length;i++){
            task[i].onclick=function(){
                this.classList.toggle("compeleted")
            }
        }

        document.querySelector("input").value=""
        input.focus()
    }
}
    