import React from "react"; // VSCode throws an error here

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html>
    <body>{children}</body>
  </html>
);

export default RootLayout;
