/*
 * Aurora Glass — Problem Section
 * Dark background with glass cards showing the pain points
 * Glowing accent icons, aurora gradient highlights
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PhoneOff, UserX, TrendingDown } from "lucide-react";

export default function ProblemSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const problems = [
    {
      icon: PhoneOff,
      number: "01",
      title: "שיחות ללא מענה",
      description:
        "כל יום, מיליוני שיחות טלפון לעסקים קטנים נשארות ללא מענה. הלקוח לא ממתין — הוא פשוט הולך.",
      glow: "from-aurora-teal/20 to-transparent",
    },
    {
      icon: UserX,
      number: "02",
      title: "הלקוח לא ישאיר הודעה",
      description:
        "הלקוח לא ישאיר הודעה קולית. הוא ילך למתחרה. כל שיחה שלא נענתה היא הכנסה שאבדה — לצמיתות.",
      glow: "from-aurora-violet/20 to-transparent",
    },
    {
      icon: TrendingDown,
      number: "03",
      title: "עסקים קטנים = צוות קטן",
      description:
        "רוב 570,000 העסקים הפעילים בישראל מנוהלים על ידי אדם אחד או שניים. אי אפשר תמיד לענות לטלפון.",
      glow: "from-aurora-blue/20 to-transparent",
    },
  ];

  return (
    <section id="problem" ref={ref} className="relative py-24 lg:py-36 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-space via-midnight/50 to-deep-space" />

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          className="max-w-3xl mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 glass-card px-4 py-1.5 mb-5">
            <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
            <span className="text-red-400 text-xs font-semibold tracking-wider">
              הבעיה
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary leading-tight">
            כל שיחה שלא נענתה
            <br />
            <span className="text-red-400">היא הכנסה שנעלמה</span>
          </h2>
        </motion.div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              className="glass-card-hover p-8 relative overflow-hidden group"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.7 }}
            >
              {/* Top glow gradient */}
              <div className={`absolute top-0 right-0 left-0 h-1 bg-gradient-to-l ${problem.glow}`} />

              {/* Number */}
              <span
                className="text-6xl font-black text-text-primary/[0.04] absolute top-4 left-4 select-none"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {problem.number}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-glass-white flex items-center justify-center mb-5 group-hover:bg-aurora-teal/15 transition-colors duration-300">
                <problem.icon className="w-6 h-6 text-aurora-teal" />
              </div>

              <h3 className="text-xl font-bold text-text-primary mb-3">
                {problem.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Pull quote */}
        <motion.div
          className="mt-16 lg:mt-20 glass-card p-8 max-w-2xl border-r-2 border-aurora-teal !rounded-r-none"
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <blockquote className="text-xl lg:text-2xl font-bold text-text-primary leading-snug">
            "בישראל לבדה ישנם כ-<span className="text-aurora-teal">570,000</span> עסקים פעילים.
            רובם לא יכולים לענות לכל שיחה."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
