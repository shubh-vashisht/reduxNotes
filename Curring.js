import { toLower } from "lodash";
import { pipe } from "lodash/fp";

//We can use a function inside a function sometimes to create a
//closure that can help us solve hard situations.

trim = (str) => str.trim();
wrap = (str) => `<div>${str}</div>`;
toLowerCase = (str) => str.toLowerCase();

str = "           Hey girl hows it going             ";
transfrom = pipe(trim, toLowerCase, wrap);
//this the transform is going to return the function that applies all of the functions going through
//all of these functions.. but what if we want a <p> instead of a div

trim2 = (str) => str.trim();
wrap2 = (type) => (str) => `<${type}>${str}</${type}>`;
toLowerCase2 = (str) => str.toLowerCase();

//now we can fix this..
transform2 = pipe(time, toLowerCase, wrap("div"));
// wrap('div') will return a function
