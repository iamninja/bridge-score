import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/observable';

import { Tournament } from './tournament';

@Injectable()
export class TournamentService {
  tournes: FirebaseListObservable<Tournament[]>;
  constructor(af: AngularFire) {
    this.tournes = af.database.list('/');
  }

  getTournaments() {
    return this.tournes;
  }

  saveTournament(tournament: Tournament) {
    this.tournes.push(tournament);
  }

  updateTournament(tournament: Tournament) {
    // this.tournes.update();
  }

  getTournamentById(id) {
    let sel = {}
    return this.tournes.forEach(tours => {
      for (let tour in tours) {
        if (tours[tour].id === id) {
          sel = tours[tour];
          console.log(tours[tour]);
        }
      }
    });
  }
}
