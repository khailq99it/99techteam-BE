import { Request, Response } from 'express';
import { getAllItems } from '../controllers/items.controller';
import dbPromise from '../db';

describe('getAllItems', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let db: any;

  beforeAll(async () => {
    db = await dbPromise;
    await db.run('CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT, completed BOOLEAN)');
    await db.run('INSERT INTO tasks (title, description, completed) VALUES (?, ?, ?)', ['Test Title 1', 'Test Description 1', false]);
    await db.run('INSERT INTO tasks (title, description, completed) VALUES (?, ?, ?)', ['Test Title 2', 'Test Description 2', false]);
    await db.run('INSERT INTO tasks (title, description, completed) VALUES (?, ?, ?)', ['Another Title', 'Another Description', false]);
    await db.run('INSERT INTO tasks (title, description, completed) VALUES (?, ?, ?)', ['New Title 1', 'New Description 1', false]);
    await db.run('INSERT INTO tasks (title, description, completed) VALUES (?, ?, ?)', ['New Title 2', 'New Description 2', false]);
    await db.run('INSERT INTO tasks (title, description, completed) VALUES (?, ?, ?)', ['Old Title 1', 'Old Description 1', false]);
    await db.run('INSERT INTO tasks (title, description, completed) VALUES (?, ?, ?)', ['Old Title 2', 'Old Description 2', false]);
  });

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  afterAll(async () => {
    await db.run('DROP TABLE IF EXISTS tasks');
  });

  it('should filter items by title', async () => {
    mockRequest.query = { title: 'Test Title' };
    await getAllItems(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect((mockResponse.json as jest.Mock).mock.calls[0][0].length).toBe(2);
  });

  it('should filter items by description', async () => {
    mockRequest.query = { description: 'Test Description' };
    await getAllItems(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect((mockResponse.json as jest.Mock).mock.calls[0][0].length).toBe(2);
  });

  it('should filter items by title and description', async () => {
    mockRequest.query = { title: 'Test Title', description: 'Test Description' };
    await getAllItems(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect((mockResponse.json as jest.Mock).mock.calls[0][0].length).toBe(2);
  });

  it('should return all items if no filters are provided', async () => {
    mockRequest.query = {};
    await getAllItems(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect((mockResponse.json as jest.Mock).mock.calls[0][0].length).toBe(7);
  });

  it('should return an empty array if no items match the filters', async () => {
    mockRequest.query = { title: 'Nonexistent Title' };
    await getAllItems(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect((mockResponse.json as jest.Mock).mock.calls[0][0].length).toBe(0);
  });

  it('should return a limited number of items based on the limit parameter', async () => {
    mockRequest.query = { limit: '2' };
    await getAllItems(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(((mockResponse.json as jest.Mock).mock.calls[0][0] as any[]).length).toBe(2);
  });

  it('should return items from a specific page based on the page and limit parameters', async () => {
    mockRequest.query = { page: '2', limit: '1' };
    await getAllItems(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(((mockResponse.json as jest.Mock).mock.calls[0][0] as any[]).length).toBe(1);
    expect(((mockResponse.json as jest.Mock).mock.calls[0][0] as any[])[0].title).toBe('Test Title 2');
  });

  it('should return items from a specific page with title and description filters', async () => {
    mockRequest.query = {
      page: '2', limit: '1', title: 'New Title', description: 'New Description',
    };
    await getAllItems(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(((mockResponse.json as jest.Mock).mock.calls[0][0] as any[]).length).toBe(1);
    expect(((mockResponse.json as jest.Mock).mock.calls[0][0] as any[])[0].title).toBe('New Title 2');
  });
});