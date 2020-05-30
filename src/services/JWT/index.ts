import jwt from 'jsonwebtoken';
import { JWTUser } from '../../types';
import config from '../../config';

/**
 * Used to Create JWT
 * @param {Object} payload The Payload
 * @returns {Promise<String>} the Token
 */
export async function createToken(payload: any): Promise<String> {
  return jwt
    .sign(payload, config.ENV.JWTsecret, {
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
    .verify(token, config.ENV.JWTsecret, {
      algorithms: [ 'HS512' ]
    });
}
