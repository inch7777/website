const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
      <main>
        <section className="hero shell" aria-labelledby="intro-heading">
          <div className="hero-copy">
            <h1 id="intro-heading">Yanqi Wang</h1>
            <p className="lede">
              I am a student from China, currently studying at{" "}
              <a href="https://uwcrcn.no/" target="_blank" rel="noreferrer">
                UWC Red Cross Nordic <Arrow />
              </a>
              , in Flekke, Norway.
            </p>
            <p className="intro">
              I am interested in how ideas shape the world around us. Here, I
              share occasional notes on philosophy, politics, mathematics,
              and things I find worth keeping.
            </p>
            <p className="hero-links">
              <a href="/musings/philosophy">Musings</a>
              <span aria-hidden="true"> · </span>
              <a href="/media">Media</a>
            </p>
          </div>

          <div className="portrait" role="img" aria-label="Yanqi Wang portrait placeholder">
            <span className="portrait-mark">YW</span>
            <span className="portrait-caption">Flekke, Norway</span>
          </div>
        </section>
      </main>
  );
}
