import express from 'express';

const app = express();

app.get('/', (_request, response) => {
  const version = process.env.APP_VERSION ?? 'development';

  response.type('html').send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>CI/CD Lab</title>

  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: Inter, Arial, sans-serif;
      background: #f4f7fb;
      color: #172033;
      min-height: 100vh;
    }

    .navbar {
      background: #101828;
      color: white;
      padding: 18px 6%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
      font-weight: 700;
      font-size: 18px;
    }

    .brand-icon {
      width: 36px;
      height: 36px;
      border-radius: 9px;
      background: #2563eb;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
    }

    .status {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;
      color: #d1fae5;
    }

    .status-dot {
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background: #22c55e;
    }

    .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 70px 24px;
    }

    .hero {
      text-align: center;
      margin-bottom: 55px;
    }

    .badge {
      display: inline-block;
      background: #e8f0ff;
      color: #2563eb;
      padding: 7px 14px;
      border-radius: 999px;
      font-size: 13px;
      font-weight: 600;
      margin-bottom: 18px;
    }

    .hero h1 {
      font-size: 46px;
      line-height: 1.15;
      margin-bottom: 16px;
      letter-spacing: -1.5px;
    }

    .hero h1 span {
      color: #2563eb;
    }

    .hero p {
      color: #667085;
      font-size: 17px;
      max-width: 650px;
      margin: 0 auto;
      line-height: 1.7;
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      margin-bottom: 35px;
    }

    .card {
      background: white;
      border: 1px solid #e4e7ec;
      border-radius: 16px;
      padding: 26px;
      box-shadow: 0 4px 18px rgba(16, 24, 40, 0.05);
    }

    .card-icon {
      width: 44px;
      height: 44px;
      border-radius: 11px;
      background: #eff4ff;
      color: #2563eb;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      margin-bottom: 18px;
    }

    .card h3 {
      font-size: 16px;
      margin-bottom: 8px;
    }

    .card p {
      color: #667085;
      font-size: 14px;
      line-height: 1.6;
    }

    .version-card {
      background: #101828;
      color: white;
      border-radius: 16px;
      padding: 28px 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .version-card h3 {
      font-size: 15px;
      margin-bottom: 7px;
      color: #d0d5dd;
    }

    .version {
      font-size: 24px;
      font-weight: 700;
    }

    .version-label {
      background: #1d2939;
      border: 1px solid #344054;
      padding: 9px 15px;
      border-radius: 8px;
      font-size: 13px;
      color: #d0d5dd;
    }

    .footer {
      text-align: center;
      margin-top: 60px;
      color: #98a2b3;
      font-size: 13px;
    }

    @media (max-width: 768px) {
      .hero h1 {
        font-size: 36px;
      }

      .cards {
        grid-template-columns: 1fr;
      }

      .version-card {
        flex-direction: column;
        align-items: flex-start;
        gap: 18px;
      }

      .navbar {
        padding: 16px 24px;
      }
    }
  </style>
</head>

<body>

  <nav class="navbar">
    <div class="brand">
      <div class="brand-icon">C</div>
      CI/CD Lab
    </div>

    <div class="status">
      <span class="status-dot"></span>
      Application Online
    </div>
  </nav>

  <main class="container">

    <section class="hero">
      <div class="badge">CI/CD PIPELINE</div>

      <h1>
        Welcome to your <span>CI/CD Lab</span>
      </h1>

      <p>
        A simple deployment environment for testing automated builds,
        continuous integration, continuous delivery and application releases.
      </p>
    </section>

    <section class="cards">

      <div class="card">
        <div class="card-icon">✓</div>

        <h3>Application Status</h3>

        <p>
          The Express application is running successfully and responding to
          incoming requests.
        </p>
      </div>

      <div class="card">
        <div class="card-icon">⚡</div>

        <h3>CI/CD Ready</h3>

        <p>
          This application can be connected to your Git repository and
          automated deployment pipeline.
        </p>
      </div>

      <div class="card">
        <div class="card-icon">API</div>

        <h3>Health API</h3>

        <p>
          Monitor application availability using the built-in health and
          version endpoints.
        </p>
      </div>

    </section>

    <section class="version-card">

      <div>
        <h3>Current Application Version</h3>
        <div class="version">${version}</div>
      </div>

      <div class="version-label">
        Environment: ${process.env.NODE_ENV ?? 'development'}
      </div>

    </section>

    <div class="footer">
      CI/CD Lab &nbsp;•&nbsp; Express Application
    </div>

  </main>

</body>
</html>
  `);
});

app.get('/api/health', (_request, response) => {
  response.json({
    status: 'ok',
  });
});

app.get('/api/version', (_request, response) => {
  response.json({
    version: process.env.APP_VERSION ?? 'development',
  });
});

export default app;