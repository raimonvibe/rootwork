import { ExternalLink } from "lucide-react";

type SourceCardProps = {
  name: string;
  description: string;
  url: string;
};

export default function SourceCard({ name, description, url }: SourceCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-card border border-root-dark/5 bg-white p-6 shadow-card transition-smooth hover:-translate-y-1 hover:border-root-coral/20 hover:shadow-lg"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg text-root-dark transition-smooth group-hover:text-root-coral">
          {name}
        </h3>
        <ExternalLink className="h-5 w-5 shrink-0 text-root-dark/30 transition-smooth group-hover:text-root-coral" />
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-root-dark/65">
        {description}
      </p>
      <span className="mt-4 text-xs font-medium text-root-coral">
        Visit source →
      </span>
    </a>
  );
}
