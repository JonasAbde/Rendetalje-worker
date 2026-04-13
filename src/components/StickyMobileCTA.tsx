import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function StickyMobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 p-4 shadow-lg">
      <Link to="/kontakt" className="btn-primary w-full">
        Få et tilbud
        <ArrowRight className="w-5 h-5 ml-2" />
      </Link>
    </div>
  );
}
