import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function About() {
  const timeline = [
    {
      year: "2018",
      title: "Рождение легенды",
      desc: "Двое друзей-дизайнеров из Москвы решили создать бренд, который говорит правду. Первая коллекция — 50 футболок. Продали за 3 дня.",
    },
    {
      year: "2019",
      title: "Первый дракон",
      desc: "Появился культовый принт «Dragon Fire». Коллекция разошлась за неделю, в Instagram бренд набрал 10 000 подписчиков.",
    },
    {
      year: "2021",
      title: "Sport Motion",
      desc: "Запустили линейку спортивной одежды. Партнёрство с профессиональными атлетами. Хлопок с добавлением эластана для максимального движения.",
    },
    {
      year: "2023",
      title: "Кастомизация",
      desc: "Открыли платформу индивидуального дизайна. Теперь каждый может создать свою уникальную вещь. 500+ уникальных заказов в месяц.",
    },
    {
      year: "2025",
      title: "Сейчас",
      desc: "50 000+ клиентов по всей России. 6 коллекций в год. 100% органический хлопок. Один принцип — без компромиссов.",
    },
  ];

  const team = [
    {
      name: "Артём Соколов",
      role: "Основатель & Creative Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    },
    {
      name: "Ксения Ларина",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    },
    {
      name: "Максим Вейс",
      role: "Production Manager",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="relative py-28 md:py-40 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=1600&q=80')" }}
        />
        <div className="absolute inset-0 bg-dk-bg/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-dk-accent" />
            <span className="text-dk-accent font-heading font-semibold text-xs tracking-[0.3em] uppercase">История</span>
            <div className="w-8 h-0.5 bg-dk-accent" />
          </div>
          <h1 className="section-title mb-6">История бренда</h1>
          <p className="section-subtitle max-w-2xl mx-auto">
            От 50 футболок до 50 000 клиентов. Это история о страсти, огне и вещах, которые меняют тебя.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-dk-border -translate-x-px" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div key={item.year} className={`flex gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"} text-left pl-16 md:pl-0`}>
                    <div className="bg-dk-block border border-dk p-6 hover:border-dk-accent transition-all duration-300 inline-block w-full">
                      <div className="font-display text-3xl text-dk-accent mb-2">{item.year}</div>
                      <h3 className="font-heading font-bold text-white text-xl mb-3">{item.title}</h3>
                      <p className="text-dk-muted text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-dk-accent rounded-full border-2 border-dk-bg mt-8" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-dk-block">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-dk-accent" />
              <span className="text-dk-accent font-heading font-semibold text-xs tracking-[0.3em] uppercase">Ценности</span>
              <div className="w-8 h-0.5 bg-dk-accent" />
            </div>
            <h2 className="section-title">Во что мы верим</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "Flame", title: "Страсть", desc: "Каждая вещь создаётся с горящим сердцем. Мы не делаем «нормально» — мы делаем так, чтобы цепляло." },
              { icon: "Leaf", title: "Честность", desc: "100% органический хлопок, прозрачное производство, честные цены. Никаких компромиссов с совестью." },
              { icon: "Users", title: "Сообщество", desc: "Dragon Kingdom — это не просто бренд. Это люди с огнём внутри. Ты один из них." },
            ].map((v) => (
              <div key={v.title} className="bg-dk-bg border border-dk p-8 text-center group hover:border-dk-accent transition-all duration-300">
                <div className="w-14 h-14 bg-dk-accent/10 border border-dk-accent/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-dk-accent/20 transition-colors">
                  <Icon name={v.icon as "Flame"} size={26} className="text-dk-accent" />
                </div>
                <h3 className="font-display text-2xl text-white mb-4">{v.title}</h3>
                <p className="text-dk-muted text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-dk-accent" />
              <span className="text-dk-accent font-heading font-semibold text-xs tracking-[0.3em] uppercase">Команда</span>
              <div className="w-8 h-0.5 bg-dk-accent" />
            </div>
            <h2 className="section-title">Люди за брендом</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="group text-center">
                <div className="aspect-square overflow-hidden mb-4 border border-dk group-hover:border-dk-accent transition-all duration-300">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="font-heading font-bold text-white text-base">{member.name}</h3>
                <p className="text-dk-muted text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dk-accent">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-6 tracking-wider">Стань частью легенды</h2>
          <p className="text-white/80 text-lg mb-8">Твой первый дракон ждёт тебя.</p>
          <Link to="/catalog" className="inline-flex items-center gap-3 bg-white text-dk-accent font-heading font-bold px-8 py-4 text-sm tracking-widest uppercase hover:bg-gray-100 transition-colors">
            <Icon name="ShoppingBag" size={18} />
            Перейти в каталог
          </Link>
        </div>
      </section>
    </main>
  );
}
