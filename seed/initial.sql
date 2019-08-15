BEGIN;

INSERT INTO authors (name) VALUES ('Bruno Luiz');

INSERT INTO posts (author_id, title, slug, draft) VALUES (1, 'Title A', 'slug-a', false);
INSERT INTO posts (author_id, title, slug, draft) VALUES (1, 'Title B', 'slug-b', false);
INSERT INTO posts (author_id, title, slug, draft) VALUES (1, 'Title C', 'slug-c', false);
INSERT INTO posts (author_id, title, slug, draft) VALUES (1, 'Title C', 'slug-c', true);

INSERT INTO categories (name, slug) VALUES ('Category A', 'category-a');
INSERT INTO categories (name, slug) VALUES ('Category B', 'category-b');
INSERT INTO categories (name, slug) VALUES ('Category C', 'category-c');

INSERT INTO posts_categories (category_id, post_id) VALUES (1, 1);
INSERT INTO posts_categories (category_id, post_id) VALUES (2, 1);
INSERT INTO posts_categories (category_id, post_id) VALUES (3, 1);

INSERT INTO posts_categories (category_id, post_id) VALUES (1, 2);

INSERT INTO posts_categories (category_id, post_id) VALUES (1, 3);
INSERT INTO posts_categories (category_id, post_id) VALUES (2, 3);

END;

