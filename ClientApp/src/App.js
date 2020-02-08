import React from 'react';

function App() {

    return (
        <div>

            <div>
                <h4>Small pokeman app </h4>
                <form>
                    <label>Choose your pokeman type </label>
                    <select>
                        <option>normal </option>
                        <option>fighting </option>
                        <option> flying</option>
                    </select>
                    <button className="btn btn-success">Search </button>

                </form>
            </div>

        </div>
        );

}

export default App;