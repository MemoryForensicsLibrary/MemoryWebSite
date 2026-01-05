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
                    <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
                      Memory Context
                    </h3>

                    <p className="text-muted-foreground mb-4">
                      The memory context is the central structure that manages all internal
                      library state and serves as the root object for every operation performed
                      by the Memory Forensics Library. A context encapsulates allocator configuration, platform-specific bindings,
                      privilege validation state, and internal bookkeeping required for safe
                      memory inspection. No API function may be invoked without an initialized
                      and valid context.
                    </p>

                    <p className="text-muted-foreground mb-4">
                      Contexts are intentionally designed to be explicit and non-global. This
                      allows multiple independent contexts to coexist within the same process,
                      enabling multi-threaded workflows, sandboxed analysis environments, and
                      isolated inspection sessions.
                    </p>

                    <p className="text-muted-foreground mb-4">
                      Each context defines a strict lifecycle. It must be explicitly created,
                      initialized, and destroyed by the caller. Failing to properly release a
                      context may result in resource leaks, dangling platform handles, or
                      undefined behavior at the operating system level. Error reporting and diagnostics are also scoped to the context. This design
                      allows detailed failure information to be preserved per analysis session
                      without relying on global error states or thread-local storage.
                    </p>
                  </div>

                  <div id="process-handling" className="scroll-mt-24">
                    <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
                      Process Handling
                    </h3>

                    <p className="text-muted-foreground mb-4">
                      Process handling refers to the set of operations that allow the library to
                      interact with a target process for memory inspection purposes. This includes
                      locating a process, validating access permissions, and performing controlled
                      read operations on its address space. The library does not abstract or bypass operating system security models.
                      All interactions with target processes are performed strictly within the boundaries enforced by the host system. If the current execution context
                      lacks sufficient privileges, operations will fail with explicit error codes.
                    </p>

                    <p className="text-muted-foreground mb-4">
                      A target process is always referenced by its process identifier (PID).
                      The library assumes that the process lifecycle is managed externally and
                      does not attempt to control process creation, suspension, or termination.
                    </p>

                    <p className="text-muted-foreground mb-4">
                      Process attachment is implicit and scoped to individual operations. The
                      library does not maintain persistent hooks or long-lived attachments to
                      target processes. This design minimizes side effects and reduces the risk
                      of interfering with normal process execution.
                    </p>

                    <p className="text-muted-foreground mb-4">
                      Callers are responsible for ensuring that the target process remains valid
                      for the duration of an operation. If a process terminates or becomes
                      inaccessible, the corresponding memory operations will fail safely.
                    </p>
                  </div>

                  <div id="memory-regions" className="scroll-mt-24">
                    <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
                      Memory Regions
                    </h3>

                    <p className="text-muted-foreground mb-4">
                      Memory regions represent contiguous ranges of virtual memory within a
                      target process. Each region is defined by a start address, a size, and a
                      set of access permissions enforced by the operating system.
                    </p>

                    <p className="text-muted-foreground mb-4">
                      These regions are typically backed by different sources, such as executable
                      files, shared libraries, heap allocations, stack memory, or memory-mapped
                      files. From the library perspective, a memory region is treated as a
                      read-only inspection target unless the operating system explicitly allows
                      access.
                    </p>

                    <p className="text-muted-foreground mb-4">
                      The library operates strictly at the level of virtual memory. It does not
                      attempt to interpret higher-level language constructs, object layouts, or
                      runtime-specific metadata. Any semantic interpretation of raw memory data
                      is left to the caller.
                    </p>

                    <p className="text-muted-foreground mb-4">
                      When reading memory, operations are expected to stay within valid region
                      boundaries. Attempting to read across region limits or into unmapped
                      addresses will result in partial reads or explicit errors, depending on
                      platform behavior.
                    </p>

                    <p className="text-muted-foreground mb-4">
                      Region permissions play a critical role in memory inspection. Read
                      operations are only permitted on regions that the operating system marks as
                      readable. Write and execute permissions are not required for inspection and
                      are not used by the library.
                    </p>

                    <p className="text-muted-foreground mb-6">
                      Because memory layouts can change dynamically during process execution,
                      region information should always be treated as a snapshot in time. Callers
                      should avoid caching region boundaries for long-lived analysis without
                      revalidation.
                    </p>

                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      Reading Within a Memory Region
                    </h4>

                    <p className="text-muted-foreground mb-4">
                      A common usage pattern is to read memory from a known address range that
                      resides entirely within a single region. The caller is responsible for
                      ensuring that the address and size parameters are valid at the time of the
                      operation.
                    </p>

                    <pre className="bg-secondary p-4 rounded-lg overflow-x-auto mb-6">
                      <code className="text-sm font-mono text-secondary-foreground">
                  {`// Example: reading a fixed-size buffer from a known address
                  uint8_t buffer[256];
                  void *address = (void *)0x7f0000001000;

                  ssize_t result = mfl_read_memory(
                      &ctx,
                      target_pid,
                      address,
                      buffer,
                      sizeof(buffer)
                  );

                  if (result < 0) {
                      // Handle error
                  }`}
                      </code>
                    </pre>

                    <p className="text-muted-foreground mb-4">
                      In this example, the library performs a bounded read operation. If the
                      address range spans multiple regions or includes unmapped memory, the
                      operation may fail or return fewer bytes than requested.
                    </p>

                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      Region Boundaries and Safety
                    </h4>

                    <p className="text-muted-foreground mb-4">
                      The library does not automatically split read requests across multiple
                      memory regions. This design choice ensures predictable behavior and avoids
                      unintended access patterns that could obscure analysis results.
                    </p>

                    <p className="text-muted-foreground mb-4">
                      For large or exploratory scans, callers should explicitly manage address
                      ranges and sizes, progressing through memory in controlled increments and
                      validating results at each step.
                    </p>

                    <p className="text-muted-foreground mb-4">
                      Treating memory regions as independent, self-contained units simplifies
                      error handling and makes analysis workflows easier to reason about,
                      especially in forensic and security-sensitive contexts.
                    </p>
                  </div>
                </section>

                {/* API Reference */}
                <section id="api-reference" className="scroll-mt-24">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    API Reference
                  </h2>

                  {/* Initialization */}
                  <div id="initialization" className="scroll-mt-24">
                    <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
                      Initialization
                    </h3>

                    <div className="border-l-2 border-primary pl-6 mb-6">
                      <h4 className="font-mono text-lg text-foreground mb-2">
                        mfl_init()
                      </h4>
                      <p className="text-muted-foreground mb-2">
                        Initializes a memory forensics context.  
                        This function must be called before using any other API.
                      </p>

                      <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                        <code className="text-sm font-mono text-secondary-foreground">
                {`int mfl_init(mfl_context_t *ctx);

                // Returns:
                //  0  -> success
                // <0  -> error`}
                        </code>
                      </pre>
                    </div>
                  </div>

                  {/* Memory Operations */}
                  <div id="memory-operations" className="scroll-mt-24">
                    <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
                      Memory Operations
                    </h3>

                    <div className="border-l-2 border-primary pl-6 mb-6">
                      <h4 className="font-mono text-lg text-foreground mb-2">
                        mfl_read_memory()
                      </h4>
                      <p className="text-muted-foreground mb-2">
                        Reads raw memory from a target process at a given virtual address.
                        The caller is responsible for ensuring the buffer size is sufficient.
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

                // Returns:
                // >=0 -> number of bytes read
                //  <0 -> error`}
                        </code>
                      </pre>
                    </div>
                  </div>

                  {/* Cleanup */}
                  <div id="cleanup" className="scroll-mt-24">
                    <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
                      Cleanup
                    </h3>

                    <div className="border-l-2 border-primary pl-6 mb-6">
                      <h4 className="font-mono text-lg text-foreground mb-2">
                        mfl_cleanup()
                      </h4>
                      <p className="text-muted-foreground mb-2">
                        Releases all resources associated with a context.
                        After calling this function, the context must not be reused.
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
                  <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
                    Memory Hooks
                  </h3>

                  <p className="text-muted-foreground mb-4">
                    Memory hooks refer to advanced analysis techniques that observe memory
                    behavior over time rather than performing isolated, one-time reads. In the
                    context of this library, hooks are conceptual mechanisms used to structure
                    repeated inspections and comparisons of memory data. Unlike traditional function or instruction hooking, memory hooks do not
                    modify executable code, alter control flow, or inject runtime logic into the target process. All observations are performed externally through controlled
                    memory reads.
                  </p>

                  <p className="text-muted-foreground mb-4">
                    This approach ensures that analysis remains non-intrusive and minimizes the
                    risk of destabilizing the target process or triggering integrity and
                    anti-tampering mechanisms. Memory hooks are especially useful in forensic, debugging, and monitoring
                    scenarios where understanding how specific memory regions evolve over time is more important than reacting to individual access events.
                  </p>

                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    Observation-Based Hooking Model
                  </h4>

                  <p className="text-muted-foreground mb-4">
                    The library adopts an observation-based model for memory hooks. Instead of
                    intercepting reads or writes as they occur, callers periodically sample
                    memory regions and analyze changes between snapshots.
                  </p>

                  <p className="text-muted-foreground mb-4">
                    This model allows detection of modifications, anomalies, or unexpected data
                    transitions without requiring kernel-level instrumentation or privileged
                    runtime injection.
                  </p>

                  <pre className="bg-secondary p-4 rounded-lg overflow-x-auto mb-6">
                    <code className="text-sm font-mono text-secondary-foreground">
                {`// Example: periodic memory observation loop
                uint8_t previous[256];
                uint8_t current[256];

                mfl_read_memory(&ctx, pid, address, previous, sizeof(previous));

                sleep(1);

                mfl_read_memory(&ctx, pid, address, current, sizeof(current));

                // Compare buffers to detect changes`}
                    </code>
                  </pre>

                  <p className="text-muted-foreground mb-4">
                    In this example, repeated reads from the same address range act as a logical
                    hook, allowing the caller to observe when and how memory contents change
                    over time.
                  </p>

                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    Use Cases
                  </h4>

                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                    <li>Detecting unauthorized memory modification</li>
                    <li>Monitoring sensitive data structures for unexpected changes</li>
                    <li>Validating runtime integrity of critical memory regions</li>
                    <li>Supporting forensic timelines and post-incident analysis</li>
                  </ul>

                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    Limitations
                  </h4>

                  <p className="text-muted-foreground mb-4">
                    Because memory hooks rely on periodic sampling, they do not provide
                    instruction-level granularity or immediate notification of changes. Short-
                    lived or transient modifications may go undetected between sampling
                    intervals.
                  </p>

                  <p className="text-muted-foreground mb-4">
                    For this reason, memory hooks should be viewed as an analytical tool rather
                    than a real-time enforcement mechanism.
                  </p>

                  <p className="text-muted-foreground mb-4">
                    Future versions of the library may expand this concept with more structured
                    abstractions, but the core principle of non-intrusive observation will
                    remain unchanged.
                  </p>
                </div>

                <div id="callbacks" className="scroll-mt-24">
                  <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
                    Callbacks
                  </h3>

                  <p className="text-muted-foreground mb-4">
                    Callbacks are a structural pattern used by applications built on top of the
                    library to organize memory analysis logic and react to analysis results in a
                    controlled way. The core library itself does not invoke user-defined
                    callbacks automatically, but it is designed to integrate cleanly with
                    callback-driven workflows.
                  </p>

                  <p className="text-muted-foreground mb-4">
                    By combining the library’s memory inspection functions with application-
                    level callbacks, developers can separate data collection from decision-
                    making logic, improving code clarity and maintainability. This design keeps the core minimal and deterministic while allowing higher-
                    level tools to implement event-driven behavior without modifying the underlying library.
                  </p>

                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    Callback-Oriented Analysis Flow
                  </h4>

                  <p className="text-muted-foreground mb-4">
                    A common pattern is to perform memory reads or integrity checks and then pass
                    the results to callback functions responsible for logging, alerting, or
                    further processing.
                  </p>

                  <pre className="bg-secondary p-4 rounded-lg overflow-x-auto mb-6">
                    <code className="text-sm font-mono text-secondary-foreground">
                {`typedef void (*memory_event_cb)(
                    const void *address,
                    const uint8_t *data,
                    size_t size
                );

                void on_memory_update(
                    const void *address,
                    const uint8_t *data,
                    size_t size
                ) {
                    // Application-defined handling logic
                }

                ssize_t bytes = mfl_read_memory(
                    &ctx, pid, target_addr, buffer, sizeof(buffer)
                );

                if (bytes > 0) {
                    on_memory_update(target_addr, buffer, bytes);
                }`}
                    </code>
                  </pre>

                  <p className="text-muted-foreground mb-4">
                    In this example, the callback is invoked explicitly by the application after
                    a successful memory read. This approach gives full control over when and how
                    callbacks are executed.
                  </p>

                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    Benefits of Application-Level Callbacks
                  </h4>

                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                    <li>Clear separation between data acquisition and analysis logic</li>
                    <li>Predictable execution flow without hidden side effects</li>
                    <li>Easier testing and debugging</li>
                    <li>Flexible integration with logging, alerting, or visualization systems</li>
                  </ul>

                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    Threading Considerations
                  </h4>

                  <p className="text-muted-foreground mb-4">
                    When callbacks are used in multi-threaded applications, the caller is
                    responsible for ensuring proper synchronization. The library does not manage
                    callback execution contexts or enforce thread safety beyond its documented
                    API guarantees.
                  </p>

                  <p className="text-muted-foreground mb-4">
                    Callbacks should avoid performing long-running or blocking operations in
                    performance-sensitive paths, especially when used inside tight memory
                    inspection loops.This explicit and opt-in callback model aligns with the library’s philosophy
                    of transparency, control, and minimal abstraction.
                  </p>
                </div>

                <div id="multi-threading" className="scroll-mt-24">
                  <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
                    Multi-threading
                  </h3>

                  <p className="text-muted-foreground mb-4">
                    The Memory Forensics Library is designed to be usable in multi-threaded
                    applications, provided that proper synchronization is enforced by the
                    caller. The library does not implement internal locking or global state
                    synchronization.
                  </p>

                  <p className="text-muted-foreground mb-4">
                    Each thread must operate on its own context instance. Contexts are not
                    thread-safe and must not be shared across threads without external
                    synchronization. This constraint is intentional and avoids hidden locking
                    costs or unexpected contention. By keeping contexts isolated, the library enables parallel memory analysis
                    workflows where multiple target processes or memory regions can be inspected concurrently without interference.
                  </p>

                  <p className="text-muted-foreground mb-6">
                    When multi-threading is required, the recommended approach is to create and
                    initialize a separate context per thread and clean it up when the thread
                    completes its work.
                  </p>

                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    Context Ownership Model
                  </h4>

                  <p className="text-muted-foreground mb-4">
                    A context instance has a single owner at any given time. Ownership implies
                    exclusive access to all functions operating on that context. Transferring a
                    context between threads is permitted only if no concurrent access occurs.
                  </p>

                  <p className="text-muted-foreground mb-6">
                    Sharing a context across threads without synchronization may result in data
                    races, inconsistent state, or undefined behavior.
                  </p>

                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    Example: Thread-Local Context Usage
                  </h4>

                  <pre className="bg-secondary p-4 rounded-lg overflow-x-auto mb-6">
                    <code className="text-sm font-mono text-secondary-foreground">
                {`void *worker_thread(void *arg) {
                    mfl_context_t ctx;

                    if (mfl_init(&ctx) < 0) {
                        return NULL;
                    }

                    // Perform memory analysis using this thread's context
                    mfl_read_memory(&ctx, target_pid, addr, buffer, size);

                    mfl_cleanup(&ctx);
                    return NULL;
                }`}
                    </code>
                  </pre>

                  <p className="text-muted-foreground mb-4">
                    In this example, each worker thread initializes and cleans up its own
                    context, ensuring isolation and avoiding shared mutable state.
                  </p>

                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    Synchronization Responsibilities
                  </h4>

                  <p className="text-muted-foreground mb-4">
                    If multiple threads operate on the same target process, synchronization
                    concerns remain the responsibility of the application. The library does not
                    coordinate access across contexts or enforce ordering guarantees.
                  </p>

                  <p className="text-muted-foreground mb-4">
                    Applications should also consider operating system limitations, such as
                    rate limits, permission checks, or resource exhaustion, when scaling memory
                    inspection across many threads.
                  </p>

                  <p className="text-muted-foreground mb-4">
                    This explicit threading model favors predictability and control, making the
                    library suitable for high-assurance forensic and security tooling.
                  </p>
                </div>
                </section>

              {/* Examples */}
              <section id="examples" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Examples
                </h2>

                <p className="text-muted-foreground mb-8">
                  The following examples demonstrate common usage patterns of the Memory
                  Forensics Library. They are intentionally minimal and focus on explicit
                  control and correctness rather than high-level automation.
                </p>

                {/* Basic Example */}
                <div id="basic-example" className="scroll-mt-24">
                  <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
                    Basic Usage
                  </h3>

                  <p className="text-muted-foreground mb-4">
                    This example shows the minimal workflow required to initialize the
                    library, read memory from a target process, and clean up resources.
                  </p>

                  <pre className="bg-secondary p-4 rounded-lg overflow-x-auto mb-6">
                    <code className="text-sm font-mono text-secondary-foreground">
              {`#include <memforensics.h>
              #include <stdio.h>

              int main() {
                  mfl_context_t ctx;

                  if (mfl_init(&ctx) < 0) {
                      fprintf(stderr, "Failed to initialize context\\n");
                      return 1;
                  }

                  pid_t target_pid = 1234;
                  uint8_t buffer[256];

                  ssize_t bytes = mfl_read_memory(
                      &ctx,
                      target_pid,
                      (void *)0x1000,
                      buffer,
                      sizeof(buffer)
                  );

                  if (bytes < 0) {
                      fprintf(stderr, "Memory read failed\\n");
                  }

                  mfl_cleanup(&ctx);
                  return 0;
              }`}
                    </code>
                  </pre>

                  <p className="text-muted-foreground mb-6">
                    This pattern is the foundation for all higher-level analysis tools built
                    on top of the library.
                  </p>
                </div>

                {/* Iterative Reads */}
                <div id="process-scanning" className="scroll-mt-24">
                  <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
                    Iterative Memory Reads
                  </h3>

                  <p className="text-muted-foreground mb-4">
                    While the library does not provide built-in process or memory scanning,
                    applications can implement iterative reads over known or discovered
                    address ranges.
                  </p>

                  <p className="text-muted-foreground mb-6">
                    This approach allows full control over which regions are inspected and
                    how errors are handled.
                  </p>

                  <pre className="bg-secondary p-4 rounded-lg overflow-x-auto mb-6">
                    <code className="text-sm font-mono text-secondary-foreground">
              {`for (uintptr_t addr = start; addr < end; addr += 0x1000) {
                  ssize_t n = mfl_read_memory(
                      &ctx,
                      pid,
                      (void *)addr,
                      buffer,
                      sizeof(buffer)
                  );

                  if (n > 0) {
                      // Analyze buffer contents
                  }
              }`}
                    </code>
                  </pre>
                </div>

                {/* Memory Export */}
                <div id="memory-dumping" className="scroll-mt-24">
                  <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
                    Memory Export
                  </h3>

                  <p className="text-muted-foreground mb-4">
                    Dumping memory to disk is not handled directly by the library, but can be
                    implemented by combining read operations with standard file I/O.
                  </p>

                  <pre className="bg-secondary p-4 rounded-lg overflow-x-auto mb-6">
                    <code className="text-sm font-mono text-secondary-foreground">
              {`FILE *out = fopen("dump.bin", "wb");

              if (out) {
                  ssize_t n = mfl_read_memory(&ctx, pid, addr, buffer, sizeof(buffer));
                  if (n > 0) {
                      fwrite(buffer, 1, n, out);
                  }
                  fclose(out);
              }`}
                    </code>
                  </pre>

                  <p className="text-muted-foreground mb-6">
                    This explicit model ensures that memory extraction behavior remains fully
                    transparent to the caller.
                  </p>
                </div>
              </section>

            {/* Error Codes */}
            <section id="error-codes" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Error Codes
              </h2>

              <p className="text-muted-foreground mb-6">
                Most functions return either a non-negative value on success or a negative
                error code on failure. Error codes are designed to be simple, explicit, and
                stable.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-3 pr-4 font-semibold text-foreground">Code</th>
                      <th className="py-3 pr-4 font-semibold text-foreground">Meaning</th>
                      <th className="py-3 font-semibold text-foreground">Description</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-mono">&lt; 0</td>
                      <td className="py-3 pr-4">Generic failure</td>
                      <td className="py-3">
                        Operation failed due to an unrecoverable error.
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-mono">-1</td>
                      <td className="py-3 pr-4">Permission error</td>
                      <td className="py-3">
                        Insufficient privileges to access the target process or memory.
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-mono">-2</td>
                      <td className="py-3 pr-4">Invalid target</td>
                      <td className="py-3">
                        The specified process or address is invalid or unavailable.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono">-3</td>
                      <td className="py-3 pr-4">Invalid argument</td>
                      <td className="py-3">
                        One or more arguments passed to the function are invalid.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-muted-foreground mt-6">
                Applications should always handle error codes explicitly and avoid assuming
                partial success unless documented otherwise.
              </p>
            </section>

            {/* Troubleshooting */}
            <section id="troubleshooting" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Troubleshooting
              </h2>

              <p className="text-muted-foreground mb-8">
                This section describes common issues encountered when using the Memory
                Forensics Library and provides guidance on how to diagnose and resolve them.
                Most problems are related to operating system restrictions, invalid targets,
                or incorrect usage patterns.
              </p>

              <div className="space-y-8">

                {/* Permission errors */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Permission Denied Errors
                  </h3>

                  <p className="text-muted-foreground mb-4">
                    Permission errors occur when the current process lacks sufficient
                    privileges to access the memory of the target process. This is the most
                    common failure scenario and is enforced by the operating system.
                  </p>

                  <p className="text-muted-foreground mb-4">
                    On Linux systems, reading memory from another process typically requires
                    elevated privileges. Depending on system configuration, this may involve
                    running as the superuser or granting specific capabilities such as
                    <code className="mx-1">CAP_SYS_PTRACE</code>.
                  </p>

                  <p className="text-muted-foreground">
                    If permission errors persist, verify that the target process is owned by
                    the same user or that mandatory access control systems (such as SELinux
                    or AppArmor) are not blocking access.
                  </p>
                </div>

                {/* Process not found */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Process Not Found
                  </h3>

                  <p className="text-muted-foreground mb-4">
                    This error indicates that the specified process identifier (PID) does not
                    correspond to a running process at the time of the operation.
                  </p>

                  <p className="text-muted-foreground mb-4">
                    Processes may terminate between discovery and inspection, especially in
                    dynamic or short-lived workloads. Always ensure that the PID is still
                    valid immediately before performing memory operations.
                  </p>

                  <p className="text-muted-foreground">
                    Applications should treat process existence as a transient condition and
                    handle failures gracefully rather than assuming long-lived targets.
                  </p>
                </div>

                {/* Invalid address */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Invalid Memory Address
                  </h3>

                  <p className="text-muted-foreground mb-4">
                    Attempting to read from an invalid or unmapped address will result in a
                    failure. The library does not validate address ranges beyond what the
                    operating system reports.
                  </p>

                  <p className="text-muted-foreground mb-4">
                    Hard-coded addresses should be avoided unless their validity is known.
                    Address layout randomization (ASLR) may cause addresses to change between
                    executions.
                  </p>

                  <p className="text-muted-foreground">
                    When possible, applications should determine valid address ranges through
                    external means before attempting memory reads.
                  </p>
                </div>

                {/* Partial reads */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Partial or Short Reads
                  </h3>

                  <p className="text-muted-foreground mb-4">
                    A successful call may return fewer bytes than requested. This can occur
                    when a read crosses memory region boundaries or encounters inaccessible
                    pages.
                  </p>

                  <p className="text-muted-foreground">
                    Applications should always check the returned byte count and avoid
                    assuming that the entire requested buffer has been filled.
                  </p>
                </div>

                {/* Debugging strategy */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Debugging Strategy
                  </h3>

                  <p className="text-muted-foreground mb-4">
                    When troubleshooting issues, start by validating context initialization,
                    target process availability, and execution privileges before inspecting
                    memory-related failures.
                  </p>

                  <p className="text-muted-foreground">
                    Keeping memory reads small and incremental during development can help
                    isolate failing addresses and simplify debugging.
                  </p>
                </div>

              </div>
            </section>

            {/* Changelog */}
            <section id="changelog" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Changelog
              </h2>

              <div className="space-y-8">

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    v0.1.0
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Initial development release
                  </p>

                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Initial implementation of library context management</li>
                    <li>Basic process attachment and detachment logic</li>
                    <li>Low-level memory read primitives</li>
                    <li>Foundational abstractions for memory regions</li>
                    <li>Linux-focused implementation</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    v0.1.1
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Internal improvements
                  </p>

                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Improved error handling consistency</li>
                    <li>More predictable context lifecycle behavior</li>
                    <li>Minor internal refactoring</li>
                    <li>Documentation updates and clarifications</li>
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
