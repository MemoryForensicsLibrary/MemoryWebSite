import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Documentation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="mb-8">
              <Link to="/" className="text-primary hover:underline text-sm">
                ← Back to Home
              </Link>
            </nav>

            <h1 className="text-4xl font-bold text-foreground mb-8">Documentation</h1>

            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Getting Started</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Memory Forensics Library provides a straightforward API for memory inspection 
                  and analysis. This guide will help you get up and running quickly.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Installation</h3>
                <p className="text-muted-foreground mb-4">
                  Clone the repository and build from source:
                </p>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto mb-6">
                  <code className="text-sm font-mono text-secondary-foreground">
{`git clone https://github.com/your-repo/memory-forensics-lib.git
cd memory-forensics-lib
make
sudo make install`}
                  </code>
                </pre>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Requirements</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  <li>GCC 7.0 or later (or compatible C compiler)</li>
                  <li>GNU Make</li>
                  <li>Linux kernel headers (for Linux builds)</li>
                  <li>Windows SDK (for Windows builds)</li>
                </ul>
              </section>

              <section className="mb-12" id="api">
                <h2 className="text-2xl font-semibold text-foreground mb-4">API Reference</h2>
                
                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Core Functions</h3>
                
                <div className="border-l-2 border-primary pl-6 mb-6">
                  <h4 className="font-mono text-lg text-foreground mb-2">mfl_init()</h4>
                  <p className="text-muted-foreground mb-2">
                    Initializes the library and prepares internal structures.
                  </p>
                  <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                    <code className="text-sm font-mono text-secondary-foreground">
{`int mfl_init(mfl_context_t *ctx);

// Returns: 0 on success, negative error code on failure`}
                    </code>
                  </pre>
                </div>

                <div className="border-l-2 border-primary pl-6 mb-6">
                  <h4 className="font-mono text-lg text-foreground mb-2">mfl_read_memory()</h4>
                  <p className="text-muted-foreground mb-2">
                    Reads memory from the specified process at the given address.
                  </p>
                  <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                    <code className="text-sm font-mono text-secondary-foreground">
{`ssize_t mfl_read_memory(
    mfl_context_t *ctx,
    pid_t pid,
    void *address,
    void *buffer,
    size_t size
);

// Returns: bytes read on success, negative error code on failure`}
                    </code>
                  </pre>
                </div>

                <div className="border-l-2 border-primary pl-6 mb-6">
                  <h4 className="font-mono text-lg text-foreground mb-2">mfl_check_integrity()</h4>
                  <p className="text-muted-foreground mb-2">
                    Verifies the integrity of a memory region against a known baseline.
                  </p>
                  <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                    <code className="text-sm font-mono text-secondary-foreground">
{`int mfl_check_integrity(
    mfl_context_t *ctx,
    pid_t pid,
    void *address,
    size_t size,
    const uint8_t *baseline_hash
);

// Returns: 0 if integrity verified, 1 if modified, negative on error`}
                    </code>
                  </pre>
                </div>

                <div className="border-l-2 border-primary pl-6 mb-6">
                  <h4 className="font-mono text-lg text-foreground mb-2">mfl_cleanup()</h4>
                  <p className="text-muted-foreground mb-2">
                    Releases all resources associated with the context.
                  </p>
                  <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                    <code className="text-sm font-mono text-secondary-foreground">
{`void mfl_cleanup(mfl_context_t *ctx);`}
                    </code>
                  </pre>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Examples</h2>
                
                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Basic Usage</h3>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto mb-6">
                  <code className="text-sm font-mono text-secondary-foreground">
{`#include <memforensics.h>

int main() {
    mfl_context_t ctx;
    
    if (mfl_init(&ctx) < 0) {
        fprintf(stderr, "Failed to initialize library\\n");
        return 1;
    }
    
    pid_t target_pid = 1234;
    void *target_addr = (void *)0x7f0000000000;
    uint8_t buffer[4096];
    
    ssize_t bytes_read = mfl_read_memory(
        &ctx, target_pid, target_addr, buffer, sizeof(buffer)
    );
    
    if (bytes_read > 0) {
        printf("Read %zd bytes from process %d\\n", bytes_read, target_pid);
    }
    
    mfl_cleanup(&ctx);
    return 0;
}`}
                  </code>
                </pre>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Error Codes</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="py-3 pr-4 font-semibold text-foreground">Code</th>
                        <th className="py-3 pr-4 font-semibold text-foreground">Name</th>
                        <th className="py-3 font-semibold text-foreground">Description</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-mono">-1</td>
                        <td className="py-3 pr-4">MFL_ERR_PERM</td>
                        <td className="py-3">Permission denied</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-mono">-2</td>
                        <td className="py-3 pr-4">MFL_ERR_NOENT</td>
                        <td className="py-3">Process not found</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-mono">-3</td>
                        <td className="py-3 pr-4">MFL_ERR_NOMEM</td>
                        <td className="py-3">Out of memory</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-mono">-4</td>
                        <td className="py-3 pr-4">MFL_ERR_INVAL</td>
                        <td className="py-3">Invalid argument</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-mono">-5</td>
                        <td className="py-3 pr-4">MFL_ERR_FAULT</td>
                        <td className="py-3">Bad address</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Documentation;
