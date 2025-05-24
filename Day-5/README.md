# Day5
## Forms
### Template-Driven Form
- Uses *ngModel* for two-way binding
- Good for simple forms
```
// login.component.ts
onSubmit(form: NgForm) {
  console.log(form.value); // {username: '', password: ''}
}
```
<!-- login.component.html -->
<form #loginForm="ngForm" (ngSubmit)="onSubmit(loginForm)">
  <input 
    type="text" 
    name="username" 
    ngModel 
    required
  >
  <input 
    type="password" 
    name="password" 
    ngModel 
    required
  >
  <button type="submit">Login</button>
</form>
```

### ReactiveForms
- Uses *FormGroup*, *FormControl*
- More control, better for complex forms
```
// form.component.ts
import { FormGroup, FormControl } from '@angular/forms';
// 01. Define form object
appForm = new FormGroup({
  username: new FormControl('Default-Value', Validators.required),
  password: new FormControl('', Validators.required)
});

onSubmit() {
  console.log(this.appForm.value);
}
get getName(){
    this.appForm.controls.['username']
    // this.appForm.get('username')
}
```
<!-- form.component.html -->
<!-- 02. Binding form with formObj -->
<form [formGroup]="appForm" (ngSubmit)="onSubmit()">
  <input 
    type="text" 
    formControlName="username"
  >
  <input 
    type="password" 
    formControlName="password"
  >
  <button type="submit">submit</button>
</form>
```

## DI Design Pattern
(ng g s Service-name)
```
// Service-name
export class Service-name-c {
  // Array of data
  data: string[] = [
    'option 1',
    'option 2',
    'option 3',
  ]
  getCurrentData(): Observable<string> {
    let obs = new Observable<string>((observer) => {
      let counter = 0;
      // call-back function every 3 sec
      let myInt = setInterval(() => {
        //it is an OBJECT with next() that stores the next calling value
        observer.next(this.data[counter++])
      }, 3000)
      // when obsv know when to stop?
      if(this.data.length == counter){
        observer.complete() // unsupscribe()
      }
      if(this.data[counter] == ''){
        observer.error('Empty Data') // unsupscribe()
      }
      // end of call-back function
      return {
        /* Called in 3 cases:
          1. when obs is complete (Auto)
          2. when ERROR happend (Auto)
          3. when we manually call it
        */
        unsubscribe(){
          // close open Intererval (setIntervall)
          clearInterval(myInt)
        }
      }
    })
    return obs
  }
}
```

```
// home.ts
export class home implements OnInit, OnDestroy{
  // 01. Create Object/ instance from SERVICE
  constructor(private ps: Service-name-c){}
  // 03. Diplay Current Data
  currentData!: string;
  // 04. Define var to store oninit
  mySubscribe!: Subscription

  ngOnInit(): void{
    // 02. Extract Data
    this.mySubscribe = 
    this.ps.getCurrentData(/*returns obs*/).subscribe({
      /*hold /stores response*/ 
      next: (res) => { this.currentData = res },
      complete: () => {},
      error: (error) => {},
    })
  }

  ngOnDestroy(): void{
    // 04. (ex) Change in pages (goto another page) 
    this.mySubscribe.unsubscribe()
  }
}
```
```
<!-- home.html -->
<p> {{currentData}} </p>
```
