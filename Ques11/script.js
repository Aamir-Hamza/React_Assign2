const { useState } = React;

function App() {
    const [color, setColor] = useState(0);
 function toggle(){
    if(color === 0){
        setColor(1)}
        else if(color === 1){
            setColor(0)}
 }
    return(
        <>
        <div style={{display:'flex', justifyContent:"center", alignItems :"center",height: '100vh', }}>  
             <button onClick ={toggle} style={{backgroundColor : color === 0 ? 'red':'blue', borderRadius :'5px'}}>click to toggle</button></div>
  
        
        </>
    )


}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
