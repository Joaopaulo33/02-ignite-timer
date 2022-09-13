import { Header } from '../../components/Header'
import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <div>
      <LayoutContainer>
        <Header />
        {/* Espaço para ser inserido conteudo */}
        <Outlet />
      </LayoutContainer>
    </div>
  )
}
