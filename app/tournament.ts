import { Player } from './player';
import { Score }  from './score';

// Define tournament class
export class Tournament {
  id: string;
  name: string;
  date: string;
  type: string;
  place: string;
  referee: string;
  format: string;
  deals: number;
  scores: Score[];
  players: Player[];
}
