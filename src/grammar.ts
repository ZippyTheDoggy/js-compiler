enum TokenType {
    INVALID, EOF,

    INT, STRING, IDENT,

    ASSIGN, 
    PLUS, MINUS, STAR, SLASH,
    PERCENT, CARET, AMP, PIPE,
    TILDE, QUESTION, EXCLAMATION,
    COLON, SEMICOLON, COMMA, DOT,
    LPAREN, RPAREN, LBRACE, RBRACE,
    LBRACKET, RBRACKET,
    LSQUARE, RSQUARE
}

function TokenToString(type: TokenType, data: any = null): string {
    switch(type) {
        case TokenType.INVALID: return "INVALID";
        case TokenType.EOF: return "EOF";

        case TokenType.INT: return `INT ${data != null ? data : 'null'}`;
        case TokenType.STRING: return `STRING "${data != null ? data : "null"}"`;
        case TokenType.IDENT: return `IDENT "${data != null ? data : "null"}"`;

        case TokenType.ASSIGN: return "ASSIGN";
        case TokenType.PLUS: return "PLUS";
        case TokenType.MINUS: return "MINUS";
        case TokenType.STAR: return "STAR";
        case TokenType.SLASH: return "SLASH";
        case TokenType.PERCENT: return "PERCENT";
        case TokenType.CARET: return "CARET";
        case TokenType.AMP: return "AMP";
        case TokenType.PIPE: return "PIPE";
        case TokenType.TILDE: return "TILDE";
        case TokenType.QUESTION: return "QUESTION";
        case TokenType.EXCLAMATION: return "EXCLAMATION";
        case TokenType.COLON: return "COLON";
        case TokenType.SEMICOLON: return "SEMICOLON";
        case TokenType.COMMA: return "COMMA";
        case TokenType.DOT: return "DOT";
     
        case TokenType.LPAREN: return "LPAREN";
        case TokenType.RPAREN: return "RPAREN";
        case TokenType.LBRACE: return "LBRACE";
        case TokenType.RBRACE: return "RBRACE";
        case TokenType.LBRACKET: return "LBRACKET";
        case TokenType.RBRACKET: return "RBRACKET";
        case TokenType.LSQUARE: return "LSQUARE";
        case TokenType.RSQUARE: return "RSQUARE";

        default: return "INVALID";
    }
}

class InputStream {
    private is_eof(c: string): boolean {
        return [null, '\0'].includes(c);
    }

    private text: string;
    public current: string;
    public pos: number;
    public posVec: { l: number, c: number };
    constructor(code: string) {
        this.text = code;
        if(!this.text.endsWith('\0')) this.text += '\0';
        this.pos = -1;
        this.posVec = { l: 0, c: -1 };
        this.current = "";
    }
    next(): string {
        if(this.is_eof(this.peek())) {
            console.log(`MET EOF AT ${this.posVec.l}:${this.posVec.c}`);
            return "";
        } else {
            this.pos++;
            let nextChar = this.text[this.pos];
            if(nextChar == '\n') {
                this.posVec.l++;
                this.posVec.c = 0;
            } else {
                this.posVec.c++;
            }
            return this.current = nextChar;
        }
    };
    peek(): string {
        if(this.is_eof(this.text[this.pos + 1])) {
            return "";
        } else {
            return this.text[this.pos + 1];
        }
    };
    back(): string {
        if(this.pos > 1) return this.text[this.pos - 1];
        return "";
    }
    eof(): boolean {
        return this.is_eof(this.current);
    }
}

export {
    TokenType, TokenToString, InputStream
};