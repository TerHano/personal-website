import { Navbar } from "@/components/navbar";
import { ScrollProgress } from "@/components/scroll-progress";
import { siteConfig } from "@/config/site";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-paper">
      <ScrollProgress />
      <Navbar />
      <main className="container mx-auto w-full max-w-5xl flex-grow px-5 pt-16 sm:px-8">
        {children}
      </main>
      <footer className="container mx-auto w-full max-w-5xl px-5 pb-12 sm:px-8">
        <div className="flex flex-wrap justify-between gap-x-6 gap-y-2 border-t border-rule pt-5 font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-muted">
          <a
            className="text-ink-soft transition-colors hover:text-teal"
            href={`mailto:${siteConfig.links.email}`}
          >
            {siteConfig.links.email}
          </a>
          <a
            className="text-ink-soft transition-colors hover:text-teal"
            href={siteConfig.links.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            github.com/TerHano
          </a>
          <span>{siteConfig.location}</span>
        </div>
      </footer>
    </div>
  );
}
