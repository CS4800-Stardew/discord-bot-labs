import React, {useState} from "react";

function TestAction() {
    const [actionList, setActionList] = useState([{ action: "" }]);

    const handleServiceChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...actionList];
        list[index][name] = value;
        setActionList(list);
    };

    const handleActionRemove = (index) => {
        const list = [...actionList];
        list.splice(index, 1);
        setActionList(list);
    };

    const handleAddAction = () => {
        setActionList([...actionList, { action: "" }]);
    };

    return (
        <form className="App" autoComplete="off">
            <div className="form-field">
                {actionList.map((singleService, index) => (
                    <div key={index} className="actions">
                        <div className="first-division">
                            <input
                                name="action"
                                type="text"
                                id="action"
                                value={singleService.service}
                                onChange={(e) => handleServiceChange(e, index)}
                                required
                            />
                            {actionList.length - 1 === index && actionList.length < 10 && (
                                <button
                                    type="button"
                                    onClick={handleAddAction}
                                    className="add-btn"
                                >
                                    <span>Add Action</span>
                                </button>
                            )}
                        </div>
                        <div className="second-division">
                            {actionList.length !== 1 && (
                                <button
                                    type="button"
                                    onClick={() => handleActionRemove(index)}
                                    className="remove-btn"
                                >
                                    <span>Remove</span>
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            {
                /*
            <div className="output">
                <h2>Output</h2>
                {actionList &&
                    actionList.map((singleService, index) => (
                        <ul key={index}>
                            {singleService.service && <li>{singleService.service}</li>}
                        </ul>
                    ))}
            </div>
                 */}
        </form>
    );
}

export default TestAction