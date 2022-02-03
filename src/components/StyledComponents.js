import styled from 'styled-components'

export const AppMain = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Btns = styled.button`
  border-radius: 15px;
  padding: 7px;
  width: 90px;
  margin: 10px;
  border: 1px solid;
  font-weight: 500;
  font-family: Roboto;
  background-color: ${props => (props.isActive ? '#db1c48' : '#ffff')};
  color: ${props => (props.isActive ? '#ffff' : '#db1c48')};
  cursor: pointer;
`
export const BtnContainer = styled.ul`
  margin-top: 20px;
  list-style: none;
  display: flex;
`

export const ContentContainer = styled.div`
  height: 350px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`

export const Image = styled.img`
  height: 300px;
  width: 300px;
`
