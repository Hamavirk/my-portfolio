import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Nestmate Team',
    role: 'Hotel Platform Owner',
    project: 'Nestmate Platform',
    review:
      'Hamza built our entire hotel booking backend from scratch. The custom booking logic, availability calendar, and payment flows work flawlessly. Exactly what we needed.',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
    rating: 5,
  },
  {
    id: 2,
    name: 'RTT Shop Client',
    role: 'eCommerce Director',
    project: 'RTT Shop',
    review:
      'Our complex checkout was losing customers daily. Hamza optimized the backend logic and streamlined the entire flow. Cart abandonment dropped significantly after launch.',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
    rating: 5,
  },
  {
    id: 3,
    name: 'RTT Quote Manager',
    role: 'Store Operations Lead',
    project: 'RTT Quote',
    review:
      'Design bugs were hurting our brand image. Hamza delivered a full UI redesign that transformed our store — modern, clean, and fully functional across all pages.',
    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
    rating: 5,
  },
  {
    id: 4,
    name: 'Tecla Center Team',
    role: 'Marketing Director',
    project: 'Tecla Center',
    review:
      'We needed heavy custom styling that no default theme could provide. Hamza delivered exceptional custom CSS and JS that perfectly matches our brand identity.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
    rating: 5,
  },
  {
    id: 5,
    name: 'RxMeds Health',
    role: 'Healthcare Platform Lead',
    project: 'RxMeds Health',
    review:
      'Managing patients, prescriptions, and doctor workflows was chaotic before. Hamza built comprehensive end-to-end modules that streamlined our entire healthcare operation.',
    avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
    rating: 5,
  },
  {
    id: 6,
    name: 'Chobbys Team',
    role: 'eCommerce Manager',
    project: 'Chobbys',
    review:
      'Checkout friction was killing our conversions. Hamza improved the entire UI flow — simplified steps, fixed product displays, and our cart-to-order rate improved noticeably.',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
    rating: 5,
  },
  {
    id: 7,
    name: 'Gozaky Client',
    role: 'eCommerce Store Owner',
    project: 'Gozaky',
    review:
      'Registration issues were causing high abandonment. Hamza redesigned our forms and product pages with a mobile-first approach. Sign-ups increased and the store feels native in Arabic.',
    avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
    rating: 5,
  },
  {
    id: 8,
    name: 'Pizza Online Pakistan',
    role: 'Restaurant Chain Owner',
    project: 'Pizza Online Pakistan',
    review:
      'We needed a fast food delivery platform built from scratch. Hamza delivered a high-performance Magento store with custom ordering, delivery zones, and a seamless mobile checkout.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
    rating: 5,
  },
  {
    id: 9,
    name: 'TeesByMe Client',
    role: 'Fashion Store Owner',
    project: 'TeesByMe',
    review:
      'Broken color swatches were confusing our customers. Hamza fixed the rendering completely and gave us a beautiful redesign. Product pages and checkout are now seamless.',
    avatar: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
    rating: 5,
  },
  {
    id: 10,
    name: 'K2 Swift Removals',
    role: 'Business Owner',
    project: 'K2 Swift Removals',
    review:
      'Our landing pages were generating almost no leads. Hamza built high-converting service area pages with local SEO that now rank on the first page and bring in consistent inquiries.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
    rating: 5,
  },
  {
    id: 11,
    name: 'Plantec Team',
    role: 'Digital Manager',
    project: 'Plantec',
    review:
      'Mobile and tablet users were bouncing due to broken layouts. Hamza fixed responsiveness across every breakpoint. Our mobile conversion rate improved dramatically.',
    avatar: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
    rating: 5,
  },
  {
    id: 12,
    name: 'Mathyo Tyres',
    role: 'Brand Director',
    project: 'Mathyo Tyres',
    review:
      'We needed a premium digital presence to match our luxury tyre brand. Hamza built the entire WordPress site from scratch — cinematic design, product showcases, and a working enquiry system.',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
    rating: 5,
  },
  {
    id: 13,
    name: 'School Admin',
    role: 'Institution Director',
    project: 'School Management System',
    review:
      'Tracking attendance, fees, and student data was a nightmare on spreadsheets. Hamza built comprehensive finance and attendance modules that transformed how we run the school.',
    avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
    rating: 5,
  },
];

export default function Testimonials() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section id="testimonials" className="py-24 bg-[#10101a]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <p className="text-accent-500 text-sm font-semibold uppercase tracking-widest mb-3">Reviews</p>
          <h2 className="section-heading">Client Testimonials</h2>
          <p className="section-subheading mx-auto text-center max-w-xl">
            13 client reviews — one for every project delivered
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="testimonials-carousel"
        >
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => swiperRef.current?.slidePrev()}
            className="testimonials-nav-btn testimonials-nav-prev"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => swiperRef.current?.slideNext()}
            className="testimonials-nav-btn testimonials-nav-next"
          >
            <ChevronRight size={20} />
          </button>

          <Swiper
            modules={[Pagination, Autoplay]}
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              dynamicMainBullets: 5,
            }}
            autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            loop
            speed={700}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id} className="h-auto">
                <div className="card p-7 h-full flex flex-col">
                  <div className="w-10 h-10 rounded-xl bg-accent-500/10 text-accent-500 flex items-center justify-center mb-5">
                    <Quote size={18} />
                  </div>

                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-6 italic font-normal">
                    &ldquo;{t.review}&rdquo;
                  </p>

                  <div className="flex items-center gap-3 pt-5 border-t border-[#252545]">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover border border-[#252545] flex-shrink-0"
                    />
                    <div className="min-w-0">
                      <div className="text-white font-semibold text-sm">{t.name}</div>
                      <div className="text-slate-500 text-xs">{t.role}</div>
                    </div>
                    <div className="ml-auto flex-shrink-0">
                      <span className="px-2 py-1 bg-accent-500/10 text-accent-500 text-xs rounded-md">
                        {t.project}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
