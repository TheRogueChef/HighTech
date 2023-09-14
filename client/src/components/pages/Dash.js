import React from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import '../pages/style.css';
import MobileMenu from './MobileMenu';
import { Image } from 'react-bootstrap';
import DigiLeaf from '../images/JustLeaf.png';
import FourTwenty from '../images/420.jpg'; 
import PotLeaf from '../images/PotLeaf.png'; 





const Dashboard = () => {
    return (
        <div className='dashShell' >
            <div className='navBox'>
                <MobileMenu />
                <div>
                    <div className='dashLogo'>
                        <Image className='dashLeaf' src={DigiLeaf} alt='...' />
                        <div className='dLogoText' >
                            <p style={{ color: 'black' }} >High</p>
                            <p style={{ marginTop: '-90%' }}>Tech</p>
                        </div>
                    </div>
                </div>
                <br /><br />
                <div className='dashMenu'>
                    <br /><br />
                    <RouterLink className='dashItem' to='/library'>Library</RouterLink>
                    <br /><br />
                    <RouterLink className='dashItem' to='/shops'>Shops</RouterLink>
                    <br /><br />
                    <RouterLink className='dashItem' to='/reviews'>Reviews</RouterLink>
                    <br /><br />
                    <RouterLink className='dashItem' to='/events'>Events</RouterLink>
                    <br /><br />
                    <RouterLink className='dashItem' to='/docs'>Docs</RouterLink>
                    <br /><br />
                    <RouterLink className='dashItem' to='/extra'>Extra</RouterLink>
                    <br /><br /><br />
                </div >
            </div>
            <div className='dashBox'>
            <Image className='dash420' src={FourTwenty} alt='...' />
                <div className='dashBody'>
                    <h1>Welcome to High Tech! This is a site created for the lovers of marijuana in all of its beautiful forms.</h1>
                    <h2>In all my years I have learned that marijuana creates its own community anywhere it can be found. A community based in chill and always looking to talk about its favorite topic, weed. I have found there aren't any online places to just talk about weed while also having some cool opportunites, like to see whats in your area or what the newset strain is. Hopefully, this site will give us stoners a platform for community. As always be cool to each other and this could really grow into a big deal.</h2>
                    <h2>Here is your place to not only talk about weed but review it, search for it, learn about it and to just gather info. Also, this is a place to chat about the user experience. Tell us what you did and how you felt while on some great edibles or how hilarious a movie was with some high end silly weed or how the sweet vapors made your concert experience that much sweeter. </h2>
                    <h2>So, come on in. Engage with your THC vehicle of choice, kick up your feet, break out your favorite munchies and enjoy you time here. This site is for us, the users, and we do plan to bogart.</h2>
                    <Image className='potLeaf' src={PotLeaf} alt='...' />
                </div>
            </div>
        </div >
    )
}

export default Dashboard;