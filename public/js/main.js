const deleteBtn = document.querySelectorAll(".del");
// const todoItem = document.querySelectorAll("span.not");
// const todoComplete = document.querySelectorAll("span.completed");
const updateStatus = document.querySelectorAll(".statusDropdown");

Array.from(deleteBtn).forEach((el) => {
  el.addEventListener("click", deleteTodo);
});

// Array.from(todoItem).forEach((el) => {
//   el.addEventListener("click", markComplete);
// });
// 
// Array.from(todoComplete).forEach((el) => {
//   el.addEventListener("click", markIncomplete);
// });

Array.from(updateStatus).forEach((el) => {
  el.addEventListener("change", todoStatus);
});

async function deleteTodo() {
  const todoId = this.parentNode.dataset.id;
  try {
    const response = await fetch("todos/deleteTodo", {
      method: "delete",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        todoIdFromJSFile: todoId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

// async function markComplete() {
//   const todoId = this.parentNode.dataset.id;
//   console.log('todoId:',todoId);
// 
//   try {
//     const response = await fetch("todos/markComplete", {
//       method: "put",
//       headers: { "Content-type": "application/json" },
//       body: JSON.stringify({
//         todoIdFromJSFile: todoId,
//       }),
//     });
//     const data = await response.json();
//     console.log(data);
//     location.reload();
//   } catch (err) {
//     console.log(err);
//   }
// }
// 
// async function markIncomplete() {
//   const todoId = this.parentNode.dataset.id;
//   try {
//     const response = await fetch("todos/markIncomplete", {
//       method: "put",
//       headers: { "Content-type": "application/json" },
//       body: JSON.stringify({
//         todoIdFromJSFile: todoId,
//       }),
//     });
//     const data = await response.json();
//     console.log(data);
//     location.reload();
//   } catch (err) {
//     console.log(err);
//   }
// }

/*
<img class="spaceship cruiserX3" src="shipX3.png"
  data-ship-id="324" data-weapons="laserI laserII" data-shields="72%"
  data-x="414354" data-y="85160" data-z="31940"
  onclick="spaceships[this.dataset.shipId].blasted()">
*/

async function todoStatus() {
  const todoId = this.parentNode.dataset.id;
  const statusVal = this.value;
  console.log("todoId:", todoId, statusVal);
  try {
    const response = await fetch("todos/updateStatus", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        todoIdFromJSFile: todoId,
        status: statusVal,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}
