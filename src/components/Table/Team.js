import React from 'react';
import './Team.css'


function Team({team}) {
    return (
        <div className={'Team'}>
            <div className={'Team__Group'}>
                {team.map((img) => (
                    <div className={'Team__Logo'}><img  src={img}/></div>
                ))}
            </div>

        </div>
    );
}

export default Team;
