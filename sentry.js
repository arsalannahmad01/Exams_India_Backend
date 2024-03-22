const Sentry = require('@sentry/node')

Sentry.init({
  dsn: process.env.SENTRY_URL,
  tracesSampleRate: 1,
  environment: process.env.APP_ENV,
});

module.exports = Sentry;