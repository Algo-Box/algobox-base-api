import jwt from 'jsonwebtoken';
import { JWTUser } from '../../types';

/**
 * Used to Create JWT
 * @param payload The Payload
 * @param retain wether to retain the key for frontend
 * @returns {Promise<string>} the Token
 */
export async function createToken(payload: any): Promise<string> {
  return jwt
    .sign(payload, process.env.JSTsecret!, {
      algorithm: 'HS512',
      expiresIn: '7d'
    });
}

/**
 * used to decode the token 
 * @param {string} token The Token
 * @returns {Promise<User>} The Decoded Payload
 */
export async function verifyToken(token: string): Promise<JWTUser> {
  return <JWTUser> jwt
    .verify(token, process.env.JWTsecret!, { 
      algorithms: ['HS512']
    });
}