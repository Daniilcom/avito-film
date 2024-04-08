import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { NavBar } from 'widgetes/NavBar'
import { useTheme } from 'app/providers/ThemeProvaider'
import { AppRouter } from './providers/router'

const App = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <NavBar />
      <div className="content-page">
        <AppRouter />
      </div>
    </div>
  )
}

export default App
