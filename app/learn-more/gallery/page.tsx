"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Images, Play, Camera, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["Всички", "Изяви", "Фестивали", "Ученици", "Зад кулисите"];

const galleryItems = [
  { id: 1, category: "Изяви", title: "Пролетен концерт 2024", description: "Годишен концерт в НДК", wide: true },
  { id: 2, category: "Фестивали", title: "Копривщица 2023", description: "Национален фолклорен фестивал", wide: false },
  { id: 3, category: "Ученици", title: "Детска група", description: "Нашите малки танцьори", wide: false },
  { id: 4, category: "Зад кулисите", title: "Репетиция", description: "Подготовка за изявата", wide: false },
  { id: 5, category: "Изяви", title: "Коледен спектакъл", description: "Коледен спектакъл 2023", wide: false },
  { id: 6, category: "Фестивали", title: "Международен фестивал", description: "Загреб, Хърватия", wide: true },
  { id: 7, category: "Ученици", title: "Напреднала група", description: "Тракийска ръченица", wide: false },
  { id: 8, category: "Зад кулисите", title: "Костюмите", description: "Подготовка на носиите", wide: false },
  { id: 9, category: "Изяви", title: "Лятно парти", description: "Края на учебната година", wide: false },
  { id: 10, category: "Фестивали", title: "Фолклорен събор", description: "Пловдив 2022", wide: false },
  { id: 11, category: "Ученици", title: "Начинаещи", description: "Първи стъпки в танца", wide: true },
  { id: 12, category: "Зад кулисите", title: "Грим и носии", description: "Преди излизане на сцена", wide: false },
];

const videoHighlights = [
  { title: "Пролетен концерт 2024 — Highlights", duration: "3:45" },
  { title: "Тракийска ръченица — Демонстрация", duration: "2:20" },
  { title: "Детска група — Хоро на празника", duration: "1:55" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("Всички");

  const filtered = galleryItems.filter(
    (item) => activeCategory === "Всички" || item.category === activeCategory
  );

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-primary to-primary/80 py-16 px-6">
        <div className="relative max-w-3xl mx-auto text-center">
          <Images className="w-16 h-16 text-accent mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Галерия
          </h1>
          <p className="text-lg text-primary-foreground/80">
            Моменти от живота на нашата школа — изяви, фестивали и спомени
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Filter Tabs */}
        <section className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-sm text-sm font-medium transition-colors",
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-primary/10 hover:text-primary"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Photo Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {filtered.map((item) => (
              <div
                key={item.id}
                className={cn(
                  "group relative overflow-hidden rounded-sm bg-secondary cursor-pointer",
                  item.wide ? "col-span-2" : "col-span-1"
                )}
              >
                <img
                  src="/placeholder.jpg"
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-white font-bold text-sm">{item.title}</h3>
                  <p className="text-white/80 text-xs mt-0.5">{item.description}</p>
                </div>
                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-primary/90 text-primary-foreground text-xs px-2 py-1 rounded-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              <Camera className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p>Няма снимки в тази категория.</p>
            </div>
          )}
        </section>

        {/* Video Highlights */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-1 bg-accent rounded-full" />
            <h2 className="text-2xl font-bold text-foreground">Видео моменти</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {videoHighlights.map((video, index) => (
              <Card key={index} className="border-border bg-card overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
                <div className="relative bg-secondary h-40 flex items-center justify-center">
                  <img
                    src="/placeholder.jpg"
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                  />
                  <div className="relative z-10 w-14 h-14 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Play className="w-6 h-6 text-primary-foreground ml-1" />
                  </div>
                  <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
                    {video.duration}
                  </span>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground text-sm leading-snug">{video.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-secondary rounded-lg p-10 text-center">
          <Instagram className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Следете ни за още снимки
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Публикуваме редовно снимки и видеа от нашите занятия и изяви в социалните мрежи.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Instagram
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Facebook
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
