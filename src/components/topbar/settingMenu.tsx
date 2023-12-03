import { useDispatch, useSelector } from 'react-redux'
import { ThemeType, setTheme } from '../../reducers/pageSetting'
import { RootState } from '../../store'
import { Sun, Moon, MonitorSpeaker } from 'lucide-react'
import { ElementType, useState } from 'react'

const SettingMenu = () => {
  const { theme } = useSelector((state: RootState) => state.pageSetting)
  const dispatch = useDispatch()
  const themeIcons = {
    system: MonitorSpeaker,
    dark: Moon,
    light: Sun
  }
  const themeIcon = theme ? themeIcons[theme] : themeIcons['system']
  const toggleTheme = (theme: ThemeType) => {
    dispatch(setTheme(theme))
  }
  return (
    <div className="flex flex-col divide-y-2 rounded-xl capitalize">
      <div>
        <div className="flex">
          <MenuItem Icon={themeIcon} name="theme">
            <MenuItem
              Icon={themeIcons['system']}
              name="system"
              onClick={() => toggleTheme('system')}
            />
            <MenuItem
              Icon={themeIcons['dark']}
              name="dark"
              onClick={() => toggleTheme('dark')}
            />
            <MenuItem
              Icon={themeIcons['light']}
              name="light"
              onClick={() => toggleTheme('light')}
            />
          </MenuItem>
        </div>
      </div>
      <div>setting</div>
      <div>help</div>
    </div>
  )
}

interface MenuItemProps {
  Icon: ElementType
  name: string
  onClick?: () => void
  children?: React.ReactNode
}

const MenuItem = ({ Icon, ...props }: MenuItemProps) => {
  const [showChildren, setShowChildren] = useState(false)
  const toggleShowChildren = () => {
    setShowChildren(!showChildren)
  }

  return (
    <div>
      <div className="" onClick={props.onClick || toggleShowChildren}>
        <Icon
          className={`h-6 w-6 transition-transform duration-300 ${
            showChildren ? 'rotate-180' : ''
          }`}
        />
        <div>{props.name}</div>
      </div>
      {showChildren && (
        <div className="flex flex-col divide-y-2">{props.children}</div>
      )}
    </div>
  )
}

export default SettingMenu
