class Sidebar extends React.Component {
  state = {
    shows: ["none", "none", "none", "none", "none", "none"],
    refs: ["none", "none", "none"],
  };

  getShows = (index) => {
    const shows = this.state.shows;
    shows[index] = shows[index].localeCompare("block") === 0 ? "none" : "block";

    for (let i = 0; i < shows.length; i++) {
      if (i != index) shows[i] = "none";
    }
    this.setState({ shows });
  };

  getRefs = (index) => {
    const refs = this.state.refs;
    refs[index] = refs[index].localeCompare("block") === 0 ? "none" : "block";

    for (let i = 0; i < refs.length; i++) {
      if (i != index) refs[i] = "none";
    }
    this.setState({ refs });
  };

  render() {
    const { shows, refs } = this.state;
    return (
      <div className="sidebar" id="sidebar">
        <div>
          <div className="items" onClick={() => this.getShows(0)}>
            Java Basic
          </div>
          <div style={{ display: shows[0] }}>
            <a target="_top" className="item" href="java_home">
              Java Home
            </a>
            <a target="_top" className="item" href="java_intor">
              Java Intro
            </a>
            <a target="_top" className="item" href="java_get_started">
              Java Get Started
            </a>
            <a target="_top" className="item" href="java_syntax">
              Java Syntax
            </a>
            <a target="_top" className="item" href="java_comments">
              Java Comments
            </a>
            <a target="_top" className="item" href="java_variables">
              Java Variables
            </a>
            <a target="_top" className="item" href="java_data_types">
              Java Data Types
            </a>
            <a target="_top" className="item" href="java_type_casting">
              Java Type Casting
            </a>
            <a target="_top" className="item" href="java_operators">
              Java Operators
            </a>
            <a target="_top" className="item" href="java_strings">
              Java Strings
            </a>
            <a target="_top" className="item" href="java_math">
              Java Math
            </a>
            <a target="_top" className="item" href="java_booleans">
              Java Booleans
            </a>
            <a target="_top" className="item" href="java_conditions">
              Java If..Else
            </a>
            <a target="_top" className="item" href="java_switch">
              Java Switch
            </a>
            <a target="_top" className="item" href="java_while_loop">
              Java While Loop
            </a>
            <a target="_top" className="item" href="java_for_loop">
              Java For Loop
            </a>
            <a target="_top" className="item" href="java_break">
              Java Break/Continue
            </a>
            <a target="_top" className="item" href="java_arrays">
              Java Arrays
            </a>
          </div>
        </div>
        <div>
          <div className="items" onClick={() => this.getShows(1)}>
            Java Methods
          </div>
          <div style={{ display: shows[1] }}>
            <a target="_top" className="item" href="java_methods">
              Java Methods
            </a>
            <a target="_top" className="item" href="java_methods_param">
              Java Method Parameters
            </a>
            <a target="_top" className="item" href="java_methods_overloading">
              Java Methods Overloading
            </a>
          </div>
        </div>
        <div>
          <div className="items" onClick={() => this.getShows(2)}>
            Java Classes
          </div>
          <div style={{ display: shows[2] }}>
            <a target="_top" className="item" href="java_oop">
              Java OOP
            </a>
            <a target="_top" className="item" href="java_classes">
              Java Classes\Objects
            </a>
            <a target="_top" className="item" href="java_class_attributes">
              Java Class Attributes
            </a>
            <a target="_top" className="item" href="java_class_methods">
              Java Class Methods
            </a>
            <a target="_top" className="item" href="java_constructors">
              Java Constructors
            </a>
            <a target="_top" className="item" href="java_modifier">
              Java Modifier
            </a>
            <a target="_top" className="item" href="java_encapsulation">
              Java Encapsulation
            </a>
            <a target="_top" className="item" href="java_packages">
              Java Packages / API
            </a>
            <a target="_top" className="item" href="java_inheritance">
              Java Inheritance
            </a>
            <a target="_top" className="item" href="java_polymorphism">
              Java Polymorphism
            </a>
            <a target="_top" className="item" href="java_inner_classes">
              Java Inner Classes
            </a>
            <a target="_top" className="item" href="java_abstract">
              Java Abstraction
            </a>
            <a target="_top" className="item" href="java_interface">
              Java Interface
            </a>
            <a target="_top" className="item" href="java_enums">
              Java Enums
            </a>
            <a target="_top" className="item" href="java_user_input">
              java User Input
            </a>
            <a target="_top" className="item" href="java_date">
              java Date
            </a>
            <a target="_top" className="item" href="java_arraylist">
              Java ArrayList
            </a>
            <a target="_top" className="item" href="java_hashmap">
              Java HashMap
            </a>
            <a target="_top" className="item" href="java_wrapper_classes">
              java Wrapper Classes
            </a>
            <a target="_top" className="item" href="java_try_catch">
              Java Exceptions
            </a>
          </div>
        </div>
        <div>
          <div className="items" onClick={() => this.getShows(3)}>
            Java File Handing
          </div>
          <div style={{ display: shows[3] }}>
            <a target="_top" className="item" href="java_files">
              Java Files
            </a>
            <a target="_top" className="item" href="java_files_create">
              Java Create/Write Files
            </a>
            <a target="_top" className="item" href="java_files_read">
              Java Read Files
            </a>
            <a target="_top" className="item" href="java_files_delete">
              Java Delete Files
            </a>
          </div>
        </div>
        <div>
          <div className="items" onClick={() => this.getShows(4)}>
            Java Reference
          </div>
          <div style={{ display: shows[4] }}>
            <div
              className="items"
              onClick={() => this.getRefs(0)}
              style={{ backgroundColor: "#f133" }}
            >
              Java Keywords
            </div>
            <div style={{ display: refs[0] }}>
              <a target="_top" className="item" href="java_ref_keyword">
                All Keywords
              </a>
              <a target="_top" className="item" href="ref_keyword_abstract">
                abstract
              </a>
              <a target="_top" className="item" href="ref_keyword_boolean">
                boolean
              </a>
              <a target="_top" className="item" href="ref_keyword_break">
                break
              </a>
              <a target="_top" className="item" href="ref_keyword_byte">
                byte
              </a>
              <a target="_top" className="item" href="ref_keyword_case">
                case
              </a>
              <a target="_top" className="item" href="ref_keyword_catch">
                catch
              </a>
              <a target="_top" className="item" href="ref_keyword_char">
                char
              </a>
              <a target="_top" className="item" href="ref_keyword_class">
                class
              </a>
              <a target="_top" className="item" href="ref_keyword_continue">
                continue
              </a>
              <a target="_top" className="item" href="ref_keyword_default">
                default
              </a>
              <a target="_top" className="item" href="ref_keyword_do">
                do
              </a>
              <a target="_top" className="item" href="ref_keyword_double">
                double
              </a>
              <a target="_top" className="item" href="ref_keyword_else">
                else
              </a>
              <a target="_top" className="item" href="ref_keyword_enum">
                enum
              </a>
              <a target="_top" className="item" href="ref_keyword_extends">
                extends
              </a>
              <a target="_top" className="item" href="ref_keyword_final">
                final
              </a>
              <a target="_top" className="item" href="ref_keyword_finally">
                finally
              </a>
              <a target="_top" className="item" href="ref_keyword_float">
                float
              </a>
              <a target="_top" className="item" href="ref_keyword_for">
                for
              </a>
              <a target="_top" className="item" href="ref_keyword_if">
                if
              </a>
              <a target="_top" className="item" href="ref_keyword_implements">
                implements
              </a>
              <a target="_top" className="item" href="ref_keyword_import">
                import
              </a>
              <a target="_top" className="item" href="ref_keyword_instanceof">
                instanceof
              </a>
              <a target="_top" className="item" href="ref_keyword_int">
                int
              </a>
              <a target="_top" className="item" href="ref_keyword_interface">
                interface
              </a>
              <a target="_top" className="item" href="ref_keyword_long">
                long
              </a>
              <a target="_top" className="item" href="ref_keyword_new">
                new
              </a>
              <a target="_top" className="item" href="ref_keyword_package">
                package
              </a>
              <a target="_top" className="item" href="ref_keyword_private">
                private
              </a>
              <a target="_top" className="item" href="ref_keyword_protected">
                protected
              </a>
              <a target="_top" className="item" href="ref_keyword_public">
                public
              </a>
              <a target="_top" className="item" href="ref_keyword_return">
                return
              </a>
              <a target="_top" className="item" href="ref_keyword_short">
                short
              </a>
              <a target="_top" className="item" href="ref_keyword_static">
                static
              </a>
              <a target="_top" className="item" href="ref_keyword_super">
                super
              </a>
              <a target="_top" className="item" href="ref_keyword_switch">
                switch
              </a>
              <a target="_top" className="item" href="ref_keyword_this">
                this
              </a>
              <a target="_top" className="item" href="ref_keyword_throw">
                throw
              </a>
              <a target="_top" className="item" href="ref_keyword_throws">
                throws
              </a>
              <a target="_top" className="item" href="ref_keyword_try">
                try
              </a>
              <a target="_top" className="item" href="ref_keyword_void">
                void
              </a>
              <a target="_top" className="item" href="ref_keyword_while">
                while
              </a>
            </div>
            <div
              className="items"
              onClick={() => this.getRefs(1)}
              style={{ backgroundColor: "#f133" }}
            >
              Java String Methods
            </div>
            <div style={{ display: refs[1] }}>
              <a target="_top" className="item" href="java_ref_string">
                All String Methods
              </a>
              <a target="_top" className="item" href="ref_string_charat">
                charAt()
              </a>
              <a target="_top" className="item" href="ref_string_codepointat">
                codePointAt()
              </a>
              <a
                target="_top"
                className="item"
                href="ref_string_codepointbefore"
              >
                codePointBefore()
              </a>
              <a
                target="_top"
                className="item"
                href="ref_string_codepointcount"
              >
                codePointCount()
              </a>
              <a target="_top" className="item" href="ref_string_compareto">
                compareTo()
              </a>
              <a
                target="_top"
                className="item"
                href="ref_string_comparetoignorecase"
              >
                compareToIgnoreCase()
              </a>
              <a target="_top" className="item" href="ref_string_concat">
                concat()
              </a>
              <a target="_top" className="item" href="ref_string_contains">
                contains()
              </a>
              <a target="_top" className="item" href="ref_string_contentequals">
                contentEquals()
              </a>
              <a target="_top" className="item" href="ref_string_copyvalueof">
                copyValueOf()
              </a>
              <a target="_top" className="item" href="ref_string_endswith">
                endsWith()
              </a>
              <a target="_top" className="item" href="ref_string_equals">
                equals()
              </a>
              <a
                target="_top"
                className="item"
                href="ref_string_equalsignorecase"
              >
                equalsIgnoreCase()
              </a>
              <a target="_top" className="item" href="ref_string_hashcode">
                hashCode()
              </a>
              <a target="_top" className="item" href="ref_string_indexof">
                indexOf()
              </a>
              <a target="_top" className="item" href="ref_string_isempty">
                isEmpty()
              </a>
              <a target="_top" className="item" href="ref_string_lastindexof">
                lastIndexOf()
              </a>
              <a target="_top" className="item" href="ref_string_length">
                length()
              </a>
              <a target="_top" className="item" href="ref_string_replace">
                replace()
              </a>
              <a target="_top" className="item" href="ref_string_startswith">
                startsWith()
              </a>
              <a target="_top" className="item" href="ref_string_tolowercase">
                toLowerCase()
              </a>
              <a target="_top" className="item" href="ref_string_touppercase">
                toUpperCase()
              </a>
              <a target="_top" className="item" href="ref_string_trim">
                trim()
              </a>
            </div>
            <div
              className="items"
              onClick={() => this.getRefs(2)}
              style={{ backgroundColor: "#f133" }}
            >
              Java Math Methods
            </div>
            <div style={{ display: refs[2] }}>
              <a target="_top" className="item" href="java_ref_math">
                Java Math Methods
              </a>
              <a target="_top" className="item" href="ref_math_abs">
                Java abs() Method
              </a>
              <a target="_top" className="item" href="ref_math_acos">
                Java acos() Method
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="items" onClick={() => this.getShows(5)}>
            Java Examples
          </div>
          <div style={{ display: shows[5] }}>
            {/* <a target="_top" className="item" href="java_examples">
              Java Examples
            </a> */}
            <a target="_top" className="item" href="java_examples">
              Java Exercises
            </a>
            <a target="_top" className="item" href="java_examples">
              Java Quiz
            </a>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Sidebar />, document.querySelector("#sidebar-container"));
