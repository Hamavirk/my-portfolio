import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Briefcase, Code as Code2, Zap } from 'lucide-react';

function SpeedGauge({ value, label, gradientId }: { value: number; label: string; gradientId: string }) {
  const radius = 52;
  const stroke = 7;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <svg width="120" height="120" viewBox="0 0 120 120" aria-label={`${label}: ${value}%`}>
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00e5ff" />
            <stop offset="100%" stopColor="#33ebff" />
          </linearGradient>
        </defs>
        <circle cx="60" cy="60" r={radius} fill="none" stroke="#252545" strokeWidth={stroke} />
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 60 60)"
        />
        <text x="60" y="56" textAnchor="middle" fill="#ffffff" fontSize="20" fontWeight="700" fontFamily="Syne, system-ui, sans-serif">
          {value}%
        </text>
        <text x="60" y="74" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="Inter, system-ui, sans-serif">
          {label}
        </text>
      </svg>
    </div>
  );
}

const performanceGauges = [
  { value: 98, label: 'Speed', gradientId: 'gauge-speed' },
  { value: 95, label: 'SEO', gradientId: 'gauge-seo' },
  { value: 100, label: 'Best Practices', gradientId: 'gauge-bp' },
];

const highlights = [
  {
    icon: <Briefcase size={18} />,
    title: 'WordPress & WooCommerce',
    desc: 'Theme customization, Elementor page building, WooCommerce setup, and plugin configuration across 10+ live stores.',
    performance: false,
  },
  {
    icon: <Code2 size={18} />,
    title: 'Frontend Expertise',
    desc: 'HTML5, CSS3, JavaScript (ES6), Bootstrap, and Tailwind CSS — delivering responsive, cross-browser UI for every project.',
    performance: false,
  },
  {
    icon: <Zap size={18} />,
    title: 'Performance First',
    desc: 'Obsessed with page speed, mobile responsiveness, and delivering smooth experiences that drive conversions.',
    performance: true,
  },
];

const skillCategories = [
  {
    title: 'Frontend Skills',
    skills: ['HTML5 & CSS3', 'JavaScript (ES6)', 'Responsive Design', 'Bootstrap', 'Tailwind CSS', 'Cross-Browser UI'],
  },
  {
    title: 'WordPress Skills',
    skills: ['Theme Customization', 'WooCommerce Setup', 'Elementor Page Builder', 'Plugin Configuration'],
  },
  {
    title: 'Magento Skills',
    skills: ['Frontend Theme Changes', 'CSS / Layout Fixes', 'Mobile Responsiveness'],
  },
  {
    title: 'Other Skills',
    skills: ['PHP (Basic)', 'Laravel (Learning)', 'MySQL', 'Webflow', 'Git'],
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
  };

  return (
    <>
      <section id="about" className="py-24 bg-[#0a0a0f]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            <motion.div variants={item} className="text-center mb-16">
              <p className="text-accent-500 text-sm font-semibold uppercase tracking-widest mb-3">About Me</p>
              <h2 className="section-heading">Senior Frontend &amp; WordPress Developer</h2>
              <p className="section-subheading max-w-2xl mx-auto">
                Crafting responsive, conversion-focused websites for global clients
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={item}>
                <p className="text-slate-300 text-base leading-relaxed mb-5">
                  I&apos;m <span className="text-white font-semibold">Hamza Virk</span>, a Senior Frontend &amp; WordPress
                  Developer with hands-on expertise in HTML5, CSS3, JavaScript, WordPress (Elementor &amp; WooCommerce),
                  and Magento 2 frontend development for international clients.
                </p>
                <p className="text-slate-400 text-base leading-relaxed mb-5">
                  Currently working with{' '}
                  <a
                    href="https://asquaretec.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-500 hover:text-accent-400 font-medium inline-flex items-center gap-1 transition-colors"
                  >
                    Asquare Tec <ExternalLink size={13} />
                  </a>
                  , where I build and optimize WordPress/WooCommerce stores, customize Magento 2 frontends, and deliver
                  responsive UI across Pakistan, Brazil, Saudi Arabia, and beyond.
                </p>
                <p className="text-slate-400 text-base leading-relaxed">
                  My specialty is turning complex frontend challenges into clean, fast, and mobile-ready solutions —
                  from Elementor page builds to Magento layout fixes and cross-browser UI polish.
                </p>
              </motion.div>

              <motion.div variants={item} className="flex flex-col gap-4">
                {highlights.map((h) => (
                  <div
                    key={h.title}
                    className="flex gap-4 p-5 bg-[#16162a] border border-[#252545] rounded-xl
                    hover:border-accent-500/40 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-500/10 text-accent-500 flex items-center justify-center group-hover:bg-accent-500/20 transition-colors">
                      {h.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-1">{h.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{h.desc}</p>
                      {h.performance && (
                        <div className="flex justify-around mt-5 pt-5 border-t border-[#252545]">
                          {performanceGauges.map((g) => (
                            <SpeedGauge key={g.label} value={g.value} label={g.label} gradientId={g.gradientId} />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="skills" className="py-24 bg-[#10101a]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
            className="text-center mb-14"
          >
            <p className="text-accent-500 text-sm font-semibold uppercase tracking-widest mb-3">Skills</p>
            <h2 className="section-heading">Technical Expertise</h2>
            <p className="section-subheading">Skills grouped by specialization — directly from my professional CV</p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={item}
                className="p-6 bg-[#16162a] border border-[#252545] rounded-xl hover:border-accent-500/30 transition-colors"
              >
                <h3 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-badge text-xs py-1.5 px-3">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
