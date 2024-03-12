import React from 'react'

export default function TimeChallenge({ title, targetTime }) {
    const [timeStarted, setTimeStarted] = React.useState(false); // 初始状态为未开始
    const [timeOver, setTimeOver] = React.useState(false);
    const timer=React.useRef()
    const handleStart = () => {
       
        timer.current=setTimeout(() => {
            setTimeOver(true)
            setTimeStarted(false)
        },targetTime*1000)
        setTimeStarted(true)
    }
    const handleStop=()=>{
        clearTimeout(timer.current)
    }
    return (
        <section className='challenge'>
            <h2>{title}</h2>
            {timeOver&&<p>You Lose!!!</p>}
            <p className='challenge-time'>
                {targetTime} seconds{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timeStarted?handleStop:handleStart}>
                   {timeStarted?'stop':'start'} challenge
                </button>
            </p>
            <p className={timeStarted?'active':''}>
                {timeStarted?'Time running...':'Time over!!!'}
            </p>
        </section>
    )
}
