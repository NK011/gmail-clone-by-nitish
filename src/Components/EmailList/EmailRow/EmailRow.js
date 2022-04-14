import { Checkbox } from '@material-ui/core'
import {LabelImportant, StarBorderOutlined} from '@material-ui/icons'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selectMail } from '../../../Redux Store/features/mailSlice'
import './EmailRow.css'

function EmailRow( {title, subject, des, time, id} ) {

    const history = useHistory()
    const dispatch = useDispatch()

    const openThis = () => {
        dispatch(selectMail({
            title,
            subject,
            des,
            time
        }))

        history.push('/mail')
    }

    return (
        <div onClick={openThis} className="email">
           <div className="email__options">
               <Checkbox />
               <StarBorderOutlined />
               <LabelImportant />
           </div>
           <div className="email__info">
                <h4> {title} </h4>
                <div className="email__message">
                    <h5>{subject}{" - "}</h5>
                    <span> {des} </span>
                </div>
           </div>
           <div className="email__time">
               {time}
           </div>
        </div>
    )
}

export default EmailRow
