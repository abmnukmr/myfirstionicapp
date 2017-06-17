import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

/*
  Generated class for the Second page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-second',
  templateUrl: 'second.html'
})
export class SecondPage {
username:string;
  constructor(public navCtrl: NavController,public navPrams:NavParams) {}

  ionViewDidLoad() {

    this.username=this.navPrams.get("user")
    console.log('Hello SecondPage Page');
  };

}
