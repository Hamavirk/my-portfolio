import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink, ShoppingCart, Globe, Pizza, Shirt as ShirtIcon,
  Store, Hotel, Stethoscope, Truck, Tv, Car, School, BookOpen, X,
  AlertCircle, CheckCircle2,
} from 'lucide-react';

type Project = {
  id: number;
  title: string;
  url: string;
  icon: React.ReactNode;
  image: string;
  tags: string[];
  tech: string;
  problem: string;
  solution: string;
  highlights: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Nestmate Platform',
    url: 'https://nestmate.ssquare.pk/',
    icon: <Hotel size={20} />,
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600&h=350&fit=crop',
    tags: ['Laravel', 'Hotel Booking', 'Full Build'],
    tech: 'Laravel',
    problem: 'Custom booking needs for a hotel platform with no off-the-shelf solution.',
    solution: 'Built full backend & logic — room listings, availability calendar, booking management, and payment flows.',
    highlights: ['Full backend architecture', 'Booking management system', 'Availability calendar', 'Payment integration'],
  },
  {
    id: 2,
    title: 'RTT Shop',
    url: 'https://rttshop.com.br/',
    icon: <Store size={20} />,
    image: 'https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=600&h=350&fit=crop',
    tags: ['Magento 2', 'eCommerce', 'Checkout'],
    tech: 'Magento 2',
    problem: 'Complex checkout flow causing cart abandonment on a construction materials store.',
    solution: 'Optimized backend logic — streamlined checkout steps, custom pricing rules, and B2B ordering flows.',
    highlights: ['Checkout optimization', 'Custom pricing rules', 'B2B catalog access', 'Brazilian localization'],
  },
  {
    id: 3,
    title: 'RTT Quote',
    url: 'https://rttquote.mage2.com.br/',
    icon: <ShoppingCart size={20} />,
    image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600&h=350&fit=crop',
    tags: ['Magento 2', 'Redesign', 'Bug Fixes'],
    tech: 'Magento 2',
    problem: 'Design bugs and broken layouts across core store pages.',
    solution: 'Full UI redesign — rebuilt product, category, and cart pages with modern, conversion-focused layouts.',
    highlights: ['Core page redesign', 'Critical bug fixes', 'UX improvements', 'Layout consistency'],
  },
  {
    id: 4,
    title: 'Tecla Center',
    url: 'https://www2.teclacenter.com.br/',
    icon: <Globe size={20} />,
    image: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=600&h=350&fit=crop',
    tags: ['Magento 2', 'Music Store', 'Custom Styling'],
    tech: 'Magento 2',
    problem: 'Custom styling requirements that default Magento themes could not deliver.',
    solution: 'Delivered heavy custom CSS/JS — brand-specific UI components, product pages, and category layouts.',
    highlights: ['Custom theme styling', 'Brand UI components', 'Product page enhancements', 'Category improvements'],
  },
  {
    id: 5,
    title: 'RxMeds Health',
    url: 'https://staging.rxmeds.is/',
    icon: <Stethoscope size={20} />,
    image: 'https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=600&h=350&fit=crop',
    tags: ['Laravel', 'Healthcare', 'Full Build'],
    tech: 'Laravel',
    problem: 'Healthcare management with no unified system for patients, doctors, and prescriptions.',
    solution: 'Built end-to-end modules — patient profiles, prescription management, doctor dashboards, and secure records.',
    highlights: ['Prescription management', 'Patient & doctor dashboards', 'Secure health records', 'Appointment scheduling'],
  },
  {
    id: 6,
    title: 'Chobbys',
    url: 'https://chobbys.mage2.com.br/',
    icon: <Store size={20} />,
    image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=600&h=350&fit=crop',
    tags: ['Magento 2', 'Toy Store', 'Checkout'],
    tech: 'Magento 2',
    problem: 'Checkout friction causing high cart abandonment on a toy retail store.',
    solution: 'Improved UI flow — simplified checkout steps, fixed product display issues, and inline validation.',
    highlights: ['Checkout funnel optimization', 'Product display fixes', 'Customer experience improvements', 'Bug resolution'],
  },
  {
    id: 7,
    title: 'Gozaky',
    url: 'https://gozaky.sa/',
    icon: <ShoppingCart size={20} />,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=350&fit=crop',
    tags: ['Magento 2', 'Bakery', 'Registration'],
    tech: 'Magento 2',
    problem: 'Registration issues with high sign-up abandonment on a Saudi bakery platform.',
    solution: 'Redesigned forms and product pages — single-page registration, mobile-first layout, and Arabic RTL styling.',
    highlights: ['Registration flow redesign', 'Product page improvements', 'Checkout enhancements', 'Arabic localization'],
  },
  {
    id: 8,
    title: 'Pizza Online Pakistan',
    url: 'https://pizzaonlinepakistan.com/',
    icon: <Pizza size={20} />,
    image: 'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=600&h=350&fit=crop',
    tags: ['Magento 2', 'Full Build', 'Delivery'],
    tech: 'Magento 2',
    problem: 'Slow food delivery platform with no existing system to handle online pizza orders.',
    solution: 'Scratch build with high performance — custom ordering, delivery zones, time-slot scheduling, and mobile checkout.',
    highlights: ['Full platform build', 'Custom delivery zones', 'Mobile-optimized ordering', 'Performance tuning'],
  },
  {
    id: 9,
    title: 'TeesByMe',
    url: 'https://teesbyme.com/',
    icon: <ShirtIcon size={20} />,
    image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=600&h=350&fit=crop',
    tags: ['Magento 2', 'Clothing', 'Swatches'],
    tech: 'Magento 2',
    problem: 'Broken swatches showing incorrect colors and sizes on custom-print clothing products.',
    solution: 'Fixed rendering and design — accurate color swatch previews, full storefront redesign, and category UX rebuild.',
    highlights: ['Custom swatch rendering', 'Full design overhaul', 'Product page improvements', 'Category UX enhancements'],
  },
  {
    id: 10,
    title: 'K2 Swift Removals',
    url: 'https://k2swiftremovals.com/',
    icon: <Truck size={20} />,
    image: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=600&h=350&fit=crop',
    tags: ['WordPress', 'Landing Pages', 'Lead Gen'],
    tech: 'WordPress',
    problem: 'Poor landing pages failing to generate local removal service inquiries.',
    solution: 'Built high-converting pages — service area landing pages, lead forms, local SEO, and mobile optimization.',
    highlights: ['Service area landing pages', 'Lead generation forms', 'Local SEO optimization', 'Mobile-responsive design'],
  },
  {
    id: 11,
    title: 'Plantec',
    url: 'https://www.plantec.com/',
    icon: <Tv size={20} />,
    image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=600&h=350&fit=crop',
    tags: ['Magento 2', 'CCTV', 'Responsiveness'],
    tech: 'Magento 2',
    problem: 'Responsiveness issues causing poor usability on mobile and tablet devices.',
    solution: 'Fixed layout for Mobile/Tablet — full responsiveness audit, fluid grid components, and cross-browser testing.',
    highlights: ['Full responsiveness audit', 'Mobile layout fixes', 'Tablet breakpoint improvements', 'Cross-browser testing'],
  },
  {
    id: 12,
    title: 'Mathyo Tyres',
    url: 'https://mathyotyres.com/',
    image: 'https://images.pexels.com/photos/244553/pexels-photo-244553.jpeg?auto=compress&cs=tinysrgb&w=600&h=350&fit=crop',
    icon: <Car size={20} />,
    tags: ['WordPress', 'Luxury Brand', 'Full Build'],
    tech: 'WordPress',
    problem: 'Brand identity lacking a premium digital presence to match a luxury tyre positioning.',
    solution: 'Complete scratch build — bespoke WordPress theme, cinematic product showcases, and enquiry management.',
    highlights: ['Full brand build', 'Premium design aesthetic', 'Product showcase pages', 'Enquiry management system'],
  },
  {
    id: 13,
    title: 'School Management System',
    url: 'https://school.asquaretec.com/',
    icon: <School size={20} />,
    image: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=600&h=350&fit=crop',
    tags: ['Laravel', 'Full System', 'Finance'],
    tech: 'Laravel',
    problem: 'Data tracking gaps across student records, attendance, and school finances.',
    solution: 'Built finance & attendance modules — enrollment, class scheduling, fee collection, payroll, and reporting.',
    highlights: ['Student & staff management', 'Attendance tracking', 'Fee & payroll modules', 'Report generation'],
  },
];

