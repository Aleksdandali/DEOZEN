import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-watermark" aria-hidden="true">15</div>

      <div className="hero-inner">
        <div className="hero-body" style={{ paddingTop: 0 }}>
          <p className="hero-eyebrow">Натуральний крем-дезодорант &nbsp;·&nbsp; Одне нанесення</p>

          <h1 className="hero-h1">
            <span className="l1">Ви нормально</span>
            <span className="l2">потієте.</span>
            <span className="l3">Просто без запаху.</span>
          </h1>

          <p className="hero-sub">
            Крем на китайських травах призупиняє апокринні залози —
            єдине джерело неприємного запаху. До 15 днів захисту після одного нанесення перед сном.
          </p>

          <div className="hero-actions">
            <Link href="#buy" className="btn btn-primary js-cta"><span>Замовити — 597 грн</span></Link>
            <Link href="#how" className="btn btn-ghost">Як це працює <span className="btn-arr">↓</span></Link>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-n" data-count="15">15</span>
              <span className="stat-l">Днів захисту</span>
            </div>
            <div className="stat">
              <span className="stat-n" data-count="6">6</span>
              <span className="stat-l">Місяців / упаковка</span>
            </div>
            <div className="stat">
              <span className="stat-n">0</span>
              <span className="stat-l">Алюмінію · Парабенів</span>
            </div>
          </div>
        </div>
        <div className="hero-img-wrap">
          <Image
            src="/product-hero.jpg"
            alt="DEOZEN Крем-дезодорант"
            width={480}
            height={480}
            priority
            className="hero-product-img"
          />
        </div>
      </div>

      <div className="hero-scroll">
        <div className="hero-scroll-bar"></div>
        <span className="hero-scroll-txt">Гортайте далі</span>
      </div>
    </section>
  )
}
