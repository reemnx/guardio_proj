
export function setCurrBreach(breach) {
    let breachToSet ;

    // console.log(JSON.parse(localStorage.getItem('currBreach')));
    
    // if(JSON.parse(localStorage.getItem('currBreach')).Name === breach.Name)

    localStorage.setItem('currBreach' , JSON.stringify(breach))
    return dispatch => {
        return dispatch({ type: 'SET_BREACH', breach })
    }
}



