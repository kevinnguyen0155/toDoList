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

  // sortTaskAsc() {
  //   if (this.toDoList.length > 1) {
  //     for (let i = 0; i < this.toDoList.length - 1; i++) {
  //       for (let j = i + 1; j < this.toDoList.length; j++) {
  //         if (
  //           this.toDoList[j].content.localeCompare(this.toDoList[i].content) ===
  //           -1
  //         ) {
  //           let temp = this.toDoList[i]
  //           this.toDoList[i] = this.toDoList[j]
  //           this.toDoList[j] = temp
  //         }
  //       }
  //     }
  //   }
  //   this.showList(this.toDoList)
  // }

  // sortTaskDes() {
  //   if (this.toDoList.length > 1) {
  //     for (let i = 0; i < this.toDoList.length - 1; i++) {
  //       for (let j = i + 1; j < this.toDoList.length; j++) {
  //         if (
  //           this.toDoList[j].content.localeCompare(this.toDoList[i].content) ===
  //           1
  //         ) {
  //           let temp = this.toDoList[i]
  //           this.toDoList[i] = this.toDoList[j]
  //           this.toDoList[j] = temp
  //         }
  //       }
  //     }
  //   }
  //   this.showList(this.toDoList)
  // }

  // setCheckButton(id) {
  //   let btnArray = document.getElementsByName(id)
  //   for (let i = 0; i < btnArray.length; i++) {
  //     let btn = btnArray[i]
  //     if (btn.classList.contains("fa-check-circle")) {
  //       btn.onclick = function () {
  //         if (btn.classList.contains("done")) {
  //           this.removeDoneTask(+btn.getAttribute("name"))
  //           if (this.doneList.length === 0) {
  //             document.getElementById("text-noDone").style.display = "block"
  //           }
  //         } else {
  //           this.addDoneTask(+btn.getAttribute("name"))
  //           if (this.toDoList.length === 0) {
  //             document.getElementById("text-noToDo").style.display = "block"
  //           }
  //         }
  //       }.bind(this)
  //     } else if (btn.classList.contains("fa-trash-alt")) {
  //       btn.onclick = function () {
  //         this.deleteToDoTask(+btn.getAttribute("name"))
  //       }.bind(this)
  //     }
  //   }
  // }
}
