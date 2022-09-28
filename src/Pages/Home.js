////////////////////////////////////////
// Author - Dipu Singh
// Date - 28-09-2022 
// Time - 02:10 AM
// Update on -
////////////////////////////////////////
import React, { useState } from 'react'
import html2canvas from 'html2canvas';
import axios from 'axios';

function Home() {
    const [color, setColor] = useState('#238057')
    const [text, setText] = useState("Write your text here")
    const [author, setAuthor] = useState("Author")
    const [image, setImage] = useState()


    const fetchAPI =async()=>{
        const response = await axios.get('https://api.unsplash.com/photos/?client_id=4b5485304f94ad4050fd98ce05724df58cb2b991354e592af94cdf333dafa3d6')
   console.log(response)
   
    }

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

    const handleImageBg =()=>{
        fetchAPI()
        let img = {uri : 'https://source.unsplash.com/random/300*300/?motivation'}
        setImage(img)
        console.log(img)
    }

    return (
        <>
            <div className='bg-gray-300 h-screen p-10'>
                <div id="dipu" style={{ backgroundColor: color }} className='h-52 w-1/3 m-auto'>
                    <p className='text-4xl p-5'>{text}</p>
                    <p className='text-right mr-10 font-semibold'>- {author}</p>
                </div>
                <div>
                    <img src={image} className='h-32' alt="" />
                </div>
                <div>
                    <input className='mx-3 border' type="text" onChange={(e) => setText(e.target.value)} />
                    <input className='mx-2 border' type="text" onChange={(e) => setAuthor(e.target.value)} />
                    <button className='border px-2 my-1' onClick={handleChanageBg}>Change BG</button>
                    <button className='border px-2 my-1' onClick={handleImageBg}>Change Image</button>
                    <button className='border px-2 my-1' onClick={handleDownload}>Download</button>
                    <button onClick = {() => setImage('https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80')}>CLick</button>

                </div>

            </div>
        </>
    )
}

export default Home