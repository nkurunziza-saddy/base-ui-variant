import {
  APP_DESCRIPTION,
  APP_NAME,
  AUTHOR_URL,
  GITHUB_URL,
  TWITTER_URL,
} from "@/lib/configs";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GithubIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/registry/new-york/libs/utils";
import { Button } from "@/registry/new-york/ui/button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative text-foreground/85 flex min-h-screen flex-col overflow-hidden bg-secondary/40 supports-[overflow:clip]:overflow-clip dark:bg-background">
          <header className="border-b border-dashed bg-card dark:bg-card/50">
            <div className="cpx container flex h-14 items-center justify-between py-2">
              <div className="flex gap-10">
                <Link className="" href="/">
                  <span className="font-medium">UI</span>
                </Link>
                <div>
                  <Link className="" href="/blocks">
                    <span className="text-sm">Blocks</span>
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  render={
                    <Link
                      aria-label="x/twitter"
                      href={TWITTER_URL}
                      target="_blank"
                    />
                  }
                  size="icon-sm"
                  variant="outline"
                >
                  <XIcon />
                </Button>
                <Button
                  render={
                    <Link
                      aria-label="github"
                      href={GITHUB_URL}
                      target="_blank"
                    />
                  }
                  size="icon-sm"
                  variant="outline"
                >
                  <GithubIcon />
                </Button>
              </div>
            </div>
          </header>
          <main
            className={cn(
              "container relative grow",
              "before:-inset-y-20 before:-left-px before:absolute before:z-1 before:border-border before:border-dashed xl:before:border-l",
              "after:-inset-y-20 after:-right-px after:absolute after:z-1 after:border-border after:border-dashed xl:after:border-r"
            )}
          >
            {children}
          </main>
          <footer className="border-t border-dashed bg-card dark:bg-card/50">
            <div className="cpx container flex items-center justify-between py-6 text-xs md:text-sm">
              <p className="flex items-center gap-1 text-muted-foreground">
                <span>Built by</span>
                <Link
                  aria-label="x/twitter"
                  className="font-medium text-foreground/90 hover:text-foreground hover:underline"
                  href={AUTHOR_URL}
                  rel="noreferrer"
                  target="_blank"
                >
                  Nkurunziza Saddy
                </Link>
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
