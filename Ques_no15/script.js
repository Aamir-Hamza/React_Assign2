


const blogs = [
  { title: "React Basics", content: "Learn the basics of React.", isFeatured: true },
  { title: "Advanced React", content: "Delve deeper into React.", isFeatured: false },
  { title: "React Performance Tips", content: "Optimize your React apps.", isFeatured: true },
];

const BlogPage = () => {
  return (
    <div>
      <h1>Blog Posts</h1>
      <div>
        {blogs.map((blog, index) => (
          <div
            key={index}
            style={{
              backgroundColor: blog.isFeatured ? "lightyellow" : "white",
              padding: "10px",
              margin: "10px 0",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          >
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

 function App(){
    return (<>
    <BlogPage/>
    
       </>)
 }


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />);

