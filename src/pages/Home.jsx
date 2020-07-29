import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import { setCurrBreach } from '../store/actions/breachActions'
import axios from 'axios';
import galaxy from '../images/galaxy2.jpg'
import rainbow from '../images/rainbow.jpg'

function Home(props) {
    const [breaches, setBreaches] = useState([])
    const [hoveredDiv, setHoveredDivIdx] = useState(null)
    const [currPage, setCurrPage] = useState(0)
    const [theme , setTheme] = 
    useState(localStorage.getItem('preferedTheme')? localStorage.getItem('preferedTheme') : 'dark')
    const dispatch = useDispatch()

    useEffect(() => {

        async function fetchBreaches() {
            try {
                const breaches = await axios.get(`https://guard.io/v2/hiring/fe/breaches?offset=${currPage*10}`,
                    {
                        headers: {
                            'X-Best-Pokemon': 'pikachu'
                        }
                    })
                let breachesToReturn = breaches.data.items
                setBreaches(breachesToReturn)
            } catch (err) {
                console.log(err);
            }
        }
        fetchBreaches()

    }, [currPage])

    
    useEffect(() => {
        localStorage.setItem('preferedTheme' , theme)
    }, [theme])


    function onHover(idx) {
        setHoveredDivIdx(idx)
    }

    function onLeave() {
        setHoveredDivIdx(null)
    }

    function onPagination(diff) {
        if(currPage === 46 && diff === 1) return
        if (!currPage && diff === (-1)) return
        setCurrPage(currPage => currPage + (diff))
    }

    function onBreach(currBreach){
        dispatch(setCurrBreach(currBreach))
        props.history.push('/breach-details')
    }

    function onToggleTheme(){
        theme === 'dark'? setTheme('light') : setTheme('dark')
        
    }

    return (
            <main className="home-container text-center container">
                <h4>Breaches List</h4>
                <span className="toggle-container flex align-center" onClick={onToggleTheme}>
                    <span style={{
                        marginLeft:`${theme === 'light'? 'auto' : ''}`,
                        backgroundColor: `${theme === 'light'? '#04bdda' : ''}`
                        }} className="toggle-btn"></span>
                </span>
                <div className="breaches-container flex column align-center" 
                style={{backgroundImage:`${(theme === 'dark')? `url(${galaxy})` : `url(${rainbow})` }`}}>

                    {breaches.map((breach, idx) => {
                        return <div className={`breach-item flex align-center ${theme === 'light'? 'light' : ''}`}
                        
                            key={idx} onMouseEnter={() => onHover(idx)} onMouseLeave={onLeave} onClick={() => onBreach(breach)}>
                            <img style={{ width: "30px" }} className="breach-logo" src={breach.LogoPath} />
                            <h5>{breach.Title}</h5>
                            <p>{breach.BreachDate}</p>
                            {(hoveredDiv === idx) && <span style={{marginLeft:"auto"}} className={`spin-entrance ${theme === 'dark'? 'right-arrow' : 'right-arrow-black'}`}/>}
                        </div>
                    })}
                    <div className="breach-item flex align-center space-between">
                        <h3 className="fs18" style={{ marginBottom: "0px", letterSpacing: "1px" }}>Current Page </h3>
                        <div className="flex align-center">
                            {currPage > 0 && <span style={{ transform: "rotate(180deg)" }} className="pagination-next" onClick={() => onPagination(-1)} />}
                            <h3 className="fs18" style={{ color: "#04bdda", margin: " 0px 5px" }}>{currPage}</h3>
                            <span className="pagination-next" onClick={() => onPagination(+1)} />
                        </div>
                    </div>
                </div>

            </main>
    )
}

export default Home
