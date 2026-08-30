import { motion } from 'framer-motion';
import './NetworkGraph.css';

// The recurring visual signature of the site: glowing nodes (people) linked by
// connection lines, arranged so the layout itself reads as
// Student -> Senior / Alumni / Group -> Community.
// Kept as plain SVG (no canvas, no heavy libs) so it stays fast.

const NODES = [
  { id: 'you', x: 260, y: 210, r: 15, kind: 'primary', label: 'You' },
  { id: 'senior1', x: 130, y: 110, r: 11, kind: 'accent' },
  { id: 'senior2', x: 400, y: 90, r: 10, kind: 'accent' },
  { id: 'alumni1', x: 90, y: 300, r: 10, kind: 'secondary' },
  { id: 'friend1', x: 340, y: 300, r: 9, kind: 'primary' },
  { id: 'friend2', x: 420, y: 230, r: 8, kind: 'primary' },
  { id: 'group1', x: 200, y: 60, r: 9, kind: 'secondary' },
  { id: 'group2', x: 470, y: 330, r: 8, kind: 'accent' },
  { id: 'far1', x: 40, y: 190, r: 6, kind: 'faint' },
  { id: 'far2', x: 490, y: 150, r: 6, kind: 'faint' },
];

const LINKS = [
  ['you', 'senior1'], ['you', 'senior2'], ['you', 'alumni1'], ['you', 'friend1'],
  ['you', 'friend2'], ['you', 'group1'], ['you', 'group2'], ['senior1', 'group1'],
  ['alumni1', 'far1'], ['senior2', 'far2'], ['friend1', 'group2'],
];

export default function NetworkGraph({ className = '' }) {
  return (
    <svg
      className={`network-graph ${className}`}
      viewBox="0 0 520 380"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="ng-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {LINKS.map(([a, b], i) => {
        const na = NODES.find((n) => n.id === a);
        const nb = NODES.find((n) => n.id === b);
        return (
          <motion.line
            key={`${a}-${b}`}
            x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
            className="network-graph__link"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 1.1, delay: i * 0.06, ease: 'easeOut' }}
          />
        );
      })}

      <circle cx="260" cy="210" r="60" fill="url(#ng-glow)" opacity="0.35" />

      {NODES.map((n, i) => (
        <motion.circle
          key={n.id}
          cx={n.x} cy={n.y} r={n.r}
          className={`network-graph__node network-graph__node--${n.kind}`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 + i * 0.05, ease: 'backOut' }}
        />
      ))}
    </svg>
  );
}
