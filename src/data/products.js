// importa as imagens do diretório src/assets
import cover1 from '../assets/cover1.svg';
import cover2 from '../assets/cover2.svg';
import cover3 from '../assets/cover3.svg';
import livropython from '../assets/livropython.png'
import livro from '../assets/livro.png';

/*// Adicionei novas imagens para os novos livros
import cover4 from '../assets/cover4.svg';
import cover5 from '../assets/cover5.svg';
import cover6 from '../assets/cover6.svg';
import cover7 from '../assets/cover7.svg';
import cover8 from '../assets/cover8.svg';
import cover9 from '../assets/cover9.svg';
import cover10 from '../assets/cover10.svg';
import cover11 from '../assets/cover11.svg';
import cover12 from '../assets/cover12.svg';
import cover13 from '../assets/cover13.svg';
import cover14 from '../assets/cover14.svg';
import cover15 from '../assets/cover15.svg';
import cover16 from '../assets/cover16.svg';
import cover17 from '../assets/cover17.svg';
import cover18 from '../assets/cover18.svg';
*/

const products = [
  {
    id: 1,
    title: 'Introdução a Algoritmos (Físico)',
    price: 129.90,
    type: 'physical',
    category: 'Algoritmos e Estruturas de Dados',
    tags: ['Algoritmos', 'Estruturas de Dados', 'Programação', 'Físico'],
    sku: 'ALG-001',
    description: `Este livro é um guia completo para o mundo dos algoritmos e estruturas de dados. Com uma abordagem didática e repleta de exemplos práticos, ele cobre desde conceitos básicos até tópicos avançados como grafos e programação dinâmica.

    Ideal para estudantes de ciência da computação, engenharia de software e profissionais que desejam aprofundar seus conhecimentos em lógica de programação. Inclui exercícios para fixação do conteúdo.`,
    image: cover1
  },
  {
    id: 2,
    title: 'Álgebra Linear - Apostila (E-book)',
    price: 29.90,
    type: 'ebook',
    category: 'Matemática',
    tags: ['Álgebra', 'Matemática', 'E-book'],
    sku: 'AL-EPUB-01',
    description: `Uma apostila digital completa de Álgebra Linear, perfeita para alunos que precisam de um material de apoio conciso e objetivo. Este e-book aborda temas como vetores, matrizes, transformações lineares e sistemas de equações.

    O conteúdo foi pensado para estudantes universitários de engenharia, física e computação, com teoria bem explicada e dezenas de exercícios resolvidos para facilitar a prática.`,
    image: cover2,
    file: '/sample-ebook.pdf'
  },
  {
    id: 3,
    title: 'Introdução a programação com Python',
    price: 29.90,
    type: 'physical',
    category: 'Programação',
    tags: ['Python', 'Introdução', 'Programação', 'Físico'],
    sku: 'IDK-WHAT-01',
    description: `Dê os seus primeiros passos no universo da programação com este guia prático e acessível. Focado na linguagem Python, este livro ensina desde a sintaxe básica até a criação de pequenos projetos.

    É a escolha perfeita para iniciantes, estudantes do ensino médio ou qualquer pessoa que queira aprender a programar de forma intuitiva. Não é necessário ter conhecimento prévio.`,
    image: livropython,
  },
  {
    id: 4,
    title: 'Redes de Computadores (Físico)',
    price: 99.50,
    type: 'physical',
    category: 'Redes',
    tags: ['Redes', 'Segurança', 'TI', 'Físico'],
    sku: 'RED-101',
    description: `Um clássico para quem deseja entender os fundamentos de redes de computadores. Este livro aborda temas essenciais como arquitetura da internet, protocolos (TCP/IP), roteamento, redes sem fio e segurança de redes.

    Conteúdo obrigatório para estudantes e profissionais de TI que precisam de uma base sólida para trabalhar com infraestrutura e comunicação de dados.`,
    image: cover3
  },
  {
    id: 5,
    title: 'Estrutura de Dados em C (Físico)',
    price: 85.00,
    type: 'physical',
    category: 'Algoritmos e Estruturas de Dados',
    tags: ['Estruturas de Dados', 'C', 'Programação', 'Físico'],
    sku: 'EST-DAT-01',
    description: `Um guia completo para o estudo de estruturas de dados utilizando a linguagem de programação C. O livro cobre tópicos como listas encadeadas, pilhas, filas, árvores binárias e tabelas hash, com implementações detalhadas.

    Essencial para alunos de engenharia e ciência da computação que estão cursando disciplinas de algoritmos e estruturas de dados.`,
    image: livro
  },
  {
    id: 6,
    title: 'Banco de Dados SQL (E-book)',
    price: 35.00,
    type: 'ebook',
    category: 'Banco de Dados',
    tags: ['Banco de Dados', 'SQL', 'E-book'],
    sku: 'BD-SQL-02',
    description: `Esta apostila digital é o ponto de partida ideal para quem quer dominar o SQL. Aprenda a criar, consultar e manipular bancos de dados relacionais com lições claras e exemplos práticos.

    Indicado para iniciantes em desenvolvimento e analistas de dados que desejam adquirir fluência na linguagem SQL, a base da maioria dos bancos de dados.`,
    image: livro,
    file: '/sample-ebook.pdf'
  },
  {
    id: 7,
    title: 'Inteligência Artificial (Físico)',
    price: 150.00,
    type: 'physical',
    category: 'Inteligência Artificial',
    tags: ['IA', 'Machine Learning', 'Redes Neurais', 'Físico'],
    sku: 'IA-202',
    description: `Mergulhe nos princípios e aplicações da Inteligência Artificial. Este livro explora conceitos como aprendizado de máquina, redes neurais, processamento de linguagem natural e sistemas especialistas.

    Conteúdo perfeito para pesquisadores, estudantes de pós-graduação e profissionais que buscam uma compreensão aprofundada dos algoritmos por trás da IA moderna.`,
    image: livro
  },
  {
    id: 8,
    title: 'Desenvolvimento Web com JavaScript (E-book)',
    price: 45.00,
    type: 'ebook',
    category: 'Desenvolvimento Web',
    tags: ['JavaScript', 'Web', 'Front-end', 'E-book'],
    sku: 'WEB-JS-03',
    description: `Um guia abrangente para o desenvolvimento de aplicações web dinâmicas. O e-book foca em JavaScript moderno (ES6+), cobrindo desde a manipulação do DOM até a integração com APIs.

    Feito para desenvolvedores front-end iniciantes a intermediários que desejam construir websites interativos e robustos.`,
    image: livro,
    file: '/sample-ebook.pdf'
  },
  {
    id: 9,
    title: 'Engenharia de Software (Físico)',
    price: 110.00,
    type: 'physical',
    category: 'Engenharia de Software',
    tags: ['Metodologias Ágeis', 'Scrum', 'Testes', 'Físico'],
    sku: 'ENG-SOFT-04',
    description: `Aprenda as melhores práticas para a criação de software de alta qualidade. Este livro cobre metodologias ágeis (Scrum, Kanban), testes de software e gerenciamento de projetos.

    Um material valioso para estudantes e gerentes de projeto que precisam de uma visão holística do ciclo de vida do desenvolvimento de software.`,
    image: livro
  },
  {
    id: 10,
    title: 'Sistemas Operacionais (Físico)',
    price: 95.00,
    type: 'physical',
    category: 'Sistemas Operacionais',
    tags: ['Sistemas Operacionais', 'Kernel', 'SO', 'Físico'],
    sku: 'SO-303',
    description: `Descubra como os sistemas operacionais funcionam, desde o kernel até a interface do usuário. O livro detalha processos, gerenciamento de memória, sistemas de arquivos e segurança.

    Leitura obrigatória para estudantes de computação e profissionais que desejam entender a base do software que controla os computadores.`,
    image: livro
  },
  {
    id: 11,
    title: 'Cibersegurança para Iniciantes (E-book)',
    price: 55.00,
    type: 'ebook',
    category: 'Cibersegurança',
    tags: ['Cibersegurança', 'Segurança', 'Malware', 'E-book'],
    sku: 'CYB-SEC-05',
    description: `Este e-book é o ponto de partida para a sua jornada em cibersegurança. Aprenda as noções básicas de proteção de dados, prevenção de malwares, e como se defender de ataques cibernéticos comuns.

    Perfeito para usuários domésticos e profissionais de TI que desejam fortalecer a segurança de seus sistemas e informações.`,
    image: livro,
    file: '/sample-ebook.pdf'
  },
  {
    id: 12,
    title: 'Física Computacional (Físico)',
    price: 135.00,
    type: 'physical',
    category: 'Ciências Exatas',
    tags: ['Física', 'Simulação', 'Modelagem', 'Físico'],
    sku: 'PHY-COMP-06',
    description: `Explore a interseção entre física e computação. Este livro mostra como usar a computação para resolver problemas físicos complexos, com foco em simulações e modelagem.

    Recomendado para estudantes e pesquisadores nas áreas de física, engenharia e computação que buscam aplicar seus conhecimentos em problemas do mundo real.`,
    image: livro
  },
  {
    id: 13,
    title: 'Machine Learning com Python (Físico)',
    price: 180.00,
    type: 'physical',
    category: 'Inteligência Artificial',
    tags: ['Machine Learning', 'Python', 'IA', 'Físico'],
    sku: 'ML-PY-07',
    description: `Um guia prático e completo para iniciar em Machine Learning. Este livro aborda os principais algoritmos e conceitos, com exemplos práticos em Python e bibliotecas como Scikit-learn.

    Ideal para programadores e analistas de dados que querem começar a construir seus próprios modelos de aprendizado de máquina.`,
    image: livro
  },
  {
    id: 14,
    title: 'Blockchain e Criptomoedas (E-book)',
    price: 65.00,
    type: 'ebook',
    category: 'Tecnologia',
    tags: ['Blockchain', 'Criptomoedas', 'Finanças', 'E-book'],
    sku: 'BLOCK-CHAIN-08',
    description: `Desvende o universo de Blockchain e Criptomoedas. O e-book explica de forma clara a tecnologia por trás do Bitcoin e Ethereum, contratos inteligentes e o futuro das finanças descentralizadas.

    Para curiosos, investidores iniciantes e profissionais que precisam entender o funcionamento dessa tecnologia revolucionária.`,
    image: livro,
    file: '/sample-ebook.pdf'
  },
  {
    id: 15,
    title: 'Realidade Virtual e Aumentada (Físico)',
    price: 165.00,
    type: 'physical',
    category: 'Tecnologia',
    tags: ['VR', 'AR', 'Realidade Virtual', 'Físico'],
    sku: 'VR-AR-09',
    description: `Um guia completo para os princípios de design e desenvolvimento de Realidade Virtual e Aumentada. O livro aborda desde a história da VR/AR até as ferramentas e técnicas usadas para criar experiências imersivas.

    Perfeito para desenvolvedores, designers e criadores de conteúdo que desejam entrar no mercado de tecnologias imersivas.`,
    image: livro
  },
  {
    id: 16,
    title: 'Computação Gráfica (Físico)',
    price: 140.00,
    type: 'physical',
    category: 'Computação Gráfica',
    tags: ['Gráficos 3D', 'Renderização', 'Jogos', 'Físico'],
    sku: 'COMP-GRAF-10',
    description: `Este livro apresenta os fundamentos da computação gráfica, incluindo gráficos 3D, transformações, iluminação e renderização em tempo real.

    Conteúdo essencial para estudantes de ciência da computação e engenharia de software interessados em áreas como desenvolvimento de jogos e animação.`,
    image: livro
  },
  {
    id: 17,
    title: 'Análise de Algoritmos (Físico)',
    price: 120.00,
    type: 'physical',
    category: 'Algoritmos e Estruturas de Dados',
    tags: ['Algoritmos', 'Otimização', 'Análise', 'Físico'],
    sku: 'ANAL-ALG-11',
    description: `Aprofunde-se nas técnicas de análise de complexidade e otimização de algoritmos. O livro ensina a calcular o desempenho de um algoritmo e a escolher a melhor solução para um problema.

    Um guia indispensável para estudantes avançados e profissionais que trabalham com otimização e algoritmos de alto desempenho.`,
    image: livro
  },
  {
    id: 18,
    title: 'Linguagens de Programação Funcional (E-book)',
    price: 40.00,
    type: 'ebook',
    category: 'Programação',
    tags: ['Programação Funcional', 'Paradigma', 'E-book'],
    sku: 'FUNC-PROG-12',
    description: `Explore o paradigma da programação funcional. Este e-book explica os conceitos-chave, como funções puras, imutabilidade e recursão, com exemplos em diferentes linguagens.

    Ideal para programadores que desejam expandir seus horizontes e aprender uma nova forma de pensar e resolver problemas.`,
    image: livro,
    file: '/sample-ebook.pdf'
  },
  {
    id: 19,
    title: 'Arquitetura de Computadores (Físico)',
    price: 105.00,
    type: 'physical',
    category: 'Hardware',
    tags: ['Arquitetura', 'Hardware', 'Memória', 'Físico'],
    sku: 'ARQ-COMP-13',
    description: `Entenda a estrutura e organização dos sistemas de computadores. O livro cobre a hierarquia de memória, o processamento de instruções e a comunicação entre os componentes.

    Conteúdo fundamental para estudantes de engenharia e ciência da computação que desejam entender o hardware por trás do software.`,
    image: livro
  },
  {
    id: 20,
    title: 'O Essencial do Linux (E-book)',
    price: 30.00,
    type: 'ebook',
    category: 'Sistemas Operacionais',
    tags: ['Linux', 'SO', 'Terminal', 'E-book'],
    sku: 'LINUX-ESS-14',
    description: `Um guia prático para quem está começando a usar o sistema operacional Linux. O e-book aborda os principais comandos do terminal, gerenciamento de arquivos e conceitos básicos de administração.

    Perfeito para iniciantes em TI, desenvolvedores e entusiastas que desejam migrar para o Linux ou aprimorar suas habilidades.`,
    image: livro,
    file: '/sample-ebook.pdf'
  }
];

export default products;