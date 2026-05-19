import { ExternalLink } from "lucide-react";

type SourceCardProps = {
  name: string;
  description: string;
  url: string;
  alternateUrl?: string;
  alternateLabel?: string;
};

const externalLinkProps = {
  target: "_blank" as const,
  rel: "noopener",
};

export default function SourceCard({
  name,
  description,
  url,
  alternateUrl,
  alternateLabel,
}: SourceCardProps) {
  return (
    <article
      data-read-aloud-block
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
      <a
        href={url}
        {...externalLinkProps}
        className="mt-4 inline-flex min-h-11 items-center text-xs font-medium text-root-coral hover:underline"
      >
        Visit {name} →
      </a>
      {alternateUrl && (
        <a
          href={alternateUrl}
          {...externalLinkProps}
          className="mt-2 inline-flex min-h-11 items-center text-xs text-root-dark/55 hover:text-root-coral hover:underline"
        >
          {alternateLabel ?? "Alternate link"} →
        </a>
      )}
    </article>
  );
}
