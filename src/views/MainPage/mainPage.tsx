import React, { useState, useEffect, useRef, RefObject } from 'react'

export const MainPage = () => {
    const [isYesBtnClicked, setYesBtnClick] = useState(false)
    const refNoButton = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        if(!isYesBtnClicked) {
            const { left, width } = refNoButton.current.getBoundingClientRect()
            refNoButton.current.style.left = `${left - width - 75}px`
        }
    })
    
    const moveButton = () =>  {
        if(!isYesBtnClicked) {
            const x = Math.random() * (window.innerWidth - refNoButton.current.offsetWidth - 150)
            const y = Math.random() * (window.innerHeight - refNoButton.current.offsetHeight)
            refNoButton.current.style.left = `${x}px`
            refNoButton.current.style.top = `${y}px`
        }
    }

    return <div className="container">
        {isYesBtnClicked?
            <>
            <div>
                <h1 className = "header_text">Ееееееее!!</h1>
            </div>
            <div className="gif_container">
                <img src="https://i.postimg.cc/RVFpK1WN/image.gif"/>
            </div>
            </>:
            <>
            <div>
                <h1 className="header_text">Пойдешь гулять со мной?</h1>
            </div>
            <div className="gif_container">
                <img src="https://i.postimg.cc/CKfWDG6j/first.gif"/>
            </div>
            <div className="buttons">
                <button className="btn yesButton" onClick={() => setYesBtnClick(true)}>Да</button>
                <button className="btn noButton" ref={refNoButton} onMouseOver={moveButton} onClick={moveButton}>Нет</button>
            </div>
            </>
        }
    </div>
}