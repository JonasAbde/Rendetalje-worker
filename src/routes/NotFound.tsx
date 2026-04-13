import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

export function NotFound() {
  return (
    <section className="section-padding bg-white min-h-[60vh] flex items-center">
      <div className="container-padding max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <span className="text-8xl font-bold text-brand-50">404</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Siden blev ikke fundet
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
          Den side du leder efter eksisterer ikke eller er blevet flyttet.
          Tjek URL'en eller gå tilbage til forsiden.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary">
            <Home className="w-5 h-5 mr-2" />
            Gå til forsiden
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-secondary"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Gå tilbage
          </button>
        </div>
      </div>
    </section>
  );
}
