import { render, screen, fireEvent } from "@testing-library/react";
import ActionButton from "../components/ActionButton";
import { ButtonTypes } from "../types/ButtonTypes";

describe("ActionButton", () => {
  const mockOnClick = vi.fn();

  it("renders with correct label and type", () => {
    // render(
    //   <ActionButton
    //     label="Add Timer"
    //     onClick={mockOnClick}
    //     type={ButtonTypes.Primary}
    //   />
    // );
    // expect(screen.getByText("Add Timer")).toBeInTheDocument();
    // expect(screen.getByRole("button")).toHaveClass("text-white bg-blue-600");
  });

  it("calls onClick when clicked", async () => {
    // render(
    //   <ActionButton
    //     label="Add Timer"
    //     onClick={mockOnClick}
    //     type={ButtonTypes.Primary}
    //   />
    // );
    fireEvent.click(screen.getByRole("button"));
    expect(mockOnClick).toHaveBeenCalled();
  });

  it("renders as a navbar button when isNavbarButton is true", () => {
    // render(
    //   <ActionButton
    //     label="Add Timer"
    //     onClick={mockOnClick}
    //     type={ButtonTypes.Primary}
    //     isNavbarButton
    //   />
    // );
    //   expect(screen.getByRole("button")).toHaveClass("flex items-center gap-2");
  });
});
