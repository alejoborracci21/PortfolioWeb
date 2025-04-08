import { Check } from "lucide-react"

interface Feature {
  title: string
  description: string
}

interface ProjectFeaturesProps {
  features: Feature[]
}

export default function ProjectFeatures({ features }: ProjectFeaturesProps) {
  return (
    <div className="w-full max-w-4xl mx-auto py-12">
      <h2 className="text-2xl font-bold text-center mb-8">Key Features</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex gap-4 p-6 rounded-xl bg-card/50 border border-border/40 hover:border-accent/20 transition-colors"
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
              <Check className="w-4 h-4 text-accent" />
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
