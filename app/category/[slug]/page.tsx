import { notFound } from "next/navigation";
import Header from "@/components/Header";
import PdfGrid from "@/components/PdfGrid";
import { getCategoryBySlug, getPdfsByCategory, getAllCategories } from "@/lib/data";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return { title: "Category Not Found" };
  }

  return {
    title: `${category.name} - PDF Catalog`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const pdfs = getPdfsByCategory(category.id);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <Header title={category.name} showBack />
      <main className="container mx-auto px-4 py-6">
        <p className="text-zinc-600 dark:text-zinc-400 mb-6">{category.description}</p>
        <PdfGrid pdfs={pdfs} />
      </main>
    </div>
  );
}
