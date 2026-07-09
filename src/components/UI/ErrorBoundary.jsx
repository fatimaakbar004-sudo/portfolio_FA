import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error) {
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex justify-center items-center">

          <div className="text-center">

            <h2 className="text-4xl font-bold">
              Something went wrong.
            </h2>

            <button
              onClick={() =>
                window.location.reload()
              }
              className="mt-6 px-6 py-3 rounded-xl bg-[rgb(var(--primary))] text-white"
            >
              Reload
            </button>

          </div>

        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;