'use client'
import { useState } from 'react'

const tests = [
  {
    text: '«Купила вперше скептично — результат здивував. Дійсно тримає. Більше не купую звичайні дезодоранти.»',
    preview: '«Купила скептично — результат здивував. Більше не повертаюсь до звичайних.»',
    author: 'Покупець DEOZEN',
    loc: 'Підтверджена покупка',
    stars: '★★★★★',
  },
  {
    text: '«Сумнівалась — але після першого застосування побачила різницю. Запаху немає навіть після спортзалу.»',
    preview: '«Після спортзалу — жодного запаху. Здивована результатом.»',
    author: 'Покупець DEOZEN',
    loc: 'Підтверджена покупка',
    stars: '★★★★★',
  },
  {
    text: '«Чутлива шкіра — жодного подразнення. 6 місяців з упаковки — дуже вигідно порівняно з щоденним дезодорантом.»',
    preview: '«Чутлива шкіра — жодного подразнення. 6 місяців з однієї упаковки — реально вигідно.»',
    author: 'Покупець DEOZEN',
    loc: 'Підтверджена покупка',
    stars: '★★★★☆',
  },
]

export function Testimonials() {
  const [active, setActive] = useState(0)

  const handleTab = (idx: number) => {
    setActive(idx)
  }

  return (
    <section className="s" id="reviews">
      <div className="inner">
        <p className="s-label rev">Реальний досвід</p>
        <p className="test-big rev">
          {tests[active].text}
        </p>
        <div className="test-source rev">
          <span className="test-source-line"></span>
          <div>
            <p className="test-author">{tests[active].author}</p>
            <p className="test-loc">{tests[active].loc}</p>
          </div>
        </div>
        <div className="test-tabs">
          {tests.map((t, i) => (
            <div
              key={i}
              className={`test-tab${i === active ? ' active' : ' inactive'}`}
              onClick={() => handleTab(i)}
            >
              <p className="test-stars">{t.stars}</p>
              <p className="test-preview">{t.preview}</p>
              <p className="test-name">{t.loc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
