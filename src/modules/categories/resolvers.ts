import { log } from '../../log';

export const CategoryResolver = {
  Post: {
    categories: (obj, args, ctx) => {
      log.debug({ postId: obj.id }, 'Resolving categories for post');

      return ctx.repositories.category.getByPost(obj.id);
    },
  },
};
