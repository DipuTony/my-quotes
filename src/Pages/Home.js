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
    const [textColor, setTextColor] = useState('#AAAAAS')
    const [text, setText] = useState("Write your text here")
    const [author, setAuthor] = useState("Author")
    const [image, setImage] = useState()


    // const fetchAPI = async () => {
    //     const response = await axios.get('https://api.unsplash.com/photos/?client_id=4b5485304f94ad4050fd98ce05724df58cb2b991354e592af94cdf333dafa3d6')
    //     console.log(response)

    // }

    const handleChanageBg = () => {
        let rcolcor = Math.floor(100000 + Math.random() * 900000);
        setColor(`#${rcolcor}`)
    }
    const handleTextColor = () => {
        let rcolcor = Math.floor(100000 + Math.random() * 900000);
        setTextColor(`#${rcolcor}`)
    }

    const handleDownload = () => {
        html2canvas(document.getElementById("dipu"))
            .then(function (canvas) {
                // document.body.appendChild(canvas);
                let a = document.createElement("a");
                a.download = "mypic" + Math.floor(Math.random() * 20000) + ".png";
                a.href = canvas.toDataURL();
                a.click()
            });
    }

    // const handleImageBg = () => {
    //     fetchAPI()
    //     let img = { uri: 'https://source.unsplash.com/random/300*300/?motivation' }
    //     setImage(img)
    //     console.log(img)
    // }

    return (
        <>
            <div className='bg-gray-300 h-screen md:p-10 p-5'>
                <div id="dipu" style={{ backgroundColor: color }} className='h-52 md:w-1/3 w-full m-auto rounded-sm'>
                    <p className='text-4xl p-5' style={{ color: textColor }}>{text}</p>
                    <p className='text-right mr-10 font-semibold' style={{ color: textColor }}>- {author}</p>
                </div>
                {/* <img src={image} className='h-32' alt="" /> */}
                <div>
                    <div className='flex justify-center mt-2'>
                        <button className='border border-black font-semibold px-5 py-2 mx-2 my-1 bg-green-500 hover:bg-green-600 rounded-md shadow-2xl' onClick={handleChanageBg}>Change Color</button>
                        <button className='border px-5 py-2 mx-2 my-1 bg-indigo-400 rounded-md shadow-2xl' onClick={handleTextColor}>Text Color</button>
                    </div>
                    <div className='flex justify-center'>
                        <div className='my-2 mx-5 '>
                            <p className='ml-3 font-semibold'>Enter Your Quotes Here</p>
                            <textarea rows={3} className='px-2 mx-2 my-1 border w-72' type="text" onChange={(e) => setText(e.target.value)} />
                            <p className='ml-3 font-semibold'>Enter Author Name</p>
                            <input className='px-2 mx-2 my-1 border h-8 w-72' type="text" onChange={(e) => setAuthor(e.target.value)} />
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button className='border md:w-72 w-full py-3 mx-8 my-1 text-2xl font-semibold bg-green-600' onClick={handleDownload}>Download</button>
                    </div>
                    {/* <button onClick={() => setImage('https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80')}>CLick</button> */}

                </div>

            </div>
        </>
    )
}

export default Home