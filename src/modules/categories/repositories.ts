import { Client } from 'pg';
import * as DataLoader from 'dataloader';
import { log } from '../../log';

export interface CategoryRepository {
  getByPost(postId: string);
}

export class CategorySQLRepository implements CategoryRepository {
  private categoriesGetByPostLoader;

  constructor(private db: Client) {
    this.categoriesGetByPostLoader = new DataLoader<number, any[]>(keys =>
      this.getByPostBatched(keys),
    );
  }

  async getByPost(postId: string) {
    return this.categoriesGetByPostLoader.load(postId);
  }

  async getByPostBatched(keys: number[]) {
    log.info(`🔍 Searching categories for post ${keys} in database`);
    const { rows } = await this.db.query(
      `
      SELECT *
      FROM posts p
      LEFT JOIN posts_categories pg ON p.id = pg.post_id
      LEFT JOIN categories c ON c.id = pg.category_id
      WHERE p.id = ANY($1::int[])
    `,
      [keys],
    );

    // This doesn't guarantee order, but I'm using for example purposes
    const output = rows.reduce((acc, row) => {
      const out = acc;

      if (!acc[row.post_id]) {
        out[row.post_id] = [];
      }

      if (row.category_id) {
        out[row.post_id].push(row);
      }

      return out;
    }, {});

    const values: any[] = Object.values(output);

    return values;
  }
}
