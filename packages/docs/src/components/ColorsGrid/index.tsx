import './styles.css'

import { colors } from '@ignite-ui/tokens'
import { getContrast } from 'polished'

export const ColorsGrid = () => {
  return Object.entries(colors).map(([name, value]) => {
    return (
      <div key={name} className="colors-grid" style={{ background: value }}>
        <div
          className="colors-grid-content"
          style={{ color: getContrast(value, '#FFF') < 3.5 ? '#000' : '#FFF' }}
        >
          <strong>${name}</strong>

          <span>{value}</span>
        </div>
      </div>
    )
  })
}
