import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as esbuild from 'esbuild-wasm'


const App = () =>
{
    const [input, setInput] = useState<string>('')
    const [code, setCode] = useState<string>('')
    const ref = useRef<any>()

    const startService = async () =>
    {
        ref.current = await esbuild.startService({
            worker: true,
            wasmURL: '/esbuild.wasm'
        })
    }

    useEffect(() =>
    {
        startService()
    }, [])


    const onClick = async () =>
    {
        if (!ref.current)
        {
            return
        }

        const result = await ref.current.transform(input, {
            loader: 'jsx',
            target: 'es2015'
        })

        setCode(result.code)
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