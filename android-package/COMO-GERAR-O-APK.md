# Kendellícia's → app Android — três caminhos possíveis

Este pacote contém o que dá para preparar **sem** acesso a internet, SDK Android ou
empacotador de JavaScript (nenhum desses três existe no ambiente onde o app foi
desenvolvido). Os passos abaixo precisam ser feitos por você (ou um desenvolvedor)
num computador com internet.

**Se você já tem um workflow de GitHub Actions pronto (como o seu), vá direto para
o "Caminho C" abaixo — é o que se aplica ao seu caso.**

---

## Caminho C (o que você já começou) — GitHub Actions, direto do celular

Esse é o caminho mais realista pra você, já que roda tudo nos servidores do
GitHub (que têm internet e Android SDK) — você não precisa instalar nada no
seu computador ou celular. **Seu workflow está correto.** Só faltavam os
arquivos que ele espera encontrar no repositório para rodar `npm run build`
com sucesso — e eu os criei agora: `index.html`, `src/main.jsx`,
`vite.config.js` e `src/App.jsx` (o código do app), além do `package.json`
e `capacitor.config.json` já prontos.

### Como enviar os arquivos pro repositório pelo celular

Pelo navegador do celular, em `github.com`, dentro do seu repositório:

1. Toque em **"Add file" → "Create new file"**.
2. No campo do nome do arquivo, digite o caminho completo — por exemplo:
   `.github/workflows/build-apk.yml` (as barras criam as pastas sozinhas).
3. Cole o conteúdo daquele arquivo.
4. Role até o fim e toque em **"Commit new file"** (direto na branch `main`).
5. Repita para cada um destes arquivos (nomes e conteúdos exatamente como estão
   neste pacote que te enviei):
   - `package.json`
   - `capacitor.config.json`
   - `vite.config.js`
   - `index.html`
   - `manifest.json`
   - `service-worker.js`
   - `src/main.jsx`
   - `src/App.jsx` (esse é o maior — é o código completo do aplicativo)
   - os ícones dentro de `icons/mipmap-*/ic_launcher.png` (no GitHub mobile,
     enviar imagens é mais fácil pelo **"Add file" → "Upload files"**, que
     permite escolher fotos da galeria/arquivos do celular)

Assim que o **último** commit for feito na branch `main`, o workflow dispara
sozinho (é o que o `on: push` faz).

### Onde clicar para baixar o APK quando terminar

1. Vá na aba **"Actions"** do repositório (menu de cima, junto com "Code",
   "Issues" etc.).
2. Vai aparecer a execução mais recente. Espere o ícone virar um ✅ verde
   (pode levar alguns minutos — ele está de fato compilando o app inteiro).
3. Toque nessa execução para abrir os detalhes.
4. **Role até o final da página** — tem uma seção chamada **"Artifacts"**.
5. Toque em **"app-debug-apk"** para baixar. Isso baixa um `.zip` (é assim que
   o GitHub entrega artefatos, mesmo sendo um arquivo só) — abra o gerenciador
   de arquivos do celular, extraia o `.zip`, e lá dentro está o
   `app-debug.apk`, pronto pra instalar (toque nele → "instalar" → permitir
   "fontes desconhecidas" na primeira vez).

Se o ícone da execução ficar ❌ vermelho em vez de verde, toque nela e abra o
passo que falhou (aparece com um X) — me cola aqui o texto do erro que eu te
ajudo a resolver.

---

## Caminho A (alternativa mais simples) — instalar como PWA, sem gerar .apk

Um "PWA" é um site que o Android deixa instalar na tela inicial como se fosse um
app de verdade: ganha ícone próprio, abre em tela cheia (sem barra do navegador),
funciona offline, e **não passa pela Play Store nem exige login do Google** — que
era exatamente o que você pediu nos itens 2, 4 e 11.

O que já está pronto neste pacote para isso: `manifest.json` (nome, ícone, cores)
e `service-worker.js` (funcionamento offline).

**O que falta fazer:**

1. Publicar os arquivos do app em qualquer hospedagem estática gratuita — por
   exemplo, [Netlify Drop](https://app.netlify.com/drop) (literalmente arrastar
   uma pasta pro navegador, sem digitar nenhum comando) ou GitHub Pages.
