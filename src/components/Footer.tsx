import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-section py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-primary-foreground mb-4">
              Memory Forensics Library
            </h3>
            <p className="text-footer-foreground text-sm leading-relaxed">
              Low-level C library focused on live memory inspection and forensic
              analysis. Built for security researchers and reverse engineers.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-primary-foreground mb-4 uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/docs"
                  className="text-footer-foreground hover:text-primary-foreground text-sm transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  to="/docs#api-reference"
                  className="text-footer-foreground hover:text-primary-foreground text-sm transition-colors"
                >
                  API Reference
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/MemoryForensicsLibrary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-footer-foreground hover:text-primary-foreground text-sm transition-colors"
                >
                  GitHub Organization
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-sm font-semibold text-primary-foreground mb-4 uppercase tracking-wider">
              Community
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/MemoryForensicsLibrary/MemoryForensics/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-footer-foreground hover:text-primary-foreground text-sm transition-colors"
                >
                  Report Issues
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/MemoryForensicsLibrary/MemoryForensics?tab=contributing-ov-file"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-footer-foreground hover:text-primary-foreground text-sm transition-colors"
                >
                  Contributing Guide
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-footer-foreground/20">
          <p className="text-footer-foreground text-sm text-center">
            Released under the MIT License — Memory Forensics Library ©{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
