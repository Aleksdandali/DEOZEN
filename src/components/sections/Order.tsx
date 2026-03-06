'use client'
import { useState } from 'react'

const PRICE = 597

export function Order() {
  const [qty, setQty] = useState(1)

  const changeQty = (d: number) => {
    setQty(q => Math.max(1, Math.min(20, q + d)))
  }

  const total = (qty * PRICE).toLocaleString('uk-UA') + ' грн'
  const showOptic = qty >= 10

  return (
    <section className="s s-sand" id="buy">
      <div className="inner">
        <p className="s-label rev">Замовити</p>
        <div className="order-layout">
          <div className="rev">
            <h2 className="order-title">DEOZEN<em>Крем-дезодорант</em></h2>
            <div className="price-row">
              <span className="price-curr">₴</span>
              <span className="price-amt">597</span>
              <div className="price-note">
                <span className="price-per">24 пакетики · 12 застосувань</span>
                <span className="price-per" style={{ marginTop: '.3rem' }}>≈ 49,75 грн / місяць</span>
              </div>
            </div>
            <div className="order-features">
              <div className="order-feat">
                <span className="order-feat-label">Вміст</span>
                <span className="order-feat-val">24 пакетики — 12 застосувань, 0,8 г кожне</span>
              </div>
              <div className="order-feat">
                <span className="order-feat-label">Ефект</span>
                <span className="order-feat-val">До 15 днів захисту з одного нанесення</span>
              </div>
              <div className="order-feat">
                <span className="order-feat-label">Клінічно</span>
                <span className="order-feat-val">Підтверджено на 21 волонтері</span>
              </div>
              <div className="order-feat">
                <span className="order-feat-label">Доставка</span>
                <span className="order-feat-val">Нова Пошта по всій Україні</span>
              </div>
              <div className="order-feat">
                <span className="order-feat-label">Увага</span>
                <span className="order-feat-val" style={{ fontSize: '.78rem', color: 'var(--stone)' }}>
                  Не рекомендовано вагітним та дітям до 12 років (містить береберин)
                </span>
              </div>
            </div>
          </div>

          <div className="order-panel rev">
            <div className="panel-product">
              <div>
                <p className="panel-name">DEOZEN Крем-дезодорант</p>
                <p className="panel-sub">24 пакетики · 12 застосувань · 6 місяців</p>
              </div>
              <span className="panel-price">597 грн</span>
            </div>

            <div className="qty-row">
              <span className="qty-label">Кількість</span>
              <div className="qty-ctrl">
                <button className="qty-btn" onClick={() => changeQty(-1)}>−</button>
                <span className="qty-n">{qty}</span>
                <button className="qty-btn" onClick={() => changeQty(1)}>+</button>
              </div>
            </div>

            {showOptic && (
              <div className="optic-hint show">
                Для оптового замовлення від 10 шт. зв&apos;яжіться з нами особисто — ціна обговорюється.
              </div>
            )}

            <div className="total-row">
              <span className="total-label">Разом</span>
              <span className="total-val">{total}</span>
            </div>

            <button
              className="btn-order js-cta"
              onClick={() => window.open('https://deozen-store.com/zamovlennya-nalozhka', '_blank')}
            >
              <span>Замовити зараз →</span>
            </button>
            <button
              className="btn-tg"
              onClick={() => window.open('https://deozen-store.com/zamovlennya-nalozhka', '_blank')}
              style={{ marginBottom: '.6rem' }}
            >
              Замовити накладеним платежем →
            </button>
            <button
              className="btn-tg"
              onClick={() => window.open('https://www.instagram.com/deozenherbal/', '_blank')}
            >
              Написати в Instagram
            </button>
            <div className="trust-row">
              <span className="trust-i"><span className="trust-dot"></span>Клінічно підтверджено</span>
              <span className="trust-i"><span className="trust-dot"></span>Cruelty Free</span>
              <span className="trust-i"><span className="trust-dot"></span>🇺🇦 Зроблено в Україні</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
