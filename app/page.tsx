import { InvitationHero } from "@/components/invitation-hero"
import { EventDetails } from "@/components/event-details"
import { InvitationFooter } from "@/components/invitation-footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <InvitationHero />
      <EventDetails />
      <InvitationFooter />
    </main>
  )
}
