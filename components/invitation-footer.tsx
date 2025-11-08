export function InvitationFooter() {
  return (
    <footer className="relative px-4 py-16 border-t border-border/40">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="flex items-center justify-center gap-3">
          <div className="w-2 h-2 rounded-full bg-accent" />
          <div className="w-2 h-2 rounded-full bg-accent/60" />
          <div className="w-2 h-2 rounded-full bg-accent/30" />
        </div>

        <p className="font-serif text-2xl md:text-3xl font-bold tracking-tight">GASTROTOUR 2025</p>

        <p className="text-sm text-muted-foreground">Una experiencia exclusiva de alta gastronomía vegana</p>

        <div className="pt-6 text-xs text-muted-foreground/60">© 2025 GASTROTOUR. Todos los derechos reservados.</div>
      </div>
    </footer>
  )
}
