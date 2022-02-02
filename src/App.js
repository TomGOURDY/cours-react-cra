import Card from "./components/Card"
import Plage from "./img/carnon-plage.jpg"
import Roadmap from "./components/RoadMap"
import MyRouter from "./routes/MyRouter"

function App() {
  const user = {
    firstname: "Machin", 
    lastname: "Truc"
  }

  const fullName = user.firstname + " " + user.lastname

  function RoadMapList() {
    const DataRoadMap = [{
      percentage: '0%',
      title: 'Titre 1',
      content: 'Content 1',
    }, {
      percentage: '10%',
      title: 'Titre 10°',
      content: 'Content 10°',
    }, {
      percentage: '20%',
      title: 'Titre 1',
      content: 'Content 1',
    }, {
      percentage: '30%',
      title: 'Titre 1',
      content: 'Content 1',
    }, {
      percentage: '40%',
      title: 'Titre 1',
      content: 'Content 1',
    }, {
      percentage: '50%',
      title: 'Titre 1',
      content: 'Content 1',
    }, {
      percentage: '60%',
      title: 'Titre 1',
      content: 'Content 1',
    }, {
      percentage: '70%',
      title: 'Titre 1',
      content: 'Content 1',
    }, {
      percentage: '80%',
      title: 'Titre 1',
      content: 'Content 1',
    },{
      percentage: '90%',
      title: 'Titre 1',
      content: 'Content 1',
    },{
      percentage: '100%',
      title: 'Titre 1',
      content: 'Content 1',
    }];

    const roadMapItems = DataRoadMap.map((item) => 
      <div>
        <Roadmap percentage={item.percentage} title={item.title} content={item.content} />
      </div>
    );

    return (
      <div>
        {roadMapItems}
      </div>
    )
  }
  return (
    <>
    <MyRouter/>
    </>
    // <div>
    //   <h1>Bonjour, je m'appelle {fullName}</h1>
    //   <Card title="Machin" desc="Truc" img={Plage} alt="La plage" link="https://www.youtube.com/" />
    //   <RoadMapList />
    // </div>
  )

}

export default App;
