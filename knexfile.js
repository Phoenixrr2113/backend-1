module.exports = {
  development: {
    client: "sqlite3",
    connection: { filename: "./database/auth.db3" },
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations",
      tableName: "dbmigrations"
    },
    seeds: { directory: "./database/seeds" }
  },
  testing: {
    client: "sqlite3",
    connection: {
      filename: "./data/test.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },
  production: {
    client: "pg",
    connection: prodDbConnection,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};

//new relic
// "use strict";
// /**
//  * New Relic agent configuration.
//  *
//  * See lib/config/default.js in the agent distribution for a more complete
//  * description of configuration variables and their potential values.
//  */
// exports.config = {
//   /**
//    * Array of application names.
//    */
//   app_name: ["Best friend Reminders"],
//   /**
//    * Your New Relic license key.
//    */
//   license_key: "ff9d6b29d24a6f0a4790bac762db3e8c23929fa5",
//   logging: {
//     /**
//      * Level at which to log. 'trace' is most useful to New Relic when diagnosing
//      * issues with the agent, 'info' and higher will impose the least overhead on
//      * production applications.
//      */
//     level: "info"
//   },
//   /**
//    * When true, all request headers except for those listed in attributes.exclude
//    * will be captured for all traces, unless otherwise specified in a destination's
//    * attributes include/exclude lists.
//    */
//   allow_all_headers: true,
//   attributes: {
//     /**
//      * Prefix of attributes to exclude from all destinations. Allows * as wildcard
//      * at end.
//      *
//      * NOTE: If excluding headers, they must be in camelCase form to be filtered.
//      *
//      * @env NEW_RELIC_ATTRIBUTES_EXCLUDE
//      */
//     exclude: [
//       "request.headers.cookie",
//       "request.headers.authorization",
//       "request.headers.proxyAuthorization",
//       "request.headers.setCookie*",
//       "request.headers.x*",
//       "response.headers.cookie",
//       "response.headers.authorization",
//       "response.headers.proxyAuthorization",
//       "response.headers.setCookie*",
//       "response.headers.x*"
//     ]
//   }
// };
