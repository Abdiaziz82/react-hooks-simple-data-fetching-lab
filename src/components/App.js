import { useEffect, useState } from "react"
// create your App component here
function App(){
    const[image, setImage]= useState([])
    const[isLoading,setIsLoading]= useState(false)

    useEffect( ()=> {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((res) => res.json())
        .then((data) => {
            setImage(data);
            setIsLoading(true)
          });
    
    },[] )
    if(!isLoading) return <p>Loading...</p>
    return (
<div>
    <img src={image.message} alt="A Random Dog" />
</div>
    )
}

export default App