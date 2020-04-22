import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "../components/List";
import SearchBox from "../components/SearchBox";
import Spinner from "../components/Spinner";
import Head from "../components/Head";
import LoadMore from "../components/LoadMore";
function ListData() {
  const [gameData, setGameData] = useState([]);
  const [limitSize, setLimitSize] = useState(12);
  const [err, setError] = useState(null);
  const [query, setQuery] = useState("");
  const onLoadMore = () => {
    setLimitSize(limitSize + 12);
  };
  const fetchData = async () => {
    try {
      const res = await axios.get(`http://starlord.hackerearth.com/gamesext`);
      const output = await res.data;
      const response = await output.filter((data) => {
        return data.title.toString().toLowerCase().includes(query.toLowerCase());
      });
      return setGameData(response);
    } catch (error) {
      console.log(error)
      setError(error);
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
  const handleSearch = (e) => {
    const query = e.target.value;
    setQuery(query);
  };
  const sortAsc = () => {
    const sorted = [...gameData].sort((a, b) => {
      return a.score - b.score;
    });
    setGameData(sorted);
  };
  const sortDsc = () => {
    const sorted = [...gameData].sort((a, b) => {
      return b.score - a.score;
    });
    setGameData(sorted);
  };
  return (
    <React.Fragment>
      <SearchBox query={query} onChange={handleSearch}></SearchBox>
      <Head sortAsc={sortAsc} sortDsc={sortDsc}></Head>
      {err && (
        <div className="alert alert-danger container text-center">
          Something went wrong
        </div>
      )}
      <div className="container">
        <div className="row">
          {gameData.length > 0 ? (
            gameData.slice(0, limitSize).map((data, index) => {
              return (
                <List
                  key={index}
                  title={data.title}
                  platform={data.platform}
                  score={data.score}
                  genre={data.genre}
                  editors_choice={
                    data.editors_choice === "Y" ? (
                      <div className="text-warning">
                        <img
                          src="https://img.icons8.com/flat_round/24/000000/favorites.png"
                          alt="choice"
                        />
                        &nbsp;Editor's Choice
                      </div>
                    ) : null
                  }
                  release_year={data.release_year}
                ></List>
              );
            })
          ) : (
            <Spinner></Spinner>
          )}
        </div>
      </div>
      <br></br>
      <LoadMore onLoadMore={onLoadMore}></LoadMore>
    </React.Fragment>
  );
}

export default ListData;
