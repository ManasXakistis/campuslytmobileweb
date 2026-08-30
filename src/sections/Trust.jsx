import { ShieldCheck } from 'lucide-react';
import { trust } from '../content/websiteContent';
import SectionHeading from '../components/SectionHeading';
import './Trust.css';

export default function Trust() {
  return (
    <section className="section trust">
      <div className="container">
        <SectionHeading eyebrow="Trust & privacy" title={trust.heading} />
        <div className="trust__grid">
          {trust.points.map((p) => (
            <div className="trust__item" key={p.title}>
              <ShieldCheck size={19} />
              <div>
                <h4>{p.title}</h4>
                <p>{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
