import Link from "next/link";
import { redirect } from "next/navigation";

const pages = [
  {
    title: "Technology News and Updates",
    url: "https://www.example.com/technology",
    text: "Discover the latest technology, software, artificial intelligence and internet news.",
  },
  {
    title: "Science Explained",
    url: "https://www.example.com/science",
    text: "Explore science stories, discoveries, space, biology and research.",
  },
  {
    title: "World News",
    url: "https://www.example.com/world",
    text: "Read about global events and important news from around the world.",
  },
  {
    title: "ISWIW Web Search",
    url: "https://iswiw.example.com",
    text: "A basic independent search experience built with Next.js.",
  },
];

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;

  if (!q?.trim()) {
    redirect("/");
  }

  const query = q.trim();
  const words = query.toLowerCase().split(/\s+/);
  const results = pages.filter((page) => {
    const searchable = `${page.title} ${page.text}`.toLowerCase();
    return words.every((word) => searchable.includes(word));
  });

  return (
    <main className="results-page">
      <header className="results-header">
        <Link href="/" className="small-brand" aria-label="ISWIW home">
          ISWIW
        </Link>
        <form action="/search" className="results-search">
          <label className="sr-only" htmlFor="results-query">
            Search
          </label>
          <input
            id="results-query"
            name="q"
            defaultValue={query}
            autoComplete="off"
          />
          <button type="submit">Search</button>
        </form>
      </header>

      <section className="results" aria-live="polite">
        <p className="result-count">
          {results.length} local result{results.length === 1 ? "" : "s"} for “{query}”
        </p>

        {results.length > 0 ? (
          results.map((result) => (
            <article className="result" key={result.url}>
              <a href={result.url} target="_blank" rel="noreferrer">
                <span className="result-url">{result.url}</span>
                <h2>{result.title}</h2>
              </a>
              <p>{result.text}</p>
            </article>
          ))
        ) : (
          <div className="no-results">
            <h2>No results found</h2>
            <p>Try another keyword. ISWIW is currently searching a small local index.</p>
          </div>
        )}
      </section>
    </main>
  );
}
