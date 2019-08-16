import { log } from '../../log';

export const PostResolver = {
  Query: {
    posts: (_, args, ctx) => {
      log.debug(`⚡️ resolver posts called`);

      return ctx.repositories.post.getAll(args.input);
    },
  },
};
