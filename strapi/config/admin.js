module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2b3566dfe57220d6012169ddc8970511'),
  },
});
