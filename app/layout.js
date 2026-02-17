import Layout from "@/Component/Layout/Layout";
import "./globals.css";
export const metadata = {
  title: "گلستان",
   icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body>
        <Layout> {children} </Layout>
      </body>
    </html>
  );
}
