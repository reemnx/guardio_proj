import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'

function BreachDetails(props) {
    let breach = useSelector(state => state.breach.currBreach)
    const [currBreach, setCurrBreach] = useState(null)
    const [keyValueArr, setKeyValueArr] = useState(null)

    useEffect(() => {
        if (breach) {
            setCurrBreach(breach)
        }
        else {
            let breachInLocalStorage = JSON.parse(localStorage.getItem('currBreach'))
            setCurrBreach(breachInLocalStorage)
        }

    }, [])

    useEffect(() => {
    }, [keyValueArr])

    function createMarkup() {
        return {
            __html: currBreach.Description
        }
    }

    if (!currBreach) return 'Loading Stats...'
    return (
        <div className="breach-details-container flex column align-center">
            <div className="flex align-center">
                <h4 style={{ marginBottom: "0px", marginRight: " 20px" }}>Details for breach: <span style={{ color: "#04bdda" }}>{currBreach.Name}</span></h4>
                <button className="backBtn" onClick={() => props.history.goBack()}>Back to List</button>
            </div>
            <div className="breach-data-container flex align-center space-between">

                <div className="brech-item">
                    <h5>Name: <span className="content">{currBreach.Name}</span> </h5>
                </div>

                <div className="brech-item">
                    <h5>Title: <span className="content">{currBreach.Title}</span> </h5>
                </div>

                <div className="brech-item">
                    <h5>AddedDate: <span className="content">{currBreach.AddedDate}</span></h5>
                </div>

                <div className="brech-item">
                    <h5>BreachDate: <span className="content">{currBreach.BreachDate}</span></h5>
                </div>

                <div className="brech-item">
                    <h5>DataClasses: <span className="content">{currBreach.DataClasses[0], currBreach.DataClasses[1]}</span></h5>
                </div>

                <div className="brech-item">
                    <h5>Domain: <span className="content">{currBreach.Domain}</span></h5>
                </div>

                <div className="brech-item">
                    <h5>IsFabricated: <span className="content">{currBreach.IsFabricated ? 'Yes' : 'No'}</span></h5>
                </div>

                <div className="brech-item">
                    <h5>IsRetired: <span className="content">{currBreach.IsRetired ? 'Yes' : 'No'}</span></h5>
                </div>

                <div className="brech-item">
                    <h5>IsSensitive: <span className="content">{currBreach.IsSensitive ? 'Yes' : 'No'}</span></h5>
                </div>

                <div className="brech-item">
                    <h5>IsSpamList: <span className="content">{currBreach.IsSpamList ? 'Yes' : 'No'}</span></h5>
                </div>

                <div className="brech-item">
                    <h5>IsVerified: <span className="content">{currBreach.IsVerified ? 'Yes' : 'No'}</span></h5>
                </div>

                <div className="brech-item">
                    <h5>LogoPath: <span className="content pointer" onClick={() => window.open(`${currBreach.LogoPath}`)}>Show Logo</span> </h5>
                </div>

                <div className="brech-item">
                    <h5>ModifiedDate: <span className="content">{currBreach.ModifiedDate}</span> </h5>
                </div>

                <div className="brech-item" style={{ marginRight: "auto" }}>
                    <h5>PwnCount: <span className="content">{currBreach.PwnCount}</span> </h5>
                </div>

            </div>
            <div className="desc-container flex column text-center">
                <div style={{ marginBottom: "15px" }} className="desc-header flex align-center">
                    <img style={{ width: "30px", marginRight: "15px" }} src={currBreach.LogoPath} />
                    <h4 style={{ marginBottom: "0px" }}>{currBreach.Name}</h4>
                </div>
                <p style={{ marginBottom: "10px", color: "#04bdda" }}>More to know:</p>
                <div dangerouslySetInnerHTML={createMarkup()} />
            </div>
        </div>
    )
}

export default BreachDetails
