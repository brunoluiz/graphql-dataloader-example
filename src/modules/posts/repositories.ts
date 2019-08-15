import { Client } from "pg";

export interface PostRepository {}

export class PostSQLRepository implements PostRepository {
  constructor(private db: Client) {};
}
