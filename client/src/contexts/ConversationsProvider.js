import React, {useContext,useState} from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { useContacts } from './ContactsProvider'

const ConversationsContext=React.createContext()

export function useConversations(){
    return useContext(ConversationsContext)
}

export  function ConversationsProvider({id,children}) {
    const[conversations,setConversations]=useLocalStorage('conversations',[])
    const[selectConversationIndex,setSelectConversationIndex]=useState(0) 
    const {contacts}=useContacts()

    function createConversation(recipients){
        setConversations(prevConversations=>{
            return[...prevConversations,{recipients, messages:[]}]
        })

    }

    function addMessageToConversation({recipients,text,sender}){

    }
    function sendMessage(recipients,text){
        addMessageToConversation({recipients,text,sender:id})
    }
    const formattedConversations=conversations.map((conversation,index)=>{
        const recipients=conversation.recipients.map(recipient=>{
            const contact=contacts.find(contact =>{
                return contact.id===recipient
            })
            const name= (contact && contact.name) || recipient
            return {id:recipient,name}
        })
        const selected=index===selectConversationIndex
        return {...conversation,recipients,selected}
    })

    const value={
        conversations:formattedConversations,
        selectedConversation:formattedConversations[selectConversationIndex],
        selectConversationIndex:setSelectConversationIndex,
        sendMessage,
        createConversation

    }
    return (
        <ConversationsContext.Provider value={value}>
            {children}
        </ConversationsContext.Provider>
    )
}

