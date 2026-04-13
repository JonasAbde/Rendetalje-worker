import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
      <p className="text-gray-600 mb-4">{service.shortDescription}</p>
      <Link
        to={`/services/${service.slug}`}
        className="inline-flex items-center text-brand font-medium hover:text-brand-dark"
      >
        Læs mere
        <ArrowRight className="w-4 h-4 ml-1" />
      </Link>
    </div>
  );
}
