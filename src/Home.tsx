import { useState } from "react";
import { Clock } from "lucide-react";
import { TimerList } from "./components/TimerList";
import { Toaster } from "sonner";
import { SetTimerModal } from "./components/SetTimerModal";
import ActionButton from "./components/ActionButton";
import { ButtonTypes } from "./types/ButtonTypes";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Toaster position="top-right" />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Clock className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Timer App</h1>
          </div>
          <ActionButton
            onClick={() => setIsModalOpen(true)}
            label="Add Timer"
            isNavbarButton
            type={ButtonTypes.Primary}
          />
        </div>

        <TimerList />

        <SetTimerModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
}

export default Home;
