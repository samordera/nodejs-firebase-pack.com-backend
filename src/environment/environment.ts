import * as firebaseCredentials from '../../firebase-credentials.json';

export const environment = {
    firebase: {
        databaseURL: `https://${(firebaseCredentials?.project_id ?? '')}.firebaseio.com`,
        credentials: firebaseCredentials,
    }
}
