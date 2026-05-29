export default function Loading() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh] bg-background">
      {/* Spinner with folk star centre */}
      <div className="relative flex items-center justify-center mb-6">
        <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
        <div className="absolute">
          <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </div>
      </div>

      <p className="text-muted-foreground text-sm uppercase tracking-[0.25em]">
        Зареждане...
      </p>

      {/* Decorative folk divider */}
      <div className="flex items-center gap-3 mt-4">
        <span className="w-8 h-[1px] bg-primary/40" />
        <div className="w-1.5 h-1.5 bg-primary/40 rotate-45" />
        <span className="w-8 h-[1px] bg-primary/40" />
      </div>
    </div>
  );
}
