import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  Separator,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form id="pomodoroForm">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <input id="task" />

          <label htmlFor="minutsAmount">durante</label>
          <input type="text" id="minutsAmount" />
          <span>Minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>
        <button type="submit" form="pomodoroForm">
          <Play size={24} />
          Começar
        </button>
      </form>
    </HomeContainer>
  )
}
