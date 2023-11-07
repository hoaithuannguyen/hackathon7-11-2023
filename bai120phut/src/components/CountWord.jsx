import React, { useState } from 'react'

function CountWord() {
    const [text, setText] = useState('');
    const [count, setCount] = useState(0);
    const [wordCount, setWordCount] = useState(0);
    const [paragraphCount, setParagraphCount] = useState(0);

    const handleTextChange = (e) => {
        const newText = e.target.value;
        const textNoSpace = newText.replace(/\s/g, '').length;
        const wordCount = newText.trim().split(/\s+/).filter(Boolean).length;
        const paragraphCount = newText.split('\n').filter(Boolean).length;

        setText(newText);
        setCount(textNoSpace);
        setWordCount(wordCount);
        setParagraphCount(paragraphCount);
    };

    const upperCase = () => {
        setText(text.toUpperCase());
    };

    const lowerCase = () => {
        setText(text.toLowerCase());
    };

    return (
        <div>
            <p>Latter: {count}</p>
            <p>Word: {wordCount}</p>
            <p>Para: {paragraphCount}</p>

            <textarea
                placeholder='Enter Your Text'
                value={text}
                onChange={handleTextChange}
                rows="4"
                cols="50"
            />
            <br />
            <button onClick={upperCase}>Uppercase</button>
            <button onClick={lowerCase}>Lowercase</button>
        </div>
    );
}

export default CountWord;
