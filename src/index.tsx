import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'


const App = () =>
{
    const [input, setInput] = useState<string>('')
    const [code, setCode] = useState<string>('')

    return (
        <div>
            <textarea
                onChange={e => setInput(e.target.value)}
            >

            </textarea>
            <div className="">
                <button>
                    Submit
                </button>
            </div>
            <pre>
                {code}
            </pre>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))