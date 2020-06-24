const { createContext } = require("react");


export const AuthContext = createContext({
    token: null,
    userId: null,
    login: () => { },
    logout: () => { },
    isAuthenteficated: false
});