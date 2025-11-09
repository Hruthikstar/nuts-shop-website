const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">R.A Traders</h3>
          <p className="text-primary-foreground/80 mb-4">
            Your trusted source for quality products
          </p>
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} R.A Traders. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
