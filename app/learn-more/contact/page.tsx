"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Адрес",
    content: "ул. Народна 15, София 1000",
  },
  {
    icon: Phone,
    title: "Телефон",
    content: "+359 2 987 6543",
  },
  {
    icon: Mail,
    title: "Имейл",
    content: "info@folklore-bg.com",
  },
  {
    icon: Clock,
    title: "Работно време",
    content: "Понеделник - Събота: 10:00 - 21:00",
  },
];

const socialLinks = [
  { icon: Facebook, name: "Facebook", href: "#", followers: "5.2K" },
  { icon: Instagram, name: "Instagram", href: "#", followers: "3.8K" },
  { icon: Youtube, name: "YouTube", href: "#", followers: "1.5K" },
];

const faqs = [
  {
    question: "Има ли възрастово ограничение?",
    answer: "Не! Приемаме ученици от 5 до 85 години. Имаме групи за всички възрасти.",
  },
  {
    question: "Нужен ли е предишен опит?",
    answer: "Не е нужен никакъв опит. Имаме специални групи за напълно начинаещи.",
  },
  {
    question: "Какво да облека?",
    answer: "Удобни дрехи и обувки. Народни носии се осигуряват за изяви.",
  },
  {
    question: "Колко струва?",
    answer: "Цените варират според групата. Първото занятие е безплатно!",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-primary to-primary/80 py-16 px-6">
        <div className="relative max-w-3xl mx-auto text-center">
          <MessageCircle className="w-16 h-16 text-accent mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Контакти
          </h1>
          <p className="text-lg text-primary-foreground/80">
            Свържете се с нас - ще се радваме да ви чуем!
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Contact Info Cards */}
        <section className="mb-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="border-border bg-card h-full">
                  <CardContent className="p-5 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                    <p className="text-sm text-muted-foreground">{info.content}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-1 bg-primary rounded-full" />
              <h2 className="text-2xl font-bold text-foreground">Пишете ни</h2>
            </div>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Име</Label>
                      <Input id="name" placeholder="Вашето име" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" placeholder="+359 ..." type="tel" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Имейл</Label>
                    <Input id="email" placeholder="your@email.com" type="email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Тема</Label>
                    <Input id="subject" placeholder="Относно какво ни пишете?" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Съобщение</Label>
                    <Textarea
                      id="message"
                      placeholder="Напишете вашето съобщение тук..."
                      rows={5}
                    />
                  </div>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer">
                    <Send className="mr-2 w-4 h-4" />
                    Изпрати съобщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </section>

          {/* FAQ & Social */}
          <div className="space-y-8">
            {/* FAQ Section */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-1 bg-accent rounded-full" />
                <h2 className="text-2xl font-bold text-foreground">Често задавани въпроси</h2>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index} className="border-border bg-card">
                    <CardContent className="p-5">
                      <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                      <p className="text-sm text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Social Links */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-1 bg-primary rounded-full" />
                <h2 className="text-2xl font-bold text-foreground">Последвайте ни</h2>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="block"
                    >
                      <Card className="border-border bg-card hover:bg-secondary transition-colors">
                        <CardContent className="p-5 text-center">
                          <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
                          <p className="font-semibold text-foreground text-sm">{social.name}</p>
                          <p className="text-sm text-muted-foreground">{social.followers} последователи</p>
                        </CardContent>
                      </Card>
                    </a>
                  );
                })}
              </div>
            </section>
          </div>
        </div>

        {/* Map Section */}
        <section className="mt-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-1 bg-primary rounded-full" />
            <h2 className="text-2xl font-bold text-foreground">Къде се намираме</h2>
          </div>

          <Card className="border-border bg-card overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14468.58400954492!2d23.36343579345595!3d42.67321106050847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa85c36aeb4979%3A0xe788c5d9fc779e82!2sElektronika%20Ad!5e1!3m2!1sen!2sbg!4v1780040244996!5m2!1sen!2sbg"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Местоположение на залата"
            />
            <div className="p-4 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
              <a
                href="https://maps.app.goo.gl/9YXLs5ypHW256RSd6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Отвори в Google Maps
              </a>
            </div>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="mt-12 bg-accent rounded-lg p-10 text-center">
          <h2 className="text-2xl font-bold text-accent-foreground mb-4">
            Още не сте сигурни?
          </h2>
          <p className="text-accent-foreground/80 mb-6 max-w-xl mx-auto">
            Обадете ни се и ще отговорим на всички ваши въпроси. Или просто елате на 
            безплатен пробен урок!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer">
              <Phone className="mr-2 w-5 h-5" />
              Обадете се сега
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
