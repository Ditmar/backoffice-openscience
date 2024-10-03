import Container from './Container';
import ContextProvider from './context/ContextProvider';

function MainComponent() {
  return (
    <ContextProvider>
      <Container />
    </ContextProvider>
  );
}
export default MainComponent;
