// Generated from ./src/sicpy/Python3.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { Python3Listener } from "./Python3Listener";
import { Python3Visitor } from "./Python3Visitor";


export class Python3Parser extends Parser {
	public static readonly T__0 = 1;
	public static readonly STRING = 2;
	public static readonly NUMBER = 3;
	public static readonly INTEGER = 4;
	public static readonly DEF = 5;
	public static readonly RETURN = 6;
	public static readonly RAISE = 7;
	public static readonly FROM = 8;
	public static readonly IMPORT = 9;
	public static readonly AS = 10;
	public static readonly GLOBAL = 11;
	public static readonly NONLOCAL = 12;
	public static readonly ASSERT = 13;
	public static readonly IF = 14;
	public static readonly ELIF = 15;
	public static readonly ELSE = 16;
	public static readonly WHILE = 17;
	public static readonly FOR = 18;
	public static readonly IN = 19;
	public static readonly TRY = 20;
	public static readonly FINALLY = 21;
	public static readonly WITH = 22;
	public static readonly EXCEPT = 23;
	public static readonly LAMBDA = 24;
	public static readonly OR = 25;
	public static readonly AND = 26;
	public static readonly NOT = 27;
	public static readonly IS = 28;
	public static readonly NONE = 29;
	public static readonly TRUE = 30;
	public static readonly FALSE = 31;
	public static readonly CLASS = 32;
	public static readonly YIELD = 33;
	public static readonly DEL = 34;
	public static readonly PASS = 35;
	public static readonly CONTINUE = 36;
	public static readonly BREAK = 37;
	public static readonly ASYNC = 38;
	public static readonly AWAIT = 39;
	public static readonly NEWLINE = 40;
	public static readonly NAME = 41;
	public static readonly STRING_LITERAL = 42;
	public static readonly BYTES_LITERAL = 43;
	public static readonly DECIMAL_INTEGER = 44;
	public static readonly OCT_INTEGER = 45;
	public static readonly HEX_INTEGER = 46;
	public static readonly BIN_INTEGER = 47;
	public static readonly FLOAT_NUMBER = 48;
	public static readonly IMAG_NUMBER = 49;
	public static readonly DOT = 50;
	public static readonly ELLIPSIS = 51;
	public static readonly STAR = 52;
	public static readonly OPEN_PAREN = 53;
	public static readonly CLOSE_PAREN = 54;
	public static readonly COMMA = 55;
	public static readonly COLON = 56;
	public static readonly SEMI_COLON = 57;
	public static readonly POWER = 58;
	public static readonly ASSIGN = 59;
	public static readonly OPEN_BRACK = 60;
	public static readonly CLOSE_BRACK = 61;
	public static readonly OR_OP = 62;
	public static readonly XOR = 63;
	public static readonly AND_OP = 64;
	public static readonly LEFT_SHIFT = 65;
	public static readonly RIGHT_SHIFT = 66;
	public static readonly ADD = 67;
	public static readonly MINUS = 68;
	public static readonly DIV = 69;
	public static readonly MOD = 70;
	public static readonly IDIV = 71;
	public static readonly NOT_OP = 72;
	public static readonly OPEN_BRACE = 73;
	public static readonly CLOSE_BRACE = 74;
	public static readonly LESS_THAN = 75;
	public static readonly GREATER_THAN = 76;
	public static readonly EQUALS = 77;
	public static readonly GT_EQ = 78;
	public static readonly LT_EQ = 79;
	public static readonly NOT_EQ_1 = 80;
	public static readonly NOT_EQ_2 = 81;
	public static readonly AT = 82;
	public static readonly ARROW = 83;
	public static readonly ADD_ASSIGN = 84;
	public static readonly SUB_ASSIGN = 85;
	public static readonly MULT_ASSIGN = 86;
	public static readonly AT_ASSIGN = 87;
	public static readonly DIV_ASSIGN = 88;
	public static readonly MOD_ASSIGN = 89;
	public static readonly AND_ASSIGN = 90;
	public static readonly OR_ASSIGN = 91;
	public static readonly XOR_ASSIGN = 92;
	public static readonly LEFT_SHIFT_ASSIGN = 93;
	public static readonly RIGHT_SHIFT_ASSIGN = 94;
	public static readonly POWER_ASSIGN = 95;
	public static readonly IDIV_ASSIGN = 96;
	public static readonly SKIP_ = 97;
	public static readonly UNKNOWN_CHAR = 98;
	public static readonly INDENT = 99;
	public static readonly DEDENT = 100;
	public static readonly TYPE_COMMENT = 101;
	public static readonly RULE_single_input = 0;
	public static readonly RULE_file_input = 1;
	public static readonly RULE_eval_input = 2;
	public static readonly RULE_decorator = 3;
	public static readonly RULE_decorators = 4;
	public static readonly RULE_decorated = 5;
	public static readonly RULE_async_funcdef = 6;
	public static readonly RULE_funcdef = 7;
	public static readonly RULE_parameters = 8;
	public static readonly RULE_typedargslist = 9;
	public static readonly RULE_tfpdef = 10;
	public static readonly RULE_varargslist = 11;
	public static readonly RULE_vfpdef = 12;
	public static readonly RULE_stmt = 13;
	public static readonly RULE_simple_stmt = 14;
	public static readonly RULE_small_stmt = 15;
	public static readonly RULE_expr_stmt = 16;
	public static readonly RULE_annassign = 17;
	public static readonly RULE_testlist_star_expr = 18;
	public static readonly RULE_augassign = 19;
	public static readonly RULE_del_stmt = 20;
	public static readonly RULE_pass_stmt = 21;
	public static readonly RULE_flow_stmt = 22;
	public static readonly RULE_break_stmt = 23;
	public static readonly RULE_continue_stmt = 24;
	public static readonly RULE_return_stmt = 25;
	public static readonly RULE_yield_stmt = 26;
	public static readonly RULE_raise_stmt = 27;
	public static readonly RULE_import_stmt = 28;
	public static readonly RULE_import_name = 29;
	public static readonly RULE_import_from = 30;
	public static readonly RULE_import_as_name = 31;
	public static readonly RULE_dotted_as_name = 32;
	public static readonly RULE_import_as_names = 33;
	public static readonly RULE_dotted_as_names = 34;
	public static readonly RULE_dotted_name = 35;
	public static readonly RULE_global_stmt = 36;
	public static readonly RULE_nonlocal_stmt = 37;
	public static readonly RULE_assert_stmt = 38;
	public static readonly RULE_compound_stmt = 39;
	public static readonly RULE_async_stmt = 40;
	public static readonly RULE_if_stmt = 41;
	public static readonly RULE_while_stmt = 42;
	public static readonly RULE_for_stmt = 43;
	public static readonly RULE_try_stmt = 44;
	public static readonly RULE_with_stmt = 45;
	public static readonly RULE_with_item = 46;
	public static readonly RULE_except_clause = 47;
	public static readonly RULE_suite = 48;
	public static readonly RULE_namedexpr_test = 49;
	public static readonly RULE_test = 50;
	public static readonly RULE_test_nocond = 51;
	public static readonly RULE_lambdef = 52;
	public static readonly RULE_lambdef_nocond = 53;
	public static readonly RULE_or_test = 54;
	public static readonly RULE_and_test = 55;
	public static readonly RULE_not_test = 56;
	public static readonly RULE_comparison = 57;
	public static readonly RULE_comp_op = 58;
	public static readonly RULE_star_expr = 59;
	public static readonly RULE_expr = 60;
	public static readonly RULE_xor_expr = 61;
	public static readonly RULE_and_expr = 62;
	public static readonly RULE_shift_expr = 63;
	public static readonly RULE_arith_expr = 64;
	public static readonly RULE_term = 65;
	public static readonly RULE_factor = 66;
	public static readonly RULE_power = 67;
	public static readonly RULE_atom_expr = 68;
	public static readonly RULE_atom = 69;
	public static readonly RULE_testlist_comp = 70;
	public static readonly RULE_trailer = 71;
	public static readonly RULE_subscriptlist = 72;
	public static readonly RULE_subscript = 73;
	public static readonly RULE_sliceop = 74;
	public static readonly RULE_exprlist = 75;
	public static readonly RULE_testlist = 76;
	public static readonly RULE_dictorsetmaker = 77;
	public static readonly RULE_classdef = 78;
	public static readonly RULE_arglist = 79;
	public static readonly RULE_argument = 80;
	public static readonly RULE_comp_iter = 81;
	public static readonly RULE_comp_for = 82;
	public static readonly RULE_comp_if = 83;
	public static readonly RULE_encoding_decl = 84;
	public static readonly RULE_yield_expr = 85;
	public static readonly RULE_yield_arg = 86;
	public static readonly RULE_func_body_suite = 87;
	public static readonly RULE_func_type_input = 88;
	public static readonly RULE_func_type = 89;
	public static readonly RULE_typelist = 90;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"single_input", "file_input", "eval_input", "decorator", "decorators", 
		"decorated", "async_funcdef", "funcdef", "parameters", "typedargslist", 
		"tfpdef", "varargslist", "vfpdef", "stmt", "simple_stmt", "small_stmt", 
		"expr_stmt", "annassign", "testlist_star_expr", "augassign", "del_stmt", 
		"pass_stmt", "flow_stmt", "break_stmt", "continue_stmt", "return_stmt", 
		"yield_stmt", "raise_stmt", "import_stmt", "import_name", "import_from", 
		"import_as_name", "dotted_as_name", "import_as_names", "dotted_as_names", 
		"dotted_name", "global_stmt", "nonlocal_stmt", "assert_stmt", "compound_stmt", 
		"async_stmt", "if_stmt", "while_stmt", "for_stmt", "try_stmt", "with_stmt", 
		"with_item", "except_clause", "suite", "namedexpr_test", "test", "test_nocond", 
		"lambdef", "lambdef_nocond", "or_test", "and_test", "not_test", "comparison", 
		"comp_op", "star_expr", "expr", "xor_expr", "and_expr", "shift_expr", 
		"arith_expr", "term", "factor", "power", "atom_expr", "atom", "testlist_comp", 
		"trailer", "subscriptlist", "subscript", "sliceop", "exprlist", "testlist", 
		"dictorsetmaker", "classdef", "arglist", "argument", "comp_iter", "comp_for", 
		"comp_if", "encoding_decl", "yield_expr", "yield_arg", "func_body_suite", 
		"func_type_input", "func_type", "typelist",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "':='", undefined, undefined, undefined, "'def'", "'return'", 
		"'raise'", "'from'", "'import'", "'as'", "'global'", "'nonlocal'", "'assert'", 
		"'if'", "'elif'", "'else'", "'while'", "'for'", "'in'", "'try'", "'finally'", 
		"'with'", "'except'", "'lambda'", "'or'", "'and'", "'not'", "'is'", "'None'", 
		"'True'", "'False'", "'class'", "'yield'", "'del'", "'pass'", "'continue'", 
		"'break'", "'async'", "'await'", undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "'.'", 
		"'...'", "'*'", "'('", "')'", "','", "':'", "';'", "'**'", "'='", "'['", 
		"']'", "'|'", "'^'", "'&'", "'<<'", "'>>'", "'+'", "'-'", "'/'", "'%'", 
		"'//'", "'~'", "'{'", "'}'", "'<'", "'>'", "'=='", "'>='", "'<='", "'<>'", 
		"'!='", "'@'", "'->'", "'+='", "'-='", "'*='", "'@='", "'/='", "'%='", 
		"'&='", "'|='", "'^='", "'<<='", "'>>='", "'**='", "'//='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, "STRING", "NUMBER", "INTEGER", "DEF", "RETURN", 
		"RAISE", "FROM", "IMPORT", "AS", "GLOBAL", "NONLOCAL", "ASSERT", "IF", 
		"ELIF", "ELSE", "WHILE", "FOR", "IN", "TRY", "FINALLY", "WITH", "EXCEPT", 
		"LAMBDA", "OR", "AND", "NOT", "IS", "NONE", "TRUE", "FALSE", "CLASS", 
		"YIELD", "DEL", "PASS", "CONTINUE", "BREAK", "ASYNC", "AWAIT", "NEWLINE", 
		"NAME", "STRING_LITERAL", "BYTES_LITERAL", "DECIMAL_INTEGER", "OCT_INTEGER", 
		"HEX_INTEGER", "BIN_INTEGER", "FLOAT_NUMBER", "IMAG_NUMBER", "DOT", "ELLIPSIS", 
		"STAR", "OPEN_PAREN", "CLOSE_PAREN", "COMMA", "COLON", "SEMI_COLON", "POWER", 
		"ASSIGN", "OPEN_BRACK", "CLOSE_BRACK", "OR_OP", "XOR", "AND_OP", "LEFT_SHIFT", 
		"RIGHT_SHIFT", "ADD", "MINUS", "DIV", "MOD", "IDIV", "NOT_OP", "OPEN_BRACE", 
		"CLOSE_BRACE", "LESS_THAN", "GREATER_THAN", "EQUALS", "GT_EQ", "LT_EQ", 
		"NOT_EQ_1", "NOT_EQ_2", "AT", "ARROW", "ADD_ASSIGN", "SUB_ASSIGN", "MULT_ASSIGN", 
		"AT_ASSIGN", "DIV_ASSIGN", "MOD_ASSIGN", "AND_ASSIGN", "OR_ASSIGN", "XOR_ASSIGN", 
		"LEFT_SHIFT_ASSIGN", "RIGHT_SHIFT_ASSIGN", "POWER_ASSIGN", "IDIV_ASSIGN", 
		"SKIP_", "UNKNOWN_CHAR", "INDENT", "DEDENT", "TYPE_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(Python3Parser._LITERAL_NAMES, Python3Parser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return Python3Parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Python3.g4"; }

	// @Override
	public get ruleNames(): string[] { return Python3Parser.ruleNames; }

	// @Override
	public get serializedATN(): string { return Python3Parser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(Python3Parser._ATN, this);
	}
	// @RuleVersion(0)
	public single_input(): Single_inputContext {
		let _localctx: Single_inputContext = new Single_inputContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, Python3Parser.RULE_single_input);
		try {
			this.state = 187;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.NEWLINE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 182;
				this.match(Python3Parser.NEWLINE);
				}
				break;
			case Python3Parser.STRING:
			case Python3Parser.NUMBER:
			case Python3Parser.RETURN:
			case Python3Parser.RAISE:
			case Python3Parser.FROM:
			case Python3Parser.IMPORT:
			case Python3Parser.GLOBAL:
			case Python3Parser.NONLOCAL:
			case Python3Parser.ASSERT:
			case Python3Parser.LAMBDA:
			case Python3Parser.NOT:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.YIELD:
			case Python3Parser.DEL:
			case Python3Parser.PASS:
			case Python3Parser.CONTINUE:
			case Python3Parser.BREAK:
			case Python3Parser.AWAIT:
			case Python3Parser.NAME:
			case Python3Parser.ELLIPSIS:
			case Python3Parser.STAR:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.NOT_OP:
			case Python3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 183;
				this.simple_stmt();
				}
				break;
			case Python3Parser.DEF:
			case Python3Parser.IF:
			case Python3Parser.WHILE:
			case Python3Parser.FOR:
			case Python3Parser.TRY:
			case Python3Parser.WITH:
			case Python3Parser.CLASS:
			case Python3Parser.ASYNC:
			case Python3Parser.AT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 184;
				this.compound_stmt();
				this.state = 185;
				this.match(Python3Parser.NEWLINE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public file_input(): File_inputContext {
		let _localctx: File_inputContext = new File_inputContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, Python3Parser.RULE_file_input);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 193;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.STRING) | (1 << Python3Parser.NUMBER) | (1 << Python3Parser.DEF) | (1 << Python3Parser.RETURN) | (1 << Python3Parser.RAISE) | (1 << Python3Parser.FROM) | (1 << Python3Parser.IMPORT) | (1 << Python3Parser.GLOBAL) | (1 << Python3Parser.NONLOCAL) | (1 << Python3Parser.ASSERT) | (1 << Python3Parser.IF) | (1 << Python3Parser.WHILE) | (1 << Python3Parser.FOR) | (1 << Python3Parser.TRY) | (1 << Python3Parser.WITH) | (1 << Python3Parser.LAMBDA) | (1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (Python3Parser.CLASS - 32)) | (1 << (Python3Parser.YIELD - 32)) | (1 << (Python3Parser.DEL - 32)) | (1 << (Python3Parser.PASS - 32)) | (1 << (Python3Parser.CONTINUE - 32)) | (1 << (Python3Parser.BREAK - 32)) | (1 << (Python3Parser.ASYNC - 32)) | (1 << (Python3Parser.AWAIT - 32)) | (1 << (Python3Parser.NEWLINE - 32)) | (1 << (Python3Parser.NAME - 32)) | (1 << (Python3Parser.ELLIPSIS - 32)) | (1 << (Python3Parser.STAR - 32)) | (1 << (Python3Parser.OPEN_PAREN - 32)) | (1 << (Python3Parser.OPEN_BRACK - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (Python3Parser.ADD - 67)) | (1 << (Python3Parser.MINUS - 67)) | (1 << (Python3Parser.NOT_OP - 67)) | (1 << (Python3Parser.OPEN_BRACE - 67)) | (1 << (Python3Parser.AT - 67)))) !== 0)) {
				{
				this.state = 191;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Python3Parser.NEWLINE:
					{
					this.state = 189;
					this.match(Python3Parser.NEWLINE);
					}
					break;
				case Python3Parser.STRING:
				case Python3Parser.NUMBER:
				case Python3Parser.DEF:
				case Python3Parser.RETURN:
				case Python3Parser.RAISE:
				case Python3Parser.FROM:
				case Python3Parser.IMPORT:
				case Python3Parser.GLOBAL:
				case Python3Parser.NONLOCAL:
				case Python3Parser.ASSERT:
				case Python3Parser.IF:
				case Python3Parser.WHILE:
				case Python3Parser.FOR:
				case Python3Parser.TRY:
				case Python3Parser.WITH:
				case Python3Parser.LAMBDA:
				case Python3Parser.NOT:
				case Python3Parser.NONE:
				case Python3Parser.TRUE:
				case Python3Parser.FALSE:
				case Python3Parser.CLASS:
				case Python3Parser.YIELD:
				case Python3Parser.DEL:
				case Python3Parser.PASS:
				case Python3Parser.CONTINUE:
				case Python3Parser.BREAK:
				case Python3Parser.ASYNC:
				case Python3Parser.AWAIT:
				case Python3Parser.NAME:
				case Python3Parser.ELLIPSIS:
				case Python3Parser.STAR:
				case Python3Parser.OPEN_PAREN:
				case Python3Parser.OPEN_BRACK:
				case Python3Parser.ADD:
				case Python3Parser.MINUS:
				case Python3Parser.NOT_OP:
				case Python3Parser.OPEN_BRACE:
				case Python3Parser.AT:
					{
					this.state = 190;
					this.stmt();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 195;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 196;
			this.match(Python3Parser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eval_input(): Eval_inputContext {
		let _localctx: Eval_inputContext = new Eval_inputContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, Python3Parser.RULE_eval_input);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 198;
			this.testlist();
			this.state = 202;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Python3Parser.NEWLINE) {
				{
				{
				this.state = 199;
				this.match(Python3Parser.NEWLINE);
				}
				}
				this.state = 204;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 205;
			this.match(Python3Parser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public decorator(): DecoratorContext {
		let _localctx: DecoratorContext = new DecoratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, Python3Parser.RULE_decorator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 207;
			this.match(Python3Parser.AT);
			this.state = 208;
			this.dotted_name();
			this.state = 214;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Python3Parser.OPEN_PAREN) {
				{
				this.state = 209;
				this.match(Python3Parser.OPEN_PAREN);
				this.state = 211;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.STRING) | (1 << Python3Parser.NUMBER) | (1 << Python3Parser.LAMBDA) | (1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (Python3Parser.AWAIT - 39)) | (1 << (Python3Parser.NAME - 39)) | (1 << (Python3Parser.ELLIPSIS - 39)) | (1 << (Python3Parser.STAR - 39)) | (1 << (Python3Parser.OPEN_PAREN - 39)) | (1 << (Python3Parser.POWER - 39)) | (1 << (Python3Parser.OPEN_BRACK - 39)) | (1 << (Python3Parser.ADD - 39)) | (1 << (Python3Parser.MINUS - 39)))) !== 0) || _la === Python3Parser.NOT_OP || _la === Python3Parser.OPEN_BRACE) {
					{
					this.state = 210;
					this.arglist();
					}
				}

				this.state = 213;
				this.match(Python3Parser.CLOSE_PAREN);
				}
			}

			this.state = 216;
			this.match(Python3Parser.NEWLINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public decorators(): DecoratorsContext {
		let _localctx: DecoratorsContext = new DecoratorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, Python3Parser.RULE_decorators);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 219;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 218;
				this.decorator();
				}
				}
				this.state = 221;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === Python3Parser.AT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public decorated(): DecoratedContext {
		let _localctx: DecoratedContext = new DecoratedContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, Python3Parser.RULE_decorated);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 223;
			this.decorators();
			this.state = 227;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.CLASS:
				{
				this.state = 224;
				this.classdef();
				}
				break;
			case Python3Parser.DEF:
				{
				this.state = 225;
				this.funcdef();
				}
				break;
			case Python3Parser.ASYNC:
				{
				this.state = 226;
				this.async_funcdef();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public async_funcdef(): Async_funcdefContext {
		let _localctx: Async_funcdefContext = new Async_funcdefContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, Python3Parser.RULE_async_funcdef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 229;
			this.match(Python3Parser.ASYNC);
			this.state = 230;
			this.funcdef();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funcdef(): FuncdefContext {
		let _localctx: FuncdefContext = new FuncdefContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, Python3Parser.RULE_funcdef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 232;
			this.match(Python3Parser.DEF);
			this.state = 233;
			this.match(Python3Parser.NAME);
			this.state = 234;
			this.parameters();
			this.state = 237;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Python3Parser.ARROW) {
				{
				this.state = 235;
				this.match(Python3Parser.ARROW);
				this.state = 236;
				this.test();
				}
			}

			this.state = 239;
			this.match(Python3Parser.COLON);
			this.state = 240;
			this.suite();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameters(): ParametersContext {
		let _localctx: ParametersContext = new ParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, Python3Parser.RULE_parameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 242;
			this.match(Python3Parser.OPEN_PAREN);
			this.state = 244;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (Python3Parser.NAME - 41)) | (1 << (Python3Parser.STAR - 41)) | (1 << (Python3Parser.POWER - 41)))) !== 0)) {
				{
				this.state = 243;
				this.typedargslist();
				}
			}

			this.state = 246;
			this.match(Python3Parser.CLOSE_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typedargslist(): TypedargslistContext {
		let _localctx: TypedargslistContext = new TypedargslistContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, Python3Parser.RULE_typedargslist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 512;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
			case 1:
				{
				{
				this.state = 248;
				this.tfpdef();
				this.state = 251;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Python3Parser.ASSIGN) {
					{
					this.state = 249;
					this.match(Python3Parser.ASSIGN);
					this.state = 250;
					this.test();
					}
				}

				this.state = 264;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 253;
						this.match(Python3Parser.COMMA);
						this.state = 255;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === Python3Parser.TYPE_COMMENT) {
							{
							this.state = 254;
							this.match(Python3Parser.TYPE_COMMENT);
							}
						}

						this.state = 257;
						this.tfpdef();
						this.state = 260;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === Python3Parser.ASSIGN) {
							{
							this.state = 258;
							this.match(Python3Parser.ASSIGN);
							this.state = 259;
							this.test();
							}
						}

						}
						}
					}
					this.state = 266;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
				}
				this.state = 267;
				this.match(Python3Parser.COMMA);
				this.state = 269;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Python3Parser.TYPE_COMMENT) {
					{
					this.state = 268;
					this.match(Python3Parser.TYPE_COMMENT);
					}
				}

				this.state = 271;
				this.match(Python3Parser.DIV);
				this.state = 392;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Python3Parser.COMMA) {
					{
					this.state = 272;
					this.match(Python3Parser.COMMA);
					this.state = 390;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case Python3Parser.NAME:
					case Python3Parser.TYPE_COMMENT:
						{
						this.state = 274;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === Python3Parser.TYPE_COMMENT) {
							{
							this.state = 273;
							this.match(Python3Parser.TYPE_COMMENT);
							}
						}

						this.state = 276;
						this.tfpdef();
						this.state = 279;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === Python3Parser.ASSIGN) {
							{
							this.state = 277;
							this.match(Python3Parser.ASSIGN);
							this.state = 278;
							this.test();
							}
						}

						this.state = 292;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 281;
								this.match(Python3Parser.COMMA);
								this.state = 283;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								if (_la === Python3Parser.TYPE_COMMENT) {
									{
									this.state = 282;
									this.match(Python3Parser.TYPE_COMMENT);
									}
								}

								this.state = 285;
								this.tfpdef();
								this.state = 288;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								if (_la === Python3Parser.ASSIGN) {
									{
									this.state = 286;
									this.match(Python3Parser.ASSIGN);
									this.state = 287;
									this.test();
									}
								}

								}
								}
							}
							this.state = 294;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
						}
						this.state = 345;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case Python3Parser.TYPE_COMMENT:
							{
							this.state = 295;
							this.match(Python3Parser.TYPE_COMMENT);
							}
							break;
						case Python3Parser.CLOSE_PAREN:
						case Python3Parser.COMMA:
							{
							this.state = 343;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === Python3Parser.COMMA) {
								{
								this.state = 296;
								this.match(Python3Parser.COMMA);
								this.state = 298;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								if (_la === Python3Parser.TYPE_COMMENT) {
									{
									this.state = 297;
									this.match(Python3Parser.TYPE_COMMENT);
									}
								}

								this.state = 341;
								this._errHandler.sync(this);
								switch (this._input.LA(1)) {
								case Python3Parser.STAR:
									{
									this.state = 300;
									this.match(Python3Parser.STAR);
									this.state = 302;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
									if (_la === Python3Parser.NAME) {
										{
										this.state = 301;
										this.tfpdef();
										}
									}

									this.state = 313;
									this._errHandler.sync(this);
									_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
									while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
										if (_alt === 1) {
											{
											{
											this.state = 304;
											this.match(Python3Parser.COMMA);
											{
											this.state = 305;
											this.match(Python3Parser.TYPE_COMMENT);
											}
											this.state = 306;
											this.tfpdef();
											this.state = 309;
											this._errHandler.sync(this);
											_la = this._input.LA(1);
											if (_la === Python3Parser.ASSIGN) {
												{
												this.state = 307;
												this.match(Python3Parser.ASSIGN);
												this.state = 308;
												this.test();
												}
											}

											}
											}
										}
										this.state = 315;
										this._errHandler.sync(this);
										_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
									}
									this.state = 333;
									this._errHandler.sync(this);
									switch (this._input.LA(1)) {
									case Python3Parser.TYPE_COMMENT:
										{
										this.state = 316;
										this.match(Python3Parser.TYPE_COMMENT);
										}
										break;
									case Python3Parser.CLOSE_PAREN:
									case Python3Parser.COMMA:
										{
										this.state = 331;
										this._errHandler.sync(this);
										_la = this._input.LA(1);
										if (_la === Python3Parser.COMMA) {
											{
											this.state = 317;
											this.match(Python3Parser.COMMA);
											this.state = 319;
											this._errHandler.sync(this);
											_la = this._input.LA(1);
											if (_la === Python3Parser.TYPE_COMMENT) {
												{
												this.state = 318;
												this.match(Python3Parser.TYPE_COMMENT);
												}
											}

											this.state = 329;
											this._errHandler.sync(this);
											_la = this._input.LA(1);
											if (_la === Python3Parser.POWER) {
												{
												this.state = 321;
												this.match(Python3Parser.POWER);
												this.state = 322;
												this.tfpdef();
												this.state = 324;
												this._errHandler.sync(this);
												_la = this._input.LA(1);
												if (_la === Python3Parser.COMMA) {
													{
													this.state = 323;
													this.match(Python3Parser.COMMA);
													}
												}

												this.state = 327;
												this._errHandler.sync(this);
												_la = this._input.LA(1);
												if (_la === Python3Parser.TYPE_COMMENT) {
													{
													this.state = 326;
													this.match(Python3Parser.TYPE_COMMENT);
													}
												}

												}
											}

											}
										}

										}
										break;
									default:
										throw new NoViableAltException(this);
									}
									}
									break;
								case Python3Parser.POWER:
									{
									this.state = 335;
									this.match(Python3Parser.POWER);
									this.state = 336;
									this.tfpdef();
									{
									this.state = 337;
									this.match(Python3Parser.COMMA);
									}
									this.state = 339;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
									if (_la === Python3Parser.TYPE_COMMENT) {
										{
										this.state = 338;
										this.match(Python3Parser.TYPE_COMMENT);
										}
									}

									}
									break;
								case Python3Parser.CLOSE_PAREN:
									break;
								default:
									break;
								}
								}
							}

							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
						break;
					case Python3Parser.STAR:
						{
						this.state = 347;
						this.match(Python3Parser.STAR);
						this.state = 349;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === Python3Parser.NAME) {
							{
							this.state = 348;
							this.tfpdef();
							}
						}

						this.state = 362;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 351;
								this.match(Python3Parser.COMMA);
								this.state = 353;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								if (_la === Python3Parser.TYPE_COMMENT) {
									{
									this.state = 352;
									this.match(Python3Parser.TYPE_COMMENT);
									}
								}

								this.state = 355;
								this.tfpdef();
								this.state = 358;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								if (_la === Python3Parser.ASSIGN) {
									{
									this.state = 356;
									this.match(Python3Parser.ASSIGN);
									this.state = 357;
									this.test();
									}
								}

								}
								}
							}
							this.state = 364;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
						}
						this.state = 382;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case Python3Parser.TYPE_COMMENT:
							{
							this.state = 365;
							this.match(Python3Parser.TYPE_COMMENT);
							}
							break;
						case Python3Parser.CLOSE_PAREN:
						case Python3Parser.COMMA:
							{
							this.state = 380;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === Python3Parser.COMMA) {
								{
								this.state = 366;
								this.match(Python3Parser.COMMA);
								this.state = 368;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								if (_la === Python3Parser.TYPE_COMMENT) {
									{
									this.state = 367;
									this.match(Python3Parser.TYPE_COMMENT);
									}
								}

								this.state = 378;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								if (_la === Python3Parser.POWER) {
									{
									this.state = 370;
									this.match(Python3Parser.POWER);
									this.state = 371;
									this.tfpdef();
									this.state = 373;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
									if (_la === Python3Parser.COMMA) {
										{
										this.state = 372;
										this.match(Python3Parser.COMMA);
										}
									}

									this.state = 376;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
									if (_la === Python3Parser.TYPE_COMMENT) {
										{
										this.state = 375;
										this.match(Python3Parser.TYPE_COMMENT);
										}
									}

									}
								}

								}
							}

							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
						break;
					case Python3Parser.POWER:
						{
						this.state = 384;
						this.match(Python3Parser.POWER);
						this.state = 385;
						this.tfpdef();
						{
						this.state = 386;
						this.match(Python3Parser.COMMA);
						}
						this.state = 388;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === Python3Parser.TYPE_COMMENT) {
							{
							this.state = 387;
							this.match(Python3Parser.TYPE_COMMENT);
							}
						}

						}
						break;
					case Python3Parser.CLOSE_PAREN:
						break;
					default:
						break;
					}
					}
				}

				}
				}
				break;

			case 2:
				{
				this.state = 510;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Python3Parser.NAME:
					{
					this.state = 394;
					this.tfpdef();
					this.state = 397;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === Python3Parser.ASSIGN) {
						{
						this.state = 395;
						this.match(Python3Parser.ASSIGN);
						this.state = 396;
						this.test();
						}
					}

					this.state = 410;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 399;
							this.match(Python3Parser.COMMA);
							this.state = 401;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === Python3Parser.TYPE_COMMENT) {
								{
								this.state = 400;
								this.match(Python3Parser.TYPE_COMMENT);
								}
							}

							this.state = 403;
							this.tfpdef();
							this.state = 406;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === Python3Parser.ASSIGN) {
								{
								this.state = 404;
								this.match(Python3Parser.ASSIGN);
								this.state = 405;
								this.test();
								}
							}

							}
							}
						}
						this.state = 412;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
					}
					this.state = 463;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case Python3Parser.TYPE_COMMENT:
						{
						this.state = 413;
						this.match(Python3Parser.TYPE_COMMENT);
						}
						break;
					case Python3Parser.CLOSE_PAREN:
					case Python3Parser.COMMA:
						{
						this.state = 461;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === Python3Parser.COMMA) {
							{
							this.state = 414;
							this.match(Python3Parser.COMMA);
							this.state = 416;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === Python3Parser.TYPE_COMMENT) {
								{
								this.state = 415;
								this.match(Python3Parser.TYPE_COMMENT);
								}
							}

							this.state = 459;
							this._errHandler.sync(this);
							switch (this._input.LA(1)) {
							case Python3Parser.STAR:
								{
								this.state = 418;
								this.match(Python3Parser.STAR);
								{
								this.state = 419;
								this.tfpdef();
								}
								this.state = 429;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
								while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
									if (_alt === 1) {
										{
										{
										this.state = 420;
										this.match(Python3Parser.COMMA);
										{
										this.state = 421;
										this.match(Python3Parser.TYPE_COMMENT);
										}
										this.state = 422;
										this.tfpdef();
										this.state = 425;
										this._errHandler.sync(this);
										_la = this._input.LA(1);
										if (_la === Python3Parser.ASSIGN) {
											{
											this.state = 423;
											this.match(Python3Parser.ASSIGN);
											this.state = 424;
											this.test();
											}
										}

										}
										}
									}
									this.state = 431;
									this._errHandler.sync(this);
									_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
								}
								this.state = 449;
								this._errHandler.sync(this);
								switch (this._input.LA(1)) {
								case Python3Parser.TYPE_COMMENT:
									{
									this.state = 432;
									this.match(Python3Parser.TYPE_COMMENT);
									}
									break;
								case Python3Parser.CLOSE_PAREN:
								case Python3Parser.COMMA:
									{
									this.state = 447;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
									if (_la === Python3Parser.COMMA) {
										{
										this.state = 433;
										this.match(Python3Parser.COMMA);
										this.state = 435;
										this._errHandler.sync(this);
										_la = this._input.LA(1);
										if (_la === Python3Parser.TYPE_COMMENT) {
											{
											this.state = 434;
											this.match(Python3Parser.TYPE_COMMENT);
											}
										}

										this.state = 445;
										this._errHandler.sync(this);
										_la = this._input.LA(1);
										if (_la === Python3Parser.POWER) {
											{
											this.state = 437;
											this.match(Python3Parser.POWER);
											this.state = 438;
											this.tfpdef();
											this.state = 440;
											this._errHandler.sync(this);
											_la = this._input.LA(1);
											if (_la === Python3Parser.COMMA) {
												{
												this.state = 439;
												this.match(Python3Parser.COMMA);
												}
											}

											this.state = 443;
											this._errHandler.sync(this);
											_la = this._input.LA(1);
											if (_la === Python3Parser.TYPE_COMMENT) {
												{
												this.state = 442;
												this.match(Python3Parser.TYPE_COMMENT);
												}
											}

											}
										}

										}
									}

									}
									break;
								default:
									throw new NoViableAltException(this);
								}
								}
								break;
							case Python3Parser.POWER:
								{
								this.state = 451;
								this.match(Python3Parser.POWER);
								this.state = 452;
								this.tfpdef();
								this.state = 454;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								if (_la === Python3Parser.COMMA) {
									{
									this.state = 453;
									this.match(Python3Parser.COMMA);
									}
								}

								this.state = 457;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								if (_la === Python3Parser.TYPE_COMMENT) {
									{
									this.state = 456;
									this.match(Python3Parser.TYPE_COMMENT);
									}
								}

								}
								break;
							case Python3Parser.CLOSE_PAREN:
								break;
							default:
								break;
							}
							}
						}

						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				case Python3Parser.STAR:
					{
					this.state = 465;
					this.match(Python3Parser.STAR);
					this.state = 467;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === Python3Parser.NAME) {
						{
						this.state = 466;
						this.tfpdef();
						}
					}

					this.state = 480;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 469;
							this.match(Python3Parser.COMMA);
							this.state = 471;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === Python3Parser.TYPE_COMMENT) {
								{
								this.state = 470;
								this.match(Python3Parser.TYPE_COMMENT);
								}
							}

							this.state = 473;
							this.tfpdef();
							this.state = 476;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === Python3Parser.ASSIGN) {
								{
								this.state = 474;
								this.match(Python3Parser.ASSIGN);
								this.state = 475;
								this.test();
								}
							}

							}
							}
						}
						this.state = 482;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
					}
					this.state = 500;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case Python3Parser.TYPE_COMMENT:
						{
						this.state = 483;
						this.match(Python3Parser.TYPE_COMMENT);
						}
						break;
					case Python3Parser.CLOSE_PAREN:
					case Python3Parser.COMMA:
						{
						this.state = 498;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === Python3Parser.COMMA) {
							{
							this.state = 484;
							this.match(Python3Parser.COMMA);
							this.state = 486;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === Python3Parser.TYPE_COMMENT) {
								{
								this.state = 485;
								this.match(Python3Parser.TYPE_COMMENT);
								}
							}

							this.state = 496;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === Python3Parser.POWER) {
								{
								this.state = 488;
								this.match(Python3Parser.POWER);
								this.state = 489;
								this.tfpdef();
								this.state = 491;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								if (_la === Python3Parser.COMMA) {
									{
									this.state = 490;
									this.match(Python3Parser.COMMA);
									}
								}

								this.state = 494;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								if (_la === Python3Parser.TYPE_COMMENT) {
									{
									this.state = 493;
									this.match(Python3Parser.TYPE_COMMENT);
									}
								}

								}
							}

							}
						}

						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				case Python3Parser.POWER:
					{
					this.state = 502;
					this.match(Python3Parser.POWER);
					this.state = 503;
					this.tfpdef();
					this.state = 505;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === Python3Parser.COMMA) {
						{
						this.state = 504;
						this.match(Python3Parser.COMMA);
						}
					}

					this.state = 508;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === Python3Parser.TYPE_COMMENT) {
						{
						this.state = 507;
						this.match(Python3Parser.TYPE_COMMENT);
						}
					}

					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tfpdef(): TfpdefContext {
		let _localctx: TfpdefContext = new TfpdefContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, Python3Parser.RULE_tfpdef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 514;
			this.match(Python3Parser.NAME);
			this.state = 517;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Python3Parser.COLON) {
				{
				this.state = 515;
				this.match(Python3Parser.COLON);
				this.state = 516;
				this.test();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varargslist(): VarargslistContext {
		let _localctx: VarargslistContext = new VarargslistContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, Python3Parser.RULE_varargslist);
		let _la: number;
		try {
			let _alt: number;
			this.state = 708;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 125, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 519;
				this.vfpdef();
				this.state = 522;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Python3Parser.ASSIGN) {
					{
					this.state = 520;
					this.match(Python3Parser.ASSIGN);
					this.state = 521;
					this.test();
					}
				}

				this.state = 532;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 524;
						this.match(Python3Parser.COMMA);
						this.state = 525;
						this.vfpdef();
						this.state = 528;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === Python3Parser.ASSIGN) {
							{
							this.state = 526;
							this.match(Python3Parser.ASSIGN);
							this.state = 527;
							this.test();
							}
						}

						}
						}
					}
					this.state = 534;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
				}
				this.state = 535;
				this.match(Python3Parser.COMMA);
				this.state = 536;
				this.match(Python3Parser.DIV);
				this.state = 623;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Python3Parser.COMMA) {
					{
					this.state = 537;
					this.match(Python3Parser.COMMA);
					this.state = 621;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (Python3Parser.NAME - 41)) | (1 << (Python3Parser.STAR - 41)) | (1 << (Python3Parser.POWER - 41)))) !== 0)) {
						{
						this.state = 619;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case Python3Parser.NAME:
							{
							this.state = 538;
							this.vfpdef();
							this.state = 541;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === Python3Parser.ASSIGN) {
								{
								this.state = 539;
								this.match(Python3Parser.ASSIGN);
								this.state = 540;
								this.test();
								}
							}

							this.state = 551;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 85, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 543;
									this.match(Python3Parser.COMMA);
									this.state = 544;
									this.vfpdef();
									this.state = 547;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
									if (_la === Python3Parser.ASSIGN) {
										{
										this.state = 545;
										this.match(Python3Parser.ASSIGN);
										this.state = 546;
										this.test();
										}
									}

									}
									}
								}
								this.state = 553;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 85, this._ctx);
							}
							this.state = 587;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === Python3Parser.COMMA) {
								{
								this.state = 554;
								this.match(Python3Parser.COMMA);
								this.state = 585;
								this._errHandler.sync(this);
								switch (this._input.LA(1)) {
								case Python3Parser.STAR:
									{
									this.state = 555;
									this.match(Python3Parser.STAR);
									this.state = 557;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
									if (_la === Python3Parser.NAME) {
										{
										this.state = 556;
										this.vfpdef();
										}
									}

									this.state = 567;
									this._errHandler.sync(this);
									_alt = this.interpreter.adaptivePredict(this._input, 88, this._ctx);
									while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
										if (_alt === 1) {
											{
											{
											this.state = 559;
											this.match(Python3Parser.COMMA);
											this.state = 560;
											this.vfpdef();
											this.state = 563;
											this._errHandler.sync(this);
											_la = this._input.LA(1);
											if (_la === Python3Parser.ASSIGN) {
												{
												this.state = 561;
												this.match(Python3Parser.ASSIGN);
												this.state = 562;
												this.test();
												}
											}

											}
											}
										}
										this.state = 569;
										this._errHandler.sync(this);
										_alt = this.interpreter.adaptivePredict(this._input, 88, this._ctx);
									}
									this.state = 578;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
									if (_la === Python3Parser.COMMA) {
										{
										this.state = 570;
										this.match(Python3Parser.COMMA);
										this.state = 576;
										this._errHandler.sync(this);
										_la = this._input.LA(1);
										if (_la === Python3Parser.POWER) {
											{
											this.state = 571;
											this.match(Python3Parser.POWER);
											this.state = 572;
											this.vfpdef();
											this.state = 574;
											this._errHandler.sync(this);
											_la = this._input.LA(1);
											if (_la === Python3Parser.COMMA) {
												{
												this.state = 573;
												this.match(Python3Parser.COMMA);
												}
											}

											}
										}

										}
									}

									}
									break;
								case Python3Parser.POWER:
									{
									this.state = 580;
									this.match(Python3Parser.POWER);
									this.state = 581;
									this.vfpdef();
									this.state = 583;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
									if (_la === Python3Parser.COMMA) {
										{
										this.state = 582;
										this.match(Python3Parser.COMMA);
										}
									}

									}
									break;
								case Python3Parser.COLON:
									break;
								default:
									break;
								}
								}
							}

							}
							break;
						case Python3Parser.STAR:
							{
							this.state = 589;
							this.match(Python3Parser.STAR);
							this.state = 591;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === Python3Parser.NAME) {
								{
								this.state = 590;
								this.vfpdef();
								}
							}

							this.state = 601;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 593;
									this.match(Python3Parser.COMMA);
									this.state = 594;
									this.vfpdef();
									this.state = 597;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
									if (_la === Python3Parser.ASSIGN) {
										{
										this.state = 595;
										this.match(Python3Parser.ASSIGN);
										this.state = 596;
										this.test();
										}
									}

									}
									}
								}
								this.state = 603;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
							}
							this.state = 612;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === Python3Parser.COMMA) {
								{
								this.state = 604;
								this.match(Python3Parser.COMMA);
								this.state = 610;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								if (_la === Python3Parser.POWER) {
									{
									this.state = 605;
									this.match(Python3Parser.POWER);
									this.state = 606;
									this.vfpdef();
									this.state = 608;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
									if (_la === Python3Parser.COMMA) {
										{
										this.state = 607;
										this.match(Python3Parser.COMMA);
										}
									}

									}
								}

								}
							}

							}
							break;
						case Python3Parser.POWER:
							{
							this.state = 614;
							this.match(Python3Parser.POWER);
							this.state = 615;
							this.vfpdef();
							this.state = 617;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === Python3Parser.COMMA) {
								{
								this.state = 616;
								this.match(Python3Parser.COMMA);
								}
							}

							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
					}

					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 706;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Python3Parser.NAME:
					{
					this.state = 625;
					this.vfpdef();
					this.state = 628;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === Python3Parser.ASSIGN) {
						{
						this.state = 626;
						this.match(Python3Parser.ASSIGN);
						this.state = 627;
						this.test();
						}
					}

					this.state = 638;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 630;
							this.match(Python3Parser.COMMA);
							this.state = 631;
							this.vfpdef();
							this.state = 634;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === Python3Parser.ASSIGN) {
								{
								this.state = 632;
								this.match(Python3Parser.ASSIGN);
								this.state = 633;
								this.test();
								}
							}

							}
							}
						}
						this.state = 640;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
					}
					this.state = 674;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === Python3Parser.COMMA) {
						{
						this.state = 641;
						this.match(Python3Parser.COMMA);
						this.state = 672;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case Python3Parser.STAR:
							{
							this.state = 642;
							this.match(Python3Parser.STAR);
							this.state = 644;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === Python3Parser.NAME) {
								{
								this.state = 643;
								this.vfpdef();
								}
							}

							this.state = 654;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 110, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 646;
									this.match(Python3Parser.COMMA);
									this.state = 647;
									this.vfpdef();
									this.state = 650;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
									if (_la === Python3Parser.ASSIGN) {
										{
										this.state = 648;
										this.match(Python3Parser.ASSIGN);
										this.state = 649;
										this.test();
										}
									}

									}
									}
								}
								this.state = 656;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 110, this._ctx);
							}
							this.state = 665;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === Python3Parser.COMMA) {
								{
								this.state = 657;
								this.match(Python3Parser.COMMA);
								this.state = 663;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								if (_la === Python3Parser.POWER) {
									{
									this.state = 658;
									this.match(Python3Parser.POWER);
									this.state = 659;
									this.vfpdef();
									this.state = 661;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
									if (_la === Python3Parser.COMMA) {
										{
										this.state = 660;
										this.match(Python3Parser.COMMA);
										}
									}

									}
								}

								}
							}

							}
							break;
						case Python3Parser.POWER:
							{
							this.state = 667;
							this.match(Python3Parser.POWER);
							this.state = 668;
							this.vfpdef();
							this.state = 670;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === Python3Parser.COMMA) {
								{
								this.state = 669;
								this.match(Python3Parser.COMMA);
								}
							}

							}
							break;
						case Python3Parser.COLON:
							break;
						default:
							break;
						}
						}
					}

					}
					break;
				case Python3Parser.STAR:
					{
					this.state = 676;
					this.match(Python3Parser.STAR);
					this.state = 678;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === Python3Parser.NAME) {
						{
						this.state = 677;
						this.vfpdef();
						}
					}

					this.state = 688;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 119, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 680;
							this.match(Python3Parser.COMMA);
							this.state = 681;
							this.vfpdef();
							this.state = 684;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === Python3Parser.ASSIGN) {
								{
								this.state = 682;
								this.match(Python3Parser.ASSIGN);
								this.state = 683;
								this.test();
								}
							}

							}
							}
						}
						this.state = 690;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 119, this._ctx);
					}
					this.state = 699;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === Python3Parser.COMMA) {
						{
						this.state = 691;
						this.match(Python3Parser.COMMA);
						this.state = 697;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === Python3Parser.POWER) {
							{
							this.state = 692;
							this.match(Python3Parser.POWER);
							this.state = 693;
							this.vfpdef();
							this.state = 695;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === Python3Parser.COMMA) {
								{
								this.state = 694;
								this.match(Python3Parser.COMMA);
								}
							}

							}
						}

						}
					}

					}
					break;
				case Python3Parser.POWER:
					{
					this.state = 701;
					this.match(Python3Parser.POWER);
					this.state = 702;
					this.vfpdef();
					this.state = 704;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === Python3Parser.COMMA) {
						{
						this.state = 703;
						this.match(Python3Parser.COMMA);
						}
					}

					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public vfpdef(): VfpdefContext {
		let _localctx: VfpdefContext = new VfpdefContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, Python3Parser.RULE_vfpdef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 710;
			this.match(Python3Parser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stmt(): StmtContext {
		let _localctx: StmtContext = new StmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, Python3Parser.RULE_stmt);
		try {
			this.state = 714;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.STRING:
			case Python3Parser.NUMBER:
			case Python3Parser.RETURN:
			case Python3Parser.RAISE:
			case Python3Parser.FROM:
			case Python3Parser.IMPORT:
			case Python3Parser.GLOBAL:
			case Python3Parser.NONLOCAL:
			case Python3Parser.ASSERT:
			case Python3Parser.LAMBDA:
			case Python3Parser.NOT:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.YIELD:
			case Python3Parser.DEL:
			case Python3Parser.PASS:
			case Python3Parser.CONTINUE:
			case Python3Parser.BREAK:
			case Python3Parser.AWAIT:
			case Python3Parser.NAME:
			case Python3Parser.ELLIPSIS:
			case Python3Parser.STAR:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.NOT_OP:
			case Python3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 712;
				this.simple_stmt();
				}
				break;
			case Python3Parser.DEF:
			case Python3Parser.IF:
			case Python3Parser.WHILE:
			case Python3Parser.FOR:
			case Python3Parser.TRY:
			case Python3Parser.WITH:
			case Python3Parser.CLASS:
			case Python3Parser.ASYNC:
			case Python3Parser.AT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 713;
				this.compound_stmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simple_stmt(): Simple_stmtContext {
		let _localctx: Simple_stmtContext = new Simple_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, Python3Parser.RULE_simple_stmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 716;
			this.small_stmt();
			this.state = 721;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 717;
					this.match(Python3Parser.SEMI_COLON);
					this.state = 718;
					this.small_stmt();
					}
					}
				}
				this.state = 723;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
			}
			this.state = 725;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Python3Parser.SEMI_COLON) {
				{
				this.state = 724;
				this.match(Python3Parser.SEMI_COLON);
				}
			}

			this.state = 727;
			this.match(Python3Parser.NEWLINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public small_stmt(): Small_stmtContext {
		let _localctx: Small_stmtContext = new Small_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, Python3Parser.RULE_small_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 737;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.STRING:
			case Python3Parser.NUMBER:
			case Python3Parser.LAMBDA:
			case Python3Parser.NOT:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.AWAIT:
			case Python3Parser.NAME:
			case Python3Parser.ELLIPSIS:
			case Python3Parser.STAR:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.NOT_OP:
			case Python3Parser.OPEN_BRACE:
				{
				this.state = 729;
				this.expr_stmt();
				}
				break;
			case Python3Parser.DEL:
				{
				this.state = 730;
				this.del_stmt();
				}
				break;
			case Python3Parser.PASS:
				{
				this.state = 731;
				this.pass_stmt();
				}
				break;
			case Python3Parser.RETURN:
			case Python3Parser.RAISE:
			case Python3Parser.YIELD:
			case Python3Parser.CONTINUE:
			case Python3Parser.BREAK:
				{
				this.state = 732;
				this.flow_stmt();
				}
				break;
			case Python3Parser.FROM:
			case Python3Parser.IMPORT:
				{
				this.state = 733;
				this.import_stmt();
				}
				break;
			case Python3Parser.GLOBAL:
				{
				this.state = 734;
				this.global_stmt();
				}
				break;
			case Python3Parser.NONLOCAL:
				{
				this.state = 735;
				this.nonlocal_stmt();
				}
				break;
			case Python3Parser.ASSERT:
				{
				this.state = 736;
				this.assert_stmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr_stmt(): Expr_stmtContext {
		let _localctx: Expr_stmtContext = new Expr_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, Python3Parser.RULE_expr_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 739;
			this.testlist_star_expr();
			this.state = 756;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.COLON:
				{
				this.state = 740;
				this.annassign();
				}
				break;
			case Python3Parser.ADD_ASSIGN:
			case Python3Parser.SUB_ASSIGN:
			case Python3Parser.MULT_ASSIGN:
			case Python3Parser.AT_ASSIGN:
			case Python3Parser.DIV_ASSIGN:
			case Python3Parser.MOD_ASSIGN:
			case Python3Parser.AND_ASSIGN:
			case Python3Parser.OR_ASSIGN:
			case Python3Parser.XOR_ASSIGN:
			case Python3Parser.LEFT_SHIFT_ASSIGN:
			case Python3Parser.RIGHT_SHIFT_ASSIGN:
			case Python3Parser.POWER_ASSIGN:
			case Python3Parser.IDIV_ASSIGN:
				{
				this.state = 741;
				this.augassign();
				this.state = 744;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Python3Parser.YIELD:
					{
					this.state = 742;
					this.yield_expr();
					}
					break;
				case Python3Parser.STRING:
				case Python3Parser.NUMBER:
				case Python3Parser.LAMBDA:
				case Python3Parser.NOT:
				case Python3Parser.NONE:
				case Python3Parser.TRUE:
				case Python3Parser.FALSE:
				case Python3Parser.AWAIT:
				case Python3Parser.NAME:
				case Python3Parser.ELLIPSIS:
				case Python3Parser.OPEN_PAREN:
				case Python3Parser.OPEN_BRACK:
				case Python3Parser.ADD:
				case Python3Parser.MINUS:
				case Python3Parser.NOT_OP:
				case Python3Parser.OPEN_BRACE:
					{
					this.state = 743;
					this.testlist();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case Python3Parser.NEWLINE:
			case Python3Parser.SEMI_COLON:
			case Python3Parser.ASSIGN:
				{
				this.state = 753;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Python3Parser.ASSIGN) {
					{
					{
					this.state = 746;
					this.match(Python3Parser.ASSIGN);
					this.state = 749;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case Python3Parser.YIELD:
						{
						this.state = 747;
						this.yield_expr();
						}
						break;
					case Python3Parser.STRING:
					case Python3Parser.NUMBER:
					case Python3Parser.LAMBDA:
					case Python3Parser.NOT:
					case Python3Parser.NONE:
					case Python3Parser.TRUE:
					case Python3Parser.FALSE:
					case Python3Parser.AWAIT:
					case Python3Parser.NAME:
					case Python3Parser.ELLIPSIS:
					case Python3Parser.STAR:
					case Python3Parser.OPEN_PAREN:
					case Python3Parser.OPEN_BRACK:
					case Python3Parser.ADD:
					case Python3Parser.MINUS:
					case Python3Parser.NOT_OP:
					case Python3Parser.OPEN_BRACE:
						{
						this.state = 748;
						this.testlist_star_expr();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
					this.state = 755;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annassign(): AnnassignContext {
		let _localctx: AnnassignContext = new AnnassignContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, Python3Parser.RULE_annassign);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 758;
			this.match(Python3Parser.COLON);
			this.state = 759;
			this.test();
			this.state = 762;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Python3Parser.ASSIGN) {
				{
				this.state = 760;
				this.match(Python3Parser.ASSIGN);
				this.state = 761;
				this.test();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public testlist_star_expr(): Testlist_star_exprContext {
		let _localctx: Testlist_star_exprContext = new Testlist_star_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, Python3Parser.RULE_testlist_star_expr);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 766;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.STRING:
			case Python3Parser.NUMBER:
			case Python3Parser.LAMBDA:
			case Python3Parser.NOT:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.AWAIT:
			case Python3Parser.NAME:
			case Python3Parser.ELLIPSIS:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.NOT_OP:
			case Python3Parser.OPEN_BRACE:
				{
				this.state = 764;
				this.test();
				}
				break;
			case Python3Parser.STAR:
				{
				this.state = 765;
				this.star_expr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 775;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 768;
					this.match(Python3Parser.COMMA);
					this.state = 771;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case Python3Parser.STRING:
					case Python3Parser.NUMBER:
					case Python3Parser.LAMBDA:
					case Python3Parser.NOT:
					case Python3Parser.NONE:
					case Python3Parser.TRUE:
					case Python3Parser.FALSE:
					case Python3Parser.AWAIT:
					case Python3Parser.NAME:
					case Python3Parser.ELLIPSIS:
					case Python3Parser.OPEN_PAREN:
					case Python3Parser.OPEN_BRACK:
					case Python3Parser.ADD:
					case Python3Parser.MINUS:
					case Python3Parser.NOT_OP:
					case Python3Parser.OPEN_BRACE:
						{
						this.state = 769;
						this.test();
						}
						break;
					case Python3Parser.STAR:
						{
						this.state = 770;
						this.star_expr();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 777;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
			}
			this.state = 779;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Python3Parser.COMMA) {
				{
				this.state = 778;
				this.match(Python3Parser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public augassign(): AugassignContext {
		let _localctx: AugassignContext = new AugassignContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, Python3Parser.RULE_augassign);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 781;
			_la = this._input.LA(1);
			if (!(((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & ((1 << (Python3Parser.ADD_ASSIGN - 84)) | (1 << (Python3Parser.SUB_ASSIGN - 84)) | (1 << (Python3Parser.MULT_ASSIGN - 84)) | (1 << (Python3Parser.AT_ASSIGN - 84)) | (1 << (Python3Parser.DIV_ASSIGN - 84)) | (1 << (Python3Parser.MOD_ASSIGN - 84)) | (1 << (Python3Parser.AND_ASSIGN - 84)) | (1 << (Python3Parser.OR_ASSIGN - 84)) | (1 << (Python3Parser.XOR_ASSIGN - 84)) | (1 << (Python3Parser.LEFT_SHIFT_ASSIGN - 84)) | (1 << (Python3Parser.RIGHT_SHIFT_ASSIGN - 84)) | (1 << (Python3Parser.POWER_ASSIGN - 84)) | (1 << (Python3Parser.IDIV_ASSIGN - 84)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public del_stmt(): Del_stmtContext {
		let _localctx: Del_stmtContext = new Del_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, Python3Parser.RULE_del_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 783;
			this.match(Python3Parser.DEL);
			this.state = 784;
			this.exprlist();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pass_stmt(): Pass_stmtContext {
		let _localctx: Pass_stmtContext = new Pass_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, Python3Parser.RULE_pass_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 786;
			this.match(Python3Parser.PASS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public flow_stmt(): Flow_stmtContext {
		let _localctx: Flow_stmtContext = new Flow_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, Python3Parser.RULE_flow_stmt);
		try {
			this.state = 793;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.BREAK:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 788;
				this.break_stmt();
				}
				break;
			case Python3Parser.CONTINUE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 789;
				this.continue_stmt();
				}
				break;
			case Python3Parser.RETURN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 790;
				this.return_stmt();
				}
				break;
			case Python3Parser.RAISE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 791;
				this.raise_stmt();
				}
				break;
			case Python3Parser.YIELD:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 792;
				this.yield_stmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public break_stmt(): Break_stmtContext {
		let _localctx: Break_stmtContext = new Break_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, Python3Parser.RULE_break_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 795;
			this.match(Python3Parser.BREAK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public continue_stmt(): Continue_stmtContext {
		let _localctx: Continue_stmtContext = new Continue_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, Python3Parser.RULE_continue_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 797;
			this.match(Python3Parser.CONTINUE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public return_stmt(): Return_stmtContext {
		let _localctx: Return_stmtContext = new Return_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, Python3Parser.RULE_return_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 799;
			this.match(Python3Parser.RETURN);
			this.state = 801;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.STRING) | (1 << Python3Parser.NUMBER) | (1 << Python3Parser.LAMBDA) | (1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (Python3Parser.AWAIT - 39)) | (1 << (Python3Parser.NAME - 39)) | (1 << (Python3Parser.ELLIPSIS - 39)) | (1 << (Python3Parser.OPEN_PAREN - 39)) | (1 << (Python3Parser.OPEN_BRACK - 39)) | (1 << (Python3Parser.ADD - 39)) | (1 << (Python3Parser.MINUS - 39)))) !== 0) || _la === Python3Parser.NOT_OP || _la === Python3Parser.OPEN_BRACE) {
				{
				this.state = 800;
				this.testlist();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public yield_stmt(): Yield_stmtContext {
		let _localctx: Yield_stmtContext = new Yield_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, Python3Parser.RULE_yield_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 803;
			this.yield_expr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public raise_stmt(): Raise_stmtContext {
		let _localctx: Raise_stmtContext = new Raise_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, Python3Parser.RULE_raise_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 805;
			this.match(Python3Parser.RAISE);
			this.state = 811;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.STRING) | (1 << Python3Parser.NUMBER) | (1 << Python3Parser.LAMBDA) | (1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (Python3Parser.AWAIT - 39)) | (1 << (Python3Parser.NAME - 39)) | (1 << (Python3Parser.ELLIPSIS - 39)) | (1 << (Python3Parser.OPEN_PAREN - 39)) | (1 << (Python3Parser.OPEN_BRACK - 39)) | (1 << (Python3Parser.ADD - 39)) | (1 << (Python3Parser.MINUS - 39)))) !== 0) || _la === Python3Parser.NOT_OP || _la === Python3Parser.OPEN_BRACE) {
				{
				this.state = 806;
				this.test();
				this.state = 809;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Python3Parser.FROM) {
					{
					this.state = 807;
					this.match(Python3Parser.FROM);
					this.state = 808;
					this.test();
					}
				}

				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public import_stmt(): Import_stmtContext {
		let _localctx: Import_stmtContext = new Import_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, Python3Parser.RULE_import_stmt);
		try {
			this.state = 815;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.IMPORT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 813;
				this.import_name();
				}
				break;
			case Python3Parser.FROM:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 814;
				this.import_from();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public import_name(): Import_nameContext {
		let _localctx: Import_nameContext = new Import_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, Python3Parser.RULE_import_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 817;
			this.match(Python3Parser.IMPORT);
			this.state = 818;
			this.dotted_as_names();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public import_from(): Import_fromContext {
		let _localctx: Import_fromContext = new Import_fromContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, Python3Parser.RULE_import_from);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 820;
			this.match(Python3Parser.FROM);
			this.state = 833;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 146, this._ctx) ) {
			case 1:
				{
				this.state = 824;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Python3Parser.DOT || _la === Python3Parser.ELLIPSIS) {
					{
					{
					this.state = 821;
					_la = this._input.LA(1);
					if (!(_la === Python3Parser.DOT || _la === Python3Parser.ELLIPSIS)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					}
					this.state = 826;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 827;
				this.dotted_name();
				}
				break;

			case 2:
				{
				this.state = 829;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 828;
					_la = this._input.LA(1);
					if (!(_la === Python3Parser.DOT || _la === Python3Parser.ELLIPSIS)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					}
					this.state = 831;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === Python3Parser.DOT || _la === Python3Parser.ELLIPSIS);
				}
				break;
			}
			this.state = 835;
			this.match(Python3Parser.IMPORT);
			this.state = 842;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.STAR:
				{
				this.state = 836;
				this.match(Python3Parser.STAR);
				}
				break;
			case Python3Parser.OPEN_PAREN:
				{
				this.state = 837;
				this.match(Python3Parser.OPEN_PAREN);
				this.state = 838;
				this.import_as_names();
				this.state = 839;
				this.match(Python3Parser.CLOSE_PAREN);
				}
				break;
			case Python3Parser.NAME:
				{
				this.state = 841;
				this.import_as_names();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public import_as_name(): Import_as_nameContext {
		let _localctx: Import_as_nameContext = new Import_as_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, Python3Parser.RULE_import_as_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 844;
			this.match(Python3Parser.NAME);
			this.state = 847;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Python3Parser.AS) {
				{
				this.state = 845;
				this.match(Python3Parser.AS);
				this.state = 846;
				this.match(Python3Parser.NAME);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dotted_as_name(): Dotted_as_nameContext {
		let _localctx: Dotted_as_nameContext = new Dotted_as_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, Python3Parser.RULE_dotted_as_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 849;
			this.dotted_name();
			this.state = 852;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Python3Parser.AS) {
				{
				this.state = 850;
				this.match(Python3Parser.AS);
				this.state = 851;
				this.match(Python3Parser.NAME);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public import_as_names(): Import_as_namesContext {
		let _localctx: Import_as_namesContext = new Import_as_namesContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, Python3Parser.RULE_import_as_names);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 854;
			this.import_as_name();
			this.state = 859;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 150, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 855;
					this.match(Python3Parser.COMMA);
					this.state = 856;
					this.import_as_name();
					}
					}
				}
				this.state = 861;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 150, this._ctx);
			}
			this.state = 863;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Python3Parser.COMMA) {
				{
				this.state = 862;
				this.match(Python3Parser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dotted_as_names(): Dotted_as_namesContext {
		let _localctx: Dotted_as_namesContext = new Dotted_as_namesContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, Python3Parser.RULE_dotted_as_names);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 865;
			this.dotted_as_name();
			this.state = 870;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Python3Parser.COMMA) {
				{
				{
				this.state = 866;
				this.match(Python3Parser.COMMA);
				this.state = 867;
				this.dotted_as_name();
				}
				}
				this.state = 872;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dotted_name(): Dotted_nameContext {
		let _localctx: Dotted_nameContext = new Dotted_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, Python3Parser.RULE_dotted_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 873;
			this.match(Python3Parser.NAME);
			this.state = 878;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Python3Parser.DOT) {
				{
				{
				this.state = 874;
				this.match(Python3Parser.DOT);
				this.state = 875;
				this.match(Python3Parser.NAME);
				}
				}
				this.state = 880;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public global_stmt(): Global_stmtContext {
		let _localctx: Global_stmtContext = new Global_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, Python3Parser.RULE_global_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 881;
			this.match(Python3Parser.GLOBAL);
			this.state = 882;
			this.match(Python3Parser.NAME);
			this.state = 887;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Python3Parser.COMMA) {
				{
				{
				this.state = 883;
				this.match(Python3Parser.COMMA);
				this.state = 884;
				this.match(Python3Parser.NAME);
				}
				}
				this.state = 889;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nonlocal_stmt(): Nonlocal_stmtContext {
		let _localctx: Nonlocal_stmtContext = new Nonlocal_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, Python3Parser.RULE_nonlocal_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 890;
			this.match(Python3Parser.NONLOCAL);
			this.state = 891;
			this.match(Python3Parser.NAME);
			this.state = 896;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Python3Parser.COMMA) {
				{
				{
				this.state = 892;
				this.match(Python3Parser.COMMA);
				this.state = 893;
				this.match(Python3Parser.NAME);
				}
				}
				this.state = 898;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assert_stmt(): Assert_stmtContext {
		let _localctx: Assert_stmtContext = new Assert_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, Python3Parser.RULE_assert_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 899;
			this.match(Python3Parser.ASSERT);
			this.state = 900;
			this.test();
			this.state = 903;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Python3Parser.COMMA) {
				{
				this.state = 901;
				this.match(Python3Parser.COMMA);
				this.state = 902;
				this.test();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compound_stmt(): Compound_stmtContext {
		let _localctx: Compound_stmtContext = new Compound_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, Python3Parser.RULE_compound_stmt);
		try {
			this.state = 914;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.IF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 905;
				this.if_stmt();
				}
				break;
			case Python3Parser.WHILE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 906;
				this.while_stmt();
				}
				break;
			case Python3Parser.FOR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 907;
				this.for_stmt();
				}
				break;
			case Python3Parser.TRY:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 908;
				this.try_stmt();
				}
				break;
			case Python3Parser.WITH:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 909;
				this.with_stmt();
				}
				break;
			case Python3Parser.DEF:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 910;
				this.funcdef();
				}
				break;
			case Python3Parser.CLASS:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 911;
				this.classdef();
				}
				break;
			case Python3Parser.AT:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 912;
				this.decorated();
				}
				break;
			case Python3Parser.ASYNC:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 913;
				this.async_stmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public async_stmt(): Async_stmtContext {
		let _localctx: Async_stmtContext = new Async_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, Python3Parser.RULE_async_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 916;
			this.match(Python3Parser.ASYNC);
			this.state = 920;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.DEF:
				{
				this.state = 917;
				this.funcdef();
				}
				break;
			case Python3Parser.WITH:
				{
				this.state = 918;
				this.with_stmt();
				}
				break;
			case Python3Parser.FOR:
				{
				this.state = 919;
				this.for_stmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public if_stmt(): If_stmtContext {
		let _localctx: If_stmtContext = new If_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, Python3Parser.RULE_if_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 922;
			this.match(Python3Parser.IF);
			this.state = 923;
			this.test();
			this.state = 924;
			this.match(Python3Parser.COLON);
			this.state = 925;
			this.suite();
			this.state = 933;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Python3Parser.ELIF) {
				{
				{
				this.state = 926;
				this.match(Python3Parser.ELIF);
				this.state = 927;
				this.test();
				this.state = 928;
				this.match(Python3Parser.COLON);
				this.state = 929;
				this.suite();
				}
				}
				this.state = 935;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 939;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Python3Parser.ELSE) {
				{
				this.state = 936;
				this.match(Python3Parser.ELSE);
				this.state = 937;
				this.match(Python3Parser.COLON);
				this.state = 938;
				this.suite();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public while_stmt(): While_stmtContext {
		let _localctx: While_stmtContext = new While_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, Python3Parser.RULE_while_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 941;
			this.match(Python3Parser.WHILE);
			this.state = 942;
			this.test();
			this.state = 943;
			this.match(Python3Parser.COLON);
			this.state = 944;
			this.suite();
			this.state = 948;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Python3Parser.ELSE) {
				{
				this.state = 945;
				this.match(Python3Parser.ELSE);
				this.state = 946;
				this.match(Python3Parser.COLON);
				this.state = 947;
				this.suite();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public for_stmt(): For_stmtContext {
		let _localctx: For_stmtContext = new For_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, Python3Parser.RULE_for_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 950;
			this.match(Python3Parser.FOR);
			this.state = 951;
			this.exprlist();
			this.state = 952;
			this.match(Python3Parser.IN);
			this.state = 953;
			this.testlist();
			this.state = 954;
			this.match(Python3Parser.COLON);
			this.state = 955;
			this.suite();
			this.state = 959;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Python3Parser.ELSE) {
				{
				this.state = 956;
				this.match(Python3Parser.ELSE);
				this.state = 957;
				this.match(Python3Parser.COLON);
				this.state = 958;
				this.suite();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public try_stmt(): Try_stmtContext {
		let _localctx: Try_stmtContext = new Try_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, Python3Parser.RULE_try_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 961;
			this.match(Python3Parser.TRY);
			this.state = 962;
			this.match(Python3Parser.COLON);
			this.state = 963;
			this.suite();
			this.state = 985;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.EXCEPT:
				{
				this.state = 968;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 964;
					this.except_clause();
					this.state = 965;
					this.match(Python3Parser.COLON);
					this.state = 966;
					this.suite();
					}
					}
					this.state = 970;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === Python3Parser.EXCEPT);
				this.state = 975;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Python3Parser.ELSE) {
					{
					this.state = 972;
					this.match(Python3Parser.ELSE);
					this.state = 973;
					this.match(Python3Parser.COLON);
					this.state = 974;
					this.suite();
					}
				}

				this.state = 980;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Python3Parser.FINALLY) {
					{
					this.state = 977;
					this.match(Python3Parser.FINALLY);
					this.state = 978;
					this.match(Python3Parser.COLON);
					this.state = 979;
					this.suite();
					}
				}

				}
				break;
			case Python3Parser.FINALLY:
				{
				this.state = 982;
				this.match(Python3Parser.FINALLY);
				this.state = 983;
				this.match(Python3Parser.COLON);
				this.state = 984;
				this.suite();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public with_stmt(): With_stmtContext {
		let _localctx: With_stmtContext = new With_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, Python3Parser.RULE_with_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 987;
			this.match(Python3Parser.WITH);
			this.state = 988;
			this.with_item();
			this.state = 993;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Python3Parser.COMMA) {
				{
				{
				this.state = 989;
				this.match(Python3Parser.COMMA);
				this.state = 990;
				this.with_item();
				}
				}
				this.state = 995;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 996;
			this.match(Python3Parser.COLON);
			this.state = 997;
			this.suite();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public with_item(): With_itemContext {
		let _localctx: With_itemContext = new With_itemContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, Python3Parser.RULE_with_item);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 999;
			this.test();
			this.state = 1002;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Python3Parser.AS) {
				{
				this.state = 1000;
				this.match(Python3Parser.AS);
				this.state = 1001;
				this.expr();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public except_clause(): Except_clauseContext {
		let _localctx: Except_clauseContext = new Except_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, Python3Parser.RULE_except_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1004;
			this.match(Python3Parser.EXCEPT);
			this.state = 1010;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.STRING) | (1 << Python3Parser.NUMBER) | (1 << Python3Parser.LAMBDA) | (1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (Python3Parser.AWAIT - 39)) | (1 << (Python3Parser.NAME - 39)) | (1 << (Python3Parser.ELLIPSIS - 39)) | (1 << (Python3Parser.OPEN_PAREN - 39)) | (1 << (Python3Parser.OPEN_BRACK - 39)) | (1 << (Python3Parser.ADD - 39)) | (1 << (Python3Parser.MINUS - 39)))) !== 0) || _la === Python3Parser.NOT_OP || _la === Python3Parser.OPEN_BRACE) {
				{
				this.state = 1005;
				this.test();
				this.state = 1008;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Python3Parser.AS) {
					{
					this.state = 1006;
					this.match(Python3Parser.AS);
					this.state = 1007;
					this.match(Python3Parser.NAME);
					}
				}

				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public suite(): SuiteContext {
		let _localctx: SuiteContext = new SuiteContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, Python3Parser.RULE_suite);
		let _la: number;
		try {
			this.state = 1022;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.STRING:
			case Python3Parser.NUMBER:
			case Python3Parser.RETURN:
			case Python3Parser.RAISE:
			case Python3Parser.FROM:
			case Python3Parser.IMPORT:
			case Python3Parser.GLOBAL:
			case Python3Parser.NONLOCAL:
			case Python3Parser.ASSERT:
			case Python3Parser.LAMBDA:
			case Python3Parser.NOT:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.YIELD:
			case Python3Parser.DEL:
			case Python3Parser.PASS:
			case Python3Parser.CONTINUE:
			case Python3Parser.BREAK:
			case Python3Parser.AWAIT:
			case Python3Parser.NAME:
			case Python3Parser.ELLIPSIS:
			case Python3Parser.STAR:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.NOT_OP:
			case Python3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1012;
				this.simple_stmt();
				}
				break;
			case Python3Parser.NEWLINE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1013;
				this.match(Python3Parser.NEWLINE);
				this.state = 1014;
				this.match(Python3Parser.INDENT);
				this.state = 1016;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1015;
					this.stmt();
					}
					}
					this.state = 1018;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.STRING) | (1 << Python3Parser.NUMBER) | (1 << Python3Parser.DEF) | (1 << Python3Parser.RETURN) | (1 << Python3Parser.RAISE) | (1 << Python3Parser.FROM) | (1 << Python3Parser.IMPORT) | (1 << Python3Parser.GLOBAL) | (1 << Python3Parser.NONLOCAL) | (1 << Python3Parser.ASSERT) | (1 << Python3Parser.IF) | (1 << Python3Parser.WHILE) | (1 << Python3Parser.FOR) | (1 << Python3Parser.TRY) | (1 << Python3Parser.WITH) | (1 << Python3Parser.LAMBDA) | (1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (Python3Parser.CLASS - 32)) | (1 << (Python3Parser.YIELD - 32)) | (1 << (Python3Parser.DEL - 32)) | (1 << (Python3Parser.PASS - 32)) | (1 << (Python3Parser.CONTINUE - 32)) | (1 << (Python3Parser.BREAK - 32)) | (1 << (Python3Parser.ASYNC - 32)) | (1 << (Python3Parser.AWAIT - 32)) | (1 << (Python3Parser.NAME - 32)) | (1 << (Python3Parser.ELLIPSIS - 32)) | (1 << (Python3Parser.STAR - 32)) | (1 << (Python3Parser.OPEN_PAREN - 32)) | (1 << (Python3Parser.OPEN_BRACK - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (Python3Parser.ADD - 67)) | (1 << (Python3Parser.MINUS - 67)) | (1 << (Python3Parser.NOT_OP - 67)) | (1 << (Python3Parser.OPEN_BRACE - 67)) | (1 << (Python3Parser.AT - 67)))) !== 0));
				this.state = 1020;
				this.match(Python3Parser.DEDENT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namedexpr_test(): Namedexpr_testContext {
		let _localctx: Namedexpr_testContext = new Namedexpr_testContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, Python3Parser.RULE_namedexpr_test);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1024;
			this.test();
			this.state = 1027;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Python3Parser.T__0) {
				{
				this.state = 1025;
				this.match(Python3Parser.T__0);
				this.state = 1026;
				this.test();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public test(): TestContext {
		let _localctx: TestContext = new TestContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, Python3Parser.RULE_test);
		let _la: number;
		try {
			this.state = 1038;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.STRING:
			case Python3Parser.NUMBER:
			case Python3Parser.NOT:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.AWAIT:
			case Python3Parser.NAME:
			case Python3Parser.ELLIPSIS:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.NOT_OP:
			case Python3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1029;
				this.or_test();
				this.state = 1035;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Python3Parser.IF) {
					{
					this.state = 1030;
					this.match(Python3Parser.IF);
					this.state = 1031;
					this.or_test();
					this.state = 1032;
					this.match(Python3Parser.ELSE);
					this.state = 1033;
					this.test();
					}
				}

				}
				break;
			case Python3Parser.LAMBDA:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1037;
				this.lambdef();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public test_nocond(): Test_nocondContext {
		let _localctx: Test_nocondContext = new Test_nocondContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, Python3Parser.RULE_test_nocond);
		try {
			this.state = 1042;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.STRING:
			case Python3Parser.NUMBER:
			case Python3Parser.NOT:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.AWAIT:
			case Python3Parser.NAME:
			case Python3Parser.ELLIPSIS:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.NOT_OP:
			case Python3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1040;
				this.or_test();
				}
				break;
			case Python3Parser.LAMBDA:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1041;
				this.lambdef_nocond();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdef(): LambdefContext {
		let _localctx: LambdefContext = new LambdefContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, Python3Parser.RULE_lambdef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1044;
			this.match(Python3Parser.LAMBDA);
			this.state = 1046;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (Python3Parser.NAME - 41)) | (1 << (Python3Parser.STAR - 41)) | (1 << (Python3Parser.POWER - 41)))) !== 0)) {
				{
				this.state = 1045;
				this.varargslist();
				}
			}

			this.state = 1048;
			this.match(Python3Parser.COLON);
			this.state = 1049;
			this.test();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdef_nocond(): Lambdef_nocondContext {
		let _localctx: Lambdef_nocondContext = new Lambdef_nocondContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, Python3Parser.RULE_lambdef_nocond);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1051;
			this.match(Python3Parser.LAMBDA);
			this.state = 1053;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (Python3Parser.NAME - 41)) | (1 << (Python3Parser.STAR - 41)) | (1 << (Python3Parser.POWER - 41)))) !== 0)) {
				{
				this.state = 1052;
				this.varargslist();
				}
			}

			this.state = 1055;
			this.match(Python3Parser.COLON);
			this.state = 1056;
			this.test_nocond();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public or_test(): Or_testContext {
		let _localctx: Or_testContext = new Or_testContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, Python3Parser.RULE_or_test);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1058;
			this.and_test();
			this.state = 1063;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Python3Parser.OR) {
				{
				{
				this.state = 1059;
				this.match(Python3Parser.OR);
				this.state = 1060;
				this.and_test();
				}
				}
				this.state = 1065;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public and_test(): And_testContext {
		let _localctx: And_testContext = new And_testContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, Python3Parser.RULE_and_test);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1066;
			this.not_test();
			this.state = 1071;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Python3Parser.AND) {
				{
				{
				this.state = 1067;
				this.match(Python3Parser.AND);
				this.state = 1068;
				this.not_test();
				}
				}
				this.state = 1073;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public not_test(): Not_testContext {
		let _localctx: Not_testContext = new Not_testContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, Python3Parser.RULE_not_test);
		try {
			this.state = 1077;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.NOT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1074;
				this.match(Python3Parser.NOT);
				this.state = 1075;
				this.not_test();
				}
				break;
			case Python3Parser.STRING:
			case Python3Parser.NUMBER:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.AWAIT:
			case Python3Parser.NAME:
			case Python3Parser.ELLIPSIS:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.NOT_OP:
			case Python3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1076;
				this.comparison();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comparison(): ComparisonContext {
		let _localctx: ComparisonContext = new ComparisonContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, Python3Parser.RULE_comparison);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1079;
			this.expr();
			this.state = 1085;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.IN) | (1 << Python3Parser.NOT) | (1 << Python3Parser.IS))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (Python3Parser.LESS_THAN - 75)) | (1 << (Python3Parser.GREATER_THAN - 75)) | (1 << (Python3Parser.EQUALS - 75)) | (1 << (Python3Parser.GT_EQ - 75)) | (1 << (Python3Parser.LT_EQ - 75)) | (1 << (Python3Parser.NOT_EQ_1 - 75)) | (1 << (Python3Parser.NOT_EQ_2 - 75)))) !== 0)) {
				{
				{
				this.state = 1080;
				this.comp_op();
				this.state = 1081;
				this.expr();
				}
				}
				this.state = 1087;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comp_op(): Comp_opContext {
		let _localctx: Comp_opContext = new Comp_opContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, Python3Parser.RULE_comp_op);
		try {
			this.state = 1101;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 183, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1088;
				this.match(Python3Parser.LESS_THAN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1089;
				this.match(Python3Parser.GREATER_THAN);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1090;
				this.match(Python3Parser.EQUALS);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1091;
				this.match(Python3Parser.GT_EQ);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1092;
				this.match(Python3Parser.LT_EQ);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1093;
				this.match(Python3Parser.NOT_EQ_1);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1094;
				this.match(Python3Parser.NOT_EQ_2);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1095;
				this.match(Python3Parser.IN);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1096;
				this.match(Python3Parser.NOT);
				this.state = 1097;
				this.match(Python3Parser.IN);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1098;
				this.match(Python3Parser.IS);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1099;
				this.match(Python3Parser.IS);
				this.state = 1100;
				this.match(Python3Parser.NOT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public star_expr(): Star_exprContext {
		let _localctx: Star_exprContext = new Star_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, Python3Parser.RULE_star_expr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1103;
			this.match(Python3Parser.STAR);
			this.state = 1104;
			this.expr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr(): ExprContext {
		let _localctx: ExprContext = new ExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, Python3Parser.RULE_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1106;
			this.xor_expr();
			this.state = 1111;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Python3Parser.OR_OP) {
				{
				{
				this.state = 1107;
				this.match(Python3Parser.OR_OP);
				this.state = 1108;
				this.xor_expr();
				}
				}
				this.state = 1113;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public xor_expr(): Xor_exprContext {
		let _localctx: Xor_exprContext = new Xor_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, Python3Parser.RULE_xor_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1114;
			this.and_expr();
			this.state = 1119;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Python3Parser.XOR) {
				{
				{
				this.state = 1115;
				this.match(Python3Parser.XOR);
				this.state = 1116;
				this.and_expr();
				}
				}
				this.state = 1121;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public and_expr(): And_exprContext {
		let _localctx: And_exprContext = new And_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, Python3Parser.RULE_and_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1122;
			this.shift_expr();
			this.state = 1127;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Python3Parser.AND_OP) {
				{
				{
				this.state = 1123;
				this.match(Python3Parser.AND_OP);
				this.state = 1124;
				this.shift_expr();
				}
				}
				this.state = 1129;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public shift_expr(): Shift_exprContext {
		let _localctx: Shift_exprContext = new Shift_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, Python3Parser.RULE_shift_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1130;
			this.arith_expr();
			this.state = 1135;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Python3Parser.LEFT_SHIFT || _la === Python3Parser.RIGHT_SHIFT) {
				{
				{
				this.state = 1131;
				_la = this._input.LA(1);
				if (!(_la === Python3Parser.LEFT_SHIFT || _la === Python3Parser.RIGHT_SHIFT)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1132;
				this.arith_expr();
				}
				}
				this.state = 1137;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arith_expr(): Arith_exprContext {
		let _localctx: Arith_exprContext = new Arith_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, Python3Parser.RULE_arith_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1138;
			this.term();
			this.state = 1143;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Python3Parser.ADD || _la === Python3Parser.MINUS) {
				{
				{
				this.state = 1139;
				_la = this._input.LA(1);
				if (!(_la === Python3Parser.ADD || _la === Python3Parser.MINUS)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1140;
				this.term();
				}
				}
				this.state = 1145;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public term(): TermContext {
		let _localctx: TermContext = new TermContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, Python3Parser.RULE_term);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1146;
			this.factor();
			this.state = 1151;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (Python3Parser.STAR - 52)) | (1 << (Python3Parser.DIV - 52)) | (1 << (Python3Parser.MOD - 52)) | (1 << (Python3Parser.IDIV - 52)) | (1 << (Python3Parser.AT - 52)))) !== 0)) {
				{
				{
				this.state = 1147;
				_la = this._input.LA(1);
				if (!(((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (Python3Parser.STAR - 52)) | (1 << (Python3Parser.DIV - 52)) | (1 << (Python3Parser.MOD - 52)) | (1 << (Python3Parser.IDIV - 52)) | (1 << (Python3Parser.AT - 52)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1148;
				this.factor();
				}
				}
				this.state = 1153;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public factor(): FactorContext {
		let _localctx: FactorContext = new FactorContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, Python3Parser.RULE_factor);
		let _la: number;
		try {
			this.state = 1157;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.NOT_OP:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1154;
				_la = this._input.LA(1);
				if (!(((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (Python3Parser.ADD - 67)) | (1 << (Python3Parser.MINUS - 67)) | (1 << (Python3Parser.NOT_OP - 67)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1155;
				this.factor();
				}
				break;
			case Python3Parser.STRING:
			case Python3Parser.NUMBER:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.AWAIT:
			case Python3Parser.NAME:
			case Python3Parser.ELLIPSIS:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1156;
				this.power();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public power(): PowerContext {
		let _localctx: PowerContext = new PowerContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, Python3Parser.RULE_power);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1159;
			this.atom_expr();
			this.state = 1162;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Python3Parser.POWER) {
				{
				this.state = 1160;
				this.match(Python3Parser.POWER);
				this.state = 1161;
				this.factor();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public atom_expr(): Atom_exprContext {
		let _localctx: Atom_exprContext = new Atom_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, Python3Parser.RULE_atom_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1165;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Python3Parser.AWAIT) {
				{
				this.state = 1164;
				this.match(Python3Parser.AWAIT);
				}
			}

			this.state = 1167;
			this.atom();
			this.state = 1171;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (Python3Parser.DOT - 50)) | (1 << (Python3Parser.OPEN_PAREN - 50)) | (1 << (Python3Parser.OPEN_BRACK - 50)))) !== 0)) {
				{
				{
				this.state = 1168;
				this.trailer();
				}
				}
				this.state = 1173;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public atom(): AtomContext {
		let _localctx: AtomContext = new AtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, Python3Parser.RULE_atom);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1201;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.OPEN_PAREN:
				{
				this.state = 1174;
				this.match(Python3Parser.OPEN_PAREN);
				this.state = 1177;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Python3Parser.YIELD:
					{
					this.state = 1175;
					this.yield_expr();
					}
					break;
				case Python3Parser.STRING:
				case Python3Parser.NUMBER:
				case Python3Parser.LAMBDA:
				case Python3Parser.NOT:
				case Python3Parser.NONE:
				case Python3Parser.TRUE:
				case Python3Parser.FALSE:
				case Python3Parser.AWAIT:
				case Python3Parser.NAME:
				case Python3Parser.ELLIPSIS:
				case Python3Parser.STAR:
				case Python3Parser.OPEN_PAREN:
				case Python3Parser.OPEN_BRACK:
				case Python3Parser.ADD:
				case Python3Parser.MINUS:
				case Python3Parser.NOT_OP:
				case Python3Parser.OPEN_BRACE:
					{
					this.state = 1176;
					this.testlist_comp();
					}
					break;
				case Python3Parser.CLOSE_PAREN:
					break;
				default:
					break;
				}
				this.state = 1179;
				this.match(Python3Parser.CLOSE_PAREN);
				}
				break;
			case Python3Parser.OPEN_BRACK:
				{
				this.state = 1180;
				this.match(Python3Parser.OPEN_BRACK);
				this.state = 1182;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.STRING) | (1 << Python3Parser.NUMBER) | (1 << Python3Parser.LAMBDA) | (1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (Python3Parser.AWAIT - 39)) | (1 << (Python3Parser.NAME - 39)) | (1 << (Python3Parser.ELLIPSIS - 39)) | (1 << (Python3Parser.STAR - 39)) | (1 << (Python3Parser.OPEN_PAREN - 39)) | (1 << (Python3Parser.OPEN_BRACK - 39)) | (1 << (Python3Parser.ADD - 39)) | (1 << (Python3Parser.MINUS - 39)))) !== 0) || _la === Python3Parser.NOT_OP || _la === Python3Parser.OPEN_BRACE) {
					{
					this.state = 1181;
					this.testlist_comp();
					}
				}

				this.state = 1184;
				this.match(Python3Parser.CLOSE_BRACK);
				}
				break;
			case Python3Parser.OPEN_BRACE:
				{
				this.state = 1185;
				this.match(Python3Parser.OPEN_BRACE);
				this.state = 1187;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.STRING) | (1 << Python3Parser.NUMBER) | (1 << Python3Parser.LAMBDA) | (1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (Python3Parser.AWAIT - 39)) | (1 << (Python3Parser.NAME - 39)) | (1 << (Python3Parser.ELLIPSIS - 39)) | (1 << (Python3Parser.STAR - 39)) | (1 << (Python3Parser.OPEN_PAREN - 39)) | (1 << (Python3Parser.POWER - 39)) | (1 << (Python3Parser.OPEN_BRACK - 39)) | (1 << (Python3Parser.ADD - 39)) | (1 << (Python3Parser.MINUS - 39)))) !== 0) || _la === Python3Parser.NOT_OP || _la === Python3Parser.OPEN_BRACE) {
					{
					this.state = 1186;
					this.dictorsetmaker();
					}
				}

				this.state = 1189;
				this.match(Python3Parser.CLOSE_BRACE);
				}
				break;
			case Python3Parser.NAME:
				{
				this.state = 1190;
				this.match(Python3Parser.NAME);
				}
				break;
			case Python3Parser.NUMBER:
				{
				this.state = 1191;
				this.match(Python3Parser.NUMBER);
				}
				break;
			case Python3Parser.STRING:
				{
				this.state = 1193;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1192;
					this.match(Python3Parser.STRING);
					}
					}
					this.state = 1195;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === Python3Parser.STRING);
				}
				break;
			case Python3Parser.ELLIPSIS:
				{
				this.state = 1197;
				this.match(Python3Parser.ELLIPSIS);
				}
				break;
			case Python3Parser.NONE:
				{
				this.state = 1198;
				this.match(Python3Parser.NONE);
				}
				break;
			case Python3Parser.TRUE:
				{
				this.state = 1199;
				this.match(Python3Parser.TRUE);
				}
				break;
			case Python3Parser.FALSE:
				{
				this.state = 1200;
				this.match(Python3Parser.FALSE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public testlist_comp(): Testlist_compContext {
		let _localctx: Testlist_compContext = new Testlist_compContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, Python3Parser.RULE_testlist_comp);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1205;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.STRING:
			case Python3Parser.NUMBER:
			case Python3Parser.LAMBDA:
			case Python3Parser.NOT:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.AWAIT:
			case Python3Parser.NAME:
			case Python3Parser.ELLIPSIS:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.NOT_OP:
			case Python3Parser.OPEN_BRACE:
				{
				this.state = 1203;
				this.test();
				}
				break;
			case Python3Parser.STAR:
				{
				this.state = 1204;
				this.star_expr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1221;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.FOR:
			case Python3Parser.ASYNC:
				{
				this.state = 1207;
				this.comp_for();
				}
				break;
			case Python3Parser.CLOSE_PAREN:
			case Python3Parser.COMMA:
			case Python3Parser.CLOSE_BRACK:
				{
				this.state = 1215;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 201, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1208;
						this.match(Python3Parser.COMMA);
						this.state = 1211;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case Python3Parser.STRING:
						case Python3Parser.NUMBER:
						case Python3Parser.LAMBDA:
						case Python3Parser.NOT:
						case Python3Parser.NONE:
						case Python3Parser.TRUE:
						case Python3Parser.FALSE:
						case Python3Parser.AWAIT:
						case Python3Parser.NAME:
						case Python3Parser.ELLIPSIS:
						case Python3Parser.OPEN_PAREN:
						case Python3Parser.OPEN_BRACK:
						case Python3Parser.ADD:
						case Python3Parser.MINUS:
						case Python3Parser.NOT_OP:
						case Python3Parser.OPEN_BRACE:
							{
							this.state = 1209;
							this.test();
							}
							break;
						case Python3Parser.STAR:
							{
							this.state = 1210;
							this.star_expr();
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
						}
					}
					this.state = 1217;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 201, this._ctx);
				}
				this.state = 1219;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Python3Parser.COMMA) {
					{
					this.state = 1218;
					this.match(Python3Parser.COMMA);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public trailer(): TrailerContext {
		let _localctx: TrailerContext = new TrailerContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, Python3Parser.RULE_trailer);
		let _la: number;
		try {
			this.state = 1234;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.OPEN_PAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1223;
				this.match(Python3Parser.OPEN_PAREN);
				this.state = 1225;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.STRING) | (1 << Python3Parser.NUMBER) | (1 << Python3Parser.LAMBDA) | (1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (Python3Parser.AWAIT - 39)) | (1 << (Python3Parser.NAME - 39)) | (1 << (Python3Parser.ELLIPSIS - 39)) | (1 << (Python3Parser.STAR - 39)) | (1 << (Python3Parser.OPEN_PAREN - 39)) | (1 << (Python3Parser.POWER - 39)) | (1 << (Python3Parser.OPEN_BRACK - 39)) | (1 << (Python3Parser.ADD - 39)) | (1 << (Python3Parser.MINUS - 39)))) !== 0) || _la === Python3Parser.NOT_OP || _la === Python3Parser.OPEN_BRACE) {
					{
					this.state = 1224;
					this.arglist();
					}
				}

				this.state = 1227;
				this.match(Python3Parser.CLOSE_PAREN);
				}
				break;
			case Python3Parser.OPEN_BRACK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1228;
				this.match(Python3Parser.OPEN_BRACK);
				this.state = 1229;
				this.subscriptlist();
				this.state = 1230;
				this.match(Python3Parser.CLOSE_BRACK);
				}
				break;
			case Python3Parser.DOT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1232;
				this.match(Python3Parser.DOT);
				this.state = 1233;
				this.match(Python3Parser.NAME);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subscriptlist(): SubscriptlistContext {
		let _localctx: SubscriptlistContext = new SubscriptlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, Python3Parser.RULE_subscriptlist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1236;
			this.subscript();
			this.state = 1241;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 206, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1237;
					this.match(Python3Parser.COMMA);
					this.state = 1238;
					this.subscript();
					}
					}
				}
				this.state = 1243;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 206, this._ctx);
			}
			this.state = 1245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Python3Parser.COMMA) {
				{
				this.state = 1244;
				this.match(Python3Parser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subscript(): SubscriptContext {
		let _localctx: SubscriptContext = new SubscriptContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, Python3Parser.RULE_subscript);
		let _la: number;
		try {
			this.state = 1258;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 211, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1247;
				this.test();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1249;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.STRING) | (1 << Python3Parser.NUMBER) | (1 << Python3Parser.LAMBDA) | (1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (Python3Parser.AWAIT - 39)) | (1 << (Python3Parser.NAME - 39)) | (1 << (Python3Parser.ELLIPSIS - 39)) | (1 << (Python3Parser.OPEN_PAREN - 39)) | (1 << (Python3Parser.OPEN_BRACK - 39)) | (1 << (Python3Parser.ADD - 39)) | (1 << (Python3Parser.MINUS - 39)))) !== 0) || _la === Python3Parser.NOT_OP || _la === Python3Parser.OPEN_BRACE) {
					{
					this.state = 1248;
					this.test();
					}
				}

				this.state = 1251;
				this.match(Python3Parser.COLON);
				this.state = 1253;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.STRING) | (1 << Python3Parser.NUMBER) | (1 << Python3Parser.LAMBDA) | (1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (Python3Parser.AWAIT - 39)) | (1 << (Python3Parser.NAME - 39)) | (1 << (Python3Parser.ELLIPSIS - 39)) | (1 << (Python3Parser.OPEN_PAREN - 39)) | (1 << (Python3Parser.OPEN_BRACK - 39)) | (1 << (Python3Parser.ADD - 39)) | (1 << (Python3Parser.MINUS - 39)))) !== 0) || _la === Python3Parser.NOT_OP || _la === Python3Parser.OPEN_BRACE) {
					{
					this.state = 1252;
					this.test();
					}
				}

				this.state = 1256;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Python3Parser.COLON) {
					{
					this.state = 1255;
					this.sliceop();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sliceop(): SliceopContext {
		let _localctx: SliceopContext = new SliceopContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, Python3Parser.RULE_sliceop);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1260;
			this.match(Python3Parser.COLON);
			this.state = 1262;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.STRING) | (1 << Python3Parser.NUMBER) | (1 << Python3Parser.LAMBDA) | (1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (Python3Parser.AWAIT - 39)) | (1 << (Python3Parser.NAME - 39)) | (1 << (Python3Parser.ELLIPSIS - 39)) | (1 << (Python3Parser.OPEN_PAREN - 39)) | (1 << (Python3Parser.OPEN_BRACK - 39)) | (1 << (Python3Parser.ADD - 39)) | (1 << (Python3Parser.MINUS - 39)))) !== 0) || _la === Python3Parser.NOT_OP || _la === Python3Parser.OPEN_BRACE) {
				{
				this.state = 1261;
				this.test();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exprlist(): ExprlistContext {
		let _localctx: ExprlistContext = new ExprlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, Python3Parser.RULE_exprlist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1266;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.STRING:
			case Python3Parser.NUMBER:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.AWAIT:
			case Python3Parser.NAME:
			case Python3Parser.ELLIPSIS:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.NOT_OP:
			case Python3Parser.OPEN_BRACE:
				{
				this.state = 1264;
				this.expr();
				}
				break;
			case Python3Parser.STAR:
				{
				this.state = 1265;
				this.star_expr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1275;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 215, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1268;
					this.match(Python3Parser.COMMA);
					this.state = 1271;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case Python3Parser.STRING:
					case Python3Parser.NUMBER:
					case Python3Parser.NONE:
					case Python3Parser.TRUE:
					case Python3Parser.FALSE:
					case Python3Parser.AWAIT:
					case Python3Parser.NAME:
					case Python3Parser.ELLIPSIS:
					case Python3Parser.OPEN_PAREN:
					case Python3Parser.OPEN_BRACK:
					case Python3Parser.ADD:
					case Python3Parser.MINUS:
					case Python3Parser.NOT_OP:
					case Python3Parser.OPEN_BRACE:
						{
						this.state = 1269;
						this.expr();
						}
						break;
					case Python3Parser.STAR:
						{
						this.state = 1270;
						this.star_expr();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 1277;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 215, this._ctx);
			}
			this.state = 1279;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Python3Parser.COMMA) {
				{
				this.state = 1278;
				this.match(Python3Parser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public testlist(): TestlistContext {
		let _localctx: TestlistContext = new TestlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, Python3Parser.RULE_testlist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1281;
			this.test();
			this.state = 1286;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 217, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1282;
					this.match(Python3Parser.COMMA);
					this.state = 1283;
					this.test();
					}
					}
				}
				this.state = 1288;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 217, this._ctx);
			}
			this.state = 1290;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Python3Parser.COMMA) {
				{
				this.state = 1289;
				this.match(Python3Parser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dictorsetmaker(): DictorsetmakerContext {
		let _localctx: DictorsetmakerContext = new DictorsetmakerContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, Python3Parser.RULE_dictorsetmaker);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1340;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 229, this._ctx) ) {
			case 1:
				{
				{
				this.state = 1298;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Python3Parser.STRING:
				case Python3Parser.NUMBER:
				case Python3Parser.LAMBDA:
				case Python3Parser.NOT:
				case Python3Parser.NONE:
				case Python3Parser.TRUE:
				case Python3Parser.FALSE:
				case Python3Parser.AWAIT:
				case Python3Parser.NAME:
				case Python3Parser.ELLIPSIS:
				case Python3Parser.OPEN_PAREN:
				case Python3Parser.OPEN_BRACK:
				case Python3Parser.ADD:
				case Python3Parser.MINUS:
				case Python3Parser.NOT_OP:
				case Python3Parser.OPEN_BRACE:
					{
					this.state = 1292;
					this.test();
					this.state = 1293;
					this.match(Python3Parser.COLON);
					this.state = 1294;
					this.test();
					}
					break;
				case Python3Parser.POWER:
					{
					this.state = 1296;
					this.match(Python3Parser.POWER);
					this.state = 1297;
					this.expr();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1318;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Python3Parser.FOR:
				case Python3Parser.ASYNC:
					{
					this.state = 1300;
					this.comp_for();
					}
					break;
				case Python3Parser.COMMA:
				case Python3Parser.CLOSE_BRACE:
					{
					this.state = 1312;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 221, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1301;
							this.match(Python3Parser.COMMA);
							this.state = 1308;
							this._errHandler.sync(this);
							switch (this._input.LA(1)) {
							case Python3Parser.STRING:
							case Python3Parser.NUMBER:
							case Python3Parser.LAMBDA:
							case Python3Parser.NOT:
							case Python3Parser.NONE:
							case Python3Parser.TRUE:
							case Python3Parser.FALSE:
							case Python3Parser.AWAIT:
							case Python3Parser.NAME:
							case Python3Parser.ELLIPSIS:
							case Python3Parser.OPEN_PAREN:
							case Python3Parser.OPEN_BRACK:
							case Python3Parser.ADD:
							case Python3Parser.MINUS:
							case Python3Parser.NOT_OP:
							case Python3Parser.OPEN_BRACE:
								{
								this.state = 1302;
								this.test();
								this.state = 1303;
								this.match(Python3Parser.COLON);
								this.state = 1304;
								this.test();
								}
								break;
							case Python3Parser.POWER:
								{
								this.state = 1306;
								this.match(Python3Parser.POWER);
								this.state = 1307;
								this.expr();
								}
								break;
							default:
								throw new NoViableAltException(this);
							}
							}
							}
						}
						this.state = 1314;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 221, this._ctx);
					}
					this.state = 1316;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === Python3Parser.COMMA) {
						{
						this.state = 1315;
						this.match(Python3Parser.COMMA);
						}
					}

					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				break;

			case 2:
				{
				{
				this.state = 1322;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Python3Parser.STRING:
				case Python3Parser.NUMBER:
				case Python3Parser.LAMBDA:
				case Python3Parser.NOT:
				case Python3Parser.NONE:
				case Python3Parser.TRUE:
				case Python3Parser.FALSE:
				case Python3Parser.AWAIT:
				case Python3Parser.NAME:
				case Python3Parser.ELLIPSIS:
				case Python3Parser.OPEN_PAREN:
				case Python3Parser.OPEN_BRACK:
				case Python3Parser.ADD:
				case Python3Parser.MINUS:
				case Python3Parser.NOT_OP:
				case Python3Parser.OPEN_BRACE:
					{
					this.state = 1320;
					this.test();
					}
					break;
				case Python3Parser.STAR:
					{
					this.state = 1321;
					this.star_expr();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1338;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Python3Parser.FOR:
				case Python3Parser.ASYNC:
					{
					this.state = 1324;
					this.comp_for();
					}
					break;
				case Python3Parser.COMMA:
				case Python3Parser.CLOSE_BRACE:
					{
					this.state = 1332;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 226, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1325;
							this.match(Python3Parser.COMMA);
							this.state = 1328;
							this._errHandler.sync(this);
							switch (this._input.LA(1)) {
							case Python3Parser.STRING:
							case Python3Parser.NUMBER:
							case Python3Parser.LAMBDA:
							case Python3Parser.NOT:
							case Python3Parser.NONE:
							case Python3Parser.TRUE:
							case Python3Parser.FALSE:
							case Python3Parser.AWAIT:
							case Python3Parser.NAME:
							case Python3Parser.ELLIPSIS:
							case Python3Parser.OPEN_PAREN:
							case Python3Parser.OPEN_BRACK:
							case Python3Parser.ADD:
							case Python3Parser.MINUS:
							case Python3Parser.NOT_OP:
							case Python3Parser.OPEN_BRACE:
								{
								this.state = 1326;
								this.test();
								}
								break;
							case Python3Parser.STAR:
								{
								this.state = 1327;
								this.star_expr();
								}
								break;
							default:
								throw new NoViableAltException(this);
							}
							}
							}
						}
						this.state = 1334;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 226, this._ctx);
					}
					this.state = 1336;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === Python3Parser.COMMA) {
						{
						this.state = 1335;
						this.match(Python3Parser.COMMA);
						}
					}

					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classdef(): ClassdefContext {
		let _localctx: ClassdefContext = new ClassdefContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, Python3Parser.RULE_classdef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1342;
			this.match(Python3Parser.CLASS);
			this.state = 1343;
			this.match(Python3Parser.NAME);
			this.state = 1349;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Python3Parser.OPEN_PAREN) {
				{
				this.state = 1344;
				this.match(Python3Parser.OPEN_PAREN);
				this.state = 1346;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.STRING) | (1 << Python3Parser.NUMBER) | (1 << Python3Parser.LAMBDA) | (1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (Python3Parser.AWAIT - 39)) | (1 << (Python3Parser.NAME - 39)) | (1 << (Python3Parser.ELLIPSIS - 39)) | (1 << (Python3Parser.STAR - 39)) | (1 << (Python3Parser.OPEN_PAREN - 39)) | (1 << (Python3Parser.POWER - 39)) | (1 << (Python3Parser.OPEN_BRACK - 39)) | (1 << (Python3Parser.ADD - 39)) | (1 << (Python3Parser.MINUS - 39)))) !== 0) || _la === Python3Parser.NOT_OP || _la === Python3Parser.OPEN_BRACE) {
					{
					this.state = 1345;
					this.arglist();
					}
				}

				this.state = 1348;
				this.match(Python3Parser.CLOSE_PAREN);
				}
			}

			this.state = 1351;
			this.match(Python3Parser.COLON);
			this.state = 1352;
			this.suite();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arglist(): ArglistContext {
		let _localctx: ArglistContext = new ArglistContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, Python3Parser.RULE_arglist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1354;
			this.argument();
			this.state = 1359;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 232, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1355;
					this.match(Python3Parser.COMMA);
					this.state = 1356;
					this.argument();
					}
					}
				}
				this.state = 1361;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 232, this._ctx);
			}
			this.state = 1363;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Python3Parser.COMMA) {
				{
				this.state = 1362;
				this.match(Python3Parser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, Python3Parser.RULE_argument);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1377;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 235, this._ctx) ) {
			case 1:
				{
				this.state = 1365;
				this.test();
				this.state = 1367;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Python3Parser.FOR || _la === Python3Parser.ASYNC) {
					{
					this.state = 1366;
					this.comp_for();
					}
				}

				}
				break;

			case 2:
				{
				this.state = 1369;
				this.test();
				this.state = 1370;
				this.match(Python3Parser.ASSIGN);
				this.state = 1371;
				this.test();
				}
				break;

			case 3:
				{
				this.state = 1373;
				this.match(Python3Parser.POWER);
				this.state = 1374;
				this.test();
				}
				break;

			case 4:
				{
				this.state = 1375;
				this.match(Python3Parser.STAR);
				this.state = 1376;
				this.test();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comp_iter(): Comp_iterContext {
		let _localctx: Comp_iterContext = new Comp_iterContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, Python3Parser.RULE_comp_iter);
		try {
			this.state = 1381;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.FOR:
			case Python3Parser.ASYNC:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1379;
				this.comp_for();
				}
				break;
			case Python3Parser.IF:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1380;
				this.comp_if();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comp_for(): Comp_forContext {
		let _localctx: Comp_forContext = new Comp_forContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, Python3Parser.RULE_comp_for);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1384;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Python3Parser.ASYNC) {
				{
				this.state = 1383;
				this.match(Python3Parser.ASYNC);
				}
			}

			this.state = 1386;
			this.match(Python3Parser.FOR);
			this.state = 1387;
			this.exprlist();
			this.state = 1388;
			this.match(Python3Parser.IN);
			this.state = 1389;
			this.or_test();
			this.state = 1391;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 14)) & ~0x1F) === 0 && ((1 << (_la - 14)) & ((1 << (Python3Parser.IF - 14)) | (1 << (Python3Parser.FOR - 14)) | (1 << (Python3Parser.ASYNC - 14)))) !== 0)) {
				{
				this.state = 1390;
				this.comp_iter();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comp_if(): Comp_ifContext {
		let _localctx: Comp_ifContext = new Comp_ifContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, Python3Parser.RULE_comp_if);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1393;
			this.match(Python3Parser.IF);
			this.state = 1394;
			this.test_nocond();
			this.state = 1396;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 14)) & ~0x1F) === 0 && ((1 << (_la - 14)) & ((1 << (Python3Parser.IF - 14)) | (1 << (Python3Parser.FOR - 14)) | (1 << (Python3Parser.ASYNC - 14)))) !== 0)) {
				{
				this.state = 1395;
				this.comp_iter();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public encoding_decl(): Encoding_declContext {
		let _localctx: Encoding_declContext = new Encoding_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, Python3Parser.RULE_encoding_decl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1398;
			this.match(Python3Parser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public yield_expr(): Yield_exprContext {
		let _localctx: Yield_exprContext = new Yield_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, Python3Parser.RULE_yield_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1400;
			this.match(Python3Parser.YIELD);
			this.state = 1402;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.STRING) | (1 << Python3Parser.NUMBER) | (1 << Python3Parser.FROM) | (1 << Python3Parser.LAMBDA) | (1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (Python3Parser.AWAIT - 39)) | (1 << (Python3Parser.NAME - 39)) | (1 << (Python3Parser.ELLIPSIS - 39)) | (1 << (Python3Parser.OPEN_PAREN - 39)) | (1 << (Python3Parser.OPEN_BRACK - 39)) | (1 << (Python3Parser.ADD - 39)) | (1 << (Python3Parser.MINUS - 39)))) !== 0) || _la === Python3Parser.NOT_OP || _la === Python3Parser.OPEN_BRACE) {
				{
				this.state = 1401;
				this.yield_arg();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public yield_arg(): Yield_argContext {
		let _localctx: Yield_argContext = new Yield_argContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, Python3Parser.RULE_yield_arg);
		try {
			this.state = 1407;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.FROM:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1404;
				this.match(Python3Parser.FROM);
				this.state = 1405;
				this.test();
				}
				break;
			case Python3Parser.STRING:
			case Python3Parser.NUMBER:
			case Python3Parser.LAMBDA:
			case Python3Parser.NOT:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.AWAIT:
			case Python3Parser.NAME:
			case Python3Parser.ELLIPSIS:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.NOT_OP:
			case Python3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1406;
				this.testlist();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public func_body_suite(): Func_body_suiteContext {
		let _localctx: Func_body_suiteContext = new Func_body_suiteContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, Python3Parser.RULE_func_body_suite);
		let _la: number;
		try {
			this.state = 1423;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.STRING:
			case Python3Parser.NUMBER:
			case Python3Parser.RETURN:
			case Python3Parser.RAISE:
			case Python3Parser.FROM:
			case Python3Parser.IMPORT:
			case Python3Parser.GLOBAL:
			case Python3Parser.NONLOCAL:
			case Python3Parser.ASSERT:
			case Python3Parser.LAMBDA:
			case Python3Parser.NOT:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.YIELD:
			case Python3Parser.DEL:
			case Python3Parser.PASS:
			case Python3Parser.CONTINUE:
			case Python3Parser.BREAK:
			case Python3Parser.AWAIT:
			case Python3Parser.NAME:
			case Python3Parser.ELLIPSIS:
			case Python3Parser.STAR:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.NOT_OP:
			case Python3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1409;
				this.simple_stmt();
				}
				break;
			case Python3Parser.NEWLINE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1410;
				this.match(Python3Parser.NEWLINE);
				this.state = 1413;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Python3Parser.TYPE_COMMENT) {
					{
					this.state = 1411;
					this.match(Python3Parser.TYPE_COMMENT);
					this.state = 1412;
					this.match(Python3Parser.NEWLINE);
					}
				}

				this.state = 1415;
				this.match(Python3Parser.INDENT);
				this.state = 1417;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1416;
					this.stmt();
					}
					}
					this.state = 1419;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.STRING) | (1 << Python3Parser.NUMBER) | (1 << Python3Parser.DEF) | (1 << Python3Parser.RETURN) | (1 << Python3Parser.RAISE) | (1 << Python3Parser.FROM) | (1 << Python3Parser.IMPORT) | (1 << Python3Parser.GLOBAL) | (1 << Python3Parser.NONLOCAL) | (1 << Python3Parser.ASSERT) | (1 << Python3Parser.IF) | (1 << Python3Parser.WHILE) | (1 << Python3Parser.FOR) | (1 << Python3Parser.TRY) | (1 << Python3Parser.WITH) | (1 << Python3Parser.LAMBDA) | (1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (Python3Parser.CLASS - 32)) | (1 << (Python3Parser.YIELD - 32)) | (1 << (Python3Parser.DEL - 32)) | (1 << (Python3Parser.PASS - 32)) | (1 << (Python3Parser.CONTINUE - 32)) | (1 << (Python3Parser.BREAK - 32)) | (1 << (Python3Parser.ASYNC - 32)) | (1 << (Python3Parser.AWAIT - 32)) | (1 << (Python3Parser.NAME - 32)) | (1 << (Python3Parser.ELLIPSIS - 32)) | (1 << (Python3Parser.STAR - 32)) | (1 << (Python3Parser.OPEN_PAREN - 32)) | (1 << (Python3Parser.OPEN_BRACK - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (Python3Parser.ADD - 67)) | (1 << (Python3Parser.MINUS - 67)) | (1 << (Python3Parser.NOT_OP - 67)) | (1 << (Python3Parser.OPEN_BRACE - 67)) | (1 << (Python3Parser.AT - 67)))) !== 0));
				this.state = 1421;
				this.match(Python3Parser.DEDENT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public func_type_input(): Func_type_inputContext {
		let _localctx: Func_type_inputContext = new Func_type_inputContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, Python3Parser.RULE_func_type_input);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1425;
			this.func_type();
			this.state = 1429;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Python3Parser.NEWLINE) {
				{
				{
				this.state = 1426;
				this.match(Python3Parser.NEWLINE);
				}
				}
				this.state = 1431;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1432;
			this.match(Python3Parser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public func_type(): Func_typeContext {
		let _localctx: Func_typeContext = new Func_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, Python3Parser.RULE_func_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1434;
			this.match(Python3Parser.OPEN_PAREN);
			this.state = 1436;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.STRING) | (1 << Python3Parser.NUMBER) | (1 << Python3Parser.LAMBDA) | (1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (Python3Parser.AWAIT - 39)) | (1 << (Python3Parser.NAME - 39)) | (1 << (Python3Parser.ELLIPSIS - 39)) | (1 << (Python3Parser.STAR - 39)) | (1 << (Python3Parser.OPEN_PAREN - 39)) | (1 << (Python3Parser.POWER - 39)) | (1 << (Python3Parser.OPEN_BRACK - 39)) | (1 << (Python3Parser.ADD - 39)) | (1 << (Python3Parser.MINUS - 39)))) !== 0) || _la === Python3Parser.NOT_OP || _la === Python3Parser.OPEN_BRACE) {
				{
				this.state = 1435;
				this.typelist();
				}
			}

			this.state = 1438;
			this.match(Python3Parser.CLOSE_PAREN);
			this.state = 1439;
			this.match(Python3Parser.ARROW);
			this.state = 1440;
			this.test();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typelist(): TypelistContext {
		let _localctx: TypelistContext = new TypelistContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, Python3Parser.RULE_typelist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1491;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.STRING:
			case Python3Parser.NUMBER:
			case Python3Parser.LAMBDA:
			case Python3Parser.NOT:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.AWAIT:
			case Python3Parser.NAME:
			case Python3Parser.ELLIPSIS:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.NOT_OP:
			case Python3Parser.OPEN_BRACE:
				{
				this.state = 1442;
				this.test();
				this.state = 1447;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 247, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1443;
						this.match(Python3Parser.COMMA);
						this.state = 1444;
						this.test();
						}
						}
					}
					this.state = 1449;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 247, this._ctx);
				}
				this.state = 1471;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Python3Parser.COMMA) {
					{
					this.state = 1450;
					this.match(Python3Parser.COMMA);
					this.state = 1469;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case Python3Parser.STAR:
						{
						this.state = 1451;
						this.match(Python3Parser.STAR);
						this.state = 1453;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.STRING) | (1 << Python3Parser.NUMBER) | (1 << Python3Parser.LAMBDA) | (1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (Python3Parser.AWAIT - 39)) | (1 << (Python3Parser.NAME - 39)) | (1 << (Python3Parser.ELLIPSIS - 39)) | (1 << (Python3Parser.OPEN_PAREN - 39)) | (1 << (Python3Parser.OPEN_BRACK - 39)) | (1 << (Python3Parser.ADD - 39)) | (1 << (Python3Parser.MINUS - 39)))) !== 0) || _la === Python3Parser.NOT_OP || _la === Python3Parser.OPEN_BRACE) {
							{
							this.state = 1452;
							this.test();
							}
						}

						this.state = 1459;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 249, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 1455;
								this.match(Python3Parser.COMMA);
								this.state = 1456;
								this.test();
								}
								}
							}
							this.state = 1461;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 249, this._ctx);
						}
						this.state = 1465;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === Python3Parser.COMMA) {
							{
							this.state = 1462;
							this.match(Python3Parser.COMMA);
							this.state = 1463;
							this.match(Python3Parser.POWER);
							this.state = 1464;
							this.test();
							}
						}

						}
						break;
					case Python3Parser.POWER:
						{
						this.state = 1467;
						this.match(Python3Parser.POWER);
						this.state = 1468;
						this.test();
						}
						break;
					case Python3Parser.CLOSE_PAREN:
						break;
					default:
						break;
					}
					}
				}

				}
				break;
			case Python3Parser.STAR:
				{
				this.state = 1473;
				this.match(Python3Parser.STAR);
				this.state = 1475;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.STRING) | (1 << Python3Parser.NUMBER) | (1 << Python3Parser.LAMBDA) | (1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (Python3Parser.AWAIT - 39)) | (1 << (Python3Parser.NAME - 39)) | (1 << (Python3Parser.ELLIPSIS - 39)) | (1 << (Python3Parser.OPEN_PAREN - 39)) | (1 << (Python3Parser.OPEN_BRACK - 39)) | (1 << (Python3Parser.ADD - 39)) | (1 << (Python3Parser.MINUS - 39)))) !== 0) || _la === Python3Parser.NOT_OP || _la === Python3Parser.OPEN_BRACE) {
					{
					this.state = 1474;
					this.test();
					}
				}

				this.state = 1481;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 254, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1477;
						this.match(Python3Parser.COMMA);
						this.state = 1478;
						this.test();
						}
						}
					}
					this.state = 1483;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 254, this._ctx);
				}
				this.state = 1487;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Python3Parser.COMMA) {
					{
					this.state = 1484;
					this.match(Python3Parser.COMMA);
					this.state = 1485;
					this.match(Python3Parser.POWER);
					this.state = 1486;
					this.test();
					}
				}

				}
				break;
			case Python3Parser.POWER:
				{
				this.state = 1489;
				this.match(Python3Parser.POWER);
				this.state = 1490;
				this.test();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	private static readonly _serializedATNSegments: number = 3;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03g\u05D8\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x05\x02\xBE\n\x02\x03\x03\x03\x03\x07\x03\xC2\n\x03\f\x03\x0E" +
		"\x03\xC5\v\x03\x03\x03\x03\x03\x03\x04\x03\x04\x07\x04\xCB\n\x04\f\x04" +
		"\x0E\x04\xCE\v\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x05" +
		"\x05\xD6\n\x05\x03\x05\x05\x05\xD9\n\x05\x03\x05\x03\x05\x03\x06\x06\x06" +
		"\xDE\n\x06\r\x06\x0E\x06\xDF\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\xE6" +
		"\n\x07\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\xF0\n\t\x03" +
		"\t\x03\t\x03\t\x03\n\x03\n\x05\n\xF7\n\n\x03\n\x03\n\x03\v\x03\v\x03\v" +
		"\x05\v\xFE\n\v\x03\v\x03\v\x05\v\u0102\n\v\x03\v\x03\v\x03\v\x05\v\u0107" +
		"\n\v\x07\v\u0109\n\v\f\v\x0E\v\u010C\v\v\x03\v\x03\v\x05\v\u0110\n\v\x03" +
		"\v\x03\v\x03\v\x05\v\u0115\n\v\x03\v\x03\v\x03\v\x05\v\u011A\n\v\x03\v" +
		"\x03\v\x05\v\u011E\n\v\x03\v\x03\v\x03\v\x05\v\u0123\n\v\x07\v\u0125\n" +
		"\v\f\v\x0E\v\u0128\v\v\x03\v\x03\v\x03\v\x05\v\u012D\n\v\x03\v\x03\v\x05" +
		"\v\u0131\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\u0138\n\v\x07\v\u013A" +
		"\n\v\f\v\x0E\v\u013D\v\v\x03\v\x03\v\x03\v\x05\v\u0142\n\v\x03\v\x03\v" +
		"\x03\v\x05\v\u0147\n\v\x03\v\x05\v\u014A\n\v\x05\v\u014C\n\v\x05\v\u014E" +
		"\n\v\x05\v\u0150\n\v\x03\v\x03\v\x03\v\x03\v\x05\v\u0156\n\v\x05\v\u0158" +
		"\n\v\x05\v\u015A\n\v\x05\v\u015C\n\v\x03\v\x03\v\x05\v\u0160\n\v\x03\v" +
		"\x03\v\x05\v\u0164\n\v\x03\v\x03\v\x03\v\x05\v\u0169\n\v\x07\v\u016B\n" +
		"\v\f\v\x0E\v\u016E\v\v\x03\v\x03\v\x03\v\x05\v\u0173\n\v\x03\v\x03\v\x03" +
		"\v\x05\v\u0178\n\v\x03\v\x05\v\u017B\n\v\x05\v\u017D\n\v\x05\v\u017F\n" +
		"\v\x05\v\u0181\n\v\x03\v\x03\v\x03\v\x03\v\x05\v\u0187\n\v\x05\v\u0189" +
		"\n\v\x05\v\u018B\n\v\x03\v\x03\v\x03\v\x05\v\u0190\n\v\x03\v\x03\v\x05" +
		"\v\u0194\n\v\x03\v\x03\v\x03\v\x05\v\u0199\n\v\x07\v\u019B\n\v\f\v\x0E" +
		"\v\u019E\v\v\x03\v\x03\v\x03\v\x05\v\u01A3\n\v\x03\v\x03\v\x03\v\x03\v" +
		"\x03\v\x03\v\x03\v\x05\v\u01AC\n\v\x07\v\u01AE\n\v\f\v\x0E\v\u01B1\v\v" +
		"\x03\v\x03\v\x03\v\x05\v\u01B6\n\v\x03\v\x03\v\x03\v\x05\v\u01BB\n\v\x03" +
		"\v\x05\v\u01BE\n\v\x05\v\u01C0\n\v\x05\v\u01C2\n\v\x05\v\u01C4\n\v\x03" +
		"\v\x03\v\x03\v\x05\v\u01C9\n\v\x03\v\x05\v\u01CC\n\v\x05\v\u01CE\n\v\x05" +
		"\v\u01D0\n\v\x05\v\u01D2\n\v\x03\v\x03\v\x05\v\u01D6\n\v\x03\v\x03\v\x05" +
		"\v\u01DA\n\v\x03\v\x03\v\x03\v\x05\v\u01DF\n\v\x07\v\u01E1\n\v\f\v\x0E" +
		"\v\u01E4\v\v\x03\v\x03\v\x03\v\x05\v\u01E9\n\v\x03\v\x03\v\x03\v\x05\v" +
		"\u01EE\n\v\x03\v\x05\v\u01F1\n\v\x05\v\u01F3\n\v\x05\v\u01F5\n\v\x05\v" +
		"\u01F7\n\v\x03\v\x03\v\x03\v\x05\v\u01FC\n\v\x03\v\x05\v\u01FF\n\v\x05" +
		"\v\u0201\n\v\x05\v\u0203\n\v\x03\f\x03\f\x03\f\x05\f\u0208\n\f\x03\r\x03" +
		"\r\x03\r\x05\r\u020D\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\u0213\n\r\x07\r" +
		"\u0215\n\r\f\r\x0E\r\u0218\v\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05" +
		"\r\u0220\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\u0226\n\r\x07\r\u0228\n\r\f" +
		"\r\x0E\r\u022B\v\r\x03\r\x03\r\x03\r\x05\r\u0230\n\r\x03\r\x03\r\x03\r" +
		"\x03\r\x05\r\u0236\n\r\x07\r\u0238\n\r\f\r\x0E\r\u023B\v\r\x03\r\x03\r" +
		"\x03\r\x03\r\x05\r\u0241\n\r\x05\r\u0243\n\r\x05\r\u0245\n\r\x03\r\x03" +
		"\r\x03\r\x05\r\u024A\n\r\x05\r\u024C\n\r\x05\r\u024E\n\r\x03\r\x03\r\x05" +
		"\r\u0252\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\u0258\n\r\x07\r\u025A\n\r\f" +
		"\r\x0E\r\u025D\v\r\x03\r\x03\r\x03\r\x03\r\x05\r\u0263\n\r\x05\r\u0265" +
		"\n\r\x05\r\u0267\n\r\x03\r\x03\r\x03\r\x05\r\u026C\n\r\x05\r\u026E\n\r" +
		"\x05\r\u0270\n\r\x05\r\u0272\n\r\x03\r\x03\r\x03\r\x05\r\u0277\n\r\x03" +
		"\r\x03\r\x03\r\x03\r\x05\r\u027D\n\r\x07\r\u027F\n\r\f\r\x0E\r\u0282\v" +
		"\r\x03\r\x03\r\x03\r\x05\r\u0287\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\u028D" +
		"\n\r\x07\r\u028F\n\r\f\r\x0E\r\u0292\v\r\x03\r\x03\r\x03\r\x03\r\x05\r" +
		"\u0298\n\r\x05\r\u029A\n\r\x05\r\u029C\n\r\x03\r\x03\r\x03\r\x05\r\u02A1" +
		"\n\r\x05\r\u02A3\n\r\x05\r\u02A5\n\r\x03\r\x03\r\x05\r\u02A9\n\r\x03\r" +
		"\x03\r\x03\r\x03\r\x05\r\u02AF\n\r\x07\r\u02B1\n\r\f\r\x0E\r\u02B4\v\r" +
		"\x03\r\x03\r\x03\r\x03\r\x05\r\u02BA\n\r\x05\r\u02BC\n\r\x05\r\u02BE\n" +
		"\r\x03\r\x03\r\x03\r\x05\r\u02C3\n\r\x05\r\u02C5\n\r\x05\r\u02C7\n\r\x03" +
		"\x0E\x03\x0E\x03\x0F\x03\x0F\x05\x0F\u02CD\n\x0F\x03\x10\x03\x10\x03\x10" +
		"\x07\x10\u02D2\n\x10\f\x10\x0E\x10\u02D5\v\x10\x03\x10\x05\x10\u02D8\n" +
		"\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x05\x11\u02E4\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x05\x12\u02EB\n\x12\x03\x12\x03\x12\x03\x12\x05\x12\u02F0\n\x12\x07\x12" +
		"\u02F2\n\x12\f\x12\x0E\x12\u02F5\v\x12\x05\x12\u02F7\n\x12\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x05\x13\u02FD\n\x13\x03\x14\x03\x14\x05\x14\u0301" +
		"\n\x14\x03\x14\x03\x14\x03\x14\x05\x14\u0306\n\x14\x07\x14\u0308\n\x14" +
		"\f\x14\x0E\x14\u030B\v\x14\x03\x14\x05\x14\u030E\n\x14\x03\x15\x03\x15" +
		"\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x05\x18\u031C\n\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03" +
		"\x1B\x05\x1B\u0324\n\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x05\x1D\u032C\n\x1D\x05\x1D\u032E\n\x1D\x03\x1E\x03\x1E\x05\x1E\u0332" +
		"\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x07 \u0339\n \f \x0E \u033C\v" +
		" \x03 \x03 \x06 \u0340\n \r \x0E \u0341\x05 \u0344\n \x03 \x03 \x03 \x03" +
		" \x03 \x03 \x03 \x05 \u034D\n \x03!\x03!\x03!\x05!\u0352\n!\x03\"\x03" +
		"\"\x03\"\x05\"\u0357\n\"\x03#\x03#\x03#\x07#\u035C\n#\f#\x0E#\u035F\v" +
		"#\x03#\x05#\u0362\n#\x03$\x03$\x03$\x07$\u0367\n$\f$\x0E$\u036A\v$\x03" +
		"%\x03%\x03%\x07%\u036F\n%\f%\x0E%\u0372\v%\x03&\x03&\x03&\x03&\x07&\u0378" +
		"\n&\f&\x0E&\u037B\v&\x03\'\x03\'\x03\'\x03\'\x07\'\u0381\n\'\f\'\x0E\'" +
		"\u0384\v\'\x03(\x03(\x03(\x03(\x05(\u038A\n(\x03)\x03)\x03)\x03)\x03)" +
		"\x03)\x03)\x03)\x03)\x05)\u0395\n)\x03*\x03*\x03*\x03*\x05*\u039B\n*\x03" +
		"+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x07+\u03A6\n+\f+\x0E+\u03A9" +
		"\v+\x03+\x03+\x03+\x05+\u03AE\n+\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x05" +
		",\u03B7\n,\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x05-\u03C2\n-" +
		"\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x06.\u03CB\n.\r.\x0E.\u03CC\x03.\x03" +
		".\x03.\x05.\u03D2\n.\x03.\x03.\x03.\x05.\u03D7\n.\x03.\x03.\x03.\x05." +
		"\u03DC\n.\x03/\x03/\x03/\x03/\x07/\u03E2\n/\f/\x0E/\u03E5\v/\x03/\x03" +
		"/\x03/\x030\x030\x030\x050\u03ED\n0\x031\x031\x031\x031\x051\u03F3\n1" +
		"\x051\u03F5\n1\x032\x032\x032\x032\x062\u03FB\n2\r2\x0E2\u03FC\x032\x03" +
		"2\x052\u0401\n2\x033\x033\x033\x053\u0406\n3\x034\x034\x034\x034\x034" +
		"\x034\x054\u040E\n4\x034\x054\u0411\n4\x035\x035\x055\u0415\n5\x036\x03" +
		"6\x056\u0419\n6\x036\x036\x036\x037\x037\x057\u0420\n7\x037\x037\x037" +
		"\x038\x038\x038\x078\u0428\n8\f8\x0E8\u042B\v8\x039\x039\x039\x079\u0430" +
		"\n9\f9\x0E9\u0433\v9\x03:\x03:\x03:\x05:\u0438\n:\x03;\x03;\x03;\x03;" +
		"\x07;\u043E\n;\f;\x0E;\u0441\v;\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03" +
		"<\x03<\x03<\x03<\x03<\x03<\x05<\u0450\n<\x03=\x03=\x03=\x03>\x03>\x03" +
		">\x07>\u0458\n>\f>\x0E>\u045B\v>\x03?\x03?\x03?\x07?\u0460\n?\f?\x0E?" +
		"\u0463\v?\x03@\x03@\x03@\x07@\u0468\n@\f@\x0E@\u046B\v@\x03A\x03A\x03" +
		"A\x07A\u0470\nA\fA\x0EA\u0473\vA\x03B\x03B\x03B\x07B\u0478\nB\fB\x0EB" +
		"\u047B\vB\x03C\x03C\x03C\x07C\u0480\nC\fC\x0EC\u0483\vC\x03D\x03D\x03" +
		"D\x05D\u0488\nD\x03E\x03E\x03E\x05E\u048D\nE\x03F\x05F\u0490\nF\x03F\x03" +
		"F\x07F\u0494\nF\fF\x0EF\u0497\vF\x03G\x03G\x03G\x05G\u049C\nG\x03G\x03" +
		"G\x03G\x05G\u04A1\nG\x03G\x03G\x03G\x05G\u04A6\nG\x03G\x03G\x03G\x03G" +
		"\x06G\u04AC\nG\rG\x0EG\u04AD\x03G\x03G\x03G\x03G\x05G\u04B4\nG\x03H\x03" +
		"H\x05H\u04B8\nH\x03H\x03H\x03H\x03H\x05H\u04BE\nH\x07H\u04C0\nH\fH\x0E" +
		"H\u04C3\vH\x03H\x05H\u04C6\nH\x05H\u04C8\nH\x03I\x03I\x05I\u04CC\nI\x03" +
		"I\x03I\x03I\x03I\x03I\x03I\x03I\x05I\u04D5\nI\x03J\x03J\x03J\x07J\u04DA" +
		"\nJ\fJ\x0EJ\u04DD\vJ\x03J\x05J\u04E0\nJ\x03K\x03K\x05K\u04E4\nK\x03K\x03" +
		"K\x05K\u04E8\nK\x03K\x05K\u04EB\nK\x05K\u04ED\nK\x03L\x03L\x05L\u04F1" +
		"\nL\x03M\x03M\x05M\u04F5\nM\x03M\x03M\x03M\x05M\u04FA\nM\x07M\u04FC\n" +
		"M\fM\x0EM\u04FF\vM\x03M\x05M\u0502\nM\x03N\x03N\x03N\x07N\u0507\nN\fN" +
		"\x0EN\u050A\vN\x03N\x05N\u050D\nN\x03O\x03O\x03O\x03O\x03O\x03O\x05O\u0515" +
		"\nO\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x05O\u051F\nO\x07O\u0521\n" +
		"O\fO\x0EO\u0524\vO\x03O\x05O\u0527\nO\x05O\u0529\nO\x03O\x03O\x05O\u052D" +
		"\nO\x03O\x03O\x03O\x03O\x05O\u0533\nO\x07O\u0535\nO\fO\x0EO\u0538\vO\x03" +
		"O\x05O\u053B\nO\x05O\u053D\nO\x05O\u053F\nO\x03P\x03P\x03P\x03P\x05P\u0545" +
		"\nP\x03P\x05P\u0548\nP\x03P\x03P\x03P\x03Q\x03Q\x03Q\x07Q\u0550\nQ\fQ" +
		"\x0EQ\u0553\vQ\x03Q\x05Q\u0556\nQ\x03R\x03R\x05R\u055A\nR\x03R\x03R\x03" +
		"R\x03R\x03R\x03R\x03R\x03R\x05R\u0564\nR\x03S\x03S\x05S\u0568\nS\x03T" +
		"\x05T\u056B\nT\x03T\x03T\x03T\x03T\x03T\x05T\u0572\nT\x03U\x03U\x03U\x05" +
		"U\u0577\nU\x03V\x03V\x03W\x03W\x05W\u057D\nW\x03X\x03X\x03X\x05X\u0582" +
		"\nX\x03Y\x03Y\x03Y\x03Y\x05Y\u0588\nY\x03Y\x03Y\x06Y\u058C\nY\rY\x0EY" +
		"\u058D\x03Y\x03Y\x05Y\u0592\nY\x03Z\x03Z\x07Z\u0596\nZ\fZ\x0EZ\u0599\v" +
		"Z\x03Z\x03Z\x03[\x03[\x05[\u059F\n[\x03[\x03[\x03[\x03[\x03\\\x03\\\x03" +
		"\\\x07\\\u05A8\n\\\f\\\x0E\\\u05AB\v\\\x03\\\x03\\\x03\\\x05\\\u05B0\n" +
		"\\\x03\\\x03\\\x07\\\u05B4\n\\\f\\\x0E\\\u05B7\v\\\x03\\\x03\\\x03\\\x05" +
		"\\\u05BC\n\\\x03\\\x03\\\x05\\\u05C0\n\\\x05\\\u05C2\n\\\x03\\\x03\\\x05" +
		"\\\u05C6\n\\\x03\\\x03\\\x07\\\u05CA\n\\\f\\\x0E\\\u05CD\v\\\x03\\\x03" +
		"\\\x03\\\x05\\\u05D2\n\\\x03\\\x03\\\x05\\\u05D6\n\\\x03\\\x02\x02\x02" +
		"]\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
		"*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02" +
		"F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02" +
		"b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02" +
		"~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02" +
		"\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02" +
		"\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02" +
		"\xB4\x02\xB6\x02\x02\b\x03\x02Vb\x03\x0245\x03\x02CD\x03\x02EF\x05\x02" +
		"66GITT\x04\x02EFJJ\x02\u06B2\x02\xBD\x03\x02\x02\x02\x04\xC3\x03\x02\x02" +
		"\x02\x06\xC8\x03\x02\x02\x02\b\xD1\x03\x02\x02\x02\n\xDD\x03\x02\x02\x02" +
		"\f\xE1\x03\x02\x02\x02\x0E\xE7\x03\x02\x02\x02\x10\xEA\x03\x02\x02\x02" +
		"\x12\xF4\x03\x02\x02\x02\x14\u0202\x03\x02\x02\x02\x16\u0204\x03\x02\x02" +
		"\x02\x18\u02C6\x03\x02\x02\x02\x1A\u02C8\x03\x02\x02\x02\x1C\u02CC\x03" +
		"\x02\x02\x02\x1E\u02CE\x03\x02\x02\x02 \u02E3\x03\x02\x02\x02\"\u02E5" +
		"\x03\x02\x02\x02$\u02F8\x03\x02\x02\x02&\u0300\x03\x02\x02\x02(\u030F" +
		"\x03\x02\x02\x02*\u0311\x03\x02\x02\x02,\u0314\x03\x02\x02\x02.\u031B" +
		"\x03\x02\x02\x020\u031D\x03\x02\x02\x022\u031F\x03\x02\x02\x024\u0321" +
		"\x03\x02\x02\x026\u0325\x03\x02\x02\x028\u0327\x03\x02\x02\x02:\u0331" +
		"\x03\x02\x02\x02<\u0333\x03\x02\x02\x02>\u0336\x03\x02\x02\x02@\u034E" +
		"\x03\x02\x02\x02B\u0353\x03\x02\x02\x02D\u0358\x03\x02\x02\x02F\u0363" +
		"\x03\x02\x02\x02H\u036B\x03\x02\x02\x02J\u0373\x03\x02\x02\x02L\u037C" +
		"\x03\x02\x02\x02N\u0385\x03\x02\x02\x02P\u0394\x03\x02\x02\x02R\u0396" +
		"\x03\x02\x02\x02T\u039C\x03\x02\x02\x02V\u03AF\x03\x02\x02\x02X\u03B8" +
		"\x03\x02\x02\x02Z\u03C3\x03\x02\x02\x02\\\u03DD\x03\x02\x02\x02^\u03E9" +
		"\x03\x02\x02\x02`\u03EE\x03\x02\x02\x02b\u0400\x03\x02\x02\x02d\u0402" +
		"\x03\x02\x02\x02f\u0410\x03\x02\x02\x02h\u0414\x03\x02\x02\x02j\u0416" +
		"\x03\x02\x02\x02l\u041D\x03\x02\x02\x02n\u0424\x03\x02\x02\x02p\u042C" +
		"\x03\x02\x02\x02r\u0437\x03\x02\x02\x02t\u0439\x03\x02\x02\x02v\u044F" +
		"\x03\x02\x02\x02x\u0451\x03\x02\x02\x02z\u0454\x03\x02\x02\x02|\u045C" +
		"\x03\x02\x02\x02~\u0464\x03\x02\x02\x02\x80\u046C\x03\x02\x02\x02\x82" +
		"\u0474\x03\x02\x02\x02\x84\u047C\x03\x02\x02\x02\x86\u0487\x03\x02\x02" +
		"\x02\x88\u0489\x03\x02\x02\x02\x8A\u048F\x03\x02\x02\x02\x8C\u04B3\x03" +
		"\x02\x02\x02\x8E\u04B7\x03\x02\x02\x02\x90\u04D4\x03\x02\x02\x02\x92\u04D6" +
		"\x03\x02\x02\x02\x94\u04EC\x03\x02\x02\x02\x96\u04EE\x03\x02\x02\x02\x98" +
		"\u04F4\x03\x02\x02\x02\x9A\u0503\x03\x02\x02\x02\x9C\u053E\x03\x02\x02" +
		"\x02\x9E\u0540\x03\x02\x02\x02\xA0\u054C\x03\x02\x02\x02\xA2\u0563\x03" +
		"\x02\x02\x02\xA4\u0567\x03\x02\x02\x02\xA6\u056A\x03\x02\x02\x02\xA8\u0573" +
		"\x03\x02\x02\x02\xAA\u0578\x03\x02\x02\x02\xAC\u057A\x03\x02\x02\x02\xAE" +
		"\u0581\x03\x02\x02\x02\xB0\u0591\x03\x02\x02\x02\xB2\u0593\x03\x02\x02" +
		"\x02\xB4\u059C\x03\x02\x02\x02\xB6\u05D5\x03\x02\x02\x02\xB8\xBE\x07*" +
		"\x02\x02\xB9\xBE\x05\x1E\x10\x02\xBA\xBB\x05P)\x02\xBB\xBC\x07*\x02\x02" +
		"\xBC\xBE\x03\x02\x02\x02\xBD\xB8\x03\x02\x02\x02\xBD\xB9\x03\x02\x02\x02" +
		"\xBD\xBA\x03\x02\x02\x02\xBE\x03\x03\x02\x02\x02\xBF\xC2\x07*\x02\x02" +
		"\xC0\xC2\x05\x1C\x0F\x02\xC1\xBF\x03\x02\x02\x02\xC1\xC0\x03\x02\x02\x02" +
		"\xC2\xC5\x03\x02\x02\x02\xC3\xC1\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02" +
		"\xC4\xC6\x03\x02\x02\x02\xC5\xC3\x03\x02\x02\x02\xC6\xC7\x07\x02\x02\x03" +
		"\xC7\x05\x03\x02\x02\x02\xC8\xCC\x05\x9AN\x02\xC9\xCB\x07*\x02\x02\xCA" +
		"\xC9\x03\x02\x02\x02\xCB\xCE\x03\x02\x02\x02\xCC\xCA\x03\x02\x02\x02\xCC" +
		"\xCD\x03\x02\x02\x02\xCD\xCF\x03\x02\x02\x02\xCE\xCC\x03\x02\x02\x02\xCF" +
		"\xD0\x07\x02\x02\x03\xD0\x07\x03\x02\x02\x02\xD1\xD2\x07T\x02\x02\xD2" +
		"\xD8\x05H%\x02\xD3\xD5\x077\x02\x02\xD4\xD6\x05\xA0Q\x02\xD5\xD4\x03\x02" +
		"\x02\x02\xD5\xD6\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xD9\x078" +
		"\x02\x02\xD8\xD3\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xDA\x03\x02" +
		"\x02\x02\xDA\xDB\x07*\x02\x02\xDB\t\x03\x02\x02\x02\xDC\xDE\x05\b\x05" +
		"\x02\xDD\xDC\x03\x02\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\xDD\x03\x02\x02" +
		"\x02\xDF\xE0\x03\x02\x02\x02\xE0\v\x03\x02\x02\x02\xE1\xE5\x05\n\x06\x02" +
		"\xE2\xE6\x05\x9EP\x02\xE3\xE6\x05\x10\t\x02\xE4\xE6\x05\x0E\b\x02\xE5" +
		"\xE2\x03\x02\x02\x02\xE5\xE3\x03\x02\x02\x02\xE5\xE4\x03\x02\x02\x02\xE6" +
		"\r\x03\x02\x02\x02\xE7\xE8\x07(\x02\x02\xE8\xE9\x05\x10\t\x02\xE9\x0F" +
		"\x03\x02\x02\x02\xEA\xEB\x07\x07\x02\x02\xEB\xEC\x07+\x02\x02\xEC\xEF" +
		"\x05\x12\n\x02\xED\xEE\x07U\x02\x02\xEE\xF0\x05f4\x02\xEF\xED\x03\x02" +
		"\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1\xF2\x07:" +
		"\x02\x02\xF2\xF3\x05b2\x02\xF3\x11\x03\x02\x02\x02\xF4\xF6\x077\x02\x02" +
		"\xF5\xF7\x05\x14\v\x02\xF6\xF5\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02" +
		"\xF7\xF8\x03\x02\x02\x02\xF8\xF9\x078\x02\x02\xF9\x13\x03\x02\x02\x02" +
		"\xFA\xFD\x05\x16\f\x02\xFB\xFC\x07=\x02\x02\xFC\xFE\x05f4\x02\xFD\xFB" +
		"\x03\x02\x02\x02\xFD\xFE\x03\x02\x02\x02\xFE\u010A\x03\x02\x02\x02\xFF" +
		"\u0101\x079\x02\x02\u0100\u0102\x07g\x02\x02\u0101\u0100\x03\x02\x02\x02" +
		"\u0101\u0102\x03\x02\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103\u0106\x05" +
		"\x16\f\x02\u0104\u0105\x07=\x02\x02\u0105\u0107\x05f4\x02\u0106\u0104" +
		"\x03\x02\x02\x02\u0106\u0107\x03\x02\x02\x02\u0107\u0109\x03\x02\x02\x02" +
		"\u0108\xFF\x03\x02\x02\x02\u0109\u010C\x03\x02\x02\x02\u010A\u0108\x03" +
		"\x02\x02\x02\u010A\u010B\x03\x02\x02\x02\u010B\u010D\x03\x02\x02\x02\u010C" +
		"\u010A\x03\x02\x02\x02\u010D\u010F\x079\x02\x02\u010E\u0110\x07g\x02\x02" +
		"\u010F\u010E\x03\x02\x02\x02\u010F\u0110\x03\x02\x02\x02\u0110\u0111\x03" +
		"\x02\x02\x02\u0111\u018A\x07G\x02\x02\u0112\u0188\x079\x02\x02\u0113\u0115" +
		"\x07g\x02\x02\u0114\u0113\x03\x02\x02\x02\u0114\u0115\x03\x02\x02\x02" +
		"\u0115\u0116\x03\x02\x02\x02\u0116\u0119\x05\x16\f\x02\u0117\u0118\x07" +
		"=\x02\x02\u0118\u011A\x05f4\x02\u0119\u0117\x03\x02\x02\x02\u0119\u011A" +
		"\x03\x02\x02\x02\u011A\u0126\x03\x02\x02\x02\u011B\u011D\x079\x02\x02" +
		"\u011C\u011E\x07g\x02\x02\u011D\u011C\x03\x02\x02\x02\u011D\u011E\x03" +
		"\x02\x02\x02\u011E\u011F\x03\x02\x02\x02\u011F\u0122\x05\x16\f\x02\u0120" +
		"\u0121\x07=\x02\x02\u0121\u0123\x05f4\x02\u0122\u0120\x03\x02\x02\x02" +
		"\u0122\u0123\x03\x02\x02\x02\u0123\u0125\x03\x02\x02\x02\u0124\u011B\x03" +
		"\x02\x02\x02\u0125\u0128\x03\x02\x02\x02\u0126\u0124\x03\x02\x02\x02\u0126" +
		"\u0127\x03\x02\x02\x02\u0127\u015B\x03\x02\x02\x02\u0128\u0126\x03\x02" +
		"\x02\x02\u0129\u015C\x07g\x02\x02\u012A\u012C\x079\x02\x02\u012B\u012D" +
		"\x07g\x02\x02\u012C\u012B\x03\x02\x02\x02\u012C\u012D\x03\x02\x02\x02" +
		"\u012D\u0157\x03\x02\x02\x02\u012E\u0130\x076\x02\x02\u012F\u0131\x05" +
		"\x16\f\x02\u0130\u012F\x03\x02\x02\x02\u0130\u0131\x03\x02\x02\x02\u0131" +
		"\u013B\x03\x02\x02\x02\u0132\u0133\x079\x02\x02\u0133\u0134\x07g\x02\x02" +
		"\u0134\u0137\x05\x16\f\x02\u0135\u0136\x07=\x02\x02\u0136\u0138\x05f4" +
		"\x02\u0137\u0135\x03\x02\x02\x02\u0137\u0138\x03\x02\x02\x02\u0138\u013A" +
		"\x03\x02\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\u0139\u0132\x03\x02\x02\x02\u013A\u013D\x03\x02\x02\x02\u013B\u0139\x03" +
		"\x02\x02\x02\u013B\u013C\x03\x02\x02\x02\u013C\u014F\x03\x02\x02\x02\u013D" +
		"\u013B\x03\x02\x02\x02\u013E\u0150\x07g\x02\x02\u013F\u0141\x079\x02\x02" +
		"\u0140\u0142\x07g\x02\x02\u0141\u0140\x03\x02\x02\x02\u0141\u0142\x03" +
		"\x02\x02\x02\u0142\u014B\x03\x02\x02\x02\u0143\u0144\x07<\x02\x02\u0144" +
		"\u0146\x05\x16\f\x02\u0145\u0147\x079\x02\x02\u0146\u0145\x03\x02\x02" +
		"\x02\u0146\u0147\x03\x02\x02\x02\u0147\u0149\x03\x02\x02\x02\u0148\u014A" +
		"\x07g\x02\x02\u0149\u0148\x03\x02\x02\x02\u0149\u014A\x03\x02\x02\x02" +
		"\u014A\u014C\x03\x02\x02\x02\u014B\u0143\x03\x02\x02\x02\u014B\u014C\x03" +
		"\x02\x02\x02\u014C\u014E\x03\x02\x02\x02\u014D\u013F\x03\x02\x02\x02\u014D" +
		"\u014E\x03\x02\x02\x02\u014E\u0150\x03\x02\x02\x02\u014F\u013E\x03\x02" +
		"\x02\x02\u014F\u014D\x03\x02\x02\x02\u0150\u0158\x03\x02\x02\x02\u0151" +
		"\u0152\x07<\x02\x02\u0152\u0153\x05\x16\f\x02\u0153\u0155\x079\x02\x02" +
		"\u0154\u0156\x07g\x02\x02\u0155\u0154\x03\x02\x02\x02\u0155\u0156\x03" +
		"\x02\x02\x02\u0156\u0158\x03\x02\x02\x02\u0157\u012E\x03\x02\x02\x02\u0157" +
		"\u0151\x03\x02\x02\x02\u0157\u0158\x03\x02\x02\x02\u0158\u015A\x03\x02" +
		"\x02\x02\u0159\u012A\x03\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A" +
		"\u015C\x03\x02\x02\x02\u015B\u0129\x03\x02\x02\x02\u015B\u0159\x03\x02" +
		"\x02\x02\u015C\u0189\x03\x02\x02\x02\u015D\u015F\x076\x02\x02\u015E\u0160" +
		"\x05\x16\f\x02\u015F\u015E\x03\x02\x02\x02\u015F\u0160\x03\x02\x02\x02" +
		"\u0160\u016C\x03\x02\x02\x02\u0161\u0163\x079\x02\x02\u0162\u0164\x07" +
		"g\x02\x02\u0163\u0162\x03\x02\x02\x02\u0163\u0164\x03\x02\x02\x02\u0164" +
		"\u0165\x03\x02\x02\x02\u0165\u0168\x05\x16\f\x02\u0166\u0167\x07=\x02" +
		"\x02\u0167\u0169\x05f4\x02\u0168\u0166\x03\x02\x02\x02\u0168\u0169\x03" +
		"\x02\x02\x02\u0169\u016B\x03\x02\x02\x02\u016A\u0161\x03\x02\x02\x02\u016B" +
		"\u016E\x03\x02\x02\x02\u016C\u016A\x03\x02\x02\x02\u016C\u016D\x03\x02" +
		"\x02\x02\u016D\u0180\x03\x02\x02\x02\u016E\u016C\x03\x02\x02\x02\u016F" +
		"\u0181\x07g\x02\x02\u0170\u0172\x079\x02\x02\u0171\u0173\x07g\x02\x02" +
		"\u0172\u0171\x03\x02\x02\x02\u0172\u0173\x03\x02\x02\x02\u0173\u017C\x03" +
		"\x02\x02\x02\u0174\u0175\x07<\x02\x02\u0175\u0177\x05\x16\f\x02\u0176" +
		"\u0178\x079\x02\x02\u0177\u0176\x03\x02\x02\x02\u0177\u0178\x03\x02\x02" +
		"\x02\u0178\u017A\x03\x02\x02\x02\u0179\u017B\x07g\x02\x02\u017A\u0179" +
		"\x03\x02\x02\x02\u017A\u017B\x03\x02\x02\x02\u017B\u017D\x03\x02\x02\x02" +
		"\u017C\u0174\x03\x02\x02\x02\u017C\u017D\x03\x02\x02\x02\u017D\u017F\x03" +
		"\x02\x02\x02\u017E\u0170\x03\x02\x02\x02\u017E\u017F\x03\x02\x02\x02\u017F" +
		"\u0181\x03\x02\x02\x02\u0180\u016F\x03\x02\x02\x02\u0180\u017E\x03\x02" +
		"\x02\x02\u0181\u0189\x03\x02\x02\x02\u0182\u0183\x07<\x02\x02\u0183\u0184" +
		"\x05\x16\f\x02\u0184\u0186\x079\x02\x02\u0185\u0187\x07g\x02\x02\u0186" +
		"\u0185\x03\x02\x02\x02\u0186\u0187\x03\x02\x02\x02\u0187\u0189\x03\x02" +
		"\x02\x02\u0188\u0114\x03\x02\x02\x02\u0188\u015D\x03\x02\x02\x02\u0188" +
		"\u0182\x03\x02\x02\x02\u0188\u0189\x03\x02\x02\x02\u0189\u018B\x03\x02" +
		"\x02\x02\u018A\u0112\x03\x02\x02\x02\u018A\u018B\x03\x02\x02\x02\u018B" +
		"\u0203\x03\x02\x02\x02\u018C\u018F\x05\x16\f\x02\u018D\u018E\x07=\x02" +
		"\x02\u018E\u0190\x05f4\x02\u018F\u018D\x03\x02\x02\x02\u018F\u0190\x03" +
		"\x02\x02\x02\u0190\u019C\x03\x02\x02\x02\u0191\u0193\x079\x02\x02\u0192" +
		"\u0194\x07g\x02\x02\u0193\u0192\x03\x02\x02\x02\u0193\u0194\x03\x02\x02" +
		"\x02\u0194\u0195\x03\x02\x02\x02\u0195\u0198\x05\x16\f\x02\u0196\u0197" +
		"\x07=\x02\x02\u0197\u0199\x05f4\x02\u0198\u0196\x03\x02\x02\x02\u0198" +
		"\u0199\x03\x02\x02\x02\u0199\u019B\x03\x02\x02\x02\u019A\u0191\x03\x02" +
		"\x02\x02\u019B\u019E\x03\x02\x02\x02\u019C\u019A\x03\x02\x02\x02\u019C" +
		"\u019D\x03\x02\x02\x02\u019D\u01D1\x03\x02\x02\x02\u019E\u019C\x03\x02" +
		"\x02\x02\u019F\u01D2\x07g\x02\x02\u01A0\u01A2\x079\x02\x02\u01A1\u01A3" +
		"\x07g\x02\x02\u01A2\u01A1\x03\x02\x02\x02\u01A2\u01A3\x03\x02\x02\x02" +
		"\u01A3\u01CD\x03\x02\x02\x02\u01A4\u01A5\x076\x02\x02\u01A5\u01AF\x05" +
		"\x16\f\x02\u01A6\u01A7\x079\x02\x02\u01A7\u01A8\x07g\x02\x02\u01A8\u01AB" +
		"\x05\x16\f\x02\u01A9\u01AA\x07=\x02\x02\u01AA\u01AC\x05f4\x02\u01AB\u01A9" +
		"\x03\x02\x02\x02\u01AB\u01AC\x03\x02\x02\x02\u01AC\u01AE\x03\x02\x02\x02" +
		"\u01AD\u01A6\x03\x02\x02\x02\u01AE\u01B1\x03\x02\x02\x02\u01AF\u01AD\x03" +
		"\x02\x02\x02\u01AF\u01B0\x03\x02\x02\x02\u01B0\u01C3\x03\x02\x02\x02\u01B1" +
		"\u01AF\x03\x02\x02\x02\u01B2\u01C4\x07g\x02\x02\u01B3\u01B5\x079\x02\x02" +
		"\u01B4\u01B6\x07g\x02\x02\u01B5\u01B4\x03\x02\x02\x02\u01B5\u01B6\x03" +
		"\x02\x02\x02\u01B6\u01BF\x03\x02\x02\x02\u01B7\u01B8\x07<\x02\x02\u01B8" +
		"\u01BA\x05\x16\f\x02\u01B9\u01BB\x079\x02\x02\u01BA\u01B9\x03\x02\x02" +
		"\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB\u01BD\x03\x02\x02\x02\u01BC\u01BE" +
		"\x07g\x02\x02\u01BD\u01BC\x03\x02\x02\x02\u01BD\u01BE\x03\x02\x02\x02" +
		"\u01BE\u01C0\x03\x02\x02\x02\u01BF\u01B7\x03\x02\x02\x02\u01BF\u01C0\x03" +
		"\x02\x02\x02\u01C0\u01C2\x03\x02\x02\x02\u01C1\u01B3\x03\x02\x02\x02\u01C1" +
		"\u01C2\x03\x02\x02\x02\u01C2\u01C4\x03\x02\x02\x02\u01C3\u01B2\x03\x02" +
		"\x02\x02\u01C3\u01C1\x03\x02\x02\x02\u01C4\u01CE\x03\x02\x02\x02\u01C5" +
		"\u01C6\x07<\x02\x02\u01C6\u01C8\x05\x16\f\x02\u01C7\u01C9\x079\x02\x02" +
		"\u01C8\u01C7\x03\x02\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C9\u01CB\x03" +
		"\x02\x02\x02\u01CA\u01CC\x07g\x02\x02\u01CB\u01CA\x03\x02\x02\x02\u01CB" +
		"\u01CC\x03\x02\x02\x02\u01CC\u01CE\x03\x02\x02\x02\u01CD\u01A4\x03\x02" +
		"\x02\x02\u01CD\u01C5\x03\x02\x02\x02\u01CD\u01CE\x03\x02\x02\x02\u01CE" +
		"\u01D0\x03\x02\x02\x02\u01CF\u01A0\x03\x02\x02\x02\u01CF\u01D0\x03\x02" +
		"\x02\x02\u01D0\u01D2\x03\x02\x02\x02\u01D1\u019F\x03\x02\x02\x02\u01D1" +
		"\u01CF\x03\x02\x02\x02\u01D2\u0201\x03\x02\x02\x02\u01D3\u01D5\x076\x02" +
		"\x02\u01D4\u01D6\x05\x16\f\x02\u01D5\u01D4\x03\x02\x02\x02\u01D5\u01D6" +
		"\x03\x02\x02\x02\u01D6\u01E2\x03\x02\x02\x02\u01D7\u01D9\x079\x02\x02" +
		"\u01D8\u01DA\x07g\x02\x02\u01D9\u01D8\x03\x02\x02\x02\u01D9\u01DA\x03" +
		"\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02\u01DB\u01DE\x05\x16\f\x02\u01DC" +
		"\u01DD\x07=\x02\x02\u01DD\u01DF\x05f4\x02\u01DE\u01DC\x03\x02\x02\x02" +
		"\u01DE\u01DF\x03\x02\x02\x02\u01DF\u01E1\x03\x02\x02\x02\u01E0\u01D7\x03" +
		"\x02\x02\x02\u01E1\u01E4\x03\x02\x02\x02\u01E2\u01E0\x03\x02\x02\x02\u01E2" +
		"\u01E3\x03\x02\x02\x02\u01E3\u01F6\x03\x02\x02\x02\u01E4\u01E2\x03\x02" +
		"\x02\x02\u01E5\u01F7\x07g\x02\x02\u01E6\u01E8\x079\x02\x02\u01E7\u01E9" +
		"\x07g\x02\x02\u01E8\u01E7\x03\x02\x02\x02\u01E8\u01E9\x03\x02\x02\x02" +
		"\u01E9\u01F2\x03\x02\x02\x02\u01EA\u01EB\x07<\x02\x02\u01EB\u01ED\x05" +
		"\x16\f\x02\u01EC\u01EE\x079\x02\x02\u01ED\u01EC\x03\x02\x02\x02\u01ED" +
		"\u01EE\x03\x02\x02\x02\u01EE\u01F0\x03\x02\x02\x02\u01EF\u01F1\x07g\x02" +
		"\x02\u01F0\u01EF\x03\x02\x02\x02\u01F0\u01F1\x03\x02\x02\x02\u01F1\u01F3" +
		"\x03\x02\x02\x02\u01F2\u01EA\x03\x02\x02\x02\u01F2\u01F3\x03\x02\x02\x02" +
		"\u01F3\u01F5\x03\x02\x02\x02\u01F4\u01E6\x03\x02\x02\x02\u01F4\u01F5\x03" +
		"\x02\x02\x02\u01F5\u01F7\x03\x02\x02\x02\u01F6\u01E5\x03\x02\x02\x02\u01F6" +
		"\u01F4\x03\x02\x02\x02\u01F7\u0201\x03\x02\x02\x02\u01F8\u01F9\x07<\x02" +
		"\x02\u01F9\u01FB\x05\x16\f\x02\u01FA\u01FC\x079\x02\x02\u01FB\u01FA\x03" +
		"\x02\x02\x02\u01FB\u01FC\x03\x02\x02\x02\u01FC\u01FE\x03\x02\x02\x02\u01FD" +
		"\u01FF\x07g\x02\x02\u01FE\u01FD\x03\x02\x02\x02\u01FE\u01FF\x03\x02\x02" +
		"\x02\u01FF\u0201\x03\x02\x02\x02\u0200\u018C\x03\x02\x02\x02\u0200\u01D3" +
		"\x03\x02\x02\x02\u0200\u01F8\x03\x02\x02\x02\u0201\u0203\x03\x02\x02\x02" +
		"\u0202\xFA\x03\x02\x02\x02\u0202\u0200\x03\x02\x02\x02\u0203\x15\x03\x02" +
		"\x02\x02\u0204\u0207\x07+\x02\x02\u0205\u0206\x07:\x02\x02\u0206\u0208" +
		"\x05f4\x02\u0207\u0205\x03\x02\x02\x02\u0207\u0208\x03\x02\x02\x02\u0208" +
		"\x17\x03\x02\x02\x02\u0209\u020C\x05\x1A\x0E\x02\u020A\u020B\x07=\x02" +
		"\x02\u020B\u020D\x05f4\x02\u020C\u020A\x03\x02\x02\x02\u020C\u020D\x03" +
		"\x02\x02\x02\u020D\u0216\x03\x02\x02\x02\u020E\u020F\x079\x02\x02\u020F" +
		"\u0212\x05\x1A\x0E\x02\u0210\u0211\x07=\x02\x02\u0211\u0213\x05f4\x02" +
		"\u0212\u0210\x03\x02\x02\x02\u0212\u0213\x03\x02\x02\x02\u0213\u0215\x03" +
		"\x02\x02\x02\u0214\u020E\x03\x02\x02\x02\u0215\u0218\x03\x02\x02\x02\u0216" +
		"\u0214\x03\x02\x02\x02\u0216\u0217\x03\x02\x02\x02\u0217\u0219\x03\x02" +
		"\x02\x02\u0218\u0216\x03\x02\x02\x02\u0219\u021A\x079\x02\x02\u021A\u0271" +
		"\x07G\x02\x02\u021B\u026F\x079\x02\x02\u021C\u021F\x05\x1A\x0E\x02\u021D" +
		"\u021E\x07=\x02\x02\u021E\u0220\x05f4\x02\u021F\u021D\x03\x02\x02\x02" +
		"\u021F\u0220\x03\x02\x02\x02\u0220\u0229\x03\x02\x02\x02\u0221\u0222\x07" +
		"9\x02\x02\u0222\u0225\x05\x1A\x0E\x02\u0223\u0224\x07=\x02\x02\u0224\u0226" +
		"\x05f4\x02\u0225\u0223\x03\x02\x02\x02\u0225\u0226\x03\x02\x02\x02\u0226" +
		"\u0228\x03\x02\x02\x02\u0227\u0221\x03\x02\x02\x02\u0228\u022B\x03\x02" +
		"\x02\x02\u0229\u0227\x03\x02\x02\x02\u0229\u022A\x03\x02\x02\x02\u022A" +
		"\u024D\x03\x02\x02\x02\u022B\u0229\x03\x02\x02\x02\u022C\u024B\x079\x02" +
		"\x02\u022D\u022F\x076\x02\x02\u022E\u0230\x05\x1A\x0E\x02\u022F\u022E" +
		"\x03\x02\x02\x02\u022F\u0230\x03\x02\x02\x02\u0230\u0239\x03\x02\x02\x02" +
		"\u0231\u0232\x079\x02\x02\u0232\u0235\x05\x1A\x0E\x02\u0233\u0234\x07" +
		"=\x02\x02\u0234\u0236\x05f4\x02\u0235\u0233\x03\x02\x02\x02\u0235\u0236" +
		"\x03\x02\x02\x02\u0236\u0238\x03\x02\x02\x02\u0237\u0231\x03\x02\x02\x02" +
		"\u0238\u023B\x03\x02\x02\x02\u0239\u0237\x03\x02\x02\x02\u0239\u023A\x03" +
		"\x02\x02\x02\u023A\u0244\x03\x02\x02\x02\u023B\u0239\x03\x02\x02\x02\u023C" +
		"\u0242\x079\x02\x02\u023D\u023E\x07<\x02\x02\u023E\u0240\x05\x1A\x0E\x02" +
		"\u023F\u0241\x079\x02\x02\u0240\u023F\x03\x02\x02\x02\u0240\u0241\x03" +
		"\x02\x02\x02\u0241\u0243\x03\x02\x02\x02\u0242\u023D\x03\x02\x02\x02\u0242" +
		"\u0243\x03\x02\x02\x02\u0243\u0245\x03\x02\x02\x02\u0244\u023C\x03\x02" +
		"\x02\x02\u0244\u0245\x03\x02\x02\x02\u0245\u024C\x03\x02\x02\x02\u0246" +
		"\u0247\x07<\x02\x02\u0247\u0249\x05\x1A\x0E\x02\u0248\u024A\x079\x02\x02" +
		"\u0249\u0248\x03\x02\x02\x02\u0249\u024A\x03\x02\x02\x02\u024A\u024C\x03" +
		"\x02\x02\x02\u024B\u022D\x03\x02\x02\x02\u024B\u0246\x03\x02\x02\x02\u024B" +
		"\u024C\x03\x02\x02\x02\u024C\u024E\x03\x02\x02\x02\u024D\u022C\x03\x02" +
		"\x02\x02\u024D\u024E\x03\x02\x02\x02\u024E\u026E\x03\x02\x02\x02\u024F" +
		"\u0251\x076\x02\x02\u0250\u0252\x05\x1A\x0E\x02\u0251\u0250\x03\x02\x02" +
		"\x02\u0251\u0252\x03\x02\x02\x02\u0252\u025B\x03\x02\x02\x02\u0253\u0254" +
		"\x079\x02\x02\u0254\u0257\x05\x1A\x0E\x02\u0255\u0256\x07=\x02\x02\u0256" +
		"\u0258\x05f4\x02\u0257\u0255\x03\x02\x02\x02\u0257\u0258\x03\x02\x02\x02" +
		"\u0258\u025A\x03\x02\x02\x02\u0259\u0253\x03\x02\x02\x02\u025A\u025D\x03" +
		"\x02\x02\x02\u025B\u0259\x03\x02\x02\x02\u025B\u025C\x03\x02\x02\x02\u025C" +
		"\u0266\x03\x02\x02\x02\u025D\u025B\x03\x02\x02\x02\u025E\u0264\x079\x02" +
		"\x02\u025F\u0260\x07<\x02\x02\u0260\u0262\x05\x1A\x0E\x02\u0261\u0263" +
		"\x079\x02\x02\u0262\u0261\x03\x02\x02\x02\u0262\u0263\x03\x02\x02\x02" +
		"\u0263\u0265\x03\x02\x02\x02\u0264\u025F\x03\x02\x02\x02\u0264\u0265\x03" +
		"\x02\x02\x02\u0265\u0267\x03\x02\x02\x02\u0266\u025E\x03\x02\x02\x02\u0266" +
		"\u0267\x03\x02\x02\x02\u0267\u026E\x03\x02\x02\x02\u0268\u0269\x07<\x02" +
		"\x02\u0269\u026B\x05\x1A\x0E\x02\u026A\u026C\x079\x02\x02\u026B\u026A" +
		"\x03\x02\x02\x02\u026B\u026C\x03\x02\x02\x02\u026C\u026E\x03\x02\x02\x02" +
		"\u026D\u021C\x03\x02\x02\x02\u026D\u024F\x03\x02\x02\x02\u026D\u0268\x03" +
		"\x02\x02\x02\u026E\u0270\x03\x02\x02\x02\u026F\u026D\x03\x02\x02\x02\u026F" +
		"\u0270\x03\x02\x02\x02\u0270\u0272\x03\x02\x02\x02\u0271\u021B\x03\x02" +
		"\x02\x02\u0271\u0272\x03\x02\x02\x02\u0272\u02C7\x03\x02\x02\x02\u0273" +
		"\u0276\x05\x1A\x0E\x02\u0274\u0275\x07=\x02\x02\u0275\u0277\x05f4\x02" +
		"\u0276\u0274\x03\x02\x02\x02\u0276\u0277\x03\x02\x02\x02\u0277\u0280\x03" +
		"\x02\x02\x02\u0278\u0279\x079\x02\x02\u0279\u027C\x05\x1A\x0E\x02\u027A" +
		"\u027B\x07=\x02\x02\u027B\u027D\x05f4\x02\u027C\u027A\x03\x02\x02\x02" +
		"\u027C\u027D\x03\x02\x02\x02\u027D\u027F\x03\x02\x02\x02\u027E\u0278\x03" +
		"\x02\x02\x02\u027F\u0282\x03\x02\x02\x02\u0280\u027E\x03\x02\x02\x02\u0280" +
		"\u0281\x03\x02\x02\x02\u0281\u02A4\x03\x02\x02\x02\u0282\u0280\x03\x02" +
		"\x02\x02\u0283\u02A2\x079\x02\x02\u0284\u0286\x076\x02\x02\u0285\u0287" +
		"\x05\x1A\x0E\x02\u0286\u0285\x03\x02\x02\x02\u0286\u0287\x03\x02\x02\x02" +
		"\u0287\u0290\x03\x02\x02\x02\u0288\u0289\x079\x02\x02\u0289\u028C\x05" +
		"\x1A\x0E\x02\u028A\u028B\x07=\x02\x02\u028B\u028D\x05f4\x02\u028C\u028A" +
		"\x03\x02\x02\x02\u028C\u028D\x03\x02\x02\x02\u028D\u028F\x03\x02\x02\x02" +
		"\u028E\u0288\x03\x02\x02\x02\u028F\u0292\x03\x02\x02\x02\u0290\u028E\x03" +
		"\x02\x02\x02\u0290\u0291\x03\x02\x02\x02\u0291\u029B\x03\x02\x02\x02\u0292" +
		"\u0290\x03\x02\x02\x02\u0293\u0299\x079\x02\x02\u0294\u0295\x07<\x02\x02" +
		"\u0295\u0297\x05\x1A\x0E\x02\u0296\u0298\x079\x02\x02\u0297\u0296\x03" +
		"\x02\x02\x02\u0297\u0298\x03\x02\x02\x02\u0298\u029A\x03\x02\x02\x02\u0299" +
		"\u0294\x03\x02\x02\x02\u0299\u029A\x03\x02\x02\x02\u029A\u029C\x03\x02" +
		"\x02\x02\u029B\u0293\x03\x02\x02\x02\u029B\u029C\x03\x02\x02\x02\u029C" +
		"\u02A3\x03\x02\x02\x02\u029D\u029E\x07<\x02\x02\u029E\u02A0\x05\x1A\x0E" +
		"\x02\u029F\u02A1\x079\x02\x02\u02A0\u029F\x03\x02\x02\x02\u02A0\u02A1" +
		"\x03\x02\x02\x02\u02A1\u02A3\x03\x02\x02\x02\u02A2\u0284\x03\x02\x02\x02" +
		"\u02A2\u029D\x03\x02\x02\x02\u02A2\u02A3\x03\x02\x02\x02\u02A3\u02A5\x03" +
		"\x02\x02\x02\u02A4\u0283\x03\x02\x02\x02\u02A4\u02A5\x03\x02\x02\x02\u02A5" +
		"\u02C5\x03\x02\x02\x02\u02A6\u02A8\x076\x02\x02\u02A7\u02A9\x05\x1A\x0E" +
		"\x02\u02A8\u02A7\x03\x02\x02\x02\u02A8\u02A9\x03\x02\x02\x02\u02A9\u02B2" +
		"\x03\x02\x02\x02\u02AA\u02AB\x079\x02\x02\u02AB\u02AE\x05\x1A\x0E\x02" +
		"\u02AC\u02AD\x07=\x02\x02\u02AD\u02AF\x05f4\x02\u02AE\u02AC\x03\x02\x02" +
		"\x02\u02AE\u02AF\x03\x02\x02\x02\u02AF\u02B1\x03\x02\x02\x02\u02B0\u02AA" +
		"\x03\x02\x02\x02\u02B1\u02B4\x03\x02\x02\x02\u02B2\u02B0\x03\x02\x02\x02" +
		"\u02B2\u02B3\x03\x02\x02\x02\u02B3\u02BD\x03\x02\x02\x02\u02B4\u02B2\x03" +
		"\x02\x02\x02\u02B5\u02BB\x079\x02\x02\u02B6\u02B7\x07<\x02\x02\u02B7\u02B9" +
		"\x05\x1A\x0E\x02\u02B8\u02BA\x079\x02\x02\u02B9\u02B8\x03\x02\x02\x02" +
		"\u02B9\u02BA\x03\x02\x02\x02\u02BA\u02BC\x03\x02\x02\x02\u02BB\u02B6\x03" +
		"\x02\x02\x02\u02BB\u02BC\x03\x02\x02\x02\u02BC\u02BE\x03\x02\x02\x02\u02BD" +
		"\u02B5\x03\x02\x02\x02\u02BD\u02BE\x03\x02\x02\x02\u02BE\u02C5\x03\x02" +
		"\x02\x02\u02BF\u02C0\x07<\x02\x02\u02C0\u02C2\x05\x1A\x0E\x02\u02C1\u02C3" +
		"\x079\x02\x02\u02C2\u02C1\x03\x02\x02\x02\u02C2\u02C3\x03\x02\x02\x02" +
		"\u02C3\u02C5\x03\x02\x02\x02\u02C4\u0273\x03\x02\x02\x02\u02C4\u02A6\x03" +
		"\x02\x02\x02\u02C4\u02BF\x03\x02\x02\x02\u02C5\u02C7\x03\x02\x02\x02\u02C6" +
		"\u0209\x03\x02\x02\x02\u02C6\u02C4\x03\x02\x02\x02\u02C7\x19\x03\x02\x02" +
		"\x02\u02C8\u02C9\x07+\x02\x02\u02C9\x1B\x03\x02\x02\x02\u02CA\u02CD\x05" +
		"\x1E\x10\x02\u02CB\u02CD\x05P)\x02\u02CC\u02CA\x03\x02\x02\x02\u02CC\u02CB" +
		"\x03\x02\x02\x02\u02CD\x1D\x03\x02\x02\x02\u02CE\u02D3\x05 \x11\x02\u02CF" +
		"\u02D0\x07;\x02\x02\u02D0\u02D2\x05 \x11\x02\u02D1\u02CF\x03\x02\x02\x02" +
		"\u02D2\u02D5\x03\x02\x02\x02\u02D3\u02D1\x03\x02\x02\x02\u02D3\u02D4\x03" +
		"\x02\x02\x02\u02D4\u02D7\x03\x02\x02\x02\u02D5\u02D3\x03\x02\x02\x02\u02D6" +
		"\u02D8\x07;\x02\x02\u02D7\u02D6\x03\x02\x02\x02\u02D7\u02D8\x03\x02\x02" +
		"\x02\u02D8\u02D9\x03\x02\x02\x02\u02D9\u02DA\x07*\x02\x02\u02DA\x1F\x03" +
		"\x02\x02\x02\u02DB\u02E4\x05\"\x12\x02\u02DC\u02E4\x05*\x16\x02\u02DD" +
		"\u02E4\x05,\x17\x02\u02DE\u02E4\x05.\x18\x02\u02DF\u02E4\x05:\x1E\x02" +
		"\u02E0\u02E4\x05J&\x02\u02E1\u02E4\x05L\'\x02\u02E2\u02E4\x05N(\x02\u02E3" +
		"\u02DB\x03\x02\x02\x02\u02E3\u02DC\x03\x02\x02\x02\u02E3\u02DD\x03\x02" +
		"\x02\x02\u02E3\u02DE\x03\x02\x02\x02\u02E3\u02DF\x03\x02\x02\x02\u02E3" +
		"\u02E0\x03\x02\x02\x02\u02E3\u02E1\x03\x02\x02\x02\u02E3\u02E2\x03\x02" +
		"\x02\x02\u02E4!\x03\x02\x02\x02\u02E5\u02F6\x05&\x14\x02\u02E6\u02F7\x05" +
		"$\x13\x02\u02E7\u02EA\x05(\x15\x02\u02E8\u02EB\x05\xACW\x02\u02E9\u02EB" +
		"\x05\x9AN\x02\u02EA\u02E8\x03\x02\x02\x02\u02EA\u02E9\x03\x02\x02\x02" +
		"\u02EB\u02F7\x03\x02\x02\x02\u02EC\u02EF\x07=\x02\x02\u02ED\u02F0\x05" +
		"\xACW\x02\u02EE\u02F0\x05&\x14\x02\u02EF\u02ED\x03\x02\x02\x02\u02EF\u02EE" +
		"\x03\x02\x02\x02\u02F0\u02F2\x03\x02\x02\x02\u02F1\u02EC\x03\x02\x02\x02" +
		"\u02F2\u02F5\x03\x02\x02\x02\u02F3\u02F1\x03\x02\x02\x02\u02F3\u02F4\x03" +
		"\x02\x02\x02\u02F4\u02F7\x03\x02\x02\x02\u02F5\u02F3\x03\x02\x02\x02\u02F6" +
		"\u02E6\x03\x02\x02\x02\u02F6\u02E7\x03\x02\x02\x02\u02F6\u02F3\x03\x02" +
		"\x02\x02\u02F7#\x03\x02\x02\x02\u02F8\u02F9\x07:\x02\x02\u02F9\u02FC\x05" +
		"f4\x02\u02FA\u02FB\x07=\x02\x02\u02FB\u02FD\x05f4\x02\u02FC\u02FA\x03" +
		"\x02\x02\x02\u02FC\u02FD\x03\x02\x02\x02\u02FD%\x03\x02\x02\x02\u02FE" +
		"\u0301\x05f4\x02\u02FF\u0301\x05x=\x02\u0300\u02FE\x03\x02\x02\x02\u0300" +
		"\u02FF\x03\x02\x02\x02\u0301\u0309\x03\x02\x02\x02\u0302\u0305\x079\x02" +
		"\x02\u0303\u0306\x05f4\x02\u0304\u0306\x05x=\x02\u0305\u0303\x03\x02\x02" +
		"\x02\u0305\u0304\x03\x02\x02\x02\u0306\u0308\x03\x02\x02\x02\u0307\u0302" +
		"\x03\x02\x02\x02\u0308\u030B\x03\x02\x02\x02\u0309\u0307\x03\x02\x02\x02" +
		"\u0309\u030A\x03\x02\x02\x02\u030A\u030D\x03\x02\x02\x02\u030B\u0309\x03" +
		"\x02\x02\x02\u030C\u030E\x079\x02\x02\u030D\u030C\x03\x02\x02\x02\u030D" +
		"\u030E\x03\x02\x02\x02\u030E\'\x03\x02\x02\x02\u030F\u0310\t\x02\x02\x02" +
		"\u0310)\x03\x02\x02\x02\u0311\u0312\x07$\x02\x02\u0312\u0313\x05\x98M" +
		"\x02\u0313+\x03\x02\x02\x02\u0314\u0315\x07%\x02\x02\u0315-\x03\x02\x02" +
		"\x02\u0316\u031C\x050\x19\x02\u0317\u031C\x052\x1A\x02\u0318\u031C\x05" +
		"4\x1B\x02\u0319\u031C\x058\x1D\x02\u031A\u031C\x056\x1C\x02\u031B\u0316" +
		"\x03\x02\x02\x02\u031B\u0317\x03\x02\x02\x02\u031B\u0318\x03\x02\x02\x02" +
		"\u031B\u0319\x03\x02\x02\x02\u031B\u031A\x03\x02\x02\x02\u031C/\x03\x02" +
		"\x02\x02\u031D\u031E\x07\'\x02\x02\u031E1\x03\x02\x02\x02\u031F\u0320" +
		"\x07&\x02\x02\u03203\x03\x02\x02\x02\u0321\u0323\x07\b\x02\x02\u0322\u0324" +
		"\x05\x9AN\x02\u0323\u0322\x03\x02\x02\x02\u0323\u0324\x03\x02\x02\x02" +
		"\u03245\x03\x02\x02\x02\u0325\u0326\x05\xACW\x02\u03267\x03\x02\x02\x02" +
		"\u0327\u032D\x07\t\x02\x02\u0328\u032B\x05f4\x02\u0329\u032A\x07\n\x02" +
		"\x02\u032A\u032C\x05f4\x02\u032B\u0329\x03\x02\x02\x02\u032B\u032C\x03" +
		"\x02\x02\x02\u032C\u032E\x03\x02\x02\x02\u032D\u0328\x03\x02\x02\x02\u032D" +
		"\u032E\x03\x02\x02\x02\u032E9\x03\x02\x02\x02\u032F\u0332\x05<\x1F\x02" +
		"\u0330\u0332\x05> \x02\u0331\u032F\x03\x02\x02\x02\u0331\u0330\x03\x02" +
		"\x02\x02\u0332;\x03\x02\x02\x02\u0333\u0334\x07\v\x02\x02\u0334\u0335" +
		"\x05F$\x02\u0335=\x03\x02\x02\x02\u0336\u0343\x07\n\x02\x02\u0337\u0339" +
		"\t\x03\x02\x02\u0338\u0337\x03\x02\x02\x02\u0339\u033C\x03\x02\x02\x02" +
		"\u033A\u0338\x03\x02\x02\x02\u033A\u033B\x03\x02\x02\x02\u033B\u033D\x03" +
		"\x02\x02\x02\u033C\u033A\x03\x02\x02\x02\u033D\u0344\x05H%\x02\u033E\u0340" +
		"\t\x03\x02\x02\u033F\u033E\x03\x02\x02\x02\u0340\u0341\x03\x02\x02\x02" +
		"\u0341\u033F\x03\x02\x02\x02\u0341\u0342\x03\x02\x02\x02\u0342\u0344\x03" +
		"\x02\x02\x02\u0343\u033A\x03\x02\x02\x02\u0343\u033F\x03\x02\x02\x02\u0344" +
		"\u0345\x03\x02\x02\x02\u0345\u034C\x07\v\x02\x02\u0346\u034D\x076\x02" +
		"\x02\u0347\u0348\x077\x02\x02\u0348\u0349\x05D#\x02\u0349\u034A\x078\x02" +
		"\x02\u034A\u034D\x03\x02\x02\x02\u034B\u034D\x05D#\x02\u034C\u0346\x03" +
		"\x02\x02\x02\u034C\u0347\x03\x02\x02\x02\u034C\u034B\x03\x02\x02\x02\u034D" +
		"?\x03\x02\x02\x02\u034E\u0351\x07+\x02\x02\u034F\u0350\x07\f\x02\x02\u0350" +
		"\u0352\x07+\x02\x02\u0351\u034F\x03\x02\x02\x02\u0351\u0352\x03\x02\x02" +
		"\x02\u0352A\x03\x02\x02\x02\u0353\u0356\x05H%\x02\u0354\u0355\x07\f\x02" +
		"\x02\u0355\u0357\x07+\x02\x02\u0356\u0354\x03\x02\x02\x02\u0356\u0357" +
		"\x03\x02\x02\x02\u0357C\x03\x02\x02\x02\u0358\u035D\x05@!\x02\u0359\u035A" +
		"\x079\x02\x02\u035A\u035C\x05@!\x02\u035B\u0359\x03\x02\x02\x02\u035C" +
		"\u035F\x03\x02\x02\x02\u035D\u035B\x03\x02\x02\x02\u035D\u035E\x03\x02" +
		"\x02\x02\u035E\u0361\x03\x02\x02\x02\u035F\u035D\x03\x02\x02\x02\u0360" +
		"\u0362\x079\x02\x02\u0361\u0360\x03\x02\x02\x02\u0361\u0362\x03\x02\x02" +
		"\x02\u0362E\x03\x02\x02\x02\u0363\u0368\x05B\"\x02\u0364\u0365\x079\x02" +
		"\x02\u0365\u0367\x05B\"\x02\u0366\u0364\x03\x02\x02\x02\u0367\u036A\x03" +
		"\x02\x02\x02\u0368\u0366\x03\x02\x02\x02\u0368\u0369\x03\x02\x02\x02\u0369" +
		"G\x03\x02\x02\x02\u036A\u0368\x03\x02\x02\x02\u036B\u0370\x07+\x02\x02" +
		"\u036C\u036D\x074\x02\x02\u036D\u036F\x07+\x02\x02\u036E\u036C\x03\x02" +
		"\x02\x02\u036F\u0372\x03\x02\x02\x02\u0370\u036E\x03\x02\x02\x02\u0370" +
		"\u0371\x03\x02\x02\x02\u0371I\x03\x02\x02\x02\u0372\u0370\x03\x02\x02" +
		"\x02\u0373\u0374\x07\r\x02\x02\u0374\u0379\x07+\x02\x02\u0375\u0376\x07" +
		"9\x02\x02\u0376\u0378\x07+\x02\x02\u0377\u0375\x03\x02\x02\x02\u0378\u037B" +
		"\x03\x02\x02\x02\u0379\u0377\x03\x02\x02\x02\u0379\u037A\x03\x02\x02\x02" +
		"\u037AK\x03\x02\x02\x02\u037B\u0379\x03\x02\x02\x02\u037C\u037D\x07\x0E" +
		"\x02\x02\u037D\u0382\x07+\x02\x02\u037E\u037F\x079\x02\x02\u037F\u0381" +
		"\x07+\x02\x02\u0380\u037E\x03\x02\x02\x02\u0381\u0384\x03\x02\x02\x02" +
		"\u0382\u0380\x03\x02\x02\x02\u0382\u0383\x03\x02\x02\x02\u0383M\x03\x02" +
		"\x02\x02\u0384\u0382\x03\x02\x02\x02\u0385\u0386\x07\x0F\x02\x02\u0386" +
		"\u0389\x05f4\x02\u0387\u0388\x079\x02\x02\u0388\u038A\x05f4\x02\u0389" +
		"\u0387\x03\x02\x02\x02\u0389\u038A\x03\x02\x02\x02\u038AO\x03\x02\x02" +
		"\x02\u038B\u0395\x05T+\x02\u038C\u0395\x05V,\x02\u038D\u0395\x05X-\x02" +
		"\u038E\u0395\x05Z.\x02\u038F\u0395\x05\\/\x02\u0390\u0395\x05\x10\t\x02" +
		"\u0391\u0395\x05\x9EP\x02\u0392\u0395\x05\f\x07\x02\u0393\u0395\x05R*" +
		"\x02\u0394\u038B\x03\x02\x02\x02\u0394\u038C\x03\x02\x02\x02\u0394\u038D" +
		"\x03\x02\x02\x02\u0394\u038E\x03\x02\x02\x02\u0394\u038F\x03\x02\x02\x02" +
		"\u0394\u0390\x03\x02\x02\x02\u0394\u0391\x03\x02\x02\x02\u0394\u0392\x03" +
		"\x02\x02\x02\u0394\u0393\x03\x02\x02\x02\u0395Q\x03\x02\x02\x02\u0396" +
		"\u039A\x07(\x02\x02\u0397\u039B\x05\x10\t\x02\u0398\u039B\x05\\/\x02\u0399" +
		"\u039B\x05X-\x02\u039A\u0397\x03\x02\x02\x02\u039A\u0398\x03\x02\x02\x02" +
		"\u039A\u0399\x03\x02\x02\x02\u039BS\x03\x02\x02\x02\u039C\u039D\x07\x10" +
		"\x02\x02\u039D\u039E\x05f4\x02\u039E\u039F\x07:\x02\x02\u039F\u03A7\x05" +
		"b2\x02\u03A0\u03A1\x07\x11\x02\x02\u03A1\u03A2\x05f4\x02\u03A2\u03A3\x07" +
		":\x02\x02\u03A3\u03A4\x05b2\x02\u03A4\u03A6\x03\x02\x02\x02\u03A5\u03A0" +
		"\x03\x02\x02\x02\u03A6\u03A9\x03\x02\x02\x02\u03A7\u03A5\x03\x02\x02\x02" +
		"\u03A7\u03A8\x03\x02\x02\x02\u03A8\u03AD\x03\x02\x02\x02\u03A9\u03A7\x03" +
		"\x02\x02\x02\u03AA\u03AB\x07\x12\x02\x02\u03AB\u03AC\x07:\x02\x02\u03AC" +
		"\u03AE\x05b2\x02\u03AD\u03AA\x03\x02\x02\x02\u03AD\u03AE\x03\x02\x02\x02" +
		"\u03AEU\x03\x02\x02\x02\u03AF\u03B0\x07\x13\x02\x02\u03B0\u03B1\x05f4" +
		"\x02\u03B1\u03B2\x07:\x02\x02\u03B2\u03B6\x05b2\x02\u03B3\u03B4\x07\x12" +
		"\x02\x02\u03B4\u03B5\x07:\x02\x02\u03B5\u03B7\x05b2\x02\u03B6\u03B3\x03" +
		"\x02\x02\x02\u03B6\u03B7\x03\x02\x02\x02\u03B7W\x03\x02\x02\x02\u03B8" +
		"\u03B9\x07\x14\x02\x02\u03B9\u03BA\x05\x98M\x02\u03BA\u03BB\x07\x15\x02" +
		"\x02\u03BB\u03BC\x05\x9AN\x02\u03BC\u03BD\x07:\x02\x02\u03BD\u03C1\x05" +
		"b2\x02\u03BE\u03BF\x07\x12\x02\x02\u03BF\u03C0\x07:\x02\x02\u03C0\u03C2" +
		"\x05b2\x02\u03C1\u03BE\x03\x02\x02\x02\u03C1\u03C2\x03\x02\x02\x02\u03C2" +
		"Y\x03\x02\x02\x02\u03C3\u03C4\x07\x16\x02\x02\u03C4\u03C5\x07:\x02\x02" +
		"\u03C5\u03DB\x05b2\x02\u03C6\u03C7\x05`1\x02\u03C7\u03C8\x07:\x02\x02" +
		"\u03C8\u03C9\x05b2\x02\u03C9\u03CB\x03\x02\x02\x02\u03CA\u03C6\x03\x02" +
		"\x02\x02\u03CB\u03CC\x03\x02\x02\x02\u03CC\u03CA\x03\x02\x02\x02\u03CC" +
		"\u03CD\x03\x02\x02\x02\u03CD\u03D1\x03\x02\x02\x02\u03CE\u03CF\x07\x12" +
		"\x02\x02\u03CF\u03D0\x07:\x02\x02\u03D0\u03D2\x05b2\x02\u03D1\u03CE";
	private static readonly _serializedATNSegment2: string =
		"\x03\x02\x02\x02\u03D1\u03D2\x03\x02\x02\x02\u03D2\u03D6\x03\x02\x02\x02" +
		"\u03D3\u03D4\x07\x17\x02\x02\u03D4\u03D5\x07:\x02\x02\u03D5\u03D7\x05" +
		"b2\x02\u03D6\u03D3\x03\x02\x02\x02\u03D6\u03D7\x03\x02\x02\x02\u03D7\u03DC" +
		"\x03\x02\x02\x02\u03D8\u03D9\x07\x17\x02\x02\u03D9\u03DA\x07:\x02\x02" +
		"\u03DA\u03DC\x05b2\x02\u03DB\u03CA\x03\x02\x02\x02\u03DB\u03D8\x03\x02" +
		"\x02\x02\u03DC[\x03\x02\x02\x02\u03DD\u03DE\x07\x18\x02\x02\u03DE\u03E3" +
		"\x05^0\x02\u03DF\u03E0\x079\x02\x02\u03E0\u03E2\x05^0\x02\u03E1\u03DF" +
		"\x03\x02\x02\x02\u03E2\u03E5\x03\x02\x02\x02\u03E3\u03E1\x03\x02\x02\x02" +
		"\u03E3\u03E4\x03\x02\x02\x02\u03E4\u03E6\x03\x02\x02\x02\u03E5\u03E3\x03" +
		"\x02\x02\x02\u03E6\u03E7\x07:\x02\x02\u03E7\u03E8\x05b2\x02\u03E8]\x03" +
		"\x02\x02\x02\u03E9\u03EC\x05f4\x02\u03EA\u03EB\x07\f\x02\x02\u03EB\u03ED" +
		"\x05z>\x02\u03EC\u03EA\x03\x02\x02\x02\u03EC\u03ED\x03\x02\x02\x02\u03ED" +
		"_\x03\x02\x02\x02\u03EE\u03F4\x07\x19\x02\x02\u03EF\u03F2\x05f4\x02\u03F0" +
		"\u03F1\x07\f\x02\x02\u03F1\u03F3\x07+\x02\x02\u03F2\u03F0\x03\x02\x02" +
		"\x02\u03F2\u03F3\x03\x02\x02\x02\u03F3\u03F5\x03\x02\x02\x02\u03F4\u03EF" +
		"\x03\x02\x02\x02\u03F4\u03F5\x03\x02\x02\x02\u03F5a\x03\x02\x02\x02\u03F6" +
		"\u0401\x05\x1E\x10\x02\u03F7\u03F8\x07*\x02\x02\u03F8\u03FA\x07e\x02\x02" +
		"\u03F9\u03FB\x05\x1C\x0F\x02\u03FA\u03F9\x03\x02\x02\x02\u03FB\u03FC\x03" +
		"\x02\x02\x02\u03FC\u03FA\x03\x02\x02\x02\u03FC\u03FD\x03\x02\x02\x02\u03FD" +
		"\u03FE\x03\x02\x02\x02\u03FE\u03FF\x07f\x02\x02\u03FF\u0401\x03\x02\x02" +
		"\x02\u0400\u03F6\x03\x02\x02\x02\u0400\u03F7\x03\x02\x02\x02\u0401c\x03" +
		"\x02\x02\x02\u0402\u0405\x05f4\x02\u0403\u0404\x07\x03\x02\x02\u0404\u0406" +
		"\x05f4\x02\u0405\u0403\x03\x02\x02\x02\u0405\u0406\x03\x02\x02\x02\u0406" +
		"e\x03\x02\x02\x02\u0407\u040D\x05n8\x02\u0408\u0409\x07\x10\x02\x02\u0409" +
		"\u040A\x05n8\x02\u040A\u040B\x07\x12\x02\x02\u040B\u040C\x05f4\x02\u040C" +
		"\u040E\x03\x02\x02\x02\u040D\u0408\x03\x02\x02\x02\u040D\u040E\x03\x02" +
		"\x02\x02\u040E\u0411\x03\x02\x02\x02\u040F\u0411\x05j6\x02\u0410\u0407" +
		"\x03\x02\x02\x02\u0410\u040F\x03\x02\x02\x02\u0411g\x03\x02\x02\x02\u0412" +
		"\u0415\x05n8\x02\u0413\u0415\x05l7\x02\u0414\u0412\x03\x02\x02\x02\u0414" +
		"\u0413\x03\x02\x02\x02\u0415i\x03\x02\x02\x02\u0416\u0418\x07\x1A\x02" +
		"\x02\u0417\u0419\x05\x18\r\x02\u0418\u0417\x03\x02\x02\x02\u0418\u0419" +
		"\x03\x02\x02\x02\u0419\u041A\x03\x02\x02\x02\u041A\u041B\x07:\x02\x02" +
		"\u041B\u041C\x05f4\x02\u041Ck\x03\x02\x02\x02\u041D\u041F\x07\x1A\x02" +
		"\x02\u041E\u0420\x05\x18\r\x02\u041F\u041E\x03\x02\x02\x02\u041F\u0420" +
		"\x03\x02\x02\x02\u0420\u0421\x03\x02\x02\x02\u0421\u0422\x07:\x02\x02" +
		"\u0422\u0423\x05h5\x02\u0423m\x03\x02\x02\x02\u0424\u0429\x05p9\x02\u0425" +
		"\u0426\x07\x1B\x02\x02\u0426\u0428\x05p9\x02\u0427\u0425\x03\x02\x02\x02" +
		"\u0428\u042B\x03\x02\x02\x02\u0429\u0427\x03\x02\x02\x02\u0429\u042A\x03" +
		"\x02\x02\x02\u042Ao\x03\x02\x02\x02\u042B\u0429\x03\x02\x02\x02\u042C" +
		"\u0431\x05r:\x02\u042D\u042E\x07\x1C\x02\x02\u042E\u0430\x05r:\x02\u042F" +
		"\u042D\x03\x02\x02\x02\u0430\u0433\x03\x02\x02\x02\u0431\u042F\x03\x02" +
		"\x02\x02\u0431\u0432\x03\x02\x02\x02\u0432q\x03\x02\x02\x02\u0433\u0431" +
		"\x03\x02\x02\x02\u0434\u0435\x07\x1D\x02\x02\u0435\u0438\x05r:\x02\u0436" +
		"\u0438\x05t;\x02\u0437\u0434\x03\x02\x02\x02\u0437\u0436\x03\x02\x02\x02" +
		"\u0438s\x03\x02\x02\x02\u0439\u043F\x05z>\x02\u043A\u043B\x05v<\x02\u043B" +
		"\u043C\x05z>\x02\u043C\u043E\x03\x02\x02\x02\u043D\u043A\x03\x02\x02\x02" +
		"\u043E\u0441\x03\x02\x02\x02\u043F\u043D\x03\x02\x02\x02\u043F\u0440\x03" +
		"\x02\x02\x02\u0440u\x03\x02\x02\x02\u0441\u043F\x03\x02\x02\x02\u0442" +
		"\u0450\x07M\x02\x02\u0443\u0450\x07N\x02\x02\u0444\u0450\x07O\x02\x02" +
		"\u0445\u0450\x07P\x02\x02\u0446\u0450\x07Q\x02\x02\u0447\u0450\x07R\x02" +
		"\x02\u0448\u0450\x07S\x02\x02\u0449\u0450\x07\x15\x02\x02\u044A\u044B" +
		"\x07\x1D\x02\x02\u044B\u0450\x07\x15\x02\x02\u044C\u0450\x07\x1E\x02\x02" +
		"\u044D\u044E\x07\x1E\x02\x02\u044E\u0450\x07\x1D\x02\x02\u044F\u0442\x03" +
		"\x02\x02\x02\u044F\u0443\x03\x02\x02\x02\u044F\u0444\x03\x02\x02\x02\u044F" +
		"\u0445\x03\x02\x02\x02\u044F\u0446\x03\x02\x02\x02\u044F\u0447\x03\x02" +
		"\x02\x02\u044F\u0448\x03\x02\x02\x02\u044F\u0449\x03\x02\x02\x02\u044F" +
		"\u044A\x03\x02\x02\x02\u044F\u044C\x03\x02\x02\x02\u044F\u044D\x03\x02" +
		"\x02\x02\u0450w\x03\x02\x02\x02\u0451\u0452\x076\x02\x02\u0452\u0453\x05" +
		"z>\x02\u0453y\x03\x02\x02\x02\u0454\u0459\x05|?\x02\u0455\u0456\x07@\x02" +
		"\x02\u0456\u0458\x05|?\x02\u0457\u0455\x03\x02\x02\x02\u0458\u045B\x03" +
		"\x02\x02\x02\u0459\u0457\x03\x02\x02\x02\u0459\u045A\x03\x02\x02\x02\u045A" +
		"{\x03\x02\x02\x02\u045B\u0459\x03\x02\x02\x02\u045C\u0461\x05~@\x02\u045D" +
		"\u045E\x07A\x02\x02\u045E\u0460\x05~@\x02\u045F\u045D\x03\x02\x02\x02" +
		"\u0460\u0463\x03\x02\x02\x02\u0461\u045F\x03\x02\x02\x02\u0461\u0462\x03" +
		"\x02\x02\x02\u0462}\x03\x02\x02\x02\u0463\u0461\x03\x02\x02\x02\u0464" +
		"\u0469\x05\x80A\x02\u0465\u0466\x07B\x02\x02\u0466\u0468\x05\x80A\x02" +
		"\u0467\u0465\x03\x02\x02\x02\u0468\u046B\x03\x02\x02\x02\u0469\u0467\x03" +
		"\x02\x02\x02\u0469\u046A\x03\x02\x02\x02\u046A\x7F\x03\x02\x02\x02\u046B" +
		"\u0469\x03\x02\x02\x02\u046C\u0471\x05\x82B\x02\u046D\u046E\t\x04\x02" +
		"\x02\u046E\u0470\x05\x82B\x02\u046F\u046D\x03\x02\x02\x02\u0470\u0473" +
		"\x03\x02\x02\x02\u0471\u046F\x03\x02\x02\x02\u0471\u0472\x03\x02\x02\x02" +
		"\u0472\x81\x03\x02\x02\x02\u0473\u0471\x03\x02\x02\x02\u0474\u0479\x05" +
		"\x84C\x02\u0475\u0476\t\x05\x02\x02\u0476\u0478\x05\x84C\x02\u0477\u0475" +
		"\x03\x02\x02\x02\u0478\u047B\x03\x02\x02\x02\u0479\u0477\x03\x02\x02\x02" +
		"\u0479\u047A\x03\x02\x02\x02\u047A\x83\x03\x02\x02\x02\u047B\u0479\x03" +
		"\x02\x02\x02\u047C\u0481\x05\x86D\x02\u047D\u047E\t\x06\x02\x02\u047E" +
		"\u0480\x05\x86D\x02\u047F\u047D\x03\x02\x02\x02\u0480\u0483\x03\x02\x02" +
		"\x02\u0481\u047F\x03\x02\x02\x02\u0481\u0482\x03\x02\x02\x02\u0482\x85" +
		"\x03\x02\x02\x02\u0483\u0481\x03\x02\x02\x02\u0484\u0485\t\x07\x02\x02" +
		"\u0485\u0488\x05\x86D\x02\u0486\u0488\x05\x88E\x02\u0487\u0484\x03\x02" +
		"\x02\x02\u0487\u0486\x03\x02\x02\x02\u0488\x87\x03\x02\x02\x02\u0489\u048C" +
		"\x05\x8AF\x02\u048A\u048B\x07<\x02\x02\u048B\u048D\x05\x86D\x02\u048C" +
		"\u048A\x03\x02\x02\x02\u048C\u048D\x03\x02\x02\x02\u048D\x89\x03\x02\x02" +
		"\x02\u048E\u0490\x07)\x02\x02\u048F\u048E\x03\x02\x02\x02\u048F\u0490" +
		"\x03\x02\x02\x02\u0490\u0491\x03\x02\x02\x02\u0491\u0495\x05\x8CG\x02" +
		"\u0492\u0494\x05\x90I\x02\u0493\u0492\x03\x02\x02\x02\u0494\u0497\x03" +
		"\x02\x02\x02\u0495\u0493\x03\x02\x02\x02\u0495\u0496\x03\x02\x02\x02\u0496" +
		"\x8B\x03\x02\x02\x02\u0497\u0495\x03\x02\x02\x02\u0498\u049B\x077\x02" +
		"\x02\u0499\u049C\x05\xACW\x02\u049A\u049C\x05\x8EH\x02\u049B\u0499\x03" +
		"\x02\x02\x02\u049B\u049A\x03\x02\x02\x02\u049B\u049C\x03\x02\x02\x02\u049C" +
		"\u049D\x03\x02\x02\x02\u049D\u04B4\x078\x02\x02\u049E\u04A0\x07>\x02\x02" +
		"\u049F\u04A1\x05\x8EH\x02\u04A0\u049F\x03\x02\x02\x02\u04A0\u04A1\x03" +
		"\x02\x02\x02\u04A1\u04A2\x03\x02\x02\x02\u04A2\u04B4\x07?\x02\x02\u04A3" +
		"\u04A5\x07K\x02\x02\u04A4\u04A6\x05\x9CO\x02\u04A5\u04A4\x03\x02\x02\x02" +
		"\u04A5\u04A6\x03\x02\x02\x02\u04A6\u04A7\x03\x02\x02\x02\u04A7\u04B4\x07" +
		"L\x02\x02\u04A8\u04B4\x07+\x02\x02\u04A9\u04B4\x07\x05\x02\x02\u04AA\u04AC" +
		"\x07\x04\x02\x02\u04AB\u04AA\x03\x02\x02\x02\u04AC\u04AD\x03\x02\x02\x02" +
		"\u04AD\u04AB\x03\x02\x02\x02\u04AD\u04AE\x03\x02\x02\x02\u04AE\u04B4\x03" +
		"\x02\x02\x02\u04AF\u04B4\x075\x02\x02\u04B0\u04B4\x07\x1F\x02\x02\u04B1" +
		"\u04B4\x07 \x02\x02\u04B2\u04B4\x07!\x02\x02\u04B3\u0498\x03\x02\x02\x02" +
		"\u04B3\u049E\x03\x02\x02\x02\u04B3\u04A3\x03\x02\x02\x02\u04B3\u04A8\x03" +
		"\x02\x02\x02\u04B3\u04A9\x03\x02\x02\x02\u04B3\u04AB\x03\x02\x02\x02\u04B3" +
		"\u04AF\x03\x02\x02\x02\u04B3\u04B0\x03\x02\x02\x02\u04B3\u04B1\x03\x02" +
		"\x02\x02\u04B3\u04B2\x03\x02\x02\x02\u04B4\x8D\x03\x02\x02\x02\u04B5\u04B8" +
		"\x05f4\x02\u04B6\u04B8\x05x=\x02\u04B7\u04B5\x03\x02\x02\x02\u04B7\u04B6" +
		"\x03\x02\x02\x02\u04B8\u04C7\x03\x02\x02\x02\u04B9\u04C8\x05\xA6T\x02" +
		"\u04BA\u04BD\x079\x02\x02\u04BB\u04BE\x05f4\x02\u04BC\u04BE\x05x=\x02" +
		"\u04BD\u04BB\x03\x02\x02\x02\u04BD\u04BC\x03\x02\x02\x02\u04BE\u04C0\x03" +
		"\x02\x02\x02\u04BF\u04BA\x03\x02\x02\x02\u04C0\u04C3\x03\x02\x02\x02\u04C1" +
		"\u04BF\x03\x02\x02\x02\u04C1\u04C2\x03\x02\x02\x02\u04C2\u04C5\x03\x02" +
		"\x02\x02\u04C3\u04C1\x03\x02\x02\x02\u04C4\u04C6\x079\x02\x02\u04C5\u04C4" +
		"\x03\x02\x02\x02\u04C5\u04C6\x03\x02\x02\x02\u04C6\u04C8\x03\x02\x02\x02" +
		"\u04C7\u04B9\x03\x02\x02\x02\u04C7\u04C1\x03\x02\x02\x02\u04C8\x8F\x03" +
		"\x02\x02\x02\u04C9\u04CB\x077\x02\x02\u04CA\u04CC\x05\xA0Q\x02\u04CB\u04CA" +
		"\x03\x02\x02\x02\u04CB\u04CC\x03\x02\x02\x02\u04CC\u04CD\x03\x02\x02\x02" +
		"\u04CD\u04D5\x078\x02\x02\u04CE\u04CF\x07>\x02\x02\u04CF\u04D0\x05\x92" +
		"J\x02\u04D0\u04D1\x07?\x02\x02\u04D1\u04D5\x03\x02\x02\x02\u04D2\u04D3" +
		"\x074\x02\x02\u04D3\u04D5\x07+\x02\x02\u04D4\u04C9\x03\x02\x02\x02\u04D4" +
		"\u04CE\x03\x02\x02\x02\u04D4\u04D2\x03\x02\x02\x02\u04D5\x91\x03\x02\x02" +
		"\x02\u04D6\u04DB\x05\x94K\x02\u04D7\u04D8\x079\x02\x02\u04D8\u04DA\x05" +
		"\x94K\x02\u04D9\u04D7\x03\x02\x02\x02\u04DA\u04DD\x03\x02\x02\x02\u04DB" +
		"\u04D9\x03\x02\x02\x02\u04DB\u04DC\x03\x02\x02\x02\u04DC\u04DF\x03\x02" +
		"\x02\x02\u04DD\u04DB\x03\x02\x02\x02\u04DE\u04E0\x079\x02\x02\u04DF\u04DE" +
		"\x03\x02\x02\x02\u04DF\u04E0\x03\x02\x02\x02\u04E0\x93\x03\x02\x02\x02" +
		"\u04E1\u04ED\x05f4\x02\u04E2\u04E4\x05f4\x02\u04E3\u04E2\x03\x02\x02\x02" +
		"\u04E3\u04E4\x03\x02\x02\x02\u04E4\u04E5\x03\x02\x02\x02\u04E5\u04E7\x07" +
		":\x02\x02\u04E6\u04E8\x05f4\x02\u04E7\u04E6\x03\x02\x02\x02\u04E7\u04E8" +
		"\x03\x02\x02\x02\u04E8\u04EA\x03\x02\x02\x02\u04E9\u04EB\x05\x96L\x02" +
		"\u04EA\u04E9\x03\x02\x02\x02\u04EA\u04EB\x03\x02\x02\x02\u04EB\u04ED\x03" +
		"\x02\x02\x02\u04EC\u04E1\x03\x02\x02\x02\u04EC\u04E3\x03\x02\x02\x02\u04ED" +
		"\x95\x03\x02\x02\x02\u04EE\u04F0\x07:\x02\x02\u04EF\u04F1\x05f4\x02\u04F0" +
		"\u04EF\x03\x02\x02\x02\u04F0\u04F1\x03\x02\x02\x02\u04F1\x97\x03\x02\x02" +
		"\x02\u04F2\u04F5\x05z>\x02\u04F3\u04F5\x05x=\x02\u04F4\u04F2\x03\x02\x02" +
		"\x02\u04F4\u04F3\x03\x02\x02\x02\u04F5\u04FD\x03\x02\x02\x02\u04F6\u04F9" +
		"\x079\x02\x02\u04F7\u04FA\x05z>\x02\u04F8\u04FA\x05x=\x02\u04F9\u04F7" +
		"\x03\x02\x02\x02\u04F9\u04F8\x03\x02\x02\x02\u04FA\u04FC\x03\x02\x02\x02" +
		"\u04FB\u04F6\x03\x02\x02\x02\u04FC\u04FF\x03\x02\x02\x02\u04FD\u04FB\x03" +
		"\x02\x02\x02\u04FD\u04FE\x03\x02\x02\x02\u04FE\u0501\x03\x02\x02\x02\u04FF" +
		"\u04FD\x03\x02\x02\x02\u0500\u0502\x079\x02\x02\u0501\u0500\x03\x02\x02" +
		"\x02\u0501\u0502\x03\x02\x02\x02\u0502\x99\x03\x02\x02\x02\u0503\u0508" +
		"\x05f4\x02\u0504\u0505\x079\x02\x02\u0505\u0507\x05f4\x02\u0506\u0504" +
		"\x03\x02\x02\x02\u0507\u050A\x03\x02\x02\x02\u0508\u0506\x03\x02\x02\x02" +
		"\u0508\u0509\x03\x02\x02\x02\u0509\u050C\x03\x02\x02\x02\u050A\u0508\x03" +
		"\x02\x02\x02\u050B\u050D\x079\x02\x02\u050C\u050B\x03\x02\x02\x02\u050C" +
		"\u050D\x03\x02\x02\x02\u050D\x9B\x03\x02\x02\x02\u050E\u050F\x05f4\x02" +
		"\u050F\u0510\x07:\x02\x02\u0510\u0511\x05f4\x02\u0511\u0515\x03\x02\x02" +
		"\x02\u0512\u0513\x07<\x02\x02\u0513\u0515\x05z>\x02\u0514\u050E\x03\x02" +
		"\x02\x02\u0514\u0512\x03\x02\x02\x02\u0515\u0528\x03\x02\x02\x02\u0516" +
		"\u0529\x05\xA6T\x02\u0517\u051E\x079\x02\x02\u0518\u0519\x05f4\x02\u0519" +
		"\u051A\x07:\x02\x02\u051A\u051B\x05f4\x02\u051B\u051F\x03\x02\x02\x02" +
		"\u051C\u051D\x07<\x02\x02\u051D\u051F\x05z>\x02\u051E\u0518\x03\x02\x02" +
		"\x02\u051E\u051C\x03\x02\x02\x02\u051F\u0521\x03\x02\x02\x02\u0520\u0517" +
		"\x03\x02\x02\x02\u0521\u0524\x03\x02\x02\x02\u0522\u0520\x03\x02\x02\x02" +
		"\u0522\u0523\x03\x02\x02\x02\u0523\u0526\x03\x02\x02\x02\u0524\u0522\x03" +
		"\x02\x02\x02\u0525\u0527\x079\x02\x02\u0526\u0525\x03\x02\x02\x02\u0526" +
		"\u0527\x03\x02\x02\x02\u0527\u0529\x03\x02\x02\x02\u0528\u0516\x03\x02" +
		"\x02\x02\u0528\u0522\x03\x02\x02\x02\u0529\u053F\x03\x02\x02\x02\u052A" +
		"\u052D\x05f4\x02\u052B\u052D\x05x=\x02\u052C\u052A\x03\x02\x02\x02\u052C" +
		"\u052B\x03\x02\x02\x02\u052D\u053C\x03\x02\x02\x02\u052E\u053D\x05\xA6" +
		"T\x02\u052F\u0532\x079\x02\x02\u0530\u0533\x05f4\x02\u0531\u0533\x05x" +
		"=\x02\u0532\u0530\x03\x02\x02\x02\u0532\u0531\x03\x02\x02\x02\u0533\u0535" +
		"\x03\x02\x02\x02\u0534\u052F\x03\x02\x02\x02\u0535\u0538\x03\x02\x02\x02" +
		"\u0536\u0534\x03\x02\x02\x02\u0536\u0537\x03\x02\x02\x02\u0537\u053A\x03" +
		"\x02\x02\x02\u0538\u0536\x03\x02\x02\x02\u0539\u053B\x079\x02\x02\u053A" +
		"\u0539\x03\x02\x02\x02\u053A\u053B\x03\x02\x02\x02\u053B\u053D\x03\x02" +
		"\x02\x02\u053C\u052E\x03\x02\x02\x02\u053C\u0536\x03\x02\x02\x02\u053D" +
		"\u053F\x03\x02\x02\x02\u053E\u0514\x03\x02\x02\x02\u053E\u052C\x03\x02" +
		"\x02\x02\u053F\x9D\x03\x02\x02\x02\u0540\u0541\x07\"\x02\x02\u0541\u0547" +
		"\x07+\x02\x02\u0542\u0544\x077\x02\x02\u0543\u0545\x05\xA0Q\x02\u0544" +
		"\u0543\x03\x02\x02\x02\u0544\u0545\x03\x02\x02\x02\u0545\u0546\x03\x02" +
		"\x02\x02\u0546\u0548\x078\x02\x02\u0547\u0542\x03\x02\x02\x02\u0547\u0548" +
		"\x03\x02\x02\x02\u0548\u0549\x03\x02\x02\x02\u0549\u054A\x07:\x02\x02" +
		"\u054A\u054B\x05b2\x02\u054B\x9F\x03\x02\x02\x02\u054C\u0551\x05\xA2R" +
		"\x02\u054D\u054E\x079\x02\x02\u054E\u0550\x05\xA2R\x02\u054F\u054D\x03" +
		"\x02\x02\x02\u0550\u0553\x03\x02\x02\x02\u0551\u054F\x03\x02\x02\x02\u0551" +
		"\u0552\x03\x02\x02\x02\u0552\u0555\x03\x02\x02\x02\u0553\u0551\x03\x02" +
		"\x02\x02\u0554\u0556\x079\x02\x02\u0555\u0554\x03\x02\x02\x02\u0555\u0556" +
		"\x03\x02\x02\x02\u0556\xA1\x03\x02\x02\x02\u0557\u0559\x05f4\x02\u0558" +
		"\u055A\x05\xA6T\x02\u0559\u0558\x03\x02\x02\x02\u0559\u055A\x03\x02\x02" +
		"\x02\u055A\u0564\x03\x02\x02\x02\u055B\u055C\x05f4\x02\u055C\u055D\x07" +
		"=\x02\x02\u055D\u055E\x05f4\x02\u055E\u0564\x03\x02\x02\x02\u055F\u0560" +
		"\x07<\x02\x02\u0560\u0564\x05f4\x02\u0561\u0562\x076\x02\x02\u0562\u0564" +
		"\x05f4\x02\u0563\u0557\x03\x02\x02\x02\u0563\u055B\x03\x02\x02\x02\u0563" +
		"\u055F\x03\x02\x02\x02\u0563\u0561\x03\x02\x02\x02\u0564\xA3\x03\x02\x02" +
		"\x02\u0565\u0568\x05\xA6T\x02\u0566\u0568\x05\xA8U\x02\u0567\u0565\x03" +
		"\x02\x02\x02\u0567\u0566\x03\x02\x02\x02\u0568\xA5\x03\x02\x02\x02\u0569" +
		"\u056B\x07(\x02\x02\u056A\u0569\x03\x02\x02\x02\u056A\u056B\x03\x02\x02" +
		"\x02\u056B\u056C\x03\x02\x02\x02\u056C\u056D\x07\x14\x02\x02\u056D\u056E" +
		"\x05\x98M\x02\u056E\u056F\x07\x15\x02\x02\u056F\u0571\x05n8\x02\u0570" +
		"\u0572\x05\xA4S\x02\u0571\u0570\x03\x02\x02\x02\u0571\u0572\x03\x02\x02" +
		"\x02\u0572\xA7\x03\x02\x02\x02\u0573\u0574\x07\x10\x02\x02\u0574\u0576" +
		"\x05h5\x02\u0575\u0577\x05\xA4S\x02\u0576\u0575\x03\x02\x02\x02\u0576" +
		"\u0577\x03\x02\x02\x02\u0577\xA9\x03\x02\x02\x02\u0578\u0579\x07+\x02" +
		"\x02\u0579\xAB\x03\x02\x02\x02\u057A\u057C\x07#\x02\x02\u057B\u057D\x05" +
		"\xAEX\x02\u057C\u057B\x03\x02\x02\x02\u057C\u057D\x03\x02\x02\x02\u057D" +
		"\xAD\x03\x02\x02\x02\u057E\u057F\x07\n\x02\x02\u057F\u0582\x05f4\x02\u0580" +
		"\u0582\x05\x9AN\x02\u0581\u057E\x03\x02\x02\x02\u0581\u0580\x03\x02\x02" +
		"\x02\u0582\xAF\x03\x02\x02\x02\u0583\u0592\x05\x1E\x10\x02\u0584\u0587" +
		"\x07*\x02\x02\u0585\u0586\x07g\x02\x02\u0586\u0588\x07*\x02\x02\u0587" +
		"\u0585\x03\x02\x02\x02\u0587\u0588\x03\x02\x02\x02\u0588\u0589\x03\x02" +
		"\x02\x02\u0589\u058B\x07e\x02\x02\u058A\u058C\x05\x1C\x0F\x02\u058B\u058A" +
		"\x03\x02\x02\x02\u058C\u058D\x03\x02\x02\x02\u058D\u058B\x03\x02\x02\x02" +
		"\u058D\u058E\x03\x02\x02\x02\u058E\u058F\x03\x02\x02\x02\u058F\u0590\x07" +
		"f\x02\x02\u0590\u0592\x03\x02\x02\x02\u0591\u0583\x03\x02\x02\x02\u0591" +
		"\u0584\x03\x02\x02\x02\u0592\xB1\x03\x02\x02\x02\u0593\u0597\x05\xB4[" +
		"\x02\u0594\u0596\x07*\x02\x02\u0595\u0594\x03\x02\x02\x02\u0596\u0599" +
		"\x03\x02\x02\x02\u0597\u0595\x03\x02\x02\x02\u0597\u0598\x03\x02\x02\x02" +
		"\u0598\u059A\x03\x02\x02\x02\u0599\u0597\x03\x02\x02\x02\u059A\u059B\x07" +
		"\x02\x02\x03\u059B\xB3\x03\x02\x02\x02\u059C\u059E\x077\x02\x02\u059D" +
		"\u059F\x05\xB6\\\x02\u059E\u059D\x03\x02\x02\x02\u059E\u059F\x03\x02\x02" +
		"\x02\u059F\u05A0\x03\x02\x02\x02\u05A0\u05A1\x078\x02\x02\u05A1\u05A2" +
		"\x07U\x02\x02\u05A2\u05A3\x05f4\x02\u05A3\xB5\x03\x02\x02\x02\u05A4\u05A9" +
		"\x05f4\x02\u05A5\u05A6\x079\x02\x02\u05A6\u05A8\x05f4\x02\u05A7\u05A5" +
		"\x03\x02\x02\x02\u05A8\u05AB\x03\x02\x02\x02\u05A9\u05A7\x03\x02\x02\x02" +
		"\u05A9\u05AA\x03\x02\x02\x02\u05AA\u05C1\x03\x02\x02\x02\u05AB\u05A9\x03" +
		"\x02\x02\x02\u05AC\u05BF\x079\x02\x02\u05AD\u05AF\x076\x02\x02\u05AE\u05B0" +
		"\x05f4\x02\u05AF\u05AE\x03\x02\x02\x02\u05AF\u05B0\x03\x02\x02\x02\u05B0" +
		"\u05B5\x03\x02\x02\x02\u05B1\u05B2\x079\x02\x02\u05B2\u05B4\x05f4\x02" +
		"\u05B3\u05B1\x03\x02\x02\x02\u05B4\u05B7\x03\x02\x02\x02\u05B5\u05B3\x03" +
		"\x02\x02\x02\u05B5\u05B6\x03\x02\x02\x02\u05B6\u05BB\x03\x02\x02\x02\u05B7" +
		"\u05B5\x03\x02\x02\x02\u05B8\u05B9\x079\x02\x02\u05B9\u05BA\x07<\x02\x02" +
		"\u05BA\u05BC\x05f4\x02\u05BB\u05B8\x03\x02\x02\x02\u05BB\u05BC\x03\x02" +
		"\x02\x02\u05BC\u05C0\x03\x02\x02\x02\u05BD\u05BE\x07<\x02\x02\u05BE\u05C0" +
		"\x05f4\x02\u05BF\u05AD\x03\x02\x02\x02\u05BF\u05BD\x03\x02\x02\x02\u05BF" +
		"\u05C0\x03\x02\x02\x02\u05C0\u05C2\x03\x02\x02\x02\u05C1\u05AC\x03\x02" +
		"\x02\x02\u05C1\u05C2\x03\x02\x02\x02\u05C2\u05D6\x03\x02\x02\x02\u05C3" +
		"\u05C5\x076\x02\x02\u05C4\u05C6\x05f4\x02\u05C5\u05C4\x03\x02\x02\x02" +
		"\u05C5\u05C6\x03\x02\x02\x02\u05C6\u05CB\x03\x02\x02\x02\u05C7\u05C8\x07" +
		"9\x02\x02\u05C8\u05CA\x05f4\x02\u05C9\u05C7\x03\x02\x02\x02\u05CA\u05CD" +
		"\x03\x02\x02\x02\u05CB\u05C9\x03\x02\x02\x02\u05CB\u05CC\x03\x02\x02\x02" +
		"\u05CC\u05D1\x03\x02\x02\x02\u05CD\u05CB\x03\x02\x02\x02\u05CE\u05CF\x07" +
		"9\x02\x02\u05CF\u05D0\x07<\x02\x02\u05D0\u05D2\x05f4\x02\u05D1\u05CE\x03" +
		"\x02\x02\x02\u05D1\u05D2\x03\x02\x02\x02\u05D2\u05D6\x03\x02\x02\x02\u05D3" +
		"\u05D4\x07<\x02\x02\u05D4\u05D6\x05f4\x02\u05D5\u05A4\x03\x02\x02\x02" +
		"\u05D5\u05C3\x03\x02\x02\x02\u05D5\u05D3\x03\x02\x02\x02\u05D6\xB7\x03" +
		"\x02\x02\x02\u0103\xBD\xC1\xC3\xCC\xD5\xD8\xDF\xE5\xEF\xF6\xFD\u0101\u0106" +
		"\u010A\u010F\u0114\u0119\u011D\u0122\u0126\u012C\u0130\u0137\u013B\u0141" +
		"\u0146\u0149\u014B\u014D\u014F\u0155\u0157\u0159\u015B\u015F\u0163\u0168" +
		"\u016C\u0172\u0177\u017A\u017C\u017E\u0180\u0186\u0188\u018A\u018F\u0193" +
		"\u0198\u019C\u01A2\u01AB\u01AF\u01B5\u01BA\u01BD\u01BF\u01C1\u01C3\u01C8" +
		"\u01CB\u01CD\u01CF\u01D1\u01D5\u01D9\u01DE\u01E2\u01E8\u01ED\u01F0\u01F2" +
		"\u01F4\u01F6\u01FB\u01FE\u0200\u0202\u0207\u020C\u0212\u0216\u021F\u0225" +
		"\u0229\u022F\u0235\u0239\u0240\u0242\u0244\u0249\u024B\u024D\u0251\u0257" +
		"\u025B\u0262\u0264\u0266\u026B\u026D\u026F\u0271\u0276\u027C\u0280\u0286" +
		"\u028C\u0290\u0297\u0299\u029B\u02A0\u02A2\u02A4\u02A8\u02AE\u02B2\u02B9" +
		"\u02BB\u02BD\u02C2\u02C4\u02C6\u02CC\u02D3\u02D7\u02E3\u02EA\u02EF\u02F3" +
		"\u02F6\u02FC\u0300\u0305\u0309\u030D\u031B\u0323\u032B\u032D\u0331\u033A" +
		"\u0341\u0343\u034C\u0351\u0356\u035D\u0361\u0368\u0370\u0379\u0382\u0389" +
		"\u0394\u039A\u03A7\u03AD\u03B6\u03C1\u03CC\u03D1\u03D6\u03DB\u03E3\u03EC" +
		"\u03F2\u03F4\u03FC\u0400\u0405\u040D\u0410\u0414\u0418\u041F\u0429\u0431" +
		"\u0437\u043F\u044F\u0459\u0461\u0469\u0471\u0479\u0481\u0487\u048C\u048F" +
		"\u0495\u049B\u04A0\u04A5\u04AD\u04B3\u04B7\u04BD\u04C1\u04C5\u04C7\u04CB" +
		"\u04D4\u04DB\u04DF\u04E3\u04E7\u04EA\u04EC\u04F0\u04F4\u04F9\u04FD\u0501" +
		"\u0508\u050C\u0514\u051E\u0522\u0526\u0528\u052C\u0532\u0536\u053A\u053C" +
		"\u053E\u0544\u0547\u0551\u0555\u0559\u0563\u0567\u056A\u0571\u0576\u057C" +
		"\u0581\u0587\u058D\u0591\u0597\u059E\u05A9\u05AF\u05B5\u05BB\u05BF\u05C1" +
		"\u05C5\u05CB\u05D1\u05D5";
	public static readonly _serializedATN: string = Utils.join(
		[
			Python3Parser._serializedATNSegment0,
			Python3Parser._serializedATNSegment1,
			Python3Parser._serializedATNSegment2,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!Python3Parser.__ATN) {
			Python3Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(Python3Parser._serializedATN));
		}

		return Python3Parser.__ATN;
	}

}

