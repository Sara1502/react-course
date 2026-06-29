import {Header} from '../../components/Header'
import background from '../../assets/background.png'

const App = () => {
    return (
        <div className="App">
            <Header />
            <div className='conteudo'>
                <img src={background} className='background' />

            </div>
        </div>
    )
}

export default App;