import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-section py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-primary-foreground mb-4">
              Memory Forensics Library
            </h3>
            <p className="text-footer-foreground text-sm leading-relaxed">
              Low-level C library for live memory inspection and integrity analysis. 
              Open source and free to use.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-primary-foreground mb-4 uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/docs" className="text-footer-foreground hover:text-primary-foreground text-sm transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-footer-foreground hover:text-primary-foreground text-sm transition-colors"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <Link to="/docs#api" className="text-footer-foreground hover:text-primary-foreground text-sm transition-colors">
                  API Reference
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-primary-foreground mb-4 uppercase tracking-wider">
              Community
            </h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-footer-foreground hover:text-primary-foreground text-sm transition-colors"
                >
                  Report Issues
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-footer-foreground hover:text-primary-foreground text-sm transition-colors"
                >
                  Contributing
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-footer-foreground/20">
          <p className="text-footer-foreground text-sm text-center">
            Released under the MIT License. Memory Forensics Library © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
