# TypeScript Resources

### setup typescript

##  Steps
        npm i typescript
        npx tsc --init
        change rootDir and OutDir form tsconfig file.
## Types
    Number - `number`
    String - `string`
    Boolean - `boolean`
    Null 
    Udefined
    Void
    Object
    Array
    Tuple
    Any - skip the typechecking
    Never
Note :- Use compiler flag `noImplicitAny` to flag any implicit any as an error
#### Type inference
    creating a variable and assigning it to a particular value, TypeScript will use the value as its type
Function
#### Type Alias
    A type alias is exactly that - a name for any type
        Syntax:
        type Point = {
            x:number;
            y:number;
        }

        If id  would be array, can we push values to array in case of READONLY,?

#### Union
    It give the power of mixing the data types and froming own data type using pipe operator
#### Tuples
     
#### Enum 

#### Interface
    loosly type of class which define the structure of the class or object any thing. But it doesnot contains the logic difined in it.

      Difference between Interface and Types
        -> A type cannot be changed after being created. But we can add new field in an existing interface
        -> A type can be extended by using intersections but an interface can be extended by using ` `extends` key word.