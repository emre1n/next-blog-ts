import { signJwtAccessToken } from '@/libs/jwt';
import prisma from '@/libs/prismadb';
import * as bcrypt from 'bcrypt';

interface RequestBody {
  username: string;
  password: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  const user = await prisma.user.findFirst({
    where: {
      email: body.username,
    },
  });

  if (user && (await bcrypt.compare(body.password, user.password))) {
    const { password, ...userWithoutPass } = user;
    const accessToken = signJwtAccessToken(userWithoutPass);
    const result = {
      ...userWithoutPass,
      accessToken,
    };
    return new Response(JSON.stringify(result));
  } else {
    const errorResponse = new Response('Bir hata oluştu.', {
      status: 500,
      // İsteğe bağlı olarak istediğiniz HTTP durum kodunu belirleyebilirsiniz  statusText: 'Internal Server Error',
      // İsteğe bağlı olarak hata durumunu açıklayan bir metin belirleyebilirsiniz
      headers: {
        'Content-Type': 'text/plain',
        // İsteğe bağlı olarak içeriğin türünü belirleyebilirsiniz
      },
    });
    // Response nesnesini döndürmereturn errorResponse;
    return errorResponse;
  }
}
