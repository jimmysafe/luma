import React, { useRef, useState } from 'react'
import axios from 'axios'

const ContactForm = () => {

    const [isSending, setIsSending] = useState(false)
    const [resMessage, setResMessage] = useState("")

    const nameRef = useRef("")
    const emailRef = useRef("")
    const messageRef = useRef("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSending(true)

        const { value: name } = nameRef.current
        const { value: email } = emailRef.current
        const { value: message } = messageRef.current

        const { data } = await axios.post('/api/mail', { name, email, message })
        setIsSending(false)
        
        setResMessage(data.message)

        if(data.success){
            nameRef.current.value = ""
            emailRef.current.value = ""
            messageRef.current.value = ""
        }
    }

    return (
        <div className="container mx-auto py-10 ">
            <form onSubmit={handleSubmit} className="shadow-md rounded bg-primary p-10 flex flex-col justify-center items-center">
                <input type="text" ref={nameRef} placeholder="Nome" required className="w-full mb-3 h-10 pl-2"/>
                <input type="email" ref={emailRef} placeholder="Email" required className="w-full mb-3 h-10 pl-2"/>
                <textarea ref={messageRef} placeholder="Messaggio" required className="w-full mb-3 h-40 pl-2"/>
                {resMessage &&
                    <p>{resMessage}</p>
                }
                <button 
                    className="bg-secondary font-bold uppercase text-white px-10 py-2 rounded-full mt-3" 
                    disabled={isSending}
                >
                        {isSending ? 'Inviando..' : 'Invia'}
                </button>
            </form>
        </div>
    )
}

export default ContactForm
