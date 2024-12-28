//here we store all the course data which s generated in json format(we can see in console)this is the below connection to db
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const sql = neon(process.env.NEXT_PUBLIC_DB_CONNECTION_STRING);
export const db = drizzle(sql);

