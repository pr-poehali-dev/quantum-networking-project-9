import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { products, collections } from "@/data/products";

export default function Catalog() {
  const [searchParams] = useSearchParams();
  const [selectedCollection, setSelectedCollection] = useState(searchParams.get("collection") || "all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState(searchParams.get("sort") || "default");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const categories = ["all", ...Array.from(new Set(products.map((p) => p.category)))];

  const filtered = useMemo(() => {
    let result = [...products];
    if (selectedCollection !== "all") {
      result = result.filter((p) => p.collection.toLowerCase().replace(/\s+/g, "-") === selectedCollection);
    }
    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);
    if (sortBy === "price-asc") result.sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") result.sort((a, b) => b.price - a.price);
    if (sortBy === "hits") result.sort((a, b) => (b.isHit ? 1 : 0) - (a.isHit ? 1 : 0));
    if (sortBy === "new") result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    return result;
  }, [selectedCollection, selectedCategory, sortBy, priceRange]);

  return (
    <main>
      {/* Header */}
      <section className="py-14 bg-dk-block border-b border-dk-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 text-dk-muted text-sm mb-4">
            <Link to="/" className="hover:text-white transition-colors">Главная</Link>
            <Icon name="ChevronRight" size={14} />
            <span className="text-white">Каталог</span>
          </div>
          <h1 className="section-title">Каталог</h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside className={`w-64 flex-shrink-0 ${filtersOpen ? "block" : "hidden"} md:block`}>
            <div className="bg-dk-block border border-dk-border p-6 sticky top-24">
              <h3 className="font-heading font-bold text-white tracking-widest uppercase text-sm mb-6">Фильтры</h3>

              {/* Collections */}
              <div className="mb-6">
                <h4 className="text-dk-muted text-xs tracking-widest uppercase mb-3 font-heading">Коллекция</h4>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCollection("all")}
                    className={`w-full text-left text-sm py-1.5 transition-colors ${selectedCollection === "all" ? "text-dk-accent font-semibold" : "text-dk-muted hover:text-white"}`}
                  >
                    Все коллекции
                  </button>
                  {collections.map((col) => (
                    <button
                      key={col.id}
                      onClick={() => setSelectedCollection(col.slug)}
                      className={`w-full text-left text-sm py-1.5 transition-colors ${selectedCollection === col.slug ? "text-dk-accent font-semibold" : "text-dk-muted hover:text-white"}`}
                    >
                      {col.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category */}
              <div className="mb-6">
                <h4 className="text-dk-muted text-xs tracking-widest uppercase mb-3 font-heading">Категория</h4>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left text-sm py-1.5 transition-colors ${selectedCategory === cat ? "text-dk-accent font-semibold" : "text-dk-muted hover:text-white"}`}
                    >
                      {cat === "all" ? "Все категории" : cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h4 className="text-dk-muted text-xs tracking-widest uppercase mb-3 font-heading">Цена</h4>
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
                    className="w-full bg-dk-bg border border-dk-border text-white text-xs px-2 py-1.5 focus:outline-none focus:border-dk-accent"
                    placeholder="от"
                  />
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                    className="w-full bg-dk-bg border border-dk-border text-white text-xs px-2 py-1.5 focus:outline-none focus:border-dk-accent"
                    placeholder="до"
                  />
                </div>
              </div>
            </div>
          </aside>

          {/* Main */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setFiltersOpen(!filtersOpen)}
                  className="md:hidden btn-outline flex items-center gap-2 py-2 px-4"
                >
                  <Icon name="SlidersHorizontal" size={16} />
                  Фильтры
                </button>
                <span className="text-dk-muted text-sm">{filtered.length} товаров</span>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-dk-block border border-dk-border text-white text-sm px-4 py-2 focus:outline-none focus:border-dk-accent cursor-pointer"
              >
                <option value="default">По умолчанию</option>
                <option value="hits">Хиты сезона</option>
                <option value="new">Новинки</option>
                <option value="price-asc">Цена: дешевле</option>
                <option value="price-desc">Цена: дороже</option>
              </select>
            </div>

            {/* Products Grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <Icon name="Package" size={48} className="text-dk-muted mx-auto mb-4" />
                <p className="text-dk-muted text-lg font-heading">Товары не найдены</p>
                <button onClick={() => { setSelectedCollection("all"); setSelectedCategory("all"); }} className="btn-outline mt-6">
                  Сбросить фильтры
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`} className="card-product">
                    <div className="relative overflow-hidden aspect-[3/4]">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {product.discount && (
                        <div className="absolute top-3 left-3 bg-dk-sale text-white text-xs font-bold font-heading px-2.5 py-1">
                          -{product.discount}%
                        </div>
                      )}
                      {product.isNew && !product.discount && (
                        <div className="absolute top-3 left-3 bg-dk-accent text-white text-xs font-bold font-heading px-2.5 py-1">
                          NEW
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="text-dk-muted text-xs font-heading tracking-widest uppercase mb-1">{product.collection}</div>
                      <h3 className="font-heading font-bold text-white text-base mb-3 group-hover:text-dk-accent transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-dk-gold font-bold font-heading text-lg">
                            {product.price.toLocaleString("ru-RU")} ₽
                          </span>
                          {product.oldPrice && (
                            <span className="text-dk-muted text-sm line-through">
                              {product.oldPrice.toLocaleString("ru-RU")} ₽
                            </span>
                          )}
                        </div>
                        <button
                          className="w-8 h-8 bg-dk-accent flex items-center justify-center text-white hover:bg-orange-600 transition-colors"
                          onClick={(e) => { e.preventDefault(); }}
                          aria-label="В корзину"
                        >
                          <Icon name="ShoppingBag" size={14} />
                        </button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}