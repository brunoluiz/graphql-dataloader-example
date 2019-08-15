import { Client } from 'pg';

export interface CategoryRepository {
  getByPost(postId: string);
}

export class CategorySQLRepository implements CategoryRepository {
  constructor(private db: Client) {}

  async getByPost(postId: string) {
    const { rows } = await this.db.query(
      `
      SELECT *
      FROM posts p
      JOIN posts_categories pg ON p.id = pg.post_id
      JOIN categories c ON c.id = pg.category_id
      WHERE p.id = $1
    `,
      [postId],
    );

    return rows;
  }
}
