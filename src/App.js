import {useEffect, useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Apartment';


const wrapper = {
  display: "flex",
  flexWrap: "wrap",
  gap: "48px",
  margin: "30px 10vw",
}

function App() {
  const [ apartments, setApartments ] = useState([]);
  useEffect(()=>{
    const getData = async ()=>{
      const r = await fetch("https://api-rent.myigloo.is/api/2019-10/listings/");
      const json = await r.json();
      console.log(json.items);
      setApartments(json.items);
    }
    getData();
  },[]);
  return (
    <>
      <Header/>
      <div style={wrapper}>
        {apartments.map((apartment,id)=>{
          console.log(apartment.id);
          return (
            <Card data={apartment}/>
          )
        })}
      </div>
      <Footer/>
    </>
  );
}

export default App;
