
import { defineConfig } from "drizzle-kit";



export default defineConfig({
  dialect: "postgresql",
  
  schema: "./configs/schema.jsx",
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DB_CONNECTION_STRING,
    

    },
});