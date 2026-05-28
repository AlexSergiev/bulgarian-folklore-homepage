import Link from "next/link";
import { KanaticaBorder } from "@/components/kanatica-border";

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden py-24 bg-card">
      <KanaticaBorder />
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className="w-12 h-[2px] bg-primary" />
          <h2 className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">За нас</h2>
          <span className="w-12 h-[2px] bg-primary" />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-balance">
            Съхраняваме традицията, танцуваме с душа
          </h3>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 text-pretty">
            Нашата школа е място, където българският фолклор оживява. С дългогодишен опит в обучението на млади и стари, ние пазим изкуството на автентичния български танц живо и достъпно за всички. Нашите хореографи са носители на традицията, предавана от поколение на поколение.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
            Предлагаме занятия за всички възрасти и нива на подготовка — от начинаещи до напреднали. 
            При нас ще откриете топлина, общност и страст към българската култура.
          </p>  
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
          {[
            {
              title: "Автентични танци",
              description: "Хора, ръченици и регионални танци от всички краища на България.",
              href: "/learn-more/dances",
              icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12l2 2 4-4" />
                </svg>
              ),
            },
            {
              title: "Опитни хореографи",
              description: "Професионалисти с дългогодишен сценичен и преподавателски опит.",
              href: "/learn-more/instructors",
              icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              ),
            },
            {
              title: "Топла общност",
              description: "Присъединете се към семейство от единомишленици, влюбени в фолклора.",
              href: "/learn-more/contact",
              icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              ),
            },
          ].map((feature, index) => (
            <Link
              key={index}
              href={feature.href}
              className="text-center p-8 bg-background rounded-sm border border-border hover:border-primary transition-colors block"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">{feature.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
