import React from 'react';
import Button from '../../components/button/Button';
import './home.scss';
import Monster from '../../monster.png'

const Home: React.FC = () => {

  const handleClick = () => {
    console.log('Button clicked');
  };
  
return (
<>
<div className='topHalf'>
  <img className='monster' src={Monster} alt="img" />
<div className='welcome'>
  <h2>WELCOME </h2>
  <h2>to</h2>
  <h1>TECH TRIVIA</h1>
</div>
<img className='monster' src={Monster} alt="img" />
<h1 className='start'>Let's get started! Choose a topic:</h1>
<div className='topics'>
<Button color="#e36414" onClick={handleClick}>
        I know it all
      </Button><Button color="#e36414" onClick={handleClick}>
      HTML
      </Button><Button color="#e36414" onClick={handleClick}>
      CSS
      </Button><Button color="#e36414" onClick={handleClick}>
        React
      </Button><Button color="#e36414" onClick={handleClick}>
        JavaScript
      </Button>
</div>
</div>
</>
);
};

export default Home;