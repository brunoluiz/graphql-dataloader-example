import { Client } from 'pg';
import { log } from '../../log';

export interface AuthorRepository {
  get(id: string);
}

export class AuthorSQLRepository implements AuthorRepository {
  constructor(private db: Client) {}

  async get(id: string) {
    log.info(`🔍 Searching author ${id} in database`);
    const { rows } = await this.db.query('SELECT * FROM authors WHERE id = $1', [id]);

    return rows[0];
  }
}
