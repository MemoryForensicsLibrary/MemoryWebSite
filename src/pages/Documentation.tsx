import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

interface DocSection {
  id: string;
  title: string;
  children?: { id: string; title: string }[];
}

const docSections: DocSection[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    children: [
      { id: "installation", title: "Installation" },
      { id: "requirements", title: "Requirements" },
      { id: "quick-start", title: "Quick Start" },
    ],
  },
  {
    id: "core-concepts",
    title: "Core Concepts",
    children: [
      { id: "memory-context", title: "Memory Context" },
      { id: "process-handling", title: "Process Handling" },
      { id: "memory-regions", title: "Memory Regions" },
    ],
  },
  {
    id: "api-reference",
    title: "API Reference",
    children: [
      { id: "initialization", title: "Initialization" },
      { id: "memory-operations", title: "Memory Operations" },
      { id: "integrity-checks", title: "Integrity Checks" },
      { id: "cleanup", title: "Cleanup" },
    ],
  },
  {
    id: "advanced-usage",
    title: "Advanced Usage",
    children: [
      { id: "hooks", title: "Memory Hooks" },
      { id: "callbacks", title: "Callbacks" },
      { id: "multi-threading", title: "Multi-threading" },
    ],
  },
  {
    id: "examples",
    title: "Examples",
    children: [
      { id: "basic-example", title: "Basic Usage" },
      { id: "process-scanning", title: "Process Scanning" },
      { id: "memory-dumping", title: "Memory Dumping" },
    ],
  },
  {
    id: "error-codes",
    title: "Error Codes",
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
  },
  {
    id: "changelog",
    title: "Changelog",
  },
];

