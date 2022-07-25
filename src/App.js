import Travel from "./components/Travel"
import Nav from "./components/Nav"
import data from "./data"

function App(){
    const travels = data.map(item => {
      return (
           <Travel
                  key={item.id}
                  item={item}
           
           
           />
      )
    })
  return(
      <div className="app">
        <Nav />
        <section className="travel-list">
            {travels}
        </section>
        

      </div>
  )
}

export default App