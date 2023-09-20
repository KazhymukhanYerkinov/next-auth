'use client';

import React from 'react';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';

const SignInPage = () => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/";

    const [form, setForm] = React.useState({
        username: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }


    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await signIn('credentials', {
            callbackUrl,
            redirect: false,
            username: form.username,
            password: form.password,
        });

        if (!res?.error) {
            router.push(callbackUrl);
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input name='username' placeholder='Username' onChange={handleChange}/>
            </div>

            <div>
                <input name='password' placeholder='Password' onChange={handleChange} />
            </div>

            <button type='submit'> Submit </button>
        </form>
    );
};

export default SignInPage;