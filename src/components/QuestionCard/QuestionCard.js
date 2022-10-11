import React, { useState } from 'react'
import './QuestionCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faEye } from '@fortawesome/free-solid-svg-icons'

const QuestionCard = ({ ques, index }) => {
    const [shown, setShown] = useState(false)

    const { question, correctAnswer, id, options } = ques
    return (
        <div className='question-container'>
            <div className='question-head'>
                <span>Question No. {index +1}</span>
                <FontAwesomeIcon onClick={()=> setShown(!shown)} className='see-answer' icon ={faEye} />
            </div>

            <div className='question-title' dangerouslySetInnerHTML={{ __html: question }}></div>
            
            <div className='question-options'>
                {options.map((op, index) => {
                    let ans;
                    switch(index){
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
                    return(
                    <div className='option'>
                        {`${ans}. `}
                        {op}
                    </div>
                    )})}
            </div>
            <div className={`correct-ans ${shown ? 'shown' : 'hide'}`}>
                <b>Correct Answer:</b> {correctAnswer}
            </div>
        </div>
    )
}

export default QuestionCard