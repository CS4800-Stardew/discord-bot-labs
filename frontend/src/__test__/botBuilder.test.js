import {render, screen} from "@testing-library/react"
import botBuilder from "../pages/botBuilder";

test("renders the Bot Details title", () => {
    const {container} = render(<botBuilder />);
    container.querySelector(".container-fluid")
});