import { Request, Response } from "express"

/* Este archivo es para validar la SALUD del servicio
o sea, si es que éste está arriba o que tenga cierta versión */


/* Mayormente devuelve variables de entorno */
export default class HealthController {
  public readonly info = (_req: Request, res: Response) => {
    res.json({
      name: process.env.npm_package_name,
      version: process.env.npm_package_version,
      description: process.env.npm_package_description
    })
  }

/* La famosa respuesta para saber
si el servidor está funcionando. Ésta devuelve
un texto plano */
  public readonly ping = (_req: Request, res: Response) => {
    res.send('y haga pun!')
  }
}

/* En resumen, éste controlador tiene las funciones
info y ping que devuelven sus respectivos mensajes */