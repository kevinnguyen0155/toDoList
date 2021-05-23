//Import class Task và TaskList
import { Task } from "./Task.js"
import { TaskList } from "./TaskList.js"

//Tạo hàm DOM id
const getEle = (id) => {
  return document.getElementById(id)
}

//Set ngày
const setDate = () => {
  let date = new Date()
  let day = date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  getEle("date").innerHTML = day
}

setDate()

//Tạo danh sách task
const taskList = new TaskList()

//Thêm task
const addToDoTask = () => {
  let input = getEle("input-add").value
  if (input.trim() === "") {
    return
  }
  let task = new Task(input)

  taskList.addToDoTask(task)
  getEle("input-add").value = ""
  // console.log(taskList.toDoList)
}

//Gán hàm add task cho nút add
getEle("btn-add").onclick = () => {
  addToDoTask()
}

const moveDoneTask = (event) => {
  taskList.moveDoneTask(event)
}

window.moveDoneTask = moveDoneTask

// //Hàm expand filter button
// const expandFilter = () => {
//   getEle("btn-filter").style.display = "none"
//   getEle("btn-close").style.display = "block"
//   getEle("btn-filter--expand").style.transform = "scale(1)"
// }

// //Gán hàm expand cho nút filter
// getEle("btn-filter").onclick = expandFilter

// //Hàm close filter button
// const closeFilter = () => {
//   getEle("btn-filter").style.display = "block"
//   getEle("btn-close").style.display = "none"
//   getEle("btn-filter--expand").style.transform = "scale(0)"
// }

// //Gán hàm close cho nút close
// getEle("btn-close").onclick = closeFilter

// //Gán hàm sortAsc cho nút AZ
// getEle("btn-sortUp").onclick = () => {
//   taskList.sortTaskDes()
// }

// getEle("btn-sortDown").onclick = () => {
//   taskList.sortTaskAsc()
// }
