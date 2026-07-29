import { Component, type ErrorInfo, type ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Unhandled error in app:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="flex min-h-screen items-center justify-center bg-theme-bg px-6 text-center text-theme-text">
            <div className="max-w-md rounded-sm border border-theme-border bg-theme-surface p-8 shadow-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-indigo-500">Unexpected error</p>
              <h1 className="mt-4 text-2xl font-bold uppercase tracking-[0.2em]">The page could not be loaded</h1>
              <p className="mt-4 text-sm text-theme-muted">
                Please refresh the page or return later. If the issue persists, the site configuration needs attention.
              </p>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
