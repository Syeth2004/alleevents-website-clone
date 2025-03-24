import "./globals.css";

export const metadata = {
  title: "Alleevents - Events in Chennai",
  description: "Discover and explore upcoming events in Chennai.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
