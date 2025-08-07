import { destinos } from '../../data/destinos'
import { notFound } from 'next/navigation'

interface Props { 
  params: Promise<{ id: string }> 
}

export default async function DetalhesPage({ params }: Props) {
  const { id } = await params
  const destino = destinos.find(d => d.id === id)
  
  if (!destino) return notFound()

  return (
    <div className="destino-detail">
      <h2>{destino.nome}</h2>
      <img 
        src={destino.imagem} 
        alt={destino.nome}
      />
      <p>{destino.descricao}</p>
    </div>
  )
}