import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public ToDoList = [{status : false,item : 'Study'}];
  public ToDoInput: any;

  constructor() { }

  ngOnInit() {
    
  }

  ToDoAdd(val){
    this.ToDoList.push({status : false, item : val});
    console.log(val);
  }

  ToDoDelete(){
    var temp;
    temp = this.ToDoList;
    this.ToDoList = [];
    temp.forEach(x => {
      if(!x.status) this.ToDoList.push(x);
    });
    
  }

}