const techColors: Record<string, string> = {
  'Magento 2': 'bg-orange-500/10 text-orange-400',
  'Laravel': 'bg-rose-500/10 text-rose-400',
  'WordPress': 'bg-blue-500/10 text-blue-400',
};

function CaseStudyModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="relative bg-[#16162a] border border-[#252545] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-48 overflow-hidden rounded-t-2xl">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#16162a] via-[#16162a]/40 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-black/50 backdrop-blur-sm rounded-lg flex items-center justify-center text-white/80 hover:text-white hover:bg-black/70 transition-all"
          >
            <X size={16} />
          </button>
          <div className="absolute bottom-4 left-5 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-accent-500/10 text-accent-500 flex items-center justify-center border border-accent-500/30">
              {project.icon}
            </div>
            <div>
              <h3 className="text-white font-bold text-lg font-heading">{project.title}</h3>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-md ${techColors[project.tech] ?? 'bg-slate-500/10 text-slate-400'}`}>
                {project.tech}
              </span>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 text-xs rounded-md font-medium bg-accent-500/10 text-accent-500">{tag}</span>
            ))}
          </div>

          <div className="mb-5">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen size={15} className="text-accent-500" />
              <span className="text-white font-semibold text-sm">Case Study</span>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-[#0a0a0f] border border-[#252545] rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle size={14} className="text-rose-400" />
                  <span className="text-rose-400 text-xs font-semibold uppercase tracking-wider">Problem</span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{project.problem}</p>
              </div>
              <div className="p-4 bg-[#0a0a0f] border border-accent-500/20 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 size={14} className="text-accent-500" />
                  <span className="text-accent-500 text-xs font-semibold uppercase tracking-wider">Solution</span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{project.solution}</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="text-white font-semibold text-sm mb-3">Key Deliverables</div>
            <ul className="grid grid-cols-2 gap-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-xs text-slate-400">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-accent-500" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full justify-center"
          >
            Visit Website <ExternalLink size={15} />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeStudy, setActiveStudy] = useState<Project | null>(null);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };
  const item = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
  };

  return (
    <>
      <section id="projects" className="py-24 bg-[#0a0a0f]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
            className="text-center mb-14"
          >
            <p className="text-accent-500 text-sm font-semibold uppercase tracking-widest mb-3">Portfolio</p>
            <h2 className="section-heading">Featured Projects</h2>
            <p className="section-subheading">13 real-world Magento, Laravel &amp; WordPress solutions I&apos;ve delivered</p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project) => (
              <motion.div key={project.id} variants={item} className="h-full">
                <div className="card group flex flex-col h-full">
                  <div className="relative h-44 flex-shrink-0 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#16162a] via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-accent-500/10 text-accent-500 flex items-center justify-center border border-accent-500/30">
                      {project.icon}
                    </div>
                    <span className={`absolute top-3 right-3 px-2 py-0.5 text-xs rounded-md font-medium ${techColors[project.tech] ?? 'bg-slate-500/10 text-slate-400'}`}>
                      {project.tech}
                    </span>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 text-xs rounded-md font-medium bg-accent-500/10 text-accent-500">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-white font-bold text-lg mb-4 font-heading">{project.title}</h3>

                    <ul className="space-y-1.5 mb-5 flex-1">
                      {project.highlights.slice(0, 3).map((h) => (
                        <li key={h} className="flex items-start gap-2 text-xs text-slate-400">
                          <span className="mt-0.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-accent-500" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="flex gap-2 mt-auto">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-card-primary"
                      >
                        Visit Website <ExternalLink size={12} />
                      </a>
                      <button
                        onClick={() => setActiveStudy(project)}
                        className="btn-card-outline"
                      >
                        View Case Study <BookOpen size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {activeStudy && (
          <CaseStudyModal project={activeStudy} onClose={() => setActiveStudy(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
