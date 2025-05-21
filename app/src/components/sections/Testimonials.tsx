type Testimonial = {
  content: string;
  author: string;
  role?: string;
  company?: string;
  avatar?: string;
};

type TestimonialsProps = {
  title?: string;
  subtitle?: string;
  testimonials: Testimonial[];
};

export default function Testimonials({ title, subtitle, testimonials }: TestimonialsProps) {
  return (
    <div className="bg-white py-24 w-full">
      <div className="w-full px-6 sm:px-10">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center mb-6">
                {testimonial.avatar ? (
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="h-12 w-12 rounded-full mr-4" 
                  />
                ) : (
                  <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                    <span className="text-indigo-500 text-xl font-bold">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <h4 className="text-lg font-medium text-gray-900">{testimonial.author}</h4>
                  {(testimonial.role || testimonial.company) && (
                    <p className="text-sm text-gray-500">
                      {testimonial.role}
                      {testimonial.role && testimonial.company && ', '}
                      {testimonial.company}
                    </p>
                  )}
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 