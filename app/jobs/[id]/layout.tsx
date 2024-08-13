"use client";
import { Provider } from "react-redux";
import store from "@/app/service/store";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider store = {store}>
        <body >{children}</body>
      </Provider>
    </html>
  );
}
