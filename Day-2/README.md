to create a component (ng g c `filename` | `folder/filename` --skip-tests --flat) in termenal

## One way binding (ts -> html)
    .ts "logic"
    ```
        export class name{
            // define attributes
            var: dataType = value;
            isRed: boolean = true;

            // Object
            obj: {
                id: number,
                name: string
            } = {
                // initial values
                id: 1,
                name: "ppl"
            }

            // Images
            imageSrc01: string = 'img01.png' // (./public/) found in public folder
            imageSrc02: string = 'img02.png' // (./public/imgs) found in folder inside public folder
        }
    ```
    .html "view"
    ```
    <p class="primative">{{var}}</p>
    <p class="obj">Name: {{obj.name}}</p>
    <p class="condition">Active: {{isRed ? "Not Active" : "Active"}}</p>

    <img src="{{imageSrc01}}" alt="Why ppl Suffer :1">
    <img src="imgs/{{imageSrc02}}" alt="Why?"> 
    /* Attribute Binding: 
    ** <tag [att] = 'varName' />
    ** <img [src]="imageSrc01" alt="another-way-binding">
    */
    ```


## Event binding (html -> ts)

**ts file**
    ```
    export class name{
        // Define function
        f1(){
           console.log("Success!"); 
        }
        f2(e: dataType){
           console.log("Success!"); 
        }
    }
    ```
**html file**
    ```
    <btn (eventHandler) = "f1()">Click</btn>
    <btn (click) = "f2($event)">Click</btn> /* event Obj */
    ```

## Two Way binding (html -><- ts)
**ts file**
```
    @Component({
        imports: [FormsModule] // to take/store data
    })
    export class name{
        // Define function
        data: string = ''; // Global

        // Method 1
        getInput(e: event){
           console.log(e.target.value); 
           // for better performance
           let target = e.target as HTMLInputElement;
           console.log(target.value); 
           /* ---------------------- */
           this.data = target.value;
           console.log(this.data); 
        }

        // Method 2 **{!}: to ignore the initial value
        nameMD!: string
        ageMD!: number

        dataSubmit(){
            console.log(this.nameMD)
            console.log(this.ageMD)
        }
    }
```
**html file**
    ```
    <input
        type="text"
        (input) = "getInput($event)"
    />
    <p>Data: {{data}}</p>
    /* Send all data by submitting btn */
    <input
        type="text"
        name="user-name"
        [(ngModel)] = "nameMD"
    />
    <input
        type="number"
        name="user-age"
        [(ngModel)] = "ageMD"
    />
    <btn (click)= "dataSubmit()" >submit</p>
    ```

## Directives
**ts file**
    ```
    export class test{
        arrData: string[] = ['text 1', 'text 2', 'test 3']
        objData: {
            id: number, name: string
        }[] = [{id: 1, name: 'someone'},{id: 2, name: 'someonelse'}]

        obj: {name: string} | undefined = {name: "body"}; // ex. case use find()

        istue: boolean = false
        toggle(){
            this.istrue = !this.istrue;
        }
    }
    ```
**html file**
    ```
    <>
    /* @for() == *ngFor="let data of arrData" --> import component [CommonModule]*/
        /* Array */
        @for (data of arrData; track $index){
            <p>{{data}}</p>
            /* Other usful KEYWORDS that can be used */
            <p>{{$even}}: select even index</p>
            <p>{{$odd}}: select odd index</p>
            <p>{{$first}}: select first array (index == 0)</p>
        } @empty{
            // Case the Array is empty
            <p> No Data Here! </p>
        }
    ```
        /* Object */
        @for (data of objData; track data.id){
            <p>ID: {{data.id}}</p>
            <p>Name: {{data.name}}</p>
        } 
        // safe Navigation
        <p> {{obj?.name}} </p>
    </>
    ```
        @if (istrue){
            <p> Some Text when click on btn it disapear/ toggle/ collapse</p>
        }
        <btn (click)="toggle()">Toggle</btn>
        @else if(condition){} 
        @else(){}
    ```
        <p [ngClass]="{}"> </p> // Task-Today
        <p [style.property] = " /*style-condition-when?*/ "> </p> // takes one property
        <p [ngStyle] = " /*object*/ {property: condition?, ... } "> </p> // take multi-property