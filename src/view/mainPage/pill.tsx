import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { setCategoryPill } from '../../reducers/categoryPillReducer'
interface Props {
  categories?: string[]
}

interface PillProps {
  category: string
}

const TRANSLATE_AMOUNT = 200

const Pills = (props: Props) => {
  const [showLeftButton, setShowLeftButton] = useState<boolean>(false)
  const [showRightButton, setShowRightButton] = useState<boolean>(false)
  const [scrollAmount, setScrollAmount] = useState<number>(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    const observer = new ResizeObserver(entries => {
      const container = entries[0]?.target
      if (container === null) return null
      setShowLeftButton(scrollAmount > 0)
      setShowRightButton(
        scrollAmount < container.scrollWidth - container.clientWidth
      )
    })
    observer.observe(containerRef.current)
  }, [props.categories, scrollAmount])

  if (!props.categories) return null

  return (
    <div
      ref={containerRef}
      className="sticky top-0 z-10 flex items-center overflow-x-hidden bg-white py-3">
      <div
        className={`flex gap-3 whitespace-nowrap transition -translate-x-[${scrollAmount}px] duration-500`}>
        {props.categories.map(category => (
          <Pill key={category} category={category} />
        ))}
      </div>
      {showLeftButton && (
        <div className="absolute left-0 h-full w-24  bg-gradient-to-r from-white to-transparent">
          <button
            className="h-full"
            onClick={() =>
              setScrollAmount(Math.max(scrollAmount - TRANSLATE_AMOUNT, 0))
            }>
            <ChevronLeft />
          </button>
        </div>
      )}
      {showRightButton && (
        <div className="absolute right-0 flex h-full w-24 justify-end bg-gradient-to-r from-transparent to-white">
          <button
            className="h-full"
            onClick={() => {
              if (!containerRef.current) return scrollAmount
              const width = containerRef.current.clientWidth
              const scrollWidth = containerRef.current.scrollWidth
              const maxScrollAmount = scrollWidth - width
              setScrollAmount(
                Math.min(scrollAmount + TRANSLATE_AMOUNT, maxScrollAmount)
              )
            }}>
            <ChevronRight />
          </button>
        </div>
      )}
    </div>
  )
}

const Pill = (props: PillProps) => {
  const { categoryPill } = useSelector((state: RootState) => state.categoryPill)
  let selectStyle = 'bg-gray-200'
  if (categoryPill === props.category) {
    selectStyle = 'bg-black text-white'
  }
  const dispatch = useDispatch()
  const updateCategoryPill = () => {
    dispatch(setCategoryPill(props.category))
  }
  return (
    <button
      onClick={updateCategoryPill}
      className={`whitespace-nowrap rounded-lg  px-3 py-1 ${selectStyle}`}>
      {props.category}
    </button>
  )
}

export default Pills
