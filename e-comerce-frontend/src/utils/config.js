const devConfig = {
  baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:8000",
};

const prodConfig = {
  baseURL: "http://localhost:3000/",
};

export const config = devConfig;
