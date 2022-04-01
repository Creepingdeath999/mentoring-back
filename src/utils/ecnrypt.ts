import { Injectable } from '@nestjs/common'
import { pbkdf2, randomBytes } from 'crypto'

@Injectable()
export class Encrypt {
  async encryptPassword(password: string, salt?: string): Promise<string> {
    salt = salt || randomBytes(16).toString('hex')
    const keylen = 16
    const iterations = 1000
    const digest = 'sha256'

    return new Promise((resolve) =>
      pbkdf2(password, salt, iterations, keylen, digest, (error, key) => {
        resolve([key.toString('hex'), salt].join('.'))
      }),
    )
  }
  async comparePasswords(incommingPassword: string, password: string) {
    const encryptedPassword = await this.encryptPassword(
      incommingPassword,
      password.split('.')[1],
    )
    return encryptedPassword === password
  }
}
