import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/data/types";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="group block overflow-hidden rounded-xl bg-white dark:bg-zinc-800 shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100 dark:bg-zinc-700">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h2 className="text-lg font-semibold text-white">{category.name}</h2>
          <p className="text-sm text-zinc-200 line-clamp-2">{category.description}</p>
        </div>
      </div>
    </Link>
  );
}
