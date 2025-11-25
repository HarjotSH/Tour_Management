import { createContext, useEffect, useReducer } from "react";
import { BASE_URL } from "../utils/config";

const initial_state = {
  user: null,
  loading: true,
  error: null,
};

export const AuthContext = createContext(initial_state);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return { user: null, loading: true, error: null };

    case "LOGIN_SUCCESS":
      return { user: action.payload, loading: false, error: null };

    case "LOGIN_FAILURE":
      return { user: null, loading: false, error: action.payload };

    case "SET_USER":
      return { user: action.payload, loading: false, error: null };

    case "LOGOUT":
      return { user: null, loading: false, error: null };

    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initial_state);

  // 🔥 Auto-login on refresh
  useEffect(() => {
    const restoreUser = async () => {
      try {
        const res = await fetch(`${BASE_URL}/auth/check-auth`, {
          credentials: "include",
        });

        const data = await res.json();
        if (data.success) {
          dispatch({ type: "SET_USER", payload: data.user });
        } else {
          dispatch({ type: "SET_USER", payload: null });
        }

      } catch {
        dispatch({ type: "SET_USER", payload: null });
      }
    };

    restoreUser();
  }, []);

  return (
    <AuthContext.Provider value={{
      user: state.user,
      loading: state.loading,
      error: state.error,
      dispatch
    }}>
      {children}
    </AuthContext.Provider>
  );
};
