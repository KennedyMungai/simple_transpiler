import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as esbuild from 'esbuild-wasm'


const App = () =>
{
    const [input, setInput] = useState<string>('')
    const [code, setCode] = useState<string>('')

    const startService = async () =>
    {
        const service = await esbuild.startService({
            worker: true,
            wasmURL: '../public/esbuild.wasm'
        })

        console.log(service)
    }

    useEffect(() =>
    {
        startService()
    }, [])


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
            {
                code &&
                <pre>
                    {code}
                </pre>
            }
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))