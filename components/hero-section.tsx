"use client";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Decorative folk pattern border */}
      <div className="absolute top-0 left-0 right-0 h-3 bg-primary" />
      <div className="absolute top-3 left-0 right-0 h-1 bg-accent" />
      
      {/* Main content */}
      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        {/* Decorative element */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="w-16 h-[2px] bg-accent" />
          <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
          <span className="w-16 h-[2px] bg-accent" />
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 tracking-tight text-balance">
          <span className="block">ХОРИ́ЩЕ</span>
          <span className="block text-primary text-3xl md:text-5xl lg:text-6xl">Ранджеви</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          Потопете се в магията на българската традиция. Научете автентични хора и ръченици от опитни хореографи.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg font-semibold rounded-sm"
          >
            Запишете се сега
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-6 text-lg font-semibold rounded-sm"
          >
            Научете повече
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: "25+", label: "Години опит" },
            { number: "500+", label: "Възпитаници" },
            { number: "15", label: "Вида танци" },
            { number: "10", label: "Награди" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom decorative border */}
      <div className="absolute bottom-3 left-0 right-0 h-1 bg-accent" />
      <div className="absolute bottom-0 left-0 right-0 h-3 bg-primary" />
    </section>
  );
}
