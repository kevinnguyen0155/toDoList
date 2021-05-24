export class TaskList {
  constructor() {
    this.toDoList = []
    this.doneList = []
  }
  addToDoTask(task) {
    task.className = "toDo-task"
    this.toDoList.unshift(task)
    this.showList(this.toDoList)
  }

  moveDoneTask(event) {
    let status = event.currentTarget.getAttribute("data-status")
    let index = event.currentTarget.getAttribute("data-index")
    if (status === "toDo") {
      let task = this.toDoList.slice(index, index + 1)[0]
      this.doneList.unshift(task)
      this.toDoList.splice(index, 1)
      this.showList(this.toDoList)
      this.showList(this.doneList)
    } else if (status === "done") {
      let task = this.doneList.slice(index, index + 1)[0]
      task.className = "toDo-task"
      this.toDoList.unshift(task)
      this.doneList.splice(index, 1)
      this.showList(this.toDoList)
      this.showList(this.doneList)
    }
  }

  deleteTask(event) {
    let status = event.currentTarget.getAttribute("data-status")
    let index = event.currentTarget.getAttribute("data-index")
    if (status === "toDo") {
      this.toDoList.splice(index, 1)
      this.showList(this.toDoList)
    } else if (status === "done") {
      this.doneList.splice(index, 1)
      this.showList(this.doneList)
    }
  }

  showList(list) {
    let listContent
    let status
    if (list === this.toDoList) {
      listContent = document.getElementById("toDo-list")
      status = "toDo"
    } else if (list === this.doneList) {
      listContent = document.getElementById("done-list")
      status = "done"
    }

    listContent.innerHTML = ""
    list.forEach(function (task, index) {
      listContent.innerHTML += `<div class="${task.className}">
      <span class="toDo-text">${task.content}</span>
      <i class="fa fa-check-circle" data-index=${index} data-status=${status} onclick="moveDoneTask(event)"></i>
      <i class="fa fa-trash-alt" data-index=${index} data-status=${status} onclick="deleteTask(event)"></i>
    </div>`
    })
  }

  sortTask(sortType) {
    if (sortType === "asc") {
      this.toDoList.sort(function (task, nextTask) {
        return task.content
          .toLowerCase()
          .localeCompare(nextTask.content.toLowerCase())
      })
      this.showList(this.toDoList)
    } else if (sortType === "des") {
      this.toDoList.sort(function (task, nextTask) {
        return nextTask.content
          .toLowerCase()
          .localeCompare(task.content.toLowerCase())
      })
      this.showList(this.toDoList)
    }
  }
}
