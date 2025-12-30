import catalogData from "@/data/catalog.json";
import type { Category, PdfItem, CatalogData } from "@/data/types";

const data: CatalogData = catalogData;

export function getAllCategories(): Category[] {
  return data.categories;
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return data.categories.find((cat) => cat.slug === slug);
}

export function getPdfsByCategory(categoryId: string): PdfItem[] {
  return data.pdfs.filter((pdf) => pdf.categoryId === categoryId);
}

export function getAllPdfs(): PdfItem[] {
  return data.pdfs;
}
