import * as esbuild from 'esbuild-wasm'
import { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { unpkgPathPlugin } from './plugins/unpkg-path-plugin'


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

        const result = await ref.current.build({
            entryPoints: ['index.js'],
            bundle: true,
            write: false,
            plugins: [unpkgPathPlugin()]
        })

        console.log(result)

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