2. Nessa pasta, colocar: o app já compilado (ver "gerar o build" no Caminho B,
   passo 1-3), o `manifest.json`, o `service-worker.js`, a pasta `icons/`, e
   registrar o service worker com estas linhas no arquivo principal do app:
   ```js
   if ("serviceWorker" in navigator) {
     navigator.serviceWorker.register("./service-worker.js");
   }
   ```
   e um `<link rel="manifest" href="./manifest.json">` no `<head>` do `index.html`.
3. Abrir o link publicado no Chrome do Android → menu (⋮) → **"Instalar app"** (ou
   "Adicionar à tela inicial"). Pronto: ícone da Kendellícia's na tela do
   Android, abrindo como app.

**Diferença importante para você decidir**: isso não gera um arquivo `.apk` —
é um link instalável. Na prática, para uso pessoal, o resultado no celular é
quase idêntico a um app nativo. Se você especificamente precisa de um arquivo
`.apk` (por exemplo, para instalar sem nenhuma conexão à internet no momento da
instalação), use o Caminho B.

---

## Caminho B — gerar um `.apk` nativo de verdade (mais trabalhoso)

### O que já está pronto neste pacote

- `capacitor.config.json` — nome do app "Kendellícia's" e o id `com.kendellicias.app`
  já configurados.
- `package.json` — lista as dependências necessárias (React, Vite, Capacitor, lucide-react,
  recharts — as mesmas bibliotecas que o app já usa).
- `icons/` — o ícone do app em todos os tamanhos que o Android pede (mdpi até xxxhdpi),
  gerado a partir da sua logo de verdade.
- O código do app (`kendellicias-app.jsx`) já usa uma persistência que funciona tanto
  aqui no protótipo quanto dentro de um app Android real (explico abaixo).

### O que falta fazer (num computador com internet)

1. **Instalar as ferramentas**: Node.js (18+), Android Studio (com o Android SDK) e o JDK
   que o Android Studio já traz.

2. **Criar um projeto Vite** e copiar o `kendellicias-app.jsx` para dentro dele como o
   componente principal (`src/App.jsx`), com um `src/main.jsx` padrão do Vite que
   renderiza `<App />`. Copie também o `package.json` e o `capacitor.config.json`
   deste pacote para a raiz do projeto.

3. Rodar:
   ```
   npm install
   npm run build
   npx cap add android
   npx cap sync android
   ```

4. **Trocar os ícones**: copiar as pastas de `icons/mipmap-*` para dentro de
   `android/app/src/main/res/`, substituindo os ícones padrão do Capacitor.

5. Abrir o projeto Android gerado:
   ```
   npx cap open android
   ```
   Isso abre o Android Studio. De lá, use **Build → Build Bundle(s) / APK(s) → Build APK(s)**.
   O arquivo `.apk` final aparece em `android/app/build/outputs/apk/debug/app-debug.apk`
   (ou `release/` se você gerar uma versão assinada para instalação permanente).

6. **Instalar no celular**: transferir esse `.apk` para o celular (cabo, WhatsApp Web,
   Google Drive) e abrir o arquivo no aparelho — o Android vai pedir para permitir
   "instalar de fontes desconhecidas" na primeira vez, já que não vem da Play Store.
   Isso é esperado e seguro para um app privado como este.

---

## Sobre a persistência (ponto crítico, vale para os dois caminhos)

O app usa uma função `AppStorage` que já criei pensando nisso: dentro do Claude.ai
(onde ele foi desenvolvido) ela usa o armazenamento próprio do Claude; fora daqui —
tanto no PWA (Caminho A) quanto dentro do app Android empacotado (Caminho B) — ela
automaticamente usa **IndexedDB**, que é um banco de dados local real e persistente,
padrão de qualquer navegador ou WebView. Isso significa que os dados (produtos,
clientes, vendas, fotos, etc.) vão continuar salvos ao fechar o app, reiniciar o
celular, e entre atualizações — sem precisar de internet.

## Backup e restauração

Já implementei dentro do app, em **Financeiro → Config**: "Fazer backup" baixa um
arquivo `.json` com todos os dados; "Restaurar backup" lê esse arquivo de volta
(com confirmação antes de substituir os dados atuais). Isso funciona nos dois
caminhos, e é o caminho para trocar de celular sem perder nada.

## O que eu não consigo garantir sem um Android físico

Login, permissões, comportamento do botão voltar, compartilhamento nativo,
abertura de PDF por outros apps, desempenho em aparelhos reais, e se o "Instalar
app" do Chrome aparece corretamente — tudo isso só pode ser validado testando de
verdade num celular Android. Isso está fora do que este ambiente de
desenvolvimento consegue verificar.
