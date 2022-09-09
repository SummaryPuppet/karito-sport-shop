import {useState, useMemo, useRef} from "react"
import { createAutocomplete } from "@algolia/autocomplete-core"
import AutocompletItem from "./AutocompleteItems"

export default function Search(){
  const [autocompleteState, setAutocompleteState] = useState({
    collections: [],
    isOpen: false
  }) 

  const autocomplete = useMemo(()=>createAutocomplete({
    placeholder: 'Tu proximo pedido',
    onStateChange: ({state}) => setAutocompleteState(state),
    getSources: () => [{
      sourceId: "offers-next-app",
      getItems: ({ query }) => {
        if (!!query){
          return fetch(`/api/search?q=${query}`)
            .then(res => res.json())
        }
      }
    }]
  }), [])

  const formRef = useRef(null)
  const inputRef = useRef(null)
  const panelRef = useRef(null)

  const formProps = autocomplete.getFormProps({
    inputElement: inputRef.current
  })

  return (
    <form ref={formRef} {...formProps}>
      <div className="relative text-center border-slate-200">
        <input className="" ref={inputRef} {...autocomplete.getInputProps()} />
        {
          autocompleteState.isOpen && (
            <div ref={panelRef} {...autocomplete.getPanelProps()}>
              {
                autocompleteState.collections.map((collection, index) => {
                  const { items } = collection

                  return (
                    <section key={index}>
                      <ul {...autocomplete.getListProps()}>
                        {
                          items.map(item => <AutocompletItem key={item.id} {...item} />)
                        }
                      </ul>
                    </section>
                  )
              })
              }
            </div>
          )
        }
      </div>
    </form>
  )
}
