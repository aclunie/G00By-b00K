import Matrix from "@/components/matrix1";


export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <Matrix />
        
        {children}
      </div>
    </section>
  );
}



