/*
 * Aurora Glass — How It Works Section
 * Process flow with generated infographic + glass step cards
 * Vertical timeline with glowing connectors
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, ArrowLeftRight, MessageSquare, ListChecks, FileText } from "lucide-react";

const PROCESS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663330217393/VZvahsqxvigDNCtzbEoTYw/futuristic-process-flow-cG3YXWkfKiiin6QMsXdsqH.webp";

export default function HowItWorksSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const steps = [
    {
      icon: Phone,
      number: "01",
      title: "לקוח מחייג לעסק",
      description: "לקוח מתקשר לעסק — השיחה לא נענית",
      color: "text-aurora-teal",
      glowColor: "bg-aurora-teal/10",
    },
    {
      icon: ArrowLeftRight,
      number: "02",
      title: "ניתוב אוטומטי",
      description: "Follow-Me מנתב את השיחה למספר Twilio של המערכת",
      color: "text-aurora-blue",
      glowColor: "bg-aurora-blue/10",
    },
    {
      icon: MessageSquare,
      number: "03",
      title: "הודעת WhatsApp מיידית",
      description: "פורלי שולחת ללקוח הודעת WhatsApp מיידית בשם העסק",
      color: "text-aurora-violet",
      glowColor: "bg-aurora-violet/10",
    },
    {
      icon: ListChecks,
      number: "04",
      title: "הלקוח בוחר",
      description: "לחזור עכשיו, לקבוע זמן, או לשאול שאלה — הכל אוטומטי",
      color: "text-aurora-teal",
      glowColor: "bg-aurora-teal/10",
    },
    {
      icon: FileText,
      number: "05",
      title: "סיכום לבעל העסק",
      description: "פורלי מטפלת, מסכמת, ומעבירה לבעל העסק את כל מה שהוא צריך לדעת",
      color: "text-aurora-blue",
      glowColor: "bg-aurora-blue/10",
    },
  ];

  return (
    <section id="how-it-works" ref={ref} className="relative py-24 lg:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-space via-midnight/40 to-deep-space" />

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 glass-card px-4 py-1.5 mb-5">
            <span className="w-2 h-2 rounded-full bg-aurora-blue animate-pulse" />
            <span className="text-aurora-blue text-xs font-semibold tracking-wider">
              התהליך
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary leading-tight">
            איך זה עובד{" "}
            <span className="aurora-text">בפועל?</span>
          </h2>
          <p className="text-text-secondary text-lg mt-4 max-w-xl mx-auto">
            התהליך כולו אוטומטי. בעל העסק מקבל פינג רק כשיש פעולה שדורשת אותו.
          </p>
        </motion.div>

        {/* Process flow image */}
        <motion.div
          className="mb-20 glass-card p-4 lg:p-6 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <img
            src={PROCESS_IMG}
            alt="תרשים זרימה של תהליך פורלי"
            className="w-full rounded-lg"
          />
        </motion.div>

        {/* Step cards */}
        <div className="grid md:grid-cols-5 gap-4 lg:gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="glass-card-hover p-6 relative overflow-hidden text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
            >
              {/* Top accent line */}
              <div className={`absolute top-0 right-0 left-0 h-[2px] ${step.glowColor}`} />

              {/* Step number */}
              <span
                className={`text-xs font-bold ${step.color} mb-3 block`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                {step.number}
              </span>

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl ${step.glowColor} flex items-center justify-center mx-auto mb-4`}>
                <step.icon className={`w-5 h-5 ${step.color}`} />
              </div>

              <h4 className="text-sm font-bold text-text-primary mb-2">
                {step.title}
              </h4>
              <p className="text-text-muted text-xs leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