const Documentation = () => {
  const [activeSection, setActiveSection] = useState("getting-started");
  const [expandedSections, setExpandedSections] = useState<string[]>(["getting-started"]);
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      setActiveSection(hash);
      const parent = docSections.find((s) =>
        s.children?.some((c) => c.id === hash)
      );
      if (parent && !expandedSections.includes(parent.id)) {
        setExpandedSections([...expandedSections, parent.id]);
      }
    }
  }, [location.hash]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-background">
        <div className="container mx-auto px-6 py-12">
          <div className="flex gap-12">
            {/* Sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24">
                <nav className="mb-6">
                  <Link to="/" className="text-primary hover:underline text-sm">
                    ← Back to Home
                  </Link>
                </nav>
                <h2 className="text-lg font-semibold text-foreground mb-4">Documentation</h2>
                <nav className="space-y-1">
                  {docSections.map((section) => (
                    <div key={section.id}>
                      <button
                        onClick={() => {
                          if (section.children) {
                            toggleSection(section.id);
                          }
                          scrollToSection(section.id);
                        }}
                        className={cn(
                          "w-full text-left px-3 py-2 text-sm rounded-md transition-colors flex items-center justify-between",
                          activeSection === section.id
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        )}
                      >
                        {section.title}
                        {section.children && (
                          <svg
                            className={cn(
                              "w-4 h-4 transition-transform",
                              expandedSections.includes(section.id) ? "rotate-90" : ""
                            )}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        )}
                      </button>
                      {section.children && expandedSections.includes(section.id) && (
                        <div className="ml-4 mt-1 space-y-1 border-l border-border pl-3">
                          {section.children.map((child) => (
                            <button
                              key={child.id}
                              onClick={() => scrollToSection(child.id)}
                              className={cn(
                                "w-full text-left px-3 py-1.5 text-sm rounded-md transition-colors",
                                activeSection === child.id
                                  ? "text-primary font-medium"
                                  : "text-muted-foreground hover:text-foreground"
                              )}
                            >
                              {child.title}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Mobile sidebar toggle */}
            <div className="lg:hidden mb-6">
              <Link to="/" className="text-primary hover:underline text-sm">
                ← Back to Home
              </Link>
            </div>

            {/* Content */}
            <div className="flex-1 max-w-4xl">
              <h1 className="text-4xl font-bold text-foreground mb-8">Documentation</h1>

              <div className="prose prose-lg max-w-none space-y-16">
                {/* Getting Started */}
                <section id="getting-started">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Getting Started</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Memory Forensics Library provides a straightforward API for memory inspection 
                    and analysis. This guide will help you get up and running quickly.
                  </p>

                  <div id="installation" className="scroll-mt-24">
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
                  </div>

                  <div id="requirements" className="scroll-mt-24">
                    <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Requirements</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                      <li>GCC 7.0 or later (or compatible C compiler)</li>
                      <li>GNU Make</li>
                      <li>Linux kernel headers (for Linux builds)</li>
                      <li>Windows SDK (for Windows builds)</li>
                    </ul>
                  </div>

                  <div id="quick-start" className="scroll-mt-24">
                    <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Quick Start</h3>
                    <p className="text-muted-foreground mb-4">
                      After installation, include the header and link against the library:
                    </p>
                    <pre className="bg-secondary p-4 rounded-lg overflow-x-auto mb-6">
                      <code className="text-sm font-mono text-secondary-foreground">
{`#include <memforensics.h>

// Compile with: gcc -o myapp myapp.c -lmemforensics`}
                      </code>
                    </pre>
                  </div>
                </section>

                {/* Core Concepts */}
                <section id="core-concepts" className="scroll-mt-24">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Core Concepts</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Understanding the fundamental concepts will help you use the library effectively.
                  </p>

                  <div id="memory-context" className="scroll-mt-24">
                    <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Memory Context</h3>
                    <p className="text-muted-foreground mb-4">
                      The memory context is the central structure that manages all library state. 
                      It must be initialized before any operations and cleaned up when done.
                    </p>
                  </div>

                  <div id="process-handling" className="scroll-mt-24">
                    <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Process Handling</h3>
                    <p className="text-muted-foreground mb-4">
                      The library provides mechanisms to attach to and detach from target processes,
                      respecting system security boundaries.
                    </p>
                  </div>

                  <div id="memory-regions" className="scroll-mt-24">
                    <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Memory Regions</h3>
                    <p className="text-muted-foreground mb-4">
                      Memory regions represent contiguous areas of process memory with consistent
                      permissions and backing.
                    </p>
                  </div>
                </section>

                {/* API Reference */}
                <section id="api-reference" className="scroll-mt-24">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">API Reference</h2>
                  
                  <div id="initialization" className="scroll-mt-24">
                    <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Initialization</h3>
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
                  </div>

                  <div id="memory-operations" className="scroll-mt-24">
                    <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Memory Operations</h3>
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
                  </div>

                  <div id="integrity-checks" className="scroll-mt-24">
                    <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Integrity Checks</h3>
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
                  </div>

                  <div id="cleanup" className="scroll-mt-24">
                    <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Cleanup</h3>
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
                  </div>
                </section>

                {/* Advanced Usage */}
                <section id="advanced-usage" className="scroll-mt-24">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Advanced Usage</h2>

                  <div id="hooks" className="scroll-mt-24">
                    <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Memory Hooks</h3>
                    <p className="text-muted-foreground mb-4">
                      Memory hooks allow you to intercept and monitor memory access patterns
                      in real-time for advanced analysis scenarios.
                    </p>
                  </div>

                  <div id="callbacks" className="scroll-mt-24">
                    <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Callbacks</h3>
                    <p className="text-muted-foreground mb-4">
                      Register callback functions to be notified of specific events during
                      memory analysis operations.
                    </p>
                  </div>

                  <div id="multi-threading" className="scroll-mt-24">
                    <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Multi-threading</h3>
                    <p className="text-muted-foreground mb-4">
                      The library supports multi-threaded usage with proper synchronization.
                      Each thread should use its own context instance.
                    </p>
                  </div>
                </section>

                {/* Examples */}
                <section id="examples" className="scroll-mt-24">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Examples</h2>
                  
                  <div id="basic-example" className="scroll-mt-24">
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
                  </div>

                  <div id="process-scanning" className="scroll-mt-24">
                    <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Process Scanning</h3>
                    <p className="text-muted-foreground mb-4">
                      Example of scanning all running processes for specific memory patterns.
                    </p>
                    <pre className="bg-secondary p-4 rounded-lg overflow-x-auto mb-6">
                      <code className="text-sm font-mono text-secondary-foreground">
{`// Process scanning example code here`}
                      </code>
                    </pre>
                  </div>

                  <div id="memory-dumping" className="scroll-mt-24">
                    <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Memory Dumping</h3>
                    <p className="text-muted-foreground mb-4">
                      Example of dumping process memory to a file for offline analysis.
                    </p>
                    <pre className="bg-secondary p-4 rounded-lg overflow-x-auto mb-6">
                      <code className="text-sm font-mono text-secondary-foreground">
{`// Memory dumping example code here`}
                      </code>
                    </pre>
                  </div>
                </section>

                {/* Error Codes */}
                <section id="error-codes" className="scroll-mt-24">
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

                {/* Troubleshooting */}
                <section id="troubleshooting" className="scroll-mt-24">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Troubleshooting</h2>
                  <p className="text-muted-foreground mb-4">
                    Common issues and their solutions.
                  </p>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Permission Denied Errors</h3>
                      <p className="text-muted-foreground">
                        Ensure you have appropriate privileges. On Linux, you may need CAP_SYS_PTRACE
                        capability or run as root.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Process Not Found</h3>
                      <p className="text-muted-foreground">
                        Verify the target process is running and the PID is correct.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Changelog */}
                <section id="changelog" className="scroll-mt-24">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Changelog</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">v1.0.0</h3>
                      <p className="text-muted-foreground text-sm mb-2">Released: 2024-01-01</p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>Initial public release</li>
                        <li>Core memory reading functionality</li>
                        <li>Integrity checking support</li>
                        <li>Linux and Windows support</li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Documentation;
