import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import { resData } from "../__mocks__/RestaurantCard.mock";
import "@testing-library/jest-dom";

it("Should load the Restaurant Card Component with props", () => {
  render(<RestaurantCard resData={resData} />);

  const name = screen.getByText("Chinese Wok");

  expect(name).toBeInTheDocument();
});
