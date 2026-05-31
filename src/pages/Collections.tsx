import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { collections } from "@/data/products";

export default function Collections() {
  return (
    <main>
      {/* Header */}
      <section className="py-20 md:py-28 bg-dk-block border-b border-dk">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-dk-accent" />
            <span className="text-dk-accent font-heading font-semibold text-xs tracking-[0.3em] uppercase">2025</span>
            <div className="w-8 h-0.5 bg-dk-accent" />
          </div>
          <h1 className="section-title mb-6">Все коллекции</h1>
          <p className="section-subtitle max-w-xl mx-auto">
            Каждая коллекция — отдельная история. Найди свою.
          </p>
        </div>
      </section>

      {/* Collections grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="space-y-8">
            {collections.map((col, i) => (
              <div
                key={col.id}
                className={`grid md:grid-cols-2 gap-0 group overflow-hidden border border-dk hover:border-dk-accent transition-all duration-300 ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className={`overflow-hidden aspect-[16/9] md:aspect-auto ${i % 2 !== 0 ? "md:order-2" : ""}`}>
                  <img
                    src={col.image}
                    alt={col.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 min-h-[300px]"
                  />
                </div>
                <div className={`bg-dk-block p-10 md:p-14 flex flex-col justify-center ${i % 2 !== 0 ? "md:order-1" : ""}`}>
                  <div className="w-10 h-0.5 mb-6" style={{ backgroundColor: col.color }} />
                  <h2 className="font-display text-5xl md:text-6xl text-white tracking-wider mb-4">{col.name}</h2>
                  <p className="text-dk-muted text-base leading-relaxed mb-8 max-w-md">{col.description}</p>
                  <Link
                    to={`/catalog?collection=${col.slug}`}
                    className="btn-primary inline-flex items-center gap-3 self-start"
                  >
                    Смотреть коллекцию
                    <Icon name="ArrowRight" size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
