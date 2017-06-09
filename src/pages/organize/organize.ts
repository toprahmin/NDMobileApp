import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OrganizePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'organize-page',
  templateUrl: 'organize.html',
})
export class OrganizePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrganizePage');
  }

}

// export class Campaign {
//       private title:string;
//     private date:string;
//     private location:string;
//     private description:string;

//     constructor(_title, _date, _location, _description) {
//         this.title = _title;
//         this.date = _date;
//         this.location = _location;
//         this.description = _description;
//     }

//     getTitle = function() {
//         return this.title;
//     }

//     getDate = function() {
//         return this.date;
//     }

//     getDescription = function() {
//         return this.description;
//     }

//     getLocation = function() {
//         return this.location;
//     }
// }
