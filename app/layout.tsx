import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "HireHub",
  description: "Find your dream job",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        {children}

        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 3000,
            style: {
              background: "#2563eb",
              color: "#fff",
            },
          }}
        />

      </body>
    </html>
  );
}