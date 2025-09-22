// importa as imagens do diretório src/assets
import cover1 from '../assets/cover1.svg';
import cover2 from '../assets/cover2.svg';
import cover3 from '../assets/cover3.svg';
import livropython from '../assets/livropython.png'

const products = [
  {
    id: 1,
    title: 'Introdução a Algoritmos (Físico)',
    price: 129.90,
    type: 'physical',
    sku: 'ALG-001',
    description: 'Um livro completo sobre algoritmos e estruturas de dados. Capa dura.',
    image: cover1
  },
  {
    id: 2,
    title: 'Álgebra Linear - Apostila (E-book)',
    price: 29.90,
    type: 'ebook',
    sku: 'AL-EPUB-01',
    description: 'E-book em PDF com exercícios resolvidos e teoria.',
    image: cover2,
    file: '/sample-ebook.pdf' // esse continua como está, porque o PDF está na pasta public/
  },
  {
    id: 3,
    title: 'Introdução a programação com Python',
    price: 29.90,
    type: 'physical',
    sku: 'IDK-WHAT-01',
    description: 'Livro Físico de Introdução a Python',
    image: livropython,
  },
  {
    id: 4,
    title: 'Redes de Computadores (Físico)',
    price: 99.50,
    type: 'physical',
    sku: 'RED-101',
    description: 'Fundamentos de redes, protocolos e segurança.',
    image: cover3
  }
];

export default products;

