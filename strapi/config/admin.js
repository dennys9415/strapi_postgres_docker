module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '29e0a84f6fcfbae87b7b7f0e0966b6c3'),
  },
});
