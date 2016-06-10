import { Component, OnInit } from '@angular/core';
import { RouteParams }       from '@angular/router-deprecated';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


import { Tournament } from './tournament';
import { TournamentService } from './tournament.service';

@Component({
  selector: 'edit-tournament',
  templateUrl: 'app/edit-tournament.component.html',
  styleUrls: [
    'app/edit-tournament.component.css'
  ],
  providers: [ TournamentService ]
})
export class EditTournamentComponent implements OnInit {
  selectedTournament = {};
  constructor(
    private tournamentService: TournamentService,
    private routeParams: RouteParams,
    private afs: AngularFire) { }

  ngOnInit() {
    let key = this.routeParams.get('key');
    console.log(key);
    // this.tournamentService.getTournamentById(id)
    //   .then(data => console.log(data));
    const queryObservable = this.afs.database.list('/', {
      query: {
        orderByKey: true,
        equalTo: key
      }
    });
    queryObservable.subscribe(items => {
      this.selectedTournament = items[0];
      console.log(items[0]);
    });
  }

  // updateTournament() {
  //   this.tournamentService.updateTournament(this.selectedTournament);
  // }

}
