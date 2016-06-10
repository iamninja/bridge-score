import { Component, OnInit }                                from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { TournamentService }        from './tournament.service';
import { NewTournamentComponent }   from './new-tournament.component';
import { ListTournamentsComponent } from './list-tournaments.component';
import { EditTournamentComponent }  from './edit-tournament.component';

import { Tournament } from './tournament';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: [
    'app/app.component.css'
  ],
  directives: [ ROUTER_DIRECTIVES ],
  providers: [
    ROUTER_PROVIDERS,
    TournamentService
  ]
})
@RouteConfig([
  {
    path: '/new',
    name: 'NewTournament',
    component: NewTournamentComponent
  },
  {
    path: '/list',
    name: 'ListTournaments',
    component: ListTournamentsComponent
  },
  {
    path: '/edit/:key',
    name: 'EditTournament',
    component: EditTournamentComponent
  }
])
export class AppComponent implements OnInit {
  title = 'Bridge Score';
  // tournaments;

  constructor(private tournamentService: TournamentService) { }

  // getTournaments() {
  //   this.tournaments = this.tournamentService.getTournaments();
  // }
  ngOnInit() {
    // this.getTournaments();
  }
}
