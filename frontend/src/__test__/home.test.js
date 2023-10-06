import {render, screen,} from "@testing-library/react";
import Home from "../pages/home";

//This jest test will verify that all components of the home page are rendered

test('renders all components of the home page', () => {
    //Renders the Home component
    render(<Home />);
    
    //Checks if the Header component is rendered
    const headerElement = screen.getByText('Home');
    expect(headerElement).toBeInTheDocument();
    
    //Checks if the MainContent component is rendered
    const mainContentElement = screen.getByText('Under Construction!');
    expect(mainContentElement).toBeInTheDocument();
  
    //Checks if both CustomButton components are rendered
    const startWithAccountButton = screen.getByText('Start with Account');
    expect(startWithAccountButton).toBeInTheDocument();
  
    const startWithoutAccountButton = screen.getByText('Start without Account');
    expect(startWithoutAccountButton).toBeInTheDocument();
  });