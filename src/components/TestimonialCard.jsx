import { Quote } from 'lucide-react';
import './TestimonialCard.css';

export default function TestimonialCard({ name, role, quote }) {
  return (
    <div className="testimonial-card">
      <Quote size={22} className="testimonial-card__mark" />
      <p className="testimonial-card__quote">{quote}</p>
      <div className="testimonial-card__person">
        <div className="testimonial-card__avatar">{name.charAt(0)}</div>
        <div>
          <p className="testimonial-card__name">{name}</p>
          <p className="testimonial-card__role">{role}</p>
        </div>
      </div>
    </div>
  );
}
