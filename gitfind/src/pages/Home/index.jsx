import {Header} from '../../components/Header'
import background from '../../assets/background.png'
import profile from '../../assets/profile.png'
import {ItemList} from '../../components/ItemList'

import './style.css';

const App = () => {
    return (
        <div className="App">
            <Header />
            <div className='conteudo'>
                <img src={background} className='background' />
                <div className='info'>
                    <div>
                        <input name='usuario' placeholder='@username' />
                        <button>Buscar</button>
                    </div>
                    <div className='perfil'>
                        <img src={profile} className='profile' />
                        <div className='descricao'>
                            <h3>Sara Moreira</h3>
                            <span>@sara</span>
                            <p>Descrição</p>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <h4 className='repositorio'>Repositórios</h4>
                        <ItemList tite='teste' description='teste de descrição'></ItemList>
                        <ItemList tite='teste' description='teste de descrição'></ItemList>
                        <ItemList tite='teste' description='teste de descrição'></ItemList>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;