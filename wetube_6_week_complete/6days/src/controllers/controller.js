export const homeController = (req, res) => {
  res.render("home");
};

export const loginController = (req, res) => {
  res.render("login");
};

export const photosController = (res, req) => {
  res.render("photos");
};

export const profileController = (req, res) => {
  res.render("profile");
};
