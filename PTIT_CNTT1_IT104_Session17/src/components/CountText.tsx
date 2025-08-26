import React, {useState, useEffect} from 'react'

export default function CountText() {
    const [text, setText] = useState('');
    const [character, setCharacter] = useState(0);
    const [gap, setGap] = useState(0);

    useEffect(() => {
        setCharacter(text.length);
        let gapCount = 0;
        for (let i=0; i<text.length; i++){
            if(text[i] === ' ' && (i===0 || text[i-1] !== ' ')){
                gapCount++;
            }
        }
        setGap(gapCount);
    }, [text]);
    const handleChange = (event) => {
        setText(event.target.value);
    }
  return (
    <div style={{marginTop:"20px", backgroundColor:"skyblue", padding:"20px"}}>
      <div>
        <textarea value={text} onChange={handleChange }/>
      </div>
      <p>Số kí tự: {character}</p>
      <p>Số khoảng cách: {gap}</p>
    </div>
  )
}
