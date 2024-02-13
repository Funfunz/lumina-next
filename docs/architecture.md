# Architecture

## NextJS headless page builder

```plantuml
package "Backend" as backend {
  [Data]
}

package "Frontend" as Lumina {
  [Frontend component n] as fe_component
  [Component Renderer] as renderer
  [Frontend context] as fe_context
  [Data fetcher] as data_fetcher
  renderer <-down-> fe_component
  renderer -right-> data_fetcher
  fe_component <-right-> fe_context
  data_fetcher <-up-> backend: fetch page configuration from backend
  data_fetcher -down-> fe_context: add the data to the context\nafter fetching from backend
  renderer <-> fe_context: updated the renderer with the data
  
}

Request -down-> Lumina

Lumina -down-> renderer
renderer -left-> Response
```