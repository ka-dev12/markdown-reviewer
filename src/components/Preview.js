import React from "react";
import marked from "marked";
import dompurify from 'dompurify';

marked.setOptions({
    breaks: true,
    headerIds: false
});
const renderer = new marked.Renderer();

const Preview = (props) => {
    const txt = marked(props.textMarked, { renderer: renderer });
    return (
        <div className="col-12 col-lg-6 mt-4 mt-lg-0">
            <div className="form-group">
                <div className="mx-4 d-flex justify-content-between align-items-center">
                    <h4>Preview</h4>
                    <button className="btn"></button>
                </div>
                <div
                    className="border p-2 overflow-auto content"
                    id="preview"
                    dangerouslySetInnerHTML={{ __html: dompurify.sanitize(txt) }}
                ></div>
            </div>
        </div>
    );
};

export default Preview;
