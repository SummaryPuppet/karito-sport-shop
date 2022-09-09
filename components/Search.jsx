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

  const inputProps = autocomplete.getInputProps({
    inputElement: inputRef.current
  })

  return (
    <form ref={formRef} {...formProps}>
      <div className="relative text-center border-slate-200">
        <input className="p-2 rounded-full shadow focus:outline-none shadow-yellow-500" ref={inputRef} {...inputProps} />
        {
          autocompleteState.isOpen && (
            <div ref={panelRef} {...autocomplete.getPanelProps()} className="z-40 overflow-hidden">
              {
                autocompleteState.collections.map((collection, index) => {
                  const { items } = collection

                  return (
                    <section className="absolute" key={index}>
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
