import { useState } from 'react';

function TestButton() {
    const [showForm, setShowForm] = useState(false);

    const formDisplayer = () => {
        setShowForm(true);
    }

    const formHider = () => {
        setShowForm(false);
    }

    return (
        <div id="buttons">
            <button id="testButton" onClick={formDisplayer}>
                THIS SHOULD SHOW THE FORM
            </button>
            {showForm && (<form>
                    <label>Test Name:
                        <input type='text'></input>
                    </label>
                </form>)
            } <br></br>
            <button type='submit' id='hideTestButton' onClick={formHider}>
                THIS SHOULD HIDE THE FORM
            </button>
        </div>
    )

}

export default TestButton;