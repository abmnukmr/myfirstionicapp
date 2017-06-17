import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {SecondPage} from "../second/second";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username:string;
  password:string;
  addcomment:String;
   student_name:string;
   student_batch:string;
   student_year:string;


  comment:any=["xyz", "ghj", "fgr"];
  students:any=[{"name":"xyz","batch":"2013", "year":"second"},{"name":"abc","batch":"2015", "year":"third"},
                 {"name":"lmn","batch":"2016","year":"final"}]

  constructor(public navCtrl: NavController) {

  }


  gotosecondpage()
  {
  this.navCtrl.setRoot(SecondPage);
  }


  addcomments(){
    this.comment.push(this.addcomment);
    this.addcomment="";
  }

  deleteitem(i)
  {
   this.comment.splice(i,1);
  }


  login(){
    if(this.username=="abmnu" && this.password=="1234567"){
      this.navCtrl.push(SecondPage,{"user":this.username});
    }


  }

  addstudent(){
    this.students.push({"name":this.student_name,"batch":this.student_batch,"year":this.student_year});
    this.student_name="";
    this.student_year="";
    this.student_batch="";
  }

}
