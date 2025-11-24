import SplitLayout from "../components/layout/SplitLayout";
import ChatWindow from "../components/chat/ChatWindow";
import SystemVisualizer from "../components/visualizer/SystemVisualizer";

export default function Home() {
  return (
    <SplitLayout
      left={<ChatWindow />}
      right={<SystemVisualizer />}
    />
  );
}
