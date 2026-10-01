// Redirects the old WordPress pages on realikechukwu.com to the new digest site.
const SUBSCRIBE_FORM = "https://docs.google.com/forms/d/e/1FAIpQLSdThTnxH5-wjgQR6F3JDZLqCyXfXtE5Kd8PmoVEnwBED5wOPw/viewform";

export default {
  fetch(request) {
    const { pathname } = new URL(request.url);
    if (pathname.startsWith("/cardiology-digest/subscribe")) {
      return Response.redirect(SUBSCRIBE_FORM, 301);
    }
    return Response.redirect("https://digest.realikechukwu.com/", 301);
  },
};
