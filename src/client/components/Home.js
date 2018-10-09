import React from 'react';

const Home = () => {
    return (
        <div>
            <div>Home Component is here every time!</div>
            <button onClick={()=> console.log('Hi there!')}>Presss me!</button>
        </div>
    );
};

export default Home;