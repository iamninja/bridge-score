import { Component }                                        from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { NewTournamentComponent }   from './new-tournament.component';
import { ListTournamentsComponent } from './list-tournaments.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: [
    'app/app.component.css'
  ],
  directives: [ ROUTER_DIRECTIVES ],
  providers: [ ROUTER_PROVIDERS ]
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
  }
])
export class AppComponent {
  title = 'Bridge Score';
}
