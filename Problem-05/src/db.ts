import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Initialize database connection
const dbPromise = (async () => {
  const db = await open({
    filename: 'mydb.sqlite',
    driver: sqlite3.Database
  });
  await db.exec('PRAGMA foreign_keys = ON;');
  await db.exec(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      completed BOOLEAN NOT NULL DEFAULT 0
    );
  `);
  return db;
})();

export default dbPromise;