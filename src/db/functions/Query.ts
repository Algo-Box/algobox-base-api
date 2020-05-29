import { Model, Document } from "mongoose";

/**
 * gets One Document from DB
 * @param {Model} schema the schema on which to query
 * @param {Object} Query the query 
 */
export async function queryOne(
  schema: Model<Document, {}>,
  Query: Object
) {
  return schema.findOne(Query);
}

/**
 * gets All Documents from DB
 * @param {Model} schema the schema on which to query
 * @param {Object} Query the query 
 */
export async function queryAll(
  schema: Model<Document, {}>,
  Query: Object
) {
  return schema.find(Query);
}