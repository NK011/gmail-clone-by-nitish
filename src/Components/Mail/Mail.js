import { IconButton } from '@material-ui/core'
import { ArrowBack, CheckCircle, Delete, Email, Error, ExitToApp, LabelImportant, MoreVert, MoveToInbox, Print, UnfoldMore, WatchLater } from '@material-ui/icons'
import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selectOpenMail, selectsendMailIsOpen } from '../../Redux Store/features/mailSlice'
import './Mail.css'

function Mail( ) {

    const history = useHistory()
    const selectedMail = useSelector(selectOpenMail)

    return (
        <div className="mail">
           <div className="mail__settings">
                <div className="mail__settingsLeft">
                    <IconButton onClick={ () => history.push('/')}>
                        <ArrowBack />
                    </IconButton>
                    <IconButton>
                        <MoveToInbox />
                    </IconButton>
                    <IconButton>
                        <Error />
                    </IconButton>
                    <IconButton>
                        <Delete />
                    </IconButton>
                    <IconButton>
                        <Email />
                    </IconButton>
                    <IconButton>
                        <WatchLater />
                    </IconButton>
                    <IconButton>
                        <CheckCircle />
                    </IconButton>
                    <IconButton>
                        <LabelImportant />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
                <div className="mail__settingsRight">
                    <IconButton>
                        <UnfoldMore />
                    </IconButton>
                    <IconButton>
                        <Print />
                    </IconButton>
                    <IconButton>
                        <ExitToApp />
                    </IconButton>
                </div>    
           </div>
           <div className="mail__body" >
                <div className="mail__bodyHeader">
                    <h3> {selectedMail?.subject} </h3>
                    <LabelImportant className="label"/>
                    <span> {selectedMail?.title} </span>
                    <p>{selectedMail?.time}</p>
                </div>
                <div className="mail__message">
                    <p> {selectedMail?.des} </p>
                </div>
           </div>
        </div>
    )
}

export default Mail
