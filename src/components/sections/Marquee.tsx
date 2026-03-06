export function Marquee() {
  const items = [
    'Без алюмінію', 'Без парабенів', 'Без соди', 'Без тальку',
    'Cruelty Free', '15 днів захисту', '6 місяців — одна упаковка',
    'Китайська медицина', 'Клінічно підтверджено',
  ]

  return (
    <div className="marquee-band">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="m-item">
            {item}<span className="m-dot"></span>
          </span>
        ))}
      </div>
    </div>
  )
}
