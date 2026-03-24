import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Perfect Loans – Fast & Easy Loans',
  description: 'Hassle-free financial services when you need them most. Get a decision today with The Perfect Loans.',
  openGraph: {
    title: 'The Perfect Loans – Fast & Easy Loans',
    description: 'Hassle-free financial services when you need them most.',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <>
      <style>{`
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

        :root {
          --primary: #3b29ed;
          --secondary: #2a2426;
          --accent: #f9da6b;
          --tertiary: #b4df9d;
          --text: #5f5e59;
          --bg: #ffffff;
          --alternate: #e3e3db;
          --border: #8a8a80;
          --pink: #feddff;
        }

        body { font-family: 'Arimo', sans-serif; color: var(--text); line-height: 1.6; background: #fff; }
        h1, h2, h3, h4, h5 { font-family: 'Bitter', serif; color: var(--secondary); line-height: 1.15; }
        a { text-decoration: none; color: var(--primary); }
        a:hover { color: var(--tertiary); }
        img { max-width: 100%; height: auto; display: block; }
        ul { list-style: none; }

        /* === WARNING BANNER === */
        .warning-banner {
          background: var(--pink);
          color: var(--secondary);
          text-align: left;
          padding: 10px 40px;
          font-size: 14px;
          font-weight: 700;
          line-height: 1.4;
        }
        .warning-banner a { color: var(--secondary); text-decoration: underline; }

        /* === NAV === */
        .site-nav { background: #fff; padding: 0 40px; }
        .nav-inner {
          max-width: 1200px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
          height: 80px;
        }
        .nav-logo img { height: 50px; width: auto; }
        .nav-links { display: flex; align-items: center; gap: 36px; margin-left: auto; margin-right: 24px; }
        .nav-links > li { position: relative; }
        .nav-links > li > a {
          font-size: 16px; font-weight: 500; color: var(--secondary);
          padding: 8px 0; transition: color 0.2s;
        }
        .nav-links > li > a:hover { color: var(--primary); }
        .nav-dropdown-trigger::after { content: ' ▾'; font-size: 11px; }
        .nav-dropdown {
          display: none; position: absolute; top: 100%; left: 0;
          background: #fff; box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          border-radius: 4px; min-width: 260px; padding: 8px 0; z-index: 100;
        }
        .nav-links li:hover .nav-dropdown { display: block; }
        .nav-dropdown li a {
          display: block; padding: 10px 20px; font-size: 14px;
          color: var(--secondary); transition: background 0.2s;
        }
        .nav-dropdown li a:hover { background: #f5f5f5; color: var(--primary); }
        .nav-cta {
          background: var(--primary); color: #fff !important;
          padding: 14px 24px; font-size: 16px; font-weight: 700;
          text-transform: uppercase; display: inline-block;
          box-shadow: var(--accent) 5px 5px 0px 0px;
          transition: transform 0.2s, box-shadow 0.2s; border: none; cursor: pointer;
        }
        .nav-cta:hover { transform: translate(2px,2px); box-shadow: var(--accent) 3px 3px 0px 0px; color: #fff !important; }
        .hamburger { display: none; background: none; border: none; cursor: pointer; flex-direction: column; gap: 5px; padding: 8px; }
        .hamburger span { display: block; width: 24px; height: 3px; background: var(--secondary); border-radius: 2px; }

        /* === HERO === */
        .hero { position: relative; background: #f8f8f5; overflow: hidden; }
        .hero-bg-blue {
          position: absolute; top: 0; right: 0; width: 45%; height: 100%;
          background: var(--primary); z-index: 0;
        }
        .hero-inner {
          position: relative; z-index: 1;
          display: grid; grid-template-columns: 55% 45%; gap: 0;
          min-height: 500px;
        }
        .hero-left {
          position: relative; overflow: hidden;
        }
        .hero-visual { position: relative; width: 100%; height: 100%; }
        .hero-pound {
          position: absolute; left: 5%; top: 35%; width: 70px; height: 70px;
          background: var(--accent); border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 32px; font-weight: 700; color: var(--secondary); z-index: 3;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        .hero-woman { width: 100%; height: 100%; object-fit: cover; display: block; }
        .hero-overlay-text {
          position: absolute; bottom: 40px; right: 40px; z-index: 3;
          font-size: 48px; font-weight: 700; color: #fff; line-height: 1.15;
          text-shadow: 0 2px 8px rgba(0,0,0,0.5);
          max-width: 494px; text-align: left; margin: 0 0 24px;
        }
        .hero-overlay-text span { color: var(--accent); }
        .hero-tagline {
          background: var(--primary); padding: 40px 40px 50px;
          margin-left: 0; margin-right: 0; position: relative;
        }
        .hero-tagline h1 {
          font-size: 48px; font-weight: 700; color: #fff; line-height: 1.1;
          max-width: 600px;
        }
        .hero-tagline h1 span { color: var(--accent); }
        .hero-tagline-sub {
          font-size: 16px; color: rgba(255,255,255,0.85); margin-top: 10px;
        }

        /* Calculator */
        .calc-form {
          background: var(--primary); padding: 58px 32px 65px 71px; color: #fff;
          display: flex; flex-direction: column; justify-content: center;
          position: relative; z-index: 2;
        }
        .calc-form h3 { font-size: 28px; font-weight: 700; color: #fff; margin-bottom: 24px; }
        .form-group { margin-bottom: 16px; }
        .form-group label { display: block; font-size: 14px; font-weight: 700; margin-bottom: 6px; color: #fff; }
        .form-group input, .form-group select {
          width: 350px; max-width: 100%; padding: 14px 20px; font-size: 16px;
          border: 1px solid rgb(138, 138, 128); background: #fff;
          color: #333; font-family: 'Arimo', sans-serif; outline: none;
          transition: border-color 0.2s; height: 56px; box-sizing: border-box;
        }
        .form-group input::placeholder { color: #999; }
        .form-group input:focus, .form-group select:focus { border-color: var(--accent); }
        .form-group select option { color: #333; background: var(--accent); padding: 12px; }
        .form-submit {
          width: 350px; max-width: 100%; padding: 14px 20px; background: var(--accent);
          color: var(--secondary); font-size: 16px; font-weight: 700;
          text-transform: uppercase; border: none; cursor: pointer;
          box-shadow: var(--tertiary) 5px 5px 0px 0px;
          transition: transform 0.2s, box-shadow 0.2s; font-family: 'Arimo', sans-serif; margin-top: 8px;
          height: 50px; box-sizing: border-box;
        }
        .form-submit:hover { transform: translate(2px,2px); box-shadow: var(--tertiary) 3px 3px 0px 0px; }

        /* === FEATURES STRIP === */
        .features-strip { background: #fff; padding: 60px 40px; }
        .features-strip-inner {
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; text-align: center;
        }
        .feature-item { padding: 20px; }
        .feature-icon {
          width: 60px; height: 60px; margin: 0 auto 16px;
          background: var(--primary); border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
        }
        .feature-icon svg { width: 28px; height: 28px; }
        .feature-item h4 { font-size: 24px; font-weight: 700; margin-bottom: 8px; }
        .feature-item p { font-size: 15px; color: var(--text); line-height: 1.5; }
        .feature-link { display: inline-block; margin-top: 12px; font-size: 16px; color: var(--primary); font-weight: 500; text-decoration: underline; }

        /* === BUTTONS === */
        .btn {
          display: inline-block; padding: 14px 28px; font-size: 16px;
          font-weight: 700; text-transform: uppercase; cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s; border: none;
          font-family: 'Arimo', sans-serif;
        }
        .btn:hover { transform: translate(2px,2px); }
        .btn-white { background: #fff; color: var(--primary); box-shadow: var(--accent) 5px 5px 0px 0px; }
        .btn-white:hover { box-shadow: var(--accent) 3px 3px 0px 0px; color: var(--primary); }
        .btn-yellow { background: var(--accent); color: var(--secondary); box-shadow: var(--tertiary) 5px 5px 0px 0px; }
        .btn-yellow:hover { box-shadow: var(--tertiary) 3px 3px 0px 0px; color: var(--secondary); }
        .btn-dark { background: var(--secondary); color: #fff; box-shadow: var(--primary) 5px 5px 0px 0px; }
        .btn-dark:hover { box-shadow: var(--primary) 3px 3px 0px 0px; color: #fff; }
        .btn-blue { background: var(--primary); color: #fff; box-shadow: var(--accent) 5px 5px 0px 0px; }
        .btn-blue:hover { box-shadow: var(--accent) 3px 3px 0px 0px; color: #fff; }

        /* === TWO COL CTA === */
        .two-col-cta { display: grid; grid-template-columns: 1fr 1fr; }
        .cta-block { padding: 60px 50px; }
        .cta-block-blue { background: var(--primary); color: #fff; }
        .cta-block-blue h3 { font-size: 40px; font-weight: 700; color: #fff; margin-bottom: 16px; }
        .cta-block-blue p { font-size: 16px; color: rgba(255,255,255,0.85); margin-bottom: 24px; }
        .cta-block-yellow { background: var(--accent); }
        .cta-block-yellow h3 { font-size: 32px; font-weight: 700; margin-bottom: 16px; }
        .cta-block-yellow p { font-size: 16px; margin-bottom: 24px; line-height: 1.6; }

        /* === DECISION SECTION === */
        .decision-section { background: var(--alternate); padding: 60px 40px; }
        .decision-inner {
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start;
        }
        .decision-left h3 { font-size: 48px; font-weight: 700; margin-bottom: 16px; line-height: 1.1; }
        .decision-left p { font-size: 16px; color: var(--text); margin-bottom: 16px; line-height: 1.6; }
        .decision-form { background: #fff; padding: 32px; box-shadow: 0 2px 12px rgba(0,0,0,0.08); }
        .decision-form .form-group input,
        .decision-form .form-group select {
          background: #fff; color: var(--secondary); border: 2px solid var(--alternate);
        }
        .decision-form .form-group input:focus,
        .decision-form .form-group select:focus { border-color: var(--primary); }
        .decision-form .form-group label { color: var(--text); }

        /* === REASONS === */
        .reasons-section { padding: 80px 40px; background: #fff; }
        .reasons-inner { max-width: 1200px; margin: 0 auto; }
        .reasons-inner > h3 { font-size: 36px; font-weight: 700; text-align: center; margin-bottom: 48px; }
        .reasons-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
        .reason-card { position: relative; overflow: hidden; aspect-ratio: 1; }
        .reason-card img { width: 100%; height: 100%; object-fit: cover; }
        .reason-card-overlay {
          position: absolute; bottom: 0; left: 0; right: 0; padding: 20px;
          background: linear-gradient(transparent, rgba(0,0,0,0.7)); color: #fff;
        }
        .reason-card-overlay h4 { font-size: 18px; font-weight: 700; color: #fff; }

        /* === QUESTIONS === */
        .questions-section { padding: 60px 40px; background: var(--pink); text-align: center; }
        .questions-inner { max-width: 800px; margin: 0 auto; }
        .questions-inner h3 { font-size: 40px; font-weight: 700; margin-bottom: 16px; }
        .questions-inner > p { font-size: 18px; margin-bottom: 24px; }
        .questions-inner > p a { color: var(--primary); font-weight: 600; text-decoration: underline; }
        .questions-btn { margin-bottom: 40px; }
        .icon-row { display: flex; justify-content: center; gap: 48px; flex-wrap: wrap; }
        .icon-item { display: flex; flex-direction: column; align-items: center; gap: 8px; }
        .icon-item-box {
          width: 64px; height: 64px; background: var(--primary);
          display: flex; align-items: center; justify-content: center; border-radius: 4px;
        }
        .icon-item-box svg { width: 30px; height: 30px; }
        .icon-item span { font-size: 13px; color: var(--text); text-align: center; max-width: 100px; }

        /* === FOOTER === */
        .site-footer { background: var(--secondary); color: #e3e3db; padding: 60px 40px 40px; }
        .footer-inner { max-width: 1200px; margin: 0 auto; }
        .footer-logo { text-align: center; margin-bottom: 40px; }
        .footer-logo-text { font-family: 'Bitter', serif; font-size: 28px; color: #fff; }
        .footer-logo-text span { font-weight: 400; }
        .footer-logo-text strong { font-weight: 700; }
        .footer-cols { display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; margin-bottom: 40px; text-align: center; }
        .footer-col h3 { font-size: 18px; font-weight: 700; color: #fff; margin-bottom: 16px; }
        .footer-col ul li { margin-bottom: 8px; }
        .footer-col ul li a { font-size: 14px; color: #e3e3db; transition: color 0.2s; text-decoration: underline; }
        .footer-col ul li a:hover { color: var(--tertiary); }
        .footer-col p { font-size: 14px; color: #e3e3db; line-height: 1.5; }
        .footer-disclaimer {
          border-top: 1px solid rgba(255,255,255,0.15); padding-top: 30px; text-align: center;
        }
        .footer-disclaimer h4 { font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 12px; }
        .footer-disclaimer p {
          font-size: 12px; color: rgba(227,227,219,0.7); line-height: 1.6;
          max-width: 900px; margin: 0 auto 12px;
        }
        .footer-copyright { text-align: center; font-size: 13px; color: rgba(227,227,219,0.6); margin-top: 20px; }

        /* === RESPONSIVE === */
        @media (max-width: 1024px) {
          .hero-inner { grid-template-columns: 1fr; }
          .hero-bg-blue { display: none; }
          .calc-form { max-width: 500px; }
          .two-col-cta { grid-template-columns: 1fr; }
          .reasons-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .nav-links { display: none; }
          .hamburger { display: flex; }
          .site-nav { padding: 0 20px; }
          .nav-inner { height: 64px; }
          .hero-inner { padding: 30px 20px 0; gap: 24px; }
          .hero-tagline { padding: 30px 20px 40px; }
          .hero-tagline h1 { font-size: 36px; }
          .features-strip { padding: 40px 20px; }
          .features-strip-inner { grid-template-columns: 1fr; gap: 24px; }
          .decision-inner { grid-template-columns: 1fr; gap: 32px; }
          .decision-left h3 { font-size: 36px; }
          .decision-section { padding: 40px 20px; }
          .cta-block { padding: 40px 24px; }
          .cta-block-blue h3 { font-size: 30px; }
          .cta-block-yellow h3 { font-size: 26px; }
          .footer-cols { grid-template-columns: repeat(2, 1fr); gap: 24px; }
          .reasons-section { padding: 48px 20px; }
          .questions-section { padding: 48px 20px; }
        }
        @media (max-width: 480px) {
          .hero-tagline h1 { font-size: 28px; }
          .decision-left h3 { font-size: 28px; }
          .reasons-grid { grid-template-columns: 1fr; }
          .footer-cols { grid-template-columns: 1fr; }
          .icon-row { gap: 24px; }
          .btn { width: 100%; text-align: center; }
          .reasons-inner > h3 { font-size: 28px; }
          .questions-inner h3 { font-size: 28px; }
        }
      `}</style>

      {/* Warning Banner */}
      <div className="warning-banner">
        Warning: Late repayment can cause you serious money problems | For help, go to{' '}
        <a href="https://www.moneyhelper.org.uk/en" target="_blank" rel="noopener noreferrer">
          https://www.moneyhelper.org.uk/en
        </a>{' '}
        | We are a credit broker not a lender.
      </div>

      {/* Navigation */}
      <header className="site-nav">
        <nav className="nav-inner" aria-label="Main navigation">
          <a href="/" className="nav-logo" aria-label="The Perfect Loans homepage">
            <img src="/images/logo.png" alt="The Perfect Loans" loading="eager" style={{ height: 70 }} />
          </a>
          <ul className="nav-links" role="list">
            <li><a href="/">Home</a></li>
            <li><a href="/how-it-works">How It Works?</a></li>
            <li>
              <a href="#" className="nav-dropdown-trigger">Important</a>
              <ul className="nav-dropdown" role="list">
                <li><a href="/terms-conditions">Terms &amp; Conditions</a></li>
                <li><a href="/consumer-treating-fair-policy">Consumer Treating Fair Policy</a></li>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/complaints-policy">Complaints Policy</a></li>
                <li><a href="/modern-slavery">Modern Slavery</a></li>
                <li><a href="/opt-out">Opt Out</a></li>
              </ul>
            </li>
            <li><a href="/contacts">Contacts</a></li>
          </ul>
          <a href="/apply-now" className="nav-cta">GET A DECISION</a>
          <button className="hamburger" aria-label="Open menu">
            <span></span><span></span><span></span>
          </button>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-bg-blue"></div>
          <div className="hero-inner">
            <div className="hero-left">
              <div className="hero-visual">
                <h1 className="hero-overlay-text" id="hero-heading">Hassle-free financial services <span>when you need them most</span></h1>
                <img className="hero-woman" src="/images/hero-section.png" alt="Hassle-free financial services for everyone" loading="eager" />
              </div>
            </div>
            <div className="calc-form">
              <h3>Calculate your loan</h3>
              <div className="form-group">
                <label htmlFor="fullname">Name</label>
                <input type="text" id="fullname" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" placeholder="john@doe.com" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" placeholder="" />
              </div>
              <div className="form-group">
                <label htmlFor="loan-type">Type of Loan *</label>
                <select id="loan-type">
                  <option value="">Select option</option>
                  <option value="utility">Utility Bill</option>
                  <option value="rent">Rent or Mortgage</option>
                  <option value="debt">Debt Consolidation</option>
                  <option value="income">Temporary Income Reduction</option>
                  <option value="vehicle">Vehicle</option>
                  <option value="occasion">Special Occasion</option>
                  <option value="household">Household Good</option>
                  <option value="home">Home Improvement</option>
                  <option value="emergency">Emergency</option>
                  <option value="living">Living Expense</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="amount">Amount of money (£) *</label>
                <input type="number" id="amount" placeholder="100" />
              </div>
              <button type="button" className="form-submit">GET YOUR FUNDS TODAY!</button>
            </div>
          </div>
        </section>

        {/* Features Strip */}
        <div className="features-strip">
          <div className="features-strip-inner">
            <div className="feature-item">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#fff" stroke="none"/></svg>
              </div>
              <h4>Where ever you are</h4>
              <p>Easily request up to £1000 using our online application</p>
              <a href="/how-it-works" className="feature-link">How it works?</a>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0013 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" fill="#fff" stroke="none"/></svg>
              </div>
              <h4>Instant Decision</h4>
              <p>Upon approval, the required funds will be promptly provided</p>
              <a href="/apply-now" className="feature-link">Get the Quote!</a>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" fill="#fff" stroke="none"/></svg>
              </div>
              <h4>It&apos;s Fast and Secure</h4>
              <p>Unlock swift and secure loans from our brokerage website</p>
              <a href="/privacy-policy" className="feature-link">Read our policies</a>
            </div>
          </div>
        </div>

        {/* Two Column CTA */}
        <div className="two-col-cta">
          <div className="cta-block cta-block-blue">
            <h3>Get a Decision Today</h3>
            <p>Follow this easy steps to get an instant decision</p>
            <a href="/how-it-works" className="btn btn-white">How it works?</a>
          </div>
          <div className="cta-block cta-block-yellow">
            <h3>Fill in an application form on our website</h3>
            <p>Make a request on our website and wait for response to e-mail within 15-30 minutes from the time of application during business hours.</p>
            <a href="/apply-now" className="btn btn-dark">APPLY NOW</a>
          </div>
        </div>

        {/* Decision Section */}
        <div className="decision-section">
          <div className="decision-inner">
            <div className="decision-left">
              <h3>Get a Decision Today!</h3>
              <p>What do I need to get succeed?</p>
              <p>Make a request on our website and wait for response to e-mail within 15-30 minutes from the time of application during business hours.</p>
              <div style={{ marginTop: 24 }}>
                <a href="/apply-now" className="btn btn-yellow">GET YOUR FUNDS TODAY!</a>
              </div>
            </div>
            <div className="decision-form">
              <h3 style={{ fontSize: 24, marginBottom: 20, color: 'var(--secondary)' }}>Get Your Quote</h3>
              <div className="form-group">
                <label htmlFor="q-name">Full Name</label>
                <input type="text" id="q-name" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label htmlFor="q-email">E-mail</label>
                <input type="email" id="q-email" placeholder="john@doe.com" />
              </div>
              <div className="form-group">
                <label htmlFor="q-phone">Phone</label>
                <input type="tel" id="q-phone" placeholder="+44 000 000 0000" />
              </div>
              <div className="form-group">
                <label htmlFor="q-amount">Amount (£)</label>
                <input type="number" id="q-amount" placeholder="1000" />
              </div>
              <button type="button" className="form-submit" style={{ background: 'var(--primary)', color: '#fff', boxShadow: 'var(--accent) 5px 5px 0px 0px' }}>
                GET YOUR FUNDS TODAY!
              </button>
            </div>
          </div>
        </div>

        {/* Popular Reasons to Loan */}
        <div className="reasons-section">
          <div className="reasons-inner">
            <h3>Popular Reasons to Loan</h3>
            <div className="reasons-grid">
              <div className="reason-card">
                <img src="/images/1.png" alt="Family education and living expenses" loading="lazy" />
                <div className="reason-card-overlay"><h4>Living Expenses</h4></div>
              </div>
              <div className="reason-card">
                <img src="/images/2.png" alt="Household needs and family finance" loading="lazy" />
                <div className="reason-card-overlay"><h4>Household Fund</h4></div>
              </div>
              <div className="reason-card">
                <img src="/images/3.png" alt="Auto and car finance loans" loading="lazy" />
                <div className="reason-card-overlay"><h4>Auto &amp; Car Finance</h4></div>
              </div>
              <div className="reason-card">
                <img src="/images/4.png" alt="Home renovation and improvement loans" loading="lazy" />
                <div className="reason-card-overlay"><h4>Civil Service</h4></div>
              </div>
            </div>
          </div>
        </div>

        {/* Questions */}
        <div className="questions-section">
          <div className="questions-inner">
            <h3>Questions?</h3>
            <p>Email Us: <a href="mailto:info@theperfectloans.com">info@theperfectloans.com</a></p>
            <div className="questions-btn">
              <a href="/apply-now" className="btn btn-dark">APPLY NOW</a>
            </div>
            <div className="icon-row">
              <div className="icon-item">
                <div className="icon-item-box">
                  <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#fff" stroke="none"/></svg>
                </div>
                <span>Living Expenses</span>
              </div>
              <div className="icon-item">
                <div className="icon-item-box">
                  <svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="#fff" stroke="none"/></svg>
                </div>
                <span>Household Fund</span>
              </div>
              <div className="icon-item">
                <div className="icon-item-box">
                  <svg viewBox="0 0 24 24"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" fill="#fff" stroke="none"/></svg>
                </div>
                <span>Auto &amp; Car Finance</span>
              </div>
              <div className="icon-item">
                <div className="icon-item-box">
                  <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" fill="#fff" stroke="none"/></svg>
                </div>
                <span>Civil Service</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="site-footer" aria-label="Site footer">
        <div className="footer-inner">
          <div className="footer-logo">
            <div className="footer-logo-text">
              <span>The Perfect </span><strong>Loans</strong>
            </div>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <h3>Contact Us</h3>
              <p>27 Old Gloucester Street, WC1N 3AX, London, England</p>
              <p style={{ marginTop: 8 }}><a href="tel:+441202037367">+44-120-203-7367</a></p>
              <p style={{ marginTop: 4 }}><a href="mailto:info@theperfectloans.com">info@theperfectloans.com</a></p>
            </div>
            <div className="footer-col">
              <h3>Legal</h3>
              <ul role="list">
                <li><a href="/modern-slavery">Modern Slavery</a></li>
                <li><a href="/terms-conditions">Terms &amp; Conditions</a></li>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Policies</h3>
              <ul role="list">
                <li><a href="/consumer-treating-fair-policy">Consumer Treating Fair Policy</a></li>
                <li><a href="/complaints-policy">Complaint Policy</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Information</h3>
              <ul role="list">
                <li><a href="/opt-out">Opt-Out</a></li>
                <li><a href="/how-it-works">How it Works</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-disclaimer">
            <h4>Representative APR: 79.5% (variable)</h4>
            <p>
              Rates from 12.9% APR to 1721% APR. The minimum Loan Term is 1 month. The maximum Loan Term is 36 months.
              Representative Example: £1,000 borrowed for 18 months. Repayment of 17 Months at £87.22 and final repayment of £87.70.
              The total amount repayable is £1570.44. Interest amounts to £570.44, with an annual interest rate of 59.97%.
            </p>
            <p>Please read the terms and conditions of your loan agreement before applying.</p>
            <p>
              *Subject to lender&apos;s requirements and approval. Cash within 60 minutes is available but is dependent on if your bank accepts faster payments.
              If not, cash could take 24 to 48 to arrive.
            </p>
            <p style={{ marginTop: 16 }}>
              The Perfect Loans is a trading style of Cobain Digital Ltd and is entered on the Financial Services Register under reference number: 770276.
              Cobain Digital Ltd is authorised and regulated by the Financial Conduct Authority and is entered on the Financial Services Register under reference number: 713027.
            </p>
          </div>
          <div className="footer-copyright">
            ©2026 - All Rights Reserved - The Perfect Loans
          </div>
        </div>
      </footer>
    </>
  )
}
