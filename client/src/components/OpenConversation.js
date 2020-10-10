import React, { useState } from 'react'
import {Button, Form, FormGroup, InputGroup} from 'react-bootstrap' 
import { useConversations } from '../contexts/ConversationsProvider'

export default function OpenConversation() {
    const [text,setText]=useState('')
    const {sendMessage,selectedConversation}=useConversations()
    function handleSubmit(e){
        e.preventDefault()
        sendMessage(selectedConversation.recipients.map(r=>r.id),text)
        setText('')
    }
    return (
        <div class="d-flex flex-column flex-grow-1">
            <div className="flex-grow-1 overflow-auto">

            </div>
            <Form onSubmit={handleSubmit}>
                <FormGroup className="m-2">
                    <InputGroup>
                        <Form.Control as="textarea" 
                        required value={text}
                        onChange={e=>setText(e.target.value)}
                        style={{height:"75px" , resize :"none"}}/>
                        <InputGroup.Append>
                            <Button type="submit">Send</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </FormGroup>
            </Form>
        </div>
    )
}
