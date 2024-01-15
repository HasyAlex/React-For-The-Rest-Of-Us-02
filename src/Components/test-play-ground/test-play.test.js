import {
  fireEvent,
  getByRole,
  getByTestId,
  render,
  screen,
} from "@testing-library/react";
import TestPlayGround from "./test-play-ground";

//Testing In React Tutorial - Jest and React Testing Library
describe(TestPlayGround, () => {
  it("displays the correct initial count", () => {
    const { getByTestId } = render(<TestPlayGround initialCount={10} />);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(10);
  });
  it("increment count when user press the increment button", () => {
    const { getByTestId, getByRole } = render(
      <TestPlayGround initialCount={0} />
    );
    const incrementButton = getByRole("button", { name: "Increment" });
    const countValue1 = Number(getByTestId("count").textContent);
    expect(countValue1).toEqual(0);
    fireEvent.click(incrementButton);
    const countValue2 = Number(getByTestId("count").textContent);
    expect(countValue2).toEqual(1);
  });

  it("decrement count when user press the Decrement button", () => {
    const { getByTestId, getByRole } = render(
      <TestPlayGround initialCount={20} />
    );
    const countValue1 = Number(getByTestId("count").textContent);
    expect(countValue1).toEqual(20);
    const incrementButton = getByRole("button", { name: "Decrement" });
    fireEvent.click(incrementButton);
    const countValue2 = Number(getByTestId("count").textContent);
    expect(countValue2).toEqual(19);
  });

  it("counter number switchSighs when user press the SwitchSighs button", () => {
    const { getByTestId, getByRole } = render(
      <TestPlayGround initialCount={10} />
    );
    const countValue1 = Number(getByTestId("count").textContent);
    expect(countValue1).toEqual(10);
    const resetButton = getByRole("button", { name: "SwitchSighs" });
    fireEvent.click(resetButton);
    const countValue2 = Number(getByTestId("count").textContent);
    expect(countValue2).toEqual(-10);
  });
});

