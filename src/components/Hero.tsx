import { motion } from 'framer-motion';
import { Download, ArrowRight, ExternalLink } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: "easeOut" as const },
});

const stats = [
  { value: '3', label: 'Years of Experience' },
  { value: '13', label: 'Successful Projects Delivered' },
  { value: '100%', label: 'Client Satisfaction' },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(14,165,233,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.5) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div {...fadeUp(0.1)} className="mb-5">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-500/10 border border-accent-500/25 rounded-full text-accent-500 text-xs font-semibold tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse" />
                Available for Work
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.2)}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5"
            >
              Senior Frontend &amp;
              <br />
              <span className="text-accent-500">WordPress</span> Developer
            </motion.h1>

            <motion.p
              {...fadeUp(0.3)}
              className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Expert in HTML5, CSS3, and JavaScript — building responsive, high-performance
              websites with WordPress (Elementor &amp; WooCommerce) and Magento 2 frontend
              development for global clients.
            </motion.p>

            <motion.div
              {...fadeUp(0.4)}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12"
            >
              <a
                href="/hamza-virk-cv.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Download size={17} />
                Download CV
              </a>
              <a href="#projects" className="btn-outline">
                View Projects
                <ArrowRight size={17} />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              {...fadeUp(0.5)}
              className="flex gap-8 justify-center lg:justify-start"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-white font-heading">{s.value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — profile card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" as const }}
            className="flex-shrink-0"
          >
            <div className="relative w-72 lg:w-80">
              {/* Card */}
              <div className="card p-6 text-center">
                {/* Avatar */}
                <div className="w-24 h-24 mx-auto mb-4 rounded-2xl overflow-hidden border-2 border-accent-500/30 shadow-lg shadow-accent-500/20">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                    alt="Hamza Virk"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-white font-bold text-xl mb-1 font-heading">Hamza Virk</h2>
                <p className="text-accent-500 text-sm font-medium mb-3">Senior Frontend &amp; WordPress Developer</p>
                <div className="flex items-center justify-center gap-2 text-slate-500 text-xs mb-5">
                  <span className="w-1 h-1 rounded-full bg-slate-500" />
                  <span>Asquare Tec</span>
                  <a
                    href="https://asquaretec.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-500 hover:text-accent-400 transition-colors inline-flex items-center gap-0.5"
                  >
                    <ExternalLink size={11} />
                  </a>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {['WordPress', 'HTML5/CSS3', 'JavaScript', 'Magento 2'].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-[#252545] text-slate-300 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-3 -right-3 bg-[#16162a] border border-[#252545] rounded-xl px-3 py-2 shadow-xl">
                <div className="text-xs text-slate-400">Currently at</div>
                <div className="text-sm font-semibold text-accent-500">Asquare Tec</div>
              </div>
              <div className="absolute -bottom-3 -left-3 bg-[#16162a] border border-accent-500/30 rounded-xl px-3 py-2 shadow-xl">
                <div className="text-xs text-accent-500 font-semibold">Open to Work</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
        <span className="text-xs tracking-wider uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-slate-600 to-transparent" />
      </div>
    </section>
  );
}
