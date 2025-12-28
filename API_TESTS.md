# MongoDB CRUD Operations Test

## Test your API endpoints using curl or a tool like Postman

### 1. CREATE a book
```bash
curl -X POST http://localhost:3000/books \
  -H "Content-Type: application/json" \
  -d '{
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "pages": 180,
    "genre": "Fiction"
  }'
```

### 2. GET all books
```bash
curl http://localhost:3000/books
```

### 3. GET a specific book (replace ID with actual book ID)
```bash
curl http://localhost:3000/books/BOOK_ID_HERE
```

### 4. UPDATE a book (replace ID with actual book ID)
```bash
curl -X PUT http://localhost:3000/books/BOOK_ID_HERE \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated Title",
    "pages": 200
  }'
```

### 5. DELETE a book (replace ID with actual book ID)
```bash
curl -X DELETE http://localhost:3000/books/BOOK_ID_HERE
```
