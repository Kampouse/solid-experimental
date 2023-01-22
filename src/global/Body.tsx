   import { children } from "solid-js";
   import Header from "./Header";
   import "./index.css";
const Body = (props) => {
  const appBody = children(() => props.children);
  return (
  <>
      <Header />
      <>
        <div class="app-body">
      {appBody}
       </div>
      </>
    </>
  );
};
export default Body;