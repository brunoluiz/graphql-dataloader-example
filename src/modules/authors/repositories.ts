import { Client } from "pg";

export interface AuthorRepository {}

export class AuthorSQLRepository implements AuthorRepository {
  constructor(private db: Client) {}
}
