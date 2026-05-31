import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { collections, products } from "@/data/products";

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80')`,
        }}
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="absolute inset-0 bg-gradient-to-r from-dk-bg via-dk-bg/60 to-transparent" />

      {/* Decorative fire elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-dk-accent/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-orange-900/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full py-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-dk-accent" />
            <span className="text-dk-accent font-heading font-semibold text-xs tracking-[0.3em] uppercase">
              Новая коллекция 2025
            </span>
          </div>

          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-white leading-none mb-6 animate-fade-in-up">
            ТВОЙ<br />
            <span className="text-dk-accent glow-gold">ДРАКОН</span><br />
            ВНУТРИ
          </h1>

          <p className="section-subtitle max-w-lg mb-10 text-lg">
            Одежда, которая говорит без слов. Огонь характера — в каждом стежке.
            Натуральный хлопок. Авторские принты. Без компромиссов.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/collections" className="btn-primary inline-flex items-center gap-3 hover-glow">
              <Icon name="Flame" size={18} />
              Смотреть коллекции
            </Link>
            <Link to="/customize" className="btn-outline inline-flex items-center gap-3">
              <Icon name="Sparkles" size={18} />
              Кастомизация
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-dk-muted">
        <span className="text-xs tracking-widest uppercase font-heading">Скролл</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-dk-muted to-transparent" />
      </div>
    </section>
  );
}

function AboutBrandSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-dk-accent" />
              <span className="text-dk-accent font-heading font-semibold text-xs tracking-[0.3em] uppercase">
                О бренде
              </span>
            </div>
            <h2 className="section-title mb-6 line-accent">
              Рождённые<br />из огня
            </h2>
            <p className="section-subtitle mb-4">
              Dragon Kingdom — это не просто одежда. Это манифест тех, кто живёт ярко,
              двигается быстро и не боится выделяться из толпы.
            </p>
            <p className="section-subtitle mb-8">
              Каждая вещь создаётся с одной целью: раскрыть того дракона, что живёт внутри каждого из нас.
            </p>
            <Link to="/about" className="btn-outline inline-flex items-center gap-3">
              Наша история
              <Icon name="ArrowRight" size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "2018", label: "Год основания" },
              { num: "50K+", label: "Довольных клиентов" },
              { num: "6", label: "Коллекций в год" },
              { num: "100%", label: "Натуральный хлопок" },
            ].map((stat) => (
              <div key={stat.num} className="bg-dk-block border border-dk p-6 group hover:border-dk-accent transition-all duration-300">
                <div className="font-display text-4xl text-dk-accent mb-2 group-hover:glow-gold transition-all">{stat.num}</div>
                <div className="text-dk-muted text-sm font-heading tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CollectionsSection() {
  return (
    <section className="py-20 md:py-28 bg-dk-block">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-dk-accent" />
              <span className="text-dk-accent font-heading font-semibold text-xs tracking-[0.3em] uppercase">
                2025
              </span>
            </div>
            <h2 className="section-title">Коллекции</h2>
          </div>
          <Link to="/collections" className="btn-outline inline-flex items-center gap-2 self-start md:self-auto">
            Все коллекции
            <Icon name="ArrowRight" size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {collections.map((col, i) => (
            <Link
              key={col.id}
              to={`/catalog?collection=${col.slug}`}
              className={`group relative overflow-hidden ${i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={col.image}
                  alt={col.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-dk-bg via-transparent to-transparent" />
              <div
                className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
              >
                <div
                  className="w-6 h-0.5 mb-3 transition-all duration-300 group-hover:w-12"
                  style={{ backgroundColor: col.color }}
                />
                <h3 className="font-display text-2xl text-white tracking-wider mb-1">{col.name}</h3>
                <p className="text-dk-muted text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-xs">
                  {col.description}
                </p>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-dk-accent text-white text-xs font-heading font-bold tracking-widest uppercase px-3 py-1.5">
                  Смотреть
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function BestSellersSection() {
  const hits = products.filter((p) => p.isHit);

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-dk-gold" />
              <span className="text-dk-gold font-heading font-semibold text-xs tracking-[0.3em] uppercase">
                Хиты сезона
              </span>
            </div>
            <h2 className="section-title">Самые продаваемые</h2>
          </div>
          <Link to="/catalog?sort=hits" className="btn-outline inline-flex items-center gap-2 self-start md:self-auto">
            Весь каталог
            <Icon name="ArrowRight" size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {hits.map((product) => (
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
                <div className="absolute inset-0 bg-dk-bg/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-dk-accent text-white text-xs font-heading font-bold tracking-widest uppercase px-5 py-2.5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Быстрый просмотр
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="text-dk-muted text-xs font-heading tracking-widest uppercase mb-1">{product.collection}</div>
                <h3 className="font-heading font-bold text-white text-base mb-3 group-hover:text-dk-accent transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-dk-gold font-bold font-heading text-lg glow-gold">
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
                    aria-label="Добавить в корзину"
                  >
                    <Icon name="ShoppingBag" size={14} />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function AdvantagesSection() {
  const items = [
    {
      icon: "Leaf",
      title: "Натуральный хлопок",
      desc: "100% органический хлопок без синтетики. Мягко к коже, честно к природе.",
    },
    {
      icon: "Zap",
      title: "Спортивный крой",
      desc: "Анатомический силуэт разработан вместе с профессиональными атлетами.",
    },
    {
      icon: "Globe",
      title: "Экологичность",
      desc: "Безвредные красители, минимальный углеродный след, перерабатываемая упаковка.",
    },
    {
      icon: "Shield",
      title: "Гарантия 12 месяцев",
      desc: "Уверены в качестве: если что-то пойдёт не так — заменим или вернём деньги.",
    },
    {
      icon: "Palette",
      title: "Кастомизация",
      desc: "Создай вещь под себя: выбери цвет, принт, шрифт и размер — твоя уникальность.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-dk-block">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-dk-accent" />
            <span className="text-dk-accent font-heading font-semibold text-xs tracking-[0.3em] uppercase">Почему мы</span>
            <div className="w-8 h-0.5 bg-dk-accent" />
          </div>
          <h2 className="section-title">Наши преимущества</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-dk-bg border border-dk p-6 group hover:border-dk-accent transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 bg-dk-accent/10 border border-dk-accent/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-dk-accent/20 transition-colors">
                <Icon name={item.icon as "Leaf"} size={22} className="text-dk-accent" />
              </div>
              <h3 className="font-heading font-bold text-white text-base mb-3 tracking-wide">{item.title}</h3>
              <p className="text-dk-muted text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CustomBannerSection() {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: "#1A1A1A" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-dk-gold" />
              <span className="text-dk-gold font-heading font-semibold text-xs tracking-[0.3em] uppercase">
                Кастомизация
              </span>
            </div>
            <h2 className="section-title mb-6">
              Ваш дизайн —<br />
              <span className="text-dk-accent">ваши правила</span>
            </h2>
            <p className="section-subtitle mb-4">
              Не ищи вещь, которая идеально подходит. Создай её сам.
              Выбери базу, принт, цвет шрифта — и мы сошьём именно для тебя.
            </p>
            <p className="section-subtitle mb-8">
              Идеально для подарка, корпоративного мерча или просто вашей уникальной истории.
            </p>
            <Link to="/customize" className="btn-primary inline-flex items-center gap-3 hover-glow">
              <Icon name="Sparkles" size={18} />
              Начать кастомизацию
            </Link>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="aspect-square overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80"
                alt="Кастомизация Dragon Kingdom"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-dk-accent p-5 hidden md:block">
              <div className="font-display text-3xl text-white">∞</div>
              <div className="text-white text-xs font-heading tracking-widest uppercase mt-1">Комбинаций</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  const reviews = [
    {
      name: "Алексей М.",
      city: "Москва",
      rating: 5,
      text: "Заказал «Dragon Fire» — качество огонь. Буквально. Хлопок мягкий, принт не выцветает после стирки. Беру уже третью вещь.",
      avatar: "А",
      collection: "Metal Edition",
    },
    {
      name: "Мария К.",
      city: "Санкт-Петербург",
      rating: 5,
      text: "Кастомизировала свитшот для мужа на день рождения. Получилось невероятно — он в восторге, носит не снимая!",
      avatar: "М",
      collection: "Кастомизация",
    },
    {
      name: "Дмитрий В.",
      city: "Екатеринбург",
      rating: 5,
      text: "Доставка быстрая, упаковка продуманная. Худи Sport Motion — лучшее что я носил для тренировок. Анатомический крой — это вообще другой уровень.",
      avatar: "Д",
      collection: "Sport Motion",
    },
    {
      name: "Анна Р.",
      city: "Казань",
      rating: 4,
      text: "Summer Breeze просто спасение в жару. Лёгкая, дышащая, не мнётся. Стиль + комфорт = Dragon Kingdom.",
      avatar: "А",
      collection: "Summer Breeze",
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-dk-accent" />
              <span className="text-dk-accent font-heading font-semibold text-xs tracking-[0.3em] uppercase">
                Отзывы
              </span>
            </div>
            <h2 className="section-title">Что говорят<br />клиенты</h2>
          </div>
          <div className="flex items-center gap-2 text-dk-gold">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Icon key={i} name="Star" size={16} className="fill-dk-gold text-dk-gold" />
              ))}
            </div>
            <span className="font-heading font-bold text-white text-lg">4.9</span>
            <span className="text-dk-muted text-sm">/ 5 (1 240 отзывов)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((review) => (
            <div key={review.name} className="bg-dk-block border border-dk p-6 hover:border-dk-accent transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-dk-accent flex items-center justify-center font-bold text-white font-heading">
                  {review.avatar}
                </div>
                <div>
                  <div className="font-heading font-bold text-white text-sm">{review.name}</div>
                  <div className="text-dk-muted text-xs">{review.city}</div>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Icon key={i} name="Star" size={12} className="fill-dk-gold text-dk-gold" />
                ))}
              </div>
              <p className="text-dk-muted text-sm leading-relaxed mb-4">"{review.text}"</p>
              <div className="text-dk-accent text-xs font-heading tracking-widest uppercase">{review.collection}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutBrandSection />
      <CollectionsSection />
      <BestSellersSection />
      <AdvantagesSection />
      <CustomBannerSection />
      <ReviewsSection />
    </main>
  );
}
