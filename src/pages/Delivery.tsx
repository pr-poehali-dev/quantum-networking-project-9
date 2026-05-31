import Icon from "@/components/ui/icon";

export default function Delivery() {
  const deliveryMethods = [
    {
      icon: "Truck",
      title: "Курьерская доставка",
      price: "от 350 ₽",
      time: "2–5 рабочих дней",
      desc: "Доставка до двери в любую точку России. Отслеживание заказа в реальном времени.",
    },
    {
      icon: "Package",
      title: "Пункт выдачи СДЭК",
      price: "от 250 ₽",
      time: "3–7 рабочих дней",
      desc: "Удобно забрать в любое время. Более 4000 пунктов выдачи по всей России.",
    },
    {
      icon: "MapPin",
      title: "Постамат",
      price: "от 200 ₽",
      time: "3–7 рабочих дней",
      desc: "Выберите ближайший постамат и заберите заказ в удобное время.",
    },
    {
      icon: "Zap",
      title: "Экспресс-доставка",
      price: "от 800 ₽",
      time: "1–2 рабочих дня",
      desc: "Нужно срочно? Экспресс-доставка по Москве и Санкт-Петербургу.",
    },
  ];

  const paymentMethods = [
    { icon: "CreditCard", title: "Банковская карта", desc: "Visa, Mastercard, МИР" },
    { icon: "Smartphone", title: "СБП", desc: "Система быстрых платежей" },
    { icon: "Wallet", title: "Электронные кошельки", desc: "ЮMoney, Qiwi" },
    { icon: "Building", title: "Безналичный расчёт", desc: "Для юридических лиц" },
  ];

  const faq = [
    {
      q: "Как отследить заказ?",
      a: "После отправки вы получите SMS и email с трек-номером. Отслеживание доступно на сайте СДЭК или в разделе «Мои заказы» в личном кабинете.",
    },
    {
      q: "Можно ли вернуть товар?",
      a: "Да, возврат возможен в течение 30 дней с момента получения. Товар должен быть в исходном состоянии с бирками. Стоимость обратной доставки — за счёт покупателя.",
    },
    {
      q: "Что делать, если пришёл бракованный товар?",
      a: "Напишите нам на hello@dragonkingdom.ru с фото в течение 7 дней — мы бесплатно заменим товар или вернём деньги.",
    },
    {
      q: "Есть ли бесплатная доставка?",
      a: "Да! При заказе от 5000 ₽ доставка до пункта выдачи — бесплатно. При заказе от 8000 ₽ — бесплатная курьерская доставка.",
    },
    {
      q: "Как ухаживать за изделием?",
      a: "Стирка при 30°C, не отбеливать, гладить с изнанки при низкой температуре. Подробная инструкция на ярлыке изделия.",
    },
  ];

  return (
    <main>
      {/* Header */}
      <section className="py-20 bg-dk-block border-b border-dk-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-dk-accent" />
            <span className="text-dk-accent font-heading font-semibold text-xs tracking-[0.3em] uppercase">Информация</span>
            <div className="w-8 h-0.5 bg-dk-accent" />
          </div>
          <h1 className="section-title mb-4">Доставка и оплата</h1>
          <p className="section-subtitle max-w-xl mx-auto">
            Доставляем по всей России. Бесплатно от 5000 ₽.
          </p>
        </div>
      </section>

      {/* Delivery */}
      <section id="delivery" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-0.5 bg-dk-accent" />
            <h2 className="font-display text-3xl text-white tracking-wider">Способы доставки</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {deliveryMethods.map((m) => (
              <div key={m.title} className="bg-dk-block border border-dk-border p-6 hover:border-dk-accent transition-all duration-300 group">
                <div className="w-12 h-12 bg-dk-accent/10 border border-dk-accent/20 flex items-center justify-center mb-5 group-hover:bg-dk-accent/20 transition-colors">
                  <Icon name={m.icon as "Truck"} size={22} className="text-dk-accent" />
                </div>
                <h3 className="font-heading font-bold text-white text-base mb-2">{m.title}</h3>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-dk-gold font-bold font-heading text-sm">{m.price}</span>
                  <span className="text-dk-muted text-xs">{m.time}</span>
                </div>
                <p className="text-dk-muted text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>

          {/* Free shipping banner */}
          <div className="mt-8 bg-dk-accent/10 border border-dk-accent/30 p-6 flex flex-col md:flex-row items-center gap-4">
            <Icon name="Gift" size={28} className="text-dk-accent flex-shrink-0" />
            <div>
              <div className="font-heading font-bold text-white text-base mb-1">Бесплатная доставка</div>
              <p className="text-dk-muted text-sm">
                При заказе <span className="text-dk-gold font-bold">от 5 000 ₽</span> — бесплатно до пункта выдачи.
                При заказе <span className="text-dk-gold font-bold">от 8 000 ₽</span> — бесплатная курьерская доставка.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment */}
      <section className="py-20 md:py-28 bg-dk-block">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-0.5 bg-dk-accent" />
            <h2 className="font-display text-3xl text-white tracking-wider">Способы оплаты</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {paymentMethods.map((m) => (
              <div key={m.title} className="bg-dk-bg border border-dk-border p-6 flex items-start gap-4 hover:border-dk-accent transition-all duration-300 group">
                <div className="w-10 h-10 bg-dk-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-dk-accent/20 transition-colors">
                  <Icon name={m.icon as "CreditCard"} size={20} className="text-dk-accent" />
                </div>
                <div>
                  <div className="font-heading font-bold text-white text-sm mb-1">{m.title}</div>
                  <div className="text-dk-muted text-xs">{m.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Return */}
      <section id="return" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-0.5 bg-dk-accent" />
                <h2 className="font-display text-3xl text-white tracking-wider">Возврат и обмен</h2>
              </div>
              <div className="space-y-4">
                {[
                  { step: "01", text: "Напишите на hello@dragonkingdom.ru с указанием номера заказа" },
                  { step: "02", text: "Приложите фото товара и причину возврата" },
                  { step: "03", text: "Наш менеджер согласует детали в течение 24 часов" },
                  { step: "04", text: "Отправьте товар на указанный адрес" },
                  { step: "05", text: "Получите деньги на карту в течение 5 рабочих дней" },
                ].map((item) => (
                  <div key={item.step} className="flex gap-5 items-start">
                    <div className="font-display text-4xl text-dk-accent/30 flex-shrink-0 w-10">{item.step}</div>
                    <p className="text-dk-muted text-sm leading-relaxed pt-2">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div id="care">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-0.5 bg-dk-accent" />
                <h2 className="font-display text-3xl text-white tracking-wider">Уход за изделием</h2>
              </div>
              <div className="space-y-4">
                {[
                  { icon: "Droplets", text: "Стирка при температуре не выше 30°C" },
                  { icon: "Wind", text: "Сушить в расправленном виде, не отжимать" },
                  { icon: "Flame", text: "Гладить с изнаночной стороны при низкой температуре" },
                  { icon: "X", text: "Не использовать отбеливатель" },
                  { icon: "X", text: "Не подвергать химчистке" },
                  { icon: "Archive", text: "Хранить в сложенном виде, избегать прямого света" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-dk-block border border-dk-border flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon as "Droplets"} size={16} className="text-dk-accent" />
                    </div>
                    <span className="text-dk-muted text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-dk-block">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-dk-accent" />
              <span className="text-dk-accent font-heading font-semibold text-xs tracking-[0.3em] uppercase">FAQ</span>
              <div className="w-8 h-0.5 bg-dk-accent" />
            </div>
            <h2 className="section-title">Частые вопросы</h2>
          </div>
          <div className="space-y-3">
            {faq.map((item) => (
              <details key={item.q} className="group bg-dk-bg border border-dk-border hover:border-dk-accent transition-all duration-300">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="font-heading font-bold text-white text-sm pr-4">{item.q}</span>
                  <Icon name="ChevronDown" size={18} className="text-dk-muted flex-shrink-0 group-open:rotate-180 transition-transform duration-300" />
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-dk-muted text-sm leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}