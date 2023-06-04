import { Injectable } from '@angular/core';
import { Todo } from '../interface/interface';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
toDoList : Todo[] = []
  constructor() {
  }
onChangeCompleteValue(toDoCompleted : Todo){

  const obj : Todo = {
    id : toDoCompleted.id,
    tittle : toDoCompleted.tittle,
    completed: true

  }
const completeObj = this.toDoList.findIndex(elem => toDoCompleted === elem)
this.toDoList[completeObj] = obj
console.log(this.toDoList)
}
}


