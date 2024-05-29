import React, { useEffect } from 'react';
import ThemeLocalization from "../locales/ThemeLocalization";
import ProgressBar from "../components/progress-bar/ProgressBar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body >
        <ThemeLocalization >
          <ProgressBar />
            {children}
        </ThemeLocalization>
      </body>
    </html>
  );
}

