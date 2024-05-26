export const fetcher = async (api, fields = {}) => {
  const query = Object.entries(fields).reduce(
    (acc, [field, value]) => (acc += `${field}=${value}&`),
    "?"
  );
  return await fetch(api + query).then((res) => res.json());
};
