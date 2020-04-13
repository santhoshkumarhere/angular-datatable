import {IntoxavisorSearchResults} from './IntoxavisorSearchResults';


export class IntoxavisorSearchResponse{
    httpstatusCode: any;
    success: boolean;
    iD: number;
    message: string;
    errors: string[];
    intoxavisorScoreManagerScores: IntoxavisorSearchResults[];
}