import {
  handleAuth,
  handleLogin,
  handleLogout,
  handleCallback,
  // NextAppRouterHandler,
  // AppRouteHandlerFnContext,
  // HandlerError,
} from "@auth0/nextjs-auth0";
// import { NextApiRequest, NextApiResponse } from "next";
// import { NextRequest, NextResponse } from "next/server";

export const GET = handleAuth({
  login: handleLogin({
    returnTo: "/profile",
  }),
  signup: handleLogin({
    authorizationParams: {
      screen_hint: "signup",
      // always prompt for login
      prompt: "login",
    },
    returnTo: "/profile",
  }),
  logout: handleLogout({
    returnTo: "/",
  }),
  callback: handleCallback({
    redirectUri: "http://localhost:3000/profile",
  }),
  // callback: async (req: any, ctx: any) => {
  //   const url = new URL(req.url || "");
  //   const errorDescription = url.searchParams.get("error_description");

  //   let afterCallback = process.env.AUTH0_BASE_URL;
  //   try {
  //     if (errorDescription === "Please verify your email before logging in.") {
  //       // redirect user to the email verification page
  //       afterCallback = `${process.env.AUTH0_BASE_GRADLE_URL}/verify-email`;

  //       return NextResponse.redirect(afterCallback);
  //     }
  //     if (errorDescription === "User did not authorize the request") {
  //       // redirect user to the email verification page
  //       afterCallback = `${process.env.AUTH0_BASE_URL}/`;

  //       return NextResponse.redirect(
  //         afterCallback +
  //           "?error_description=User did not authorize the request"
  //       );
  //     }

  //     // return NextResponse.redirect(afterCallback || "/");
  //     return await handleCallback(req, ctx, {
  //       redirectUri: afterCallback,
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // },
});
