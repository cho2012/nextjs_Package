import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Log in",
};
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
