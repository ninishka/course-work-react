import React, { useState } from 'react';
import {
  MapBack,
  ContactUs,
  TitleWrap,
  Registration,
  Modal,
  UpTitle,
  UnderTitle,
  RegFieldset,
  InputRow,
  Field,
  TextArea,
  SendButtonWrap,
  SendButton,
  ModalContent,
  Label,
  Input
} from './styled'

import tpt3 from '../imgs2/map.jpg'



const NinethSection = () => {

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [website, setWebsite] = useState('');
  // const [message, setMessage] = useState('');

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   // Process form data here (e.g., send it to a server)

  //   // Reset form fields
  //   setName('');
  //   setEmail('');
  //   setWebsite('');
  //   setMessage('');
  // };


  return (
    <>
      <MapBack backgroundImg={tpt3}>
        <ContactUs>
          <TitleWrap>
            <UpTitle>CONTACT US</UpTitle>
            <UnderTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit</UnderTitle>
          </TitleWrap>
          <Registration>
            <RegFieldset>
              <InputRow>
                <Field> 
                  <Label for="first-name"></Label>
                  <Input
                    type="text" 
                    id="first-name" 
                    name="first-name"
                    required
                    placeholder="Your Name*"
                  />
                </Field>
                <Field> 
                  <Label for="email"></Label>
                  <Input 
                    type="text" 
                    id="email" 
                    name="email"
                    required
                    placeholder="Email Address*"
                  />
                </Field>
                <Field> 
                  <Label for="website"></Label>
                  <Input 
                    type="url" 
                    id="website" 
                    name="website"
                    required
                    placeholder="Your Website*"
                  />
                </Field>
              </InputRow>
              <Label for="message"></Label>
              <TextArea
                id="message"
                name="message"
                required placeholder="message*"
              ></TextArea>
              <SendButtonWrap>
                <SendButton type="submit">SEND MESSAGE</SendButton>
              </SendButtonWrap>
            </RegFieldset>
          </Registration>
          <Modal>
            <ModalContent>
              <h2>Thank you for getting in touch!</h2>
              <p>We appreciate you contacting us.</p>
            </ModalContent>
          </Modal>
        </ContactUs>
      </MapBack>
    </>
  );
}

export default NinethSection;

  // <form onSubmit={handleSubmit}>
  //     <Label htmlFor="name">Name:</Label>
  //     <Input
  //       id="name"
  //       type="text"
  //       value={name}
  //       onChange={(e) => setName(e.target.value)}
  //     />

  //     <Label htmlFor="email">Email:</Label>
  //     <Input
  //       id="email"
  //       type="email"
  //       value={email}
  //       onChange={(e) => setEmail(e.target.value)}
  //     />

  //     <Label htmlFor="website">Website:</Label>
  //     <Input
  //       id="website"
  //       type="url"
  //       value={website}
  //       onChange={(e) => setWebsite(e.target.value)}
  //     />

  //     <Label htmlFor="message">Message:</Label>
  //     <textarea
  //       id="message"
  //       value={message}
  //       onChange={(e) => setMessage(e.target.value)}
  //     />

  //     <button type="submit">Submit</button>
  //   </form>