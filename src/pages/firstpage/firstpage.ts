import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

/*
  Generated class for the Firstpage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-firstpage',
  templateUrl: 'firstpage.html'
})
export class FirstpagePage {

  name:string="";
  constructor(public navCtrl: NavController,public navParams: NavParams) {}

  ionViewDidLoad() {
    this.name=this.navParams.get("name");
  //  alert(this.name)
    console.log('Hello FirstpagePage Page');


  }


}
