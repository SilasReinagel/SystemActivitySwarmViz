type Feature = {
  title: string;
  description: string;
  icon?: string;
};

type FeaturesProps = {
  title?: string;
  subtitle?: string;
  features: Feature[];
};

export default function Features({ title, subtitle, features }: FeaturesProps) {
  return (
    <div className="py-24 bg-gray-50 w-full">
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

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex flex-col p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                {feature.icon && (
                  <div className="flex-shrink-0 mb-5">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <span className="text-2xl">{feature.icon}</span>
                    </div>
                  </div>
                )}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="mt-2 text-base text-gray-500 flex-grow">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 