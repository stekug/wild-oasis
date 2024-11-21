import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Button from './ui/Button';
import Heading from './ui/Heading';
import Input from './ui/Input';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">Wild Oasis App</Heading>
        <Heading as="h2">Check in and out</Heading>
        <Button onClick={() => alert('Check In')}>Check in</Button>
        <Button onClick={() => alert('Check Out')}>Check out</Button>
        <Heading as="h3">Form</Heading>
        <Input type="number" placeholder="Number of guests" />
        <Input type="number" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
}

const StyledApp = styled.main`
  background-color: orange;
  padding: 20px;
`;
