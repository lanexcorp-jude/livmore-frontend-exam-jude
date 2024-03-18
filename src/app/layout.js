import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ApolloWrapper } from "./utilities/ApolloWrapper";
import ProvidersComponent from "@/components/Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hamlet",
  description: "Generated for hamlet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <ApolloWrapper>
            <ProvidersComponent>{children}</ProvidersComponent>
          </ApolloWrapper>
        </AntdRegistry>
      </body>
    </html>
  );
}
