'use client';
import { createClient } from "@/utils/supabase/client";
import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const supabase = createClient();

    const handleLogin = async () => {
        //sends entered email and password to supabase
        if(email && password){

            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
                
            });
    
            if(error){ 
                alert("Error: ", error)
                console.log("error: " + error);
            }else {
                console.log("Routing to admin.")
                alert("Success.")
                window.location.href = '/admin';
            }
            console.log("End of handleLogin()")
            console.log("email: ", email);
            console.log("password: ", password);
        }
    };
    const handleGoogleLogin = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                //for selecting accounts
                queryParams: {
                    prompt: 'select_account',
                },
            // This tells Google where to send the user back to in the app
            
            redirectTo: `${window.location.origin}/auth/callback`,
            
            },
        });

        if (error) {
            console.error("Google Login Error:", error.message);
        }
    };

     const [tab, setTab] = useState("Login");
    
      const loginTab = () => {
        setTab("Login");
      }
    
      const registerTab = () => {
        setTab("Register");
      }
    
      /* Eye Icon Log In Toggle Logic */
      const [pwToggleLogin, setPwToggleLogin] = useState(false);
    
      const passwordToggleIconLogin = () => {
        !pwToggleLogin ? setPwToggleLogin(true) : setPwToggleLogin(false);
      }
    
      /* Eye Icon Register Toggle Logic */
      const [pwToggleRegister, setPwToggleRegister] = useState(false);
    
      const passwordToggleIconRegister = () => {
        !pwToggleRegister ? setPwToggleRegister(true) : setPwToggleRegister(false);
      }
    
      /* Login Validation Logic */ 
      

    
      const [errorEmailLogin, setErrorEmailLogin] = useState("");
      const [errorPasswordLogin, setErrorPasswordLogin] = useState("");
    
      const [invalidEmailLogin, setInvalidEmailLogin] = useState(false);
      const [invalidPasswordLogin, setInvalidPasswordLogin] = useState(false);
    
      const [accountNotFound, setAccountNotFound] = useState(false);
      const [errorAccount, setErrorAccount] = useState("");
    
      const validateEmailLogin = (value) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      };
    
      /* Function for Login Submit Button */
      const handleSubmitLogin = () => {
        setErrorEmailLogin("");
        setErrorPasswordLogin("");
        setAccountNotFound(false);
    
        if (email === "") {
          setErrorEmailLogin("Email is required.");
          setInvalidEmailLogin(true);
        } else if (!validateEmailLogin(email)) {
          setErrorEmailLogin("Enter a valid email address.");
          setInvalidEmailLogin(true);
        } else {
          setInvalidEmailLogin(false);
        }
    
        if (password === "") {
          setErrorPasswordLogin("Password is required.");
          setInvalidPasswordLogin(true);
        } else {
          setInvalidPasswordLogin(false);
        }
    
       
        handleLogin();
      };
    
      /* Register Validation Logic */ 
      const [firstNameRegister, setFirstNameRegister] = useState("");
      const [lastNameRegister, setLastNameRegister] = useState("");
      const [emailRegister, setEmailRegister] = useState("");
      const [passwordRegister, setPasswordRegister] = useState("");
      const [confirmPassword, setConfirmPassword] = useState("");
      const [termsAndPrivacy, setTermsAndPrivacy] = useState(false);
    
      const [errorFirstNameRegister, setErrorFirstNameRegister] = useState("");
      const [errorLastNameRegister, setErrorLastNameRegister] = useState("");
      const [errorEmailRegister, setErrorEmailRegister] = useState("");
      const [errorPasswordRegister, setErrorPasswordRegister] = useState("");
      const [errorConfirmPasswordRegister, setErrorConfirmPasswordRegister] = useState("");
      const [errorTermsAndPrivacy, setErrorTermsAndPrivacy] = useState("");
    
      const [validFirstNameRegister, setValidFirstNameRegister] = useState(true);
      const [validLastNameRegister, setValidLastNameRegister] = useState(true);
      const [validEmailRegister, setValidEmailRegister] = useState(true);
      const [validPasswordRegister, setValidPasswordRegister] = useState(true);
      const [validConfirmPassword, setValidConfirmPassword] = useState(true);
    
      const [emailExist, setEmailExist] = useState(false);
    
      const validateEmailRegister= (value) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      };
    
      /* Function for Register Submit Button */
      const handleSubmitRegister = () => {
        setErrorFirstNameRegister("");
        setErrorLastNameRegister("");
        setErrorEmailRegister("");
        setErrorPasswordRegister("");
        setErrorConfirmPasswordRegister("");
        setErrorTermsAndPrivacy("");
        setEmailExist(false);
    
        if (firstNameRegister === "") {
          setErrorFirstNameRegister("First name is required.");
          setValidFirstNameRegister(false);
        } else {
          setValidFirstNameRegister(true);
        }
    
        if (lastNameRegister === "") {
          setErrorLastNameRegister("Last name is required.");
          setValidLastNameRegister(false);
        } else {
          setValidLastNameRegister(true);
        }
    
        if (emailRegister === "") {
          setErrorEmailRegister("Email is required.");
          setValidEmailRegister(false);
        } else if (!validateEmailRegister(emailRegister)) {
          setErrorEmailRegister("Enter a valid email address.");
          setValidEmailRegister(false);
        } else {
          setValidEmailRegister(true);
        }
    
        if (passwordRegister === "") {
          setErrorPasswordRegister("Password is required.");
          setValidPasswordRegister(false);
        } else if (passwordRegister.length < 8) {
          setErrorPasswordRegister("Password must be at least 8 characters.");
          setValidPasswordRegister(false);
        } else {
          setValidPasswordRegister(true);
        }
    
        if (confirmPassword !== passwordRegister) {
          setErrorConfirmPasswordRegister("Passwords do not match.");
          setValidConfirmPassword(false);
        } else {
          setValidConfirmPassword(true);
        }
    
        if(!termsAndPrivacy) {
          setErrorTermsAndPrivacy("You must accept the terms to continue.");
        } 
    
        /* This line is also for testing only (Error Banner & Back End dependent) */
        if (firstNameRegister !== "" && 
            lastNameRegister !== "" && 
            emailRegister !== "" && 
            passwordRegister !== "" && 
            confirmPassword === passwordRegister && 
            termsAndPrivacy) {
              setLoadingRegister(true);
              setDisabledRegister(true);
    
              setTimeout(() => {
                setEmailExist(true);
                setLoadingRegister(false);
                setDisabledRegister(false);
              }, 1500);
        } else {
          setEmailExist(false);
        }
      };
    
      /* Password Strength Bar Logic */
      const [strength, setStrength] = useState({
        widthClass: "w-0",
        colorClass: "",
        text: "",
      });
    
      const updateStrength = (val) => {
        if (!val) {
          setStrength({ widthClass: "w-0", colorClass: "", text: "" });
          return;
        }
    
        let score = 0;
    
        if (val.length >= 8) score++;
        if (/[A-Z]/.test(val)) score++;
        if (/[0-9]/.test(val)) score++;
        if (/[^A-Za-z0-9]/.test(val)) score++;
    
        const levels = [
          { widthClass: "w-1/5", colorClass: "bg-red-600", text: "Weak", textColor: "text-red-600"},
          { widthClass: "w-2/5", colorClass: "bg-orange-500", text: "Fair", textColor: "text-orange-600" },
          { widthClass: "w-3/5", colorClass: "bg-yellow-500", text: "Good", textColor: "text-yellow-600" },
          { widthClass: "w-full", colorClass: "bg-green-600", text: "Strong", textColor: "text-green-600" },
        ];
    
        const level = levels[score - 1] || levels[0];
        setStrength(level);
      };
    
      /* Loading Animation setting for logic*/
      const [loadingLogin, setLoadingLogin] = useState(false);
      const [loadingRegister, setLoadingRegister] = useState(false)
      const [loadingResetPassword, setLoadingResetPassword] = useState(false);
    
      /* Reset Password Logic */
      const [toggleResetPassword, setToggleResetPassword] = useState(false);
    
      const [emailResetPassword, setEmailResetPassword] = useState("");
      const [errorEmailResetPassword, setErrorEmailResetPassword] = useState("");
      const [resetPassword, setResetPassword] = useState(true);
      const [successResetPassword, setSuccessResetPassword] = useState(false);
    
      const [backToLogin, setBackToLogin] = useState(true);
    
      const validateEmailResetPassword = (value) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      };
    
      const toggleResetPasswordForm = () => {
        setToggleResetPassword(true);
        setBackToLogin(false);
      }
    
      const handleResetPassword = () => {
        setErrorEmailResetPassword("");
        setSuccessResetPassword(false);
    
        if (emailResetPassword === "") {
          setResetPassword(false);
          setErrorEmailResetPassword("Email is required.")
        } else if (!validateEmailResetPassword(emailResetPassword)) {
           setResetPassword(false);
           setErrorEmailResetPassword("Enter a valid email address.")
        } else {
          setResetPassword(true);
          setLoadingResetPassword(true);
          setDisabledReset(true);
    
          setTimeout(() => {
            setSuccessResetPassword(true);
            setLoadingResetPassword(false);
            setDisabledReset(false);
          }, 1500);
        }
      }
    
      /* Close Login with Animation Logic */
      const closeLogin = () => {
        setFormAnimation(false);
        setTimeout(() => {
          setToggleForm(false);
        }, 300);
      }
    
      /* To handle submit button properly */
      const [disabledLogin, setDisabledLogin] = useState(false); 
      const [disabledRegister, setDisabledRegister] = useState(false);
      const [disabledReset, setDisabledReset] = useState(false);

      const LEGAL_CONTENT = {
  terms: {
    title: 'Terms of Service',
    icon: `<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>`,
    sections: [
      { title: 'Acceptance of Terms', body: 'By creating an account or using the Maynila Heritage Portal, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please refrain from using the platform.' },
      { title: 'Use of the Platform', body: 'Maynila is a cultural heritage portal dedicated to preserving and celebrating the history, traditions, food, and culture of Manila. You agree to use the platform only for lawful purposes and in a manner consistent with its educational and cultural mission.' },
      { title: 'User Accounts', body: 'You are responsible for maintaining the confidentiality of your account credentials. You agree to provide accurate information when registering and to notify us promptly of any unauthorized use of your account.' },
      { title: 'Community Content', body: 'Photos and content shared through the Community Photos feature must be your own work or content you have permission to share. By uploading content, you grant Maynila a non-exclusive license to display it within the platform.<ul><li>No copyrighted material without permission</li><li>No offensive, harmful, or misleading content</li><li>Content must relate to Manila\'s history or culture</li></ul>' },
      { title: 'Intellectual Property', body: 'All historical content, design elements, and original text on this platform are the property of Maynila Heritage Portal unless otherwise credited. Historical facts and public domain information remain freely attributable.' },
      { title: 'Limitation of Liability', body: 'Maynila is provided "as is" for educational and cultural purposes. While we strive for historical accuracy, we make no warranties regarding the completeness of any information presented.' },
      { title: 'Changes to These Terms', body: 'We may update these Terms of Service from time to time. Continued use of the platform after changes constitutes acceptance of the revised terms.' },
    ]
  },
  privacy: {
    title: 'Privacy Policy',
    icon: `<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>`,
    sections: [
      { title: 'Information We Collect', body: 'When you register for an account, we collect your name, email address, and password (securely hashed). If you sign in with Google, we receive your name and email from your Google account.' },
      { title: 'How We Use Your Information', body: 'We use your information to create and manage your account, personalize your experience, and enable features like saving favorite places and sharing community photos.<ul><li>Account creation and authentication</li><li>Displaying your name on shared content</li><li>Sending optional updates about new heritage content</li></ul>' },
      { title: 'Community Photo Sharing', body: 'Photos you upload to the Community Photos gallery are visible to all visitors of the platform alongside your display name. Please only share photos you are comfortable making public.' },
      { title: 'Data Storage & Security', body: 'We take reasonable measures to protect your personal information from unauthorized access, alteration, or disclosure. Passwords are never stored in plain text.' },
      { title: 'Cookies & Local Storage', body: 'The platform may use local browser storage to remember your preferences, such as your "Remember Me" login setting. We do not use third-party advertising cookies.' },
      { title: 'Third-Party Services', body: 'If you choose to sign in with Google, your authentication is handled by Google\'s Identity Services. We do not receive or store your Google password.' },
      { title: 'Your Rights', body: 'You may request to access, update, or delete your personal data at any time by contacting us through the platform. You may also delete your account, which will remove your personal information from our records.' },
      { title: 'Changes to This Policy', body: 'We may revise this Privacy Policy periodically. We encourage you to review this page occasionally to stay informed of any updates.' },
    ]
  }
};
      
    return (
        <>
            {/* LOGIN MODAL */}
            <div id="login-modal" className={`fixed inset-0 bg-(--ink) flex items-center justify-center p-5`}>
                <div className="flex w-full max-w-215 bg-(--cream) overflow-hidden relative animate-modalSlideIn max-[900px]:max-w-120" id="login-box">
                    {/* Decorative side panel */}
                    <div className="w-70 shrink-0 bg-(--ink) relative overflow-hidden flex items-end px-9 py-10 before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_60%_30%,rgba(139,26,26,0.4)_0%,transparent_60%),radial-gradient(ellipse_at_20%_80%,rgba(201,168,76,0.15)_0%,transparent_50%)] max-[900px]:hidden">
                        <div className="absolute inset-0 opacity-[0.05] bg-[repeating-linear-gradient(45deg,var(--gold)_0,var(--gold)_1px,transparent_0,transparent_50%)] bg-size-[18px_18px]">
                        </div>

                        <div className="relative">
                            <div className="font-['Playfair_Display',serif] text-[72px] font-black text-[rgba(201,168,76,0.12)] leading-none mb-4 absolute bottom-22.5 left-0 right-0 tracking-[-2px]">
                            1258
                            </div>

                            <div className="font-['Playfair_Display',serif] text-[28px] font-bold text-(--gold) leading-[1.15] mb-2.5">
                            Pearl of<br/>the Orient
                            </div>

                            <div className="text-[12px] tracking-[0.15em] uppercase text-white/35">
                            The City of Manila
                            </div>
                        </div>
                    </div>

                    {/* Form panel */}  
                    <div className="flex-1 px-12 py-11 overflow-y-auto relative max-h-[90vh] max-[900px]:p-9 max-[900px]:px-7 max-[900px]:max-h-screen max-[480px]:p-7 max-[480px]:px-5">

                        {/* Tabs */}
                        <div className="flex gap-0 border-b border-black/10 mb-8 max-[480px]:p-7 max-[480px]:px-5 max-[480px]:mb-6">
                            <button className={`bg-transparent border-0 cursor-pointer font-['DM_Sans', serif] text-[14px] font-medium  px-6 pt-2.5 pb-3 tracking-wider border-b-2 border-transparent -mb-px transition-colors duration-200 hover:text-(--ink) ${tab === "Login" ? "text-(--ink) border-b-(--gold)" : "text-(--warm-gray)"}`} id="tab-login" onClick={loginTab}>
                            Log In
                            </button>

                            <button className={`bg-transparent border-0 cursor-pointer font-['DM_Sans', serif] text-[14px] font-medium  px-6 pt-2.5 pb-3 tracking-wider border-b-2 border-transparent -mb-px transition-colors duration-200 hover:text-(--ink) ${tab === "Register" ? "text-(--ink) border-b-(--gold)" : "text-(--warm-gray)"}`} id="tab-register" onClick={registerTab}>
                            Register
                            </button>
                        </div>

                        {/* LOGIN FORM */}
                        <div id="form-login" className={`auth-form ${tab === "Login" && !toggleResetPassword && backToLogin ? "block" : "hidden"}`}>
                            <div className="flex items-center justify-center mb-5">
                                <Image src="/assets/manila_core-logo-noBg.png" alt="manilacore-logo"  width={80} height={80}/>
                            </div>

                            <div className="mb-7 text-center">
                                <h2 className="font-['Playfair_Display',serif] text-[26px] font-bold text-(--ink) mb-1.5 max-[480px]:text-[22px]">
                                    Welcome to Manila Core!
                                </h2>
                            </div>

                            <div className="mb-4.5">
                                <label className="block text-[12px] font-medium tracking-[0.08em] uppercase text-(--ink-mid) mb-2" htmlFor="login-email">
                                    Email address
                                </label>

                                <div className="relative flex items-center">
                                    <svg className="absolute left-3.5 w-4 h-4 text-(--warm-gray) pointer-events-none shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>

                                    <input type="email" id="login-email" className={`w-full px-10.5 py-2.75 border bg-white font-sans text-[14px] text-(--ink) outline-none transition-colors duration-200 focus:border-(--gold) focus:shadow-[0_0_0_3px_rgba(201,168,76,0.12)] placeholder:text-[rgba(140,123,107,0.55)] ${invalidEmailLogin ? "border-[#d63031]" : "border-black/15"}`} placeholder="your@email.com" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                </div>

                                <span className="block text-[12px] text-[#d63031] mt-1.25 min-h-4" id="err-login-email">
                                    {errorEmailLogin}
                                </span>
                            </div>

                            <div className="mb-4.5">
                                <label className="block text-[12px] font-medium tracking-[0.08em] uppercase text-(--ink-mid) mb-2" htmlFor="login-password">
                                    Password
                                </label>

                                <div className="relative flex items-center">
                                    <svg className="absolute left-3.5 w-4 h-4 text-(--warm-gray) pointer-events-none shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>

                                    <input type={pwToggleLogin ? "text" : "password"} id="login-password" className={`w-full px-10.5 py-2.75 border bg-white font-sans text-[14px] text-(--ink) outline-none transition-colors duration-200 focus:border-(--gold) focus:shadow-[0_0_0_3px_rgba(201,168,76,0.12)] placeholder:text-[rgba(140,123,107,0.55)] ${invalidPasswordLogin ? "border-[#d63031]" : "border-black/15"}`} placeholder="Enter your password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)}/> 

                                    <button type="button" className="absolute right-3 bg-transparent border-0 cursor-pointer text-(--warm-gray) p-1 flex items-center transition-colors duration-200 hover:text-(--ink)" tabIndex="-1" onClick={passwordToggleIconLogin}>
                                    <svg className={`${!pwToggleLogin ? "flex" : "hidden"} w-4 h-4`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>

                                    <svg className={`w-4 h-4 ${pwToggleLogin ? "flex" : "hidden"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                                    </button>
                                </div>

                                <span className="block text-[12px] text-[#d63031] mt-1.25 min-h-4" id="err-login-password">
                                    {errorPasswordLogin}
                                </span>
                            </div>

                            <div className="flex justify-between items-center mb-2 max-[480px]:flex-col max-[480px]:items-start max-[480px]:gap-2.5">
                                <label className="flex items-center gap-2 text-[13px] text-(--warm-gray) cursor-pointer">
                                    <input type="checkbox" id="remember-me" className="w-3.75 h-3.75 cursor-pointer accent-(--gold)"/> 

                                    <span>
                                    Remember me
                                    </span>
                                </label>

                                <button type="button" className="bg-transparent border-0 cursor-pointer text-[13px] text-(--gold) font-['DM_Sans', serif] underline underline-offset-2 transition-colors duration-200 hover:text-(--gold-dark)" onClick={toggleResetPasswordForm}>
                                    Forgot password?
                                </button>
                            </div>

                            <div className={`${accountNotFound ? "flex" : "hidden"} text-[13px] text-[#d63031] bg-[rgba(214,48,49,0.08)] border-l-4 border-[#d63031] px-3.5 py-2.5 mb-3.5" id="login-error-banner`}>
                                {errorAccount}
                            </div>

                            <button className="w-full p-3.5 bg-(--gold) border-0 cursor-pointer font-['DM_Sans, serif'] text-[13px] font-medium tracking-[0.12em] uppercase text-(--ink) flex items-center justify-center gap-2 transition-colors duration-200 mt-3 hover:brightness-110 active:scale-[0.98] hover:bg-(--gold-light) hover:-translate-y-px disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none" id="btn-login" onClick={handleSubmitLogin} disabled={disabledLogin}>
                                <span className={`${loadingLogin ? "hidden" : "flex"}`}>
                                    Sign In
                                </span>

                                <span className={`${loadingLogin ? "flex" : "hidden"}`}>
                                    <svg className="animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><path d="M21 12a9 9 0 1 1-6.22-8.56"/></svg>
                                </span>
                            </button>

                            
                            <div className="flex items-center gap-3.5 my-5 text-[12px] text-black/25 tracking-widest before:content-[''] before:flex-1 before:h-px before:bg-black/10 after:content-[''] after:flex-1 after:h-px after:bg-black/10">
                                or sign in with google
                            </div>

                            <button className="w-full px-4 py-3 bg-white border border-black/20 cursor-pointer font-sans text-[14px] font-medium text-[#3c4043] flex items-center justify-center gap-3 transition-colors duration-150 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:bg-[#f8f8f8] hover:shadow-[0_2px_8px_rgba(0,0,0,0.12)]" onClick={handleGoogleLogin}>
                                <Image src="/assets/google_logo.png" alt="Google" className="w-3.75 h-3.75 shrink-0" width={20} height={20}/>
                                Continue with Google
                            </button>
                        </div>

                        {/* REGISTER FORM */}
                        <div id="form-register" className={`auth-form ${tab === "Register" ? "block" : "hidden"}`}>
                            <div className="mb-7">
                                <h2 className="font-['Playfair_Display',serif] text-[26px] font-bold text-(--ink) mb-1.5 max-[480px]:text-[22px]">
                                    Create Account
                                </h2>

                                <p className="text-[14px] text-(--warm-gray)">
                                    Join the Maynila heritage community
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-3.5 max-[900px]:grid-cols-1 max-[900px]:gap-0">
                                <div className="mb-4.5">
                                    <label className="block text-[12px] font-medium tracking-[0.08em] uppercase text-(--ink-mid) mb-2" htmlFor="reg-firstname">
                                        First name
                                    </label>

                                    <div className="relative flex items-center">
                                    <input type="text" id="reg-firstname" className={`w-full px-10.5 py-2.75 border bg-white font-sans text-[14px] text-(--ink) outline-none transition-colors duration-200 focus:border-(--gold) focus:shadow-[0_0_0_3px_rgba(201,168,76,0.12)] pl-3.5 ${!validFirstNameRegister ? "border-[#d63031]" : "border-black/15"}`} placeholder="Juan" autoComplete="given-name" value={firstNameRegister} onChange={(e) => setFirstNameRegister(e.target.value)}/>
                                    </div>

                                    <span className="block text-[12px] text-[#d63031] mt-1.25 min-h-4" id="err-reg-firstname">
                                        {errorFirstNameRegister}
                                    </span>
                                </div>

                                <div className="mb-4.5">
                                    <label className="block text-[12px] font-medium tracking-[0.08em] uppercase text-(--ink-mid) mb-2" htmlFor="reg-lastname">
                                        Last name
                                    </label>

                                    <div className="relative flex items-center">
                                    <input type="text" id="reg-lastname" className={`w-full px-10.5 py-2.75 border bg-white font-sans text-[14px] text-(--ink) outline-none transition-colors duration-200 focus:border-(--gold) focus:shadow-[0_0_0_3px_rgba(201,168,76,0.12)] pl-3.5 ${!validLastNameRegister ? "border-[#d63031]" : "border-black/15"}`} placeholder="Dela Cruz" autoComplete="family-name" value={lastNameRegister} onChange={(e) => setLastNameRegister(e.target.value)}/>
                                    </div>

                                    <span className="block text-[12px] text-[#d63031] mt-1.25 min-h-4" id="err-reg-lastname">
                                        {errorLastNameRegister}
                                    </span>
                                </div>
                            </div>

                            <div className="mb-4.5">
                                <label className="block text-[12px] font-medium tracking-[0.08em] uppercase text-(--ink-mid) mb-2" htmlFor="reg-email">
                                    Email address
                                </label>

                                <div className="relative flex items-center">
                                    <svg className="absolute left-3.5 w-4 h-4 text-(--warm-gray) pointer-events-none shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>

                                    <input type="email" id="reg-email" className={`w-full px-10.5 py-2.75 border ${!validEmailRegister ? "border-[#d63031]" : "border-black/15"} bg-white font-sans text-[14px] text-(--ink) outline-none transition-colors duration-200 focus:border-(--gold) focus:shadow-[0_0_0_3px_rgba(201,168,76,0.12)]`} placeholder="your@email.com" autoComplete="email" value={emailRegister} onChange={(e) => setEmailRegister(e.target.value)}/>
                                </div>

                                <span className="block text-[12px] text-[#d63031] mt-1.25 min-h-4" id="err-reg-email">
                                    {errorEmailRegister}
                                </span>
                            </div>

                            <div className="mb-4.5">
                                <label className="block text-[12px] font-medium tracking-[0.08em] uppercase text-(--ink-mid) mb-2" htmlFor="reg-password">
                                    Password
                                </label>

                                <div className="relative flex items-center">
                                    <svg className="absolute left-3.5 w-4 h-4 text-(--warm-gray) pointer-events-none shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>

                                    <input type={pwToggleRegister ? "text" : "password"} id="reg-password" className={`w-full px-10.5 py-2.75 border ${!validPasswordRegister ? "border-[#d63031]" : "border-black/15"} bg-white font-sans text-[14px] text-(--ink) outline-none transition-colors duration-200 focus:border-(--gold) focus:shadow-[0_0_0_3px_rgba(201,168,76,0.12)]`} placeholder="Min. 8 characters" autoComplete="new-password" value={passwordRegister} 
                                    onChange={(e) => {
                                    setPasswordRegister(e.target.value);
                                    updateStrength(e.target.value);
                                    }}/>

                                    <button type="button" className="absolute right-3 bg-transparent border-0 cursor-pointer text-(--warm-gray) p-1 flex items-center transition-colors duration-200 hover:text-(--ink)" tabIndex="-1" onClick={passwordToggleIconRegister}>
                                    <svg className={`${!pwToggleRegister ? "flex" : "hidden"} w-4 h-4`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>

                                    <svg className={`${pwToggleRegister ? "flex" : "hidden"} w-4 h-4`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                                    </button>
                                </div>

                                <div className="flex items-center gap-2.5 mt-2" id="strength-bar">
                                    <div className="flex-1 h-0.75 bg-black/10 rounded-full overflow-hidden">
                                        <div className={`h-full w-0 rounded-full transition-[width,background] duration-300 ${strength.widthClass} ${strength.colorClass}`} id="strength-fill">
                                        </div>
                                    </div>

                                    <span className={`text-[11px] tracking-[0.06em] min-w-10 ${strength.textColor}`} id="strength-label">
                                        {strength.text}
                                    </span>
                                </div>

                                <span className="block text-[12px] text-[#d63031] mt-1.25 min-h-4" id="err-reg-password">
                                    {errorPasswordRegister}
                                </span>
                            </div>

                            <div className="mb-4.5">
                                <label className="block text-[12px] font-medium tracking-[0.08em] uppercase text-(--ink-mid) mb-2" htmlFor="reg-confirm">
                                    Confirm password
                                </label>

                                <div className="relative flex items-center">
                                    <svg className="absolute left-3.5 w-4 h-4 text-(--warm-gray) pointer-events-none shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>

                                    <input type="password" id="reg-confirm" className={`w-full px-10.5 py-2.75 border ${!validConfirmPassword ? "border-[#d63031]" : "border-black/15"} bg-white font-sans text-[14px] text-(--ink) outline-none transition-colors duration-200 focus:border-(--gold) focus:shadow-[0_0_0_3px_rgba(201,168,76,0.12)]`} placeholder="Repeat password" autoComplete="new-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                                </div>

                                <span className="block text-[12px] text-[#d63031] mt-1.25 min-h-4" id="err-reg-confirm">
                                    {errorConfirmPasswordRegister}
                                </span>
                            </div>

                            <div className="mb-4.5 terms-group">
                                <label className="flex items-center gap-2 text-[13px] text-(--warm-gray) cursor-pointer">
                                    <input type="checkbox" id="reg-terms" className="w-3.75 h-3.75 cursor-pointer accent-(--gold)" checked={termsAndPrivacy} onChange={(e) => setTermsAndPrivacy(e.target.checked)}/>

                                    <span>
                                        I agree to the&nbsp; 
                                        <a href="#" className="text-(--gold) no-underline hover:underline">
                                            Terms of Service&nbsp;
                                        </a> and&nbsp; 
                                        
                                        <a href="#" className="text-(--gold) no-underline hover:underline">
                                            Privacy Policy
                                        </a>
                                    </span>
                                </label>

                                <span className="block text-[12px] text-[#d63031] mt-1.25 min-h-4" id="err-reg-terms">
                                    {errorTermsAndPrivacy}
                                </span>
                            </div>

                            <div className={`${emailExist ? "flex" : "hidden"} text-[13px] text-[#d63031] bg-[rgba(214,48,49,0.08)] border-l-[3px] border-[#d63031] py-2.5 px-3.5 mb-3.5" id="reg-error-banner`}>
                                An account with that email already exist.
                            </div>

                            <button className="w-full p-3.5 bg-(--gold) border-0 cursor-pointer font-['Dm_Sans', serif] text-[13px] font-medium tracking-[0.12em] uppercase text-(--ink) flex items-center justify-center gap-2 mt-3 hover:bg-(--gold-light) hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none" id="btn-register" onClick={handleSubmitRegister} disabled={disabledRegister}>
                                <span className={`${loadingRegister ? "hidden" : "flex"}`}>
                                    Create Account
                                </span>

                                <span className={`${loadingRegister ? "flex" : "hidden"}`}>
                                    <svg className="animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><path d="M21 12a9 9 0 1 1-6.22-8.56"/></svg>
                                </span>
                            </button>

                            <p className="text-center text-[13px] text-(--warm-gray) mt-5">
                                Already have an account?&nbsp; 
                                <button className="bg-transparent border-0 cursor-pointer text-(--gold) font-['Dm_Sans', serif] text-[13px] underline underline-offset-2 transition-colors duration-200 hover:text-(--gold-dark)" onClick={loginTab}>
                                    Sign in
                                </button>
                            </p>
                        </div>

                        {/*- FORGOT PASSWORD FORM */}
                        <div id="form-forgot" className={`auth-form ${toggleResetPassword && !backToLogin ? "block" : "hidden"}`}>
                            <button className="bg-transparent border-0 cursor-pointer text-[13px] text-(--warm-gray) font-['DM_Sans',sans-serif] tracking-wider inline-flex items-center gap-1 mb-6 p-0 transition-colors duration-200 hover:text-(--gold)" 
                            onClick={() => {
                            setBackToLogin(true)
                            setToggleResetPassword(false);
                            }}>
                                ← Back to sign in
                            </button>

                            <div className="mb-7">
                                <h2 className="font-['Playfair_Display',serif] text-[26px] font-bold text-(--ink) mb-1.5 max-[480px]:text-[22px]">
                                    Reset Password
                                </h2>

                                <p className="text-[14px] text-(--warm-gray)">
                                    We&apos;ll send a reset link to your email
                                </p>
                            </div>

                            <div className="mb-4.5">
                                <label className="block text-[12px] font-medium tracking-[0.08em] uppercase text-(--ink-mid) mb-2" htmlFor="forgot-email">
                                    Email address
                                </label>

                                <div className="relative flex items-center">
                                    <svg className="absolute left-3.5 w-4 h-4 text-(--warm-gray) pointer-events-none shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>

                                    <input type="email" id="forgot-email" className={`w-full px-10.5 py-2.75 border ${!resetPassword ? "border-[#d63031]" : "border-black/15"}  bg-white font-sans text-[14px] text-(--ink) outline-none transition-colors duration-200 focus:border-(--gold) focus:shadow-[0_0_0_3px_rgba(201,168,76,0.12)]`} placeholder="your@email.com" value={emailResetPassword} onChange={(e) => setEmailResetPassword(e.target.value)}/>
                                </div>

                                <span className={`block text-[12px] text-[#d63031] mt-1 min-h-4`} id="err-forgot-email">
                                    {errorEmailResetPassword}
                                </span>
                            </div>

                            <button className="w-full py-3.5 bg-(--gold) border-0 cursor-pointer font-['DM_Sans',sans-serif] text-[13px] font-medium tracking-[0.12em] uppercase text-(--ink) flex items-center justify-center gap-2 transition-all duration-200 mt-2 hover:bg-(--gold-light) hover:-translate-y-px" onClick={handleResetPassword} disabled={disabledReset}>
                                <span className={`${loadingResetPassword ? "hidden" : "flex"}`}>
                                    Send Reset Link
                                </span>

                                <span className={`${loadingResetPassword ? "flex" : "hidden"}`}>
                                    <svg className="animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><path d="M21 12a9 9 0 1 1-6.22-8.56"/></svg>
                                </span>
                            </button>

                            <div id="forgot-success" className={`${successResetPassword ? "flex" : "hidden"} text-center py-8 flex-col items-center gap-4`}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="40" height="40"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>

                                <p className="text-[15px] text-(--warm-gray)">
                                    Reset link sent! Check your inbox.
                                </p>
                            </div>
                        </div>

                            {/* SUCCESS STATE */}
                        <div id="form-success" className="auth-form hidden">
                            <div className="flex flex-col items-center justify-center min-h-80 text-center gap-3">
                                <div className="w-20 h-20 bg-[rgba(201,168,76,0.1)] rounded-full flex items-center justify-center mb-2">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="48" height="48"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                                </div>

                                <h2 className="font-['Playfair_Display',serif] text-[26px] font-bold text-(--ink) mb-1.5 max-[480px]:text-[22px]">
                                    You&apos;re in!
                                </h2>

                                <p className="text-[14px] text-(--warm-gray)" id="success-msg">
                                    Welcome back to Manila Core.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Terms and Privacy */}       
                    <div id="legal-modal" className={`fixed inset-0 z-400 bg-[rgba(5,3,1,0.88)] backdrop-blur-[10px] items-center justify-center p-6 opacity-100 hidden transition-opacity duration-300`}>
                        <div className="bg-(--cream) max-w-160 w-full max-h-[82vh] flex flex-col shadow-[0_40px_100px_rgba(0,0,0,0.6)] animate-detailSlideIn">
                            <div className="shrink-0 bg-(--ink) px-9 pt-7 pb-6 relative border-b-2 border-(--gold)">
                                <button className="absolute top-4.5 right-4.5 w-8 h-8 rounded-full bg-[rgba(255,255,255,0.06)] border border-[rgba(201,168,76,0.25)] text-white/60 cursor-pointer flex items-center justify-center transition-[background,color,transform] duration-200 hover:bg-[rgba(201,168,76,0.2)] hover:text-(--gold) hover:rotate-90"  aria-label="Close" onClick={() => openLegal(false)}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                                </button>

                                <div className="w-9.5 h-9.5 bg-[rgba(201,168,76,0.12)] border border-[rgba(201,168,76,0.3)] rounded-full flex items-center justify-center mb-3.5 text-(--gold)" id="legal-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4.5 h-4.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                                </div>

                                <div className="font-['Playfair_Display',serif] text-[24px] font-bold text-white mb-1.5" id="legal-title">
                                    Terms of Service
                                </div>

                                <div className="text-[12px] text-white/40 tracking-[0.06em]" id="legal-sub">
                                    Maynila Heritage Portal
                                </div>
                            </div>

                            <div className="flex-1 overflow-y-auto px-9 pt-7 pb-8" id="legal-body">
               
                            </div>

                            <div className="shrink-0 px-9 py-4.5 border-t border-(--border) flex justify-end gap-2.5">
                                <button className="text-[12px] text-(--warm-gray) bg-transparent border-0 cursor-pointer underline underline-offset-2 font-['DM_Sans',sans-serif] mr-auto self-center transition-colors duration-200 hover:text-(--gold-dark)" id="legal-switch">
                                    View Privacy Policy →
                                </button>

                                <button className="py-2.75 px-7 bg-(--gold) border-0 cursor-pointer font-['DM_Sans',sans-serif] text-[12px] font-medium tracking-widest uppercase text-(--ink) transition-colors duration-200 hover:bg-(--gold-light)">
                                    I Understand
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}   

