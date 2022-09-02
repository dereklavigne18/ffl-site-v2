import { scoreboardPayload } from 'app/samplePayloads/scoreboardPayload';

import { fetchFromGraphQLApi } from './graphqlClient';

// TODO - should use graphql-tag
const query = `
query scoreboard($year: Int!, $week: Int!) {
  scoreboard(year: $year, week: $week) {
    homeScore {
      teamRecord {
        team {
          id
          name
        }
      }
      points
    }
    awayScore {
      teamRecord {
        team {
          id
          name
        }
      }
      points
    }
  }
}
`;

export async function fetchMatchups(season, week) {
  if (false) { // If testing we can just turn this on for some static sample data
    return new Promise((resolve, reject) => {
      resolve(scoreboardPayload);
    });
  }

  const response = await fetchFromGraphQLApi(
    query,
    { year: season, week: week, },
  );

  return await response.json();
}