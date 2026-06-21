import { motion } from 'framer-motion';
import { ExternalLink, ShoppingBag, Layout, Globe } from 'lucide-react';

const wordpressProjects = [
  {
    title: 'K2 Swift Removals',
    url: 'https://k2swiftremovals.com/',
    image: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=600&h=350&fit=crop',
    desc: 'High-converting WordPress landing pages with lead generation and local SEO.',
  },
  {
    title: 'Mathyo Tyres',
    url: 'https://mathyotyres.com/',
    image: 'https://images.pexels.com/photos/244553/pexels-photo-244553.jpeg?auto=compress&cs=tinysrgb&w=600&h=350&fit=crop',
    desc: 'Premium luxury brand site built from scratch on WordPress with enquiry system.',
  },
];

const highlights = [
  { icon: <ShoppingBag size={18} />, text: '10+ WooCommerce stores managed' },
  { icon: <Layout size={18} />, text: 'Elementor page builder expertise' },
  { icon: <Globe size={18} />, text: 'Theme customization & plugin setup' },
];

export default function WordPressExcellence() {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
  };

  return (
    <section id="wordpress" className="py-24 bg-[#10101a]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <p className="text-accent-500 text-sm font-semibold uppercase tracking-widest mb-3">WordPress</p>
          <h2 className="section-heading">WordPress Excellence</h2>
          <p className="section-subheading mx-auto max-w-2xl">
            Specialized in WordPress &amp; WooCommerce — from Elementor page building to full store setup and theme customization
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid lg:grid-cols-2 gap-8 items-center mb-12"
        >
          <motion.div variants={item}>
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              I have managed <span className="text-white font-semibold">10+ WooCommerce stores</span>, delivering
              custom themes, Elementor layouts, plugin configuration, and conversion-focused storefronts for clients
              worldwide.
            </p>
            <div className="flex flex-col gap-3">
              {highlights.map((h) => (
                <div
                  key={h.text}
                  className="flex items-center gap-3 p-4 bg-[#16162a] border border-[#252545] rounded-xl hover:border-accent-500/30 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent-500/10 text-accent-500 flex items-center justify-center flex-shrink-0">
                    {h.icon}
                  </div>
                  <span className="text-slate-300 text-sm">{h.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item} className="grid sm:grid-cols-2 gap-4">
            {wordpressProjects.map((project) => (
              <a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card group block overflow-hidden"
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16162a] to-transparent" />
                  <span className="absolute top-2 right-2 px-2 py-0.5 text-xs rounded-md font-medium bg-blue-500/10 text-blue-400">
                    WordPress
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold text-sm mb-1 font-heading flex items-center gap-1">
                    {project.title}
                    <ExternalLink size={12} className="text-accent-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{project.desc}</p>
                </div>
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
