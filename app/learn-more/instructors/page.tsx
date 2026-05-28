"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Award, Music, Heart, Star, Mail, Calendar } from "lucide-react";

const instructors = [
  {
    name: "Мария Димитрова",
    role: "Главен хореограф",
    specialty: "Тракийски танци",
    experience: "15 години опит",
    bio: "Мария е завършила Националната академия за танцово изкуство и е специализирала тракийски фолклор. Тя е носител на множество награди от национални и международни фестивали.",
    achievements: ["Златен медал - Копривщица 2018", "Награда за хореография - София 2020"],
  },
  {
    name: "Георги Петров",
    role: "Старши инструктор",
    specialty: "Шопски танци",
    experience: "20 години опит",
    bio: "Георги е един от най-уважаваните хореографи на шопски фолклор в България. Той е обучавал състави, които са печелили престижни награди по целия свят.",
    achievements: ["Заслужил деятел на културата", "Награда за цялостен принос 2019"],
  },
  {
    name: "Елена Иванова",
    role: "Инструктор",
    specialty: "Добруджански танци",
    experience: "12 години опит",
    bio: "Елена е родена в Добруджа и от малка е потопена в местния фолклор. Тя преподава с невероятна страст и внимание към детайла.",
    achievements: ["Специална награда - Фестивал Дунав 2021"],
  },
  {
    name: "Иван Стоянов",
    role: "Инструктор",
    specialty: "Родопски танци",
    experience: "10 години опит",
    bio: "Иван е специалист по родопски фолклор и носител на традициите от този уникален регион. Той е известен с търпението си и отличното преподаване за начинаещи.",
    achievements: ["Награда за млад талант 2015"],
  },
  {
    name: "Стефка Николова",
    role: "Инструктор за деца",
    specialty: "Детски групи",
    experience: "8 години опит",
    bio: "Стефка има магическа способност да работи с деца. Тя превръща всеки урок в забавление, като същевременно учи децата на истинския български фолклор.",
    achievements: ["Любим учител - 2022, 2023"],
  },
  {
    name: "Димитър Колев",
    role: "Музикален директор",
    specialty: "Автентична музика",
    experience: "18 години опит",
    bio: "Димитър е гайдар и кавалджия с дълги години опит. Той отговаря за музикалното съпровождение на всички занятия и изяви.",
    achievements: ["Носител на награда Орфей"],
  },
];

export default function InstructorsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-primary/90 to-primary py-16 px-6">
        <div className="absolute inset-0 opacity-10">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-32 h-32 border-4 border-primary-foreground rounded-full"
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 15}%`,
              }}
            />
          ))}
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <Users className="w-16 h-16 text-accent mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Нашите инструктори
          </h1>
          <p className="text-lg text-primary-foreground/80">
            Запознайте се с екипа от професионалисти, който ще ви води
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Team Overview */}
        <section className="mb-16">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-secondary rounded-lg">
              <p className="text-4xl font-bold text-primary mb-2">6</p>
              <p className="text-muted-foreground">Професионални инструктори</p>
            </div>
            <div className="p-6 bg-secondary rounded-lg">
              <p className="text-4xl font-bold text-accent mb-2">80+</p>
              <p className="text-muted-foreground">Години общ опит</p>
            </div>
            <div className="p-6 bg-secondary rounded-lg">
              <p className="text-4xl font-bold text-primary mb-2">15+</p>
              <p className="text-muted-foreground">Награди и отличия</p>
            </div>
          </div>
        </section>

        {/* Instructors Grid */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-1 bg-primary rounded-full" />
            <h2 className="text-2xl font-bold text-foreground">Запознайте се с екипа</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {instructors.map((instructor, index) => (
              <Card key={index} className="border-border bg-card overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-secondary p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="w-10 h-10 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{instructor.name}</h3>
                        <p className="text-primary font-medium">{instructor.role}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Music className="w-4 h-4 text-accent" />
                          <span className="text-sm text-muted-foreground">
                            {instructor.specialty}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground text-sm mb-4">{instructor.bio}</p>
                    <div className="border-t border-border pt-4">
                      <p className="text-xs font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Award className="w-4 h-4 text-accent" />
                        Постижения
                      </p>
                      <ul className="space-y-1">
                        {instructor.achievements.map((achievement, i) => (
                          <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                            <Star className="w-3 h-3 text-accent fill-accent" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-1 bg-accent rounded-full" />
            <h2 className="text-2xl font-bold text-foreground">Нашата философия</h2>
          </div>

          <Card className="border-border bg-gradient-to-br from-card to-secondary">
            <CardContent className="p-8">
              <Heart className="w-12 h-12 text-primary mx-auto mb-6" />
              <p className="text-lg text-foreground leading-relaxed text-center italic max-w-3xl mx-auto">
                &ldquo;Вярваме, че всеки може да танцува български фолклор. Нашата задача е да 
                открием таланта във всеки ученик и да го развием с търпение, професионализъм 
                и много любов към традицията. Танцът е език, който всички можем да научим.&rdquo;
              </p>
              <p className="text-center text-muted-foreground mt-4">
                — Екипът на Фолклорна Школа
              </p>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="bg-primary rounded-lg p-10 text-center">
          <h2 className="text-2xl font-bold text-primary-foreground mb-4">
            Искате да се запознаете с нас лично?
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            Елате на безплатен пробен урок и се убедете сами в качеството на нашето преподаване.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Calendar className="mr-2 w-5 h-5" />
              Запази пробен урок
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Mail className="mr-2 w-5 h-5" />
              Свържи се с нас
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
