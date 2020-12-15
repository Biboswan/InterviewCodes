/**
 * let and const variables are hoisted but they are under script scope not global
 * They can't be referenced before they are initlized in the previous lines unlike var
 * Temporal Dead Zone : time between variable is hoisted and till it gets initialized with some value to make it accessible(let,const)
 * 'let' variables can't be redeclared;
 * let variables are not attached to the window(or this) object like var variables
 * let, const are block scoped (inside a block memory), but var is in global scope (global memory)
 */
