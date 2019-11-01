import React from "react";

const CountryTable = props => {
  const { countries, labels } = props;

  const arrayLength = array => {
    const length = array.length - 1;
    if (array.length <= 1) {
      return "";
    } else {
      return " (+" + length + ")";
    }
  };

  return (
    <div>
      <p>
        Replace the thead section with a row generated from the Labels endpoint
      </p>
      <p>
        Replace the tbody section with rows generated from the countries
        endpoint
      </p>
      <table className="table">
        <thead>
          <tr>
            {labels.map((label, index) => (
              <th key={index}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {countries.map(c => (
            <tr key={c.topLevelDomain}>
              <td>{c.name}</td>
              <td>{c.capital}</td>
              <td>{c.region}</td>
              <td>{c.population}</td>
              <td>{c.area}</td>
              <td>
                {c.timezones[0]}
                {arrayLength(c.timezones)}
              </td>
              <td>
                {c.borders[0]}
                {arrayLength(c.borders)}
              </td>
              <td>
                {c.topLevelDomain[0]}
                {arrayLength(c.topLevelDomain)}
              </td>
              <td>
                {c.currencies[0]}
                {arrayLength(c.currencies)}
              </td>
              <td>
                {c.languages[0]}
                {arrayLength(c.languages)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default CountryTable;
