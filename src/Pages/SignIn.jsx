import { useEffect, useMemo, useState } from "react";
import Form from "../components/Form/Form";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
    const [parentData, setParentData] = useState({});
    const [errorMsg, setErrorMsg] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const email = parentData?.email;
    const password = parentData?.password;

    const isEmailValid = useMemo(() => {
        if (!email) return false;
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());
    }, [email]);

    useEffect(() => {
        if (errorMsg) setErrorMsg("");
    }, [email, password]);

    useEffect(() => {
        if (isSubmitting) return;
        if (!email || !password) return;

        if (!isEmailValid) {
            setErrorMsg("Please enter a valid email.");
            return;
        }
        if (!String(password).trim()) {
            setErrorMsg("Password is required.");
            return;
        }

        setIsSubmitting(true);

        fetch("https://vica.website/api/task-login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({ email, password }),
        })
            .then(async (res) => {
                const data = await res.json().catch(() => ({}));

                if (!res.ok) {
                    const msg = data?.message || data?.error || "Login failed. Please try again.";
                    throw new Error(msg);
                }

                if (!data?.token || !data?.user) {
                    throw new Error("Login failed. Account not found.");
                }

                localStorage.setItem("token", `Bearer ${data.token}`);
                localStorage.setItem("user", JSON.stringify(data.user));
                navigate("/dashboard");
            })
            .catch((err) => {
                setErrorMsg(err?.message || "Login failed. Please try again.");
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    }, [email, password, isEmailValid, navigate, isSubmitting]);

    const inputs = [
        {
            htmlFor: "email",
            label: "Email",
            placeholder: "Email",
            type: "email",
            name: "email",
            id: "email",
        },
        {
            htmlFor: "password",
            label: "password",
            placeholder: "*********",
            type: "password",
            name: "password",
            id: "password",
        },
    ];

    return (
        <div className="bg-[url(/assets/img/authbg.jpg)] h-screen bg-no-repeat bg-cover flex justify-center items-center">
            <div className="w-full max-w-md px-4">
                <Form
                    title={"Sign In"}
                    subTitle={"Please enter your email and password to continue"}
                    inputs={inputs}
                    submit={"Sign In"}
                    link={{
                        content: "Don’t have an account?",
                        url: "/",
                        linkContent: "Sign up",
                    }}
                    setParentData={setParentData}
                    style={true}
                ></Form>

                {errorMsg && (
                    <p className="text-red-600 text-sm mt-3 font-semibold" role="alert">
                        {errorMsg}
                    </p>
                )}

                {isSubmitting && !errorMsg && (
                    <p className="text-text text-sm mt-3 font-semibold opacity-80">
                        Signing in...
                    </p>
                )}
            </div>
        </div>
    );
}

