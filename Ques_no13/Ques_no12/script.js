 
 function Card(props){
    return (
        <>
        <p>{props.title}</p>
        <p>{props.content}</p>
        
        </>
    )
 }
  function Cards({title,content}){
    return(<>
     <h3>{title}</h3>
     <h3>{content}</h3>
    
    </>)
  }
   function Card2({data}){
    return(
        <>
        <p>{data[0]}</p>
        </>
    )
   }
 
 function App(){ 
   var  fruits  = ["mango", "grapes", "banana", "apple"]
    const data  =  {
        title : "hello",
        content :"development"
    }
   
    return (
        <>
        <Card title = {data.title} content = { data.content}/>
        <Cards title = "IT" content ="Full Stack Development"/>
         <Card2 data = {fruits}/>
        
        </>
    )
 }





const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />);