// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { HeroImages, Category, Author, Content } = initSchema(schema);

export {
  HeroImages,
  Category,
  Author,
  Content
};