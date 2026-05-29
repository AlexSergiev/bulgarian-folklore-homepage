"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Music, Heart, Star, Calendar } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative bg-primary py-16 px-6">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-4 w-16 h-16 border-4 border-primary-foreground rounded-full" />
          <div className="absolute bottom-4 right-4 w-24 h-24 border-4 border-primary-foreground rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-primary-foreground rounded-full" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            За нашата школа
          </h1>
          <p className="text-lg text-primary-foreground/80">
            Съхраняваме традицията, вдъхновяваме бъдещето
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Story Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-1 bg-primary rounded-full" />
            <h2 className="text-2xl font-bold text-foreground">Нашата история</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Българската фолклорна танцова школа е основана през 1998 година с мисията да 
                съхрани и предаде богатото танцово наследство на България на следващите поколения.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Нашите опитни хореографи са посветили живота си на изучаването и преподаването 
                на автентични български народни танци от всички фолклорни области.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                През годините сме обучили над 500 възпитаници, участвали сме в национални и 
                международни фестивали, и сме спечелили множество награди за съхраняване на 
                българската традиция.
              </p>
            </div>
            
            <div className="bg-secondary rounded-lg p-8 text-center">
              <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Heart className="w-12 h-12 text-primary-foreground" />
              </div>
              <p className="text-xl font-semibold text-foreground mb-2">25+ години</p>
              <p className="text-muted-foreground">посветени на българския фолклор</p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-1 bg-accent rounded-full" />
            <h2 className="text-2xl font-bold text-foreground">Нашата мисия</h2>
          </div>
          
          <Card className="bg-gradient-to-br from-card to-secondary border-border">
            <CardContent className="p-8">
              <p className="text-lg text-foreground leading-relaxed text-center italic">
                &ldquo;Да запазим живо богатото танцово наследство на България, като го предадем 
                на младите поколения с любов, уважение и автентичност. Вярваме, че чрез танца 
                се съхранява душата на народа ни.&rdquo;
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-1 bg-primary rounded-full" />
            <h2 className="text-2xl font-bold text-foreground">Нашите ценности</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Music className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Автентичност</h3>
                <p className="text-sm text-muted-foreground">
                  Преподаваме танци в техния оригинален вид, запазвайки регионалните особености
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Общност</h3>
                <p className="text-sm text-muted-foreground">
                  Създаваме топла и приветлива атмосфера за всички възрасти
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Star className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Качество</h3>
                <p className="text-sm text-muted-foreground">
                  Високо ниво на преподаване с професионални хореографи
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-1 bg-accent rounded-full" />
            <h2 className="text-2xl font-bold text-foreground">Постижения</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { number: "500+", label: "Обучени танцьори" },
              { number: "10", label: "Национални награди" },
              { number: "50+", label: "Фестивални участия" },
              { number: "15", label: "Вида танци" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-secondary rounded-lg p-6 text-center"
              >
                <p className="text-3xl font-bold text-primary mb-1">{stat.number}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-primary rounded-lg p-10">
          <Award className="w-12 h-12 text-accent mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-primary-foreground mb-4">
            Станете част от нашето семейство
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            Открийте магията на българския фолклор заедно с нас. Първото пробно занятие е безплатно!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 cursor-pointer"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Запишете се сега
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary cursor-pointer"
            >
              Научете повече
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
