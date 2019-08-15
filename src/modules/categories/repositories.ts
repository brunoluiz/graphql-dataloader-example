import { Client } from "pg";

export interface CategoryRepository {}

export class CategorySQLRepository implements CategoryRepository {
  constructor(private db: Client) {}
}
