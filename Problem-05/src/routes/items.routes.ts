import express, { Request, Response } from 'express';
import {
  createItem,
  getAllItems,
  getItemById,
  updateItem,
  deleteItem,
} from '../controllers/items.controller';

const router = express.Router();

// Create
router.post('/', createItem);

// Read all with filters and pagination
router.get('/', getAllItems);

// Read one
router.get('/:id', getItemById);

// Update
router.put('/:id', updateItem);

// Delete
router.delete('/:id', deleteItem);

export default router;