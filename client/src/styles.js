import styled,{createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
.wrapper {
  display: flex;
  flex-flow: row wrap;
}
html,body {
  background-color: rgb(255, 255, 255);
  height: 100%;
}
.qa-parent {
  display: flex;
  flex: 1;
  flex-flow: row wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.qa-child{
  width: 1000px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 10px;
  color: rgb(51, 51, 51);
  background-color: rgb(247, 247, 247);
  margin: 0px;
}
.ans-btn-cont{
  display: flex;

}
.btn{
  line-height: 1.42857;
  border-radius: 5px;
  font-size: 10px;
  width: 50%;
  height: 30px;
}
.red-btn{
  color: rgb(255, 255, 255);
  background-color: rgb(204, 0, 0);
  border-color: rgb(204, 0, 0);
}
.red-btn-long {
  color: rgb(255, 255, 255);
  background-color: rgb(204, 0, 0);
  border-color: rgb(204, 0, 0);
  width: 1000px;
}
.white-btn {
  border-color: #f7f7f7;
  background-color: #ffffff;
  color: rgb(51, 51, 51);
}
.bold {
  font-weight: bold;
  color: rgb(51, 51, 51);
  font-size: 12px;
}
.ans-line2, .que-line2 {
  font-size: 9px;
  margin: 7px;
  color: rgb(102, 102, 102);
}
.ans-cont, .que-cont {
  margin: 8px;
  background-color: rgb(247, 247, 247);
}
.qa {
  text-align: center;
  font-size: 14px;
}
.ans-text, .que-text {
  background-color: rgb(247, 247, 247);
  padding-top: 10px;
}
.que-cont {
  margin-top: 16px;
  margin-bottom: 16px;
  border-top-style: solid;
  border-top-color: rgb(214, 214, 214);
  padding-top: 25px;
}
.white-btnans-btn {
  font-size: 10px;
  height: 30px;
  width: 70px;
  border-color: #f7f7f7;
  background-color: #ffffff;
  color: rgb(51, 51, 51);
}
textarea{
  width:950px;
}
.text{
  height: 100px;
}

.filterSorter {
  margin-left: 800px;
  height: 30px;
  width: 70px;
}
.marginLeft{
  margin-left: 20px;
  border-color: rgb(214, 211, 211);
  background-color: #ffffff;
  color: rgb(51, 51, 51);
  height: 25px;
  border-radius: 5px;
}
.pagination-left{
  margin-left: 350px;
}
.pagination{
  margin: 30px;

}
.pagination-cont{
  height: 30px;
}
`;

//width: 500px;