export function Science() {
  return (
    <>
      <section className="s">
        <div className="inner">
          <div className="science-layout">
            <div>
              <p className="s-label rev">Механізм дії</p>
              <h2 className="s-title rev">Дві залози.<br /><em>Одна мішень.</em></h2>
              <p className="science-body rev">
                У вашому тілі два типи потових залоз. <strong>Екринні</strong> виділяють воду і сіль — це нормальне потовиділення, необхідне для терморегуляції. Вони залишаються активними.
              </p>
              <p className="science-body rev">
                <strong>Апокринні</strong> залози виробляють масла і білки. Коли бактерії розкладають ці білки — з&apos;являється запах. DEOZEN точково призупиняє роботу апокринних залоз, не чіпаючи екринних.
              </p>
              <p className="science-body rev" style={{ color: 'var(--ink-40)', fontSize: '.8rem', marginTop: '1.5rem' }}>
                Наш продукт не вилучає потові залози, а керує ними. Апокринні залози продовжують виводити токсини — просто значно знижено їх активність.
              </p>
            </div>
            <div className="glands rev" id="glandVis">
              <div className="gland-block">
                <div className="gland-head">
                  <span className="gland-name">Екринні залози</span>
                  <span className="gland-status norm">Активні · Норма</span>
                </div>
                <div className="gland-track">
                  <div className="gland-fill f-norm" style={{ '--w': '75%' } as React.CSSProperties}></div>
                </div>
                <p className="gland-desc">Вода + сіль → терморегуляція збережена</p>
              </div>
              <div className="gland-block">
                <div className="gland-head">
                  <span className="gland-name">Апокринні · до DEOZEN</span>
                  <span className="gland-status bad">Запах !</span>
                </div>
                <div className="gland-track">
                  <div className="gland-fill f-bad" style={{ '--w': '92%' } as React.CSSProperties}></div>
                </div>
                <p className="gland-desc">Білки + бактерії → неприємний запах</p>
              </div>
              <div className="gland-block">
                <div className="gland-head">
                  <span className="gland-name">Апокринні · після DEOZEN</span>
                  <span className="gland-status good">Заблоковані ✓</span>
                </div>
                <div className="gland-track">
                  <div className="gland-fill f-good" style={{ '--w': '7%' } as React.CSSProperties}></div>
                </div>
                <p className="gland-desc">Активність пригнічена на 12–15 днів</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="clinical">
        <div className="clinical-inner">
          <div className="rev">
            <div className="clinical-num">21<sub>волонтер</sub></div>
          </div>
          <div className="clinical-text rev">
            <p className="s-label" style={{ color: 'rgba(245,240,230,.3)' }}>
              <span style={{ background: 'rgba(245,240,230,.2)', width: '24px', height: '1px', display: 'inline-block', marginRight: '1rem', verticalAlign: 'middle' }}></span>
              Клінічне підтвердження
            </p>
            <h2 className="s-title s-title-inv">Ефективність<br /><em>підтверджена</em></h2>
            <p className="clinical-desc">Незалежне клінічне дослідження підтвердило ефективність та безпечність DEOZEN. 21 волонтер. Документи доступні на сайті.</p>
            <span className="clinical-tag">Безпечно · Ефективно · Підтверджено</span>
          </div>
        </div>
      </div>
    </>
  )
}
