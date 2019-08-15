import { Client } from 'pg';

export interface QueryPostGetAllOptions {
  authorId?: string;
}

export interface PostRepository {
  getAll(options: QueryPostGetAllOptions);
}

export class PostSQLRepository implements PostRepository {
  constructor(private db: Client) {}

  async getAll(options: QueryPostGetAllOptions) {
    const { rows } = await this.db.query(`SELECT * FROM posts where author_id = $1`, [
      options.authorId,
    ]);

    return rows;
  }
}
