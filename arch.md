```plantuml

:User: as user

package "C4 - NextJS" as c4 {
  [Lumina Page Builder] as luminaC4
  [Component Library] as componentLibrary

  componentLibrary -right-> luminaC4
}

package "Whitelabel - NextJS" as wl {
  [Custom components] as components
  [Lumina Page Builder] as luminaWL

  components -left-> luminaWL
}

user -down-> c4 :Request
user -down-> wl :Request
luminaC4 -up-> user :HTML
luminaWL -up-> user :HTML



```
