import { Component, OnInit } from '@angular/core';
import { WaterService } from '../services/water.service';
import { Contact, BaseEntity } from '../services/models';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.less']
})
export class ContactsComponent implements OnInit {
  contacts:Contact[];
  shows:any;
  faq:BaseEntity[] = [];
  constructor(private ws:WaterService) {
    this.shows={first:true};
  }

  ngOnInit() {
    this.ws.getContacts().subscribe(c => {
      this.contacts = c;
    })
    this.ws.getQuestions(8).subscribe(q => {
      this.faq = q;
    })
  }

  show(s){
    if(this.shows[s]!=undefined){
      this.shows[s]=!this.shows[s];
      return;
    }
    this.shows[s]=true;
  }
  getTel(tel){
    tel = tel.replace(/\D+/g,"");
    return 'tel:+'+tel;
  }
  
}
