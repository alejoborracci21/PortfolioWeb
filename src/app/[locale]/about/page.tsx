import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const metadata: Metadata = {
  title: 'About | Alejo Borracci',
  description: 'Learn more about Alejo Borracci, a fullstack developer with experience in React, Next.js, Node.js, and strong skills in leadership, communication, and teamwork.',
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
              <h1 className="text-4xl font-bold">Hi, I&apos;m Alejo 👋</h1>
              <p className="text-muted-foreground text-lg mt-1">
                Fullstack Web Developer | Computer Technician
              </p>
            </div>
          </div>

          <Separator />

          <section className="space-y-4 text-base leading-relaxed">
            <p>
              I&apos;m a fullstack developer with a solid technical foundation and a passion for creating solutions that generate real value. I studied at <strong>Henry Bootcamp</strong>, where I completed over 800 hours of intensive training focused on modern web technologies, agile methodologies, and teamwork. I also hold a degree as a Computer Technician from Technical School 275.
            </p>
            <p>
              I&apos;m known for my strengths in <strong>planning</strong>, <strong>active listening</strong>, and <strong>effective communication</strong>. During my experience as a Project Manager at <strong>BIMTRAZER</strong> (Oct 2024 - Feb 2025), I coordinated multidisciplinary teams, led weekly meetings with clients, planned new features using agile methodologies (Scrum), and ensured continuous product improvement.
            </p>
            <p>
              I&apos;m seeking opportunities to grow as a fullstack developer, contributing with my knowledge in technologies like <strong>React, Next.js, Node.js, Nest.js, TypeScript, TailwindCSS</strong>, and databases like <strong>PostgreSQL</strong> and <strong>Firebase</strong>.
            </p>
            <p>
              I consider myself a <strong>proactive</strong>, <strong>detail-oriented</strong> person with <strong>leadership skills</strong> developed through collaborative work and project coordination. I enjoy teamwork, learning new technologies, and turning ideas into reality.
            </p>
          </section>

          <Separator />

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Featured Projects</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li><strong>Wearfashion:</strong> Final group project at Henry Bootcamp. I led agile sprints and contributed to fullstack development. (JavaScript, React, Redux, PostgreSQL, Sequelize, Firebase)</li>
              <li><strong>ALK Software:</strong> Web creation platform targeted at non-technical users. Frontend developed using TypeScript, Next.js, TailwindCSS.</li>
              <li><strong>Drivers:</strong> Application integrating external API, full CRUD, and UI design. (React, Express, PostgreSQL)</li>
            </ul>
          </section>

          <Separator />

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Technologies & Tools</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Frontend: React, Next.js, TypeScript, TailwindCSS</li>
              <li>Backend: Node.js, Nest.js, Express</li>
              <li>Databases: PostgreSQL, Sequelize, Firebase</li>
              <li>Version Control: Git, GitHub</li>
              <li>Agile methodologies: Scrum</li>
            </ul>
          </section>

          <Separator />

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Languages</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Spanish (Native)</li>
              <li>English (Intermediate)</li>
            </ul>
          </section>
        </CardContent>
      </Card>
    </main>
  );
}