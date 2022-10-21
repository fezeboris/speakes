/* HEADER  */

export default function Header() {
  return (
    <div>
      <div>
        <img
          className='ui image'
          alt='logo speakers 237'
          src='/images/banner.png'
        />
      </div>
      <div className='ui huge menu'>
        <a href='#' className='item'>
          Acceuil
        </a>
        <a href='#' className='item'>
          Laisser un message
        </a>
        <a href='#' className='item'>
          A propos
        </a>
        <div class='right menu'>
          <a href='#' className='item'>
            Faire un don
          </a>
        </div>
      </div>
    </div>
  );


/* FOOTER  */

export default function Footer() {
  return (
    <div className='ui vertical footer segment'>
      <div className='ui container'>
        <div className='ui stackable inverted divided equal height stackable grid'>
          <div className='three wide column'>
            <h4 className='ui header'>A propos de nous</h4>
            <div className='ui link list'>
              <a href='#' className='item'>
                Equipe
              </a>
              <a href='#' className='item'>
                React Workshop
              </a>
            </div>
          </div>
          <div className='three wide column'>
            <h4 className='ui header'>Laisser nous un message</h4>
            <div className='ui link list'>
              <a href='#' className='item'>
                Banana Pre-Order
              </a>
              <a href='#' className='item'>
                DNA FAQ
              </a>
              <a href='#' className='item'>
                How To Access
              </a>
              <a href='#' className='item'>
                Favorite X-Men
              </a>
            </div>
          </div>
          <div className='seven wide column'>
            <h4 className='ui header'>Caysti React Course</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

/* REACT OLD CODE  */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.Increment = this.Increment.bind(this);
  }
​
  Increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
​
  render() {
    return (
      <div>
        <button onClick={() => this.Increment()}>Incrementer</button>
        {this.state.counter}
      </div>
    );
  }
}

/*  APP BASE  */


function App() {
​
  const [term, setTerm] = useState();
​
  return (
    <div className='ui container'>
      <Field onChange={setTerm} value={term} label='Tapez votre clavier' />
      <div className='ui divider' />
      <Speakers data={data} />
    </div>
  );
}
​
export default App;



/* JSON PLACEHOLDER */

export default function UserPlaceHolder() {
  return (
    <div class='ui three doubling stackable cards'>
      <div class='ui card'>
        <div class='image'>
          <div class='ui placeholder'>
            <div class='square image'></div>
          </div>
        </div>
        <div class='content'>
          <div class='ui placeholder'>
            <div class='header'>
              <div class='very short line'></div>
              <div class='medium line'></div>
            </div>
            <div class='paragraph'>
              <div class='short line'></div>
            </div>
          </div>
        </div>
        <div class='extra content'>
          <div class='ui disabled primary button'>Voir le profil</div>
        </div>
      </div>
    </div>
  );
}


/* ROUTES */

<Routes>
  {/* Home */}
  <Route path='/' element={<Home />} />
  {/* Message   */}
  <Route path='/messages' element={<Message />} />
  {/* A propos*/}
  <Route path='/about' element={<About />} />
  {/* Speaker Details */}
  <Route path='/speakers/:idSpeaker' element={<SpeakerDetail />} />
  {/*  Faire un don*/}
  <Route path='/donate' element={<Donate />} />
  {/* 404 Page d'erreur */}
  <Route path='/donate' eleSment={<ErrorPage />} />
</Routes>




/*  FIELD   */

const Field = () => {
  return (
    <div>
      <div className='ui icon input'>
        <i className='search icon'></i>
        <input
          type='text'
          placeholder=""
          value=""
        />
      </div>
      <br />
    </div>
  );
};
​
export default Field;


/*  SPEAKER DETAIL  */

const SpeakerDetail = ({first, last, company, bio, id, twitterHandle, sessions}) => {
  return (
<div className='ui card'>
  <div className='image'>
    <img alt='' src={`images/speaker-${id}.jpg`} />
  </div>
  <div className='content'>
    <span className='header'>{first} - {last}</span>
    <div className='description'>
      {bio}
    </div>
    <div className='ui divider'></div>
    <div className='meta'>
      <span><i className='user icon'></i>@{twitterHandle}</span>
    </div>
    <div className='ui divider'></div>
    <span><i className='home icon'></i> {company}</span>
  </div>
  <div className='extra content'>
    <span><i className='bullhorn icon'></i> {sessions.length}</span>
  </div>
</div>

  )
}

export default SpeakerDetail

