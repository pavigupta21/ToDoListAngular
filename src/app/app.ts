// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [FormsModule, CommonModule],
//   templateUrl: './app.html'
// })
// export class App {
//   task = '';
//   tasks: string[] = [];

//   addTask() {
//     if (this.task.trim() !== '') {
//       this.tasks.push(this.task);
//       this.task = '';
//       // this.tasks[0]="updated from code";
//     }
//   }

//   deleteTask(i: number) {
//     this.tasks.splice(i, 1);
//   }

//   editTask(i: number) {
//     let updated = prompt('Edit task', this.tasks[i]);
//     if (updated) this.tasks[i] = updated;
//   }
// }
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './app.html',
})
export class App {
  newTask='';
  tasks:String[]=[];
  temp:String[]=[];

  add()
  {
    this.tasks.push(this.newTask);
    this.temp.push(this.newTask);
    this.newTask="";
  }

  del(i:number)
  {
    this.tasks.splice(i,1);
  }
}