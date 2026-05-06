import { StrictMode, Component } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Error boundary to catch rendering errors
class RootErrorBoundary extends Component<
  { children: React.ReactNode },
  { error: Error | null; details: string }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { error: null, details: "" };
  }

  static getDerivedStateFromError(error: Error) {
    return { error, details: error.message + "\n" + (error.stack || "") };
  }

  componentDidCatch(error: Error, info: { componentStack?: string }) {
    console.error("ROOT ERROR:", error, info);
    this.setState({
      details:
        error.message +
        "\n\n" +
        (error.stack || "") +
        "\n\nComponent Stack:\n" +
        (info.componentStack || ""),
    });
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: "40px", fontFamily: "monospace", maxWidth: "800px", margin: "0 auto" }}>
          <h1 style={{ color: "red", fontSize: "24px", marginBottom: "16px" }}>
            ❌ Rendetalje — Render Error
          </h1>
          <pre
            style={{
              background: "#f5f5f5",
              padding: "16px",
              borderRadius: "8px",
              overflow: "auto",
              fontSize: "13px",
              lineHeight: "1.5",
              whiteSpace: "pre-wrap",
            }}
          >
            {this.state.details}
          </pre>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: "16px",
              padding: "8px 24px",
              background: "#16a34a",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Genindlæs siden
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RootErrorBoundary>
      <App />
    </RootErrorBoundary>
  </StrictMode>,
);
