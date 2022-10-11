import React, { useState } from 'react'
import './QuestionCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const QuestionCard = ({ ques, index }) => {
    const [shown, setShown] = useState(false)

    // const [color, setColor] = useState()

    const { question, correctAnswer, id, options } = ques

    const handleClickedAnswer = (id, index) => {
        const right = options[index]
        if (right === correctAnswer) {
            console.log('right')
            alert('Right Answer')
        } else {
            console.log('wrong')
            alert('Wrong Answer')
        }
        // console.log(id, index, right)
        // setColor(!color)
    }
    return (
        <div className='question-container'>
            <div className='question-head'>
                <span>Question No. {index + 1}</span>
                <FontAwesomeIcon onClick={() => setShown(!shown)} className='see-answer' icon={faEye} />
            </div>

            <div className='question-title' dangerouslySetInnerHTML={{ __html: question }}></div>

            <div className='question-options'>
                {options.map((op, index) => {
                    let ans;
                    switch (index) {
                        case 0:
                            ans = 'a';
                            break;
                        case 1:
                            ans = 'b';
                            break;
                        case 2:
                            ans = 'c';
                            break;
                        case 3:
                            ans = 'd';
                            break;
                        default:
                            ans = '';
                    }
                    return (
                        // <div onClick={()=> handleClickedAnswer(id, index)} className={`option ${color? 'clicked' : 'unclicked'}`}>
                        <div onClick={() => handleClickedAnswer(id, index)} className={`option`}>
                            {`${ans}. `}{op}
                            
                        </div>
                        
                    )
                })}
            </div>
            <ToastContainer />
            <div className={`correct-ans ${shown ? 'shown' : 'hide'}`}>
                <b>Correct Answer : &nbsp;</b> {correctAnswer}
            </div>
        </div>
    )
}

export default QuestionCard