import React from 'react';
import About from './About';
import Constitution from './Constituion';
import Member from './Member';
const Home = () => {
    return(
        <>
        <h1>Navber</h1>
        <div>
            <ul>
                <li>
                    <a href='About.js'><About/></a>
                </li>
                <li>
                    <a href='Constitution.js'><Constitution/></a>
                </li>
                <li>
                    <a href='Member.js'><Member/></a>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Home;