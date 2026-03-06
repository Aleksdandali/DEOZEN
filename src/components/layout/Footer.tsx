import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer>
      <div className="inner">
        <div className="foot-top">
          <div>
            <Link href="#" className="foot-logo">
              <Image src="/logo.png" alt="DEOZEN" width={100} height={30} className="logo-img-white" />
            </Link>
            <p className="foot-tagline">Натуральний крем-дезодорант на китайських травах. Одне нанесення — 15 днів без запаху. Зроблено в Україні.</p>
          </div>
          <div>
            <p className="foot-col-h">Продукт</p>
            <ul className="foot-links">
              <li><Link href="#how">Як діє</Link></li>
              <li><Link href="#ingredients">Склад</Link></li>
              <li><Link href="#reviews">Відгуки</Link></li>
              <li><Link href="#buy">Замовити</Link></li>
              <li><a href="https://deozen-store.com/zamovlennya-nalozhka" target="_blank" rel="noreferrer">Накладений платіж</a></li>
              <li><Link href="#opt">Умови опту</Link></li>
            </ul>
          </div>
          <div>
            <p className="foot-col-h">Інформація</p>
            <ul className="foot-links">
              <li><Link href="#faq">FAQ</Link></li>
              <li><a href="https://deozen-store.com/de-kupiti-oflayn" target="_blank" rel="noreferrer">Де купити офлайн</a></li>
              <li><a href="https://deozen-store.com/znizhki" target="_blank" rel="noreferrer" style={{ color: 'var(--gold-lt)' }}>Знижки та акції</a></li>
              <li><a href="https://deozen-store.com/dogovir-publichnoyi-oferti" target="_blank" rel="noreferrer">Договір оферти</a></li>
              <li><a href="https://deozen-store.com/politika-konfidenciynosti" target="_blank" rel="noreferrer">Конфіденційність</a></li>
            </ul>
          </div>
          <div>
            <p className="foot-col-h">Контакти</p>
            <ul className="foot-links">
              <li><a href="https://www.instagram.com/deozenherbal/" target="_blank" rel="noreferrer">Instagram @deozenherbal</a></li>
              <li><a href="https://www.facebook.com/profile.php?id=61552690312879" target="_blank" rel="noreferrer">Facebook</a></li>
              <li><a href="https://deozen-store.com/contacts" target="_blank" rel="noreferrer">Зв&apos;язатися з нами</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2025 ТМ DEOZEN · ФОП Бойчук М.П. · Одеса, Україна</span>
          <span>Ukraine 🇺🇦</span>
        </div>
      </div>
    </footer>
  )
}
