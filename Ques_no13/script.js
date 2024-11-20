
  function Main({title,rupues,btnColor,btn2clr}){
    return(<>
    <div className = "container">
        <h1>{title}</h1>
        <div>
            <p> 1 Lorem ipsum</p>
            <p> 1 Lorem ipsum</p>
            <p> 1 Lorem ipsum</p>
        </div>
        <h1>{rupues}</h1>
        <button className ="btn2" style={{backgroundColor: btnColor? btnColor:"initial"}}>Get Started</button>
    </div>
    
    </>)
  }
 
 
 
 function HeroSection(){
    return (<>
     <  div className = "herosection">
         <div>
            <h3 className="heading">The Right Plan for </h3>
            <h3 className="heading1">Your Business</h3></div>
          <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,</p>
            <p>delectus laborum vel eius alias saepe impedit maxime nam </p>
          </div>

         </div>
        
    
    
    </>)

 }

function App(){
    return(
        <>
         <HeroSection/>
         <Main title="Starter" rupues="Free"/>
         <Main title = "Lorem Plus" rupues = "$32.00" btnColor = "#a07bea" btn2clr = "#a07bea"/>
         <Main title = "Lorem Pro" rupues = "$50.00" />
        
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />);

