export const AuthorResolver = {
  Post: {
    author: (obj, args, ctx) => {
      return ctx.repositories.author.get(obj.author_id);
    },
  },
};
