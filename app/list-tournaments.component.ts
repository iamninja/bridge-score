import { Component, OnInit } from '@angular/core';
import { TournamentService } from './tournament.service';

@Component({
  selector: 'list-tournaments',
  templateUrl: 'app/list-tournaments.component.html',
  styleUrls: [
    'app/list-tournaments.component.css'
  ],
  providers: [TournamentService]
})
export class ListTournamentsComponent implements OnInit {
  tournes;
  constructor(private tournamentService: TournamentService) { }

  getTournaments() {
    this.tournes = this.tournamentService.getTournaments();
  }

  ngOnInit() {
    this.getTournaments();
  }
}
