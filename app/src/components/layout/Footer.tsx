type FooterProps = {
  companyName: string;
  links?: { label: string; href: string }[];
  socialLinks?: { icon: string; href: string }[];
};

export default function Footer({ companyName, links = [], socialLinks = [] }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white w-full">
      <div className="w-full py-12 px-6 sm:px-10 overflow-hidden">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          {links.map((link) => (
            <div key={link.href} className="px-5 py-2">
              <a href={link.href} className="text-base text-gray-400 hover:text-white transition-colors duration-150">
                {link.label}
              </a>
            </div>
          ))}
        </nav>
        
        <div className="mt-8 flex justify-center space-x-6">
          {socialLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-gray-400 hover:text-white transition-colors duration-150">
              <span className="sr-only">{link.icon}</span>
              <span className="text-2xl">{link.icon}</span>
            </a>
          ))}
        </div>
        
        <p className="mt-8 text-center text-base text-gray-400 border-t border-gray-800 pt-8">
          &copy; {currentYear} {companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
} 