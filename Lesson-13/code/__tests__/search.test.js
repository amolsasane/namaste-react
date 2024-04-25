import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../utils/mocks/resListMockData.json";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should search res list for burger text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSeearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSeearch.length).toBe(20);

  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(4);
});
