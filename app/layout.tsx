import {
  ClientOnly,
  LoginModal,
  Navbar,
  RegisterModal,
  RentModal,
  SearchModal,
} from "@/components";
import "./globals.css";
import { Nunito } from "next/font/google";
import ToasterProvider from "@/providers/ToasterProvider";
import { getCurrentUser } from "@/utils";

const font = Nunito({
  subsets: ["latin"],
});

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <LoginModal />
          <RentModal />
          <SearchModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
