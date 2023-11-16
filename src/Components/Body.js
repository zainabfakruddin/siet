import React, { useState } from 'react'
import Image from '../Image/download.jpeg'
import ReactPlayer from 'react-player'

    
    const Body = (props) => {
        const [likes, setLikes] = useState(0) // likes=15
        function count() {
            setLikes(likes + 1);  //(15+1)
        }
        const [text, setText] = useState('')
        function reset() {
            setText('')
        }
    
        const [names, setNames] = useState([
            { name: 'Ruth B' },
            { name: 'Taylor Swift' },
            { name:'Lauv'}
        ])
        const [index, setIndex] = useState(0);
    
        function change() {
            const newIndex = (index + 1) % names.length;
            setIndex(newIndex);
        }
    
        return (
            <div>
                <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <img src={Image} alt="images" style={{ height: '200px', width: '200px'}}/> <br />
                    <p  style={{ fontSize: '16px',fontWeight: 'bold' }}>Plumerias are tropical trees famous for their gorgeous flowers<br></br>
                    The leaves are obovate shape and the tip of the leaf is pointed. <br></br>
                    The yellow flowers of this species are borne in clusters that form<br></br>
                    at the ends of the branches on a long thick stalk.</p>
                    <p>likes: {likes}</p>
                    
                    
                    {/* destructuring */}
                    <button onClick={count} style={{ backgroundColor: 'green', color: 'white'}}>Like</button>
                    
                </div>
                <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <label htmlFor="Name">Name : </label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                    <p>onoutput : {text}</p>
                    <button onClick={reset} style={{ backgroundColor: 'green', color: 'white'}}>Reset</button>
                </div>
                <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                     <button onClick={props.fun}> click me</button>
                </div>
                <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    {/* pass down url link in url attribuite */}
                    <ReactPlayer url={'https://www.youtube.com/watch?v=5gg17XXXiNo'} height={200} controls />
                    <div>
                        <p>Dandelions by Ruth B. </p>
                    </div>
                    <div>
                <p> {names[index].name}</p>
                <button onClick={change} style={{ backgroundColor: 'green', color: 'white'}}>Change me</button>
                    </div>
                </div>
            </div>
        )
    }
    export default Body