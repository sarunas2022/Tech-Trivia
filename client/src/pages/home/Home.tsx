import React from 'react';
import Button from '../../components/button/Button';
import BigButton from '../../components/bigButton/BigButton';
import Monster from '../../monster.png';
import './home.scss';

const Home: React.FC = () => {
    const handleClick = () => {
        console.log('Button clicked');
    };

    return (
        <>
            <div className='topHalf'>
                <img className='monster' src={Monster} alt='img' />
                <div className='welcome'>
                    <h2>WELCOME </h2>
                    <h2>to</h2>
                    <h1>TECH TRIVIA</h1>
                </div>
                <img className='monster' src={Monster} alt='img' />
            </div>
            <div className='bottomHalf'>
                <h1 className='start'>Let's get started! Choose a topic:</h1>
                <div className='topics'>
                    <Button color='$orange' onClick={handleClick}>
                        HTML
                    </Button>
                    <Button color='$orange' onClick={handleClick}>
                        CSS
                    </Button>
                    <Button color='$orange' onClick={handleClick}>
                        React
                    </Button>
                    <Button color='$orange' onClick={handleClick}>
                        JavaScript
                    </Button>
                    <Button color='$orange' onClick={handleClick}>
                        I know it all
                    </Button>
                </div>
                <div>
                    <BigButton color='$red' onClick={handleClick}>
                        START
                    </BigButton>
                </div>

            </div>
        </>
    );
};

export default Home;
