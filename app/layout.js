
import Layout from "@/Component/Layout/Layout";
import "./globals.css";




export default function RootLayout({ children }) {
  return (
    <html lang="en"  dir="rtl">
      <body>
        
       <Layout> {children} </Layout>
      
      </body>
    </html>
  );
}
