import { TokenType, TokenToString, InputStream } from './grammar';

function tokenize(code: string) {
    let input = new InputStream(code);
    while(!input.eof()) {
        let char = input.next();
        console.log(char);
    }
}

tokenize("hello world");