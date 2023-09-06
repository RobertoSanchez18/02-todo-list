import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

mostrarMensaje: boolean = false;

terminoBusqueda: string = '';

filteredTasks: any[] = [];

editableId: number | null = null;

newTask: string = '';

  tasks: any[] = [
    {
      title: 'Crear la lista de tareas',
      completed: false,
    },
    {
      title: 'Realizar la estructura html',
      completed: false,
    },
    {
      title: 'Desplegar el proyecto en la web',
      completed: false,
    }
  ];

  addTask(){
    const Task = {
      title: this.newTask,
      completed: false,
    }
    this.tasks.push(Task);
    this.newTask = '';
  }

  updateTask(task: any, title: string) {
    const index = this.tasks.indexOf(task);
    const updateTask = {
      title,
      completed: task.completed
    }
    this.tasks[index] = { ...task, ...updateTask };
  }

  deleteTask(task: any) {
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index,1);
  }

  startEdit(id: number): void {
    this.editableId = id;
  }

  stopEdit(task: any, title: string): void {
    this.editableId = null;
    this.updateTask(task, title)
  }

  ngOnInit(): void {
    this.filteredTasks = this.tasks;
  }

  filterTasks(termino: string) {
    this.filteredTasks = this.tasks.filter(task =>
      task.title.toLowerCase().includes(termino.toLowerCase()));

      this.mostrarMensaje = this.filteredTasks.length === 0;

  }


}
