import {useState} from 'react'

import Input from '../components/Input';
import ItemList from '../components/ItemList'
import Button from '../components/Button'

import gitLogo from '../assets/github.png';
import {Container} from './styles';

function App() {
    const [repos, setRepos] = useState([]);

    return (
        <Container>
            <img src={gitLogo} width={72} height={72} alt='github logo'/>
            <div className='search'>
                <Input />
                <Button />
            </div>
            <ItemList />
        </Container>
    );
}

export default App;