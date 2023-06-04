import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { CompletatiComponent } from './components/completati/completati.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  {
    path: '',
    component: TodoComponent
  },
  {
    path: 'completati',
    component: CompletatiComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CompletatiComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
