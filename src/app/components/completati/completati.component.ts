import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interface/interface';
import { TodosService } from 'src/app/service/todos.service';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent implements OnInit {
  list : Todo [] = []
  constructor(
  private toDoService : TodosService
  ) {}

  ngOnInit(): void {
    this.list = this.toDoService.toDoList
  }

}
