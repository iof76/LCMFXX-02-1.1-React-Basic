import React from "react";
import { ApiFetchContext } from "./api-fetch.context";

export const useApiFetch = () => {
  const context = React.useContext(ApiFetchContext);

  if (!context) {
    throw new Error("useAuth tiene que usarse dentro de <AuthProvider>");
  }

  return context;
};
