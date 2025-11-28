import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

type HeaderProps = {
  variant?: "light" | "dark";
};
export default function Header({ variant = "light" }: HeaderProps) {
  return (
    <header className="py-4 px-6 md:px-8 bg-transparent absolute top-0 left-0 right-0 z-40">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2 drop-shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:opacity-90"
        >
          <span
            className={cn(
              "text-2xl md:text-3xl font-headline font-bold",
              variant === "dark" ? "text-primary-foreground" : "text-primary"
            )}
          >
            Giving Tree
          </span>
        </Link>
      </div>
    </header>
  );
}
