import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class TournamentService {
  tournes: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.tournes = af.database.list('/');
  }

  getTournaments() {
    return this.tournes;
  }
}
