import { useState } from 'react';
import { api } from '../services/api';

import Input from '../components/Input';
import ItemList from '../components/ItemList';
import Button from '../components/Button';

import gitLogo from '../assets/github.png';
import { Container } from './styles';

function App() {
    const [currentRepo, setCurrentRepo] = useState('');
    const [repos, setRepos] = useState([]);

    const handleSearchRepo = async () => {
        try {
            const {data} = await api.get(`repos/${currentRepo}`)

            if(data.id){

                const isExist = repos.find(repo => repo.id === data.id)

                if(!isExist){
                    setRepos(prev => [...prev, data]);
                    setCurrentRepo('');
                    return
                }         

                if(isExist){
                    alert('Repositório já listado');
                    return
                }
            }
        } catch {
            alert('Repositório não encontrado');
        }           
    }


    const handleRemoveRepo = (id) => {
        setRepos(prev => prev.filter(repo => repo.id !== id));
    }


    return (
        <Container>
            <img src={gitLogo} width={72} height={72} alt='github logo'/>
            <div className='search'>
                <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
                <Button onClick={handleSearchRepo}/>
            </div>
            {repos.map(repo => <ItemList handleRemoveRepo={handleRemoveRepo} key={repo.id} repo={repo}/>)}
        </Container>
    );
}

export default App;

// Sara1502/Portfolio