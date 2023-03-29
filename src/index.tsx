import React from 'react'
import ReactDOM from 'react-dom'


const App = () =>
{
    return (
        <div>
            <textarea>

            </textarea>
            <div className="">
                <button>
                    Submit
                </button>
            </div>
            <pre></pre>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))