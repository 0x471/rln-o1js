import {
  RuntimeModule,
  runtimeModule,
  state,
  runtimeMethod,
} from "@proto-kit/module";
import { State, StateMap, assert } from "@proto-kit/protocol";
import { Field, Provable, PublicKey, Struct, UInt64 } from "o1js";

interface MRLNConfig {
}

@runtimeModule()
export class MRLN extends RuntimeModule<MRLNConfig> {

}
