import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { dntLeishmania, dntTripa } from './db/schema';
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { sql } from 'drizzle-orm';

const app: Express = express();
const port = 3001;

app.use(cors({
  exposedHeaders: ['X-Total-Count'] // Expose custom headers to frontend
}));
app.use(express.json());

// Create drizzle instance
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
const db = drizzle(pool);

// Health check endpoint
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Molecules endpoint with pagination
app.get("/molecules", async (req: Request, res: Response) => {
  try {
    const PAGE_SIZE = 1000; // Fixed page size
    const offset = parseInt(req.query.offset as string) || 0;

    // Get total count of records
    const totalCount = await db.execute<{ count: string }>(
      sql`SELECT COUNT(*) FROM ${dntLeishmania}`
    );

    // Get paginated results
    const result = await db.select()
      .from(dntLeishmania)
      .limit(PAGE_SIZE)
      .offset(offset);

    // Set headers and send response
    res.set({
      'X-Total-Count': totalCount.rows[0].count, // Total records count
      'Access-Control-Expose-Headers': 'X-Total-Count' // Allow frontend to read this header
    });
    res.status(200).json(result);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.get("/molecules2", async (req: Request, res: Response) => {
  try {
    const PAGE_SIZE = 1000; // Fixed page size
    const offset = parseInt(req.query.offset as string) || 0;

    // Get total count of records
    const totalCount = await db.execute<{ count: string }>(
      sql`SELECT COUNT(*) FROM ${dntTripa}`
    );

    // Get paginated results
    const result = await db.select()
      .from(dntTripa)
      .limit(PAGE_SIZE)
      .offset(offset);

    // Set headers and send response
    res.set({
      'X-Total-Count': totalCount.rows[0].count, // Total records count
      'Access-Control-Expose-Headers': 'X-Total-Count' // Allow frontend to read this header
    });
    res.status(200).json(result);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
