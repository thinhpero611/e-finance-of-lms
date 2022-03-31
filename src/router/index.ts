import React from 'react'
import { IRouter } from "./interface";
import { privatePage, authPage } from './mainRouter';

export const authRouter: IRouter[] = authPage

export const privateRouter: IRouter[] = privatePage