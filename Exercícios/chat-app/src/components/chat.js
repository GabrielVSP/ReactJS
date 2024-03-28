import { useEffect, useState } from "react"
import { addDoc, collection, serverTimestamp, onSnapshot, query, where, orderBy } from "firebase/firestore"
import { auth, db } from "../firebase"

export default function Chat({room}) {

    const [msg, setMsg] = useState('')
    const [messages, setMessages] = useState([])

    const msgRef = collection(db, 'messages')

    async function handleSubmit(e) {

        e.preventDefault()

        if (msg === '') {
            return
        }

        await addDoc(msgRef, {
            message: msg,
            createdAt: serverTimestamp(),
            user: auth.currentUser.displayName,
            room: room
        })

        setMsg('')

    }

    useEffect(() => {

        const queryMessages = query(msgRef, where('room', '==', room), orderBy('createdAt'))

        function unsuscribe() {onSnapshot(queryMessages, (snapshot) => {
            let msgs = []
            snapshot.forEach((doc) => {
                msgs.push({...doc.data(), id: doc.id})
            })

            setMessages(msgs)

        })}

        return () => unsuscribe()

    }, [])

    return (

        <section className="chatHandler">

            <h1>#{room}</h1>

            <section className="chat">

                <div className="messageHandler">

                    {messages.map((message) => 
                    
                        <div className={"message " + (message.user === auth.currentUser.displayName ? 'own' : '')} key={message.id}>
                            <p className="user">{message.user}</p>
                            <span className="text">{message.message}</span>
                        </div>
                    
                    )}

                </div>

                <form onSubmit={handleSubmit}>

                    <input type='text' id='message' value={msg} placeholder="Type your message" onChange={(e) => setMsg(e.target.value)}></input>
                    <button type="submit" id="submit">Send</button>

                </form>

            </section>

        </section>
    )

}