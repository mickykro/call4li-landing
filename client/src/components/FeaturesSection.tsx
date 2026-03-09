/*
 * Aurora Glass — Features Section
 * Bento grid with glass cards, aurora accents
 * Each feature has a glowing icon and gradient accent
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, CalendarClock, HelpCircle, Image, Users, FileBarChart } from "lucide-react";

const FEATURES_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663330217393/VZvahsqxvigDNCtzbEoTYw/futuristic-features-bg-T4dw3cKPT6ftzz2AsSQWVh.webp";

export default function FeaturesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const features = [
    {
      icon: Globe,
      title: "שלוש שפות",
      description: "עברית, ערבית ואנגלית — עם זיהוי שפה אוטומטי. פורלי מתאימה את עצמה ללקוח.",
      color: "text-aurora-teal",
      bg: "bg-aurora-teal/10",
      span: "md:col-span-2",
    },
    {
      icon: CalendarClock,
      title: "קביעת שיחות חוזרות",
      description: '"מחר ב-8", "בין 4 ל-6", "בשבוע הבא אחה״צ" — פורלי מבינה הכל ושולחת תזכורת 30 דקות לפני.',
      color: "text-aurora-violet",
      bg: "bg-aurora-violet/10",
      span: "md:col-span-1",
    },
    {
      icon: HelpCircle,
      title: "מענה על שאלות",
      description: "בהתבסס על FAQ, מוצרים ושירותים שהעסק הגדיר — פורלי עונה בצורה חכמה ומדויקת.",
      color: "text-aurora-blue",
      bg: "bg-aurora-blue/10",
      span: "md:col-span-1",
    },
    {
      icon: Image,
      title: "ניתוח תמונות ומסמכים",
      description: "לקוח שולח תמונה או מסמך? פורלי מנתחת ומבינה את התוכן כדי לתת מענה מדויק.",
      color: "text-aurora-teal",
      bg: "bg-aurora-teal/10",
      span: "md:col-span-2",
    },
    {
      icon: Users,
      title: "זיהוי לקוחות חוזרים",
      description: "פורלי מזהה לקוחות חוזרים ועסקים מרובים מאותו מספר — ומתאימה את השיחה בהתאם.",
      color: "text-aurora-violet",
      bg: "bg-aurora-violet/10",
      span: "md:col-span-1",
    },
    {
      icon: FileBarChart,
      title: "סיכום שיחה אוטומטי",
      description: "סיכום מלא נשלח לעסק וגם ללקוח עצמו — שקיפות מלאה, אפס מאמץ.",
      color: "text-aurora-blue",
      bg: "bg-aurora-blue/10",
      span: "md:col-span-2",
    },
  ];

  return (
    <section id="features" ref={ref} className="relative py-24 lg:py-36 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={FEATURES_BG} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-deep-space/80" />
      </div>

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 glass-card px-4 py-1.5 mb-5">
            <span className="w-2 h-2 rounded-full bg-aurora-violet animate-pulse" />
            <span className="text-aurora-violet text-xs font-semibold tracking-wider">
              יכולות
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary leading-tight">
            מה פורלי{" "}
            <span className="aurora-text">יודעת לעשות?</span>
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className={`glass-card-hover p-7 lg:p-8 relative overflow-hidden ${feature.span}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
            >
              {/* Corner glow */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${feature.bg} blur-[60px] rounded-full`} />

              <div className="relative">
                <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-5`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
