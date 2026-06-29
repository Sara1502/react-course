import {Header} from '../../components/Header'
import background from '../../assets/background.png'

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
                </div>
            </div>
        </div>
    )
}

export default App;