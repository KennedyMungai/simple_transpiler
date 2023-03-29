import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const App = () =>
{
    const [input, setInput] = useState<string>('')
    const [code, setCode] = useState<string>('')

    return (
        <div>
            <textarea>

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