export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export interface PdfItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  pdfUrl: string;
  categoryId: string;
}

export interface CatalogData {
  categories: Category[];
  pdfs: PdfItem[];
}
