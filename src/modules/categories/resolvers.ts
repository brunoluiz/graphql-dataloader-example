export const CategoryResolver = {
  Post: {
    categories: (obj, args, ctx) => {
      return ctx.repositories.category.getByPost(obj.id);
    },
  },
};
