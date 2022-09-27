////////////////////////////////////////
// Author - Dipu Singh
// Date - 28-09-2022 
// Time - 02:10 AM
// Update on -
////////////////////////////////////////
import React, { useState } from 'react'
import html2canvas from 'html2canvas';

function Home() {
    const [color, setColor] = useState('#238057')
    const [text, setText] = useState("Write your text here")
    const [author, setAuthor] = useState("Author")

    const handleChanageBg = () => {
        let rcolcor = Math.floor(100000 + Math.random() * 900000);
        setColor(`#${rcolcor}`)
    }

    const handleDownload = () => {
        html2canvas(document.getElementById("dipu")).then(function (canvas) {
            // document.body.appendChild(canvas);
            let a = document.createElement("a");
            a.download = "mypic" + Math.floor(Math.random() * 20000) + ".png";
            a.href = canvas.toDataURL();
            a.click()
        });
    }

    return (
        <>
            <div className='bg-gray-300 h-screen p-10'>
                <div id="dipu" style={{ backgroundColor: color }} className='h-52 w-1/3 m-auto'>
                    <p className='text-4xl p-5'>{text}</p>
                    <p className='text-right mr-10 font-semibold'>- {author}</p>
                </div>
                <p>{color} h-52 w-1/3 m-auto</p>
                <div>
                    <input className='mx-3 border' type="text" onChange={(e) => setText(e.target.value)} />
                    <input className='mx-2 border' type="text" onChange={(e) => setAuthor(e.target.value)} />
                    <button className='border px-2 my-1' onClick={handleChanageBg}>Change BG</button>
                    <button className='border px-2 my-1' onClick={handleChanageBg}>Change Image</button>
                    <button className='border px-2 my-1' onClick={handleDownload}>Download</button>

                </div>

            </div>
        </>
    )
}

export default Home