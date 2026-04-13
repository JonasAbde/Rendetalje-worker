import { termsContent } from '../content/legal';

export function Terms() {
  return (
    <>
      {/* Header */}
      <section className="bg-brand-50 py-16">
        <div className="container-padding max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{termsContent.title}</h1>
          <p className="text-gray-600">Senest opdateret: {termsContent.lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-padding max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {termsContent.sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h2>
                <p className="text-gray-600 whitespace-pre-line">{section.content}</p>
              </div>
            ))}

            <p className="text-gray-600 mt-8">{termsContent.contact}</p>
          </div>
        </div>
      </section>
    </>
  );
}
