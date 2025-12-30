"use client";

import { useState, useEffect } from "react";

interface PdfThumbnailProps {
  pdfUrl: string;
  alt: string;
}

export default function PdfThumbnail({ pdfUrl, alt }: PdfThumbnailProps) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [PdfComponents, setPdfComponents] = useState<{
    Document: React.ComponentType<any>;
    Page: React.ComponentType<any>;
  } | null>(null);

  useEffect(() => {
    import("react-pdf").then((module) => {
      const { pdfjs } = module;
      pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
      setPdfComponents({
        Document: module.Document,
        Page: module.Page,
      });
    });
  }, []);

  if (error || !PdfComponents) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-zinc-200 dark:bg-zinc-700">
        {loading && !error ? (
          <div className="w-8 h-8 border-2 border-zinc-400 border-t-transparent rounded-full animate-spin" />
        ) : (
          <div className="text-center p-4">
            <svg
              className="w-12 h-12 mx-auto text-zinc-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <p className="text-xs text-zinc-500 mt-2">{alt}</p>
          </div>
        )}
      </div>
    );
  }

  const { Document, Page } = PdfComponents;

  return (
    <div className="w-full h-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-200 dark:bg-zinc-700 z-10">
          <div className="w-8 h-8 border-2 border-zinc-400 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <Document
        file={pdfUrl}
        onLoadSuccess={() => setLoading(false)}
        onLoadError={() => {
          setError(true);
          setLoading(false);
        }}
        loading={null}
        className="flex items-center justify-center"
      >
        <Page
          pageNumber={1}
          width={200}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          className="shadow-sm"
        />
      </Document>
    </div>
  );
}
