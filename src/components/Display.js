import React from "react";
import Editor from "./Editor";
import Preview from "./Preview";

const Display = (props) => (
	<div className="container-fluid mt-4">
		<h2>Markdown Reviewer</h2>
		<hr />
		<div className="row mt-4">
			<Editor
				text={props.text}
				handleChange={props.handleChange}
				clear={props.clear}
			/>
			<Preview textMarked={props.text} />
		</div>
	</div>
);

export default Display;
