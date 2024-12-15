import { Routes, Route } from "react-router-dom";
import { Home, Explore, Saved, CreatePost, Profile, EditPost, PostDetails, UpdateProfile, AllUsers } from "@/_root/pages";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import SignupForm from "@/_auth/forms/SignupForm";
import SigninForm from "@/_auth/forms/SigninForm";
import ForgotPasswordPage from "@/_auth/forms/ForgotPasswordPage"; // Import the new component
import { Toaster } from "@/components/ui/toaster";

import "./globals.css";
import GenderSelection from "./components/shared/GenderSelection";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} /> {/* Add the new route */}
        </Route>

        {/* Gender-based routing after authentication */}
        <Route element={<RootLayout />}>
          <Route path="/male" element={<Home />} /> {/* You can replace Home with a specific MalePage */}
          <Route path="/female" element={<Home />} /> {/* You can replace Home with a specific FemalePage */}
        </Route>

        {/* private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:id" element={<EditPost />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/profile/:id/*" element={<Profile />} />
          <Route path="/update-profile/:id" element={<UpdateProfile />} />
          <Route path="select-gender" element={<GenderSelection />} />
        </Route>
      </Routes>

      <Toaster />
    </main>
  );
};

export default App;