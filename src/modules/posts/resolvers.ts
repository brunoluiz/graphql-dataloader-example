import { log } from '../../log';

export const PostResolver = {
  Query: {
    posts: (_, args, ctx) => {
      log.debug(args, 'Resolving posts');

      return ctx.repositories.post.getAll(args.input);
    },
  },
};
