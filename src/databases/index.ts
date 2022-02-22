import { DB_USER, DB_PASSWORD, DB_DATABASE } from '@config';

export const dbConnection = {
  url: `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.cwd26.mongodb.net/${DB_DATABASE}?retryWrites=true&w=majority`,
};
