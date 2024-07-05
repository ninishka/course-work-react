import styled from 'styled-components'

export const MapBack = styled.div`
  position: relative;
  width: 100%;
  height: auto; 
  background-image: ${({ backgroundImg }) => `url(${backgroundImg})`};
  background-size: cover;
  background-position: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7); 
  }
`;


export const ContactUs = styled.div`
  display: flex;
  flex-direction: column;
  
`
export const TitleWrap = styled.div`
  margin: 55px;
  line-height: 41px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;
  font-family: 'Glacial Indifference-Bold', sans-serif;
`


export const Modal = styled.div`
  display: none; 
  position: fixed; 
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); 
`
export const UpTitle = styled.h1`
  font-size: 35px;
`
export const UnderTitle = styled.h5`
  color: #EEEEEE;
  font-weight: 300;
`

//form//

export const Registration = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  

  @media (max-width: 1030px) {
    width: 300px; 
  }
`
export const RegFieldset = styled.fieldset`
  padding: 10px;
  border: none;
`
export const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px; 
`
export const Field = styled.div`
  display: flex;
  flex-direction: column;
  width: 21vw;
  margin: 1px;
  order: -1; 
  margin-bottom: 5px;
`
export const TextArea = styled.textarea`
  outline: none;
  width: 100%;
  height: 40px;
  position: relative;
  resize: none; 
  min-height: 100px; 
  &::placeholder {
  padding: 15px;
  font-size: 20px;
  }
`
export const SendButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  position: relative;
`

export const SendButton = styled.button`
  background-color: transparent;
  color: #E93656;
  border: 2px solid #E93656;
  padding: 15px;
  width: 170px;
  font-family: 'Glacial Indifference-Bold', sans-serif;
  
  &:hover {
  background-color: #E93656;
  color: white;
}

`

export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
`
export const FieldInput = styled.input`
  width: 100%;
  height: 40px;
  position: relative;
  
  &.field {
    @media (min-width: 768px) {
      width: calc(50% - 20px);
    }
  }
`

export const Label = styled.label`
  order: -1;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  position: relative;


  &:focus {
    outline: none;
  }

  &.type-text,
  &.type-email,
  &.type-url {
    width: 100%;
    height: 40px;
    position: relative;
    
  }
  &::placeholder {
    padding: 15px;
    font-size: 16px;
  }
`;