export default function Footer() {
  return (
    <footer className="bg-card/80 backdrop-blur-sm py-6 mt-12 border-t border-border">
      <div className="container mx-auto text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Giving Tree. All rights reserved.</p>
        <p>Empowering communities through transparent giving.</p>
      </div>
    </footer>
  );
}