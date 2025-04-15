import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-white">
      <Suspense fallback={<div className="text-2xl">Cargando...</div>}>
        <div className="text-center space-y-4 mb-20">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wider animate__animated animate__fadeInDown animate__delay-1s">
            HOLA. SOY <span className="text-accent">ALEJO BORRACCI</span>.
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold tracking-wider text-zinc-300 animate__animated animate__fadeInDown animate__delay-1s">
            DESARROLLADOR WEB FULL STACK.
          </h2>
        </div>

        <div className="max-w-3xl mx-auto px-4 w-full">
          {[
            { num: "01", text: "Mis proyectos", href: "/works" },
            { num: "02", text: "Más sobre mí", href: "/about" },
            {
              num: "03",
              text: "Envíame un mensaje",
              href: "mailto:alejotrabajo2001@hotmail.com",
            },
          ].map((item) => (
            <a
              key={item.num}
              href={item.href}
              className="flex items-center justify-between p-4 border border-zinc-800 rounded-lg hover:bg-zinc-900/50 hover:border-accent transition-all mb-4 animate__animated animate__backInLeft text-white animate__delay-1s">
              <div className="flex items-center gap-4">
                <span className="text-zinc-400">{item.num}</span>
                <span>{item.text}</span>
              </div>
              <span className="text-xl text-accent">→</span>
            </a>
          ))}
        </div>
      </Suspense>
    </main>
  );
}