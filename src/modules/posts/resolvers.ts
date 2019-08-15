export const PostResolver = {
  Query: {
    posts: (_, args, ctx) => {
      return ctx.repositories.post.getAll(args.input);
    },
  },
};
