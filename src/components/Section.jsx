export default function Section({ title, children }) {
  return (
    <section className="my-8 px-4 md:px-16">
      <h2 className="text-2xl font-semibold text-indigo-500 mb-4">{title}</h2>
      <div>{children}</div>
    </section>
  );
}
