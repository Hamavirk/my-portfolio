import { motion } from 'framer-motion';
import { BookOpen, ArrowRight } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'Mastering WordPress Theme Customization with Elementor',
    excerpt:
      'A practical guide to building custom WordPress layouts using Elementor — from theme overrides to responsive widget styling.',
    tag: 'WordPress',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Optimizing Magento 2 Frontend for 40% Less UI Bugs',
    excerpt:
      'How structured CSS audits, layout fixes, and mobile-first testing dramatically reduce frontend bugs in Magento stores.',
    tag: 'Magento 2',
    readTime: '6 min read',
  },
  {
    id: 3,
    title: 'Why Tailwind CSS is a Game Changer for Responsive Design',
    excerpt:
      'Exploring utility-first CSS workflows that speed up responsive development and keep UI consistent across breakpoints.',
    tag: 'Frontend',
    readTime: '4 min read',
  },
];

const tagColors: Record<string, string> = {
  WordPress: 'bg-blue-500/10 text-blue-400',
  'Magento 2': 'bg-orange-500/10 text-orange-400',
  Frontend: 'bg-accent-500/10 text-accent-500',
};

export default function Insights() {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
  };

  return (
    <section id="insights" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <p className="text-accent-500 text-sm font-semibold uppercase tracking-widest mb-3">Blog</p>
          <h2 className="section-heading">Expertise &amp; Insights</h2>
          <p className="section-subheading mx-auto max-w-xl">
            Thoughts on WordPress, Magento frontend, and modern responsive development
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-3 gap-6"
        >
          {articles.map((article) => (
            <motion.article key={article.id} variants={item}>
              <div className="card p-6 h-full flex flex-col group cursor-default">
                <div className="w-10 h-10 rounded-xl bg-accent-500/10 text-accent-500 flex items-center justify-center mb-5">
                  <BookOpen size={18} />
                </div>

                <span className={`self-start px-2.5 py-1 text-xs rounded-md font-medium mb-4 ${tagColors[article.tag]}`}>
                  {article.tag}
                </span>

                <h3 className="text-white font-bold text-base mb-3 font-heading leading-snug group-hover:text-accent-500 transition-colors">
                  {article.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-[#252545]">
                  <span className="text-slate-500 text-xs">{article.readTime}</span>
                  <span className="inline-flex items-center gap-1 text-accent-500 text-xs font-semibold opacity-60">
                    Coming Soon
                    <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
