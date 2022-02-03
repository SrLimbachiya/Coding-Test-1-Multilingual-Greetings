import {BtnContainer, Btns} from '../StyledComponents'

const LanguageGreetingsItem = props => {
  const {active, languageGreetingsList, onLink} = props
  return (
    <BtnContainer>
      {languageGreetingsList.map(each => (
        <li key={each.id}>
          <Btns
            onClick={() => {
              onLink(each.buttonText)
            }}
            isActive={active === each.buttonText}
          >
            {each.buttonText}
          </Btns>
        </li>
      ))}
    </BtnContainer>
  )
}

export default LanguageGreetingsItem
