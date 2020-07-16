from django.urls import path
from . import views


urlpatterns = [
        path("/java_home",views.java_home, name= "java_home"),
        path("/java_intor",views.java_intor, name= "java_intor"),
        path("/java_get_started",views.java_get_started, name= "java_get_started"),
        path("/java_syntax",views.java_syntax, name= "java_syntax"),
        path("/java_comments",views.java_comments, name= "java_comments"),
        path("/java_variables",views.java_variables, name= "java_variables"),
        path("/java_data_types",views.java_data_types, name= "java_data_types"),
        path("/java_type_casting",views.java_type_casting, name= "java_type_casting"),
        path("/java_operators",views.java_operators, name= "java_operators"),
        path("/java_strings",views.java_strings, name= "java_strings"),
        path("/java_math",views.java_math, name= "java_math"),
        path("/java_booleans",views.java_booleans, name= "java_booleans"),
        path("/java_conditions",views.java_conditions, name= "java_conditions"),
        path("/java_switch",views.java_switch, name= "java_switch"),
        path("/java_while_loop",views.java_while_loop, name= "java_while_loop"),
        path("/java_for_loop",views.java_for_loop, name= "java_for_loop"),
        path("/java_break",views.java_break, name= "java_break"),
        path("/java_arrays",views.java_arrays, name= "java_arrays"),
        path("/java_methods",views.java_methods, name= "java_methods"),
        path("/java_methods_param",views.java_methods_param, name= "java_methods_param"),
        path("/java_methods_overloading",views.java_methods_overloading, name= "java_methods_overloading"),
        path("/java_oop",views.java_oop, name= "java_oop"),
        path("/java_classes",views.java_classes, name= "java_classes"),
        path("/java_class_attributes",views.java_class_attributes, name= "java_class_attributes"),
        path("/java_class_methods",views.java_class_methods, name= "java_class_methods"),
        path("/java_constructors",views.java_constructors, name= "java_constructors"),
        path("/java_modifier",views.java_modifier, name= "java_modifier"),
        path("/java_encapsulation",views.java_encapsulation, name= "java_encapsulation"),
        path("/java_packages",views.java_packages, name= "java_packages"),
        path("/java_inheritance",views.java_inheritance, name= "java_inheritance"),
        path("/java_polymorphism",views.java_polymorphism, name= "java_polymorphism"),
        path("/java_inner_classes",views.java_inner_classes, name= "java_inner_classes"),
        path("/java_abstract",views.java_abstract, name= "java_abstract"),
        path("/java_interface",views.java_interface, name= "java_interface"),
        path("/java_enums",views.java_enums, name= "java_enums"),
        path("/java_user_input",views.java_user_input, name= "java_user_input"),
        path("/java_date",views.java_date, name= "java_date"),
        path("/java_arraylist",views.java_arraylist, name= "java_arraylist"),
        path("/java_hashmap",views.java_hashmap, name= "java_hashmap"),
        path("/java_wrapper_classes",views.java_wrapper_classes, name= "java_wrapper_classes"),
        path("/java_try_catch",views.java_try_catch, name= "java_try_catch"),
        path("/java_files",views.java_files, name= "java_files"),
        path("/java_files_create",views.java_files_create, name= "java_files_create"),
        path("/java_files_read",views.java_files_read, name= "java_files_read"),
        path("/java_files_delete",views.java_files_delete, name= "java_files_delete"),
        path("/java_add_two_numbers",views.java_add_two_numbers, name= "java_add_two_numbers"),
        path("/java_ref_keyword",views.java_ref_keyword, name= "java_ref_keyword"),
        path("/ref_keyword_abstract",views.ref_keyword_abstract, name= "ref_keyword_abstract"),
        path("/ref_keyword_boolean",views.ref_keyword_boolean, name= "ref_keyword_boolean"),
        path("/ref_keyword_break",views.ref_keyword_break, name= "ref_keyword_break"),
        path("/ref_keyword_byte",views.ref_keyword_byte, name= "ref_keyword_byte"),
        path("/ref_keyword_case",views.ref_keyword_case, name= "ref_keyword_case"),
        path("/ref_keyword_catch",views.ref_keyword_catch, name= "ref_keyword_catch"),
        path("/ref_keyword_char",views.ref_keyword_char, name= "ref_keyword_char"),
        path("/ref_keyword_class",views.ref_keyword_class, name= "ref_keyword_class"),
        path("/ref_keyword_continue",views.ref_keyword_continue, name= "ref_keyword_continue"),
        path("/ref_keyword_default",views.ref_keyword_default, name= "ref_keyword_default"),
        path("/ref_keyword_do",views.ref_keyword_do, name= "ref_keyword_do"),
        path("/ref_keyword_double",views.ref_keyword_double, name= "ref_keyword_double"),
        path("/ref_keyword_else",views.ref_keyword_else, name= "ref_keyword_else"),
        path("/ref_keyword_enum",views.ref_keyword_enum, name= "ref_keyword_enum"),
        path("/ref_keyword_extends",views.ref_keyword_extends, name= "ref_keyword_extends"),
        path("/ref_keyword_final",views.ref_keyword_final, name= "ref_keyword_final"),
        path("/ref_keyword_finally",views.ref_keyword_finally, name= "ref_keyword_finally"),
        path("/ref_keyword_float",views.ref_keyword_float, name= "ref_keyword_float"),
        path("/ref_keyword_for",views.ref_keyword_for, name= "ref_keyword_for"),
        path("/ref_keyword_if",views.ref_keyword_if, name= "ref_keyword_if"),
        path("/ref_keyword_implements",views.ref_keyword_implements, name= "ref_keyword_implements"),
        path("/ref_keyword_import",views.ref_keyword_import, name= "ref_keyword_import"),
        path("/ref_keyword_instanceof",views.ref_keyword_instanceof, name= "ref_keyword_instanceof"),
        path("/ref_keyword_int",views.ref_keyword_int, name= "ref_keyword_int"),
        path("/ref_keyword_interface",views.ref_keyword_interface, name= "ref_keyword_interface"),
        path("/ref_keyword_long",views.ref_keyword_long, name= "ref_keyword_long"),
        path("/ref_keyword_new",views.ref_keyword_new, name= "ref_keyword_new"),
        path("/ref_keyword_package",views.ref_keyword_package, name= "ref_keyword_package"),
        path("/ref_keyword_private",views.ref_keyword_private, name= "ref_keyword_private"),
        path("/ref_keyword_protected",views.ref_keyword_protected, name= "ref_keyword_protected"),
        path("/ref_keyword_public",views.ref_keyword_public, name= "ref_keyword_public"),
        path("/ref_keyword_return",views.ref_keyword_return, name= "ref_keyword_return"),
        path("/ref_keyword_short",views.ref_keyword_short, name= "ref_keyword_short"),
        path("/ref_keyword_static",views.ref_keyword_static, name= "ref_keyword_static"),
        path("/ref_keyword_super",views.ref_keyword_super, name= "ref_keyword_super"),
        path("/ref_keyword_switch",views.ref_keyword_switch, name= "ref_keyword_switch"),
        path("/ref_keyword_this",views.ref_keyword_this, name= "ref_keyword_this"),
        path("/ref_keyword_throw",views.ref_keyword_throw, name= "ref_keyword_throw"),
        path("/ref_keyword_throws",views.ref_keyword_throws, name= "ref_keyword_throws"),
        path("/ref_keyword_try",views.ref_keyword_try, name= "ref_keyword_try"),
        path("/ref_keyword_void",views.ref_keyword_void, name= "ref_keyword_void"),
        path("/ref_keyword_while",views.ref_keyword_while, name= "ref_keyword_while"),
        path("/java_ref_string",views.java_ref_string, name= "java_ref_string"),
        path("/ref_string_charat",views.ref_string_charat, name= "ref_string_charat"),
        path("/ref_string_codepointat",views.ref_string_codepointat, name= "ref_string_codepointat"),
        path("/ref_string_codepointbefore",views.ref_string_codepointbefore, name= "ref_string_codepointbefore"),
        path("/ref_string_codepointcount",views.ref_string_codepointcount, name= "ref_string_codepointcount"),
        path("/ref_string_compareto",views.ref_string_compareto, name= "ref_string_compareto"),
        path("/ref_string_comparetoignorecase",views.ref_string_comparetoignorecase, name= "ref_string_comparetoignorecase"),
        path("/ref_string_concat",views.ref_string_concat, name= "ref_string_concat"),
        path("/ref_string_contains",views.ref_string_contains, name= "ref_string_contains"),
        path("/ref_string_contentequals",views.ref_string_contentequals, name= "ref_string_contentequals"),
        path("/ref_string_copyvalueof",views.ref_string_copyvalueof, name= "ref_string_copyvalueof"),
        path("/ref_string_endswith",views.ref_string_endswith, name= "ref_string_endswith"),
        path("/ref_string_equals",views.ref_string_equals, name= "ref_string_equals"),
        path("/ref_string_equalsignorecase",views.ref_string_equalsignorecase, name= "ref_string_equalsignorecase"),
        path("/ref_string_hashcode",views.ref_string_hashcode, name= "ref_string_hashcode"),
        path("/ref_string_indexof",views.ref_string_indexof, name= "ref_string_indexof"),
        path("/ref_string_isempty",views.ref_string_isempty, name= "ref_string_isempty"),
        path("/ref_string_lastindexof",views.ref_string_lastindexof, name= "ref_string_lastindexof"),
        path("/ref_string_length",views.ref_string_length, name= "ref_string_length"),
        path("/ref_string_replace",views.ref_string_replace, name= "ref_string_replace"),
        path("/ref_string_startswith",views.ref_string_startswith, name= "ref_string_startswith"),
        path("/ref_string_tolowercase",views.ref_string_tolowercase, name= "ref_string_tolowercase"),
        path("/ref_string_touppercase",views.ref_string_touppercase, name= "ref_string_touppercase"),
        path("/ref_string_trim",views.ref_string_trim, name= "ref_string_trim"),
        path("/java_ref_math",views.java_ref_math, name= "java_ref_math"),
        path("/java_examples",views.java_examples, name= "java_examples"),
        path("/ref_math_abs",views.ref_math_abs, name= "ref_math_abs"),
        path("/ref_math_acos",views.ref_math_acos, name= "ref_math_acos"),
        path("/ref_math_asin",views.ref_math_asin, name= "ref_math_asin"),

        

    ]