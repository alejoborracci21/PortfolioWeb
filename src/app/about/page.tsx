import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const metadata: Metadata = {
  title: 'About | Alejo Borracci',
  description: 'Conocé más sobre Alejo Borracci, desarrollador fullstack con experiencia en React, Next.js, Node.js y habilidades en liderazgo, comunicación y trabajo en equipo.',
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
                Desarrollador Web Fullstack | Técnico en Informática
              </p>
            </div>
          </div>

          <Separator />

          <section className="space-y-4 text-base leading-relaxed">
            <p>
              Soy un desarrollador fullstack con una sólida base técnica y una gran pasión por crear soluciones que aporten valor real. Me formé en la <strong>Academia Henry</strong>, donde completé más de 800 horas de formación intensiva enfocada en tecnologías web modernas, metodologías ágiles y trabajo en equipo. También soy Técnico en Informática, egresado de la Escuela Técnica 275.
            </p>
            <p>
              Me destaco por mi capacidad de <strong>planificación</strong>, <strong>escucha activa</strong> y <strong>comunicación efectiva</strong>. Durante mi experiencia como Project Manager en <strong>BIMTRAZER</strong> (Oct 2024 - Feb 2025), coordiné equipos multidisciplinarios, mantuve reuniones semanales con clientes, planifiqué nuevas funcionalidades con metodologías ágiles (Scrum) y aseguré la evolución continua del producto.
            </p>
            <p>
              Busco oportunidades para crecer como desarrollador fullstack, aportando mis conocimientos en tecnologías como <strong>React, Next.js, Node.js, Nest.js, TypeScript, TailwindCSS</strong> y bases de datos como <strong>PostgreSQL</strong> y <strong>Firebase</strong>.
            </p>
            <p>
              Me considero una persona <strong>proactiva</strong>, <strong>orientada al detalle</strong> y con habilidades de <strong>liderazgo</strong> desarrolladas a través del trabajo colaborativo y la gestión de proyectos. Disfruto trabajar en equipo, aprender nuevas tecnologías y llevar ideas a la realidad.
            </p>
          </section>

          <Separator />

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Proyectos destacados</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li><strong>Wearfashion:</strong> Ecommerce como proyecto final en Henry. Lideré sprints ágiles y participé en el desarrollo fullstack. (JavaScript, React, Redux, PostgreSQL, Sequelize, Firebase)</li>
              <li><strong>ALK Software:</strong> Plataforma para creación de sitios web orientada a usuarios sin conocimientos técnicos. Desarrollo frontend con TypeScript, Next.js, TailwindCSS.</li>
              <li><strong>Drivers:</strong> Aplicación con integración de API externa, CRUD completo y diseño UI. (React, Express, PostgreSQL)</li>
            </ul>
          </section>

          <Separator />

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Tecnologías y herramientas</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Frontend: React, Next.js, TypeScript, TailwindCSS</li>
              <li>Backend: Node.js, Nest.js, Express</li>
              <li>Base de datos: PostgreSQL, Sequelize, Firebase</li>
              <li>Control de versiones: Git, GitHub</li>
              <li>Metodologías ágiles: Scrum</li>
            </ul>
          </section>

          <Separator />

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Idiomas</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Español (Nativo)</li>
              <li>Inglés (Intermedio)</li>
            </ul>
          </section>
        </CardContent>
      </Card>
    </main>
  );
}
