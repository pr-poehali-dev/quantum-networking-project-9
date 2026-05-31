import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { products } from "@/data/products";

export default function Product() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Icon name="Package" size={64} className="text-dk-muted mx-auto mb-4" />
          <h2 className="font-display text-4xl text-white mb-4">Товар не найден</h2>
          <Link to="/catalog" className="btn-primary">Вернуться в каталог</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) return;
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const related = products.filter((p) => p.id !== product.id && p.collection === product.collection).slice(0, 3);

  return (
    <main>
      {/* Breadcrumb */}
      <div className="bg-dk-block border-b border-dk-border py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center gap-2 text-dk-muted text-sm">
          <Link to="/" className="hover:text-white transition-colors">Главная</Link>
          <Icon name="ChevronRight" size={14} />
          <Link to="/catalog" className="hover:text-white transition-colors">Каталог</Link>
          <Icon name="ChevronRight" size={14} />
          <span className="text-white">{product.name}</span>
        </div>
      </div>

      {/* Product */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            {/* Gallery */}
            <div className="space-y-4">
              <div className="aspect-[4/5] overflow-hidden border border-dk-border">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`w-20 h-20 overflow-hidden border-2 transition-all ${selectedImage === i ? "border-dk-accent" : "border-dk-border hover:border-dk-muted"}`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div>
              <div className="text-dk-muted text-xs font-heading tracking-widest uppercase mb-2">{product.collection}</div>
              <h1 className="font-display text-4xl md:text-5xl text-white mb-4">{product.name}</h1>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <span className="font-display text-4xl text-dk-gold glow-gold">
                  {product.price.toLocaleString("ru-RU")} ₽
                </span>
                {product.oldPrice && (
                  <>
                    <span className="text-dk-muted text-xl line-through">
                      {product.oldPrice.toLocaleString("ru-RU")} ₽
                    </span>
                    {product.discount && (
                      <span className="bg-dk-sale text-white text-sm font-bold font-heading px-3 py-1">
                        -{product.discount}%
                      </span>
                    )}
                  </>
                )}
              </div>

              <p className="text-dk-muted text-sm leading-relaxed mb-8">{product.description}</p>

              {/* Color */}
              <div className="mb-6">
                <div className="text-dk-muted text-xs font-heading tracking-widest uppercase mb-3">Цвет</div>
                <div className="flex gap-3">
                  {product.colors.map((color, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedColor(i)}
                      className={`w-8 h-8 border-2 transition-all ${selectedColor === i ? "border-dk-accent scale-110" : "border-dk-border hover:border-white"}`}
                      style={{ backgroundColor: color }}
                      aria-label={`Цвет ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Size */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-dk-muted text-xs font-heading tracking-widest uppercase">Размер</div>
                  <button className="text-dk-accent text-xs font-heading underline">Таблица размеров</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[48px] h-10 px-3 border text-sm font-heading font-bold tracking-wide transition-all ${
                        selectedSize === size
                          ? "border-dk-accent bg-dk-accent text-white"
                          : "border-dk-border text-dk-muted hover:border-white hover:text-white"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {!selectedSize && (
                  <p className="text-dk-muted text-xs mt-2">Выберите размер</p>
                )}
              </div>

              {/* CTA */}
              <div className="flex gap-4 mb-8">
                <button
                  onClick={handleAddToCart}
                  disabled={!selectedSize}
                  className={`flex-1 btn-primary flex items-center justify-center gap-3 ${!selectedSize ? "opacity-50 cursor-not-allowed" : "hover-glow"}`}
                >
                  <Icon name={added ? "Check" : "ShoppingBag"} size={18} />
                  {added ? "Добавлено!" : "Купить"}
                </button>
                <button className="btn-outline w-12 h-12 flex items-center justify-center p-0" aria-label="В избранное">
                  <Icon name="Heart" size={18} />
                </button>
              </div>

              {/* Meta */}
              <div className="space-y-3 border-t border-dk-border pt-6">
                {[
                  { icon: "Tag", label: "Материал", value: product.material },
                  { icon: "Truck", label: "Доставка", value: "2-5 рабочих дней" },
                  { icon: "RotateCcw", label: "Возврат", value: "30 дней" },
                  { icon: "Shield", label: "Гарантия", value: "12 месяцев" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <Icon name={item.icon as "Tag"} size={16} className="text-dk-accent flex-shrink-0" />
                    <span className="text-dk-muted text-sm">{item.label}:</span>
                    <span className="text-white text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16 bg-dk-block border-t border-dk-border">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="font-display text-3xl text-white tracking-wider mb-8">Из той же коллекции</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="card-product">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading font-bold text-white mb-2 group-hover:text-dk-accent transition-colors">{p.name}</h3>
                    <span className="text-dk-gold font-bold font-heading">{p.price.toLocaleString("ru-RU")} ₽</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}