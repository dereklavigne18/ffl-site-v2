import { standingsPayload } from 'app/samplePayloads/standingsPayload';

import { fetchFromGraphQLApi } from './graphqlClient';

// TODO - should use graphql-tag
const query = `
query standings($year: Int!, $week: Int!) {
  standings(year: $year, week: $week) {
    records {
      rank
      team {
        id
        name
        owner {
          name
        }
      }
      record {
        wins
        losses
        ties
      }
      pointsFor
      pointsAgainst
    }
  }
}
`;

export async function fetchTeamRecords(season, week) {
  if (false) { // If testing we can just turn this on for some static sample data
    return new Promise((resolve, reject) => {
      resolve(standingsPayload);
    });
  }

  const response = await fetchFromGraphQLApi(
    query,
    { year: season, week: week, },
  );

  return await response.json();
}
