import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import Header from  "../Header";
import "@testing-library/jest-dom";

is("Should load headre component with a login button", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button");

    expect(loginButton).toBeTheDocument();
});