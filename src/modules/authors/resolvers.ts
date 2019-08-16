import { log } from '../../log';

export const AuthorResolver = {
  Post: {
    author: (obj, args, ctx) => {
      log.debug(
        { postId: obj.id, authorId: obj.author_id },
        `⚡️ resolver author called for post ${obj.id}, author ${obj.author_id}`,
      );

      return ctx.repositories.author.get(obj.author_id);
    },
  },
};
