import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const metadata: Metadata = {
  title: 'About | Alejo Borracci',
  description: 'Conocé más sobre Alejo Borracci, desarrollador fullstack y técnico informático con experiencia en liderazgo de proyectos.',
};

export default function AboutPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12 bg-transparent">
      <Card className="border-none shadow-none bg-transparent">
        <CardContent className="space-y-8">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Avatar className="h-40 w-40">
              <AvatarImage
                src="/images/profile.jpg"
                alt="Alejo Borracci"
                className="h-full w-full object-cover object-center"
              />
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <div className="text-center sm:text-left">
              <h1 className="text-4xl font-bold">Hola, soy Alejo 👋</h1>
              <p className="text-muted-foreground text-lg mt-1">
                Fullstack Developer & Project Manager
              </p>
            </div>
          </div>

          <Separator />

          <section className="space-y-4 text-base leading-relaxed">
            <p>
              Soy desarrollador fullstack y técnico informático de Rosario, Santa Fe. Me formé en la <strong>Academia Henry</strong> como Fullstack Developer, donde completé más de 800 horas de formación intensiva, enfocada en desarrollo web, metodologías ágiles y trabajo en equipo.
            </p>
            <p>
              Me desempeño como <strong>Project Manager en BIMTRAZER</strong>, una empresa de software que integra BIM, inteligencia artificial y blockchain para optimizar procesos constructivos. En mi rol lideré reuniones con clientes, coordiné equipos multidisciplinarios y apliqué Scrum para planificar nuevas funcionalidades.
            </p>
            <p>
              Mi stack incluye React, Next.js, TypeScript, Node.js y TailwindCSS, con experiencia tanto en frontend como en backend. Siempre estoy buscando mejorar mis habilidades y llevar ideas a la realidad a través de la tecnología.
            </p>
          </section>

          <Separator />

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Proyectos destacados</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li><strong>Wearfashion:</strong> Ecommerce desarrollado como proyecto final en Henry, liderando la planificación ágil y el desarrollo fullstack.</li>
              <li><strong>ALK Software:</strong> Plataforma de servicios web diseñada para clientes sin conocimientos técnicos. Participé como desarrollador frontend.</li>
              <li><strong>Drivers:</strong> Aplicación con integración de API externa, CRUD de conductores y diseño de interfaz completo.</li>
            </ul>
          </section>

          <Separator />

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">¿Qué estoy haciendo ahora?</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Dirigiendo el desarrollo de un módulo financiero en BIMTRAZER</li>
              <li>Publicando ebooks generados con inteligencia artificial</li>
              <li>Desarrollando un chatbot gratuito con Next.js y Hugging Face</li>
            </ul>
          </section>
        </CardContent>
      </Card>
    </main>
  );
}