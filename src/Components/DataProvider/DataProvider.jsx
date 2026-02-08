

import React, { createContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "../../Utility/Reducer.jsx";
import { auth } from "../../Utility/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Type } from "../../Utility/Action.type";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      dispatch({ type: Type.SET_USER, user: currentUser });
    });
    return () => unsubscribe();
  }, []);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
