import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'list-tournaments',
  templateUrl: 'app/list-tournaments.component.html',
  styleUrls: [
    'app/list-tournaments.component.css'
  ]
})
export class ListTournamentsComponent {
  tournes: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.tournes = af.database.list('/');
  }
}
