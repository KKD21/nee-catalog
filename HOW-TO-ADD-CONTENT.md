# How to Add Content (No Coding Required)

This guide explains how to add new categories and PDFs to your catalog without writing any code.

## Quick Overview

All content is managed through a single JSON file:
```
data/catalog.json
```

## Adding a New Category

1. Open `data/catalog.json`
2. Find the `"categories"` array
3. Add a new category object:

```json
{
  "id": "unique-id",
  "name": "Display Name",
  "slug": "url-slug",
  "description": "Short description",
  "image": "/images/categories/your-image.jpg"
}
```

4. Add your category banner image to:
```
public/images/categories/your-image.jpg
```

### Category Fields Explained:
- `id`: Unique identifier (used to link PDFs to categories)
- `name`: Display name shown on the card
- `slug`: URL-friendly name (lowercase, no spaces, use hyphens)
- `description`: Short description shown under the name
- `image`: Path to the banner image (recommended: 800x600px)

## Adding a New PDF

1. Open `data/catalog.json`
2. Find the `"pdfs"` array
3. Add a new PDF object:

```json
{
  "id": "unique-pdf-id",
  "title": "PDF Title",
  "description": "Short description",
  "thumbnail": "/images/pdfs/your-thumbnail.jpg",
  "pdfUrl": "/pdfs/category-folder/your-file.pdf",
  "categoryId": "category-id"
}
```

4. Add your files:
   - PDF file to: `public/pdfs/category-folder/your-file.pdf`
   - Thumbnail to: `public/images/pdfs/your-thumbnail.jpg`

### PDF Fields Explained:
- `id`: Unique identifier for the PDF
- `title`: Display title
- `description`: Short description
- `thumbnail`: Path to preview image (recommended: 300x400px)
- `pdfUrl`: Path to the actual PDF file
- `categoryId`: Must match the `id` of an existing category

## File Organization

```
public/
├── images/
│   ├── categories/     <- Category banner images
│   │   ├── electronics.svg
│   │   └── your-category.jpg
│   └── pdfs/           <- PDF thumbnail images
│       ├── placeholder.svg
│       └── your-pdf-thumb.jpg
└── pdfs/               <- PDF files organized by category
    ├── electronics/
    │   └── smartphones.pdf
    └── your-category/
        └── your-file.pdf
```

## Example: Adding a "Sports" Category with 2 PDFs

### Step 1: Update catalog.json

Add to categories array:
```json
{
  "id": "sports",
  "name": "Sports Equipment",
  "slug": "sports",
  "description": "Sports gear and equipment catalogs",
  "image": "/images/categories/sports.jpg"
}
```

Add to pdfs array:
```json
{
  "id": "sports-1",
  "title": "Fitness Equipment 2024",
  "description": "Gym and home fitness equipment",
  "thumbnail": "/images/pdfs/fitness-thumb.jpg",
  "pdfUrl": "/pdfs/sports/fitness-2024.pdf",
  "categoryId": "sports"
},
{
  "id": "sports-2",
  "title": "Outdoor Gear",
  "description": "Camping and hiking equipment",
  "thumbnail": "/images/pdfs/outdoor-thumb.jpg",
  "pdfUrl": "/pdfs/sports/outdoor-gear.pdf",
  "categoryId": "sports"
}
```

### Step 2: Add the files

1. Create folder: `public/pdfs/sports/`
2. Add PDF files to the folder
3. Add `sports.jpg` to `public/images/categories/`
4. Add thumbnail images to `public/images/pdfs/`

### Step 3: Rebuild

```bash
pnpm build
```

## Image Recommendations

| Type | Size | Format |
|------|------|--------|
| Category Banner | 800x600px | JPG, PNG, WebP |
| PDF Thumbnail | 300x400px | JPG, PNG, WebP |

## Tips

- Use lowercase for all file names
- Use hyphens instead of spaces in file names
- Keep IDs unique across the entire catalog
- The slug should match the category folder name in `/pdfs/`
- Rebuild the project after making changes to see them
