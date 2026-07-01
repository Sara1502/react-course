import gitLogo from '../assets/github.png';
import {Container} from './styles';
import Input from '../components/input';
import ItemList from '../components/ItemList'

function App() {
    return (
        <Container>
            <img src={gitLogo} width={72} height={72} alt='github logo'/>
            <Input />
            <ItemList />
        </Container>
    );
}

export default App;