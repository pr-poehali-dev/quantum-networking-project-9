import { useState } from "react";
import Icon from "@/components/ui/icon";

const BASE_ITEMS = [
  { id: "tshirt", label: "Футболка", price: 2990, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80" },
  { id: "hoodie", label: "Худи", price: 5990, image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400&q=80" },
  { id: "sweatshirt", label: "Свитшот", price: 4490, image: "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=400&q=80" },
  { id: "longsleeve", label: "Лонгслив", price: 3490, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80" },
];

const COLORS = [
  { id: "black", label: "Чёрный", hex: "#0A0A0A" },
  { id: "white", label: "Белый", hex: "#F5F5F5" },
  { id: "gray", label: "Серый", hex: "#888888" },
  { id: "orange", label: "Оранжевый", hex: "#E85D04" },
  { id: "green", label: "Зелёный", hex: "#2D6A4F" },
  { id: "navy", label: "Синий", hex: "#1D3557" },
];

const PRINTS = [
  { id: "dragon", label: "Dragon Classic", price: 500 },
  { id: "fire", label: "Fire Wings", price: 700 },
  { id: "scale", label: "Dragon Scale", price: 600 },
  { id: "none", label: "Без принта", price: 0 },
];

const SIZES = ["XS", "S", "M", "L", "XL", "XXL", "3XL"];

export default function Customize() {
  const [step, setStep] = useState(1);
  const [base, setBase] = useState(BASE_ITEMS[0]);
  const [color, setColor] = useState(COLORS[0]);
  const [print, setPrint] = useState(PRINTS[0]);
  const [size, setSize] = useState("");
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const total = base.price + print.price;

  const steps = [
    { n: 1, label: "База" },
    { n: 2, label: "Цвет" },
    { n: 3, label: "Принт" },
    { n: 4, label: "Размер" },
    { n: 5, label: "Текст" },
  ];

  if (submitted) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <div className="w-20 h-20 bg-dk-accent/10 border border-dk-accent flex items-center justify-center mx-auto mb-6">
            <Icon name="Check" size={36} className="text-dk-accent" />
          </div>
          <h2 className="font-display text-5xl text-white tracking-wider mb-4">ГОТОВО!</h2>
          <p className="text-dk-muted text-base leading-relaxed mb-8">
            Твой заказ принят. Мы свяжемся с тобой в течение 24 часов для подтверждения.
          </p>
          <button onClick={() => { setSubmitted(false); setStep(1); }} className="btn-primary">
            Создать ещё
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      {/* Header */}
      <section className="py-14 bg-dk-block border-b border-dk">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-dk-gold" />
            <span className="text-dk-gold font-heading font-semibold text-xs tracking-[0.3em] uppercase">Кастомизация</span>
          </div>
          <h1 className="section-title mb-2">Ваш дизайн — ваши правила</h1>
          <p className="section-subtitle">Создайте уникальную вещь за 5 шагов</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Steps indicator */}
        <div className="flex items-center gap-0 mb-12 overflow-x-auto pb-2">
          {steps.map((s, i) => (
            <div key={s.n} className="flex items-center flex-shrink-0">
              <button
                onClick={() => s.n < step && setStep(s.n)}
                className={`flex items-center gap-2 px-4 py-2 font-heading font-bold text-sm tracking-wide transition-all ${
                  step === s.n
                    ? "bg-dk-accent text-white"
                    : step > s.n
                    ? "bg-dk-block border border-dk-accent text-dk-accent cursor-pointer"
                    : "bg-dk-block border border-dk text-dk-muted cursor-not-allowed"
                }`}
              >
                <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-xs">
                  {step > s.n ? <Icon name="Check" size={12} /> : s.n}
                </span>
                {s.label}
              </button>
              {i < steps.length - 1 && (
                <div className={`w-8 h-0.5 flex-shrink-0 ${step > s.n ? "bg-dk-accent" : "bg-dk-border"}`} />
              )}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Step content */}
          <div className="md:col-span-2">
            {/* Step 1: Base */}
            {step === 1 && (
              <div>
                <h2 className="font-display text-3xl text-white tracking-wider mb-6">Выберите базу</h2>
                <div className="grid grid-cols-2 gap-4">
                  {BASE_ITEMS.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setBase(item)}
                      className={`border-2 overflow-hidden transition-all text-left ${base.id === item.id ? "border-dk-accent" : "border-dk hover:border-dk-muted"}`}
                    >
                      <div className="aspect-square overflow-hidden">
                        <img src={item.image} alt={item.label} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-3 bg-dk-block">
                        <div className="font-heading font-bold text-white text-sm">{item.label}</div>
                        <div className="text-dk-gold text-sm font-bold">{item.price.toLocaleString("ru-RU")} ₽</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Color */}
            {step === 2 && (
              <div>
                <h2 className="font-display text-3xl text-white tracking-wider mb-6">Выберите цвет</h2>
                <div className="grid grid-cols-3 gap-4">
                  {COLORS.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setColor(c)}
                      className={`border-2 p-4 flex items-center gap-3 transition-all ${color.id === c.id ? "border-dk-accent" : "border-dk hover:border-dk-muted"}`}
                    >
                      <div className="w-8 h-8 rounded-full border border-dk-border flex-shrink-0" style={{ backgroundColor: c.hex }} />
                      <span className="text-white font-heading font-bold text-sm">{c.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Print */}
            {step === 3 && (
              <div>
                <h2 className="font-display text-3xl text-white tracking-wider mb-6">Выберите принт</h2>
                <div className="space-y-3">
                  {PRINTS.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setPrint(p)}
                      className={`w-full border-2 p-4 flex items-center justify-between transition-all ${print.id === p.id ? "border-dk-accent bg-dk-accent/5" : "border-dk hover:border-dk-muted"}`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${print.id === p.id ? "border-dk-accent" : "border-dk-muted"}`}>
                          {print.id === p.id && <div className="w-2.5 h-2.5 rounded-full bg-dk-accent" />}
                        </div>
                        <span className="font-heading font-bold text-white">{p.label}</span>
                      </div>
                      <span className="text-dk-gold font-bold font-heading">
                        {p.price > 0 ? `+${p.price} ₽` : "Бесплатно"}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Size */}
            {step === 4 && (
              <div>
                <h2 className="font-display text-3xl text-white tracking-wider mb-6">Выберите размер</h2>
                <div className="flex flex-wrap gap-3">
                  {SIZES.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`min-w-[60px] h-12 px-4 border-2 font-heading font-bold text-sm tracking-wide transition-all ${
                        size === s ? "border-dk-accent bg-dk-accent text-white" : "border-dk text-dk-muted hover:border-white hover:text-white"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Text */}
            {step === 5 && (
              <div>
                <h2 className="font-display text-3xl text-white tracking-wider mb-6">Добавьте текст</h2>
                <p className="text-dk-muted text-sm mb-6">Напечатаем ваш текст на вещи. Максимум 30 символов.</p>
                <div className="relative">
                  <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value.slice(0, 30))}
                    placeholder="Например: DRAGON SPIRIT"
                    className="w-full bg-dk-block border border-dk text-white placeholder-dk-muted px-5 py-4 text-lg font-heading tracking-widest uppercase focus:outline-none focus:border-dk-accent transition-colors"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-dk-muted text-sm">{text.length}/30</span>
                </div>
                <p className="text-dk-muted text-xs mt-3">Оставьте пустым, если текст не нужен — бесплатно.</p>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-10">
              <button
                onClick={() => setStep(Math.max(1, step - 1))}
                disabled={step === 1}
                className={`btn-outline flex items-center gap-2 ${step === 1 ? "opacity-40 cursor-not-allowed" : ""}`}
              >
                <Icon name="ArrowLeft" size={16} />
                Назад
              </button>
              {step < 5 ? (
                <button onClick={() => setStep(step + 1)} className="btn-primary flex items-center gap-2">
                  Далее
                  <Icon name="ArrowRight" size={16} />
                </button>
              ) : (
                <button
                  onClick={() => setSubmitted(true)}
                  disabled={!size}
                  className={`btn-primary flex items-center gap-2 ${!size ? "opacity-50 cursor-not-allowed" : "hover-glow"}`}
                >
                  <Icon name="ShoppingBag" size={16} />
                  Оформить заказ
                </button>
              )}
            </div>
          </div>

          {/* Summary */}
          <div>
            <div className="bg-dk-block border border-dk p-6 sticky top-24">
              <h3 className="font-heading font-bold text-white tracking-widest uppercase text-sm mb-6">Ваш заказ</h3>
              <div className="aspect-square overflow-hidden border border-dk mb-5">
                <img src={base.image} alt={base.label} className="w-full h-full object-cover" />
              </div>
              <div className="space-y-3 text-sm mb-6">
                {[
                  { label: "База", value: base.label },
                  { label: "Цвет", value: color.label },
                  { label: "Принт", value: print.label },
                  { label: "Размер", value: size || "—" },
                  { label: "Текст", value: text || "—" },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between">
                    <span className="text-dk-muted">{row.label}</span>
                    <span className="text-white font-heading font-bold">{row.value}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-dk pt-4 flex justify-between items-center">
                <span className="text-dk-muted font-heading tracking-wide">Итого</span>
                <span className="font-display text-3xl text-dk-gold glow-gold">{total.toLocaleString("ru-RU")} ₽</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
