import { useState } from "react";
import styled from "styled-components";
import { BsStarFill } from 'react-icons/bs';
const Score = ({score, _onClick}) => {
    const [hovered, setHovered] = useState(null);
    const [clicked, setClicked] = useState(null);
    
    return (
        <ReviewBox>
            <StarContainer>
                
                {[1, 2, 3, 4, 5].map(el => (
                    
                    <BsStarFill style={{
                        fontSize: "40px",
                        color: ((clicked >= el) | (hovered >= el)) ? 'yellow' : '#dfdfdf'
                    }}
                        key={el}
                        onMouseEnter={() => setHovered(el)}
                        onMouseLeave={() => setHovered(null)}
                        onClick={() => {
                            setClicked(el); 
                            _onClick(el)
                        }}
                    />
                ))}
            </StarContainer>
        </ReviewBox>
    );
};



const ReviewBox = styled.div`
    font-size: 20px;
    padding: 10px 0;
    position: relative;
    margin-bottom: 5px;
`;

const StarContainer = styled.div`
    text-align: left;
    border: none;
    & > * {
        margin : 5px 0 0 5px;
    }
`;



export default Score;