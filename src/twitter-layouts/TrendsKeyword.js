import React from "react";

const TrendsKeyword = () => {
  const [state, setState] = React.useState([
    {
      keyword: "#React",
      totalKeywords: "17,1 B Tweet",
    },
    {
      
      keyword: "#Kodluyoruz",
      totalKeywords: "30 B Tweet",
    },
    {
      keyword: "Twitter",
      totalKeywords: "20 B Tweet",
    },
  ]);
  return (
    <div className="keywords">
      <div className="key">
        <div className="keyword__heading">
        <h4 className="font-bold text-lg px-4">What's happening</h4>
        </div>
        {state.map((keyword) => (
          <div key={keyword.id}>
            <div className="country">{keyword.country}</div>
            <div className="keyword__name">
              <strong>{keyword.keyword}</strong>
            </div>
            <div className="keyword__tweets">{keyword.totalKeywords}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendsKeyword;