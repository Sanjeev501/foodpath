import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../__mocks__/mockResListData.json";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render the Body component with Submit button in modal window", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Body />
        </Provider>
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByRole("button", { name: "Submit" });

  expect(searchBtn).toBeInTheDocument();
});

it("Should render the Body component with a Search button in it", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Body />
        </Provider>
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByTestId("searchBtn");

  expect(searchBtn).toBeInTheDocument();
});

it("Should render all cards before search and should render correct cards when searched using Search bar", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Body />
        </Provider>
      </BrowserRouter>
    )
  );

  const resCardsBeforeSearch = screen.getAllByTestId("res-card");
  expect(resCardsBeforeSearch.length).toBe(20);

  const searchInput = screen.getByTestId("searchInput");
  const searchBtn = screen.getByTestId("searchBtn");
  fireEvent.change(searchInput, { target: { value: "pizza" } });
  fireEvent.click(searchBtn);

  const resCardsAfterSearch = screen.getAllByTestId("res-card");

  expect(resCardsAfterSearch.length).toBe(3);
});

it("Should filter the cards when using Ratings 4.0+ button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Body />
        </Provider>
      </BrowserRouter>
    )
  );

  const resCardsBeforeFilter = screen.getAllByTestId("res-card");
  expect(resCardsBeforeFilter.length).toBe(20);

  const filterBtn = screen.getByTestId("filterBtn");
  expect(filterBtn).toBeInTheDocument();

  fireEvent.click(filterBtn);
  const resCardsAfterFilter = screen.getAllByTestId("res-card");
  expect(resCardsAfterFilter.length).toEqual(14);
});
