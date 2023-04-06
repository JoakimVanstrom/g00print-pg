import HandShake from '../../assets/handshake.jpg'



const HomeView = () => {


    const isLoggedIn = window.localStorage.getItem('isLoggedIn')



    return(
        <>
        {isLoggedIn === 'true' ? <h1>logged in</h1> : <h1>Not Logged In</h1>}
            <h1>Home</h1>
            <img src={HandShake} alt="handshake" />
        </>
    )

}

export default HomeView