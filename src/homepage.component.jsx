import React from 'react';
import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className="menu-item">
                <div className='content'>
                    <h3 className='title'>Hats</h3>
                    <p className='subtitle'>Shop Now</p>
                </div>
            </div>
            <div className="menu-item">
                <div className='content'>
                    <h3 className='title'>Jackets</h3>
                    <p className='subtitle'>Shop Now</p>
                </div>
            </div>
            <div className="menu-item">
                <div className='content'>
                    <h3 className='title'>Sneakers</h3>
                    <p className='subtitle'>Shop Now</p>
                </div>
            </div>
            <div className="menu-item">
                <div className='content'>
                    <h3 className='title'>Mens</h3>
                    <p className='subtitle'>Shop Now</p>
                </div>
            </div>
            <div className="menu-item">
                <div className='content'>
                    <h3 className='title'>Womens</h3>
                    <p className='subtitle'>Shop Now</p>
                </div>
            </div>
        </div>
    </div>
)

export default HomePage;