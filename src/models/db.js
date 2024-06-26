import { connectMongo } from "./mongo/connect.js";

export const db = {
  userStore: null,
};

export function connectDb(dbType) {
  switch (dbType) {
    case "mongo":
      connectMongo(db);
      break;
    default:
  }
}