import '../styles/style.css';
import '../styles/HomePageSkeleton.css';


// either Static metadata
export const metadata = {
  title: "Programing jokes",
  description: "Random programing jokes",
}

export default function RootLayout({
    children,
  }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }