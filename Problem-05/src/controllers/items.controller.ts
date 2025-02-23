import { Request, Response } from 'express';
import dbPromise from '../db';
import Task from '../models';

export const createItem = async (req: Request, res: Response) => {
  const db = await dbPromise;
  const { title, description } = req.body;
  const result = await db.run(
    'INSERT INTO tasks (title, description, completed) VALUES (?, ?, ?)',
    [title, description, false]
  );
  const id: number = result.lastID ?? 0;
  const newItem: Task = { id, title, description, completed: false };
  return res.status(201).json(newItem);
};

export const getAllItems = async (req: Request, res: Response) => {
  const db = await dbPromise;
  const { title, description, page, limit } = req.query;
  let query = 'SELECT * FROM tasks WHERE 1=1';
  const params: any[] = [];

  if (title) {
    query += ' AND title LIKE ?';
    params.push(`%${String(title)}%`);
  }
  if (description) {
    query += ' AND description LIKE ?';
    params.push(`%${String(description)}%`);
  }

  // Pagination
  const pageNumber = parseInt(String(page)) || 1;
  const limitNumber = parseInt(String(limit)) || 10;
  const startIndex = (pageNumber - 1) * limitNumber;

  query += ' LIMIT ? OFFSET ?';
  params.push(limitNumber, startIndex);
  const items = await db.all(query, params as any[]);
  return res.status(200).json(items);
};

export const getItemById = async (req: Request, res: Response) => {
  const db = await dbPromise;
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    return res.status(400).json({ message: 'Invalid item ID' });
  }
  const item = await db.get('SELECT * FROM tasks WHERE id = ?', [id]);
  if (!item) {
    return res.status(404).json({ message: 'Item not found' });
  }
  return res.status(200).json(item);
};

export const updateItem = async (req: Request, res: Response) => {
  const db = await dbPromise;
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    return res.status(400).json({ message: 'Invalid item ID' });
  }
  const { title, description } = req.body;
  const result = await db.run(
    'UPDATE tasks SET title = ?, description = ? WHERE id = ?',
    [title, description, id]
  );
  if (result.changes === 0) {
    return res.status(404).json({ message: 'Item not found' });
  }
  const updatedItem = await db.get('SELECT * FROM tasks WHERE id = ?', [id]);
  return res.status(200).json(updatedItem);
};

export const deleteItem = async (req: Request, res: Response) => {
  const db = await dbPromise;
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    return res.status(400).json({ message: 'Invalid item ID' });
  }
  const result = await db.run('DELETE FROM tasks WHERE id = ?', [id]);
  if (result.changes === 0) {
    return res.status(404).json({ message: 'Item not found' });
  }
  return res.status(204).send();
};