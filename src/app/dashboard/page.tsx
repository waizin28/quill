import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';
import { db } from '@/db';
import Dashboard from '@/components/Dashboard';

const Page = async () => {
  const { getUser } = getKindeServerSession();
  const user = getUser();

  //  if user isn't logged in
  if (!user || !user.id) redirect('/auth-callback?origin=dashboard');

  // is user already exists in database
  const dbUser = await db.user.findFirst({
    where: {
      id: user.id,
    },
  });

  // if user isn't on database we will have to sync with database at auth-callback page
  if (!dbUser) redirect('/auth-callback?origin=dashboard');

  // will be able to chat to pdf
  const subscriptionPlan = await getUserSubscriptionPlan();

  return <Dashboard subscriptionPlan={subscriptionPlan} />;
};

export default Page;
