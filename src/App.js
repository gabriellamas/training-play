import React, {useState} from 'react';
import Logo from './img/training-play-logo.svg'
import Carousel from './component/carousel/index'
import ColapseInfoComponent from './component/colapse-info';
import DescriptionPageComponent from './component/description-page';
import ModalVideoComponent from './component/modal-video';

function App() {

  const [loginStatus, setLoginStatus] = useState(false);

  const [modalVideo, setModalVideo] = useState({
    active: false,
    videoEmbed:''
  });

  const [modalFakeRouteDescription, setModalFakeRouteDescription] = useState({
    active: false,
    title: '', 
    description: '', 
    thumbImage: '',
    link: ''
  });

  return (
    <div className="App">

      <ModalVideoComponent 
        data={modalVideo} 
        setModalVideo={setModalVideo} 
      />

      <DescriptionPageComponent 
        data={modalFakeRouteDescription}
        closeDescription={setModalFakeRouteDescription}
        loginStatus={loginStatus}
        setModalVideo={setModalVideo}
      />

      <header>
        <img src={Logo} alt="Training Play | Escolha sua serie de treinos"/>
        <button className="btn btn-primary btn-line" type="button">Entrar</button>
      </header>

      <section>
        <div className="container">
          <h1>Encontre a melhor serie de exercícios para maratonar</h1>
          <p className="price-plan">R$ 19,90/mês
            <span>*cancele quando quiser</span>
          </p>
          <button className="btn btn-primary btn-large" type="button">Assine agora</button>
        </div>
      </section>

      <section className="serie-section">
        <div className="container">
          <h2 className="title-serie">Treino em casa</h2>
          <p className="coach-name">Coach Vinicius Lamas</p>
        </div>
        <Carousel openDescription={setModalFakeRouteDescription} openVideo={setModalVideo} loginStatus={loginStatus}/>
      </section>

      <section>
        <div className="container">
          <h2>Dúvidas Frequentes</h2>

          <div>
            <ColapseInfoComponent 
              id={0}
              title={'Conectar SmartTV'}
              content={'Assa eget risus dictum dapibus. Suspendisse eget imperdiet nisl, vitae rutrum risus. Etiam tincidunt ex ultrices.'}
            />

            <ColapseInfoComponent 
              id={1}
              title={'Adicionar atalho rápido para o site'}
              content={'Assa eget risus dictum dapibus. Suspendisse eget imperdiet nisl, vitae rutrum risus. Etiam tincidunt ex ultrices.'}
            />
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
            <div>
              <h3>Contato</h3>
              <p>contato@trainingplay.com.br</p>
            </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
//https://codesandbox.io/s/github/rakannimer/react-firebase/tree/master/modules/sandboxes/firebase-auth?from-embed=&file=/src/index.tsx:68-299
//https://react-firebase-js.com/docs/react-firebase-auth/getting-started#install