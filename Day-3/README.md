# Day3

## Send Data from Parent -> Child
    App.componrnt.ts (parent):
        ```
            export calss c{
                // data that will be sended
                pVar: string = "Hello Child"
            }
        ```
    Contact.component.ts (child)
        ```
        /* step 01. - Define a variable that has same dataType as 'pVar' */
        /* step 02. - Add a @Input Decorator to it, (this var here its value comming from outside) */

            @Input() cVar: string = ''

        ```
    App.component.html
        ```
        /* step 03. - Binding Value */
            <app-contact [cVar] = 'pVar' />
        ```
    _____________________________________________________

                        ##Object##
    
    std-details.componrnt.ts (child):
        ```
            export class c{
                // (01) define:
                // (02) decorate:
                //@Input() obj: {id: number, name: string, age: number}[] = []

                // If data must be inputed (no empty allowed) => can take an object with property 
                @Input({required: true}) obj: {id: number, name: string, age: number}[] = []
            }
        ```
    std-details.component.html
        ```
        // (04) Display:
            <p> Name: {{obj.name}} </p>
            <p> Age : {{obj.age }} </p>
        ```
    student.componrnt.ts (parent):
        ```
            imports: [stdDetailsComponent]
            export class c{
                stdData: {id: number, name: string, age: number}[] = [
                    {
                        id: 1, name: "ppl 1", age: 32
                    },
                    {
                        id: 2, name: 'ppl 2', age: 14
                    },
                ]
            }
        ```
    student.component.html
        ```
        // (03) Bind:
            <app-std-details [obj] = 'stdData[0]' /> // First Student
            <app-std-details [obj] = 'stdData[1]' /> // Second Student

            <app-std-details /> // when add required, this will cause ERROR
        ```

## Send Data from Child -> Parent
    App.componrnt.ts (child):
        ```
            export calss c{
                // getData(){}
                msg: string = ''
                getData(data: string){
                    msg = data;
                }
            }
        ```
    App.component.html
        ```
        // <app-login (myEvent) = 'getData()' />

        <app-login (myEvent) = 'getData($event)' />
        <p> {{msg}} </p>
        ```
    
    Login.component.ts (parent)
        ```
            @Output() myEvent = new EventEmitter()
            export calss c{
                sendData(){
                    // this.myEvent.emitt()
                    this.myEvent.emitt("Hello msg")
                }
            }

        ```
    Login.component.html
        ```
        <btn (click) = 'sendData()'>Send</btn>
        ```

## Send Data from Parent <-> Child
    Card.component.ts ():
        ```
            export class c{
                @Input orgName: string = ''
                @Output addBtn = new Event Emitter<number>()

                count: number = 0
                handleAdd(data: number){
                    this.count += 1;
                    this.addBtn.emit(this.count)
                }
            }
        ```
    Card.component.html
        ```
            <h1> {{orgName}} </h1>
            <btn (click) = 'handleAdd()'> Add New Product </btn>
            <p> Total count: {{count}} </p>
        ```


    App.component.ts ():
        ```
            export class c{
                countData: number = 0
                getData(value: number){
                    this.countData = value
                }
            }
        ```
    App.component.html
        ```
            <app-card 
                [orgName] = 'companyName'
                (addBtn) = 'handleAdd($event)' 
            />   
        ```


## Component Cycle/ Interface
### OnInit Interface
    login.component.ts:
        ```
            export class c implements OnInit{
                constructor(){
                    // Fire Event here: Run Automatic
                    // But I want to Run after Constructor finish
                    // Component Not rendered YET
                    // Used for init properties, for injection
                    (1): first to RUN ..
                }
                orgName: string = 'ITI'
                ngOnInit(): void{
                    (2): AUTO RUN after the constructor 
                    this.myEvent.emit(this.orgName)
                }
            }
        ```
### OnChanges Interface
    Product-details.components.ts
        ```
            export class c implements OnChanges{
                prevPrice: any
                @Input() product!: {id: number, name: string, price: number}

                // TypeObj: {current-value:{}, firstChange?, prev-value: {} }
                ngOnChanges(changes: SimpleChanges): void{
                    this.prevPrice = changes['product'].PreviousValue.
                }
            }
        ```
    Product-details.components.html
        ```
            <p *ngIf=(prevoiusPrice) > // 'undefined' when first run, cause ERROR
                Price Before: {{previousPrice | currency}}
            </p>
            <p> Price After: {{product.price | currency}} </p>

        ```
    Products.components.ts
        ```
        imports: [ProductDetails],
            export class c{
                products: {id: number, name: string, price: number} = {//data}
                getOffer(){
                    this.products = {...this.products, price: 200}
                }
            }
        ```
    Products.components.html
        ```
            <app-details [product] = 'products' />
            <btn (click) = 'getOffer()'> Get Offer </btn>
        ```
### AfterViewInit
    Product-details.components.ts
        ```
            export class c implements AfterViewInit{
                @ViewChild('myPara') myElement: ElementRef;
                // htmlReference

                ngAfterInit(): void{
                    console.log(this.myElement) // Obj with all its html data
                    console.log(this.myElement.nativeElement) // <p>
                }
            }
        ```
    Product-details.components.html
    ```
    <p #myPara> some txtx </p>
    ```


## PIPES : Data Transformation
    ```
    <p>{{ "hello world" | uppercase }}</p> // "HELLO WORLD"
    <p>{{ "hello world" | titlecase }}</p> // "Hello World"
    <p>{{ "400" | currency }}</p>         // $400.00
    <p>{{ dateObj | date }}</p>         // May 20, 2025
    <p>{{ dateObj | date: "YYYY-mm" }}</p> // 2025-19