interface User {
    id: number;
    username: string;
    email: string;
}


export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

interface LoginAction {
    type: typeof LOGIN;
    payload: User;
}

interface LogoutAction {
    type: typeof LOGOUT;
}

type AuthActions = LoginAction | LogoutAction;

export const login = (user: User): LoginAction => ({
    type: LOGIN,
    payload: user,
});

export const logout = (): LogoutAction => ({
    type: LOGOUT,
});