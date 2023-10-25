// 컴포넌트 합성 : 여러개의 컴포넌트를 조합하여 하나의 컴포넌트를 만드는 것
import cityImg from"./images/city.jpg";

function Heading(props){
    return <h1>{props.text}</h1>
}
function Paragraph(props){
    return <p>{props.text}</p>

}
function ImgUrl(props){
    return <img style={{height:"300px"}} src={cityImg} alt="이미지 테스트" />
    
};

const Section = (props) => {
    return(
        <>
            {/* 호출 */}
            <Heading text={props.title}/>
            <Paragraph text={props.content}/>
            <ImgUrl url={props.url}/>    
        </>
    )
}
// 이미지 삽입도 포함
export default Section;