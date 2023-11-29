import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './GameLibrary.css';

const GameLibraryPage = () => {
  const [csvData, setCsvData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchCSVData = () => {
    const csvUrl =
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vRWyAFb6t7r9nxy3YbcR4bb0XOVwyvNBsRU_j7vumoFBphVSUamXBgEWuDHZIbiWQ/pub?gid=1635913807&single=true&output=csv';

    axios
      .get(csvUrl)
      .then((response) => {
        const parsedCsvData = parseCSV(response.data);
        setCsvData(parsedCsvData);
        setFilteredData(parsedCsvData); // Initially set filtered data to all data
        setLoading(false);
        console.log('Fetched CSV Data:', parsedCsvData);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
        console.error('Error fetching CSV data:', error);
      });
  };

  useEffect(() => {
    fetchCSVData();
  }, []);

  function parseCSV(csvText) {
    const rows = csvText.split(/\r?\n/);
    const headers = rows[0].split(',');

    const data = [];
    for (let i = 1; i < rows.length; i++) {
      const rowData = rows[i].split(',');
      const rowObject = {};
      for (let j = 0; j < headers.length; j++) {
        rowObject[headers[j]] = rowData[j];
      }
      data.push(rowObject);
    }
    return data;
  }

  useEffect(() => {
    console.log('Render CSV Data:', csvData);
  }, [csvData]);

  const handleSearch = () => {
    const searchTermLowerCase = searchTerm.toLowerCase();
    const filtered = csvData.filter((row) => {
      return Object.values(row).some(
        (value) => value && value.toLowerCase().includes(searchTermLowerCase)
      );
    });
    setFilteredData(filtered);
  };

  const handleReset = () => {
    setSearchTerm('');
    setFilteredData(csvData); // Reset filtered data to all data
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === 'Backspace' && searchTerm === '') {
      handleReset();
    }
  };

  if (loading) {
    // Loading state with spinner animation
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    // Error state
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="game-library-container">
      <h1>Game Library</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
          onKeyUp={handleKeyUp}
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      {filteredData.length === 0 ? (
        <p className="no-results">No results found.</p>
      ) : (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                {Object.keys(filteredData[0] || {}).map((header) => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value, colIndex) => (
                    <td key={colIndex}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default GameLibraryPage;
