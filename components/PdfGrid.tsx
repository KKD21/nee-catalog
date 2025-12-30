import type { PdfItem } from "@/data/types";
import PdfCard from "./PdfCard";

interface PdfGridProps {
  pdfs: PdfItem[];
}

export default function PdfGrid({ pdfs }: PdfGridProps) {
  if (pdfs.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-zinc-500 dark:text-zinc-400">No PDFs available in this category</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {pdfs.map((pdf) => (
        <PdfCard key={pdf.id} pdf={pdf} />
      ))}
    </div>
  );
}
