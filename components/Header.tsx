import Link from "next/link";

interface HeaderProps {
  title?: string;
  showBack?: boolean;
}

export default function Header({ title = "PDF Catalog", showBack = false }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
      <div className="container mx-auto px-4 py-4 flex items-center gap-4">
        {showBack && (
          <Link
            href="/"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            aria-label="Go back"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </Link>
        )}
        <h1 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">{title}</h1>
      </div>
    </header>
  );
}
