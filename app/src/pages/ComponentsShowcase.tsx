import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

export default function ComponentsShowcase() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Components</h1>
          <Link to="/" className="text-indigo-600 hover:text-indigo-800">
            Back to Home
          </Link>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto py-12 px-6">
        {/* Button Showcase */}
        <section className="mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
            Button Styles
          </h2>

          <div className="space-y-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-6">Primary Buttons</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="primary" size="sm">Small Button</Button>
                <Button variant="primary" size="md">Medium Button</Button>
                <Button variant="primary" size="lg">Large Button</Button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-6">Secondary Buttons</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="secondary" size="sm">Small Button</Button>
                <Button variant="secondary" size="md">Medium Button</Button>
                <Button variant="secondary" size="lg">Large Button</Button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-6">Outline Buttons</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="outline" size="sm">Small Button</Button>
                <Button variant="outline" size="md">Medium Button</Button>
                <Button variant="outline" size="lg">Large Button</Button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-6">Link Buttons</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="primary" size="md" href="#">Primary Link</Button>
                <Button variant="secondary" size="md" href="#">Secondary Link</Button>
                <Button variant="outline" size="md" href="#">Outline Link</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Add more component showcases here */}
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600">
            UI Components Library for the Site Template
          </p>
        </div>
      </footer>
    </div>
  );
} 