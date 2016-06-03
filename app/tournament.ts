import { Player } from './player';
import { Score }  from './score';

// Define tournament class
export class Tournament {
  _id: string;
  name: string;
  type: string;
  format: string;
  deals: number;
  scores: Score[];
  players: Player[];
}
