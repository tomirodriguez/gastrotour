export function InvitationHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 md:py-24">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border border-accent/20 rounded-full" />
        <div className="absolute bottom-32 right-16 w-40 h-40 border border-accent/20 rounded-full" />
        <div className="absolute top-1/2 right-1/4 w-24 h-24 border border-accent/20" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center space-y-8">
        {/* Year badge */}
        <div className="inline-flex items-center justify-center">
          <div className="h-px w-12 bg-accent/40" />
          <span className="mx-4 text-sm tracking-[0.3em] text-accent font-medium">2025</span>
          <div className="h-px w-12 bg-accent/40" />
        </div>

        {/* Main title */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
          GASTROTOUR
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground tracking-wide">Experiencia Gastronómica Vegana</p>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 pt-6">
          <div className="w-2 h-2 rounded-full bg-accent" />
          <div className="w-2 h-2 rounded-full bg-accent/60" />
          <div className="w-2 h-2 rounded-full bg-accent/30" />
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-muted-foreground/60">
          <span className="text-xs tracking-widest uppercase">Desliza</span>
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}
