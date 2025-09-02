
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { connectDB } from '@/lib/db';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export const authOptions = {
  session: { strategy: 'jwt' },
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: { 
        email: { label: 'Email', type: 'email' }, 
        password: { label: 'Password', type: 'password' } 
      },
      async authorize(credentials){
        await connectDB();
        const user = await User.findOne({ email: credentials.email });
        if (!user) return null;

        const ok = await bcrypt.compare(credentials.password, user.password);
        if (!ok) return null;

        return { id:String(user._id), email:user.email, name:user.name || user.email };
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) { 
      if (user) token.id = user.id; 
      return token; 
    },
    async session({ session, token }) { 
      if (token?.id) session.user.id = token.id; 
      return session; 
    }
  },
  pages: {
    signIn: "/auth/login",   
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
