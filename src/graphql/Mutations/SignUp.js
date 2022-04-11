import {gql} from "@apollo/client";

export const SIGN_UP = gql`
    mutation SignUp($payload: SignUpInput) {
        signUp(payload: $payload) {
            message
        }
    }
`;