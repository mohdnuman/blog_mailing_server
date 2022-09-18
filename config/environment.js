// const development = {
//   name: "development",
//   db: "blog_db",
//   smtp: {
//     host: "smtpout.secureserver.net",
//     port: 465,
//     secure: true,
//     auth: {
//       user: "me@mohdnuman.in",
//       pass: "Mohd@numan786",
//     },
//   },
// };

const development = {
  name: "development",
  db: "blog_db",
  smtp: {
    service: "hotmail",
    auth: {
        user: "ethhodler@outlook.com",
        pass: "Mohd@numan786"
    }

  },
};

const production = {
  name: "production",
  db: process.env.CODEIAL_DB,
  smtp: {
    host: "smtpout.secureserver.net",
    port: 465,
    secure: true,
    auth: {
      user: process.env.CODEIAL_SMTP_USER,
      pass: process.env.CODEIAL_SMTP_PASS,
    },
  },
};

module.exports =
  eval(process.env.CODEIAL_ENVIRONMENT) == undefined
    ? development
    : eval(process.env.CODEIAL_ENVIRONMENT);
