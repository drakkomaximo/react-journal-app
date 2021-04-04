import React from 'react'

const JournalEntry = () => {
    return (
        <div className='journal__entry'>
            <div 
                className='journal__entry_picture'
                style={{
                    backgroundSize:'cover',
                    backgroundImage:'url(https://d500.epimg.net/cincodias/imagenes/2018/11/13/lifestyle/1542113135_776401_1542116070_noticia_normal.jpg)'
                }}
                >

            </div>

            <div className='journal__entry-body'>
                <p className='journal__entry-title'>
                    A new day
                </p>
                <p className='journal__entry-content'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia necessitatibus illum 
                </p>
            </div>

            <div className='journal__entry-date-box'>
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}

export default JournalEntry
