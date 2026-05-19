type PageHeaderProps = {
  title: string;
  description: string;
};

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-12 pt-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl text-root-dark md:text-5xl">{title}</h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-root-dark/70">
        {description}
      </p>
    </div>
  );
}
