import Link from 'next/link'
import { Destino } from '../data/destinos'

export default function CardDestino({ destino }: { destino: Destino }) {
  return (
    <Link href={`/destinos/${destino.id}`} className="card">
      <img 
        src={destino.imagem} 
        alt={destino.nome} 
        className="card-image" 
      />
      <h3 className="card-title">{destino.nome}</h3>
    </Link>
  )
}
