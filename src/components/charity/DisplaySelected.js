import { useNavigate } from "react-router-dom";
function DisplaySelected(props) {
  const { data } = props;
  let navigate = useNavigate();
  return (
    <>
      <h3>{data.country || data.state || data.city}</h3>
      <h4>Category : {data.category}</h4>
      {data.countries.country.name && data.countries.country.name ? (
        <h4>Present in : {data.countries.country.name}</h4>
      ) : null}
      <p>Mission : {data.mission}</p>
      <button
        className="donateBtn"
        onClick={() => {
          navigate("/contribute");
        }}
      >
        Donate
      </button>
    </>
  );
}

export default DisplaySelected;
