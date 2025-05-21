import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  children: ReactNode;
  title: string;
  navLinks?: { label: string; href: string }[];
  footerLinks?: { label: string; href: string }[];
  socialLinks?: { icon: string; href: string }[];
  companyName: string;
};

export default function Layout({
  children,
  title,
  navLinks = [],
  footerLinks = [],
  socialLinks = [],
  companyName,
}: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white w-full">
      <Header title={title} links={navLinks} />
      
      <main className="flex-grow w-full">
        {children}
      </main>
      
      <Footer 
        companyName={companyName}
        links={footerLinks}
        socialLinks={socialLinks}
      />
    </div>
  );
} 