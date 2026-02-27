import { Navbar } from "@/components/navbar";
import { ScrollProgress } from "@/components/scroll-progress";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary-300/15 blur-3xl" />
        <div className="absolute top-1/3 -left-24 h-72 w-72 rounded-full bg-warning-300/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-secondary-300/10 blur-3xl" />
      </div>
      <Navbar />
      <main className="container mx-auto max-w-7xl px-3 sm:px-6 flex-grow pt-16">
        {children}
      </main>
    </div>
  );
}
