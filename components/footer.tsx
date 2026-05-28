import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Top decorative border */}
      <div className="h-1 bg-accent" />
      
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Фолклорна Танцова Школа
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Съхраняваме българската традиция чрез танц от 1998 година.
            </p>
            {/* Social icons */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 uppercase tracking-wider">Контакти</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">ул. Шипка 34, София 1000</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">+359 888 123 456</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">info@folklor-shkola.bg</span>
              </li>
            </ul>
          </div>

          {/* Schedule */}
          <div>
            <h4 className="text-lg font-semibold mb-4 uppercase tracking-wider">Работно време</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li className="flex justify-between">
                <span>Понеделник - Петък</span>
                <span>16:00 - 21:00</span>
              </li>
              <li className="flex justify-between">
                <span>Събота</span>
                <span>10:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Неделя</span>
                <span>10:00 - 14:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2026 Българска Фолклорна Танцова Школа. Всички права запазени.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
              Поверителност
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
              Условия за ползване
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
