# ⚛️ Around The U.S. em React

## 📅 Sprints

Projeto das **Sprints 13 e 14** do curso de Desenvolvimento Web da TripleTen
Brasil. É a reescrita em React do projeto das Sprints 8 a 12
([`web_project_around_pt`](https://github.com/oleodias/web_project_around_pt));
o back-end está em
[`web_project_around_express`](https://github.com/oleodias/web_project_around_express)
(Sprints 15 e 16).

| Sprint | O que foi feito neste repositório |
| --- | --- |
| 13 | projeto criado com a Vite, marcação em JSX, componentes e um pop-up único |
| 14 | a classe `Api`, o `CurrentUserContext`, o estado elevado ao `App` e os formulários salvando no servidor |

---

## 📝 Descrição do Projeto

**Around The U.S.** é a galeria de lugares construída ao longo das Sprints 8 a
12 do curso de Desenvolvimento Web da TripleTen Brasil — perfil, cartões com
fotos e pop-ups para editar, adicionar, ampliar e excluir. Aqui, a página é
**reescrita em React**: a mesma interface, montada com componentes e ligada
ao servidor.

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

Um **único estado**, `popup`, que começa em `null` (na Sprint 13 ele ficava no
`Main`; na 14, subiu para o `App`):

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
| `App`                                                | estados, solicitações à API e o provedor do contexto |
| `Header`                                             | o logotipo                                           |
| `Main`                                               | perfil, lista de cartões e o pop-up aberto           |
| `Footer`                                             | o rodapé                                             |
| `Card`                                               | um cartão: imagem, curtida e lixeira (só do dono)    |
| `Popup`                                              | a moldura comum: X, título e conteúdo                |
| `EditProfile`, `NewCard`, `EditAvatar`, `RemoveCard` | os formulários de cada pop-up                        |
| `ImagePopup`                                         | a imagem ampliada e a legenda                        |

---

## 🚩 Sprint 14 — Dados, contexto e servidor

- A classe `Api` da Sprint 12 em `src/utils/api.js`, exportada como **uma
  instância** já configurada
- Perfil e cartões vêm do servidor, **pedidos uma vez só**, na montagem do
  `App`
- **`CurrentUserContext`** (`src/contexts`): o `Main` e o `Card` leem o
  usuário atual sem receber props por vários níveis
- **Estado elevado ao `App`**: `currentUser`, `cards`, `popup` e todas as
  solicitações à API ficam nele; o `Main` recebe dados e funções por props
- Curtir e descurtir; excluir só os próprios cartões, depois do
  "Tem certeza?"
- Editar o perfil (formulário **controlado**, já preenchido), trocar a foto
  (campo lido por **ref**) e adicionar cartões, que entram no início da lista
- Os botões mostram "Salvando..." / "Excluindo..." enquanto o servidor
  responde; os pop-ups fecham também com **Esc** e com clique no fundo

### Para onde vão os dados

```
App ── currentUser, cards, popup, isLoading
 │       e as funções que chamam a API
 ├─ CurrentUserContext.Provider value={{ currentUser, handleUpdateUser,
 │                                        handleUpdateAvatar, isLoading }}
 └─ Main ── props: cards, popup, onCardLike, onCardDelete, onAddPlaceSubmit…
     ├─ Card ── avisa: onCardClick / onCardLike / onCardDelete (card)
     └─ Popup ── EditProfile, EditAvatar (contexto) · NewCard, RemoveCard (props)
```

Os componentes **avisam**, e o `App` **decide**: chama a API e, com a
resposta, atualiza o estado. A tela se redesenha sozinha. Nenhum estado é
alterado no lugar: curtir troca o cartão com `map`, excluir cria a lista nova
com `filter`, e adicionar faz `[newCard, ...state]`.

### Decisões

| Decisão                                                                         | Motivo                                                                                                          |
| ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Sem `<StrictMode>` no `main.jsx`                                                | Em desenvolvimento, ele monta tudo duas vezes, e as duas solicitações iniciais apareceriam em dobro na aba Rede |
| `.then().catch()` em vez de `async` + `await` + `.then()`                       | O exemplo da descrição mistura os dois estilos; um só faz o mesmo e se lê melhor                                |
| Nomes dos métodos da `Api` da Sprint 12 (`getInitialCards`, `changeLikeStatus`) | A descrição manda colar a classe do projeto anterior                                                            |
| A lixeira abre o "Tem certeza?"                                                 | O pop-up já existia, e a conclusão da descrição sugere usá-lo                                                   |
| Sem `noValidate` nos formulários                                                | Assim o navegador bloqueia campo vazio e link inválido antes de qualquer solicitação                            |
| `onMouseDown` no fundo do pop-up                                                | Selecionar texto dentro do campo e soltar fora não fecha o pop-up                                               |

---

## 🛠 Tecnologias Utilizadas

- **React 19** com componentes funcionais e os hooks `useState`, `useEffect`,
  `useContext` e `useRef`; Context API
- **Fetch API** com promessas, numa classe `Api`
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
├── contexts/CurrentUserContext.js
├── utils/api.js                    ← classe Api e a instância exportada
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

---

## 👤 Autor

**Leonardo Dias Caumo** — _Desenvolvido como parte do portfólio de estudos em Desenvolvimento Web da TripleTen Brasil._

---

© 2026 Leonardo Dias Caumo
