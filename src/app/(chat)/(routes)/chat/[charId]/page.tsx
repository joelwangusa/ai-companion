import { auth, redirectToSignIn } from "@clerk/nextjs"
import prismadb from "@/lib/prismadb";

import ChatClient from "./components/client";

interface ChatIdPageProps {
    params: {
        charId: string
    }
}

const ChatIdPage = async ({
    params
}: ChatIdPageProps) => {
    const { userId } = auth();

    if (!userId) {
        return redirectToSignIn();
    }

    const companion = await prismadb.companion.findUnique({
        where: {
          userId,
          id: params.charId
        },
        include: {
          messages: {
            orderBy: {
              createdAt: 'asc'
            },
            where: {
              userId,
            }
          },
          _count: {
            select: {
              messages: true
            }
          }
        }
    });

    if (!companion) {
      return redirectToSignIn();
    }

    return (
      <ChatClient companion={companion} />
     );
}
 
export default ChatIdPage;