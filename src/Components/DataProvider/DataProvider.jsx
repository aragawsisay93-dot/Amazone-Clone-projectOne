import React, { createContext, useReducer, useEffect } from "react";
import { initialState, reducer } from "../../Utility/Reducer.jsx";
import { auth } from "../../Utility/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Persist Firebase auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      dispatch({ type: "SET_USER", user: currentUser });
    });
    return () => unsubscribe();
  }, []);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
