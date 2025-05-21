import Layout from './components/layout/Layout'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import Testimonials from './components/sections/Testimonials'

function App() {
  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Features', href: '#features' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  const footerLinks = [
    { label: 'About Us', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Privacy Policy', href: '#' },
  ]

  const socialLinks = [
    { icon: '𝕏', href: 'https://twitter.com' },
    { icon: 'in', href: 'https://linkedin.com' },
    { icon: 'f', href: 'https://facebook.com' },
  ]

  const features = [
    {
      title: 'Responsive Design',
      description: 'Looks great on any device, from mobile to desktop.',
      icon: '📱',
    },
    {
      title: 'Modern Stack',
      description: 'Built with Bun, Vite, React, TypeScript and Tailwind CSS.',
      icon: '🚀',
    },
    {
      title: 'Customizable',
      description: 'Easily customize to match your brand and needs.',
      icon: '🎨',
    },
    {
      title: 'Fast Performance',
      description: 'Optimized for speed and the best user experience.',
      icon: '⚡',
    },
    {
      title: 'SEO Friendly',
      description: 'Built with best practices for search engine optimization.',
      icon: '🔍',
    },
    {
      title: 'Easy Deployment',
      description: 'Simple to deploy to your favorite hosting platform.',
      icon: '☁️',
    },
  ]

  const testimonials = [
    {
      content: 'This template saved me countless hours of development time. The components are well-designed and easy to customize.',
      author: 'Sarah Johnson',
      role: 'Developer',
      company: 'TechCorp',
    },
    {
      content: 'I used this template for our product launch and it exceeded all expectations. Clean, modern, and incredibly fast.',
      author: 'Michael Chen',
      role: 'Founder',
      company: 'StartUp Inc.',
    },
    {
      content: 'The best landing page template I\'ve ever used. We were able to deploy our site in record time.',
      author: 'Emma Rodriguez',
      role: 'Marketing Director',
      company: 'GrowthCo',
    },
  ]

  return (
    <Layout 
      title="SiteTemplate"
      navLinks={navLinks}
      footerLinks={footerLinks}
      socialLinks={socialLinks}
      companyName="YourCompany, Inc."
    >
      <Hero
        title="Welcome to Your New Site"
        subtitle="A modern, responsive landing page template built with React, TypeScript, and Tailwind CSS."
        ctaText="Get Started"
        ctaLink="#features"
        secondaryCtaText="Learn More"
        secondaryCtaLink="#testimonials"
      />

      <div id="features">
        <Features
          title="Features"
          subtitle="Everything you need to build a great landing page"
          features={features}
        />
      </div>

      <div id="testimonials">
        <Testimonials
          title="Testimonials"
          subtitle="What our users are saying"
          testimonials={testimonials}
        />
      </div>
    </Layout>
  )
}

export default App
