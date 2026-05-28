"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, MapPin, ChevronRight, Star } from "lucide-react";

const weeklySchedule = [
  {
    day: "Понеделник",
    sessions: [
      { time: "17:00 - 18:30", group: "Детска група (5-10 г.)", level: "Начинаещи", spots: 3 },
      { time: "18:30 - 20:00", group: "Начинаещи възрастни", level: "Начинаещи", spots: 5 },
      { time: "20:00 - 21:30", group: "Средно ниво", level: "Средно", spots: 2 },
    ],
  },
  {
    day: "Вторник",
    sessions: [
      { time: "18:00 - 19:30", group: "Младежка група (14-18 г.)", level: "Средно", spots: 4 },
      { time: "19:30 - 21:00", group: "Напреднали", level: "Напреднали", spots: 6 },
    ],
  },
  {
    day: "Сряда",
    sessions: [
      { time: "17:00 - 18:30", group: "Детска група (5-10 г.)", level: "Начинаещи", spots: 2 },
      { time: "18:30 - 20:00", group: "Начинаещи възрастни", level: "Начинаещи", spots: 7 },
      { time: "20:00 - 21:30", group: "Тракийски танци", level: "Средно", spots: 4 },
    ],
  },
  {
    day: "Четвъртък",
    sessions: [
      { time: "18:00 - 19:30", group: "Шопски танци", level: "Средно", spots: 5 },
      { time: "19:30 - 21:00", group: "Напреднали", level: "Напреднали", spots: 3 },
    ],
  },
  {
    day: "Петък",
    sessions: [
      { time: "17:00 - 18:30", group: "Детска група (10-14 г.)", level: "Средно", spots: 4 },
      { time: "18:30 - 20:00", group: "Открит урок", level: "Всички", spots: 10 },
    ],
  },
  {
    day: "Събота",
    sessions: [
      { time: "10:00 - 11:30", group: "Семеен клас", level: "Начинаещи", spots: 8 },
      { time: "11:30 - 13:00", group: "Подготовка за изяви", level: "Напреднали", spots: 0 },
      { time: "14:00 - 16:00", group: "Интензивен курс", level: "Средно", spots: 6 },
    ],
  },
];

const upcomingEvents = [
  {
    date: "15 Юни",
    title: "Летен фолклорен фестивал",
    location: "НДК, София",
    type: "Концерт",
  },
  {
    date: "22 Юни",
    title: "Ден на отворените врати",
    location: "Нашата зала",
    type: "Събитие",
  },
  {
    date: "8 Юли",
    title: "Международен фестивал",
    location: "Копривщица",
    type: "Фестивал",
  },
];

export default function SchedulePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-accent/80 to-accent py-16 px-6">
        <div className="relative max-w-3xl mx-auto text-center">
          <Calendar className="w-16 h-16 text-accent-foreground mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-accent-foreground mb-4">
            Разписание
          </h1>
          <p className="text-lg text-accent-foreground/80">
            Изберете удобно време за вашите занятия
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Quick Info */}
        <section className="mb-12">
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-4 p-4 bg-secondary rounded-lg">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Работно време</p>
                <p className="text-sm text-muted-foreground">Пон - Съб</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-secondary rounded-lg">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Локация</p>
                <p className="text-sm text-muted-foreground">ул. Народна 15, София</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-secondary rounded-lg">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Групи</p>
                <p className="text-sm text-muted-foreground">6-15 човека</p>
              </div>
            </div>
          </div>
        </section>

        {/* Weekly Schedule */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-1 bg-primary rounded-full" />
            <h2 className="text-2xl font-bold text-foreground">Седмична програма</h2>
          </div>

          <div className="space-y-6">
            {weeklySchedule.map((day, dayIndex) => (
              <Card key={dayIndex} className="border-border bg-card overflow-hidden">
                <div className="bg-primary px-6 py-3">
                  <h3 className="font-bold text-primary-foreground text-lg">{day.day}</h3>
                </div>
                <CardContent className="p-0">
                  <div className="divide-y divide-border">
                    {day.sessions.map((session, sessionIndex) => (
                      <div
                        key={sessionIndex}
                        className="flex items-center justify-between p-4 hover:bg-secondary/50 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-20 text-center">
                            <p className="text-sm font-semibold text-primary">
                              {session.time.split(" - ")[0]}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {session.time.split(" - ")[1]}
                            </p>
                          </div>
                          <div className="h-10 w-px bg-border" />
                          <div>
                            <h4 className="font-semibold text-foreground">{session.group}</h4>
                            <p className="text-sm text-muted-foreground">{session.level}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          {session.spots > 0 ? (
                            <>
                              <span className="text-sm text-muted-foreground">
                                {session.spots} свободни места
                              </span>
                              <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                                Запиши се
                              </Button>
                            </>
                          ) : (
                            <span className="text-sm text-destructive font-medium">
                              Запълнено
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-1 bg-accent rounded-full" />
            <h2 className="text-2xl font-bold text-foreground">Предстоящи събития</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary rounded-lg p-3 text-center min-w-[60px]">
                      <p className="text-xs text-primary-foreground/80">
                        {event.date.split(" ")[1]}
                      </p>
                      <p className="text-2xl font-bold text-primary-foreground">
                        {event.date.split(" ")[0]}
                      </p>
                    </div>
                    <div>
                      <span className="text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded-sm">
                        {event.type}
                      </span>
                      <h3 className="font-semibold text-foreground mt-2">{event.title}</h3>
                      <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" />
                        {event.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Pricing Note */}
        <section className="bg-primary rounded-lg p-8 text-center">
          <Star className="w-10 h-10 text-accent mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-primary-foreground mb-3">
            Специална оферта
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            Първото пробно занятие е напълно безплатно! Елате и се убедете сами в качеството на нашите уроци.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <ChevronRight className="mr-2 w-5 h-5" />
              Резервирай безплатен урок
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
