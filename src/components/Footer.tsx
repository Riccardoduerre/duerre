export default function Footer() {
  return (
    <footer className="border-t border-theme-border bg-theme-surface py-12 text-theme-muted">
      <div className="container mx-auto px-6 md:px-8 text-center">
        <p className="text-sm">© {new Date().getFullYear()} Riccardo Riva. All rights reserved.</p>
        <p className="mt-3 text-sm">Built with React, Vite, and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
