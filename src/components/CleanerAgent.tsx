import agentImg from "@/assets/CleanerAgentSemFundo.png";

const CleanerAgent = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          {/* BLUE CARD WRAPPER */}
          <div
            className="
              rounded-3xl
              px-12 py-16
            "
            style={{
              backgroundColor: "rgba(36, 150, 237, 0.08)",
              border: "1px solid rgba(36, 150, 237, 0.35)",
              boxShadow: "0 20px 60px rgba(36, 150, 237, 0.15)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* LEFT — TEXT */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                  Cleaner Agent
                </h2>

                <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    <strong className="text-foreground">
                      Cleaner Agent
                    </strong>{" "}
                    is an automated runtime agent designed to sanitize, validate,
                    and reduce sensitive artifacts left in memory during execution.
                  </p>

                  <p>
                    It operates alongside the Memory Forensics Library, leveraging
                    low-level inspection primitives to detect leaked credentials,
                    stale buffers, and unsafe memory patterns.
                  </p>

                  <p>
                    The agent can be deployed in CI/CD runners, servers, or isolated
                    environments to enforce memory hygiene policies and reduce the
                    attack surface exposed by long-lived processes.
                  </p>

                  <p>
                    Cleaner Agent is not a replacement for forensics — it is a
                    preventive and corrective layer focused on automation and
                    runtime hardening.
                  </p>
                </div>
              </div>

              {/* RIGHT — VISUAL */}
              <div className="flex justify-center lg:justify-end">
                <img
                  src={agentImg}
                  alt="Cleaner Agent"
                  className="w-full max-w-sm h-auto object-contain opacity-90"
                />
              </div>

            </div>
          </div>
          {/* END BLUE CARD */}

        </div>
      </div>
    </section>
  );
};

export default CleanerAgent;
