"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, MapPin, Star, Users, ChevronRight } from "lucide-react";

const regions = [
  {
    name: "Тракия",
    description: "Известна с бързите ръченици и живите ритми",
    dances: ["Ръченица", "Тракийска ръченица", "Право хоро"],
    color: "bg-primary",
  },
  {
    name: "Шопска област",
    description: "Енергични танци с характерни подскоци",
    dances: ["Шопска ръченица", "Черкезка", "Граовско хоро"],
    color: "bg-accent",
  },
  {
    name: "Добруджа",
    description: "Плавни движения и елегантни стъпки",
    dances: ["Дайчово хоро", "Добруджанска ръченица"],
    color: "bg-primary",
  },
  {
    name: "Македония",
    description: "Бавни и тържествени хора",
    dances: ["Пайдушко хоро", "Македонско хоро"],
    color: "bg-accent",
  },
  {
    name: "Родопи",
    description: "Мистични танци с уникален характер",
    dances: ["Родопска ръченица", "Смилянско хоро"],
    color: "bg-primary",
  },
  {
    name: "Северна България",
    description: "Традиционни хора с богата история",
    dances: ["Северняшко хоро", "Дунавско хоро"],
    color: "bg-accent",
  },
];

const allDances = [
  { name: "Хоро", region: "Различни региони", level: "Начинаещи", popular: true },
  { name: "Ръченица", region: "Тракия", level: "Средно ниво", popular: true },
  { name: "Дайчово хоро", region: "Добруджа", level: "Средно ниво", popular: false },
  { name: "Пайдушко хоро", region: "Македония", level: "Начинаещи", popular: true },
  { name: "Черкезка", region: "Шопска област", level: "Напреднали", popular: false },
  { name: "Граовско хоро", region: "Западна България", level: "Средно ниво", popular: false },
  { name: "Тракийска ръченица", region: "Тракия", level: "Напреднали", popular: true },
  { name: "Шопска ръченица", region: "Шопска област", level: "Средно ниво", popular: false },
  { name: "Право хоро", region: "Тракия", level: "Начинаещи", popular: true },
  { name: "Копаница", region: "Шопска област", level: "Напреднали", popular: false },
  { name: "Елено моме", region: "Тракия", level: "Средно ниво", popular: true },
  { name: "Ганкино хоро", region: "Северна България", level: "Средно ниво", popular: false },
];

const levels = [
  {
    name: "Начинаещи",
    description: "За тези, които тепърва започват",
    features: ["Основни стъпки", "Базови ритми", "Лесни хора"],
    icon: Star,
  },
  {
    name: "Средно ниво",
    description: "За танцьори с известен опит",
    features: ["Сложни комбинации", "Регионални стилове", "Синхрон в група"],
    icon: Users,
  },
  {
    name: "Напреднали",
    description: "За опитни фолклорни танцьори",
    features: ["Майсторски техники", "Сценични изпълнения", "Соло вариации"],
    icon: Music,
  },
];

export default function DancesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-primary to-primary/80 py-16 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-primary-foreground rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <Music className="w-16 h-16 text-accent mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Видове танци
          </h1>
          <p className="text-lg text-primary-foreground/80">
            Открийте богатството на българския фолклор от всички региони
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Regions Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-1 bg-primary rounded-full" />
            <h2 className="text-2xl font-bold text-foreground">Фолклорни области</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region, index) => (
              <Card
                key={index}
                className="border-border bg-card hover:shadow-lg transition-all group cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 ${region.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                    >
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground text-lg mb-1 group-hover:text-primary transition-colors">
                        {region.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {region.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {region.dances.map((dance, i) => (
                          <span
                            key={i}
                            className="text-xs bg-secondary px-2 py-1 rounded-sm text-muted-foreground"
                          >
                            {dance}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Levels Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-1 bg-accent rounded-full" />
            <h2 className="text-2xl font-bold text-foreground">Нива на обучение</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {levels.map((level, index) => {
              const Icon = level.icon;
              return (
                <Card key={index} className="border-border bg-card">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground text-xl mb-2">
                      {level.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {level.description}
                    </p>
                    <ul className="space-y-2">
                      {level.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <ChevronRight className="w-4 h-4 text-accent" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* All Dances Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-1 bg-primary rounded-full" />
            <h2 className="text-2xl font-bold text-foreground">Всички танци</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {allDances.map((dance, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-lg border border-border bg-card hover:bg-secondary/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  {dance.popular && (
                    <Star className="w-4 h-4 text-accent fill-accent" />
                  )}
                  <div>
                    <h4 className="font-semibold text-foreground">{dance.name}</h4>
                    <p className="text-xs text-muted-foreground">{dance.region}</p>
                  </div>
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded-sm ${
                    dance.level === "Начинаещи"
                      ? "bg-green-100 text-green-800"
                      : dance.level === "Средно ниво"
                      ? "bg-amber-100 text-amber-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {dance.level}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-secondary rounded-lg p-10 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Готови ли сте да танцувате?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Изберете танц и се запишете за безплатно пробно занятие. Нашите инструктори 
            ще ви помогнат да изберете подходящото ниво.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Запишете се за пробен урок
          </Button>
        </section>
      </div>
    </div>
  );
}
