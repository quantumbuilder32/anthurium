import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav/Nav";
import TopSection from "@/components/topSection/TopSection";
import { servicesData } from "@/lib/servicesData";
import { Toaster } from "react-hot-toast";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anthurium Software Solutions",
  description: "Generated by the best",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />

        <TopSection />

        <Nav menuInfoArr={[
          {
            title: "Home",
            link: "/",
            // subMenu: [{ link: "", title: "sup", subSubMenu: [{ link: "", title: "yaya" }] }]
          },
          {
            title: "Services",
            link: "/services",
            subMenu: servicesData.map(eachService => {
              return { link: eachService.link, title: eachService.name }
            })
          }, {
            title: "Testimonials",
            link: "/testimonials",
            // subMenu: [{ link: "", title: "sup", subSubMenu: [{ link: "", title: "yaya" }] }]


          },
          {
            title: "Blog",
            link: "/blog",
            // subMenu: [{ link: "", title: "sup", subSubMenu: [{ link: "", title: "yaya" }] }]

          },
          {
            title: "Portfolio",
            link: "/portfolio",
            // subMenu: [{ link: "", title: "sup", subSubMenu: [{ link: "", title: "yaya" }] }]

          },
          {
            title: "FAQ",
            link: "/FAQ",
            // subMenu: [{ link: "", title: "sup", subSubMenu: [{ link: "", title: "yaya" }] }]

          },
          {
            title: "Contact",
            link: "/contact",
            // subMenu: [{ link: "", title: "sup", subSubMenu: [{ link: "", title: "yaya" }] }]

          },
        ]}
        />
        {children}
      </body>
    </html>
  );
}
