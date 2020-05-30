import { BlogSchema } from '../../db/models';
import { BlogModel } from '../../types';
import { queryOne } from '../../db/functions';

/**
 * Creates a blog with given data
 * @param {BlogModel} BlogData the data required to create a blog
 */
export async function createBlog({
  author,
  Body,
  slug,
  tags,
  title
} : BlogModel) {
  if (await queryOne(BlogSchema, { slug: slug })) {
    throw new Error('Slug Already Taken');
  }
  return new BlogSchema({
    author: author,
    tags: tags,
    Body: Body,
    title: title,
    slug: slug
  }).save();
}
