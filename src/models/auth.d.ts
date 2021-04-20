export interface ISignUpResult {
  user: CognitoUser;
  userConfirmed: boolean;
  userSub: string;
}
