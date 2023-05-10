import './App.css';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './request';


function App() {
  return (
    <div>
      <Banner/>
      <Row title={'Netflix Orginals'} fetchUrl={requests.fetchNetflixOriginals} />
      <Row title={'Trending'} fetchUrl={requests.fetchTrending} />
      <Row title={'Top Rated in India'} fetchUrl={requests.fetchTopRated} />
      <Row title={'Action'} fetchUrl={requests.fetchActionMovies} />
      <Row title={'Comedy'} fetchUrl={requests.fetchComedyMovies} />
      <Row title={'Horror'} fetchUrl={requests.fetchHorrorMovies} />
      <Row title={'Romance'} fetchUrl={requests.fetchRomanceMovies} />
      <Row title={'Documentries'} fetchUrl={requests.fetchDocumentaries} />





    </div>
  );
}

export default App;
