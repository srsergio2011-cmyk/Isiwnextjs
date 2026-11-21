import Link from "next/link";

export default function Home() {
  return (
    <main className="search-page">
      <section className="search-card" aria-label="ISWIW search">
        <div className="brand">
          <span className="brand-i">I</span>
          <span className="brand-s">S</span>
          <span className="brand-w">W</span>
          <span className="brand-iw">IW</span>
        </div>

        <p className="tagline">I Search What I Want</p>

        <form action="/search" className="search-form">
          <label className="sr-only" htmlFor="query">
            Search the web
          </label>
          <input
            id="query"
            name="q"
            type="search"
            placeholder="Search ISWIW"
            autoComplete="off"
            required
          />
          <button type="submit">Search</button>
        </form>

        <nav className="quick-links" aria-label="Quick links">
          <Link href="/search?q=technology">Technology</Link>
          <Link href="/search?q=world">World</Link>
          <Link href="/search?q=science">Science</Link>
        </nav>
      </section>
    </main>
  );
}
