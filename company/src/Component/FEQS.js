import React from 'react';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';




const App = ({ CardData }) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <>
            <div className="accordion-item">
                <div className="Question" onClick={() => setIsActive(!isActive)} >
                    <div>{<FiChevronDown/>} {CardData.Question}</div>
                </div>
                {isActive && <div className="Answer">{CardData.Answer}</div>}
            </div> 
        </>
    );
};

export default App;