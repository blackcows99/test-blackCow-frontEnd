import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from "styled-components";
import { Input, CustomButton, MyContainer } from '../elements';
import { deleteCommentFB } from '../redux/modules/comment';
const TabContent = ({ data,onClick,content,setContent,auth }) => {
    const [fade, setFade] = useState('');
    const [tab, setTab] = useState(false);
    const dispatch = useDispatch();
    
    React.useEffect(() => {
        const a = setTimeout(() => { setFade('end') }, 10)
        return () => { setFade(''); clearTimeout(a) }
    }, [tab])
    const clickTab = () => {
        setTab(!tab);
    }
    // console.log(data)
    

    const deleteComment = (id) => {
        dispatch(deleteCommentFB(id))
    }

    return (
        <div className={`start ${fade}`}>
            <Span onClick={clickTab}>댓글</Span>
            <Line />
            {tab ?
                <>
                    <Input
                        placeholder="댓글을 입력하세요."
                        width="60%"
                        _onChange={setContent}
                        value={content}
                    />
                    <CustomButton _onClick={ onClick } width="15%">등록</CustomButton>

                    {data?.map((d, i) => {
                        return (
                        // <div
                        //     key={i}
                        //     style={{
                        //         display: "flex",
                        //         textAlign: "center",
                        //         alignItems:"center",
                        //         border:"1px solid black",
                        //         padding:"5px"
                        //     }}>
                        <MyContainer key={i} is_flex padding="10px" >
                            <span>{d.member}</span>
                            <div style={{width:"50%",wordBreak:"break-all"}} >{d.comment}</div>
                            <div>
                                {d.deleteable ?
                                <CustomButton 
                                _onClick={()=>{deleteComment(d.id)}} 
                                width="7vw" padding="0"
                                >
                                    삭제</CustomButton>
                                : null}  
                            </div>
                        </MyContainer>
                        // </div>)

                    )})}

                </>
                : null}
        </div>
    )
}

const Span = styled.div`
    display: inline-block;
    padding : 8px 15px;
    border:1px solid rgba(108,117,125,0.3);
    border-bottom : none;
    border-radius: 5px 5px 0 5px;
    cursor : pointer ;
    &:hover {
        background-color : rgba(0,0,0,0.7);
        color : white;
    }
`;

const Line = styled.div`
    border-bottom : 1px solid rgba(108,117,125,0.3);
`;

export default TabContent;