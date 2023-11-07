import React from 'react'
import './Resoruce.css'
import ResourceCard from './ResourceCard';
import logoImage from '../../assets/logo.png'
function Resource() {
    return (
        <div className='resource-container'>
            <div className='resource-text'>
                What do you want to learn today!
            </div>
            <div className='rcard-container'>
                <div className='card-1'>
                    <ResourceCard title="Finance" logoImage={logoImage} content="Blog about finance" />
                </div>
                <div>
                    <ResourceCard title="Enterprenuership" logoImage={logoImage} content="Blog about business" />
                </div>
            </div>
        </div>
    )
}

export default Resource;