import Profile from "./components/profile"
import FotoPerfil from "./assets/perfilDoLinkedin.jpg"
import "./styles/global.css"


function App() {

  return (
    <>

     <Profile
      avatar={FotoPerfil} 
      name={'Vítor Gabriel'}
      bio={"Full-stack Javascript Developer."}
      phone={"(21)97921-2935"}
      email={"vitor_gha@hotmail.com"}
      githubUrl={"https://github.com/VitorGHA"}

      />
    </>
  )
}

export default App
