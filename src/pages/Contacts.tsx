import { useState } from "react";
import Icon from "@/components/ui/icon";

export default function Contacts() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const contacts = [
    { icon: "Mail", label: "Email", value: "hello@dragonkingdom.ru", href: "mailto:hello@dragonkingdom.ru" },
    { icon: "Phone", label: "Телефон", value: "+7 (495) 123-45-67", href: "tel:+74951234567" },
    { icon: "MessageCircle", label: "Telegram", value: "@dragonkingdom_ru", href: "https://t.me/dragonkingdom_ru" },
    { icon: "MapPin", label: "Адрес", value: "Москва, Россия", href: null },
    { icon: "Clock", label: "Время работы", value: "Пн–Пт: 10:00–19:00", href: null },
  ];

  return (
    <main>
      {/* Header */}
      <section className="py-20 bg-dk-block border-b border-dk-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-dk-accent" />
            <span className="text-dk-accent font-heading font-semibold text-xs tracking-[0.3em] uppercase">Контакты</span>
            <div className="w-8 h-0.5 bg-dk-accent" />
          </div>
          <h1 className="section-title mb-4">Свяжитесь с нами</h1>
          <p className="section-subtitle max-w-xl mx-auto">
            Вопросы, предложения, коллаборации — мы читаем каждое письмо.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact info */}
            <div>
              <h2 className="font-display text-4xl text-white tracking-wider mb-8">Контактная<br />информация</h2>
              <div className="space-y-5 mb-10">
                {contacts.map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-dk-accent/10 border border-dk-accent/20 flex items-center justify-center flex-shrink-0">
                      <Icon name={c.icon as "Mail"} size={18} className="text-dk-accent" />
                    </div>
                    <div>
                      <div className="text-dk-muted text-xs font-heading tracking-widest uppercase mb-1">{c.label}</div>
                      {c.href ? (
                        <a href={c.href} className="text-white font-heading font-bold hover:text-dk-accent transition-colors">
                          {c.value}
                        </a>
                      ) : (
                        <span className="text-white font-heading font-bold">{c.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="font-heading font-bold text-white tracking-widest uppercase text-sm mb-4">Социальные сети</h3>
                <div className="flex gap-3">
                  {[
                    { icon: "Instagram", label: "Instagram", href: "#" },
                    { icon: "Youtube", label: "YouTube", href: "#" },
                    { icon: "MessageCircle", label: "Telegram", href: "#" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="w-10 h-10 border border-dk-border flex items-center justify-center text-dk-muted hover:text-white hover:border-dk-accent hover:bg-dk-accent/10 transition-all duration-200"
                    >
                      <Icon name={s.icon as "Instagram"} size={18} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Response time badge */}
              <div className="mt-10 bg-dk-block border border-dk-border p-5 flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
                <div>
                  <div className="font-heading font-bold text-white text-sm">Быстрый ответ</div>
                  <div className="text-dk-muted text-xs">Обычно отвечаем в течение 2–4 часов в рабочее время</div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="font-display text-4xl text-white tracking-wider mb-8">Написать<br />сообщение</h2>

              {sent ? (
                <div className="bg-dk-block border border-dk-accent p-8 text-center">
                  <div className="w-16 h-16 bg-dk-accent/10 border border-dk-accent flex items-center justify-center mx-auto mb-5">
                    <Icon name="Check" size={28} className="text-dk-accent" />
                  </div>
                  <h3 className="font-display text-3xl text-white tracking-wider mb-3">Отправлено!</h3>
                  <p className="text-dk-muted text-sm mb-6">Мы получили ваше сообщение и свяжемся с вами в ближайшее время.</p>
                  <button onClick={() => setSent(false)} className="btn-outline">Написать ещё</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="text-dk-muted text-xs font-heading tracking-widest uppercase block mb-2">Имя *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-dk-block border border-dk-border text-white placeholder-dk-muted px-4 py-3 text-sm focus:outline-none focus:border-dk-accent transition-colors"
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <label className="text-dk-muted text-xs font-heading tracking-widest uppercase block mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-dk-block border border-dk-border text-white placeholder-dk-muted px-4 py-3 text-sm focus:outline-none focus:border-dk-accent transition-colors"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-dk-muted text-xs font-heading tracking-widest uppercase block mb-2">Тема</label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full bg-dk-block border border-dk-border text-white px-4 py-3 text-sm focus:outline-none focus:border-dk-accent transition-colors cursor-pointer"
                    >
                      <option value="">Выберите тему</option>
                      <option value="order">Вопрос о заказе</option>
                      <option value="delivery">Доставка</option>
                      <option value="custom">Кастомизация</option>
                      <option value="collab">Сотрудничество</option>
                      <option value="other">Другое</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-dk-muted text-xs font-heading tracking-widest uppercase block mb-2">Сообщение *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-dk-block border border-dk-border text-white placeholder-dk-muted px-4 py-3 text-sm focus:outline-none focus:border-dk-accent transition-colors resize-none"
                      placeholder="Ваше сообщение..."
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full flex items-center justify-center gap-3 hover-glow">
                    <Icon name="Send" size={16} />
                    Отправить сообщение
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}