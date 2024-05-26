import { fetcher } from "../utility";

export const getArticles = async (fields) => {
  return await fetcher(
    "https://6651a73320f4f4c442784d64.mockapi.io/ashutosh/api/v1/articles",
    fields
  );
};
