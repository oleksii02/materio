import React from 'react';
import './Name.css'

function Name({name}) {
    return (
        <div className={'Name'} >
            <div className={'Name__Group'}>
                <div className={'Name__Img'}><img src={name.logo}/></div>
                <div className={'Name__Text'}>
                    <p className={'one'}>{name.name}</p>
                    <p className={'two'}>{name.date}</p>
                </div>

            </div>


        </div>
    );
}

export default Name;
