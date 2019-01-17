<div align="center">
    <a href="https://github.com/all-contributors/all-contributors">
        <img src="../../other/logo-full.png" alt="✨ All Contributors ✨" width="800px" />
    </a>
</div>

<table>
    <tr>
        <!-- Do not translate this table -->
        <td> Read these guidelines in </td>
        <td><a href="/README.md">English</a></td>
        <td><a href="/docs/es-ES/README.md">Español</a></td>
        <td><a href="/docs/fr-FR/README.md">Français</a></td>
        <td><a href="/docs/ko-KR/README.md">한국어</a></td>
    </tr>
</table>


[![chat][chat-badge]][chat]
[![Build Status][build-badge]][build]
[![version][version-badge]][package]
[![MIT License][license-badge]][LICENSE]

[![All Contributors](https://img.shields.io/badge/all_contributors-21-orange.svg?style=flat-square)](#contributors)
[![PRs Welcome][prs-badge]][prs]
[![Implementations][implementations-badge]][implementations]
[![Donate][donate-badge]][donate]
[![Code of Conduct][coc-badge]][coc]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

Essa é uma especificação para reconhecer contribuidores de um projeto de código aberto de uma maneira que recompense toda e qualquer contribuição, não apenas o código.

A ideia básica é esta:

> Use o README do projeto (ou outra página proeminente de documentação pública no projeto) para reconhecer as contribuições dos membros da comunidade do projeto.

As pessoas estão doando si mesmas e seu tempo livre para contribuir com projetos de código aberto de muitas maneiras. Pode ser uma fração do tempo, por vezes, e por isso eles devem ser elogiados por todas as suas contribuições (código ou não).

Use este projeto como um exemplo de implementação da especificação de todos os contribuidores (consulte a seção [Contribuidores](#Contribuidores) abaixo).

## Ferramentas

Se você achar tedioso usar a lista de contribuidores manualmente, tente usar a [ferramenta CLI](https://www.npmjs.com/package/all-contributors-cli) para simplificar sua rotina.

Se você usar o Atom, experimente [allcontributors](https://atom.io/packages/allcontributors), um pacote atom para a implementação all-contributors-spec.

## Especificação

### Obrigatório

Os projetos de código aberto devem incluir os seguintes itens obrigatórios para oferecer suporte à especificação Todos os Colaboradores:

1. Uma seção "Colaboradores" em um site proeminente da documentação do repositório de projetos que inclui uma lista de todos os contribuidores do projeto
  - O objetivo deve ser usar o site mais proeminente da documentação do projeto quando possível. Em muitos casos, este é o arquivo README do projeto
  - Considere o uso de um arquivo CONTRIBUTORS no nível superior do repositório quando o número de contribuidores do projeto exceder um nível no qual seja possível usar o arquivo README para confirmar as contribuições. Nesse caso, um link proeminente para o arquivo CONTRIBUTORS deve ser incluído na página README sob o título "Contribuidores"
2. As listagens devem ser formatadas como uma tabela com as seguintes informações sobre os contribuidores do projeto:
  - Nome
  - URL link para um site onde mais informações podem ser aprendidas sobre o contribuinte. Este URL pode ser determinado pelo colaborador a critério do projeto.
  - Indicação da categoria de contribuição no formato de imagem de texto ou ícone usando as imagens de emoticons de categorias de contribuição e/ou categorias de contribuição definidas (veja abaixo).
- Um link para a categoria de contribuição no formato de texto ou emoji usando as categorias de contribuição definidas e/ou [Emoji de Categorias de Contribuição](#Tabela de Emoji).
- A lista de colaboradores pode ser distribuída em várias linhas (cada uma sendo tecnicamente sua própria tabela), conforme necessário.
    - A ordem dos colaboradores é irrelevante para as especificações. Ordena-lhes como quiseres.
3. Os projetos devem definir os contribuintes como aqueles que contribuem para um projeto em qualquer uma das categorias de contribuição em qualquer nível de contribuição. Esta especificação é, por definição, inclusiva de todas as contribuições. Nos casos em que os projetos se desviem das Categorias de Contribuição ou exijam um nível de contribuição específico para atender aos critérios como contribuidores do projeto, o projeto deve fornecer documentação explícita das definições que satisfazem os critérios do contribuinte do projeto no documento "CONTRIBUTING". documento público no nível superior do repositório do projeto. Esta especificação recomenda contra a exclusão de um indivíduo da lista de Contribuintes com base no nível percebido de contribuição. Em vez disso, os projetos devem usar indicadores de esforço dentro de uma lista que permaneça inclusiva de todos os contribuintes para o projeto em qualquer nível de esforço. Se usados, esses indicadores de esforço ficam a critério do projeto e não são especificados no momento.

### Opcional
Os projetos devem considerar os seguintes itens opcionais como parte de seu compromisso com a especificação Todos os Colaboradores:

1. O avatar do usuário pode ser incluído e é recomendado.
3. Um link opcional do indicador Categoria de Contribuição para as contribuições específicas da categoria pode ser incluído para fornecer informações adicionais sobre as contribuições do projeto, conforme detalhado na seção abaixo.

## Tabela de Emoji (v2.7.0)

Emoji | Representa | Links para | Comentário
:---: | --- | --- | ---
💬 | Respondendo a perguntas (em Issues, Stack Overflow, Gitter, Slack, etc.)
🐛 | Relatando Bug | `https://github.com/${ownerName}/${repoName}/issues?q=author%3A${username}`
📝 | Publicação no Blog | o link para publicação
💼 | Desenvolvimento de Negócios | | pessoas que executam tarefas de negócio
💻 | Código | `https://github.com/${ownerName}/${repoName}/commits?author=${username}`
 🖋 | Conteúdo (ex. cópia do website) | onde o conteúdo foi usado | publicações de blog são separados
📖 | Documentação | `https://github.com/${ownerName}/${repoName}/commits?author=${username}`, Wiki, ou outra fonte de documentação
🎨 | Design | o logo/iconografia/design visual/etc.
💡 | Exemplos | o exemplo
📋 | Organização de Evento | página do evento
💵 | Ajuda Financeira | página relevante | pessoas ou organizações que fornecem suporte financeiro
🔍 | Financiamento/Investimento | | pessoas que ajudam a encontrar apoio financeiro
🤔 | Ideias e Planejamento |
🚇 | Infraestrutura (Hospedagem, Build-Tools, etc) | link para o arquivo de destino (como `travis.yml`) no repositório, se aplicável
📦 | Packaging/Portando para suportar uma nova plataforma
🔌 | Plugin/Bibliotecas de utilitários | o repositório
👀 | Revisão de Pull Request
🛡️ | Segurança | identificar e/ou reduzir ameaças de segurança, GDPR, privacidade, etc
🔧 | Ferramentas | o repositório
🌍 | Tradução | o conteúdo traduzido
⚠️ | Testes | `https://github.com/${ownerName}/${repoName}/commits?author=${username}`
✅ | Tutoriais | o tutorial
📢 | Talks | o slides/gravação/repositório/etc.
📓 | Teste de usuário | notas do teste de usuário
📹 | Vídeos | o vídeo

## Notas para mantenedores de repositório
Os colaboradores devem ser reconhecidos assim que a contribuição for descoberta para ajudar a garantir que seus esforços não sejam negligenciados quando a lista for atualizada em uma data posterior. Isso pode ser difícil para contribuições que não são o resultado de um commit no repositório, mas faça o possível para minimizar o tempo entre a contribuição e a atualização da lista.

Ser o proprietário ou mantenedor do repositório não significa que você é o único responsável por manter atualizada a lista de contribuidores. Você deve incentivar os contribuidores a se incluírem na lista o máximo possível. Isso pode ser na forma de um comentário sobre o assunto, blog ou resposta, ou através de formas mais diretas de comunicação, quando apropriado.

Muitos contribuintes podem não perceber que seus esforços são suficientes para o reconhecimento na lista de colaboradores. Isso pode ter ocorrido porque eles não leram ou entenderam a definição de um colaborador, conforme estabelecido nesta especificação, ou porque não se sentem suficientemente significativos. Nesses casos, você ainda deve incentivá-los a se adicionar, mas pode ser necessário que você adicione o colaborador por conta própria (embora seja uma boa ideia fazê-lo na forma de uma solicitação de solicitação para garantir adicionado).

No final, não há regras rígidas e rápidas para quando uma contribuição precisa ser adicionada à lista, apenas faça o melhor para ser justa e garantir que todos os contribuidores sejam reconhecidos.

## Contribuidores ✨

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars.githubusercontent.com/u/1500684?v=3" width="100px;"/><br /><sub><b>Kent C. Dodds</b></sub>](https://kentcdodds.com)<br />[💬](#question-kentcdodds "Answering Questions") [📖](https://github.com/kentcdodds/all-contributors/commits?author=kentcdodds "Documentation") [👀](#review-kentcdodds "Reviewed Pull Requests") [📢](#talk-kentcdodds "Talks") | [<img src="https://avatars.githubusercontent.com/u/6177621?v=3" width="100px;"/><br /><sub><b>Divjot Singh</b></sub>](http://bogas04.github.io)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=bogas04 "Documentation") [👀](#review-bogas04 "Reviewed Pull Requests") | [<img src="https://avatars.githubusercontent.com/u/1282980?v=3" width="100px;"/><br /><sub><b>Ben Briggs</b></sub>](http://beneb.info)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=ben-eb "Documentation") [👀](#review-ben-eb "Reviewed Pull Requests") | [<img src="https://avatars.githubusercontent.com/u/2037007?v=3" width="100px;"/><br /><sub><b>James Monger</b></sub>](https://github.com/Jameskmonger)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=Jameskmonger "Documentation") | [<img src="https://avatars.githubusercontent.com/u/3869412?v=3" width="100px;"/><br /><sub><b>Jeroen Engels</b></sub>](https://github.com/jfmengels)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=jfmengels "Documentation") [👀](#review-jfmengels "Reviewed Pull Requests") [🔧](#tool-jfmengels "Tools") | [<img src="https://avatars.githubusercontent.com/u/4249591?v=3" width="100px;"/><br /><sub><b>Chris Simpkins</b></sub>](https://github.com/chrissimpkins)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=chrissimpkins "Documentation") [👀](#review-chrissimpkins "Reviewed Pull Requests") | [<img src="https://avatars.githubusercontent.com/u/153481?v=3" width="100px;"/><br /><sub><b>F. Hemberger</b></sub>](https://github.com/fhemberger)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=fhemberger "Documentation") |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [<img src="https://avatars.githubusercontent.com/u/3982200?v=3" width="100px;"/><br /><sub><b>Daniel Kraft</b></sub>](https://github.com/frigginglorious)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=frigginglorious "Documentation") | [<img src="https://avatars.githubusercontent.com/u/8503331?v=3" width="100px;"/><br /><sub><b>Mayank Badola</b></sub>](https://github.com/mbad0la)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=mbad0la "Documentation") [🔧](#tool-mbad0la "Tools") | [<img src="https://avatars.githubusercontent.com/u/5244986?v=3" width="100px;"/><br /><sub><b>Marco Biedermann</b></sub>](https://www.marcobiedermann.com)<br />[🎨](#design-marcobiedermann "Design") | [<img src="https://avatars.githubusercontent.com/u/22768990?v=3" width="100px;"/><br /><sub><b>Itai Steinherz</b></sub>](https://github.com/itaisteinherz)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=itaisteinherz "Documentation") | [<img src="https://avatars1.githubusercontent.com/u/305339?v=3" width="100px;"/><br /><sub><b>Patrick Connolly</b></sub>](http://nodescription.net)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=patcon "Documentation") | [<img src="https://avatars2.githubusercontent.com/u/3028124?v=4" width="100px;"/><br /><sub><b>Nikola Đuza</b></sub>](http://nikolalsvk.github.io/)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=nikolalsvk "Documentation") | [<img src="https://avatars2.githubusercontent.com/u/5346497?v=4" width="100px;"/><br /><sub><b>Demian Dekoninck</b></sub>](https://dem.be)<br />[💻](https://github.com/kentcdodds/all-contributors/commits?author=DemianD "Code") |
| [<img src="https://avatars0.githubusercontent.com/u/23029903?v=4" width="100px;"/><br /><sub><b>Michael Peyper</b></sub>](https://github.com/mpeyper)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=mpeyper "Documentation") | [<img src="https://avatars0.githubusercontent.com/u/23284276?v=4" width="100px;"/><br /><sub><b>Matheus Rocha Vieira</b></sub>](http://matheu.srv.br)<br />[🌍](#translation-MatheusRV "Translation") [💻](https://github.com/kentcdodds/all-contributors/commits?author=MatheusRV "Code") [📖](https://github.com/kentcdodds/all-contributors/commits?author=MatheusRV "Documentation") | [<img src="https://avatars1.githubusercontent.com/u/13991439?v=4" width="100px;"/><br /><sub><b>Robert Lluberes</b></sub>](https://robertlluberes.com)<br />[🌍](#translation-robertlluberes "Translation") | [<img src="https://avatars2.githubusercontent.com/u/3534236?v=4" width="100px;"/><br /><sub><b>Jake Bolam</b></sub>](https://jakebolam.com)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=jakebolam "Documentation") [🔧](#tool-jakebolam "Tools") | [<img src="https://avatars2.githubusercontent.com/u/7265547?v=4" width="100px;"/><br /><sub><b>tbenning</b></sub>](https://github.com/tbenning)<br />[🎨](#design-tbenning "Design") | [<img src="https://avatars0.githubusercontent.com/u/8260834?v=4" width="100px;"/><br /><sub><b>Maximilian Berkmann</b></sub>](maxcubing.wordpress.com)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=Berkmann18 "Documentation") [🌍](#translation-Berkmann18 "Translation") | [<img src="https://avatars2.githubusercontent.com/u/26620470?v=4" width="100px;"/><br /><sub><b>이종진</b></sub>](https://jongjineee.github.io)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=Jongjineee "Documentation") [🌍](#translation-Jongjineee "Translation") |
<!-- ALL-CONTRIBUTORS-LIST:END -->

Este projeto segue a [all-contributors][all-contributors] especificação.Contribuições de qualquer tipo são bem vindas!

## LICENÇA
MIT

[chat-badge]: https://img.shields.io/badge/chat-on%20gitter-46BC99.svg?style=flat-square
[chat]: https://gitter.im/all-contributors/all-contributors?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge
[build-badge]: https://img.shields.io/travis/all-contributors/all-contributors.svg?style=flat-square
[build]: https://travis-ci.org/all-contributors/all-contributors
[version-badge]: https://img.shields.io/npm/v/all-contributors.svg?style=flat-square
[package]: https://www.npmjs.com/package/all-contributors
[license-badge]: https://img.shields.io/npm/l/all-contributors.svg?style=flat-square
[license]: https://github.com/all-contributors/all-contributors/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[donate-badge]: https://img.shields.io/badge/$-support-green.svg?style=flat-square
[donate]: http://kcd.im/donate
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/all-contributors/all-contributors/blob/master/other/CODE_OF_CONDUCT.md
[implementations-badge]: https://img.shields.io/badge/%F0%9F%92%A1-implementations-8C8E93.svg?style=flat-square
[implementations]: https://github.com/all-contributors/all-contributors/blob/master/other/IMPLEMENTATIONS.md
[github-watch-badge]: https://img.shields.io/github/watchers/all-contributors/all-contributors.svg?style=social
[github-watch]: https://github.com/all-contributors/all-contributors/watchers
[github-star-badge]: https://img.shields.io/github/stars/all-contributors/all-contributors.svg?style=social
[github-star]: https://github.com/all-contributors/all-contributors/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20all-contributors!%20%E2%9C%A8%20Recognize%20all%20contributors,%20not%20just%20the%20ones%20who%20commit%20code%20%E2%9C%A8%20https://github.com/all-contributors/all-contributors%20%F0%9F%A4%97
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/all-contributors/all-contributors.svg?style=social
[emojis]: https://github.com/all-contributors/all-contributors#emoji-key
[all-contributors]: https://github.com/all-contributors/all-contributors