export class Single_inputContext extends ParserRuleContext {
	public NEWLINE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.NEWLINE, 0); }
	public simple_stmt(): Simple_stmtContext | undefined {
		return this.tryGetRuleContext(0, Simple_stmtContext);
	}
	public compound_stmt(): Compound_stmtContext | undefined {
		return this.tryGetRuleContext(0, Compound_stmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_single_input; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterSingle_input) {
			listener.enterSingle_input(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitSingle_input) {
			listener.exitSingle_input(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitSingle_input) {
			return visitor.visitSingle_input(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class File_inputContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(Python3Parser.EOF, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.NEWLINE);
		} else {
			return this.getToken(Python3Parser.NEWLINE, i);
		}
	}
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_file_input; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterFile_input) {
			listener.enterFile_input(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitFile_input) {
			listener.exitFile_input(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitFile_input) {
			return visitor.visitFile_input(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Eval_inputContext extends ParserRuleContext {
	public testlist(): TestlistContext {
		return this.getRuleContext(0, TestlistContext);
	}
	public EOF(): TerminalNode { return this.getToken(Python3Parser.EOF, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.NEWLINE);
		} else {
			return this.getToken(Python3Parser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_eval_input; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterEval_input) {
			listener.enterEval_input(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitEval_input) {
			listener.exitEval_input(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitEval_input) {
			return visitor.visitEval_input(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DecoratorContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(Python3Parser.AT, 0); }
	public dotted_name(): Dotted_nameContext {
		return this.getRuleContext(0, Dotted_nameContext);
	}
	public NEWLINE(): TerminalNode { return this.getToken(Python3Parser.NEWLINE, 0); }
	public OPEN_PAREN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.CLOSE_PAREN, 0); }
	public arglist(): ArglistContext | undefined {
		return this.tryGetRuleContext(0, ArglistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_decorator; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterDecorator) {
			listener.enterDecorator(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitDecorator) {
			listener.exitDecorator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitDecorator) {
			return visitor.visitDecorator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DecoratorsContext extends ParserRuleContext {
	public decorator(): DecoratorContext[];
	public decorator(i: number): DecoratorContext;
	public decorator(i?: number): DecoratorContext | DecoratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DecoratorContext);
		} else {
			return this.getRuleContext(i, DecoratorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_decorators; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterDecorators) {
			listener.enterDecorators(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitDecorators) {
			listener.exitDecorators(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitDecorators) {
			return visitor.visitDecorators(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DecoratedContext extends ParserRuleContext {
	public decorators(): DecoratorsContext {
		return this.getRuleContext(0, DecoratorsContext);
	}
	public classdef(): ClassdefContext | undefined {
		return this.tryGetRuleContext(0, ClassdefContext);
	}
	public funcdef(): FuncdefContext | undefined {
		return this.tryGetRuleContext(0, FuncdefContext);
	}
	public async_funcdef(): Async_funcdefContext | undefined {
		return this.tryGetRuleContext(0, Async_funcdefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_decorated; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterDecorated) {
			listener.enterDecorated(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitDecorated) {
			listener.exitDecorated(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitDecorated) {
			return visitor.visitDecorated(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Async_funcdefContext extends ParserRuleContext {
	public ASYNC(): TerminalNode { return this.getToken(Python3Parser.ASYNC, 0); }
	public funcdef(): FuncdefContext {
		return this.getRuleContext(0, FuncdefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_async_funcdef; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterAsync_funcdef) {
			listener.enterAsync_funcdef(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitAsync_funcdef) {
			listener.exitAsync_funcdef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitAsync_funcdef) {
			return visitor.visitAsync_funcdef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncdefContext extends ParserRuleContext {
	public DEF(): TerminalNode { return this.getToken(Python3Parser.DEF, 0); }
	public NAME(): TerminalNode { return this.getToken(Python3Parser.NAME, 0); }
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	public COLON(): TerminalNode { return this.getToken(Python3Parser.COLON, 0); }
	public suite(): SuiteContext {
		return this.getRuleContext(0, SuiteContext);
	}
	public ARROW(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.ARROW, 0); }
	public test(): TestContext | undefined {
		return this.tryGetRuleContext(0, TestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_funcdef; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterFuncdef) {
			listener.enterFuncdef(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitFuncdef) {
			listener.exitFuncdef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitFuncdef) {
			return visitor.visitFuncdef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParametersContext extends ParserRuleContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(Python3Parser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode { return this.getToken(Python3Parser.CLOSE_PAREN, 0); }
	public typedargslist(): TypedargslistContext | undefined {
		return this.tryGetRuleContext(0, TypedargslistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_parameters; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterParameters) {
			listener.enterParameters(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitParameters) {
			listener.exitParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitParameters) {
			return visitor.visitParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypedargslistContext extends ParserRuleContext {
	public tfpdef(): TfpdefContext[];
	public tfpdef(i: number): TfpdefContext;
	public tfpdef(i?: number): TfpdefContext | TfpdefContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TfpdefContext);
		} else {
			return this.getRuleContext(i, TfpdefContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.COMMA);
		} else {
			return this.getToken(Python3Parser.COMMA, i);
		}
	}
	public DIV(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.DIV, 0); }
	public STAR(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.STAR, 0); }
	public POWER(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.POWER, 0); }
	public TYPE_COMMENT(): TerminalNode[];
	public TYPE_COMMENT(i: number): TerminalNode;
	public TYPE_COMMENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.TYPE_COMMENT);
		} else {
			return this.getToken(Python3Parser.TYPE_COMMENT, i);
		}
	}
	public ASSIGN(): TerminalNode[];
	public ASSIGN(i: number): TerminalNode;
	public ASSIGN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.ASSIGN);
		} else {
			return this.getToken(Python3Parser.ASSIGN, i);
		}
	}
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_typedargslist; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterTypedargslist) {
			listener.enterTypedargslist(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitTypedargslist) {
			listener.exitTypedargslist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitTypedargslist) {
			return visitor.visitTypedargslist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TfpdefContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(Python3Parser.NAME, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.COLON, 0); }
	public test(): TestContext | undefined {
		return this.tryGetRuleContext(0, TestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_tfpdef; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterTfpdef) {
			listener.enterTfpdef(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitTfpdef) {
			listener.exitTfpdef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitTfpdef) {
			return visitor.visitTfpdef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarargslistContext extends ParserRuleContext {
	public vfpdef(): VfpdefContext[];
	public vfpdef(i: number): VfpdefContext;
	public vfpdef(i?: number): VfpdefContext | VfpdefContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VfpdefContext);
		} else {
			return this.getRuleContext(i, VfpdefContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.COMMA);
		} else {
			return this.getToken(Python3Parser.COMMA, i);
		}
	}
	public DIV(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.DIV, 0); }
	public ASSIGN(): TerminalNode[];
	public ASSIGN(i: number): TerminalNode;
	public ASSIGN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.ASSIGN);
		} else {
			return this.getToken(Python3Parser.ASSIGN, i);
		}
	}
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public STAR(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.STAR, 0); }
	public POWER(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.POWER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_varargslist; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterVarargslist) {
			listener.enterVarargslist(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitVarargslist) {
			listener.exitVarargslist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitVarargslist) {
			return visitor.visitVarargslist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VfpdefContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(Python3Parser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_vfpdef; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterVfpdef) {
			listener.enterVfpdef(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitVfpdef) {
			listener.exitVfpdef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitVfpdef) {
			return visitor.visitVfpdef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StmtContext extends ParserRuleContext {
	public simple_stmt(): Simple_stmtContext | undefined {
		return this.tryGetRuleContext(0, Simple_stmtContext);
	}
	public compound_stmt(): Compound_stmtContext | undefined {
		return this.tryGetRuleContext(0, Compound_stmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_stmt; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterStmt) {
			listener.enterStmt(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitStmt) {
			listener.exitStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitStmt) {
			return visitor.visitStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Simple_stmtContext extends ParserRuleContext {
	public small_stmt(): Small_stmtContext[];
	public small_stmt(i: number): Small_stmtContext;
	public small_stmt(i?: number): Small_stmtContext | Small_stmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Small_stmtContext);
		} else {
			return this.getRuleContext(i, Small_stmtContext);
		}
	}
	public NEWLINE(): TerminalNode { return this.getToken(Python3Parser.NEWLINE, 0); }
	public SEMI_COLON(): TerminalNode[];
	public SEMI_COLON(i: number): TerminalNode;
	public SEMI_COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.SEMI_COLON);
		} else {
			return this.getToken(Python3Parser.SEMI_COLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_simple_stmt; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterSimple_stmt) {
			listener.enterSimple_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitSimple_stmt) {
			listener.exitSimple_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitSimple_stmt) {
			return visitor.visitSimple_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Small_stmtContext extends ParserRuleContext {
	public expr_stmt(): Expr_stmtContext | undefined {
		return this.tryGetRuleContext(0, Expr_stmtContext);
	}
	public del_stmt(): Del_stmtContext | undefined {
		return this.tryGetRuleContext(0, Del_stmtContext);
	}
	public pass_stmt(): Pass_stmtContext | undefined {
		return this.tryGetRuleContext(0, Pass_stmtContext);
	}
	public flow_stmt(): Flow_stmtContext | undefined {
		return this.tryGetRuleContext(0, Flow_stmtContext);
	}
	public import_stmt(): Import_stmtContext | undefined {
		return this.tryGetRuleContext(0, Import_stmtContext);
	}
	public global_stmt(): Global_stmtContext | undefined {
		return this.tryGetRuleContext(0, Global_stmtContext);
	}
	public nonlocal_stmt(): Nonlocal_stmtContext | undefined {
		return this.tryGetRuleContext(0, Nonlocal_stmtContext);
	}
	public assert_stmt(): Assert_stmtContext | undefined {
		return this.tryGetRuleContext(0, Assert_stmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_small_stmt; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterSmall_stmt) {
			listener.enterSmall_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitSmall_stmt) {
			listener.exitSmall_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitSmall_stmt) {
			return visitor.visitSmall_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr_stmtContext extends ParserRuleContext {
	public testlist_star_expr(): Testlist_star_exprContext[];
	public testlist_star_expr(i: number): Testlist_star_exprContext;
	public testlist_star_expr(i?: number): Testlist_star_exprContext | Testlist_star_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Testlist_star_exprContext);
		} else {
			return this.getRuleContext(i, Testlist_star_exprContext);
		}
	}
	public annassign(): AnnassignContext | undefined {
		return this.tryGetRuleContext(0, AnnassignContext);
	}
	public augassign(): AugassignContext | undefined {
		return this.tryGetRuleContext(0, AugassignContext);
	}
	public yield_expr(): Yield_exprContext[];
	public yield_expr(i: number): Yield_exprContext;
	public yield_expr(i?: number): Yield_exprContext | Yield_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Yield_exprContext);
		} else {
			return this.getRuleContext(i, Yield_exprContext);
		}
	}
	public testlist(): TestlistContext | undefined {
		return this.tryGetRuleContext(0, TestlistContext);
	}
	public ASSIGN(): TerminalNode[];
	public ASSIGN(i: number): TerminalNode;
	public ASSIGN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.ASSIGN);
		} else {
			return this.getToken(Python3Parser.ASSIGN, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_expr_stmt; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterExpr_stmt) {
			listener.enterExpr_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitExpr_stmt) {
			listener.exitExpr_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitExpr_stmt) {
			return visitor.visitExpr_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnassignContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(Python3Parser.COLON, 0); }
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_annassign; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterAnnassign) {
			listener.enterAnnassign(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitAnnassign) {
			listener.exitAnnassign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitAnnassign) {
			return visitor.visitAnnassign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Testlist_star_exprContext extends ParserRuleContext {
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public star_expr(): Star_exprContext[];
	public star_expr(i: number): Star_exprContext;
	public star_expr(i?: number): Star_exprContext | Star_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Star_exprContext);
		} else {
			return this.getRuleContext(i, Star_exprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.COMMA);
		} else {
			return this.getToken(Python3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_testlist_star_expr; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterTestlist_star_expr) {
			listener.enterTestlist_star_expr(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitTestlist_star_expr) {
			listener.exitTestlist_star_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitTestlist_star_expr) {
			return visitor.visitTestlist_star_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AugassignContext extends ParserRuleContext {
	public ADD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.ADD_ASSIGN, 0); }
	public SUB_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.SUB_ASSIGN, 0); }
	public MULT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.MULT_ASSIGN, 0); }
	public AT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.AT_ASSIGN, 0); }
	public DIV_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.DIV_ASSIGN, 0); }
	public MOD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.MOD_ASSIGN, 0); }
	public AND_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.AND_ASSIGN, 0); }
	public OR_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.OR_ASSIGN, 0); }
	public XOR_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.XOR_ASSIGN, 0); }
	public LEFT_SHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.LEFT_SHIFT_ASSIGN, 0); }
	public RIGHT_SHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.RIGHT_SHIFT_ASSIGN, 0); }
	public POWER_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.POWER_ASSIGN, 0); }
	public IDIV_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.IDIV_ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_augassign; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterAugassign) {
			listener.enterAugassign(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitAugassign) {
			listener.exitAugassign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitAugassign) {
			return visitor.visitAugassign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Del_stmtContext extends ParserRuleContext {
	public DEL(): TerminalNode { return this.getToken(Python3Parser.DEL, 0); }
	public exprlist(): ExprlistContext {
		return this.getRuleContext(0, ExprlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_del_stmt; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterDel_stmt) {
			listener.enterDel_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitDel_stmt) {
			listener.exitDel_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitDel_stmt) {
			return visitor.visitDel_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Pass_stmtContext extends ParserRuleContext {
	public PASS(): TerminalNode { return this.getToken(Python3Parser.PASS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_pass_stmt; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterPass_stmt) {
			listener.enterPass_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitPass_stmt) {
			listener.exitPass_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitPass_stmt) {
			return visitor.visitPass_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Flow_stmtContext extends ParserRuleContext {
	public break_stmt(): Break_stmtContext | undefined {
		return this.tryGetRuleContext(0, Break_stmtContext);
	}
	public continue_stmt(): Continue_stmtContext | undefined {
		return this.tryGetRuleContext(0, Continue_stmtContext);
	}
	public return_stmt(): Return_stmtContext | undefined {
		return this.tryGetRuleContext(0, Return_stmtContext);
	}
	public raise_stmt(): Raise_stmtContext | undefined {
		return this.tryGetRuleContext(0, Raise_stmtContext);
	}
	public yield_stmt(): Yield_stmtContext | undefined {
		return this.tryGetRuleContext(0, Yield_stmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_flow_stmt; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterFlow_stmt) {
			listener.enterFlow_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitFlow_stmt) {
			listener.exitFlow_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitFlow_stmt) {
			return visitor.visitFlow_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Break_stmtContext extends ParserRuleContext {
	public BREAK(): TerminalNode { return this.getToken(Python3Parser.BREAK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_break_stmt; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterBreak_stmt) {
			listener.enterBreak_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitBreak_stmt) {
			listener.exitBreak_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitBreak_stmt) {
			return visitor.visitBreak_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Continue_stmtContext extends ParserRuleContext {
	public CONTINUE(): TerminalNode { return this.getToken(Python3Parser.CONTINUE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_continue_stmt; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterContinue_stmt) {
			listener.enterContinue_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitContinue_stmt) {
			listener.exitContinue_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitContinue_stmt) {
			return visitor.visitContinue_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Return_stmtContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(Python3Parser.RETURN, 0); }
	public testlist(): TestlistContext | undefined {
		return this.tryGetRuleContext(0, TestlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_return_stmt; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterReturn_stmt) {
			listener.enterReturn_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitReturn_stmt) {
			listener.exitReturn_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitReturn_stmt) {
			return visitor.visitReturn_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Yield_stmtContext extends ParserRuleContext {
	public yield_expr(): Yield_exprContext {
		return this.getRuleContext(0, Yield_exprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_yield_stmt; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterYield_stmt) {
			listener.enterYield_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitYield_stmt) {
			listener.exitYield_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitYield_stmt) {
			return visitor.visitYield_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Raise_stmtContext extends ParserRuleContext {
	public RAISE(): TerminalNode { return this.getToken(Python3Parser.RAISE, 0); }
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public FROM(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.FROM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_raise_stmt; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterRaise_stmt) {
			listener.enterRaise_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitRaise_stmt) {
			listener.exitRaise_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitRaise_stmt) {
			return visitor.visitRaise_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Import_stmtContext extends ParserRuleContext {
	public import_name(): Import_nameContext | undefined {
		return this.tryGetRuleContext(0, Import_nameContext);
	}
	public import_from(): Import_fromContext | undefined {
		return this.tryGetRuleContext(0, Import_fromContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_import_stmt; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterImport_stmt) {
			listener.enterImport_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitImport_stmt) {
			listener.exitImport_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitImport_stmt) {
			return visitor.visitImport_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Import_nameContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(Python3Parser.IMPORT, 0); }
	public dotted_as_names(): Dotted_as_namesContext {
		return this.getRuleContext(0, Dotted_as_namesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_import_name; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterImport_name) {
			listener.enterImport_name(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitImport_name) {
			listener.exitImport_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitImport_name) {
			return visitor.visitImport_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Import_fromContext extends ParserRuleContext {
	public FROM(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.FROM, 0); }
	public IMPORT(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.IMPORT, 0); }
	public dotted_name(): Dotted_nameContext | undefined {
		return this.tryGetRuleContext(0, Dotted_nameContext);
	}
	public STAR(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.STAR, 0); }
	public OPEN_PAREN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.OPEN_PAREN, 0); }
	public import_as_names(): Import_as_namesContext | undefined {
		return this.tryGetRuleContext(0, Import_as_namesContext);
	}
	public CLOSE_PAREN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.CLOSE_PAREN, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.DOT);
		} else {
			return this.getToken(Python3Parser.DOT, i);
		}
	}
	public ELLIPSIS(): TerminalNode[];
	public ELLIPSIS(i: number): TerminalNode;
	public ELLIPSIS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.ELLIPSIS);
		} else {
			return this.getToken(Python3Parser.ELLIPSIS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_import_from; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterImport_from) {
			listener.enterImport_from(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitImport_from) {
			listener.exitImport_from(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitImport_from) {
			return visitor.visitImport_from(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Import_as_nameContext extends ParserRuleContext {
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.NAME);
		} else {
			return this.getToken(Python3Parser.NAME, i);
		}
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.AS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_import_as_name; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterImport_as_name) {
			listener.enterImport_as_name(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitImport_as_name) {
			listener.exitImport_as_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitImport_as_name) {
			return visitor.visitImport_as_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dotted_as_nameContext extends ParserRuleContext {
	public dotted_name(): Dotted_nameContext {
		return this.getRuleContext(0, Dotted_nameContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.AS, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_dotted_as_name; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterDotted_as_name) {
			listener.enterDotted_as_name(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitDotted_as_name) {
			listener.exitDotted_as_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitDotted_as_name) {
			return visitor.visitDotted_as_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Import_as_namesContext extends ParserRuleContext {
	public import_as_name(): Import_as_nameContext[];
	public import_as_name(i: number): Import_as_nameContext;
	public import_as_name(i?: number): Import_as_nameContext | Import_as_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Import_as_nameContext);
		} else {
			return this.getRuleContext(i, Import_as_nameContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.COMMA);
		} else {
			return this.getToken(Python3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_import_as_names; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterImport_as_names) {
			listener.enterImport_as_names(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitImport_as_names) {
			listener.exitImport_as_names(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitImport_as_names) {
			return visitor.visitImport_as_names(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dotted_as_namesContext extends ParserRuleContext {
	public dotted_as_name(): Dotted_as_nameContext[];
	public dotted_as_name(i: number): Dotted_as_nameContext;
	public dotted_as_name(i?: number): Dotted_as_nameContext | Dotted_as_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Dotted_as_nameContext);
		} else {
			return this.getRuleContext(i, Dotted_as_nameContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.COMMA);
		} else {
			return this.getToken(Python3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_dotted_as_names; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterDotted_as_names) {
			listener.enterDotted_as_names(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitDotted_as_names) {
			listener.exitDotted_as_names(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitDotted_as_names) {
			return visitor.visitDotted_as_names(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dotted_nameContext extends ParserRuleContext {
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.NAME);
		} else {
			return this.getToken(Python3Parser.NAME, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.DOT);
		} else {
			return this.getToken(Python3Parser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_dotted_name; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterDotted_name) {
			listener.enterDotted_name(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitDotted_name) {
			listener.exitDotted_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitDotted_name) {
			return visitor.visitDotted_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Global_stmtContext extends ParserRuleContext {
	public GLOBAL(): TerminalNode { return this.getToken(Python3Parser.GLOBAL, 0); }
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.NAME);
		} else {
			return this.getToken(Python3Parser.NAME, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.COMMA);
		} else {
			return this.getToken(Python3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_global_stmt; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterGlobal_stmt) {
			listener.enterGlobal_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitGlobal_stmt) {
			listener.exitGlobal_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitGlobal_stmt) {
			return visitor.visitGlobal_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Nonlocal_stmtContext extends ParserRuleContext {
	public NONLOCAL(): TerminalNode { return this.getToken(Python3Parser.NONLOCAL, 0); }
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.NAME);
		} else {
			return this.getToken(Python3Parser.NAME, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.COMMA);
		} else {
			return this.getToken(Python3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_nonlocal_stmt; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterNonlocal_stmt) {
			listener.enterNonlocal_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitNonlocal_stmt) {
			listener.exitNonlocal_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitNonlocal_stmt) {
			return visitor.visitNonlocal_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Assert_stmtContext extends ParserRuleContext {
	public ASSERT(): TerminalNode { return this.getToken(Python3Parser.ASSERT, 0); }
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_assert_stmt; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterAssert_stmt) {
			listener.enterAssert_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitAssert_stmt) {
			listener.exitAssert_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitAssert_stmt) {
			return visitor.visitAssert_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Compound_stmtContext extends ParserRuleContext {
	public if_stmt(): If_stmtContext | undefined {
		return this.tryGetRuleContext(0, If_stmtContext);
	}
	public while_stmt(): While_stmtContext | undefined {
		return this.tryGetRuleContext(0, While_stmtContext);
	}
	public for_stmt(): For_stmtContext | undefined {
		return this.tryGetRuleContext(0, For_stmtContext);
	}
	public try_stmt(): Try_stmtContext | undefined {
		return this.tryGetRuleContext(0, Try_stmtContext);
	}
	public with_stmt(): With_stmtContext | undefined {
		return this.tryGetRuleContext(0, With_stmtContext);
	}
	public funcdef(): FuncdefContext | undefined {
		return this.tryGetRuleContext(0, FuncdefContext);
	}
	public classdef(): ClassdefContext | undefined {
		return this.tryGetRuleContext(0, ClassdefContext);
	}
	public decorated(): DecoratedContext | undefined {
		return this.tryGetRuleContext(0, DecoratedContext);
	}
	public async_stmt(): Async_stmtContext | undefined {
		return this.tryGetRuleContext(0, Async_stmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_compound_stmt; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterCompound_stmt) {
			listener.enterCompound_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitCompound_stmt) {
			listener.exitCompound_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitCompound_stmt) {
			return visitor.visitCompound_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Async_stmtContext extends ParserRuleContext {
	public ASYNC(): TerminalNode { return this.getToken(Python3Parser.ASYNC, 0); }
	public funcdef(): FuncdefContext | undefined {
		return this.tryGetRuleContext(0, FuncdefContext);
	}
	public with_stmt(): With_stmtContext | undefined {
		return this.tryGetRuleContext(0, With_stmtContext);
	}
	public for_stmt(): For_stmtContext | undefined {
		return this.tryGetRuleContext(0, For_stmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_async_stmt; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterAsync_stmt) {
			listener.enterAsync_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitAsync_stmt) {
			listener.exitAsync_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitAsync_stmt) {
			return visitor.visitAsync_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class If_stmtContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(Python3Parser.IF, 0); }
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.COLON);
		} else {
			return this.getToken(Python3Parser.COLON, i);
		}
	}
	public suite(): SuiteContext[];
	public suite(i: number): SuiteContext;
	public suite(i?: number): SuiteContext | SuiteContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SuiteContext);
		} else {
			return this.getRuleContext(i, SuiteContext);
		}
	}
	public ELIF(): TerminalNode[];
	public ELIF(i: number): TerminalNode;
	public ELIF(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.ELIF);
		} else {
			return this.getToken(Python3Parser.ELIF, i);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.ELSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_if_stmt; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterIf_stmt) {
			listener.enterIf_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitIf_stmt) {
			listener.exitIf_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitIf_stmt) {
			return visitor.visitIf_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class While_stmtContext extends ParserRuleContext {
	public WHILE(): TerminalNode { return this.getToken(Python3Parser.WHILE, 0); }
	public test(): TestContext {
		return this.getRuleContext(0, TestContext);
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.COLON);
		} else {
			return this.getToken(Python3Parser.COLON, i);
		}
	}
	public suite(): SuiteContext[];
	public suite(i: number): SuiteContext;
	public suite(i?: number): SuiteContext | SuiteContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SuiteContext);
		} else {
			return this.getRuleContext(i, SuiteContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.ELSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_while_stmt; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterWhile_stmt) {
			listener.enterWhile_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitWhile_stmt) {
			listener.exitWhile_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitWhile_stmt) {
			return visitor.visitWhile_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class For_stmtContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(Python3Parser.FOR, 0); }
	public exprlist(): ExprlistContext {
		return this.getRuleContext(0, ExprlistContext);
	}
	public IN(): TerminalNode { return this.getToken(Python3Parser.IN, 0); }
	public testlist(): TestlistContext {
		return this.getRuleContext(0, TestlistContext);
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.COLON);
		} else {
			return this.getToken(Python3Parser.COLON, i);
		}
	}
	public suite(): SuiteContext[];
	public suite(i: number): SuiteContext;
	public suite(i?: number): SuiteContext | SuiteContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SuiteContext);
		} else {
			return this.getRuleContext(i, SuiteContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.ELSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_for_stmt; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterFor_stmt) {
			listener.enterFor_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitFor_stmt) {
			listener.exitFor_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitFor_stmt) {
			return visitor.visitFor_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Try_stmtContext extends ParserRuleContext {
	public TRY(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.TRY, 0); }
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.COLON);
		} else {
			return this.getToken(Python3Parser.COLON, i);
		}
	}
	public suite(): SuiteContext[];
	public suite(i: number): SuiteContext;
	public suite(i?: number): SuiteContext | SuiteContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SuiteContext);
		} else {
			return this.getRuleContext(i, SuiteContext);
		}
	}
	public FINALLY(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.FINALLY, 0); }
	public except_clause(): Except_clauseContext[];
	public except_clause(i: number): Except_clauseContext;
	public except_clause(i?: number): Except_clauseContext | Except_clauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Except_clauseContext);
		} else {
			return this.getRuleContext(i, Except_clauseContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.ELSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_try_stmt; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterTry_stmt) {
			listener.enterTry_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitTry_stmt) {
			listener.exitTry_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitTry_stmt) {
			return visitor.visitTry_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class With_stmtContext extends ParserRuleContext {
	public WITH(): TerminalNode { return this.getToken(Python3Parser.WITH, 0); }
	public with_item(): With_itemContext[];
	public with_item(i: number): With_itemContext;
	public with_item(i?: number): With_itemContext | With_itemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(With_itemContext);
		} else {
			return this.getRuleContext(i, With_itemContext);
		}
	}
	public COLON(): TerminalNode { return this.getToken(Python3Parser.COLON, 0); }
	public suite(): SuiteContext {
		return this.getRuleContext(0, SuiteContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.COMMA);
		} else {
			return this.getToken(Python3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_with_stmt; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterWith_stmt) {
			listener.enterWith_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitWith_stmt) {
			listener.exitWith_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitWith_stmt) {
			return visitor.visitWith_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class With_itemContext extends ParserRuleContext {
	public test(): TestContext {
		return this.getRuleContext(0, TestContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.AS, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_with_item; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterWith_item) {
			listener.enterWith_item(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitWith_item) {
			listener.exitWith_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitWith_item) {
			return visitor.visitWith_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Except_clauseContext extends ParserRuleContext {
	public EXCEPT(): TerminalNode { return this.getToken(Python3Parser.EXCEPT, 0); }
	public test(): TestContext | undefined {
		return this.tryGetRuleContext(0, TestContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.AS, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_except_clause; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterExcept_clause) {
			listener.enterExcept_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitExcept_clause) {
			listener.exitExcept_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitExcept_clause) {
			return visitor.visitExcept_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SuiteContext extends ParserRuleContext {
	public simple_stmt(): Simple_stmtContext | undefined {
		return this.tryGetRuleContext(0, Simple_stmtContext);
	}
	public NEWLINE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.NEWLINE, 0); }
	public INDENT(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.INDENT, 0); }
	public DEDENT(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.DEDENT, 0); }
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_suite; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterSuite) {
			listener.enterSuite(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitSuite) {
			listener.exitSuite(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitSuite) {
			return visitor.visitSuite(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Namedexpr_testContext extends ParserRuleContext {
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_namedexpr_test; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterNamedexpr_test) {
			listener.enterNamedexpr_test(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitNamedexpr_test) {
			listener.exitNamedexpr_test(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitNamedexpr_test) {
			return visitor.visitNamedexpr_test(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TestContext extends ParserRuleContext {
	public or_test(): Or_testContext[];
	public or_test(i: number): Or_testContext;
	public or_test(i?: number): Or_testContext | Or_testContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Or_testContext);
		} else {
			return this.getRuleContext(i, Or_testContext);
		}
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.IF, 0); }
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.ELSE, 0); }
	public test(): TestContext | undefined {
		return this.tryGetRuleContext(0, TestContext);
	}
	public lambdef(): LambdefContext | undefined {
		return this.tryGetRuleContext(0, LambdefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_test; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterTest) {
			listener.enterTest(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitTest) {
			listener.exitTest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitTest) {
			return visitor.visitTest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Test_nocondContext extends ParserRuleContext {
	public or_test(): Or_testContext | undefined {
		return this.tryGetRuleContext(0, Or_testContext);
	}
	public lambdef_nocond(): Lambdef_nocondContext | undefined {
		return this.tryGetRuleContext(0, Lambdef_nocondContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_test_nocond; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterTest_nocond) {
			listener.enterTest_nocond(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitTest_nocond) {
			listener.exitTest_nocond(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitTest_nocond) {
			return visitor.visitTest_nocond(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdefContext extends ParserRuleContext {
	public LAMBDA(): TerminalNode { return this.getToken(Python3Parser.LAMBDA, 0); }
	public COLON(): TerminalNode { return this.getToken(Python3Parser.COLON, 0); }
	public test(): TestContext {
		return this.getRuleContext(0, TestContext);
	}
	public varargslist(): VarargslistContext | undefined {
		return this.tryGetRuleContext(0, VarargslistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_lambdef; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterLambdef) {
			listener.enterLambdef(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitLambdef) {
			listener.exitLambdef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitLambdef) {
			return visitor.visitLambdef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Lambdef_nocondContext extends ParserRuleContext {
	public LAMBDA(): TerminalNode { return this.getToken(Python3Parser.LAMBDA, 0); }
	public COLON(): TerminalNode { return this.getToken(Python3Parser.COLON, 0); }
	public test_nocond(): Test_nocondContext {
		return this.getRuleContext(0, Test_nocondContext);
	}
	public varargslist(): VarargslistContext | undefined {
		return this.tryGetRuleContext(0, VarargslistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_lambdef_nocond; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterLambdef_nocond) {
			listener.enterLambdef_nocond(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitLambdef_nocond) {
			listener.exitLambdef_nocond(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitLambdef_nocond) {
			return visitor.visitLambdef_nocond(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Or_testContext extends ParserRuleContext {
	public and_test(): And_testContext[];
	public and_test(i: number): And_testContext;
	public and_test(i?: number): And_testContext | And_testContext[] {
		if (i === undefined) {
			return this.getRuleContexts(And_testContext);
		} else {
			return this.getRuleContext(i, And_testContext);
		}
	}
	public OR(): TerminalNode[];
	public OR(i: number): TerminalNode;
	public OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.OR);
		} else {
			return this.getToken(Python3Parser.OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_or_test; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterOr_test) {
			listener.enterOr_test(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitOr_test) {
			listener.exitOr_test(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitOr_test) {
			return visitor.visitOr_test(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class And_testContext extends ParserRuleContext {
	public not_test(): Not_testContext[];
	public not_test(i: number): Not_testContext;
	public not_test(i?: number): Not_testContext | Not_testContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Not_testContext);
		} else {
			return this.getRuleContext(i, Not_testContext);
		}
	}
	public AND(): TerminalNode[];
	public AND(i: number): TerminalNode;
	public AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.AND);
		} else {
			return this.getToken(Python3Parser.AND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_and_test; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterAnd_test) {
			listener.enterAnd_test(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitAnd_test) {
			listener.exitAnd_test(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitAnd_test) {
			return visitor.visitAnd_test(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Not_testContext extends ParserRuleContext {
	public NOT(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.NOT, 0); }
	public not_test(): Not_testContext | undefined {
		return this.tryGetRuleContext(0, Not_testContext);
	}
	public comparison(): ComparisonContext | undefined {
		return this.tryGetRuleContext(0, ComparisonContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_not_test; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterNot_test) {
			listener.enterNot_test(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitNot_test) {
			listener.exitNot_test(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitNot_test) {
			return visitor.visitNot_test(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonContext extends ParserRuleContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public comp_op(): Comp_opContext[];
	public comp_op(i: number): Comp_opContext;
	public comp_op(i?: number): Comp_opContext | Comp_opContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Comp_opContext);
		} else {
			return this.getRuleContext(i, Comp_opContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_comparison; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterComparison) {
			listener.enterComparison(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitComparison) {
			listener.exitComparison(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitComparison) {
			return visitor.visitComparison(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Comp_opContext extends ParserRuleContext {
	public LESS_THAN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.LESS_THAN, 0); }
	public GREATER_THAN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.GREATER_THAN, 0); }
	public EQUALS(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.EQUALS, 0); }
	public GT_EQ(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.GT_EQ, 0); }
	public LT_EQ(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.LT_EQ, 0); }
	public NOT_EQ_1(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.NOT_EQ_1, 0); }
	public NOT_EQ_2(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.NOT_EQ_2, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.IN, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.NOT, 0); }
	public IS(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.IS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_comp_op; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterComp_op) {
			listener.enterComp_op(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitComp_op) {
			listener.exitComp_op(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitComp_op) {
			return visitor.visitComp_op(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Star_exprContext extends ParserRuleContext {
	public STAR(): TerminalNode { return this.getToken(Python3Parser.STAR, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_star_expr; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterStar_expr) {
			listener.enterStar_expr(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitStar_expr) {
			listener.exitStar_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitStar_expr) {
			return visitor.visitStar_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	public xor_expr(): Xor_exprContext[];
	public xor_expr(i: number): Xor_exprContext;
	public xor_expr(i?: number): Xor_exprContext | Xor_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Xor_exprContext);
		} else {
			return this.getRuleContext(i, Xor_exprContext);
		}
	}
	public OR_OP(): TerminalNode[];
	public OR_OP(i: number): TerminalNode;
	public OR_OP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.OR_OP);
		} else {
			return this.getToken(Python3Parser.OR_OP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_expr; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterExpr) {
			listener.enterExpr(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitExpr) {
			listener.exitExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitExpr) {
			return visitor.visitExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Xor_exprContext extends ParserRuleContext {
	public and_expr(): And_exprContext[];
	public and_expr(i: number): And_exprContext;
	public and_expr(i?: number): And_exprContext | And_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(And_exprContext);
		} else {
			return this.getRuleContext(i, And_exprContext);
		}
	}
	public XOR(): TerminalNode[];
	public XOR(i: number): TerminalNode;
	public XOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.XOR);
		} else {
			return this.getToken(Python3Parser.XOR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_xor_expr; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterXor_expr) {
			listener.enterXor_expr(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitXor_expr) {
			listener.exitXor_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitXor_expr) {
			return visitor.visitXor_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class And_exprContext extends ParserRuleContext {
	public shift_expr(): Shift_exprContext[];
	public shift_expr(i: number): Shift_exprContext;
	public shift_expr(i?: number): Shift_exprContext | Shift_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Shift_exprContext);
		} else {
			return this.getRuleContext(i, Shift_exprContext);
		}
	}
	public AND_OP(): TerminalNode[];
	public AND_OP(i: number): TerminalNode;
	public AND_OP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.AND_OP);
		} else {
			return this.getToken(Python3Parser.AND_OP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_and_expr; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterAnd_expr) {
			listener.enterAnd_expr(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitAnd_expr) {
			listener.exitAnd_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitAnd_expr) {
			return visitor.visitAnd_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Shift_exprContext extends ParserRuleContext {
	public arith_expr(): Arith_exprContext[];
	public arith_expr(i: number): Arith_exprContext;
	public arith_expr(i?: number): Arith_exprContext | Arith_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Arith_exprContext);
		} else {
			return this.getRuleContext(i, Arith_exprContext);
		}
	}
	public LEFT_SHIFT(): TerminalNode[];
	public LEFT_SHIFT(i: number): TerminalNode;
	public LEFT_SHIFT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.LEFT_SHIFT);
		} else {
			return this.getToken(Python3Parser.LEFT_SHIFT, i);
		}
	}
	public RIGHT_SHIFT(): TerminalNode[];
	public RIGHT_SHIFT(i: number): TerminalNode;
	public RIGHT_SHIFT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.RIGHT_SHIFT);
		} else {
			return this.getToken(Python3Parser.RIGHT_SHIFT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_shift_expr; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterShift_expr) {
			listener.enterShift_expr(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitShift_expr) {
			listener.exitShift_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitShift_expr) {
			return visitor.visitShift_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Arith_exprContext extends ParserRuleContext {
	public term(): TermContext[];
	public term(i: number): TermContext;
	public term(i?: number): TermContext | TermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TermContext);
		} else {
			return this.getRuleContext(i, TermContext);
		}
	}
	public ADD(): TerminalNode[];
	public ADD(i: number): TerminalNode;
	public ADD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.ADD);
		} else {
			return this.getToken(Python3Parser.ADD, i);
		}
	}
	public MINUS(): TerminalNode[];
	public MINUS(i: number): TerminalNode;
	public MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.MINUS);
		} else {
			return this.getToken(Python3Parser.MINUS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_arith_expr; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterArith_expr) {
			listener.enterArith_expr(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitArith_expr) {
			listener.exitArith_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitArith_expr) {
			return visitor.visitArith_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TermContext extends ParserRuleContext {
	public factor(): FactorContext[];
	public factor(i: number): FactorContext;
	public factor(i?: number): FactorContext | FactorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FactorContext);
		} else {
			return this.getRuleContext(i, FactorContext);
		}
	}
	public STAR(): TerminalNode[];
	public STAR(i: number): TerminalNode;
	public STAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.STAR);
		} else {
			return this.getToken(Python3Parser.STAR, i);
		}
	}
	public AT(): TerminalNode[];
	public AT(i: number): TerminalNode;
	public AT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.AT);
		} else {
			return this.getToken(Python3Parser.AT, i);
		}
	}
	public DIV(): TerminalNode[];
	public DIV(i: number): TerminalNode;
	public DIV(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.DIV);
		} else {
			return this.getToken(Python3Parser.DIV, i);
		}
	}
	public MOD(): TerminalNode[];
	public MOD(i: number): TerminalNode;
	public MOD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.MOD);
		} else {
			return this.getToken(Python3Parser.MOD, i);
		}
	}
	public IDIV(): TerminalNode[];
	public IDIV(i: number): TerminalNode;
	public IDIV(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.IDIV);
		} else {
			return this.getToken(Python3Parser.IDIV, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_term; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterTerm) {
			listener.enterTerm(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitTerm) {
			listener.exitTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitTerm) {
			return visitor.visitTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FactorContext extends ParserRuleContext {
	public factor(): FactorContext | undefined {
		return this.tryGetRuleContext(0, FactorContext);
	}
	public ADD(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.ADD, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.MINUS, 0); }
	public NOT_OP(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.NOT_OP, 0); }
	public power(): PowerContext | undefined {
		return this.tryGetRuleContext(0, PowerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_factor; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterFactor) {
			listener.enterFactor(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitFactor) {
			listener.exitFactor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitFactor) {
			return visitor.visitFactor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PowerContext extends ParserRuleContext {
	public atom_expr(): Atom_exprContext {
		return this.getRuleContext(0, Atom_exprContext);
	}
	public POWER(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.POWER, 0); }
	public factor(): FactorContext | undefined {
		return this.tryGetRuleContext(0, FactorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_power; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterPower) {
			listener.enterPower(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitPower) {
			listener.exitPower(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitPower) {
			return visitor.visitPower(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Atom_exprContext extends ParserRuleContext {
	public atom(): AtomContext {
		return this.getRuleContext(0, AtomContext);
	}
	public AWAIT(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.AWAIT, 0); }
	public trailer(): TrailerContext[];
	public trailer(i: number): TrailerContext;
	public trailer(i?: number): TrailerContext | TrailerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TrailerContext);
		} else {
			return this.getRuleContext(i, TrailerContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_atom_expr; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterAtom_expr) {
			listener.enterAtom_expr(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitAtom_expr) {
			listener.exitAtom_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitAtom_expr) {
			return visitor.visitAtom_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	public OPEN_PAREN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.CLOSE_PAREN, 0); }
	public OPEN_BRACK(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.OPEN_BRACK, 0); }
	public CLOSE_BRACK(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.CLOSE_BRACK, 0); }
	public OPEN_BRACE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.CLOSE_BRACE, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.NAME, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.NUMBER, 0); }
	public ELLIPSIS(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.ELLIPSIS, 0); }
	public NONE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.NONE, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.FALSE, 0); }
	public yield_expr(): Yield_exprContext | undefined {
		return this.tryGetRuleContext(0, Yield_exprContext);
	}
	public testlist_comp(): Testlist_compContext | undefined {
		return this.tryGetRuleContext(0, Testlist_compContext);
	}
	public dictorsetmaker(): DictorsetmakerContext | undefined {
		return this.tryGetRuleContext(0, DictorsetmakerContext);
	}
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.STRING);
		} else {
			return this.getToken(Python3Parser.STRING, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_atom; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterAtom) {
			listener.enterAtom(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitAtom) {
			listener.exitAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitAtom) {
			return visitor.visitAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Testlist_compContext extends ParserRuleContext {
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public star_expr(): Star_exprContext[];
	public star_expr(i: number): Star_exprContext;
	public star_expr(i?: number): Star_exprContext | Star_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Star_exprContext);
		} else {
			return this.getRuleContext(i, Star_exprContext);
		}
	}
	public comp_for(): Comp_forContext | undefined {
		return this.tryGetRuleContext(0, Comp_forContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.COMMA);
		} else {
			return this.getToken(Python3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_testlist_comp; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterTestlist_comp) {
			listener.enterTestlist_comp(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitTestlist_comp) {
			listener.exitTestlist_comp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitTestlist_comp) {
			return visitor.visitTestlist_comp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TrailerContext extends ParserRuleContext {
	public OPEN_PAREN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.CLOSE_PAREN, 0); }
	public arglist(): ArglistContext | undefined {
		return this.tryGetRuleContext(0, ArglistContext);
	}
	public OPEN_BRACK(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.OPEN_BRACK, 0); }
	public subscriptlist(): SubscriptlistContext | undefined {
		return this.tryGetRuleContext(0, SubscriptlistContext);
	}
	public CLOSE_BRACK(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.CLOSE_BRACK, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.DOT, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_trailer; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterTrailer) {
			listener.enterTrailer(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitTrailer) {
			listener.exitTrailer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitTrailer) {
			return visitor.visitTrailer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubscriptlistContext extends ParserRuleContext {
	public subscript(): SubscriptContext[];
	public subscript(i: number): SubscriptContext;
	public subscript(i?: number): SubscriptContext | SubscriptContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SubscriptContext);
		} else {
			return this.getRuleContext(i, SubscriptContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.COMMA);
		} else {
			return this.getToken(Python3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_subscriptlist; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterSubscriptlist) {
			listener.enterSubscriptlist(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitSubscriptlist) {
			listener.exitSubscriptlist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitSubscriptlist) {
			return visitor.visitSubscriptlist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubscriptContext extends ParserRuleContext {
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.COLON, 0); }
	public sliceop(): SliceopContext | undefined {
		return this.tryGetRuleContext(0, SliceopContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_subscript; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterSubscript) {
			listener.enterSubscript(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitSubscript) {
			listener.exitSubscript(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitSubscript) {
			return visitor.visitSubscript(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SliceopContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(Python3Parser.COLON, 0); }
	public test(): TestContext | undefined {
		return this.tryGetRuleContext(0, TestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_sliceop; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterSliceop) {
			listener.enterSliceop(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitSliceop) {
			listener.exitSliceop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitSliceop) {
			return visitor.visitSliceop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprlistContext extends ParserRuleContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public star_expr(): Star_exprContext[];
	public star_expr(i: number): Star_exprContext;
	public star_expr(i?: number): Star_exprContext | Star_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Star_exprContext);
		} else {
			return this.getRuleContext(i, Star_exprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.COMMA);
		} else {
			return this.getToken(Python3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_exprlist; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterExprlist) {
			listener.enterExprlist(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitExprlist) {
			listener.exitExprlist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitExprlist) {
			return visitor.visitExprlist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TestlistContext extends ParserRuleContext {
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.COMMA);
		} else {
			return this.getToken(Python3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_testlist; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterTestlist) {
			listener.enterTestlist(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitTestlist) {
			listener.exitTestlist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitTestlist) {
			return visitor.visitTestlist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DictorsetmakerContext extends ParserRuleContext {
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.COLON);
		} else {
			return this.getToken(Python3Parser.COLON, i);
		}
	}
	public POWER(): TerminalNode[];
	public POWER(i: number): TerminalNode;
	public POWER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.POWER);
		} else {
			return this.getToken(Python3Parser.POWER, i);
		}
	}
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public comp_for(): Comp_forContext | undefined {
		return this.tryGetRuleContext(0, Comp_forContext);
	}
	public star_expr(): Star_exprContext[];
	public star_expr(i: number): Star_exprContext;
	public star_expr(i?: number): Star_exprContext | Star_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Star_exprContext);
		} else {
			return this.getRuleContext(i, Star_exprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.COMMA);
		} else {
			return this.getToken(Python3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_dictorsetmaker; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterDictorsetmaker) {
			listener.enterDictorsetmaker(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitDictorsetmaker) {
			listener.exitDictorsetmaker(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitDictorsetmaker) {
			return visitor.visitDictorsetmaker(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassdefContext extends ParserRuleContext {
	public CLASS(): TerminalNode { return this.getToken(Python3Parser.CLASS, 0); }
	public NAME(): TerminalNode { return this.getToken(Python3Parser.NAME, 0); }
	public COLON(): TerminalNode { return this.getToken(Python3Parser.COLON, 0); }
	public suite(): SuiteContext {
		return this.getRuleContext(0, SuiteContext);
	}
	public OPEN_PAREN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.CLOSE_PAREN, 0); }
	public arglist(): ArglistContext | undefined {
		return this.tryGetRuleContext(0, ArglistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_classdef; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterClassdef) {
			listener.enterClassdef(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitClassdef) {
			listener.exitClassdef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitClassdef) {
			return visitor.visitClassdef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArglistContext extends ParserRuleContext {
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.COMMA);
		} else {
			return this.getToken(Python3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_arglist; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterArglist) {
			listener.enterArglist(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitArglist) {
			listener.exitArglist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitArglist) {
			return visitor.visitArglist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentContext extends ParserRuleContext {
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.ASSIGN, 0); }
	public POWER(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.POWER, 0); }
	public STAR(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.STAR, 0); }
	public comp_for(): Comp_forContext | undefined {
		return this.tryGetRuleContext(0, Comp_forContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_argument; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterArgument) {
			listener.enterArgument(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitArgument) {
			listener.exitArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitArgument) {
			return visitor.visitArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Comp_iterContext extends ParserRuleContext {
	public comp_for(): Comp_forContext | undefined {
		return this.tryGetRuleContext(0, Comp_forContext);
	}
	public comp_if(): Comp_ifContext | undefined {
		return this.tryGetRuleContext(0, Comp_ifContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_comp_iter; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterComp_iter) {
			listener.enterComp_iter(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitComp_iter) {
			listener.exitComp_iter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitComp_iter) {
			return visitor.visitComp_iter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Comp_forContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(Python3Parser.FOR, 0); }
	public exprlist(): ExprlistContext {
		return this.getRuleContext(0, ExprlistContext);
	}
	public IN(): TerminalNode { return this.getToken(Python3Parser.IN, 0); }
	public or_test(): Or_testContext {
		return this.getRuleContext(0, Or_testContext);
	}
	public ASYNC(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.ASYNC, 0); }
	public comp_iter(): Comp_iterContext | undefined {
		return this.tryGetRuleContext(0, Comp_iterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_comp_for; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterComp_for) {
			listener.enterComp_for(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitComp_for) {
			listener.exitComp_for(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitComp_for) {
			return visitor.visitComp_for(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Comp_ifContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(Python3Parser.IF, 0); }
	public test_nocond(): Test_nocondContext {
		return this.getRuleContext(0, Test_nocondContext);
	}
	public comp_iter(): Comp_iterContext | undefined {
		return this.tryGetRuleContext(0, Comp_iterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_comp_if; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterComp_if) {
			listener.enterComp_if(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitComp_if) {
			listener.exitComp_if(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitComp_if) {
			return visitor.visitComp_if(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Encoding_declContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(Python3Parser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_encoding_decl; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterEncoding_decl) {
			listener.enterEncoding_decl(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitEncoding_decl) {
			listener.exitEncoding_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitEncoding_decl) {
			return visitor.visitEncoding_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Yield_exprContext extends ParserRuleContext {
	public YIELD(): TerminalNode { return this.getToken(Python3Parser.YIELD, 0); }
	public yield_arg(): Yield_argContext | undefined {
		return this.tryGetRuleContext(0, Yield_argContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_yield_expr; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterYield_expr) {
			listener.enterYield_expr(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitYield_expr) {
			listener.exitYield_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitYield_expr) {
			return visitor.visitYield_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Yield_argContext extends ParserRuleContext {
	public FROM(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.FROM, 0); }
	public test(): TestContext | undefined {
		return this.tryGetRuleContext(0, TestContext);
	}
	public testlist(): TestlistContext | undefined {
		return this.tryGetRuleContext(0, TestlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_yield_arg; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterYield_arg) {
			listener.enterYield_arg(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitYield_arg) {
			listener.exitYield_arg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitYield_arg) {
			return visitor.visitYield_arg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Func_body_suiteContext extends ParserRuleContext {
	public simple_stmt(): Simple_stmtContext | undefined {
		return this.tryGetRuleContext(0, Simple_stmtContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.NEWLINE);
		} else {
			return this.getToken(Python3Parser.NEWLINE, i);
		}
	}
	public INDENT(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.INDENT, 0); }
	public DEDENT(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.DEDENT, 0); }
	public TYPE_COMMENT(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.TYPE_COMMENT, 0); }
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_func_body_suite; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterFunc_body_suite) {
			listener.enterFunc_body_suite(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitFunc_body_suite) {
			listener.exitFunc_body_suite(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitFunc_body_suite) {
			return visitor.visitFunc_body_suite(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Func_type_inputContext extends ParserRuleContext {
	public func_type(): Func_typeContext {
		return this.getRuleContext(0, Func_typeContext);
	}
	public EOF(): TerminalNode { return this.getToken(Python3Parser.EOF, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.NEWLINE);
		} else {
			return this.getToken(Python3Parser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_func_type_input; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterFunc_type_input) {
			listener.enterFunc_type_input(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitFunc_type_input) {
			listener.exitFunc_type_input(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitFunc_type_input) {
			return visitor.visitFunc_type_input(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Func_typeContext extends ParserRuleContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(Python3Parser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode { return this.getToken(Python3Parser.CLOSE_PAREN, 0); }
	public ARROW(): TerminalNode { return this.getToken(Python3Parser.ARROW, 0); }
	public test(): TestContext {
		return this.getRuleContext(0, TestContext);
	}
	public typelist(): TypelistContext | undefined {
		return this.tryGetRuleContext(0, TypelistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_func_type; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterFunc_type) {
			listener.enterFunc_type(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitFunc_type) {
			listener.exitFunc_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitFunc_type) {
			return visitor.visitFunc_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypelistContext extends ParserRuleContext {
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public STAR(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.STAR, 0); }
	public POWER(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.POWER, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.COMMA);
		} else {
			return this.getToken(Python3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Python3Parser.RULE_typelist; }
	// @Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterTypelist) {
			listener.enterTypelist(this);
		}
	}
	// @Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitTypelist) {
			listener.exitTypelist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3Visitor<Result>): Result {
		if (visitor.visitTypelist) {
			return visitor.visitTypelist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


