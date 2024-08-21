import BackGroundProvider from './context/BackGroundProvider';
import Container from './Container';
function MainColorGrid() {
    return (
        <BackGroundProvider>
            <div>
                <Container />
            </div>
        </BackGroundProvider>
    );
}
export default MainColorGrid;