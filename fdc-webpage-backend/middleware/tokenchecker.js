const jwt = require('jsonwebtoken');
const db = require('../database/database');
const authService = require('../services/auth-service');
const routerAuths = require('../config/router-authentication.json');
const util = require('util');
const error = { 'error': true, 'message': 'Unauthorized access.' };
const log = require('../services/log-service');

const configService = require('../services/config-service');

function isUrlConfigured(configuredRouterAuthz, request) {
  return configuredRouterAuthz.some(rAuth =>
    new RegExp(rAuth.url, 'i').test(request.originalUrl)
    && rAuth.method.some(meth => new RegExp(meth, 'i').test(request.method))
  );
}

module.exports = (req, res, next) => {
  if (isUrlConfigured(routerAuths.ANONYMOUS, req)) {
    // URL is valid for anonymous access - no further checking required
    next();
    return;
  }

  const token = req.body.token || req.query.token || req.headers['x-access-token'];

  if (token) {
    jwt.verify(token, configService.getConfigValue(['secret']), (err, decoded) => {
      if (err) {
        // Token is not valid or expired - abort
        return res.status(401).send(error);
      }
      if (decoded.serverSessionId !== authService.randomSessionId) {
        // Token is from old session - abort
        return res.status(423).send(error);
      }
      const user = db.getUser(decoded.username);
      if (!user) {
        return res.status(403).send(error);
      } else {
        if (!isUrlConfigured(routerAuths.AUTHORIZED, req)
          && !isUrlConfigured(routerAuths[user.role], req)) {
          // No valid route for users role found - abort
          return res.status(403).send(error);
        }
        if (configService.getConfigValue(['user', 'requirePasswordChange']) && !user.password_changed && req.originalUrl !== 'change-password') {
          // User needs to change password before - abort
          return res.status(401).send({ 'error': true, 'message': 'Password change needed' });
        }
      }
      req.decoded = decoded;
      next();
    });
  } else {
    // not token, no access (anonymous access was already tested before)
    return res.status(403).send(error);
  }
}