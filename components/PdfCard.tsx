import type { PdfItem } from "@/data/types";
import PdfThumbnail from "./PdfThumbnail";

interface PdfCardProps {
  pdf: PdfItem;
}

export default function PdfCard({ pdf }: PdfCardProps) {
  return (
    <a
      href={pdf.pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-xl bg-white dark:bg-zinc-800 shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100 dark:bg-zinc-700">
        <PdfThumbnail pdfUrl={pdf.pdfUrl} alt={pdf.title} />
        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded">
          PDF
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
          {pdf.title}
        </h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2">
          {pdf.description}
        </p>
      </div>
    </a>
  );
}
