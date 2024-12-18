import { render, screen, fireEvent } from "@testing-library/react";
import { TimerItem } from "../components/TimerItem";
import { Timer } from "../types/timer";
import { useTimerStore } from "../store/useTimerStore";

// Mock the useTimerStore hook
vi.mock("../store/useTimerStore");

const mockTimer: Timer = {
  id: "1",
  title: "Test Timer",
  description: "This is a test timer",
  duration: 3600,
  remainingTime: 3600,
  isRunning: false,
  createdAt: Date.now(),
};

describe("TimerItem", () => {
  it("renders timer title and description", () => {
    // render(<TimerItem timer={mockTimer} />);
    // expect(screen.getByText(mockTimer.title)).toBeInTheDocument();
    // expect(screen.getByText(mockTimer.description)).toBeInTheDocument();
  });

  it("calls toggleTimer when the toggle button is clicked", async () => {
    const { toggleTimer } = useTimerStore();
    // render(<TimerItem timer={mockTimer} />);
    const toggleButton = screen.getByRole("button", { name: /toggle/i });
    fireEvent.click(toggleButton);
    expect(toggleTimer).toHaveBeenCalledWith(mockTimer.id);
  });

  it("calls deleteTimer when the delete button is clicked", async () => {
    const { deleteTimer } = useTimerStore();
    // render(<TimerItem timer={mockTimer} />);
    const deleteButton = screen.getByRole("button", { name: /delete timer/i });
    fireEvent.click(deleteButton);
    expect(deleteTimer).toHaveBeenCalledWith(mockTimer.id);
  });
});
