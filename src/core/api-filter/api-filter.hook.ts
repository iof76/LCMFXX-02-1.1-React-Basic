import React from "react";
import { ApiFilterContext } from "./api-filter.context";

export const useApiFilter = () => {
  const context = React.useContext(ApiFilterContext);

  if (!context) {
    throw new Error("useAuth tiene que usarse dentro de <AuthProvider>");
  }

  return context;
};
