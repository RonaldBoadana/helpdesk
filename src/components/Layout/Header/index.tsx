import { LogoutButton } from '@components/Controllers/LogoutButton';
import React from 'react';
import { Container, Greeting, Title, SubTitle } from './styles';

export function Header() {
  function handleSignOut() { }

  return (
    <Container>
      <Greeting>
        <Title>HelpDesk</Title>
        <SubTitle>Conte conosco, estamos aqui para ajudar.</SubTitle>
      </Greeting>

      <LogoutButton onPress={handleSignOut} />
    </Container>
  );
}