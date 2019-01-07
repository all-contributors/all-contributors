# ✨ Todos los Colaboradores ✨

<table>
    <tr>
        <!-- Do not translate this table -->
        <td> Read these guidelines in </td>
        <td><a href="/README.md">English</a></td>
        <td><a href="/docs/pt-BR/README.md">Português</a></td>
        <td><a href="/docs/es-ES/README.md">Español</a></td>
    </tr>
</table>

[![chat][chat-badge]][chat]
[![Build Status][build-badge]][build]
[![version][version-badge]][package]
[![MIT License][license-badge]][LICENSE]

[![All Contributors](https://img.shields.io/badge/all_contributors-16-orange.svg?style=flat-square)](#contributors)
[![PRs Welcome][prs-badge]][prs]
[![Implementations][implementations-badge]][implementations]
[![Donate][donate-badge]][donate]
[![Code of Conduct][coc-badge]][coc]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

Esta es una especificación para reconocer a los colaboradores de un proyecto de código abierto, de una manera que se de una a recompensa a cada contribución, no solo de código.

La idea básica es esta:

> Use el proyecto README (u otra página de documentación pública destacada en el proyecto) para reconocer las contribuciones de los miembros de la comunidad del proyecto.

La gente está dando de sí mismos y de su tiempo libre para contribuir a proyectos de código abierto de muchas maneras. A veces puede esto puede consumir parte de su tiempo, por lo que deben ser elogiados por todas sus contribuciones (de código o no).

Utilice este proyecto como ejemplo de implementación de la especificación de Todos los Colaboradores (consulte la sección [Colaboradores](#colaboradores) de más abajo).

## Herramientas

Si le parece tedioso mantener la lista de colaboradores, intente usar la [herramienta CLI](https://www.npmjs.com/package/all-contributors-cli) para facilitar su carga.

Si usa Atom, pruebe [allcontributors](https://atom.io/packages/allcontributors), un paquete atom para la implementación de la especificación de Todos los Colaboradores.

## Especificación

### Obligatorio
Los proyectos de código abierto deben incluir los siguientes elementos obligatorios para admitir la especificación Todos los Colaboradores:

1. Una sección de "Colaboradores" en un sitio destacado de la documentación del repositorio del proyecto que incluye una lista de todos los colaboradores del proyecto
   - El objetivo debe ser utilizar el sitio más destacado de la documentación del proyecto cuando sea posible. En muchos casos, este es el archivo README del proyecto.
   - Considere el uso de un archivo CONTRIBUTING en el nivel superior del repositorio cuando el número de colaboradores del proyecto supere un nivel en el que es posible usar el archivo README para reconocer las contribuciones. En este caso, un enlace destacado al archivo CONTRIBUTING debe incluirse en la página README bajo el encabezado "Colaboradores"
2. Los listados deben tener el formato de tabla con la siguiente información sobre los colaboradores del proyecto:
   - Nombre
   - Enlace de URL a un sitio donde se puede obtener más información sobre el colaborador. Esta URL puede ser determinada por el colaborador del proyecto a discreción.
   - Indicación de la categoría de contribución en formato de imagen de texto o icono utilizando las categorías de contribución definidas y / o las imágenes de emoji de categorías de contribución (ver más abajo).
   - Un enlace a la Categoría de contribución en formato de texto o emoji usando las Categorías de contribución definidas y / o [Emoji de Categorías de contribución](#emoji-key).
     - La lista de colaboradores se puede distribuir en varias líneas (cada una técnicamente es su propia tabla) según sea necesario.
     - El orden de los colaboradores es irrelevante para la especificación. Ordénalos como desees.
3. Los proyectos deben definir a los colaboradores como aquellos que contribuyen a un proyecto en cualquiera de las categorías de contribución en cualquier nivel de contribución. Esta especificación incluye, por definición, todas las contribuciones. En los casos en que los proyectos se desvíen de las categorías de contribución o requieran un nivel de contribución específico para cumplir con los criterios como colaboradores del proyecto, el proyecto debe proporcionar documentación explícita de las definiciones que satisfacen los criterios del colaborador del proyecto en el documento CONTRIBUTING o en un documento público similar que sea destacado en el nivel superior del repositorio del proyecto. Esta especificación recomienda que no se excluya a un individuo de la lista de colaboradores en función del nivel percibido de contribución. En su lugar, los proyectos deben usar indicadores de esfuerzo dentro de una lista que incluya a todos los colaboradores al proyecto en cualquier nivel de esfuerzo. Si se utilizan, estos indicadores de esfuerzo quedan a discreción del proyecto y no se especifican actualmente.

### Opcional
Los proyectos deben considerar los siguientes elementos opcionales como parte de su compromiso con la especificación Todos los Colaboradores:

1. El avatar del usuario puede ser incluido y se recomienda.
2. Se puede incluir un enlace opcional desde el indicador de Categoría de contribución a la(s) contribución(es) específica(s) para proporcionar información adicional sobre la(s) contribución(es) del proyecto, tal como se detalla en la siguiente sección.

## Emoji key

Emoji | Representación | Links para | Comentario
:---: | --- | --- | ---
💬 | Preguntas respondidas (en Issues, Stack Overflow, Gitter, Slack, etc.)
🐛 | Informes de errores | `https://github.com/$ {ownerName} / $ {repoName} / issues? q = author% 3A $ {username}`
📝 | Blogposts | el blogpost
💼 | Desarrollo de negocios | |
💻 | Código | `https://github.com/$ {ownerName} / $ {repoName} / commit? author = $ {username}`
📖 | Documentación | `https://github.com/$ {ownerName} / $ {repoName} / commit? author = $ {username}`, Wiki u otra fuente de documentación
🎨 | Diseño | el logo / iconografía / diseño visual / etc.
💡 | Ejemplos | los ejemplos
📋 | Organizadores de eventos | página del evento
💵 | Apoyo financiero | pagina relevante | personas u organizaciones que proporcionan apoyo financiero
🔍 | Buscadores de fondos / subvenciones | | personas que ayudan a encontrar apoyo financiero.
🤔 | Ideas y Planificación |
🚇 | Infraestructura (Hosting, Build-Tools, etc.) | enlace al archivo fuente (como `travis.yml`) en el repositorio, si corresponde
📦 | Embalaje / portabilidad para soportar una nueva plataforma.
🔌 | Plugin / librerias de utilidades | el repositorio base
👀 | Pull Requests revisados
🔧 | Herramientas | el repositorio base
🌍 | Traducción | el contenido traducido
⚠️ | Pruebas | `https://github.com/$ {ownerName} / $ {repoName} / commit? author = $ {username}`
✅ | Tutoriales | el tutorial
📢 | Charlas | Las diapositivas / grabación / repo / etc.
📹 | Videos | el video

## Notas para quienes mantienen el repositorio.
Los colaboradores deben ser reconocidos tan pronto como quien(es) mantiene(n) el repositorio se entere(n) de la contribución,para ayudar a garantizar que sus esfuerzos no se pasen por alto cuando la lista se actualice en una fecha posterior. Esto puede ser difícil para las contribuciones que no son el resultado de un commit en el repositorio, pero hagan todo lo posible para minimizar el tiempo entre la contribución y la actualización de la lista.

Ser propietario o quien mantiene un repositorio no significa que usted sea el único responsable de mantener actualizada la lista de colaboradores. Debe alentar a los colaboradores a que se agreguen a la lista tanto como sea posible. Esto puede ser en forma de un comentario en un issue, blog o en una respuesta, o mediante formas de comunicación más directas cuando corresponda.

Muchos colaboradores pueden no darse cuenta de que sus esfuerzos son suficientes para el reconocimiento en la lista de colaboradores. Esto podría deberse a que no han leído ni entendido la definición de colaborador según lo establecido en esta especificación, o porque no consideran que sea lo suficientemente importante. En estos casos, aún debe alentarlos a que se agreguen ellos mismos, pero puede ser necesario que usted agregue el colaborador usted mismo (aunque es una buena idea hacerlo en forma de un pull request para asegurarse de que estén de acuerdo con ser agregados).

Al final, no hay reglas estrictas para cuando se debe agregar una contribución a la lista, solo haga lo posible para ser justo y asegurarse de que todos los colaboradores sean reconocidos.

## Colaboradores

Por favor consulte en [Contributors](https://github.com/all-contributors/all-contributors#contributors)

Este proyecto sigue la especificación de [all-contributors][all-contributors].
¡Las contribuciones de cualquier tipo son bienvenidas!

## LICENCIA

[MIT](LICENSE)

[chat-badge]: https://img.shields.io/badge/chat-on%20gitter-46BC99.svg?style=flat-square
[chat]: https://gitter.im/kentcdodds/all-contributors?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge
[build-badge]: https://img.shields.io/travis/kentcdodds/all-contributors.svg?style=flat-square
[build]: https://travis-ci.org/kentcdodds/all-contributors
[version-badge]: https://img.shields.io/npm/v/all-contributors.svg?style=flat-square
[package]: https://www.npmjs.com/package/all-contributors
[license-badge]: https://img.shields.io/npm/l/all-contributors.svg?style=flat-square
[license]: https://github.com/all-contributors/all-contributors/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[donate-badge]: https://img.shields.io/badge/$-support-green.svg?style=flat-square
[donate]: https://kcd.im/donate
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/kentcdodds/all-contributors/blob/master/other/CODE_OF_CONDUCT.md
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
