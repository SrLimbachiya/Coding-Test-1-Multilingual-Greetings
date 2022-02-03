import {Component} from 'react'
import {
  AppMain,
  Btns,
  BtnContainer,
  ContentContainer,
  Image,
} from './components/StyledComponents'
import LanguageGreetingsItem from './components/languageGreetingsItem'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {active: languageGreetingsList[0].buttonText}

  onLink = e => {
    this.setState({active: e})
  }

  render() {
    const {active} = this.state
    return (
      <AppMain>
        <h1>Multilingual Greetings</h1>
        <LanguageGreetingsItem
          active={active}
          languageGreetingsList={languageGreetingsList}
          onLink={this.onLink}
        />
        <ContentContainer>
          <img
            style={{height: '300px', width: '300px'}}
            src={
              languageGreetingsList.find(value => value.buttonText === active)
                .imageUrl
            }
            alt="greeting"
          />
        </ContentContainer>
      </AppMain>
    )
  }
}

export default App
