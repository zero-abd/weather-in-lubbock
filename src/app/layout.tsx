import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "How Texas Tech Students Cope With Lubbock's Unpredictable Weather",
  description: "Explore the unique challenges and humorous adaptations of Texas Tech students dealing with Lubbock's notoriously unpredictable weather patterns.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-red-600 font-bold text-xl">Weather in Lubbock</div>
            <nav className="flex space-x-4">
              <a href="#survey" className="hover:text-red-600 transition-colors duration-200">Survey</a>
              <a href="#gallery" className="hover:text-red-600 transition-colors duration-200">Gallery</a>
              <a href="#interviews" className="hover:text-red-600 transition-colors duration-200">Interviews</a>
            </nav>
          </div>
        </header>
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center">
              <p className="mb-2">© {new Date().getFullYear()} Texas Tech Weather Report</p>
              <p className="text-sm text-gray-400">A student project exploring Lubbock&apos;s unpredictable weather</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
