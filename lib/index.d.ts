interface Config {
    appId: string;
    clientId: string;
    zendeskUrl: string;
}
export declare function initialize(config: Config): void;
export declare function identifyJWT(token: string): void;
export declare function identifyAnonymous(name?: string, email?: string): void;
interface HelpCenterOptions {
    hideContactSupport?: boolean;
}
export declare function showHelpCenter(options: HelpCenterOptions): void;
interface NewTicketOptions {
    tags?: string[];
}
export declare function showNewTicket(options: NewTicketOptions): void;
export {};
