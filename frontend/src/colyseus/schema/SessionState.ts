// 
// THIS FILE HAS BEEN GENERATED AUTOMATICALLY
// DO NOT CHANGE IT MANUALLY UNLESS YOU KNOW WHAT YOU'RE DOING
// 
// GENERATED USING @colyseus/schema 1.0.28
// 

import { Schema, type, ArraySchema, MapSchema, SetSchema, DataChange } from '@colyseus/schema';
import { PlayerState } from './PlayerState'

export class SessionState extends Schema {
    @type([ PlayerState ]) public players: ArraySchema<PlayerState> = new ArraySchema<PlayerState>();
}
