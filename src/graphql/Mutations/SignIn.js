import {gql} from "@apollo/client";

export const SIGN_IN = gql`
    mutation SignIn($payload: SignInInput) {
        signIn(payload: $payload) {
            message
            access_token
            refresh_token
        }
    }
`;