interface User {
    id: number;
    username: string;
    email: string;
}

interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
}

interface LoginAction {
    type: 'LOGIN';
    payload: User;
}

interface LogoutAction {
    type: 'LOGOUT';
}

type AuthAction = LoginAction | LogoutAction;

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
};

const forprofileReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
            };
        case 'LOGOUT':
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            };
        default:
            return state;
    }
};

export default forprofileReducer;