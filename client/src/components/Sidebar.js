import React,{useState} from 'react'
import {Tab,Nav } from 'react-bootstrap'
import Conversations from './Conversations'


const CONVERSATIONS_KEY='conversations'
const CONTACTS_KEY='contacts'

export default function Sidebar({id}) {
    const [activeKey,setActiveKey]=useState(CONVERSATIONS_KEY)
    return (
        <div style={{width:'250px'}} className='d-flex flex-column'>
            <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
                <Nav variant="tabs" className="Justify-content-center">
                    <Nav.Item>
                        <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversations</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey={CONVERSATIONS_KEY}>
                        <Conversations/>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </div>
    )
}
