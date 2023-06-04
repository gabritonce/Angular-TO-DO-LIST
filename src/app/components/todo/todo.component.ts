import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Todo } from 'src/app/interface/interface';
import { TodosService } from 'src/app/service/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
taskForm : UntypedFormGroup
list : Todo [] = []
  constructor(
private toDoService : TodosService
  ) {
    this.taskForm = new UntypedFormGroup({
      task : new UntypedFormControl('')
    })
   }

  ngOnInit(): void {
    this.list = this.toDoService.toDoList
  }
  onAddTask() : void {
    const taskValue : string = this.taskForm.get('task')?.value
    console.log(taskValue)
    if(taskValue != ''){
      setTimeout(() => {
        const toDoObj : Todo = {
          id: this.list.length,
          completed : false,
          tittle: taskValue
        }
        this.toDoService.toDoList.unshift(toDoObj)
      },2000)
    }
  }

  onCompletedTask(toDoCompleted : Todo) : void {
    this.toDoService.onChangeCompleteValue(toDoCompleted)

  }


}

