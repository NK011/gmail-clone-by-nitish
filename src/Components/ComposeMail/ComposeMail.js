import { Button, IconButton } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import React from 'react'
import './ComposeMail.css'
import { useDispatch } from 'react-redux'
import { closeMail } from '../../Redux Store/features/mailSlice'
import { useForm } from 'react-hook-form'
import { db } from '../../firebase'
import firebase from 'firebase'

function ComposeMail() {

    const { register, handleSubmit, watch, errors } = useForm();

    const dispatch = useDispatch()

    const onsubmit = (data) => {
        console.log(data)
        db.collection("mail").add(
            {
                to: data.to,
                subject: data.subject,
                message: data.message,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            }
        )

        dispatch(closeMail())
    }

    return (
        <div className="composeMail">
            <div className="composeMail__header">
               <p>Create Mail</p>
               <IconButton>
                <Close onClick={ () => dispatch( closeMail() ) } className="Close"/>
                </IconButton> 
            </div>
            <form onSubmit={handleSubmit(onsubmit)} className="composeMail__body">

                <input
                 name="to" 
                 placeholder="To:" 
                 type="email" 
                 ref={register({required: true})} 
                 /> 
                 {errors.to && <p className="warning">To is required</p>}

                <input
                 name="subject" 
                 placeholder="Subject:" 
                 type="text" 
                 ref={register({required: true})} 
                 /> 
                 {errors.subject && <p className="warning"> Subject is required</p>}

                <input
                 name="message"
                 placeholder="Message" 
                 type="text" 
                 className="message" 
                 ref={register({required: true})} 
                 /> 
                 {errors.message && <p className="warning" >Message is required</p>}

                <Button className="composeMail__footer" type="submit">
                    Submit
                </Button>
            </form>
                
        </div>
    )
}

export default ComposeMail
