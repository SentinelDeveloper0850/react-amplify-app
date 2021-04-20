const COGNITO_USER = 'cognitoUser';

export const saveCognitoUser = (cognitoUser: any) => {

  localStorage.setItem(COGNITO_USER, JSON.stringify(cognitoUser));

  return true;
};

export const getAuthenticatedUser = (): any | null => {
  const authedUser = localStorage.getItem(COGNITO_USER);

  if (authedUser) {
    return JSON.parse(authedUser);
  }

  return null;
};

export const removeCognitoUser = () => {
  try {
    localStorage.removeItem(COGNITO_USER);
    localStorage.clear();
    return true;
  } catch (error) {
    return false;
  }
};

export const checkIfExpired = (date: string): boolean => {
  return new Date(date) < new Date();
};
