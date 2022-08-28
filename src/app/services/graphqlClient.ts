export async function fetchFromGraphQLApi(query: string, variables: object) {
  return fetch("http://localhost:3000", {
    method: "POST",
    headers: {
      "Accept": "*/*",
      "Content-Type": "application/json",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "cross-site",
    },
    body: JSON.stringify({
      query: query,
      variables: variables,
    }),
    mode: "cors",
    credentials: "omit",
  });
}
