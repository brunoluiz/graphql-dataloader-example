import * as fs from "fs";
import { gql } from "apollo-server";
import { merge } from "lodash";

import { PostResolver, PostRepository } from "../modules/posts";
import { CategoryResolver, CategoryRepository } from "../modules/categories";
import { AuthorResolver, AuthorRepository } from "../modules/authors";

const path = (m: string): string => __dirname.concat(`/${m}/schema.gql`);
const schema = (m: string) =>
  gql`
    ${fs.readFileSync(path(m))}
  `;

export const schemas = [
  schema("."),
  schema("../modules/posts"),
  schema("../modules/categories"),
  schema("../modules/authors")
];

export const resolvers = merge(
  {},
  PostResolver,
  CategoryResolver,
  AuthorResolver
);

export interface Context {
  repositories: {
    post: PostRepository;
    category: CategoryRepository;
    author: AuthorRepository;
  };
}
