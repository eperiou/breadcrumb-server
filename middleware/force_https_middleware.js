// 'use strict';

// const Nodal = require('nodal');

/* Forces HTTPS */

class ForceHTTPSMiddleware {

  exec(controller, callback) {
    const headers = controller._requestHeaders;
    const host = headers.host || '';

    if (Object.prototype.hasOwnProperty.call(headers, 'x-forwarded-proto') &&
        headers['x-forwarded-proto'] !== 'https') {
      controller.redirect(`https://${host}${controller._path}`);
      return;
    }
    callback(null);
  }

}

module.exports = ForceHTTPSMiddleware;
