import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'


const App = () =>
{
    const [input, setInput] = useState<string>('')
    const [code, setCode] = useState<string>('')

    const onClick = () =>
    {
        console.log(input)
    }

    return (
        <div className='transpiler-area'>
            <textarea
                value={input}
                onChange={e => setInput(e.target.value)}
            >

            </textarea>
            <div className="">
                <button
                    onClick={onClick}
                    disabled={!input}
                >
                    Submit
                </button>
            </div>
            {code && <pre>
                {code}
            </pre>}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))