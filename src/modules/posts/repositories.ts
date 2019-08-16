import { Client } from 'pg';
import { log } from '../../log';

export interface QueryPostGetAllOptions {
  authorId?: string;
}

export interface PostRepository {
  getAll(options: QueryPostGetAllOptions);
}

export class PostSQLRepository implements PostRepository {
  constructor(private db: Client) {}

  async getAll(options: QueryPostGetAllOptions) {
    log.info(`🔍 Searching posts for author ${options.authorId} in database`);

    const { rows } = await this.db.query(`SELECT * FROM posts where author_id = $1`, [
      options.authorId,
    ]);

    return rows;
  }
}
