export function Ingredients() {
  return (
    <section className="s s-sand" id="ingredients">
      <div className="inner">
        <div className="ing-intro">
          <div>
            <p className="s-label rev">Інгредієнти</p>
            <h2 className="s-title rev">Сила, перевірена<br /><em>тисячоліттями</em></h2>
          </div>
          <div className="rev">
            <p className="ing-note">Формула DEOZEN базується на традиційній китайській фітотерапії. Жодних синтетичних ароматизаторів.</p>
            <code className="ing-note" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.7rem', display: 'block', marginTop: '1rem', color: 'var(--stone)', lineHeight: 1.8, background: 'var(--ivory-3)', padding: '.8rem 1rem' }}>
              aqua, hedychium flavescens root extract, tetramethylpyrazine, coptis japonica extract (barberin), phellodendron amurense bark extract, eugenia caryophyllus flower extract (eugenol), propylene glycol, xanthan gum, sodium dehydroacetate
            </code>
          </div>
        </div>
        <div className="ing-grid">
          <div className="ing-item">
            <span className="ing-idx">01</span>
            <div>
              <p className="ing-name">Hedychium Flavescens</p>
              <p className="ing-latin">Жовта імбирна лілія</p>
              <p className="ing-effect">Антибактеріальна та протизапальна дія. Пригнічує бактерії, що розкладають білки апокринних залоз.</p>
            </div>
          </div>
          <div className="ing-item">
            <span className="ing-idx">02</span>
            <div>
              <p className="ing-name">Coptis Japonica</p>
              <p className="ing-latin">Японський золотий корінь (Береберин)</p>
              <p className="ing-effect">Ключовий активний компонент. Береберин блокує апокринні залози на клітинному рівні.</p>
            </div>
          </div>
          <div className="ing-item">
            <span className="ing-idx">03</span>
            <div>
              <p className="ing-name">Phellodendron Amurense</p>
              <p className="ing-latin">Амурський оксамит</p>
              <p className="ing-effect">Знімає подразнення, заспокоює шкіру. Підсилює та подовжує дію берберину.</p>
            </div>
          </div>
          <div className="ing-item">
            <span className="ing-idx">04</span>
            <div>
              <p className="ing-name">Eugenia Caryophyllus</p>
              <p className="ing-latin">Гвоздика (Евгенол)</p>
              <p className="ing-effect">Природний антисептик. Підтримує чистоту шкіри та нейтралізує залишкові бактерії між нанесеннями.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
