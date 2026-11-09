import type { Metadata } from "next";
import Link from "next/link";
import { Menu } from "lucide-react";
import "./globals.css";

export const metadata: Metadata = { title: { default: "Isaiah Boffill — Builder & Entrepreneur", template: "%s — Isaiah Boffill" }, description: "Student entrepreneur, software developer, and hardware builder in Miami.", openGraph: { title: "Isaiah Boffill — Building ideas into real technology", description: "AI, software, hardware, and entrepreneurship.", type: "website" } };

const links = [["/projects","Projects"],["/awards","Awards"],["/skills","Skills"],["/about","About"],["/contact","Contact"]];
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body suppressHydrationWarning><header className="nav"><Link className="brand" href="/"><span>IB</span> Isaiah Boffill</Link><nav>{links.map(([h,l])=><Link key={h} href={h}>{l}</Link>)}</nav><details className="mobile"><summary aria-label="Open menu"><Menu/></summary><div>{links.map(([h,l])=><Link key={h} href={h}>{l}</Link>)}</div></details></header><main>{children}</main><footer><div><Link className="brand" href="/"><span>IB</span> Isaiah Boffill</Link><p>Building useful technology at the intersection of software, hardware, and entrepreneurship.</p></div><div>{links.slice(0,4).map(([h,l])=><Link key={h} href={h}>{l}</Link>)}</div><small>© 2026 Isaiah Boffill · Miami, Florida</small></footer></body></html>
}
