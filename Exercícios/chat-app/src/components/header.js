export default function Header({signUserOut, isAuth}) {

    return (

        <header>

            <h1>Omega Chat</h1>

            {isAuth && <button className='signout' onClick={signUserOut}>Sign-Out</button>}

        </header>

    )

}