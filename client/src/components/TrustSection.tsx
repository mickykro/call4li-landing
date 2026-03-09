/*
 * Aurora Glass — Trust / Metrics Section
 * Glass cards with animated numbers, aurora accents
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Clock, Globe, Sparkles } from "lucide-react";

export default function TrustSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px" });

  const metrics = [
    {
      icon: Clock,
      display: "24/7",
      label: "זמינות מלאה",
      description: "פורלי עובדת סביב השעון, גם כשאתם ישנים",
      color: "text-aurora-teal",
      bg: "bg-aurora-teal/10",
    },
    {
      icon: Globe,
      display: "3",
      label: "שפות",
      description: "עברית, ערבית ואנגלית — עם זיהוי אוטומטי",
      color: "text-aurora-violet",
      bg: "bg-aurora-violet/10",
    },
    {
      icon: Sparkles,
      display: "100%",
      label: "אוטומטי",
      description: "אפס התערבות נדרשת מבעל העסק",
      color: "text-aurora-blue",
      bg: "bg-aurora-blue/10",
    },
    {
      icon: Shield,
      display: "30 שניות",
      label: "זמן תגובה",
      description: "מהשיחה שלא נענתה להודעת WhatsApp",
      color: "text-aurora-teal",
      bg: "bg-aurora-teal/10",
    },
  ];

  return (
    <section ref={ref} className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-space via-midnight to-deep-space" />

      {/* Aurora wisps */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[200px] bg-aurora-teal/5 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] bg-aurora-violet/5 blur-[80px] rounded-full" />

      <div className="container relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              className="glass-card p-6 lg:p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
            >
              <div className={`w-10 h-10 rounded-xl ${metric.bg} flex items-center justify-center mx-auto mb-4`}>
                <metric.icon className={`w-5 h-5 ${metric.color}`} />
              </div>
              <motion.div
                className={`text-3xl lg:text-4xl font-extrabold ${metric.color} mb-2`}
                style={{ fontFamily: "var(--font-display)" }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.5, type: "spring" }}
              >
                {metric.display}
              </motion.div>
              <div className="text-text-primary font-semibold text-sm mb-1">
                {metric.label}
              </div>
              <div className="text-text-muted text-xs leading-relaxed">
                {metric.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
