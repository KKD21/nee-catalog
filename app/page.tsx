import Header from "@/components/Header";
import CategorySearch from "@/components/CategorySearch";
import { getAllCategories } from "@/lib/data";

export default function Home() {
  const categories = getAllCategories();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <Header title="Nee Catalog" />
      <main className="container mx-auto px-4 py-6">
        <CategorySearch categories={categories} />
      </main>
    </div>
  );
}
