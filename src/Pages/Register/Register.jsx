import { Button, FileInput, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const handleGoHome = () => {
        navigate("/")
    }
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const imageFile = { pic: data?.pic[0] }
        console.log(imageFile);
        console.log(data);
    }
    return (
        <div>
            <Button onClick={handleGoHome} className="mx-2 my-2" color="failure">Home</Button>
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
                    <Button type="submit">Register new account</Button>
                </form>
            </div>
        </div>
    );
};

export default Register;