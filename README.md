# ⚛️ Around The U.S. em React

## 📝 Descrição do Projeto

**Around The U.S.** é a galeria de lugares construída ao longo das Sprints 8 a
12 do curso de Desenvolvimento Web da TripleTen Brasil — perfil, cartões com
fotos e pop-ups para editar, adicionar, ampliar e excluir. Nesta etapa, a
página começa a ser **portada para React**: a mesma interface, agora montada
com componentes.

Os cartões ainda vêm de **dados fictícios**; a conexão com o servidor, o envio
dos formulários e as curtidas entram na próxima sprint.

---

## 🚩 Sprint 13 — Primeiros componentes

- Projeto criado com a **Vite** (React + JavaScript), porta **3000** e o
  navegador abrindo sozinho no `npm run dev`
- Marcação do projeto anterior convertida em **JSX** e dividida em
  componentes
- Estilos, imagens e fontes reaproveitados: pastas `blocks`, `images` e
  `vendor`, conectadas pelo `index.css`
- **Um componente `Popup`** para todos os pop-ups: recebe o título e o
  conteúdo (`children`) e fecha pelo X
- Cinco conteúdos de pop-up: editar perfil, novo local, trocar a foto,
  confirmar exclusão e imagem ampliada

### Como os pop-ups funcionam

O `Main` guarda **um estado**, `popup`, que começa em `null`:

```jsx
const [popup, setPopup] = useState(null);
```

Cada pop-up é um objeto `{ title, children }`. Clicar num botão guarda esse
objeto no estado; o X volta o estado para `null`. O `Popup` só aparece
quando há algo guardado:

```jsx
{
  popup && (
    <Popup onClose={handleClosePopup} title={popup.title}>
      {popup.children}
    </Popup>
  );
}
```

O pop-up da imagem é o único sem título — e é isso que o `Popup` usa para
aplicar o estilo de imagem e não desenhar o `<h3>`.

### Componentes

| Componente                                           | O que faz                                            |
| ---------------------------------------------------- | ---------------------------------------------------- |
| `App`                                                | junta `Header`, `Main` e `Footer`                    |
| `Header`                                             | o logotipo                                           |
| `Main`                                               | perfil, lista de cartões e o estado do pop-up aberto |
| `Footer`                                             | o rodapé                                             |
| `Card`                                               | um cartão; abre a imagem ampliada e o "Tem certeza?" |
| `Popup`                                              | a moldura comum: X, título e conteúdo                |
| `EditProfile`, `NewCard`, `EditAvatar`, `RemoveCard` | os formulários de cada pop-up                        |
| `ImagePopup`                                         | a imagem ampliada e a legenda                        |

---

## 🛠 Tecnologias Utilizadas

- **React 19** com componentes funcionais e o hook `useState`
- **JSX**: `className`, expressões entre chaves, `map` com `key`,
  renderização condicional com `&&` e com o operador ternário
- **Vite 8**: servidor de desenvolvimento, `import` de imagens e CSS, build
  de produção
- **CSS3 com BEM Flat**: um arquivo por bloco em `src/blocks`
- **Normalize.css** e a fonte **Inter** em `.woff2`
- **Prettier** (aspas simples) e **oxlint**

---

## 📐 Estrutura do Projeto

```
src/
├── blocks/                         ← CSS, um arquivo por bloco BEM
├── images/
├── vendor/                         ← normalize.css e a fonte Inter
├── components/
│   ├── App.jsx
│   ├── Header/Header.jsx
│   ├── Footer/Footer.jsx
│   └── Main/
│       ├── Main.jsx
│       └── components/
│           ├── Card/Card.jsx
│           └── Popup/
│               ├── Popup.jsx
│               └── components/
│                   ├── EditAvatar/EditAvatar.jsx
│                   ├── EditProfile/EditProfile.jsx
│                   ├── ImagePopup/ImagePopup.jsx
│                   ├── NewCard/NewCard.jsx
│                   └── RemoveCard/RemoveCard.jsx
├── index.css
└── main.jsx
```

Cada componente fica na pasta de quem o usa: o `Card` e o `Popup` dentro de
`Main`, os conteúdos dos pop-ups dentro de `Popup`.

---

## 💻 Como executar localmente

```bash
npm install
npm run dev
```

O navegador abre sozinho em `http://localhost:3000`.

Para o build de produção:

```bash
npm run build
npm run preview
```

> Em desenvolvimento, o React roda dentro do `<StrictMode>`, que monta cada
> componente duas vezes para achar problemas. Por isso o `console.log` dos
> cartões aparece em dobro no console; em produção, aparece uma vez.

---

## 📈 Próximos passos

1. Buscar o perfil e os cartões no servidor, com a classe `Api` da Sprint 12
2. Enviar os formulários e validar os campos
3. Curtir e excluir cartões de verdade
4. Fechar os pop-ups também com Esc e com clique fora

---

## 👤 Autor

**Leonardo Dias Caumo** — _Desenvolvido como parte do portfólio de estudos em Desenvolvimento Web da TripleTen Brasil._

---

© 2026 Leonardo Dias Caumo
