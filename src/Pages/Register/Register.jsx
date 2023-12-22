import { Button, FileInput, Label, TextInput } from "flowbite-react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiousPublic from "../../Hooks/useAxiousPublic";
import Swal from "sweetalert2";
import { getAuth, updateProfile } from "firebase/auth";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
  const auth = getAuth();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const authHook = useAuth();
  const axiousPublic = useAxiousPublic();
  const [createUserWithPassword, setCreateUserWithPassword] = useState(null);

  useEffect(() => {
    // Wait for useAuth() to resolve before attempting to destructure
    if (authHook) {
      setCreateUserWithPassword(authHook.createUserWithPassword);
    }
  }, [authHook]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const img_hosting_key = import.meta.env.VITE_IMG_HOSTING_KEY;
      const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

      const imageFile = { image: register("pic")[0] };
      const res = await axiousPublic.post(img_hosting_api, imageFile, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      });

      if (createUserWithPassword) {
        await createUserWithPassword(data.email, data.password);
      } else {
        // Handle the case where createUserWithPassword is not available
        console.error('createUserWithPassword is not available.');
        return;
      }

      updateProfile(auth.currentUser, {
        displayName: data.name,
      });

      const userInfo = {
        name: data.name,
        email: data.email,
        pic: res.data.data.display_url,
      };

      const registrationResult = await axiousPublic.post("/users", userInfo);

      if (registrationResult.data.insertedId) {
        navigate(location?.state ? location.state : "/");
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'User created successfully.',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error('Error during registration:', error);
      Swal.fire({
        icon: 'error',
        title: 'Registration Error',
        text: 'There was an error during registration. Please try again later.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button onClick={() => navigate("/")} className="mx-2 my-2" color="failure">
        Home
      </Button>
      <div className="flex justify-center items-center min-h-screen">
        <form className="flex max-w-md flex-col md:h-auto gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your Name" />
            </div>
            <TextInput {...register("name", { required: true })} aria-invalid={errors.name ? "true" : "false"} id="name" type="text" placeholder="Enter Your Name" shadow />
            {errors.name && (
              <p role="alert" className="text-red-700">{errors.name?.message || "Name is required"}</p>
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email2" value="Your Email" />
            </div>
            <TextInput {...register("email", { required: true })} id="email2" type="email" placeholder="email@demo.com" shadow />
            {errors.email && (
              <p role="alert" className="text-red-700">{errors.email?.message || "Email is required"}</p>
            )}
          </div>
          <div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="file-upload" value="Upload Photo" />
              </div>
              <FileInput {...register("pic", { required: true })} id="file-upload" />
              {errors.pic && (
                <p role="alert" className="text-red-700">{errors.pic?.message || "Photo is required"}</p>
              )}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Your password" />
            </div>
            <TextInput {...register("password", { required: true })} id="password2" type="password" shadow />
            {errors.password && (
              <p role="alert" className="text-red-700">{errors.password?.message || "Password is required"}</p>
            )}
          </div>
          <Button type="submit">{loading ? 'Registering...' : 'Register new account'}</Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
