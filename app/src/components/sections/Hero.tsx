import { scrollToElement } from '../../utils/scroll';
import Button from '../ui/Button';

type HeroProps = {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
};

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaLink = '#',
  secondaryCtaText,
  secondaryCtaLink = '#',
  backgroundImage,
}: HeroProps) {
  const bgStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : {};

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#') && href.length > 1) {
      e.preventDefault();
      scrollToElement(href.substring(1));
    }
  };

  return (
    <div 
      className="relative bg-indigo-900 text-white py-32 overflow-hidden w-full"
      style={bgStyle}
    >
      {!backgroundImage && (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-purple-900"></div>
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E\")",
              backgroundSize: "60px 60px"
            }}
          ></div>
        </>
      )}
      
      {backgroundImage && <div className="absolute inset-0 bg-black opacity-50"></div>}
      
      <div className="relative w-full px-6 sm:px-10 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">
          {title}
        </h1>
        
        {subtitle && (
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-100">
            {subtitle}
          </p>
        )}
        
        <div className="mt-10 max-w-md mx-auto sm:flex sm:justify-center md:mt-12 gap-4">
          {ctaText && (
            <Button 
              href={ctaLink}
              onClick={(e) => handleClick(e as React.MouseEvent<HTMLAnchorElement>, ctaLink)}
              variant="primary"
              size="lg"
            >
              {ctaText}
            </Button>
          )}
          
          {secondaryCtaText && (
            <Button 
              href={secondaryCtaLink}
              onClick={(e) => handleClick(e as React.MouseEvent<HTMLAnchorElement>, secondaryCtaLink)}
              variant="secondary"
              size="lg"
            >
              {secondaryCtaText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
} 