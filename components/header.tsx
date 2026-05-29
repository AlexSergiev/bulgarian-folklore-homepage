"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            <span className="font-bold text-lg text-foreground hidden sm:block">Фолклор</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Начало
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              За нас
            </a>
            <a href="/learn-more/dances" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Танци
            </a>
            <a href="/learn-more/schedule" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Разписание
            </a>
            <a href="/learn-more/gallery" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Галерия
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-sm cursor-pointer">
              Свържете се
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Меню"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Начало
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                За нас
              </a>
              <a href="/learn-more/dances" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Танци
              </a>
              <a href="/learn-more/schedule" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Разписание
              </a>
              <a href="/learn-more/gallery" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Галерия
              </a>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-sm mt-2">
                Свържете се
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
