import { Client } from 'pg';
import * as DataLoader from 'dataloader';
import { log } from '../../log';

export interface AuthorRepository {
  get(id: string);
}

export class AuthorSQLRepository implements AuthorRepository {
  private authorGetLoader;

  constructor(private db: Client) {
    this.authorGetLoader = new DataLoader<number, any[]>(keys => this.getBatched(keys));
  }

  async get(id: string) {
    return this.authorGetLoader.load(id);
  }

  async getBatched(keys: number[]) {
    log.info(`🔍 Searching authors ${keys} in database`);

    const { rows } = await this.db.query('SELECT * FROM authors WHERE id = ANY($1::int[])', [keys]);

    return rows;
  }
}
