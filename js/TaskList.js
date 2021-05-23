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
  // addDoneTask(id) {
  //   for (let task of this.toDoList) {
  //     if (task.id === id) {
  //       task.className = "done-task"
  //       this.doneList.push(task)
  //       let index = this.toDoList.indexOf(task)
  //       this.toDoList.splice(index, 1)
  //       this.showList(this.toDoList)
  //       this.showList(this.doneList)
  //     }
  //   }
  // }

  // removeDoneTask(id) {
  //   for (let task of this.doneList) {
  //     if (task.id === id) {
  //       task.className = "toDo-task"
  //       this.toDoList.push(task)
  //       let index = this.doneList.indexOf(task)
  //       this.doneList.splice(index, 1)
  //       this.showList(this.doneList)
  //       this.showList(this.toDoList)
  //     }
  //   }
  // }

  // deleteToDoTask(id) {
  //   let taskArray = [...this.toDoList, ...this.doneList]
  //   let taskDelete
  //   for (let task of taskArray) {
  //     if (task.id === id) {
  //       taskDelete = task
  //       break
  //     }
  //   }

  //   if (taskDelete.className === "toDo-task") {
  //     let index = this.toDoList.indexOf(taskDelete)
  //     this.toDoList.splice(index, 1)
  //     this.showList(this.toDoList)
  //     if (this.toDoList.length === 0) {
  //       document.getElementById("text-noToDo").style.display = "block"
  //     }
  //   } else if (taskDelete.className === "done-task") {
  //     let index = this.doneList.indexOf(taskDelete)
  //     this.doneList.splice(index, 1)
  //     this.showList(this.doneList)
  //     if (this.doneList.length === 0) {
  //       document.getElementById("text-noDone").style.display = "block"
  //     }
  //   }
  // }

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

  showList(list) {
    let listContent

    if (list === this.toDoList) {
      listContent = document.getElementById("toDo-list")
    } else {
      listContent = document.getElementById("done-list")
    }

    listContent.innerHTML = ""

    list.forEach(function (task, index) {
      listContent.innerHTML += `<div class="${task.className}">
      <span class="toDo-text">${task.content}</span>
      <i class="fa fa-check-circle" data-index="${index}"></i>
      <i class="fa fa-trash-alt" data-index="${index}"></i>
    </div>`
    })
  }

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
