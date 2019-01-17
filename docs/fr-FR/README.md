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
        <td><a href="/docs/pt-BR/README.md">Português</a></td>
        <td><a href="/docs/es-ES/README.md">Español</a></td>
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
[![Pull Reminders](https://pullreminders.com/badge.svg)](https://pullreminders.com?ref=badge)

Ceci est une spécification pour reconnaître les contributeurs à un projet open source d'une manière qui récompense chaque contribution et pas seulement le code.

L'idée de base est ceci:

> Utilise le README du projet (ou toute autre page de documentation publique importante dans le projet) pour reconnaître les contributions des membres de la communauté du projet.

Les gens donnent de leur temps et de leur temps libre pour contribuer à des projets open source de tant de façons. Ça peut parfois être un aspirateur de temps donc, ils devraient être loués pour toutes leurs contributions (code ou pas).

Utilise ce projet comme exemple de mise on oeuvre de la spécification de `all-contributors` (voir la section de [Contributeur](#contributeurs) dessous).

## Outil pour mettre à jour votre table all-contributors:

Si vous trouvez la tenue à jour de la liste des contributeurs fastidieux, essayez d'utiliser un de ces outils pour alléger votre charge:
- L'[iutil d'interface de ligne de commande all-contributors](https://www.npmjs.com/package/all-contributors-cli)
- Le [robot GitHub AllContributors](https://github.com/all-contributors/all-contributors-bot)

## Spécification

### Obligatoire
Les projets open source devraient comprendre les éléments obligatoires suivants afin de supporter la spécification de All Contributors:

1. Une section "Contributeurs" dans un site bien en vue de la documentation du répertoire du projet qui comprend une liste de tous les contributeurs du projet
  - Le but devrait être d'utiliser le site le plus en vue de la documentation du projet quand cela est faisable. Dans de nombreux cas, il s'agit du fichier README du projet
  - Envisager l'utilisation d'un fichier CONTRIBUTER au niveau supérieur du répertoire lorsque le nombre de contributeurs dépasse un niveau auquel il est possible d'utiliser le fichier README pour reconnaître les contributions. Dans ce cas, un lien proéminent vers le fichier CONTRIBUTER devrait être inclus sur la page README sous la rubrique "Contributeurs"
2. Les listes devraient être formatées sous forme de tableau contenant les informations suivants sur les contributeurs du projet:
  - Nom
  - Lien URL vers un site où l'on peut en apprendre davantage sur le contributeur.  Cette URL peut être déterminée par le contributeur à la discrétion du projet.
  - Indication de la catégorie de contribution en format de texte ou d'icône à l'aide des catégories de contribution et/ou des catégories de contribution définies en images emoji (voir ci-dessous).
  - Un lien vers la catégorie de contribution en format de texte ou d'emoji en utilisant les catégories de contribution définies et/ou [Catégories de Contribution emoji](#emoji-key).
    - La liste de contributeurs peut être mises sur plusieur lignes (chacune étant techniquement sa propre table) si besoin.
    - L'ordre de contributeurs est immatériel pour la spécification. Ordonner les comme vous le souhaitez.
3. Les projets devraient définir les contributeurs comme étant ceux qui contribuent à un projet dans n'importe quelle catégorie de contributions à n'importe quel niveau de contribution. Cette spécification comprend, par définition, toutes les contributions. Dans les cas où les projets s'écartent des catégories de contribution ou exigent un niveau de contribution spécifique pour répondre aux critères en tant que contributeur de projet, le projet devrait fournir une documentation explicite des définitions qui satisfont aux critères de contributeur de projet dans le document CONTRIBUTER ou un document public de premier plan similaire au niveau supérieur du répertoire du projet.
Cette spécification recommande être contre l'exclusion d'une personne de la liste des contributeurs en fonction du niveau de contribution perçu. Les projets devraient plutôt utiliser des indicateurs d'effort à l'intérieur d'une liste qui inclut tous les contributeurs au projet, peu importe le niveau d'effort. S'ils sont utilisés, ces indicateurs d'effort sont à la discrétion du projet et ne sont pas actuellement précisés.

### Optionnel
Les projets devraient envisager les éléments facultatifs suivants dans le cadre de leur engagement à l'égard de la spécification de All Contributors.

1. L'avatar de l'utilisateur peut être inclus et est recommandé.
2. Un lien facultatif de l'indicateur de la catégorie de contribution jusqu'aux catégories-orientée contributions peut être inclus pour fournir des renseignements supplémentaires, comme il est expliqué dans la section ci-dessous.

## Emoji key [![](https://img.shields.io/github/release/all-contributors/all-contributors.svg?style=flat-square)](https://github.com/all-contributors/all-contributors)

Emoji | Représente | Liens à | Commentaire
:---: | --- | --- | ---
💬 | Répondres aux questions (dans les problèmes, Stack Overflow, Gitter, Slack, etc.)
🐛 | Rapport de bug | `https://github.com/${ownerName}/${repoName}/issues?q=author%3A${username}`
📝 | Posts de blog | Les post de blog
💼 | Développement des affairs | | Les gens qui exécutent à la fin de l'entreprise
💻 | Code | `https://github.com/${ownerName}/${repoName}/commits?author=${username}`
🖋 | Contenu (e.g. copie du site web) | où le contenu est utilisé | les posts de blog sont séparées
📖 | Documentation | `https://github.com/${ownerName}/${repoName}/commits?author=${username}`, Wiki, ou autres source de documentation
🎨 | Design | le logo/iconography/design visuel/etc.
💡 | Examples | les examples
📋 | Organisateurs d'événement | page d'événement
💵 | Support Financier | page concernée | Gens ou organisations qui soutienne financierement.
🔍 | Chercheur de Financement/Subvention | | Personnes qui aident à trouver un soutien financier
🤔 | Idées et Planification |
🚇 | Infrastructure (Hébergement, Outils de constructions, etc) | Liens aux fichier de source (comme `travis.yml`) dans le répertoire, ci c'est applicable
📦 | Emballage/portage pour supporter une nouvelle plateforme.
🔌 | Plug-in/bibliothèques utilitaires | L'acceuil du répertoire
👀 | Revoire des requêtes de tirage.
🛡️ | Sécurité | | identifie et/ou réduit des menace de sécurité, GDPR, Intimité, etc
🔧 | Outils | L'accueil du répertoire
🌍 | Traduction | le contenus traduit
⚠️ | Tests | `https://github.com/${ownerName}/${repoName}/commits?author=${username}`
✅ | Tutoriels | les tutoriels
📢 | Conférences | les diapositives/enregistrement/répertoire/etc.
📓 | Tests utilisateurs | notes de test utilisateurs
📹 | Vidéos | les vidéo

## Notes pour les mainteneurs du répertoire
Les contributeurs doivent être reconnus dès que la contribution est découverte afin d'assurer que leurs efforts ne sont pas négligés lorsque la liste est mise à jour à une date ultérieure. Cela peut être difficile pour les contributions qui ne sont pas le résultat d'un engagement du répertoire, mais faites de votre mieux pour minimiser le temps entre la contribution et la mise à jour de la liste.

Être le propriétaire ou le responsable du répertoire ne signifie pas que vous êtes seul responsable de tenir à jour la liste des contributeurs. Vous devriez encourager les contributeurs à s'ajouter à la liste autant que possible. Cela peut prendre la forme d'un commentaire sur la question, d'un blogue ou d'une réponse, ou de formes plus directes de communication, le cas échéant.

De nombreux contributeurs ne se rendent peut-être pas compte que leurs efforts sont suffisants pour être reconnus dans la liste des contributeurs. C'est peut-être parce qu'ils n'ont pas lu ou compris la définition d'un contributeur telle qu'elle est énoncée dans cette spécification, ou parce qu'ils n'ont pas l'impression qu'elle est suffisamment importante. Dans ces cas, vous devriez quand même les encourager à s'ajouter, mais il pourrait être nécessaire pour vous d'ajouter le contributeur vous-même (bien que ce soit une bonne idée de le faire sous la forme d'une demande de tirage pour s'assurer qu'ils sont d'accord avec l'ajout).

En fin de compte, il n'y a pas de règles strictes pour quand une contribution doit être ajoutée à la liste, juste faire de votre mieux pour être équitable et pour s’assurer que tous les contributeurs sont reconnus.

## Contributeurs ✨

Merci à ces personnes formidable ([emoji key][emojis]):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars.githubusercontent.com/u/1500684?v=3" width="100px;"/><br /><sub><b>Kent C. Dodds</b></sub>](https://kentcdodds.com)<br />[💬](#question-kentcdodds "Answering Questions") [📖](https://github.com/kentcdodds/all-contributors/commits?author=kentcdodds "Documentation") [👀](#review-kentcdodds "Reviewed Pull Requests") [📢](#talk-kentcdodds "Talks") | [<img src="https://avatars.githubusercontent.com/u/6177621?v=3" width="100px;"/><br /><sub><b>Divjot Singh</b></sub>](http://bogas04.github.io)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=bogas04 "Documentation") [👀](#review-bogas04 "Reviewed Pull Requests") | [<img src="https://avatars.githubusercontent.com/u/1282980?v=3" width="100px;"/><br /><sub><b>Ben Briggs</b></sub>](http://beneb.info)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=ben-eb "Documentation") [👀](#review-ben-eb "Reviewed Pull Requests") | [<img src="https://avatars.githubusercontent.com/u/2037007?v=3" width="100px;"/><br /><sub><b>James Monger</b></sub>](https://github.com/Jameskmonger)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=Jameskmonger "Documentation") | [<img src="https://avatars.githubusercontent.com/u/3869412?v=3" width="100px;"/><br /><sub><b>Jeroen Engels</b></sub>](https://github.com/jfmengels)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=jfmengels "Documentation") [👀](#review-jfmengels "Reviewed Pull Requests") [🔧](#tool-jfmengels "Tools") | [<img src="https://avatars.githubusercontent.com/u/4249591?v=3" width="100px;"/><br /><sub><b>Chris Simpkins</b></sub>](https://github.com/chrissimpkins)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=chrissimpkins "Documentation") [👀](#review-chrissimpkins "Reviewed Pull Requests") | [<img src="https://avatars.githubusercontent.com/u/153481?v=3" width="100px;"/><br /><sub><b>F. Hemberger</b></sub>](https://github.com/fhemberger)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=fhemberger "Documentation") |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [<img src="https://avatars.githubusercontent.com/u/3982200?v=3" width="100px;"/><br /><sub><b>Daniel Kraft</b></sub>](https://github.com/frigginglorious)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=frigginglorious "Documentation") | [<img src="https://avatars.githubusercontent.com/u/8503331?v=3" width="100px;"/><br /><sub><b>Mayank Badola</b></sub>](https://github.com/mbad0la)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=mbad0la "Documentation") [🔧](#tool-mbad0la "Tools") | [<img src="https://avatars.githubusercontent.com/u/5244986?v=3" width="100px;"/><br /><sub><b>Marco Biedermann</b></sub>](https://www.marcobiedermann.com)<br />[🎨](#design-marcobiedermann "Design") | [<img src="https://avatars.githubusercontent.com/u/22768990?v=3" width="100px;"/><br /><sub><b>Itai Steinherz</b></sub>](https://github.com/itaisteinherz)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=itaisteinherz "Documentation") | [<img src="https://avatars1.githubusercontent.com/u/305339?v=3" width="100px;"/><br /><sub><b>Patrick Connolly</b></sub>](http://nodescription.net)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=patcon "Documentation") | [<img src="https://avatars2.githubusercontent.com/u/3028124?v=4" width="100px;"/><br /><sub><b>Nikola Đuza</b></sub>](http://nikolalsvk.github.io/)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=nikolalsvk "Documentation") | [<img src="https://avatars2.githubusercontent.com/u/5346497?v=4" width="100px;"/><br /><sub><b>Demian Dekoninck</b></sub>](https://dem.be)<br />[💻](https://github.com/kentcdodds/all-contributors/commits?author=DemianD "Code") |
| [<img src="https://avatars0.githubusercontent.com/u/23029903?v=4" width="100px;"/><br /><sub><b>Michael Peyper</b></sub>](https://github.com/mpeyper)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=mpeyper "Documentation") | [<img src="https://avatars0.githubusercontent.com/u/23284276?v=4" width="100px;"/><br /><sub><b>Matheus Rocha Vieira</b></sub>](http://matheu.srv.br)<br />[🌍](#translation-MatheusRV "Translation") [💻](https://github.com/kentcdodds/all-contributors/commits?author=MatheusRV "Code") [📖](https://github.com/kentcdodds/all-contributors/commits?author=MatheusRV "Documentation") | [<img src="https://avatars1.githubusercontent.com/u/13991439?v=4" width="100px;"/><br /><sub><b>Robert Lluberes</b></sub>](https://robertlluberes.com)<br />[🌍](#translation-robertlluberes "Translation") | [<img src="https://avatars2.githubusercontent.com/u/3534236?v=4" width="100px;"/><br /><sub><b>Jake Bolam</b></sub>](https://jakebolam.com)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=jakebolam "Documentation") [🔧](#tool-jakebolam "Tools") | [<img src="https://avatars2.githubusercontent.com/u/7265547?v=4" width="100px;"/><br /><sub><b>tbenning</b></sub>](https://github.com/tbenning)<br />[🎨](#design-tbenning "Design") | [<img src="https://avatars0.githubusercontent.com/u/8260834?v=4" width="100px;"/><br /><sub><b>Maximilian Berkmann</b></sub>](maxcubing.wordpress.com)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=Berkmann18 "Documentation") [🌍](#translation-Berkmann18 "Translation") | [<img src="https://avatars2.githubusercontent.com/u/26620470?v=4" width="100px;"/><br /><sub><b>이종진</b></sub>](https://jongjineee.github.io)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=Jongjineee "Documentation") [🌍](#translation-Jongjineee "Translation") |
<!-- ALL-CONTRIBUTORS-LIST:END -->

Ce projet suits les spécification [all-contributors][all-contributors].
Les contributions de toute nature sont les bienvenues !
Nous sommes également [à la recherche de mainteneurs](https://github.com/all-contributors/all-contributors/issues/112)

## LICENSE

[MIT](LICENSE)

[chat-badge]: https://img.shields.io/badge/slack-join-ff69b4.svg?style=flat-square
[chat]: https://join.slack.com/t/all-contributors/shared_invite/enQtNTE3ODMyMTA4NTk0LTUwZDMxZGZkMmViMzYzYzk2YTM2NjRkZGM5Yzc0ZTc5NmYzNWY3Y2Q0ZTY3ZmFhZDgyY2E3ZmIzNWQwMTUxZmE
[build-badge]: https://img.shields.io/circleci/project/all-contributors/all-contributors/master.svg?style=flat-square
[build]: https://circleci.com/gh/all-contributors/all-contributors
[version-badge]: https://img.shields.io/npm/v/all-contributors.svg?style=flat-square
[package]: https://www.npmjs.com/package/all-contributors
[license-badge]: https://img.shields.io/npm/l/all-contributors.svg?style=flat-square
[license]: https://github.com/all-contributors/all-contributors/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[donate-badge]: https://img.shields.io/badge/$-support-green.svg?style=flat-square
[donate]: https://kcd.im/donate
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
