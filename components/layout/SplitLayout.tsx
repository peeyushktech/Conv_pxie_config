import { ReactNode } from "react";

interface SplitLayoutProps {
  left: ReactNode;
  right: ReactNode;
}

export default function SplitLayout({ left, right }: SplitLayoutProps) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ flex: 2 }}>{left}</div>
      <div style={{ flex: 3 }}>{right}</div>
    </div>
  );
}
