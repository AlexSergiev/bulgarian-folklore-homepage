"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Home,
  Music,
  Calendar,
  Users,
  Images,
  Mail,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { PageTransition } from "@/components/page-transition";

const menuItems = [
  {
    title: "За нас",
    href: "/learn-more",
    icon: Home,
    description: "История и мисия",
  },
  {
    title: "Танци",
    href: "/learn-more/dances",
    icon: Music,
    description: "Видове хора",
  },
  {
    title: "Разписание",
    href: "/learn-more/schedule",
    icon: Calendar,
    description: "Часове и групи",
  },
  {
    title: "Инструктори",
    href: "/learn-more/instructors",
    icon: Users,
    description: "Нашият екип",
  },
  {
    title: "Галерия",
    href: "/learn-more/gallery",
    icon: Images,
    description: "Снимки и видеа",
  },
  {
    title: "Контакти",
    href: "/learn-more/contact",
    icon: Mail,
    description: "Свържете се",
  },
];

export default function LearnMoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside
        className={cn(
          "sticky top-0 h-screen bg-card border-r border-border transition-all duration-300 flex flex-col",
          isCollapsed ? "w-20" : "w-72"
        )}
      >
        {/* Sidebar Header */}
        <div className="p-4 border-b border-border">
          <Link href="/" className="flex items-center gap-3">
            {/* Folk Pattern Icon */}
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-6 h-6 text-primary-foreground" />
            </div>
            {!isCollapsed && (
              <div className="overflow-hidden">
                <h2 className="font-bold text-foreground text-lg leading-tight">
                  Фолклорна Школа
                </h2>
                <p className="text-xs text-muted-foreground">Традиция и танц</p>
              </div>
            )}
          </Link>
        </div>

        {/* Decorative Border */}
        {!isCollapsed && (
          <div className="px-4 py-2">
            <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full" />
          </div>
        )}

        {/* Navigation */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {menuItems.map((item, index) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  animationDelay: `${index * 80}ms`,
                  animationFillMode: "both",
                }}
                className={cn(
                  "group flex items-center gap-3 py-3 rounded-lg transition-all duration-300 relative",
                  "animate-in fade-in slide-in-from-left-4",
                  isCollapsed ? "justify-center px-0" : "px-3",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "hover:bg-secondary text-foreground"
                )}
              >
                {/* Active Indicator */}
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-accent rounded-r-full" />
                )}

                <div
                  className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors",
                    isActive
                      ? "bg-primary-foreground/20"
                      : "bg-secondary group-hover:bg-primary/10"
                  )}
                >
                  <Icon
                    className={cn(
                      "w-5 h-5",
                      isActive
                        ? "text-primary-foreground"
                        : "text-primary group-hover:text-primary"
                    )}
                  />
                </div>

                {!isCollapsed && (
                  <div className="overflow-hidden">
                    <span className="font-semibold block">{item.title}</span>
                    <span
                      className={cn(
                        "text-xs",
                        isActive
                          ? "text-primary-foreground/80"
                          : "text-muted-foreground"
                      )}
                    >
                      {item.description}
                    </span>
                  </div>
                )}

                {/* Hover Decoration */}
                {!isActive && !isCollapsed && (
                  <div className="absolute right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronRight className="w-4 h-4 text-primary" />
                  </div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Decorative Folk Pattern */}
        {!isCollapsed && (
          <div className="px-4 py-3 border-t border-border">
            <div className="flex justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "w-2 h-2 rounded-full",
                    i % 2 === 0 ? "bg-primary" : "bg-accent"
                  )}
                />
              ))}
            </div>
            <p className="text-center text-xs text-muted-foreground mt-2">
              25+ години традиция
            </p>
          </div>
        )}

        {/* Collapse Button */}
        <div className="p-3 border-t border-border">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground transition-colors cursor-pointer"
          >
            {isCollapsed ? (
              <ChevronRight className="w-5 h-5" />
            ) : (
              <>
                <ChevronLeft className="w-5 h-5" />
                <span className="text-sm">Свий</span>
              </>
            )}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-h-screen">
        <PageTransition>{children}</PageTransition>
      </main>
    </div>
  );
}
