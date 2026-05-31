import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dk-block border-t border-dk">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M16 2L4 8v8c0 7 5.5 13.5 12 16 6.5-2.5 12-9 12-16V8L16 2z" fill="#E85D04" opacity="0.2"/>
                  <path d="M16 2L4 8v8c0 7 5.5 13.5 12 16 6.5-2.5 12-9 12-16V8L16 2z" stroke="#E85D04" strokeWidth="1.5"/>
                  <path d="M10 14l4 3 2-5 2 5 4-3" stroke="#FFB703" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-display text-lg text-white tracking-widest">DRAGON KINGDOM</span>
            </Link>
            <p className="text-dk-muted text-sm leading-relaxed mb-6">
              Одежда для тех, кто не боится быть собой. Огонь внутри — стиль снаружи.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: "Instagram", href: "#", label: "Instagram" },
                { icon: "Youtube", href: "#", label: "YouTube" },
                { icon: "MessageCircle", href: "#", label: "Telegram" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 border border-dk flex items-center justify-center text-dk-muted hover:text-white hover:border-dk-accent hover:bg-dk-accent/10 transition-all duration-200"
                >
                  <Icon name={social.icon as "Instagram"} size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-bold text-white tracking-widest uppercase text-sm mb-5">Навигация</h4>
            <ul className="space-y-3">
              {[
                { label: "Коллекции", href: "/collections" },
                { label: "Каталог", href: "/catalog" },
                { label: "Хиты сезона", href: "/catalog?sort=hits" },
                { label: "Кастомизация", href: "/customize" },
                { label: "О бренде", href: "/about" },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-dk-muted hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-heading font-bold text-white tracking-widest uppercase text-sm mb-5">Информация</h4>
            <ul className="space-y-3">
              {[
                { label: "Доставка и оплата", href: "/delivery" },
                { label: "Возврат и обмен", href: "/delivery#return" },
                { label: "Размерная сетка", href: "/catalog#sizes" },
                { label: "Уход за изделием", href: "/delivery#care" },
                { label: "Политика конфиденциальности", href: "/privacy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-dk-muted hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-heading font-bold text-white tracking-widest uppercase text-sm mb-5">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Icon name="Mail" size={16} className="text-dk-accent mt-0.5 flex-shrink-0" />
                <a href="mailto:hello@dragonkingdom.ru" className="text-dk-muted hover:text-white text-sm transition-colors">
                  hello@dragonkingdom.ru
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Phone" size={16} className="text-dk-accent mt-0.5 flex-shrink-0" />
                <a href="tel:+74951234567" className="text-dk-muted hover:text-white text-sm transition-colors">
                  +7 (495) 123-45-67
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="MapPin" size={16} className="text-dk-accent mt-0.5 flex-shrink-0" />
                <span className="text-dk-muted text-sm">Москва, Россия</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Clock" size={16} className="text-dk-accent mt-0.5 flex-shrink-0" />
                <span className="text-dk-muted text-sm">Пн–Пт: 10:00–19:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-dk flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-dk-muted text-xs">
            © {currentYear} Dragon Kingdom. Все права защищены.
          </p>
          <p className="text-dk-muted text-xs">
            Сделано с огнём 🔥
          </p>
        </div>
      </div>
    </footer>
  );
}
