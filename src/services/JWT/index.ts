import jwt from 'jsonwebtoken';
import { JWTUser } from '../../types';

/**
 * Used to Create JWT
 * @param {Object} payload The Payload
 * @returns {Promise<String>} the Token
 */
export async function createToken(payload: any): Promise<String> {
  return jwt
    .sign(payload, process.env.JWTsecret!, {
      algorithm: 'HS512',
      expiresIn: '7d'
    });
}

/**
 * used to decode the token 
 * @param {string} token The Token
 * @returns {Promise<JWTUser>} The Decoded Payload
 */
export async function verifyToken(token: string): Promise<JWTUser> {
  return <JWTUser> jwt
    .verify(token, process.env.JWTsecret!, { 
      algorithms: ['HS512']
    });
}