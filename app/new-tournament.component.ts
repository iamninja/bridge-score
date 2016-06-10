import { Component } from '@angular/core';

import { Tournament } from './tournament';
import { TournamentService } from './tournament.service';

@Component({
  selector: 'new-tournament',
  templateUrl: 'app/new-tournament.component.html',
  styleUrls: [
    'app/new-tournament.component.css'
  ],
  providers: [ TournamentService ]
})
export class NewTournamentComponent {
  aNewTournament = new Tournament();
  constructor(private tournamentService: TournamentService) { }

  saveTournament() {
    this.aNewTournament.id = this.aNewTournament.place + this.aNewTournament.referee;
    this.tournamentService.saveTournament(this.aNewTournament);
  }
}
