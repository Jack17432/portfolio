import * as React from 'react';
import '../styles/landingPage.css';
import isoComputer from '../images/isoComputer.png';

export default function LandingPage(props) {
    return (
        <div class="container">
            <div class="nameArea">
                <h1><b>Chris</b><br/>Graham</h1>
                <br>
                <p>
                    <a class="semiBoldLink" href="https://github.com/jack17432">Software</a>/<a class="semiBoldLink" href="https://github.com/jack17432">Firmware</a>/<br/>
                    <a class="semiBoldLink" href="https://github.com/jack17432">Artifical Intelligence</a>
                </p>
            </div>
            <img class="landingImage" src={isoComputer} alt="computer"/>
        </div>
    )
}
