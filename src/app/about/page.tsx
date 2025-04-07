import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const metadata: Metadata = {
  title: 'About | Alejo Borracci',
  description: 'Conocé más sobre Alejo Borracci, desarrollador fullstack junior y project manager en Bimtrazer.',
};

export default function AboutPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12 bg-transparent">
      <Card className="border-none shadow-none bg-transparent">
        <CardContent className="space-y-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-40 w-40">
              <AvatarImage
                src="/images/profile.jpg"
                alt="Alejo Borracci"
                className="h-full w-full object-cover object-center"
              />
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold">Hola, soy Alejo 👋</h1>
              <p className="text-muted-foreground">
                Desarrollador Fullstack & Project Manager
              </p>
            </div>
          </div>

          <Separator />

          <section className="space-y-4">
            <p>
              Soy un desarrollador fullstack junior con experiencia en React,
              TypeScript, Node.js y metodologías ágiles. Actualmente, me
              desempeño como project manager en <strong>Bimtrazer</strong>, una
              empresa de software a medida especializada en BIM, blockchain e
              inteligencia artificial para la industria de la construcción.
            </p>
            <p>
              Me apasiona crear soluciones tecnológicas con impacto real,
              trabajar en equipo y aprender constantemente nuevas herramientas.
              También estoy desarrollando proyectos personales, incluyendo un
              chatbot con IA y la publicación de ebooks generados con
              inteligencia artificial.
            </p>
            <p>
              Cuando no estoy programando, me gusta escribir, leer sobre
              tecnología y experimentar con nuevas ideas.
            </p>
          </section>

          <Separator />

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">
              ¿Qué estoy haciendo ahora?
            </h2>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>
                Dirigiendo el desarrollo de un módulo financiero en Bimtrazer
              </li>
              <li>Publicando mis propios ebooks generados por IA</li>
              <li>Creando un chatbot gratuito con Next.js y Hugging Face</li>
            </ul>
          </section>
        </CardContent>
      </Card>
    </main>
  );
}