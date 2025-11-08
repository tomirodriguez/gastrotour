import {
	Calendar,
	Clock,
	ExternalLink,
	FileText,
	Instagram,
	MapPin,
	Utensils,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function EventDetails() {
	return (
		<section className="relative px-4 py-20 md:py-32">
			<div className="max-w-3xl mx-auto">
				{/* Formal invitation text */}
				<Card className="bg-card border-border/60 p-8 md:p-12 space-y-8 shadow-lg">
					<div className="space-y-6">
						<p className="text-lg md:text-xl leading-relaxed text-foreground">
							Estimada <span className="font-serif font-semibold">M.</span>,
						</p>

						<p className="text-base md:text-lg leading-relaxed text-foreground/90">
							Tenemos el honor de invitarle a una experiencia gastronómica
							exclusiva que celebra la innovación y excelencia de la cocina
							vegana contemporánea en Buenos Aires.
						</p>

						<p className="text-base md:text-lg leading-relaxed text-foreground/90">
							<span className="font-serif font-semibold text-accent">
								GASTROTOUR - Edición Buenos Aires
							</span>{" "}
							es un evento culinario único que reúne a los más distinguidos
							chefs y comensales en una velada dedicada a explorar los límites
							del arte gastronómico vegano.
						</p>
					</div>

					{/* Event information grid */}
					<div className="grid gap-6 pt-8 border-t border-border/60">
						<div className="flex items-start gap-4">
							<div className="mt-1 p-2 rounded-lg bg-accent/10">
								<Utensils className="w-5 h-5 text-accent" />
							</div>
							<div className="flex-1">
								<h3 className="font-semibold text-foreground mb-1">Evento</h3>
								<p className="text-muted-foreground">
									Gastrotour - Edición Buenos Aires
								</p>
							</div>
						</div>

						<div className="flex items-start gap-4">
							<div className="mt-1 p-2 rounded-lg bg-accent/10">
								<MapPin className="w-5 h-5 text-accent" />
							</div>
							<div className="flex-1">
								<h3 className="font-semibold text-foreground mb-1">
									Ubicación
								</h3>
								<a
									href="https://maps.app.goo.gl/VtedxgcqnohRBd4d6"
									target="_blank"
									rel="noopener noreferrer"
									className="text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-1"
								>
									Gordo Vegano, Buenos Aires
									<ExternalLink className="w-3 h-3" />
								</a>
							</div>
						</div>

						<div className="flex items-start gap-4">
							<div className="mt-1 p-2 rounded-lg bg-accent/10">
								<Calendar className="w-5 h-5 text-accent" />
							</div>
							<div className="flex-1">
								<h3 className="font-semibold text-foreground mb-1">Fecha</h3>
								<p className="text-muted-foreground">
									Lunes 10 de Noviembre, 2025
								</p>
							</div>
						</div>

						<div className="flex items-start gap-4">
							<div className="mt-1 p-2 rounded-lg bg-accent/10">
								<Clock className="w-5 h-5 text-accent" />
							</div>
							<div className="flex-1">
								<h3 className="font-semibold text-foreground mb-1">Horario</h3>
								<p className="text-muted-foreground">Cena - Horario Nocturno</p>
							</div>
						</div>
					</div>

					{/* RSVP Section */}
					<div className="pt-8 space-y-6">
						<p className="text-base leading-relaxed text-foreground/80 text-center">
							Su presencia será un honor para nosotros. Le rogamos confirme su
							asistencia a la mayor brevedad posible.
						</p>

						<div className="flex justify-center">
							<Button
								size="lg"
								className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium tracking-wide"
								asChild
							>
								<a
									href="https://wa.me/5491124093583?text=Hola%2C%20confirmo%20mi%20asistencia%20a%20GASTROTOUR%202025"
									target="_blank"
									rel="noopener noreferrer"
								>
									Confirmar Asistencia
								</a>
							</Button>
						</div>

						{/* Additional links */}
						<div className="pt-6 border-t border-border/40">
							<div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
								<a
									href="https://gordovegano.com.ar/menu/menu-completo.pdf"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
								>
									<FileText className="w-4 h-4" />
									Ver Menú Completo
								</a>
								<span className="hidden sm:inline text-muted-foreground/40">
									•
								</span>
								<a
									href="https://www.instagram.com/gordo.vegano/?hl=es"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
								>
									<Instagram className="w-4 h-4" />
									@gordo.vegano
								</a>
							</div>
						</div>
					</div>
				</Card>

				{/* Additional context */}
				<div className="mt-12 text-center space-y-4">
					<p className="text-sm text-muted-foreground italic">
						Vestimenta libre y cómoda
					</p>
				</div>
			</div>
		</section>
	);
}
