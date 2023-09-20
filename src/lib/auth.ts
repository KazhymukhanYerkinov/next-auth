import type { AuthOptions } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: AuthOptions = {
    session: { strategy: 'jwt' },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: 'Username', type: 'text', placeholder: 'Username' },
                password: { label: 'Password', type: 'password', placeholder: 'Password' },
                
            },
            async authorize(credentials, req) {

                const user = { id: "42", name: "kazhyk", password: "kazhyk", randomKey: '12345' };

                if (credentials?.username === user.name && credentials?.password === user?.password) {
                    return user;
                }
                return null;
            }
        })
    ],
    pages: {
        signIn: '/signin',
    },
    callbacks: {
        session: async ({ session, token }) => {
            session.user = token?.user as any;
            return Promise.resolve(session);
        },
        jwt: async ({ token, user }) => {
            user && (token.user = user);
            return Promise.resolve(token);
        },
    }
    
}