import { Observable, Subject } from 'rxjs';

type Piece = string;
type Pieces = string[];

const pieces = ['Récolteur', 'Percolateur', 'Bac', '45ezde'];

export class Faker {

  pieces(nb: number): Pieces {
    let result: Pieces;

    if (nb > pieces.length) {
      throw new Error('No many fake pieces');
    } else if (nb === pieces.length) {
      result = pieces;
    } else {
      result = [];

      for (let i = 0; i < nb; ++i) {
        result.push(pieces[Math.round(Math.random() * pieces.length)]);
      }
    }

    return result;
  }

  observable(): Observable < string[] > {
    const result = new Subject < string[] > ();
    const data: string[] = [];

    const inter = setInterval(() => {
      data.push(`Product n°${data.length + 1}`);
      result.next(data);
    }, 2000);

    setTimeout(() => clearInterval(inter), 60000);

    return result;
  }
}
