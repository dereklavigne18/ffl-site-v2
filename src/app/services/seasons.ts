import { seasonsPayload } from 'app/samplePayloads/seasonsPayload';

import { fetchFromGraphQLApi } from './graphqlClient';

// TODO - should use graphql-tag
const query = `
query seasons {
  currentWeek
  currentSeason
  seasons {
    year
    weeks
  }
}
`;

export async function fetchSeasons() {
  if (false) { // If testing we can just turn this on for some static sample data
    return new Promise((resolve, reject) => {
      resolve(seasonsPayload);
    });
  }

  const response = await fetchFromGraphQLApi(
    query,
    {},
  );

  return await response.json();
}