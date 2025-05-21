import Button from '../ui/Button';

export default function ButtonShowcase() {
  return (
    <div className="py-16 bg-white w-full">
      <div className="w-full px-6 sm:px-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Button Styles
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
            Various button styles for different use cases
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Primary Buttons</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary" size="sm">Small Button</Button>
              <Button variant="primary" size="md">Medium Button</Button>
              <Button variant="primary" size="lg">Large Button</Button>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Secondary Buttons</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="secondary" size="sm">Small Button</Button>
              <Button variant="secondary" size="md">Medium Button</Button>
              <Button variant="secondary" size="lg">Large Button</Button>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Outline Buttons</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="outline" size="sm">Small Button</Button>
              <Button variant="outline" size="md">Medium Button</Button>
              <Button variant="outline" size="lg">Large Button</Button>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Link Buttons</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary" size="md" href="#">Primary Link</Button>
              <Button variant="secondary" size="md" href="#">Secondary Link</Button>
              <Button variant="outline" size="md" href="#">Outline Link</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 