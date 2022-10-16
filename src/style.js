import styled from "styled-components"

const Title = styled.h1`
  font-size: 20px;
  text-align: center;
  color: black;
`;

const Wrapper = styled.section`
  padding: 10px;
  margin-top: -16px;
  margin-bottom:-12px;
  background: greenyellow
`;

const ImgContainer = styled.div`
width:100%;
height:auto;

&:hover{
  display:flex;
  text-align:center;
  width:115%;
  margin-top:195%;
  margin-left:-30px
}
&:hover img{
  // height:30px;
  transform:scale(2.6);
  overflow:hidden;
},
img {
  transition: all 2s ease;
  width:100%;
  height:100%;
  object-fit:cover;

}


`


export { Title, Wrapper, ImgContainer }