import antlr4 from 'antlr4'
import <LexerName> from '../grammar/<LexerName>.js';
import <ParserName> from '../grammar/<ParserName>.js';
import CustomVisitor from '../helper/CustomVisitor.js';

let analizer = (input) => {
	const chars = new antlr4.InputStream(input);
	const lexer = new <LexerName>(chars);
	const tokens = new antlr4.CommonTokenStream(lexer);
	const parser = new <ParserName>(tokens);
	parser.buildParseTrees = true;
	const tree = parser.file();
	const visitor = new CustomVisitor();
	
	return visitor.visitFile(tree);
}

export default analizer;
