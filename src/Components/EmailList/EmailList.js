import { Checkbox, IconButton } from '@material-ui/core'
import { ArrowDropDown, ChevronLeft, ChevronRight, KeyboardHide, LocalOffer, MoreVert, MoveToInbox, People, Redo, Settings } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
import './EmailList.css'
import EmailRow from './EmailRow/EmailRow'
import SectionOptions from './SectionOptions/SectionOptions'

function EmailList() {

    const [emails, setEmails] = useState([])

    useEffect(() => {
        const unsubscribe = db.collection("mail").orderBy("timestamp", "desc").onSnapshot( snapshot => (
            setEmails(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            }
         )))
        ) )
        return unsubscribe
    }, [])
    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">                    
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDown />
                    </IconButton>
                    <IconButton>
                        <Redo />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
                <div className="emailList__settingsRight">
                    <IconButton>
                        <ChevronLeft />
                    </IconButton>
                    <IconButton>
                        <ChevronRight />
                    </IconButton>
                    <IconButton>
                        <KeyboardHide />
                    </IconButton>
                    <IconButton>
                        <Settings />
                    </IconButton>
                </div>
            </div>
            <div className="emailList__section">
                <SectionOptions Icon={MoveToInbox} title={"Primary"} />
                <SectionOptions Icon={People} title={"Social"} />
                <SectionOptions Icon={LocalOffer} title={"Promotion"} />
            </div>
            <div className="emailList__row">

                {
                    emails.map(({id, data:{to, subject, message, timestamp }})=>(
                        <EmailRow 
                            key={id}
                            title={to}
                            subject={subject}
                            des={message}
                            time={new Date( timestamp?.seconds * 1000).toUTCString() }
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default EmailList
