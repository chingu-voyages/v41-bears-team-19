import * as jwt from 'jsonwebtoken';

export const APP_SECRET = 'secret-safe';

export interface AuthTokenPayload {
  userId: number;
}

export function decodeAuthHeader(authHeader: string): AuthTokenPayload {
  const token = authHeader.replace('Bearer ', '');

  if (!token) {
    throw new Error('Invalid token');
  }
  return jwt.verify(token, APP_SECRET) as AuthTokenPayload;
}
