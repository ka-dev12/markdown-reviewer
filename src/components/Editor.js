import React from "react";

const Editor = (props) => {
    return (
        <div className="col-12 col-lg-6">
            <div className="form-group">
                <div className="mx-4 d-flex justify-content-between align-items-center">
                    <h4>Editor</h4>
                    <button className="btn btn-warning m-0 px-3 py-1" onClick={props.clear}>Clear</button>
                </div>
                <textarea
                    className="form-control content"
                    rows="20"
                    id="editor"
                    value={props.text}
                    onChange={props.handleChange}
                ></textarea>
            </div>
        </div>
    );
};

export default Editor;
