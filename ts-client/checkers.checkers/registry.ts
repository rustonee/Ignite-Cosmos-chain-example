import { GeneratedType } from "@cosmjs/proto-signing";
import { Params } from "./types/checkers/checkers/params";
import { MsgUpdateParams } from "./types/checkers/checkers/tx";
import { MsgUpdateParamsResponse } from "./types/checkers/checkers/tx";
import { GenesisState } from "./types/checkers/checkers/genesis";
import { QueryParamsRequest } from "./types/checkers/checkers/query";
import { QueryParamsResponse } from "./types/checkers/checkers/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/checkers.checkers.Params", Params],
    ["/checkers.checkers.MsgUpdateParams", MsgUpdateParams],
    ["/checkers.checkers.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/checkers.checkers.GenesisState", GenesisState],
    ["/checkers.checkers.QueryParamsRequest", QueryParamsRequest],
    ["/checkers.checkers.QueryParamsResponse", QueryParamsResponse],
    
];

export { msgTypes }