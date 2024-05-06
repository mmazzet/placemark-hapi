export const donationsController = {
  index: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      return h.view("Flea Markets", { title: "Make a Donation", user: loggedInUser });
    },
  },
};