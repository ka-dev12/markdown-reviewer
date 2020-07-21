import React, { Component } from "react";
import Display from "../components/Display";

const placeholder = `# Welcome to Markdown Reviewer

---
****

# This is a Heading 1
## This is a Heading 2 
#### This is a Heading 4

*italic text*  
or 
_italic_

**text bold** 
or 
__bold__

Mixed them => _italic **bold** italic_

## Lists

### Unordered

* LIst Item
+ You can use plus sign
  - And you can use hyphen sign

### Ordered

1. Item 1
1. Item 2
   1. Item 2-1
   1. Item 2-2
      1. Item 2-2-1
      1. Item 2-2-2

### Mixed

1. This is a numbered list
1. This is also a numbered list
   - This is a bulleted list
   - This is also a bulleted list

## Horizontal line

You can us at least three hyphens or asterisks or  underscores 

---
*****
______

## Inline html

You can use in this line with <u>putting your html code</u>.  <i>This is italic text</i>
<p>You also can put your paragraph inside html tag p</p>

## Code

This is code for tag div:
\`<div></div>\`
And here for multiline code:

\`\`\`
const welcome = "Welcome. ";
const title = "This is Markdown Reviewer"
console.log(welcome + title);
// Welcome. This is Markdown Reviewer
\`\`\`

## Links
[Markdown Reviewer](https://markdown-reviewer.web.app)

## Images
This is google logo
![Google logo](https://bit.ly/3eQy1gy)

`;

class Container extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: placeholder,
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
		this.setState({
			text: e.target.value,
		});
    }
    clear = () => {
        this.setState({
            text: ''
        })
    }
	render() {
		return (
			<Display
				text={this.state.text}
				handleChange={this.handleChange}
				textMarked={this.state.text}
                clear={this.clear}
			/>
		);
	}
}

export default Container;
