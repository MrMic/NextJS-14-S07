import Messages from '@/components/messages';
// import { unstable_noStore } from 'next/cache';

// * NOTE: Name is compulsory for revalidate property globally.
// export const revalidate = 5;
// export const dynamic = 'force-dynamic';

export default async function MessagesPage() {
  // * NOTE: Disable caching for this component.
  // unstable_noStore();

  const response = await fetch('http://localhost:8080/messages', {
    next: {
      tags: ['msg'],
    },
  });
  const messages = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
