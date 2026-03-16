/*
 * Aurora Glass — CTA Section
 * Dramatic aurora background with central CTA
 * Glass card with mascot, gradient buttons
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone } from "lucide-react";

const CTA_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663330217393/VZvahsqxvigDNCtzbEoTYw/futuristic-cta-bg-76wY7NoJNzttDBHqfYFjfU.webp";
const MASCOT = "https://d2xsxph8kpxj0f.cloudfront.net/310519663330217393/VZvahsqxvigDNCtzbEoTYw/forli-mascot_583ebf4a.png";

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="cta" ref={ref} className="relative py-24 lg:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={CTA_BG} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-deep-space/60" />
      </div>

      <div className="container relative z-10">
        <motion.div
          className="glass-card p-10 lg:p-16 text-center max-w-3xl mx-auto relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Glow effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] bg-aurora-teal/10 blur-[80px] rounded-full" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[250px] h-[150px] bg-aurora-violet/8 blur-[60px] rounded-full" />

          <div className="relative">
            {/* Mascot */}
            <motion.img
              src={MASCOT}
              alt="פורלי"
              className="w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-6 object-contain"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary leading-tight mb-4">
              מוכנים להפסיק
              <br />
              <span className="aurora-text">לאבד לקוחות?</span>
            </h2>

            <p className="text-text-secondary text-lg max-w-lg mx-auto mb-10 leading-relaxed">
              הצטרפו לעסקים שכבר לא מפספסים שיחות. פורלי עובדת 24/7,
              בשלוש שפות, בלי שתצטרכו לעשות כלום.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/972553163293"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-l from-aurora-teal to-aurora-blue text-deep-space px-8 py-4 rounded-xl text-base font-bold hover:shadow-lg hover:shadow-aurora-teal/30 transition-all duration-300 animate-pulse-glow"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                דברו איתנו בוואטסאפ
              </a>
              <a
                href="tel:+972548018957"
                className="inline-flex items-center justify-center gap-2 glass-card px-8 py-4 text-text-primary text-base font-semibold hover:bg-glass-white transition-all duration-300 !rounded-xl"
              >
                <Phone className="w-5 h-5" />
                התקשרו אלינו
              </a>
            </div>

            {/* Contact info */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-text-muted">
              <a href="mailto:info@call4li.com" className="hover:text-aurora-teal transition-colors flex items-center gap-1.5">
                <span>✉</span> info@call4li.com
              </a>
              <a href="tel:+972548018957" className="hover:text-aurora-teal transition-colors flex items-center gap-1.5">
                <span>📞</span> חייגו אלינו
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
