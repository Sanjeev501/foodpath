import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../__mocks__/mockResMenu.json";
import { Provider } from "react-redux";
import store from "../../utils/store";
import "@testing-library/jest-dom";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should load restaurant menu component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionHeader = screen.getByText("Veg Starters (4)");
  fireEvent.click(accordionHeader);

  const foodItems = screen.getAllByTestId("foodItems");
  expect(foodItems.length).toBe(4);
});

it("should add items to cart when add is clicked", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionHeader = screen.getByText("Veg Starters (4)");
  fireEvent.click(accordionHeader);

  const addBtn = screen.getAllByTestId("addBtn");
  fireEvent.click(addBtn[0]);

  expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();
  expect(screen.getAllByTestId("foodItems").length).toBe(5);
});

it("Should clear the cart when clear cart is clicked", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  expect(screen.getByText("Oops! Your cart is empty"));
});
