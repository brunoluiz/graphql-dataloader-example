import { log } from '../../log';

export const CategoryResolver = {
  Post: {
    categories: (obj, args, ctx) => {
      log.debug({ postId: obj.id }, `⚡️ resolver categories called for post ${obj.id}`);

      return ctx.repositories.category.getByPost(obj.id);
    },
  },
};
