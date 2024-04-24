import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

test("should verify if contact us loaded", () => {
  render(<Contact />);

  //querying
  const heading = screen.getByRole("heading");

  //assertion
  expect(heading).toBeInTheDocument();
});
