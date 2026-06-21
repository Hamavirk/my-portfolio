import { motion } from 'framer-motion';
import { Mail, ExternalLink, Download, ArrowUpRight, Link } from 'lucide-react';

const socials = [
  {
    label: 'Email',
    value: 'hamzavirk@email.com',
    href: 'mailto:hamzavirk@email.com',
    icon: <Mail size={18} />,
    color: 'sky',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/hamzavirk',
    href: 'https://linkedin.com',
    icon: <Link size={18} />,
    color: 'blue',
  },
  {
    label: 'GitHub',
    value: 'github.com/hamzavirk',
    href: 'https://github.com',
    icon: <ExternalLink size={18} />,
    color: 'slate',
  },
];

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'WordPress', href: '#wordpress' },
  { label: 'Projects', href: '#projects' },
  { label: 'Insights', href: '#insights' },
];

export default function Contact() {
  return (
    <>
      {/* CTA Banner */}
      <section id="contact" className="py-24 bg-[#0a0a0f]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
            className="relative rounded-3xl overflow-hidden"
          >
            {/* BG */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-500/15 via-[#16162a] to-[#10101a] border border-accent-500/20" />
            <div className="absolute top-0 left-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="relative px-8 md:px-16 py-16 text-center">
              <p className="text-accent-500 text-sm font-semibold uppercase tracking-widest mb-4">Let&apos;s Work Together</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-5">
                Ready to Build Something Great?
              </h2>
              <p className="text-slate-400 text-base max-w-xl mx-auto mb-10 leading-relaxed">
                Whether you need WordPress/WooCommerce development, Magento 2 frontend fixes, or a responsive
                website built with modern HTML, CSS &amp; JavaScript — I&apos;m here to help. Let&apos;s discuss your project.
              </p>

              <div className="flex flex-wrap gap-4 justify-center mb-12">
                <a href="mailto:hamzavirk@email.com" className="btn-primary">
                  <Mail size={17} />
                  Get In Touch
                </a>
                <a
                  href="/hamza-virk-cv.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  <Download size={17} />
                  Download CV
                </a>
              </div>

              {/* Contact cards */}
              <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 p-4 bg-[#10101a]/70 border border-[#252545] rounded-xl
                    hover:border-accent-500/40 hover:bg-[#16162a]/80 transition-all duration-300 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-accent-500/10 text-accent-500 flex items-center justify-center
                    group-hover:bg-accent-500/20 transition-colors">
                      {s.icon}
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">{s.label}</div>
                      <div className="text-slate-500 text-xs">{s.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#10101a] border-t border-[#1e1e35]">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-accent-500 flex items-center justify-center text-[#0a0a0f] font-bold text-sm">
                HV
              </div>
              <div>
                <div className="text-white font-semibold">Hamza Virk</div>
                <div className="text-slate-500 text-xs">Senior Frontend &amp; WordPress Developer</div>
              </div>
            </div>

            {/* Nav */}
            <nav className="flex flex-wrap gap-5 justify-center">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-500 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Company */}
            <div className="text-center md:text-right">
              <div className="text-slate-500 text-xs mb-1">Currently working at</div>
              <a
                href="https://asquaretec.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-500 hover:text-accent-400 text-sm font-medium inline-flex items-center gap-1 transition-colors"
              >
                Asquare Tec <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-[#1e1e35] flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-slate-600 text-xs">
              © {new Date().getFullYear()} Hamza Virk. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://asquaretec.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-400 text-xs inline-flex items-center gap-1 transition-colors"
              >
                asquaretec.com <ExternalLink size={10} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
