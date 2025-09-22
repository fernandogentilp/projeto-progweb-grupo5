     # Loja Virtual COMPIA (React)

     Projeto front-end em React (HTML + CSS) para a loja virtual COMPIA — versão estática para deploy em GitHub Pages ou outro host estático.

     ## Como rodar localmente
     1. Certifique-se de ter Node.js (>=16) e npm instalados.
     2. No terminal, rode:

```bash
npm install
npm start
```

     3. A aplicação abrirá em http://localhost:3000

     ## O que está incluído
     - Aplicação React com listagem de produtos, páginas de produto, carrinho e checkout simulado.
     - Suporte a produtos `ebook` com geração de link de download (simulado e expirável via localStorage).
     - Estrutura pronta para você subir no GitHub (adicione repositório e faça push).

     ## Observações
     - Neste projeto o fluxo de pagamento é simulado (sem gateway). Para produção, integre um back-end e gateways de pagamento.
     - Os downloads de e-books são gerados localmente (client-side) como demonstração.
