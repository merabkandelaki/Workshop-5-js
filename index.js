// open and close burger menu
let burger = document.querySelector(".burger");
let burgerOpen = document.querySelector(".open_burger");
let burgerClose = document.querySelector(".close_burger");

let toggleBurgerMenu = () => {
  burger.classList.toggle("active");
};

burgerOpen.addEventListener("click", toggleBurgerMenu);
burgerClose.addEventListener("click", toggleBurgerMenu);

// to do list
let push = document.querySelector(".push");
let newTaskInput = document.querySelector(".new_task input");
let tasks = document.querySelector(".tasks");

push.addEventListener("click", () => {
  if (newTaskInput.value.length == "") {
    alert("შეიყვანეთ დავალება...");
  } else {
    tasks.innerHTML += `
       <div class="task"
        <div class="taskname">
        ${newTaskInput.value}
        <button class="delete">
        <i class="far fa-trash-alt"></i>
        </button>
        </div>           
        </div>
        `;
    newTaskInput.value = "";
    let currentTasks = document.querySelectorAll(".delete");
    for (let i = 0; i < currentTasks.length; i++) {
      currentTasks[i].addEventListener("click", (event) => {
        event.currentTarget.parentNode.remove()
      })
    }
  }
});

