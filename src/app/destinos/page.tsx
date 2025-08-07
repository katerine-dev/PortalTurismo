import { destinos } from '../data/destinos'
import CardDestino from '../components/CardDestino'

export default function DestinosPage() {
  return (
    <div>
      <h2>Catálogo de Destinos</h2>
      <div className="destinos-grid">
        {destinos.map(d => <CardDestino key={d.id} destino={d} />)}
      </div>
    </div>
  )
}