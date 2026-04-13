import { faqItems } from '../content/faq';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AnimatedFAQ } from '../components/AnimatedFAQ';
import { PageTransition } from '../components/PageTransition';

export function FAQ() {
  return (
    <PageTransition>
      {/* Header */}
      <section className="bg-brand-50 dark:bg-gray-800 py-16">
        <div className="container-padding max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Ofte stillede spørgsmål</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">Find svar på de mest almindelige spørgsmål om vores rengøringsservices.</p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-padding max-w-4xl mx-auto">
          <AnimatedFAQ items={faqItems} />

          {/* Contact CTA */}
          <div className="mt-12 bg-gray-50 dark:bg-gray-800 p-8 rounded-xl text-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Har du andre spørgsmål?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Vi er klar til at hjælpe dig. Kontakt os for en uforpligtende snak.
            </p>
            <Link to="/kontakt" className="btn-primary">
              Kontakt os
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
