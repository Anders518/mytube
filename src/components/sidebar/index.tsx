import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { closeSidebar } from '../../reducers/sidebarReducer'
import { playlistType, subscriptionType } from '../../data/sidebar'
import SmallSidebar from './smallSidebar'
import LargeSidebar from './largeSidebar'

interface Props {
  subscribe: subscriptionType[]
  playList: playlistType[]
}

const Sidebar = ({ subscribe, playList }: Props) => {
  const dispatch = useDispatch()

  const { sidebarState } = useSelector((state: RootState) => state.sidebar)

  const close = () => {
    dispatch(closeSidebar())
  }
  return (
    <>
      <SmallSidebar sidebarState={sidebarState} />
      {sidebarState === 'smallOpen' && (
        <div
          className="fixed inset-0 z-[999] bg-neutral-400 opacity-50 lg:hidden"
          onClick={close}
        />
      )}
      <LargeSidebar
        sidebarState={sidebarState}
        subscribe={subscribe}
        playList={playList}
      />
    </>
  )
}

export default Sidebar
