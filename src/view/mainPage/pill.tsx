import { ChevronLeft } from 'lucide-react'
import { useState } from 'react'
interface Props {
  categories: string[] | undefined
}

interface PillProps {
  categorie: string
  selected: string | null
  setSelected: React.Dispatch<React.SetStateAction<string | null>>
}

const Pills = (props: Props) => {
  const [selected, setSelected] = useState<string | null>(null)

  if (!props.categories) return null
  return (
    <div className="sticky top-0 my-3 flex">
      <div className="flex flex-nowrap gap-3 overflow-x-hidden bg-white">
        {props.categories.map(categorie => (
          <Pill
            key={categorie}
            categorie={categorie}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
        <div className="absolute left-0 flex items-center">
          <button>
            <ChevronLeft />
          </button>
        </div>
      </div>
    </div>
  )
}

const Pill = (props: PillProps) => {
  let selectStyle = 'bg-gray-200'
  if (props.selected === props.categorie) {
    selectStyle = 'bg-black text-white'
  }
  return (
    <button
      onClick={() => props.setSelected(props.categorie)}
      className={`whitespace-nowrap rounded-lg  px-3 py-1 ${selectStyle}`}>
      {props.categorie}
    </button>
  )
}

export default Pills
