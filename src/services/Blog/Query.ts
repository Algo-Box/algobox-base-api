import { queryAll } from '../../db/functions';
import { BlogSchema } from '../../db/models';

/**
 * Gets All Blogs
 */
export async function getAll() {
  return queryAll(BlogSchema, {});
}

/**
 * Gets Blogs with some Common Slug
 * @param {String} slug this is the slug
 */
export async function getBySlug(slug: string) {
  return queryAll(BlogSchema, { slug: slug });
}

/**
 * Performs more complex Queries on Blogs Schema
 * @param {Object} Query The Query
 */
export async function complexQuery(Query: Object) {
  return queryAll(BlogSchema, Query);
}
