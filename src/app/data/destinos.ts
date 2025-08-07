export interface Destino {
  id: string;
  nome: string;
  imagem: string;
  descricao: string;
}

export const destinos: Destino[] = [
  {
    id: 'amsterdam',
    nome: 'Amsterdam',
    imagem: '/images/amsterdam.png',
    descricao: 'Ruas de paralelepípedos onde bicicletas enfeitadas com musgo e plantas urbanas mostram o lado criativo e sustentável da cidade.',
  },
  {
    id: 'praga',
    nome: 'Praga',
    imagem: '/images/praga.png',
    descricao: 'Panorama de telhados vermelhos e torres góticas recortadas pelo rio Vltava, onde cada ponte parece um portal para a Idade Média.',
  },
  {
    id: 'croacia',
    nome: 'Croácia',
    imagem: '/images/croacia.png',
    descricao: 'Cachoeiras majestosas descendo por paredões cobertos de musgo, formando lagoas cristalinas em meio a florestas intocadas.',
  },
  {
    id: 'berlim',
    nome: 'Berlim',
    imagem: '/images/berlim.png',
    descricao: 'Margens do rio Spree ao pôr do sol, com a silhueta do Fernsehturm ao fundo e fachadas industriais que respiram arte urbana.',
  },
];
