import { log } from '../../log';

export const AuthorResolver = {
  Post: {
    author: (obj, args, ctx) => {
      log.debug({ postId: obj.id, authorId: obj.author_id }, 'Resolving author for post');

      return ctx.repositories.author.get(obj.author_id);
    },
  },
};
